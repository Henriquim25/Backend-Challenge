import { Injectable } from '@nestjs/common';
import { CreateZombieDto } from './dto/create-zombie.dto';
import { UpdateZombieDto } from './dto/update-zombie.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class ZombiesService {
  constructor(private prismaService: PrismaService) {}
  create(createZombieDto: CreateZombieDto) {
    return this.prismaService.zombies.create({
      data: createZombieDto,
    });
  }

  findAll() {
    return this.prismaService.zombies.findMany();
  }

  findOne(id: number) {
    return this.prismaService.zombies.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }

  findOneByWeapon(weapon: string) {
    return this.prismaService.zombies.findFirst({
      where: {
        weapon: weapon,
      },
    });
  }
  findOneByArmor(armor: string) {
    return this.prismaService.zombies.findFirst({
      where: {
        armor: armor,
      },
    });
  }

  update(id: number, updateZombieDto: UpdateZombieDto) {
    return this.prismaService.zombies.update({
      where: { id: id },
      data: updateZombieDto,
    });
  }

  remove(id: number) {
    return this.prismaService.zombies.delete({
      where: { id: id },
    });
  }
}
