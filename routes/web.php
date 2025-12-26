<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/test', function () {
    return Inertia::render('test');
})->name('test');
Route::get('/leadership', function () {
    return Inertia::render('leadership');
})->name('leadership');
Route::get('/uniOverview', function () {
    return Inertia::render('uniOverview');
})->name('uniOverview');
