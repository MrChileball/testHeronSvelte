import { writable } from 'svelte/store';

const count = writable(0);

count.subscribe((value) => {
	console.log(value);
}); 



count.update((n) => n + 1); // logs '2'

//holis