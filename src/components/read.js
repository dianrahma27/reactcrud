import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Read extends Component {

  constructor(props) {
    super(props.userData);
  }

  render() {
    return (
      <div className="body" style={{padding: 5 }}>
        <h5 style={{paddingTop: 10, paddingBottom: 5}}>Data Mahasiswa</h5>
        <hr></hr>
        <table className="table table-bordered table-striped" style={{ marginTop: 20, textAlign: "center"}}>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Prodi</th>
              <th>Alamat</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {this.props.obj.nim}
              </td>
              <td>
                {this.props.obj.nama}
              </td>
              <td>
                {this.props.obj.email}
              </td>
              <td>
                {this.props.obj.prodi}
              </td>
              <td>
                {this.props.obj.alamat}
              </td>
              <td>
                <Link to={"/edit/"+this.props.obj.nim} className="btn btn-success">Edit</Link>
              </td>
              <td>
                <button className="btn btn-danger"><i className="fa fa-trash"></i>Delete</button>
              </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }