import {extend} from 'flarum/extend';
import CategoriesPage from './pages/CategoriesPage';
import Model from 'flarum/Model';
import Tag from 'flarum/tags/models/Tag';

app.initializers.add('bokt-categories', app => {
    app.routes.categories = {path: '/categories', component: CategoriesPage.component()};

    Tag.prototype.hasChild = Model.attribute('hasChild');
}, -50);
