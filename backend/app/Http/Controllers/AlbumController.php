<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Album;

class AlbumController extends Controller
{
    public function postAlbum(Request $request)
    {

        $album = new Album();
        $album->title = $request->input('title');
        $album->year = $request->input('year');
        $album->save();
        return response()->json(['album' => $album], 201);


    }

    public function getAlbums()
    {
        // $albums = Album::all();

        $albums = Album::orderBy('created_at', 'desc')->get();

        $response = [
            'albums' => $albums
        ];

        return response()->json($response, 200);
    }

    public function putAlbum(Request $request, $id)
    {

        $album = Album::find($id);
        if(!$album){
            return response()->json(['message' => 'The album is not found'], 404);
        }

        $album->content = $request->input('content');
        $album->save();

        return response()->json(['album' => $album], 200);

    }

    public function deleteAlbum($id)
    {

        $album = Album::find($id);
        $album->delete();
        return response()->json(['message' => 'The album is deleted'], 200);

    }

}
