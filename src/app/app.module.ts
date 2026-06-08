import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { ArticleModule } from 'src/articles/article.module';
import { bioModule } from 'src/bio/bio.module';
import { contactModule } from 'src/contact/contact.module';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { ConfigModule } from '@nestjs/config';
import { ResumeModule } from 'src/resume/resume.module';
import { uploadArticleModule } from 'src/uploadArticle/uploadArticle.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    SupabaseModule,
    AuthModule,
    ArticleModule,
    bioModule,
    contactModule,
    uploadArticleModule,
    ResumeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
