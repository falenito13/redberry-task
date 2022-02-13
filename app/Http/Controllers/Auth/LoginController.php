<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    public function authenticate(LoginRequest $request)
    {
        if(Auth::attempt($request->validated())) {
            return response(['token' => auth()->user()->createToken('API Token')->plainTextToken],200);
        }
        else {
            return response(['auth' => ['Credentials not match']]);
        }
    }

    public function logout(Request $request)
    {
        Auth::user()->tokens()->delete();
        $request->user()->currentAccessToken()->delete();
    }


}
