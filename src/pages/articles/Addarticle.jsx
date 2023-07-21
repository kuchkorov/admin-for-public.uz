import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

import { v4 as uuidv4 } from 'uuid';
import "./articles.css";

function Addartice() {

  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null)
  const [name, setName] = useState('')
  const [annotation, setAnnotation] = useState('')
  const [date, setDate] = useState('')
  const [autor, setAutor] = useState('')

  // const [input, setInput] = useState({
  //     id: uuidv4(),
  //     name: '',
  //     annotation: '',
  //     date: '',
  //     autor: '',
  //     file: '',
  // })


  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    // console.log(e.target.files[0]);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile)
    formData.append('name', name)
    formData.append('annotation', annotation)
    formData.append('date', date)
    formData.append('autor', autor)

    axios.post("http://localhost:5000/articles", formData, {
      headers: {
        'Accept': 'application/json',
        "Content-Type": 'application/x-www-form-urlencoded'
      }
    })

      .then(res => {
        console.log(res);
        // navigate("/allarticles");
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="add-articles">
      <form className="w-100" onSubmit={handleFileUpload}>
        <h3 className="mb-4">Maqola qo'shish</h3>
        <div className="mr-3">
          <label className="form-label">
            <span>Maqola nomi</span>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            {/* <input type="text" className="form-control" onChange={(e)=> setInput({...input, name: e.target.value})} required /> */}
          </label>
        </div>
        <div className="mr-3">
          <label className="form-label">
            <span>Annotatsiya</span>
            <input type="text" className="form-control" value={annotation} onChange={(e) => setAnnotation(e.target.value)} required />
          </label>
        </div>
        <div className="mr-3">
          <label className="form-label">
            <span>Nashr qilingan kun</span>
            <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>
        </div>
        <div className="mr-3">
          <label className="form-label">
            <span>Muallif</span>
            <input type="text" className="form-control" value={autor} onChange={(e) => setAutor(e.target.value)} required />
          </label>
        </div>
        <div className="mr-3">
          <label className="form-label">
            <span>PDF fayl</span>
            <input type="file" className="form-control" onChange={handleFileChange} required />
          </label>
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginRight: "5px" }} disabled={!selectedFile}>
          Saqlash
        </button>
        <Link to="/allarticles"><button type="submit" className="btn btn-danger">
          Ortga
        </button>
        </Link>
      </form>
    </div>
  );
}

export default Addartice;
