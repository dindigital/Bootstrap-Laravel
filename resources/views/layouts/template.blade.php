<!doctype html>

<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />

		<title>PROJECT'S TITLE</title>
		<meta name="description" content="">
		<meta name="author" content="">
		<meta name="robots" content="index, follow">

		<link rel="shortcut icon" href="/assets/img/icon/favicon.ico">
		<link rel="icon" sizes="192x192"  href="/assets/img/icon/favicon-192x192.png">
		<link rel="icon" sizes="32x32" href="/assets/img/icon/favicon-32x32.png">
		<link rel="icon" sizes="96x96" href="/assets/img/icon/favicon-96x96.png">
		<link rel="icon" sizes="16x16" href="/assets/img/icon/favicon-16x16.png">

		<link rel="apple-touch-icon" sizes="180x180" href="/assets/img/icon/apple-icon-180x180.png">
		<link rel="apple-touch-icon" sizes="152x152" href="/assets/img/icon/apple-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="144x144" href="/assets/img/icon/apple-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="120x120" href="/assets/img/icon/apple-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="114x114" href="/assets/img/icon/apple-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="76x76" href="/assets/img/icon/apple-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="72x72" href="/assets/img/icon/apple-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="60x60" href="/assets/img/icon/apple-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="57x57" href="/assets/img/icon/apple-icon-57x57.png">

		<meta name="msapplication-TileColor" content="#FFF">
		<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">

		<!-- FACEBOOK
		<meta property="og:locale" content="pt_BR">
		<meta property="og:url" content="">
		<meta property="og:title" content="">
		<meta property="og:site_name" content="">
		<meta property="og:description" content="">
		<meta property="og:image" content="">
		<meta property="og:image:type" content="image/png">
		<meta property="og:image:width" content="=">
		<meta property="og:image:height" content="=">
		<meta property="og:type" content="website">
		-->

		<link type="text/css" rel="stylesheet" href="/assets/css/vendor.css" />
		<link type="text/css" rel="stylesheet" href="/assets/css/app.css" />

    @section('css')
    @show

		<script type="text/javascript" src="/assets/js/modernizr.js"></script>

		<!--[if lt IE 9]>
			<script src="//cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
			<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>
			<script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
  </head>

  <body itemscope itemtype="http://schema.org/WebPage">

    <section class="normal">
			@include('partials.header')

      @yield('content')

			@include('partials.footer')
    </section>

		<script type="text/javascript" src="/assets/js/vendor.js"></script>
    <script type="text/javascript" src="/assets/js/app.js"></script>

    @section('js')
    @show

  </body>
</html>
