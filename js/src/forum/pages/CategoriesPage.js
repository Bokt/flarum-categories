import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import sortTags from 'flarum/tags/utils/sortTags';
import CategoryView from './../components/CategoryView';

export default class CategoriesPage extends Page {
    init() {
        super.init();

        this.tags = sortTags(app.store.all('tags').filter(tag => tag.isPrimary() && ! tag.isHidden()));
    }

    view() {
        return (
            <div className="CategoryIndexPage">
                {IndexPage.prototype.hero()}
                <div class="container">
                    <div className="Categories">
                        {this.tags.map(tag => this.categoryView(tag))}
                    </div>
                </div>
            </div>
        );
    }

    categoryView(tag) {
        const subTags = sortTags(app.store.all('tags').filter(sub => sub.isChild() && ! sub.isHidden() && sub.parent() == tag));

        return (
            <div className={'Primary-Category Primary-Category--' + tag.slug()}>
                {CategoryView.component({tag})}
                {subTags.map(sub => CategoryView.component({tag: sub}))}
            </div>
        );
    }
}
