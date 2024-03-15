<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'title' => 'Welcome',
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About', [
        'title' => 'About Me'
    ]);
});

Route::get('/news', function () {
    return Inertia::render('News', [
        'title' => 'Latest News'
    ]);
});

Route::get('/shopping', function () {
    return Inertia::render('Shopping', [
        'title' => 'Happy Shopping'
    ]);
});

Route::get('/tools', function () {
    return Inertia::render('Tools', [
        'title' => 'Tools And Apps'
    ]);
});



Route::get('/sign-up', function () {
    return Inertia::render('Sign-Up');
})->middleware(['auth', 'verified'])->name('Sign-Up');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
