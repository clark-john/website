import create from 'zustand';

interface chevronState {
	isFlipped: boolean,
	reset: () => void,
	flip: () => void,
}

export const chevronStore = create<chevronState>(set => ({
	isFlipped: false,
	reset: () => set(() => ({ isFlipped: false })),
	flip: () => set(state => ({ isFlipped: !state.isFlipped }))
}));
