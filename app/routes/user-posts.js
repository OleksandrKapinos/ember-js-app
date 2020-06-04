import Route from '@ember/routing/route';

export default class UserPostsRoute extends Route {
    async model(params) {
        try {
            let responce = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.user_id}`);
            let parsed = await responce.json();
            return parsed;
        } catch (e) {
            console.log('Error in User Post routes', e);
        }
    }
}
