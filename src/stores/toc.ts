import { create } from 'zustand'

interface TocState {
    activeId: string | null
    setActive: (id: string | null) => void
}

export const useTocStore = create<TocState>((set) => ({
    activeId: null,
    setActive: (id) => set({ activeId: id })
}))
