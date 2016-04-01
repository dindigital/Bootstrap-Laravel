## Laravel PHP Framework Bootstrap

Bootstrap to start the development with Laravel Framework.

1. Install gulp: `sudo npm install -g gulp`
2. Install bower: `sudo npm install -g bower`
3. Install bower dependencies: `bower install`
4. Install gulp task dependencies and other stuff: `npm install`
5. Execute gulp: `gulp`
6. Watch files: `gulp watch`
7. Tiny files: `gulp tiny`
8. Install fonts from command line with [FontWR](https://github.com/raphaklaus/fontwr)
9. Be happy

## What do you need to do?

You need to study your necessities and check about if your `.js` or `.css` plugin files need to be in ALL pages or just in a specific one.

If in all pages, ok, keep with `vendor.js` and `vendor.css` in `template.blade.php` file, if it is not in all of them, create a new one, like `contact-vendor.js` for that one.

====

## Bonus

1. Minify all files to production with `gulp --production`
2. If this message appears `'Try reinstalling node-sass?]'` just run this one: `sudo npm rebuild node-sass`

## Tiny PNG

O Tiny PNG somente permite até 500 imagens compactadas por chave de API, ou seja, se der algum erro, troque sua chave. Para conseguir uma acesse a área de desenvolvedor, cadastre-se e seja feliz :)

Se você rodar a tarefa gulp tiny ela irá criar o arquivo .tinypng-sigs, que diz à tarefa para não executá-la nos mesmos arquivos, somente nos novos. Por exemplo: se eu tenho a imagem 01.jpg e rodo a tarefa, ao executá-la uma segunda vez a mesma imagem não será gerada novamente. Atenção: se por algum motivo você apagar alguma imagem já gerada e quiser compacta-la novamente, apague o arquivo .tinypng-sigs do diretório ./images.
