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

// acadimcs
Route::get('/offices', function () {
    return Inertia::render('offices');
})->name('offices');
Route::get('/collages', function () {
    return Inertia::render('collages');
})->name('collages');
Route::get('/schools', function () {
    return Inertia::render('schools');
})->name('schools');

//research 
Route::get('/researchcenter', function () {
    return Inertia::render('researchcenter');
})->name('researchcenter');
Route::get('researchoffices', function () {
    return Inertia::render('researchoffices');
})->name('researchoffices');
