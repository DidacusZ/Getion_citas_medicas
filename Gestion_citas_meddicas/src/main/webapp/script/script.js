class Usuario //id,nombre,apellido
{	
	constructor(idUsu,nombre,apellido){
		
		this.idUsu=idUsu;
		this.nombre=nombre;
		this.apellido=apellido;		
	}		
	
}

class CitaMedica extends Usuario //id,FechaHora,idUsu,idMedico,NumConsulta,Centro
{
	
	constructor(idCita,FechaHora,idMedico,NumConsulta,idCentro,idUsu,nombre,apellido){
		
		this.idCita=idCita;
		this.FechaHora=FechaHora;
		
		//this.idUsu=idUsu;
		super(idUsu,nombre,apellido);
		
		this.idMedico=idMedico;
		this.NumConsulta=NumConsulta;
		this.idCentro=idCentro;	
	}
	
}

class CentroMedico// id,nobreCentro,ciudad
{
	
	constructor(id,nobreCentro,ciudad,numConsultas){
		
		this.id=id;
		this.nobreCentro=nobreCentro;
		this.ciudad=ciudad;
		this.numConsultas=numConsultas;	
	}
	
}

class ConsultaMedica //habitaculo
{
	
		
	
}
class Medico{//id,nombre,apellido,
	
	constructor(id,nombre,apellido){
		
		this.id=id;
		this.nombre=nombre;
		this.apellido=apellido;		
	}
	
}










