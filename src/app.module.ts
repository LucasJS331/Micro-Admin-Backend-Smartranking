import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasModule } from './categorias/categorias.module';
import { JogadoresModule } from './jogadores/jogadores.module';
import { ConfigModule,ConfigService } from '@nestjs/config'

const config_service = new ConfigService();
@Module({
  imports: [
    MongooseModule.forRoot(config_service.get("MONGO_URI"),
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }),
    CategoriasModule,
    JogadoresModule,
    ConfigModule.forRoot({isGlobal: true}),
],
  controllers: [],
  providers: [],
})
export class AppModule {}
