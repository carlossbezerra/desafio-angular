import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InMemoryService {
    private posts: any[] = [];

    setPosts(posts: any[]): void {
        this.posts = posts;
    }

    getPosts(): any[] {
        return this.posts;
    }

    addPost(post: any): void {
        this.posts.push(post);
    }

    updatePost(postId: number, updatedPost: any): void {
        const index = this.posts.findIndex(post => post.id === postId);
        if (index !== -1) {
            this.posts[index] = updatedPost;
        }
    }

    deletePost(postId: number): void {
        this.posts = this.posts.filter(post => post.id !== postId);
    }
}
