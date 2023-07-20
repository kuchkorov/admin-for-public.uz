import { useEffect, useState } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { BiEdit, BiSolidMessageSquareX } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import './allarticles.css';

function Allarticles() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false)
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/articles")
      .then((res) => setArticles(res.data))
      .catch((err) => console.error(err));
  }, []);

  const ShowModal =(id)=> {
    fetch(`http://localhost:5000/articles/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unable to fetch data");
        } else return res.json();
      })
      .then((res) => {
        // console.log(res);
        return setShowModal(res);
      })
      .catch((err) => console.error(err));
    }

    const handleDelete =(id)=> {
      const confirm = window.confirm("o'chirishni hohlaysizmi?")
      if(confirm) {
        axios.delete("http://localhost:5000/articles/" + id)
        .then( res => {
          window.location.reload();
        }).catch(err => 
          console.log(err))
      }
    }
  

  return (
    <section>
      <div className="Journal-page">
        <div className="">
          <h1 className="title-our-jurnal text-center">Bizning Maqolalar</h1>
          <Link to="/addarticle"><button className="btn btn-primary">Maqola qo'shish</button></Link>
          <table className="table table-bordered " border="1">
            <thead>
              <tr className="text-center">
                <th scope="col">ID</th>
                <th scope="col">Nomi</th>
                <th scope="col">Annotatsiya</th>
                <th scope="col">Kun</th>
                <th scope="col">Muallif</th>
                <th scope="col">Pdf fayl</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((value) => {
                return (
                  <tr key={value.id}>
                    <th scope="row">{value.id}</th>
                    <td>{value.name}</td>
                    <td>{value.annotation}</td>
                    <td>{value.date}</td>
                    <td>{value.autor}</td>
                    <td><iframe src={value.pdf} frameborder="0"></iframe></td>
                    <td style={{ display: "flex" }}>
                      <Link to={`/updatejournal/${value.id}`}><button
                        className="btn btn-primary m-2"
                        title="Tahrirlash"
                      >
                        <BiEdit />
                      </button>
                      </Link>
                      <button className="btn btn-success m-2" title="Ko'rish" onClick={(e)=>ShowModal(value.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <BsFillEyeFill />
                      </button>
                   
                      <button onClick={(e)=>handleDelete(value.id)} className="btn btn-danger m-2" title="O'chirish">
                        <BiSolidMessageSquareX />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
     



      <div className="modal fade" style={{ margin: "auto"}} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content"  style={{width: "800px"}}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Jurnal haqida Batafsil</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

               <div className="row">
                  <div className="col-lg-12">
                   <h5> Nomi:</h5> <span> {showModal.name}</span> <br /><hr />
                    <h5>Annotatsiya:</h5> <span>{showModal.annotation}</span> <br /><hr />
                    <h5>Mazmuni:</h5> <span>{showModal.pdf}</span><hr />
                    <h5>Kun:</h5> <span>{showModal.date}</span><hr />
                    <h5>Muallif:</h5> <span>{showModal.autor}</span>
                  </div>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Ortga</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Allarticles;


