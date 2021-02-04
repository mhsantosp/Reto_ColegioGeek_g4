import React from 'react';
import axios from 'axios';

import { Redirect, withRouter } from 'react-router-dom';
import { Materias } from '../Utiles/Mocks/Materias';

class Directivos_registro_materias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Bool: false
        }
    }

    form = () => {
        document.getElementById("RegistroEsContainer").style.filter = "blur(1px)";
        document.getElementById("Form").style.display = "flex";
        document.getElementById("Form").style.zIndex = "60";
    }
    Cambio = () => {
        document.getElementById("Form").style.display = "none";
        document.getElementById("RegistroEsContainer").style.filter = "blur(0)";
    }

    Push_ = () => {

        Materias.push({
            CodigoM: document.getElementById("CodigoGIn").value,
            Nombre: document.getElementById("NombreIn").value.toUpperCase(),
            Sexto: document.getElementById("Check1").checked,
            Septimo: document.getElementById("Check2").checked,
            Octavo: document.getElementById("Check3").checked,
            Noveno: document.getElementById("Check4").checked,
            Decimo: document.getElementById("Check5").checked,
            Once: document.getElementById("Check6").checked,
            Intencidad: document.getElementById("IntencidadIn").value
        });

        document.getElementById("Form").style.display = "none";
        document.getElementById("RegistroEsContainer").style.filter = "blur(0)";

        this.setState({
            Bool: true
        })

        return this;
    }

    //Petición get para obtener las materias existentes
    componentDidMount(){
        axios.get(``, { /* ??? */ })
          .then(res =>{
            console.log(res.data)
            this.setState({
              datos: res.data
            })
        }).catch(err=>{
          console.log(err.massage)
        })
      }
    //Fin get

    //Petición post para agregar nuevas materias
    componentDidMount(){
        axios.post(``, { cod_materia: this.state.cod_materia, nombre_materia: this.state.nombre_materia, sexto: this.state.sexto, septimo: this.state.septimo, octavo: this.state.octavo, noveno: this.state.noveno, decimo: this.state.decimo, once: this.state.once,  })
          .then(res =>{
            console.log(res.data)
            this.setState({
              datos: res.data
            })
        }).catch(err=>{
          console.log(err.massage)
        })
      }
    //Fin post
    render() {
        return (
            <>
                <div id="Form">
                    <div id="Form2">

                        <div id="Form2_21">

                            <img className="ImgProfile" src="https://1.bp.blogspot.com/-uMbl2HbB-W0/X0ni-gTOYbI/AAAAAAAAPOs/m-VG-q_myzkjtpV5krfPl3sRb89RWNYBQCLcBGAsYHQ/s16000/Materias.png" />
                        </div>
                        <div id="Form2_2">
                            <div className="Form2_2_2">
                                <input className="REInput" id="CodigoGIn" placeholder="Codigo" autoComplete="off" />
                                <input className="REInput" id="NombreIn" placeholder="Nombre" autoComplete="off" />
                                <input className="REInput" id="IntencidadIn" type="number" min="0" placeholder="Intencidad horaria" autoComplete="off" />
                                <input onClick={this.Push_} className="REInput" type="button" value="Agregar" />
                                <input type="button" onClick={this.Cambio} className="REInput" value="Cancelar" />
                            </div>
                        </div>
                        <div className="Form2_2_2">
                            <p className="PChek">6: <input type="checkbox" id="Check1" /></p>
                            <p className="PChek">7: <input type="checkbox" id="Check2" /></p>
                            <p className="PChek">8: <input type="checkbox" id="Check3" /></p>
                            <p className="PChek">9: <input type="checkbox" id="Check4" /></p>
                            <p className="PChek">10: <input type="checkbox" id="Check5" /></p>
                            <p className="PChek">11: <input type="checkbox" id="Check6" /></p>
                        </div>

                    </div>
                </div>

                <div id="RegistroEsContainer">
                    <div className="FiltrosREstudiante">
                        <input type="text" className="SelectR" placeholder="Cod Materia" autoComplete="off" />
                        <input type="text" className="SelectR" placeholder="Nombre" autoComplete="off" />
                        <p className="Chek Sexto"  >6: <input type="checkbox" /></p>
                        <p className="Chek Septimo">7: <input type="checkbox" /></p>
                        <p className="Chek Octavo" >8: <input type="checkbox" /></p>
                        <p className="Chek Noveno" >9: <input type="checkbox" /></p>
                        <p className="Chek Decimo" >10: <input type="checkbox" /></p>
                        <p className="Chek Once"   >11: <input type="checkbox" /></p>

                        <input type="text" className="SelectR  GradoF" placeholder="Intencidad" autoComplete="off" />
                        <input id="ImgRMas" type="button" autoComplete="off" onClick={this.form} />
                        {this.state.Bool && <Redirect to={{
                            pathname: "/directivos/registro_Materias",
                            state: {
                                Name: this.props.location.state.Name,
                                Contraseña: this.props.location.state.Contraseña,
                                Usuario: this.props.location.state.Usuario,
                                Edad: this.props.location.state.Edad,
                                Cargo: this.props.location.state.Cargo
                            }
                        }}>
                        </Redirect>}
                    </div>
                    <div id="CardsContainerReEs">
                        {Materias.map((Esito, index) => {
                            return (
                                <div key={index} className="FiltrosREstudiante">
                                    <div className="SelectR">
                                        <p>{Esito.CodigoM}</p>
                                    </div>
                                    <div className="SelectR">
                                        <p className="Peque" >{Esito.Nombre}</p>
                                    </div>

                                    <input type="checkbox" className="Chek Sexto" checked={Esito.Sexto} />
                                    <input type="checkbox" className="Chek Septimo" checked={Esito.Septimo} />
                                    <input type="checkbox" className="Chek Octavo" checked={Esito.Octavo} />
                                    <input type="checkbox" className="Chek Noveno" checked={Esito.Noveno} />
                                    <input type="checkbox" className="Chek Decimo" checked={Esito.Decimo} />
                                    <input type="checkbox" className="Chek Once" checked={Esito.Once} />

                                    <div className="SelectR GradoF">
                                        <p>{Esito.Intencidad}</p>
                                    </div>
                                    <div className="ImgRMas">
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Directivos_registro_materias); 