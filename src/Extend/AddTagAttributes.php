<?php

namespace Bokt\Categories\Extend;

use Flarum\Api\Event\Serializing;
use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Illuminate\Contracts\Container\Container;

class AddTagAttributes implements ExtenderInterface
{
    public function extend(Container $container, Extension $extension = null)
    {
        $container['events']->listen(Serializing::class, [$this, 'attributes']);
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
