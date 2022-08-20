import create from 'zustand';
import { getCount } from '@/utils/countStorage';

interface countState {
	count: number;
	increment: () => void;
}

export const countStore = create<countState>(set => ({
	count: getCount(),
	increment: () => set(state => ({ count: Number(state.count) + 1 }))
}));
