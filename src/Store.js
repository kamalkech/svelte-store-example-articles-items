import { writable } from 'svelte/store';

const store = writable([
	{
		id: 1,
		title: 'First article',
		author: 'Kamal Sahmoud'
	},
	{
		id: 2,
		title: 'Second article',
		author: 'Kamal Sahmoud'
	}
]);

export default store;
