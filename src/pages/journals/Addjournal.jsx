import {useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import "./journals.css";

function Addjournal() {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: '',
        img: '',
        title: '',
        describtion: ''
    })

    const handleSubmit = async (e)=> {
        e.preventDefault();
        try {
          await axios.post("http://localhost:8800/journals", input)
          navigate("/journals");
          
        } catch (error) {
          console.log(error);  
        }
    }
    
  return (
    <div className="add-journal">
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
            <input type="text" className="form-control" onChange={(e)=> setInput({...input, describtion: e.target.value})} required />
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
    </div>
  );
}

export default Addjournal;
