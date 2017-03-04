<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/album',[
    'uses' => 'AlbumController@postAlbum'
]);

Route::get('/albums',[
    'uses' => 'AlbumController@getAlbums'
]);

Route::put('/album/{id}',[
    'uses' => 'AlbumController@putAlbum'
]);

Route::delete('/album/{id}',[
    'uses' => 'AlbumController@deleteAlbum'
]);