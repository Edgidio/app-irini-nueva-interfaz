-- Base de datos irini
create database if not exists venegreco_database;

-- Usar la base de datos creada anteriormente
USE venegreco_database;

-- Crear tabla de usuarios administradores
CREATE TABLE usuarios_administradores (
	id_usuario_admin tinyint unsigned unique auto_increment not null,
    nombres varchar (50) not null,
    apellidos varchar (50)not null,
    correo_electronico varchar (100) unique not null,
    contrasena varchar (200) not null,
    tipo_de_administrador varchar (5) not null,
    primary key (id_usuario_admin)
);

-- Crear tabla de clientes
CREATE TABLE clientes (
	id_cliente int unsigned unique auto_increment not null,
    nombres varchar (50) not null,
    apellidos varchar (50) not null,
    nickname varchar (25) not null,
    fecha_de_nacimiento varchar (12) not null,
    sexo_cliente varchar (1) not null,
    cedula int unsigned unique not null,
    nacionalidad varchar (3) not null,
    primary key (id_cliente)
);

CREATE TABLE clientes_informacion_personal (
    id_informacion_personal int auto_increment not null,
    id_cliente int unsigned unique not null,
    numero_de_pasaporte varchar (50),
    fecha_de_emision_del_pasaporte varchar (12),
    fecha_de_expiracion_del_pasaporte varchar (12),
    pais_de_emision_del_pasaporte varchar (3),
    numero_de_visa varchar (50),
    visa_fecha_de_emision varchar (12),
    numero_de_telefono varchar (20),
    codigo_del_telefono varchar (5),
    correo_electronico varchar (100),
    primary key (id_informacion_personal),
    foreign key (id_cliente) references clientes (id_cliente)
);

-- Crear tabla de para los archivos del clientes
CREATE TABLE clientes_archivos (
	id_archivo int unsigned auto_increment not null,
    id_cliente int unsigned not null,
	pasaporte_1_archivo varchar (200),
    pasaporte_2_archivo varchar (200),
    pasaporte_3_archivo varchar (200),
    cedula_archivo varchar (200),
    visa_archivo varchar (200),
    primary key (id_archivo),
    foreign key (id_cliente) references clientes (id_cliente)
);

-- Crear tabla de historial del cliente
CREATE TABLE clientes_historial (
	id_historial int unsigned auto_increment not null,
    id_cliente int unsigned not null,
    viajes_de_cliente varchar (200),
    primary key (id_historial),
    foreign key (id_cliente) references clientes (id_cliente)
);

-- Consulta para crear un cliente
INSERT INTO clientes (nombres, apellidos, nickname, fecha_de_nacimiento, sexo_cliente, cedula, nacionalidad) VALUES ('Edgidio Ranze', 'León Florez', 'Jillo', '12-02-2000', 'M', 30408201, 'VEN');

-- Consultar todos los valores de la tabla clientes
SELECT * FROM clientes;

-- Consulta para agregar informacion del cliente
INSERT INTO clientes_informacion_personal (id_cliente, numero_de_pasaporte, fecha_de_emision_del_pasaporte, fecha_de_expiracion_del_pasaporte, pais_de_emision_del_pasaporte, numero_de_visa, visa_fecha_de_emision, numero_de_telefono, codigo_del_telefono, correo_electronico) VALUES (1, '121698867', '12-12-2022', '12-12-2023', 'VEN', '', '', '04165111568', '58', 'edgidio.leon@gmail.com');

-- Consultar todos los valores de la tabla clientes_informacion_personal
SELECT * FROM clientes_informacion_personal;

-- Consulta para agregar archivos
INSERT INTO clientes_archivos (id_cliente, pasaporte_1_archivo, pasaporte_2_archivo, pasaporte_3_archivo, cedula_archivo, visa_archivo) VALUES (1, 'pasaportes/id_cliente-1_pasaporte_cliente-1__up=0', '', '', 'cedulas/id_cliente-1_cedula_cliente-1', '');

-- Consultar todos los valores de la tabla clientes_archivos
SELECT * FROM clientes_archivos;
