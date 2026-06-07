import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    app.use(
      helmet({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"], // adjust as needed
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'"],
            fontSrc: ["'self'"],
            objectSrc: ["'none'"],
            upgradeInsecureRequests: [],
          },
        },
        hsts: {
          maxAge: 31536000,       // 1 year in seconds
          includeSubDomains: true,
          preload: true,
        },
        referrerPolicy: { policy: "strict-origin-when-cross-origin" },
        xFrameOptions: { action: "deny" },
        crossOriginResourcePolicy: { policy: "same-origin" },
        crossOriginOpenerPolicy: { policy: "same-origin" },
      })
    );

  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3001',
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],
    credentials: true
  })

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
