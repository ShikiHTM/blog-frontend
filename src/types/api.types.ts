export interface ApiResponse {
    id: string;
    slug: string;
    title: string;
    topic: string;
    cover?: string;
    views: number;
    likes: number;
    content?: string;
    created_at: string;
    updated_at: string;
}
