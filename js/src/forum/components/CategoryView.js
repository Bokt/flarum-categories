import Component from 'flarum/Component';
import sortTags from 'flarum/tags/utils/sortTags';
import icon from 'flarum/helpers/icon';

export default class CategoryView extends Component {
    init() {
        super.init();

        this.tags = sortTags(app.store.all('tags').filter(tag => tag.parent() === this.props.tag));
    }

    view() {
        const tag = this.props.tag;

        return (
            <div class="Category">
                <div class="Category--Name">
                    {tag.name()}
                </div>
                <div class="Category--DiscussionCount">
                    {icon('fas fa-book')}
                    {tag.discussionCount()}
                </div>
                <div className="Category--CommentCount">
                    {icon('fas fa-comments')}
                    {tag.commentCount()}
                </div>
                <div className="Category--ParticipantCount">
                    {icon('fas fa-users')}
                    {tag.participantCount()}
                </div>
                <div className="Category--LastDiscussion">
                    {this.viewLastDiscussion()}
                </div>
            </div>
        );
    }

    viewLastDiscussion() {
        const lastDiscussion = this.props.tag.lastPostedDiscussion();

        if (! lastDiscussion) {
            return;
        }

        return (
            <div className="Title">{lastDiscussion.title()}</div>,
            <div className="DateAuthor">{lastDiscussion.lastPostedAt()} by {lastDiscussion.lastPostedUser.displayName()}</div>
        );
    }
}
