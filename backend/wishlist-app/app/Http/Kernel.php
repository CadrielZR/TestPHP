<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    protected $middleware = [
        // outros middlewares
        \App\Http\Middleware\CorsMiddleware::class,
    ];
    
}
