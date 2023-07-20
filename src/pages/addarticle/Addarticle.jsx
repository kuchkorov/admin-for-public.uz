import {useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'

import { v4 as uuidv4 } from 'uuid';
import "./addarticle.css";

function Addartice() {

    const navigate = useNavigate();
    // const [file, setFile] = useState('')
    const [input, setInput] = useState({
        id: uuidv4(),
        name: '',
        annotation: '',
        date: '',
        autor: '',
        file: '',
    })

    // let formData = new FormData()

    // const uploadFile = (e)=> {
    //   console.log(e.target.files[0]);
    //   formData.append('input', input)
    //   if(e.target && e.target.files[0]) {
    //   }
    // }
    
    const handleSubmit =(e)=> {
      e.preventDefault();
        axios.post("http://localhost:5000/articles", input)
        .then(res => {
            console.log(res);
            navigate("/allarticles");
        })
        .catch(err => {
          console.log(err);
        })
    }
  return (
    <>
      <form className="w-100" onSubmit={handleSubmit}>
        <div className="mr-3">
          <label className="form-label">
            <span>Jurnal nomi</span>
            <input type="text" className="form-control" onChange={(e)=> setInput({...input, name: e.target.value})} required />
          </label>
        </div>
        <div className="mr-3">
          <label className="form-label">
            <span>Annotatsiya</span>
            <input type="text" className="form-control" onChange={(e)=> setInput({...input, annotation: e.target.value})} required />
          </label>
        </div>
        <div className="mr-3">
          <label className="form-label">
            <span>Nashr qilingan kun</span>
            <input type="date" className="form-control" onChange={(e)=> setInput({...input, date: e.target.value})} required />
          </label>
        </div>
        <div className="mr-3">
          <label className="form-label">
            <span>Muallif</span>
            <input type="text" className="form-control" onChange={(e)=> setInput({...input, autor: e.target.value})} required />
          </label>
        </div>
        <div className="mr-3">
          <label className="form-label">
            <span>PDF fayl</span>
            <input type="file" className="form-control" onChange={(e)=> setInput({...input, file: e.target.files[0]})} required />
          </label>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginRight: "5px"}}>
          Saqlash
        </button>
        <Link to="/allarticles"><button type="submit" className="btn btn-danger">
          Ortga
        </button>
        </Link>
      </form>
    </>
  );
}

export default Addartice;
