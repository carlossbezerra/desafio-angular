import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { InMemoryService } from '../../services/in-memory.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    imports:[FormsModule, CommonModule],
    standalone:true
})
export class PostComponent implements OnInit {
    posts: any[] = [];
    isModalOpen = false;
    modalTitle = '';
    selectedPost: any = { title: '', body: '' };

    constructor(private apiService: ApiService, private inMemoryService: InMemoryService) { }

    ngOnInit(): void {
        this.loadPosts();
    }

    loadPosts(): void {
        this.apiService.getPosts().subscribe({
            next: (data) => {
                this.posts = data;
                this.inMemoryService.setPosts(data);
            },
            error: (err: any) => console.error('Erro ao carregar posts:', err),
        });
    }

    openCreateModal(): void {
        this.modalTitle = 'Criar Novo Post';
        this.selectedPost = { title: '', body: '' };
        this.isModalOpen = true;
    }

    openEditModal(post: any): void {
        this.modalTitle = 'Editar Post';
        this.selectedPost = { ...post };
        this.isModalOpen = true;
    }

    closeModal(): void {
        this.isModalOpen = false;
    }

    submitForm(): void {
        if (this.selectedPost.id) {
            // Editar post
            this.apiService.updatePost(this.selectedPost.id, this.selectedPost).subscribe({
                next: () => {
                  this.inMemoryService.updatePost(this.selectedPost.id, this.selectedPost);
                    this.closeModal();
                    this.loadPosts();
                },
                error: (err: any) => console.error('Erro ao atualizar post:', err),
            });
        } else {
            // Criar novo post
            this.apiService.createPost(this.selectedPost).subscribe({
                next: (newPost) => {
                  this.inMemoryService.addPost(newPost);
                    this.closeModal();
                    this.loadPosts();
                },
                error: (err: any) => console.error('Erro ao criar post:', err),
            });
        }
    }

    deletePost(postId: number): void {
        this.apiService.deletePost(postId).subscribe({
            next: () => {
                this.inMemoryService.deletePost(postId);
                this.posts = this.posts.filter(post => post.id !== postId);
                console.log('Post excluído com sucesso!');
                this.loadPosts();
            },
            error: (err: any) => console.error('Erro ao excluir post:', err),
        });
    }
}