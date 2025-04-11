import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private personasRepository: Repository<Persona>
  ) {}

  async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    const existe = await this.personasRepository.findOneBy({
      ci: createPersonaDto.ci.trim(),

      primerApellido: createPersonaDto.primerApellido.trim(),
      segundoApellido: createPersonaDto.segundoApellido.trim(),
      fechaNacimiento: createPersonaDto.fechaNacimiento,
    })

    if (existe) throw new ConflictException('El CI ya está registrado')

      const persona = new Persona();
      persona.ci = createPersonaDto.ci.trim();
      persona.nombres = createPersonaDto.nombres.trim();
      persona.primerApellido = createPersonaDto.primerApellido.trim();
      persona.segundoApellido = createPersonaDto.segundoApellido.trim();
      persona.fechaNacimiento = createPersonaDto.fechaNacimiento;
    
    return this.personasRepository.save(persona);
  }

  findAll() {
    return this.personasRepository.find();
  }

  async findOne(id: number): Promise<Persona> {
    const persona = await this.personasRepository.findOneBy({ id });
    if (!persona) throw new ConflictException('La persona no existe')
    return persona;
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto) {
    const persona = await this.findOne(id);
    const artistaUpdate = Object.assign(persona, updatePersonaDto);
    return this.personasRepository.save(artistaUpdate);
  }

  async remove(id: number) {
    const persona = await this.findOne(id);
    if (persona) return this.personasRepository.softRemove(persona);
  }
}
