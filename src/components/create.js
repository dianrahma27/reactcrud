import React, { Component } from 'react';

export default class Create extends Component {

    data;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            nim: '',
            nama: '',
            email:'',
            prodi: '',
            alamat: ''
        }
    }

    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }
    // on form submit...
    handleFormSubmit(e) {
        e.preventDefault()
        localStorage.setItem('document',JSON.stringify(this.state)
        ,alert('berhasil menyimpan'));
    }
    
    // React Life Cycle
    componentDidMount() {
        this.data = JSON.parse(localStorage.getItem('document'));
    
        if (localStorage.getItem('document')) {
            this.setState({
                nim: this.data.nim,
                nama: this.data.nama,
                email: this.data.email,
                prodi: this.data.prodi,
                alamat: this.data.alamat
        })
        } else {
            this.setState({
                nim: '',
                nama: '',
                email:'',
                prodi: '',
                alamat: ''
            })
        }
    }

    render() {
        return(
            <form onSubmit={this.handleFormSubmit} style={{ padding: 5, width: 1130 }}>
                <h5 style={{paddingTop: 10, paddingBottom: 5}}>Tambah Data Mahasiswa</h5>
                <hr></hr>
                <div className="form-group" style={{paddingTop: 10}}>
                    <label>NIM: </label>
                    <input type="text" name="nim" className="form-control" placeholder="Masukkan NIM" 
                    onChange={this.handleChange} value={this.state.nim}/>
                </div>
                <div className="form-group">
                    <label>Nama: </label>
                    <input type="text" name="nama" className="form-control" placeholder="Masukkan Nama" 
                    onChange={this.handleChange} value={this.state.nama}/>
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" name="email" className="form-control" placeholder="Masukkan email" 
                    onChange={this.handleChange} value={this.state.email}/>
                </div>
                <div className="form-group">
                    <label>Program Studi</label>
                    <select className="form-control" onChange={this.handleChange} name="prodi" value={this.state.prodi}>
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
                    <label>Alamat:</label>
                    <textarea type="text" name="alamat" rows="3" className="form-control" placeholder="Masukkan alamat"
                    onChange={this.handleChange} value={this.state.alamat}/>
                </div><br></br>
                <div className="form-group">
                    <input type="submit" value="Simpan" className="btn btn-primary" onClick={this.handleFormSubmit}/> &nbsp;&nbsp;&nbsp;
                    <input type="reset" value="Batal" className="btn btn-danger" style={{width: 80}}/>
                </div>
            </form>
        )
    }
}