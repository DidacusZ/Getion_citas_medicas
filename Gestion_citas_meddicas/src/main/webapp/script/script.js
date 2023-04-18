class Usuario //id,nombre,apellido
{	
	constructor(numSeguridadSocial,nombre,apellido){
		
		this.numSeguridadSocial=numSeguridadSocial;
		this.nombre=nombre;
		this.apellido=apellido;
	}		
	
}


class Medico// id,nobreCentro,ciudad
{
	
	constructor(id,nombre,apellido,idCentro){
		
		this.id=id;
		this.nombre=nombre;
		this.apellido=apellido;
		this.idCentro=idCentro;
		
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


var nuevaFecha;
function FechaHora()//Fecha Hora aleatoria
{
	let fechaActual = new Date()
	let milisegundosFechaActual = fechaActual.getTime();
	
	//console.log("fecha actual \n"+fechaActual);
	//console.log("milisegundos actual \n"+milisegundosFechaActual);
	
	//dias del 1 al 60
	
	let random = ramdom(8,16);

        console.log(random);
        
    if(random>16)
    	random=random-8
        
    //console.log(random+"a");
        
	let sumarDias = Math.floor((Math.random()*60)+1);//dia 1 - 60
	
	let milisegundosUnDia= 1*24*60*60*1000;
	
	let milisegundosNuevaFecha=milisegundosFechaActual+(sumarDias*milisegundosUnDia);
	
	//console.log("milisegundos nueva fecha \n"+milisegundosNuevaFecha);
	
	nuevaFecha = new Date(milisegundosNuevaFecha);
	
	//console.log("nueva fecha \n"+nuevaFecha);
	
	//horas del las 8 a las 18
	//let horas = Math.trunc((Math.random()*18)+8);
	
	//console.log(horas);
	
	//console.log(random);
	nuevaFecha.setHours(random);//devuelve horas aleatorias entre las 8:00 y las 16:00
	
	//console.log("nueva fecha con nueva hora \n"+nuevaFecha);
	
	return 	nuevaFecha;

}

console.log(FechaHora());

var  vUsuarios = [];
var vMedicos = [];

//var vCitasMedicas = new CitaMedica;

//creamos usuarios
vUsuarios[0]=new Usuario(1234,"diego","prad");
vUsuarios[1]=new Usuario(5678,"felipe","gonzalez");
vUsuarios[2]=new Usuario(9101,"pedro","sanchez");
vUsuarios[3]=new Usuario(2345,"pepe","botella");
vUsuarios[4]=new Usuario(8672,"obama","negro");

let contUsu=5

//creamos Medicos


vMedicos[0]=new Medico(1,"Nicolas","Maduro","Virgen del Rocio, Sevilla");
vMedicos[1]=new Medico(2,"Fidel","Castro","Virgen del Rocio, Sevilla");
vMedicos[2]=new Medico(3,"Francisco","Franco","Virgen del Rocio, Sevilla");
vMedicos[3]=new Medico(3,"Vladimir","Putin","Virgen del Rocio, Sevilla");
vMedicos[4]=new Medico(3,"Adolf","Hitler","Virgen del Rocio, Sevilla");




//pedir CitaMedica



/*
// SS
let respuesta=prompt("Estas registrado en la Seguridad Social s/n")

let numSS   //prompt("Cual es tu numero de la seguridad social")

switch(respuesta){
	
	case 's':
	
	numSS = 2345 //prompt("Cual es tu numero de la seguridad social")
	
	break;
	
	case 'n':
		
	numSS = ramdom(1111,9999);
	prompt(" A continuacion vamos a registrarte, indica tu nombre completo:")
	prompt("Escribe tu apellido")
	
	break;
}

*/





let numSS=2345
//obtenemos la posicion del vector para ese numero de SS
let posicionUsu;
for(let i=0;i<vUsuarios.length;i++){
	
	if(vUsuarios[i].numSeguridadSocial==numSS){		
		posicionUsu=i;
		break;
	}		
}
console.log("la posicion usuario con nuum SS "+numSS+" es: "+posicionUsu);

console.log("num posiciones medicos: "+vMedicos.length);

	let randomMedico = Math.random();
        randomMedico = randomMedico * vMedicos.length;
        randomMedico = Math.trunc(randomMedico);
        console.log(randomMedico);
        
        console.log("posicion medico aleatoria "+ramdom(0,vMedicos.length));


//prompt("La fecha y hora asignada es la sigiente")
//FechaHora();
//prompt("quieres cambiarla s/n")



//creamos citas medicas

//vCitasMedicas[0]= new CitaMedica();

function ramdom(desde,hasta){
	
	console.log("ramdom")
	let ramdom = Math.random();
        ramdom = ramdom * hasta + desde;
        ramdom = Math.trunc(ramdom);
        
    console.log(ramdom)
        return (ramdom);
}


console.log();
console.log();
console.log();



//FechaHora();
//console.log(nuevaFecha);
