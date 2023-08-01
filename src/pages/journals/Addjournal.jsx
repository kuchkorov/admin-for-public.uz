import {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import moment from "moment";
import axios from 'axios'
import "./journals.css";

function Addjournal() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [img, setImg] = useState("");

    
    const upload = async () => {
      try {
        const formData = new FormData();
        formData.append("img", img);
        const res = await axios.post("http://localhost:8800/upload", formData);
        // console.log(res.data);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };

    const handleClick = async (e)=> {
        e.preventDefault();
        const imgUrl = await upload()
        try {
         const res = await axios.post("http://localhost:8800/journals/", {
            name, title, describtion: value, img: imgUrl
          })
          console.log(res.data);
          // navigate("/journals");
          
        } catch (error) {
          console.log(error);  
        }
    }

       
    return (
      <div className="add-journal">
        <div className="content">
          <input
            type="text"
            value={name}
            placeholder="Jurnal nomi"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={title}
            placeholder="Jurnal sarlovhasi"
            onChange={(e) => setTitle(e.target.value)}
          />
          
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value} 
              onChange={setValue}
            />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input
              // style={{ display: "none" }}
              type="file"
              id="file"
              onChange={(e) => setImg(e.target.files[0])}
            />
            <label className="file" htmlFor="file">
              Upload Image
            </label>
            <div className="buttons">
              <button>Save as a draft</button>
              <button onClick={handleClick}>Publish</button>
            </div>
          </div>
          
        </div>
      </div>
    );
}

export default Addjournal;
