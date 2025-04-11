import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePersonaDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo CI es obligatorio' })
    @IsString({ message: 'El campo CI debe ser una cadena de texto' })
    @MaxLength(15, { message: 'El campo CI no puede tener más de 15 caracteres' })
    readonly ci: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo Nombres es obligatorio' })
    @IsString({ message: 'El campo Nombres debe ser una cadena de texto' })
    @MaxLength(50, { message: 'El campo Nombres no puede tener más de 50 caracteres' })
    readonly nombres: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo Primer Apellido es obligatorio' })
    @IsString({ message: 'El campo Primer Apellido debe ser una cadena de texto' })
    @MaxLength(50, { message: 'El campo Primer Apellido no puede tener más de 50 caracteres' })
    readonly PrimerApellido: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo Segundo Apellido es obligatorio' })
    @IsString({ message: 'El campo Segundo Apellido debe ser una cadena de texto' })
    @MaxLength(50, { message: 'El campo Segundo Apellido no puede tener más de 50 caracteres' })
    readonly SegundoApellido: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo Fecha de Nacimiento es obligatorio' })
    @IsDateString()
    readonly fechaNacimiento: Date; // Cambiado a string para que acepte el formato ISO 8601
}
