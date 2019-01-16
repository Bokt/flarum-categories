<?php

namespace Bokt\Categories\Extend;

use Flarum\Api\Event\Serializing;
use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Illuminate\Contracts\Container\Container;

class AddRelationship implements ExtenderInterface
{
    public function extend(Container $container, Extension $extension = null)
    {
        $container['events']->listen(Serializing::class, [$this, 'relationship']);
    }

    public function relationship(Serializing $event)
    {
        if ($event->isSerializer(TagSerializer::class)) {
            $event->attributes['hasChild'] = $event->model->query()
                ->where('parent_id', $event->model->id)
                ->exists();
        }
    }
}
