import React, { Component } from 'react';
//import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeNim = this.onChangeNim.bind(this);
    this.onChangeNama = this.onChangeNama.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeProdi = this.onChangeProdi.bind(this);
    this.onChangeAlamat = this.onChangeAlamat.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nim: '',
      nama: '',
      email: '',
      prodi: '',
      alamat: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                nim: response.data.nim, 
                nama: response.data.nama,
                email: response.data.email,
                prodi: response.data.prodi,
                alamat: response.data.alamat });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeNim(e) {
    this.setState({
      nim: e.target.value
    });
  }
  onChangeNama(e) {
    this.setState({
      nama: e.target.value
    })  
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeProdi(e) {
    this.setState({
      prodi: e.target.value
    })  
  }
  onChangeAlamat(e) {
    this.setState({
      alamat: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nim: this.state.nim,
      nama: this.state.nama,
      email: this.state.email,
      prodi: this.state.prodi,
      alamat: this.state.alamat
    };
    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <form onSubmit={this.onSubmit} style={{ padding: 5, width: 1130 }}>
            <h5 style={{paddingTop: 10, paddingBottom: 5}}>Edit Data Mahasiswa</h5>
            <hr></hr>
            <div className="form-group" style={{paddingTop: 10}}>
                <label>NIM</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={this.state.nim}
                    onChange={this.onChangeNim}
                    />
            </div>
            <div className="form-group">
                <label>Nama</label>
                <input type="text" 
                    className="form-control"
                    value={this.state.nama}
                    onChange={this.onChangeNama}
                    />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" 
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    />
            </div>
            <div className="form-group">
                    <label>Program Studi</label>
                    <select className="form-control" value={this.state.prodi} onChange={this.onChangeProdi}>
                        <option value> ---Pilih Prodi---</option> 
                        <option value="Mekatronika">Mekatronika</option>
                        <option value="Manajemen Informatika">Manajemen Informatika</option>
                        <option value="Teknik Alat Berat">Teknik Alat Berat</option>
                        <option value="Teknik Kontruksi Bangunan Gedung">Teknik Kontruksi Bangunan Gedung</option>
                        <option value="Teknik Manufaktur">Teknik Manufaktur</option>
                        <option value="Teknik Otomotif">Teknik Otomotif</option>
                        <option value="Teknik Pengolahan Perkakas Produksi">Teknik Pengolahan Perkakas Produksi</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Alamat</label>
                    <textarea type="text" name="alamat" rows="3" className="form-control"
                    value={this.state.alamat} onChange={this.onChangeAlamat}/>
                </div><br></br>
            <div className="form-group">
                <input type="submit" value="Edit" className="btn btn-primary"/>&nbsp;&nbsp;&nbsp;
                <input type="cancel" value="Batal" className="btn btn-danger"/>
            </div>
        </form>
    )
  }
}