<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'title' => 'Welcome',
    ]);
});

Route::get('/features', function () {
    return Inertia::render('About', [
        'title' => 'About Me',
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

Route::get('/berita', function () {
    return Inertia::render('News', [
        'title' => 'Latest News'
    ]);
});

Route::get('/shopping', function () {
    return Inertia::render('Shopping', [
        'title' => 'Happy Shopping'
    ]);
});

Route::get('/shopping/pokemon-shop', function () {
    return Inertia::render('Shopping/Pokemon-shop');
});

Route::get('/shopping/undangan-online', function () {
    return Inertia::render('Shopping/Undangan-online', [
        'title' => 'Choose Wishly!'
    ]);
});

Route::get('/tools', function () {
    return Inertia::render('Tools', [
        'title' => 'Tools And Apps'
    ]);
});

Route::get('/tools/sum', function () {
    return Inertia::render('Tools/Sum');
});

Route::get('/tools/bot-things', function () {
    return Inertia::render('Tools/Bot-things');
});

Route::get('/tools/valentines', function () {
    return Inertia::render('Tools/valentines');
});

Route::get('/hidden', function () {
    return Inertia::render('Hidden', [
        'title' => '???????'
    ]);
});

Route::get('/blog', function () {
    return Inertia::render('Blog', [
        'title' => 'Welcome To Blogs'
    ]);
});

Route::get('/contact', function () {
    return Inertia::render('About', [
        'title' => 'Contact Me'
    ]);
});

Route::get('/faq', function () {
    return Inertia::render('Faq', [
        'title' => 'Frequently Asked Questions'
    ]);
});

Route::get('/privacy-policy', function () {
    return Inertia::render('Privacy-policy', [
        'title' => 'Cookies Policy'
    ]);
});

Route::get('/cookies-policy', function () {
    return Inertia::render('Cookies-policy', [
        'title' => 'Cookies Policy'
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Welcome', [
        'title' => 'WELL'
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
