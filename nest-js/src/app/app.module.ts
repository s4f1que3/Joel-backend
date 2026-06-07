import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from 'src/auth/auth.module';
import { ArticleModule } from 'src/articles/article.module';
import { bioModule } from 'src/bio/bio.module';
import { contactModule } from 'src/contact/contact.module';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    SupabaseModule, 
    AuthModule, 
    ArticleModule, 
    bioModule, 
    contactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
