class Usuario //id,nombre,apellido
{	
	constructor(numSeguridadSocial,nombre,apellido){
		
		this.numSeguridadSocial=numSeguridadSocial;
		this.nombre=nombre;
		this.apellido=apellido;
	}		
	
}

class CitaMedica extends Usuario //id,FechaHora,idUsu,idMedico,NumConsulta,Centro
{
	
	constructor(idCita,FechaHora,idMedico,NumConsulta,idCentro,motivoCita,numSeguridadSocial,nombre,apellido){
		
		this.idCita=idCita;
		this.FechaHora=FechaHora;
		
		//this.idUsu=idUsu;
		super(numSeguridadSocial,nombre,apellido);
		
		this.idMedico=idMedico;
		this.NumConsulta=NumConsulta;
		this.idCentro=idCentro;
		this.motivoCita=motivoCita;
	}
	
	
}

class CentroMedico// id,nobreCentro,ciudad
{
	
	constructor(id,nombreCentro,ciudad,numConsultas){
		
		this.id=id;
		this.nombreCentro=nombreCentro;
		this.ciudad=ciudad;
		this.numConsultas=numConsultas;
	}
	
	
	
}



class ConsultaMedica //habitaculo
{
	
		
	
}

/*
class Medico// id,nobreCentro,ciudad
{
	
	constructor(id,nombre,apellido,idCentro,){
		this.id=id;
		this.nombre=nombre;
		this.apellido=apellido;
		this.idCentro=idCentro;
	}
	
	
	
}

*/




var nuevaFecha;
function FechaHora()//Fecha Hora aleatoria
{
	let fechaActual = new Date()
	let milisegundosFechaActual = fechaActual.getTime();
	
	console.log("fecha actual \n"+fechaActual);
	console.log("milisegundos actual \n"+milisegundosFechaActual);
	
	//dias del 1 al 60
	
	let random = Math.random();
        random = random * 16 + 8;
        random = Math.trunc(random);
        console.log(random);
        
    if(random>16)
    	random=random-8
        
    console.log(random+"a");
        
	let sumarDias = Math.floor((Math.random()*60)+1);//dia 1 - 60
	
	let milisegundosUnDia= 1*24*60*60*1000;
	
	let milisegundosNuevaFecha=milisegundosFechaActual+(sumarDias*milisegundosUnDia);
	
	console.log("milisegundos nueva fecha \n"+milisegundosNuevaFecha);
	
	nuevaFecha = new Date(milisegundosNuevaFecha);
	
	console.log("nueva fecha \n"+nuevaFecha);
	
	//horas del las 8 a las 18
	//let horas = Math.trunc((Math.random()*18)+8);
	
	//console.log(horas);
	
	console.log(random);
	nuevaFecha.setHours(random);//horas de 8:00 a 16:00
	
	console.log("nueva fecha con nueva hora \n"+nuevaFecha);

}

var  vUsuarios = new Usuario;
var vMedicos = new Medico;
var vCentros = new CentroMedico;
var vCitasMedicas = new CitaMedica;

//creamos usuarios
vUsuarios[0]=new Usuario(1234,"diego","prad");
vUsuarios[1]=new Usuario(5678,"felipe","gonzalez");
vUsuarios[2]=new Usuario(9101,"pedro","sanchez");
vUsuarios[3]=new Usuario(2345,"pepe","botella");
vUsuarios[4]=new Usuario(8672,"obama","negro");

let contUsu=5

//creamos Medicos

vMedicos[0]=new Medico(1,"Nicolas","Maduro",2);
vMedicos[1]=new Medico(2,"Fidel","Castro",1);
vMedicos[2]=new Medico(3,"Francisco","Franco",1);


//creamos Centros Medicos

vCentros[0] = new CentroMedico(1,"Virgen del Rocio","Sevilla",123);
vCentros[1] = new CentroMedico(2,"Bernabeu","Madrid",53);


//CitaMedica

let numSS = 2345   //prompt("Cual es tu numero de la seguridad social")

//obtenemos la posicio del vector para ese numero de SS
let posicionUsu;
for(let i=0;i<contUsu;i++){
	
	if(vUsuarios[i].numSeguridadSocial==numSS){		
		posicionUsu=i;
		break;
	}		
}
console.log(posicionUsu);

//pedimis el centro
//let centro = prompt("Hola "+vUsuarios[posicionUsu].nombre+" a que centro desea acudir? \n 1: Virgen del Rocio, Sevilla \n 2: Bernabeu, Madrid")


//prompt("La fecha y hora asignada es la sigiente")
//prompt("quieres cambiarla s/n")


//creamos citas medicas

vCitasMedicas[0]= new CitaMedica();







FechaHora();
//console.log(nuevaFecha);
