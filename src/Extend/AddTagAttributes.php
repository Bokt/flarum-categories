<?php

namespace Bokt\Categories\Extend;

use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Event\WillSerializeData;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Event\GetApiRelationship;
use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Flarum\Tags\Tag;
use Illuminate\Contracts\Container\Container;

class AddTagAttributes implements ExtenderInterface
{
    public function extend(Container $container, Extension $extension = null)
    {
        $container['events']->listen(WillSerializeData::class, [$this, 'forum']);
        $container['events']->listen(WillGetData::class, [$this, 'includes']);
        $container['events']->listen(Serializing::class, [$this, 'attributes']);
    }

    public function forum(WillSerializeData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->data['tags'] = $event->data['tags']->map(function (Tag $tag) {
                $tag->load('lastPostedDiscussion.user', 'lastPostedDiscussion.lastPostedUser');
                return $tag;
            });
        }
    }

    public function includes(WillGetData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->addInclude(['tags.lastPostedDiscussion.user', 'tags.lastPostedDiscussion.lastPostedUser']);
        }
    }

    public function attributes(Serializing $event)
    {
        if ($event->isSerializer(TagSerializer::class)) {
            /** @var \Flarum\Tags\Tag $tag */
            $tag = $event->model;

            $event->attributes['hasChild'] = $tag->query()
                ->where('parent_id', $event->model->id)
                ->exists();

            $event->attributes['discussionCount'] = $tag->discussions->count();
            $event->attributes['commentCount'] = $tag->discussions->sum('comment_count');
            $event->attributes['participantCount'] = $tag->discussions->sum('participant_count');
        }
    }
}
