<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::GET('/', [ContactController::class, 'index'])->middleware(['auth', 'verified'])->name('contact.index');

Route::middleware('auth')->group(function () {



    //Route::GET('/contact', [ContactController::class, 'index'])->name('contact.index');
    Route::POST('/contact', [ContactController::class, 'store'])->name('contact.store');
    Route::DELETE('/contact/{id}', [ContactController::class, 'destroy'])->name('contact.destroy');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
