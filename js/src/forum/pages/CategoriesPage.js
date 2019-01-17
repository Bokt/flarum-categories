import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import sortTags from 'flarum/tags/utils/sortTags';
import CategoryView from './../components/CategoryView';

export default class CategoriesPage extends Page {
    init() {
        super.init();

        this.tags = sortTags(app.store.all('tags').filter(tag => tag.isChild() === false));
        this.secondary = sortTags(app.store.all('tags').filter(tag => tag.hasChild() === false && tag.isChild() === false));
    }

    view() {
        return (
            <div className="CategoryIndexPage">
                {IndexPage.prototype.hero()}
                <div class="container">
                    <div className="Categories">
                        {this.tags.map(tag => CategoryView.component({tag}))}
                    </div>
                </div>
            </div>
        );
    }
}
