let mix = require('laravel-mix');

mix.js('src/scripts/locStorage.js', 'dist/scripts/locStorage-dist.js');

mix.copy('src/index.html', 'dist/index.html').options({processCssUrls : false});