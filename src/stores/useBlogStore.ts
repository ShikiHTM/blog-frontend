import { create } from 'zustand';
import { ApiResponse } from '@/types/api.types';
import { api } from '@/lib/ky';

interface BlogState {
    blogs: ApiResponse[];
    isLoading: boolean;
    isError: boolean;
    hasFetched: boolean;
    fetch: () => Promise<void>;
}

export const useBlogStore = create<BlogState>((set, get) => ({
    blogs: [],
    isLoading: false,
    isError: false,
    hasFetched: false,

    fetch: async () => {
        const state = get();

        if (state.isLoading || state.hasFetched) return;

        set({ isLoading: true, isError: false });

        try {
            const data = await api.get('posts').json<ApiResponse[]>();
            set({
                blogs: data,
                isLoading: false,
                hasFetched: true,
            });
        } catch (e) {
            console.error('Fetch error:', e);
            set({ isLoading: false, isError: true });
        }
    },
}));
