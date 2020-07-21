import React,{Fragment, useState, useEffect} from 'react'
import moro from '../img/moro.jpeg';
import lean from '../img/lean.jpeg';
import seba from '../img/seba.jpeg';
import barba from '../img/barba.jpeg';
import franken from '../img/franken.jpeg';
import neif from '../img/neif.jpeg';
import marian from '../img/marian.jpeg';
import anguila from '../img/anguila.jpeg';
import alva from '../img/alva.png';
import meme from '../img/meme.jpeg';

const Inicio = ({champ, champEnemigo, setBool, bool}) => {

    //poderes
    const [ poderUnoCaract, setPoderUnoCaract ] = useState({})
    const [ poderDosCaract, setPoderDosCaract ] = useState({}) 
    const [ poderTresCaract, setPoderTresCaract ] = useState({})
    const [ poderCuatroCaract, setPoderCuatroCaract ] = useState({}) 

    const [ poderUnoCaractEnemigo, setPoderUnoCaractEnemigo ] = useState({})
    const [ poderDosCaractEnemigo, setPoderDosCaractEnemigo ] = useState({}) 
    const [ poderTresCaractEnemigo, setPoderTresCaractEnemigo ] = useState({})
    const [ poderCuatroCaractEnemigo, setPoderCuatroCaractEnemigo ] = useState({}) 

    const [poderUnoDelay, setPoderUnoDelay] = useState(0)
    const [poderDosDelay, setPoderDosDelay] = useState(0)
    const [poderTresDelay, setPoderTresDelay] = useState(0)
    const [poderCuatroDelay, setPoderCuatroDelay] = useState(0)

    const [poderUnoDelayEnemigo, setPoderUnoDelayEnemigo] = useState(0)
    const [poderDosDelayEnemigo, setPoderDosDelayEnemigo] = useState(0)
    const [poderTresDelayEnemigo, setPoderTresDelayEnemigo] = useState(0)
    const [poderCuatroDelayEnemigo, setPoderCuatroDelayEnemigo] = useState(0)

    //turnos
    const [turno, setTurno] = useState(0);

    //estadisticas campeon
    const [vidaEnemigo, setVidaEnemigo] = useState(150)
    const [vida, setVida] = useState(150)
    const [danio, setDanio] = useState(0)
    const [danioEnemigo, setDanioEnemigo] = useState(0)
    const [fuerza, setFuerza] = useState(1)
    const [fuerzaEnemigo, setFuerzaEnemigo] = useState(1)
    const [fuerzaMientras, setFuerzaMientras] = useState(1)
    const [fuerzaEnemigoMientras, setFuerzaEnemigoMientras] = useState(1)
    const [poderNombre, setPoderNombre]= useState('')
    const [poderNombreEnemigo, setPoderNombreEnemigo]= useState('')

    //agregamos los poderes por champ
    useEffect(()=>{
        if(champ===1){
            setPoderUnoCaract({
                nombre: "Draven",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 4,
                turnos: 2
            })
            setPoderDosCaract({
                nombre: "Grito nórdico",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 9,
                turnos: 3
            })
            setPoderTresCaract({
                nombre: "Melena dura",
                vida: 12,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 4
            })
            setPoderCuatroCaract({
                nombre: "Esto no está perdido!",
                vida: 10,
                fuerza: 2,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 6
            })
        } else if(champ===2){
            setPoderUnoCaract({
                nombre: "Te regalo cajita wacho",
                vida: 0,
                fuerza: 2,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 5
            })
            setPoderDosCaract({
                nombre: "Pero mirá a este hijo de puta!",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 10,
                turnos: 2
            })
            setPoderTresCaract({
                nombre: "Muestra a su hermana",
                vida: -5,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 15,
                turnos: 3
            })
            setPoderCuatroCaract({
                nombre: "Peligro es mi segundo nombre",
                vida: 15,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 4
            })
        } else if(champ===3){
            setPoderUnoCaract({
                nombre: "Only Garen",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 6,
                turnos: 2
            })
            setPoderDosCaract({
                nombre: "It's Russou",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 9,
                turnos: 4
            })
            setPoderTresCaract({
                nombre: "Calmate alteradito",
                vida: 12,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 4
            })
            setPoderCuatroCaract({
                nombre: "Demacia!!",
                vida: -3,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 10,
                turnos: 2
            })
        } else if(champ===4){
            setPoderUnoCaract({
                nombre: "Está cayendo piedra",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 8,
                turnos: 2
            })
            setPoderDosCaract({
                nombre: "Ya fue, me mando",
                vida: -4,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 12,
                turnos: 4
            })
            setPoderTresCaract({
                nombre: "Voy a dejar el lol",
                vida: 12,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 3
            })
            setPoderCuatroCaract({
                nombre: "Pipa mágica",
                vida: 0,
                fuerza: 3,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 5
            })
        } else if(champ===5){
            setPoderUnoCaract({
                nombre: "Joe, ataca!",
                vida: -3,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 10,
                turnos: 3
            })
            setPoderDosCaract({
                nombre: "Te carreo con GP",
                vida: -10,
                fuerza: 1,
                fuerzaEnemigo: 3,
                danios: 0,
                turnos: 3
            })
            setPoderTresCaract({
                nombre: "Muestra a su hermana",
                vida: -5,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 12,
                turnos: 3
            })
            setPoderCuatroCaract({
                nombre: "Tira el dado de 200 caras",
                vida: -15,
                fuerza: 4,
                fuerzaEnemigo: 1,
                danios: 10,
                turnos: 6
            })
        } else if(champ===6){
            setPoderUnoCaract({
                nombre: "Chip chip",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 5,
                turnos: 2
            })
            setPoderDosCaract({
                nombre: "Destructor Joe",
                vida: -4,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 9,
                turnos: 3
            })
            setPoderTresCaract({
                nombre: "Ver una serie entera",
                vida: 10,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 4
            })
            setPoderCuatroCaract({
                nombre: "Misil marino",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 0.5,
                danios: 16,
                turnos: 2
            })
        } else if(champ===7){
            setPoderUnoCaract({
                nombre: "Chancla de mi vieja",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 6,
                turnos: 3
            })
            setPoderDosCaract({
                nombre: "Mamá! Corta la luz!",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 3,
                danios: 5,
                turnos: 4
            })
            setPoderTresCaract({
                nombre: "Copia campeón",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 12,
                turnos: 5
            })
            setPoderCuatroCaract({
                nombre: "Derrame cerebral",
                vida: 12,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 2
            })
        } else if(champ===8){
            setPoderUnoCaract({
                nombre: "Pole Dance golpe",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 6,
                turnos: 2
            })
            setPoderDosCaract({
                nombre: "Me hago un pansito",
                vida: 12,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 3
            })
            setPoderTresCaract({
                nombre: "Queres ser tu propio jefe?",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 3,
                danios: 5,
                turnos: 4
            })
            setPoderCuatroCaract({
                nombre: "Explota la botella de cande",
                vida: -20,
                fuerza: 3,
                fuerzaEnemigo: 0.5,
                danios: 20,
                turnos: 5
            })
        } else if(champ===9){
            setPoderUnoCaract({
                nombre: "Auau aauuu",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 6,
                turnos: 3
            })
            setPoderDosCaract({
                nombre: "Maestro de lol",
                vida: -2,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 9,
                turnos: 3
            })
            setPoderTresCaract({
                nombre: "Polivalente",
                vida: 10,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 4
            })
            setPoderCuatroCaract({
                nombre: "Aaahh ya fue ya",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 0.5,
                danios: 18,
                turnos: 5
            })
        } else if(champ===10){
            setPoderUnoCaract({
                nombre: "",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 20,
                turnos: 2
            })
            setPoderDosCaract({
                nombre: "",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 20,
                turnos: 2
            })
            setPoderTresCaract({
                nombre: "",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 20,
                turnos: 2
            })
            setPoderCuatroCaract({
                nombre: "",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 20,
                turnos: 2
            })
        }
    }, [champ])
    useEffect(()=>{
        if(champEnemigo===1){
            setPoderUnoCaractEnemigo({
                nombre: "Draven",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 4,
                turnos: 2
            })
            setPoderDosCaractEnemigo({
                nombre: "Grito nórdico",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 9,
                turnos: 3
            })
            setPoderTresCaractEnemigo({
                nombre: "Melena dura",
                vida: 12,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 4
            })
            setPoderCuatroCaractEnemigo({
                nombre: "Esto no está perdido!",
                vida: 10,
                fuerza: 2,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 6
            })
        } else if(champEnemigo===2){
            setPoderUnoCaractEnemigo({
                nombre: "Te regalo cajita wacho",
                vida: 0,
                fuerza: 2,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 5
            })
            setPoderDosCaractEnemigo({
                nombre: "Pero mirá a este hijo de puta!",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 10,
                turnos: 2
            })
            setPoderTresCaractEnemigo({
                nombre: "Muestra a su hermana",
                vida: -5,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 15,
                turnos: 3
            })
            setPoderCuatroCaractEnemigo({
                nombre: "Peligro es mi segundo nombre",
                vida: 15,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 4
            })
        } else if(champEnemigo===3){
            setPoderUnoCaractEnemigo({
                nombre: "Only Garen",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 6,
                turnos: 2
            })
            setPoderDosCaractEnemigo({
                nombre: "It's Russou",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 9,
                turnos: 4
            })
            setPoderTresCaractEnemigo({
                nombre: "Calmate alteradito",
                vida: 12,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 4
            })
            setPoderCuatroCaractEnemigo({
                nombre: "Demacia!!",
                vida: -3,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 10,
                turnos: 2
            })
        } else if(champEnemigo===4){
            setPoderUnoCaractEnemigo({
                nombre: "Está cayendo piedra",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 8,
                turnos: 2
            })
            setPoderDosCaractEnemigo({
                nombre: "Ya fue, me mando",
                vida: -4,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 12,
                turnos: 4
            })
            setPoderTresCaractEnemigo({
                nombre: "Voy a dejar el lol",
                vida: 12,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 3
            })
            setPoderCuatroCaractEnemigo({
                nombre: "Pipa mágica",
                vida: 0,
                fuerza: 3,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 5
            })
        } else if(champEnemigo===5){
            setPoderUnoCaractEnemigo({
                nombre: "Joe, ataca!",
                vida: -3,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 10,
                turnos: 3
            })
            setPoderDosCaractEnemigo({
                nombre: "Te carreo con GP",
                vida: -10,
                fuerza: 1,
                fuerzaEnemigo: 3,
                danios: 0,
                turnos: 3
            })
            setPoderTresCaractEnemigo({
                nombre: "Muestra a su hermana",
                vida: -5,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 12,
                turnos: 3
            })
            setPoderCuatroCaractEnemigo({
                nombre: "Tira el dado de 200 caras",
                vida: -15,
                fuerza: 4,
                fuerzaEnemigo: 1,
                danios: 10,
                turnos: 6
            })
        } else if(champEnemigo===6){
            setPoderUnoCaractEnemigo({
                nombre: "Chip chip",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 5,
                turnos: 2
            })
            setPoderDosCaractEnemigo({
                nombre: "Destructor Joe",
                vida: -4,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 9,
                turnos: 3
            })
            setPoderTresCaractEnemigo({
                nombre: "Ver una serie entera",
                vida: 10,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 4
            })
            setPoderCuatroCaractEnemigo({
                nombre: "Misil marino",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 0.5,
                danios: 16,
                turnos: 2
            })
        } else if(champEnemigo===7){
            setPoderUnoCaractEnemigo({
                nombre: "Chancla de mi vieja",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 6,
                turnos: 3
            })
            setPoderDosCaractEnemigo({
                nombre: "Mamá! Corta la luz!",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 3,
                danios: 5,
                turnos: 4
            })
            setPoderTresCaractEnemigo({
                nombre: "Copia campeón",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 12,
                turnos: 5
            })
            setPoderCuatroCaractEnemigo({
                nombre: "Derrame cerebral",
                vida: 12,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 2
            })
        } else if(champEnemigo===8){
            setPoderUnoCaractEnemigo({
                nombre: "Pole Dance golpe",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 6,
                turnos: 2
            })
            setPoderDosCaractEnemigo({
                nombre: "Me hago un pansito",
                vida: 12,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 3
            })
            setPoderTresCaractEnemigo({
                nombre: "Queres ser tu propio jefe?",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 3,
                danios: 5,
                turnos: 4
            })
            setPoderCuatroCaractEnemigo({
                nombre: "Explota la botella de cande",
                vida: -20,
                fuerza: 3,
                fuerzaEnemigo: 0.5,
                danios: 20,
                turnos: 5
            })
        } else if(champEnemigo===9){
            setPoderUnoCaractEnemigo({
                nombre: "Auau aauuu",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 6,
                turnos: 3
            })
            setPoderDosCaractEnemigo({
                nombre: "Maestro de lol",
                vida: -2,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 9,
                turnos: 3
            })
            setPoderTresCaractEnemigo({
                nombre: "Polivalente",
                vida: 10,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 0,
                turnos: 4
            })
            setPoderCuatroCaractEnemigo({
                nombre: "Aaahh ya fue ya",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 0.5,
                danios: 18,
                turnos: 5
            })
        } else if(champEnemigo===10){
            setPoderUnoCaractEnemigo({
                nombre: "",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 20,
                turnos: 2
            })
            setPoderDosCaractEnemigo({
                nombre: "",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 20,
                turnos: 2
            })
            setPoderTresCaractEnemigo({
                nombre: "",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 20,
                turnos: 2
            })
            setPoderCuatroCaractEnemigo({
                nombre: "",
                vida: 0,
                fuerza: 1,
                fuerzaEnemigo: 1,
                danios: 20,
                turnos: 2
            })
        }
    }, [champEnemigo])

    useEffect(()=>{
        if(turno==0){
            setTurno(1)
        }
    },[champEnemigo])

    const poderUno = () => {
        if(poderUnoDelay===0){
            setVida(vida + poderUnoCaract.vida)
            setFuerzaMientras(poderUnoCaract.fuerza)
            setFuerzaEnemigoMientras(poderUnoCaract.fuerzaEnemigo)
            setPoderUnoDelay(poderUnoCaract.turnos)
            setDanio(poderUnoCaract.danios)
            setTurno(turno+1)
            setPoderNombre(poderUnoCaract.nombre)
            if(poderDosDelay!=0){
                setPoderDosDelay(poderDosDelay-1)
            }
            if(poderTresDelay!=0){
                setPoderTresDelay(poderTresDelay-1)
            }
            if(poderCuatroDelay!=0){
                setPoderCuatroDelay(poderCuatroDelay-1)
            }
        } else {
            document.getElementById("nombrePoder").innerHTML = "No puedes usar ese poder todavia"
        }
    } 
    const poderDos = () => {
        if(poderDosDelay===0){
            setVida(vida + poderDosCaract.vida)
            setFuerzaMientras(poderDosCaract.fuerza)
            setFuerzaEnemigoMientras(poderDosCaract.fuerzaEnemigo)
            setPoderDosDelay(poderDosCaract.turnos)
            setDanio(poderDosCaract.danios)
            setTurno(turno+1)
            setPoderNombre(poderDosCaract.nombre)
            if(poderUnoDelay!=0){
                setPoderUnoDelay(poderUnoDelay-1)
            }
            if(poderTresDelay!=0){
                setPoderTresDelay(poderTresDelay-1)
            }
            if(poderCuatroDelay!=0){
                setPoderCuatroDelay(poderCuatroDelay-1)
            }
        } else {
            document.getElementById("nombrePoder").innerHTML = "No puedes usar ese poder todavia"
        }
    }
    const poderTres = () => {
        if(poderTresDelay===0){
            setVida(vida + poderTresCaract.vida)
            setFuerzaMientras(poderTresCaract.fuerza)
            setFuerzaEnemigoMientras(poderTresCaract.fuerzaEnemigo)
            setPoderTresDelay(poderTresCaract.turnos)
            setDanio(poderTresCaract.danios)
            setTurno(turno+1)
            setPoderNombre(poderTresCaract.nombre)
            if(poderDosDelay!=0){
                setPoderDosDelay(poderDosDelay-1)
            }
            if(poderUnoDelay!=0){
                setPoderUnoDelay(poderUnoDelay-1)
            }
            if(poderCuatroDelay!=0){
                setPoderCuatroDelay(poderCuatroDelay-1)
            }
        } else {
            document.getElementById("nombrePoder").innerHTML = "No puedes usar ese poder todavia"
        }
    }
    const poderCuatro = () => {
        if(poderCuatroDelay===0){
            setVida(vida + poderCuatroCaract.vida)
            setFuerzaMientras(poderCuatroCaract.fuerza)
            setFuerzaEnemigoMientras(poderCuatroCaract.fuerzaEnemigo)
            setPoderCuatroDelay(poderCuatroCaract.turnos)
            setDanio(poderCuatroCaract.danios)
            setTurno(turno+1)
            setPoderNombre(poderCuatroCaract.nombre)
            if(poderDosDelay!=0){
                setPoderDosDelay(poderDosDelay-1)
            }
            if(poderTresDelay!=0){
                setPoderTresDelay(poderTresDelay-1)
            }
            if(poderUnoDelay!=0){
                setPoderUnoDelay(poderUnoDelay-1)
            }
        } else {
            document.getElementById("nombrePoder").innerHTML = "No puedes usar ese poder todavia"
        }    
    }

    //ENEMIGO
    const poderUnoEnemigo = () => {
        if(poderUnoDelayEnemigo===0){
            setVida(vidaEnemigo + poderUnoCaractEnemigo.vida)
            setFuerzaMientras(poderUnoCaractEnemigo.fuerza)
            setFuerzaEnemigoMientras(poderUnoCaractEnemigo.fuerzaEnemigo)
            setPoderUnoDelayEnemigo(poderUnoCaractEnemigo.turnos)
            setDanioEnemigo(poderUnoCaractEnemigo.danios)
            setPoderNombreEnemigo(poderUnoCaractEnemigo.nombre)
            if(poderDosDelayEnemigo!=0){
                setPoderDosDelayEnemigo(poderDosDelayEnemigo-1)
            }
            if(poderTresDelayEnemigo!=0){
                setPoderTresDelayEnemigo(poderTresDelayEnemigo-1)
            }
            if(poderCuatroDelayEnemigo!=0){
                setPoderCuatroDelayEnemigo(poderCuatroDelayEnemigo-1)
            }
        }
        console.log(poderUnoCaractEnemigo)
        console.log(poderUnoDelayEnemigo)
    } 
    const poderDosEnemigo = () => {
        if(poderDosDelay===0){
            setVida(vidaEnemigo + poderDosCaractEnemigo.vida)
            setFuerzaMientras(poderDosCaractEnemigo.fuerza)
            setFuerzaEnemigoMientras(poderDosCaractEnemigo.fuerzaEnemigo)
            setPoderDosDelayEnemigo(poderDosCaractEnemigo.turnos)
            setDanioEnemigo(poderDosCaractEnemigo.danios)
            setPoderNombreEnemigo(poderDosCaractEnemigo.nombre)
            if(poderUnoDelayEnemigo!=0){
                setPoderUnoDelayEnemigo(poderUnoDelayEnemigo-1)
            }
            if(poderTresDelayEnemigo!=0){
                setPoderTresDelayEnemigo(poderTresDelayEnemigo-1)
            }
            if(poderCuatroDelayEnemigo!=0){
                setPoderCuatroDelayEnemigo(poderCuatroDelayEnemigo-1)
            }
        }
    }
    const poderTresEnemigo = () => {
        if(poderTresDelayEnemigo===0){
            setVida(vidaEnemigo + poderTresCaractEnemigo.vida)
            setFuerzaMientras(poderTresCaractEnemigo.fuerza)
            setFuerzaEnemigoMientras(poderTresCaractEnemigo.fuerzaEnemigo)
            setPoderTresDelayEnemigo(poderTresCaractEnemigo.turnos)
            setDanioEnemigo(poderTresCaractEnemigo.danios)
            setPoderNombreEnemigo(poderTresCaractEnemigo.nombre)
            if(poderDosDelayEnemigo!=0){
                setPoderDosDelayEnemigo(poderDosDelayEnemigo-1)
            }
            if(poderUnoDelayEnemigo!=0){
                setPoderUnoDelay(poderUnoDelayEnemigo-1)
            }
            if(poderCuatroDelayEnemigo!=0){
                setPoderCuatroDelayEnemigo(poderCuatroDelayEnemigo-1)
            }
        }
    }
    const poderCuatroEnemigo = () => {
        if(poderCuatroDelayEnemigo===0){
            setVida(vidaEnemigo + poderCuatroCaractEnemigo.vida)
            setFuerzaMientras(poderCuatroCaractEnemigo.fuerza)
            setFuerzaEnemigoMientras(poderCuatroCaractEnemigo.fuerzaEnemigo)
            setDanioEnemigo(poderCuatroCaractEnemigo.danios)
            setPoderNombreEnemigo(poderCuatroCaractEnemigo.nombre)
            if(poderDosDelayEnemigo!=0){
                setPoderDosDelayEnemigo(poderDosDelayEnemigo-1)
            }
            if(poderTresDelayEnemigo!=0){
                setPoderTresDelay(poderTresDelayEnemigo-1)
            }
            if(poderUnoDelayEnemigo!=0){
                setPoderUnoDelay(poderUnoDelayEnemigo-1)
            }
        }
    }



    //jugador
    useEffect(()=>{
        if(turno==0){
            return
        } else {
            const timer = setTimeout(()=>{
                setVidaEnemigo(vidaEnemigo - danio * fuerza)
                setFuerza(fuerzaMientras)
                setFuerzaEnemigo(fuerzaEnemigoMientras)
                if(turno>1){
                    document.getElementById("nombrePoder").innerHTML = `Has usado ${poderNombre}`
                }
            }, 300)
            const limpiador = setTimeout(()=>{
                document.getElementById("nombrePoder").innerHTML = ""
            }, 3000)
        }
    }, [turno])
    
    //enemigo
    useEffect(()=>{
        if(turno<1){
            return
        } else {
            const timer = setTimeout(()=>{
                if(poderCuatroDelayEnemigo===0){
                    console.log(poderCuatroDelayEnemigo)
                    poderCuatroEnemigo()
                    setPoderCuatroDelayEnemigo(poderCuatroCaractEnemigo.turnos)
                } else if(poderTresDelayEnemigo===0){
                    console.log(poderTresDelayEnemigo)
                    poderTresEnemigo()
                    setPoderTresDelayEnemigo(poderTresCaractEnemigo.turnos)
                } else if(poderDosDelayEnemigo===0){
                    console.log(poderDosDelayEnemigo)
                    poderDosEnemigo()
                    setPoderDosDelayEnemigo(poderDosCaractEnemigo.turnos)
                } else if(poderUnoDelayEnemigo===0){
                    console.log(poderUnoDelayEnemigo)
                    poderUnoEnemigo()
                    setPoderUnoDelayEnemigo(poderUnoCaractEnemigo.turnos)
                }
                if(turno>1){
                    document.getElementById("nombrePoderEnemigo").innerHTML = `El enemigo ha usado ${poderNombreEnemigo}`
                }
                setVida(vida - danioEnemigo / fuerzaEnemigo)
            }, 4000)
            const limpiador = setTimeout(()=>{
                document.getElementById("nombrePoderEnemigo").innerHTML = ""
            }, 6000)
        }
    }, [turno])

        let fotoEnemigo;
        if(champEnemigo===1){
            fotoEnemigo = moro
        } else if(champEnemigo===2){
            fotoEnemigo = barba
        } else if(champEnemigo===3){
            fotoEnemigo = neif
        } else if(champEnemigo===4){
            fotoEnemigo = anguila
        } else if(champEnemigo===5){
            fotoEnemigo = seba
        } else if(champEnemigo===6){
            fotoEnemigo = alva
        } else if(champEnemigo===7){
            fotoEnemigo = meme
        } else if(champEnemigo===8){
            fotoEnemigo = franken
        } else if(champEnemigo===9){
            fotoEnemigo = lean
        } else if(champEnemigo===10){
            fotoEnemigo = marian
        }
        let foto;
        if(champ===1){
            foto = moro
        } else if(champ===2){
            foto = barba
        } else if(champ===3){
            foto = neif
        } else if(champ===4){
            foto = anguila
        } else if(champ===5){
            foto = seba
        } else if(champ===6){
            foto = alva
        } else if(champ===7){
            foto = meme
        } else if(champ===8){
            foto = franken
        } else if(champ===9){
            foto = lean
        } else if(champ===10){
            foto = marian
        }

        let jugarDeNuevo = () => {
            setBool(true)
        }

        let componente
        if(vida<=0){
            componente = 
                <div className="recuadroVencedor">
                    <h1>PERDISTE!</h1>
                    <p>Quieres jugar de nuevo?</p>
                    <button className="btn btn-outline-success btn-lg btn-block" onClick={jugarDeNuevo}>Si</button>
                </div>
        } else if(vidaEnemigo<=0){
            componente = 
                <div className="recuadroVencedor">
                    <h1>GANASTE!!</h1>
                    <p>Quieres jugar de nuevo?</p>
                    <button className="btn btn-outline-success btn-lg btn-block" onClick={jugarDeNuevo}>Si</button>
                </div>
        } else {
            componente = null
        }

    return(
        <Fragment>
            <div className="row usuario">
                <div className="col-8"></div>
                <div className="col-3">
                    <img src={fotoEnemigo} className="imagenJoe imgEnemigo"></img>
                    <span id="vidaEnemigo">Vida: {vidaEnemigo}</span>
                </div>
            </div>
            <div className="row campo">
                <div className="col-12">
                    <span id="nombrePoderEnemigo"></span>
                </div>
            </div>
            <div className="row nombreAtaque">
                <div className="col-12">
                    <span id="nombrePoder"></span>
                    {componente}
                </div>
            </div>
            <div className="row usuario">
                <div className="col-1"></div>
                <div className="col-3">
                    <span id="vidaEnemigo">Vida: {vida}</span>
                    <img src={foto} className="imagenJoe imgJugador"></img>
                </div>
                <div className="col-7 stats">
                    <div className="row">
                        <div className="col-5 poder" onClick={poderUno}>{poderUnoCaract.nombre}</div>
                        <div className="col-5 poder" onClick={poderDos}>{poderDosCaract.nombre}</div>
                    </div>
                    <div className="row">
                        <div className="col-5 poder" onClick={poderTres}>{poderTresCaract.nombre}</div>
                        <div className="col-5 poder" onClick={poderCuatro}>{poderCuatroCaract.nombre}</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Inicio;