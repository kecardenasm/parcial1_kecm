import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('personas')
export class Persona {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('varchar', { length: 15, unique: true })
    ci: string;

    @Column('varchar', { length: 50 })
    nombres: string;

    @Column('varchar', { length: 50 })
    PrimerApellido: string;

    @Column('varchar', { length: 50 })
    SegundoApellido: string;

    @Column('date', { name: 'fecha_nacimiento'})
    fechaNacimiento: Date;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @CreateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;//
}