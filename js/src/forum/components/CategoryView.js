import Component from 'flarum/Component';
import sortTags from 'flarum/tags/utils/sortTags';
import icon from 'flarum/helpers/icon';
import humanTime from 'flarum/helpers/humanTime';

export default class CategoryView extends Component {
    init() {
        super.init();

        this.tags = sortTags(app.store.all('tags').filter(tag => tag.parent() === this.props.tag));
    }

    view() {
        const tag = this.props.tag;
        const lastDiscussion = this.props.tag.lastPostedDiscussion();
        const unread = lastDiscussion && lastDiscussion.isUnread();
        const isChild = this.props.tag.isChild();

        return (
            <div className={'Category' + (unread ? ' unread' : '', isChild ? ' child' : '')}>
                {isChild ? <div class="Category--Child">{icon('fas fa-angle-right')}</div> : ''}

                <div class="Category--Name">
                    <a href={app.route.tag(tag)}>
                        {tag.name()}
                    </a>
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

                {this.viewLastDiscussion(lastDiscussion)}
            </div>
        );
    }

    viewLastDiscussion(discussion) {
        const author = discussion ? discussion.user() : null;
        const user = discussion ? discussion.lastPostedUser() : null;

        return (
            <div className="Category--LastDiscussion">
                {discussion ?
                    (
                        <div className="Title">{discussion.title()}</div>,
                        <div className="DateAuthor DiscussionListItem-info">{user
                            ? <a href={app.route.discussion(discussion, discussion.lastReadPostNumber())}>{user.displayName()} replied {humanTime(discussion.lastPostedAt())}</a>
                            : <a href={app.route.discussion(discussion)}>{author.displayName()} created {humanTime(discussion.createdAt())}</a>}
                        </div>
                    ) :
                    '-'
                }
            </div>
        );
    }
}
