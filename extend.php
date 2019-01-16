<?php

namespace Bokt\Categories;

use Flarum\Extend\Frontend;

return [
    new Extend\AddRelationship,
    (new Frontend('forum'))
        ->css(__DIR__.'/resources/less/forum/index.less')
        ->js(__DIR__.'/js/dist/forum.js')
        ->route('/categories', 'bokt.categories', Forum\Content\Index::class)
];
