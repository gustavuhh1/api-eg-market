import { app } from './app'
import { env } from './env/env';

app
    .listen({
        host: env.NODE_ENV === 'production' ? "0.0.0.0" : "localhost",
        port: env.PORT,
    })
    .then(() => {
        console.log("🚀 HTTP Server Running! port:" + env.PORT);
    });