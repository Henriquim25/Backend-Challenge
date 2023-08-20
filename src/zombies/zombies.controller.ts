import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ZombiesService } from './zombies.service';
import { CreateZombieDto } from './dto/create-zombie.dto';
import { UpdateZombieDto } from './dto/update-zombie.dto';

@Controller('zombies')
export class ZombiesController {
  constructor(private readonly zombiesService: ZombiesService) {}

  @Post()
  create(@Body() createZombieDto: CreateZombieDto) {
    return this.zombiesService.create(createZombieDto);
  }

  @Get()
  findAll() {
    return this.zombiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.zombiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZombieDto: UpdateZombieDto) {
    return this.zombiesService.update(+id, updateZombieDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zombiesService.remove(+id);
  }
}
