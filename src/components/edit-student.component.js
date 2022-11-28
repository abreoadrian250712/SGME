import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class EditStudent extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentTdocumento = this.onChangeStudentTdocumento.bind(this);
    this.onChangeStudentDocumento = this.onChangeStudentDocumento.bind(this);
    this.onChangeStudentNombres= this.onChangeStudentNombres.bind(this);
    this.onChangeStudentApellidos = this.onChangeStudentApellidos.bind(this);
    this.onChangeStudentPacademico = this.onChangeStudentPacademico.bind(this);
    this.onChangeStudentSede = this.onChangeStudentSede.bind(this);
    this.onChangeStudentGrado = this.onChangeStudentGrado.bind(this);
    this.onChangeStudentGrupo = this.onChangeStudentGrupo.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      tdocumento: "",
      documento: "",
      nombres: "",
      apellidos: "",
      pacademico: "",
      sede: "",
      grado: "",
      grupo: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/students/edit-student/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          tdocumento: res.data.tdocumento,
          documento: res.data.documento,
          nombres: res.data.nombres,
          apellidos: res.data.apellidos,
          pacademico: res.data.pacademico,
          sede: res.data.sede,
          grado: res.data.grado,
          grupo: res.data.grupo,
          
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeStudentTdocumento(e) {
    this.setState({ tdocumento: e.target.value });
  }

  onChangeStudentDocumento(e) {
    this.setState({ documento: e.target.value });
  }

  onChangeStudentNombres(e) {
    this.setState({ nombres: e.target.value });
  }

  onChangeStudentApellidos(e) {
    this.setState({ apellidos: e.target.value });
  }

  onChangeStudentPacademico(e) {
    this.setState({ pacademico: e.target.value });
  }

  onChangeStudentSede(e) {
    this.setState({ sede: e.target.value });
  }

  onChangeStudentGrado(e) {
    this.setState({ grado: e.target.value });
  }

  onChangeStudentGrupo(e) {
    this.setState({ grupo: e.target.value });
  }


  onSubmit(e) {
    e.preventDefault();

    const studentObject = {
      tdocumento: this.state.tdocumento,
      documento: this.state.documento,
      nombres: this.state.nombres,
      apellidos: this.state.apellidos,
      pacademico: this.state.pacademico,
      sede: this.state.sede,
      grado: this.state.grado,
      grupo: this.state.grupo,
      
    };

    axios
      .put(
        "http://localhost:4000/students/update-student/" +
          this.props.match.params.id,
        studentObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Student successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Student List
    this.props.history.push("/student-list");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Tdocumento">
            <Form.Label>Tipo de documento</Form.Label>
            <Form.Control
              type="text"
              value={this.state.tdocumento}
              onChange={this.onChangeStudentTdocumento}
            />
          </Form.Group>

          <Form.Group controlId="Documento">
            <Form.Label>Nro. Documento</Form.Label>
            <Form.Control
              type="text"
              value={this.state.documento}
              onChange={this.onChangeStudentDocumento}
            />
          </Form.Group>

          <Form.Group controlId="Nombres">
            <Form.Label>Nombres</Form.Label>
            <Form.Control
              type="text"
              value={this.state.nombres}
              onChange={this.onChangeStudentNombres}
            />
          </Form.Group>

          <Form.Group controlId="Apellidos">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              value={this.state.apellidos}
              onChange={this.onChangeStudentApellidos}
            />
          </Form.Group>

          <Form.Group controlId="Pacademico">
            <Form.Label>Periodo Académico</Form.Label>
            <Form.Control
              type="text"
              value={this.state.pacademico}
              onChange={this.onChangeStudentPacademico}
            />
          </Form.Group>

          <Form.Group controlId="Sede">
            <Form.Label>Sede</Form.Label>
            <Form.Control
              type="text"
              value={this.state.sede}
              onChange={this.onChangeStudentSede}
            />
          </Form.Group>

          <Form.Group controlId="Grado">
            <Form.Label>Grado</Form.Label>
            <Form.Control
              type="text"
              value={this.state.grado}
              onChange={this.onChangeStudentGrado}
            />
          </Form.Group>

          <Form.Group controlId="Grupo">
            <Form.Label>Grupo</Form.Label>
            <Form.Control
              type="text"
              value={this.state.grupo}
              onChange={this.onChangeStudentGrupo}
            />
          </Form.Group>
          <br></br>
          <Button variant="danger" size="lg" block="block" type="submit">
            Actualizar Estudiante
          </Button>
        </Form>
      </div>
    );
  }
}
