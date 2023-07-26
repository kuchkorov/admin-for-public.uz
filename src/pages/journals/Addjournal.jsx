import {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import moment from "moment";
import axios from 'axios'
import "./journals.css";

function Addjournal() {

    const navigate = useNavigate();
    const state = useLocation().state;
    const [value, setValue] = useState(state?.title || "");
    const [title, setTitle] = useState(state?.describtion || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");

    console.log(value);
    // const [input, setInput] = useState({
    //     name: '',
    //     file: '',
    //     title: '',
    //     // describtion: ''
    // })

    const upload = async () => {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const res = await axios.post("http://localhost:8800/journals", formData);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };

    // const handleSubmit = async (e)=> {
    //     e.preventDefault();
    //     upload()
    //     try {
    //       await axios.post("http://localhost:8800/journals", input)
    //       navigate("/journals");
          
    //     } catch (error) {
    //       console.log(error);  
    //     }
    // }

    const handleClick = async (e) => {
      e.preventDefault();
      const imgUrl = await upload();
  
      try {
        state
          ? await axios.put(`http://localhost:8800/journals/${state.id}`, {
              title,
              describtion: value,
              cat,
              img: file ? imgUrl : "",
            })
          : await axios.post(`http://localhost:8800/journals/`, {
              title,
              desc: value,
              cat,
              img: file ? imgUrl : "",
              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            });
            navigate("/journals")
      } catch (err) {
        console.log(err);
      }
    };
    
    return (
      <div className="add-journal">
        <div className="content">
          <input
            type="text"
            placeholder="Jurnal nomi"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
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
              name=""
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label className="file" htmlFor="file">
              Upload Image
            </label>
            <div className="buttons">
              <button>Save as a draft</button>
              <button onClick={handleClick}>Publish</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="cat">
              <input
                type="radio"
                checked={cat === "art"}
                name="cat"
                value="art"
                id="art"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="art">Huquqiy</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                checked={cat === "science"}
                name="cat"
                value="science"
                id="science"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="science">Iqtisodiy</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                checked={cat === "technology"}
                name="cat"
                value="technology"
                id="technology"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                checked={cat === "cinema"}
                name="cat"
                value="cinema"
                id="cinema"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="cinema">Tarix</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                checked={cat === "design"}
                name="cat"
                value="design"
                id="design"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="design">Falsafa</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                checked={cat === "food"}
                name="cat"
                value="food"
                id="food"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="food">Pedagogika</label>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Addjournal;
