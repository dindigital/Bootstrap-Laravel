## Laravel PHP Framework Bootstrap

Bootstrap to start the development with Laravel Framework.

1. Install gulp: `sudo npm install -g gulp`
2. Install bower: `sudo npm install -g bower`
3. Install gulp task dependencies and other stuff: `sudo npm install`
4. Install bower dependencies: `bower install`
4. Execute gulp: `gulp`
5. Watch files: `gulp watch`
6. Be happy

## What you need to do?

You need to study your necessities and check about if your `.js` or `.css` plugin files need to be in ALL pages or just in a specific one.

If in all pages, ok, keep with `vendor.js` and `vendor.css` in `template.blade.php` file, if it is not in all of them, create a new one, like `contact-vendor.js` for that one.

====

##Bonus

1. Minify all files to production with `gulp --production`
2. If this message appears `'Try reinstalling node-sass?]'` just run this one: `sudo npm rebuild node-sass`
