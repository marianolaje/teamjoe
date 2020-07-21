import React,{Fragment, useEffect} from 'react'
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

const Inicio = ({setChamp, setBool, champ, setChampEnemigo}) => {

    const funcionMoro = () => {
        setChamp(1)
        setBool(false)
    }
    const funcionBarba = () => {
        setChamp(2)
        setBool(false)
    }
    const funcionNeif = () => {
        setChamp(3)
        setBool(false)
    }
    const funcionAnguila = () => {
        setChamp(4)
        setBool(false)
    }
    const funcionSeba = () => {
        setChamp(5)
        setBool(false)
    }
    const funcionAlva = () => {
        setChamp(6)
        setBool(false)
    }
    const funcionMeme = () => {
        setChamp(7)
        setBool(false)
    }
    const funcionFranken = () => {
        setChamp(8)
        setBool(false)
    }
    const funcionLean = () => {
        setChamp(9)
        setBool(false)
    }
    const funcionMari = () => {
        setChamp(10)
        setBool(false)
    }
    
    useEffect(()=>{
        let elegirEnemigo = Math.floor(Math.random() * 10);
        if(elegirEnemigo===0){
            elegirEnemigo = Math.floor(Math.random() * 10);
            if(elegirEnemigo===0){
                elegirEnemigo = Math.floor(Math.random() * 10);
            }
        }
        setChampEnemigo(elegirEnemigo)
    }, [champ])

    return(
        <Fragment>
            <h1 className="text-center">Elija a su Joe </h1>
            <div className="container altoPantalla">
                <div className="row">
                    <div className="col-3">
                        <img onClick={funcionMoro} src={moro} className="imagenJoe"></img>
                    </div>
                    <div className="col-3">
                        <img onClick={funcionBarba} src={barba} className="imagenJoe"></img>
                    </div>
                    <div className="col-3">
                        <img onClick={funcionNeif} src={neif} className="imagenJoe"></img>
                    </div>
                    <div className="col-3">
                        <img onClick={funcionAnguila} src={anguila} className="imagenJoe"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <img onClick={funcionSeba} src={seba} className="imagenJoe"></img>
                    </div>
                    <div className="col-3">
                        <img onClick={funcionAlva} src={alva} className="imagenJoe"></img>
                    </div>
                    <div className="col-3">
                        <img onClick={funcionMeme} src={meme} className="imagenJoe"></img>
                    </div>
                    <div className="col-3">
                        <img onClick={funcionFranken} src={franken} className="imagenJoe"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-3">
                        <img onClick={funcionLean} src={lean} className="imagenJoe"></img>
                    </div>
                    <div className="col-3">
                        <img onClick={funcionMari} src={marian} className="imagenJoe"></img>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Inicio;