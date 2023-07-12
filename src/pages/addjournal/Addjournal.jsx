import {useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import "./addjournal.css";

function Addjournal() {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: '',
        img: '',
        title: '',
        desc: ''
    })

    const handleSubmit =(e)=> {
        e.preventDefault();
        axios.post("http://localhost:5000/journals", input)
        .then(res => {
            console.log(res);
            navigate("/journals");

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
            <span>Jurnal muqovasi</span>
            <input type="url" className="form-control" onChange={(e)=> setInput({...input, img: e.target.value})} required />
          </label>
        </div>
        <div className="mr-3">
          <label className="form-label">
            <span>Jurnal sarlovhasi</span>
            <input type="text" className="form-control" onChange={(e)=> setInput({...input, title: e.target.value})} required />
          </label>
        </div>
        <div className="mr-3">
          <label className="form-label">
            <span>Jurnal mazmuni</span>
            <input type="text" className="form-control" onChange={(e)=> setInput({...input, desc: e.target.value})} required />
          </label>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginRight: "5px"}}>
          Saqlash
        </button>
        <Link to="/journals"><button type="submit" className="btn btn-danger">
          Ortga
        </button>
        </Link>
      </form>
    </>
  );
}

export default Addjournal;
