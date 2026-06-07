import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import helmet from 'helmet';

let cachedApp: any;

async function createApp() {
  const app = await NestFactory.create(AppModule);

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", "data:", "https:"],
          connectSrc: ["'self'"],
          fontSrc: ["'self'"],
          objectSrc: ["'none'"],
          upgradeInsecureRequests: [],
        },
      },
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true,
      },
      referrerPolicy: { policy: "strict-origin-when-cross-origin" },
      xFrameOptions: { action: "deny" },
      crossOriginResourcePolicy: { policy: "cross-origin" },
      crossOriginOpenerPolicy: { policy: "same-origin" },
    })
  );

  app.enableCors({
    origin: ['https://joel-frontend.vercel.app'],
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],
    credentials: true,
  });

  await app.init();
  return app;
}

async function bootstrap() {
  const app = await createApp();
  await app.listen(process.env.PORT ?? 3000);
}

if (process.env.NODE_ENV !== 'production') {
  bootstrap();
}

export default async (req: any, res: any) => {
  if (!cachedApp) {
    cachedApp = await createApp();
  }
  cachedApp.getHttpAdapter().getInstance()(req, res);
};
