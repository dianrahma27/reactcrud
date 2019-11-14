import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {

  constructor(props) {
        super(props);
        //this.delete = this.delete.bind(this);
    }
    
  render() {
    return (
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
    );
  }
}

export default TableRow;