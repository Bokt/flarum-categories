import {extend} from 'flarum/extend';
import app from 'flarum/app';
import CategoriesPage from './pages/CategoriesPage';

app.initializers.add('bokt-categories', () => {
    app.routes.categories = {path: '/categories', component: CategoriesPage.component()};;
});
