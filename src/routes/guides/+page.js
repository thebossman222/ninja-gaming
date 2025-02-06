import { redirect } from '@sveltejs/kit';

export async function load({ fetch }) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const guides =  await res.json();
    

    if(res.ok) {
        return {
                guides
            }
        }

        throw redirect(301, '/error');
}
