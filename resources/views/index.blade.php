@extends('layouts.template')

@section('css')
  <link rel="stylesheet" href="/assets/css/home.css" />
@stop

@section('content')

  @include('includes.header')

  <h2>Hi home</h2>

  @include('includes.footer')

@stop

@section('js')
  <script type="text/javascript" src="/assets/js/home.js"></script>
@stop
