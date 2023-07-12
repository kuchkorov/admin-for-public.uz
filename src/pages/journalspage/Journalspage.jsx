import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { BiEdit, BiSolidMessageSquareX } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import './journalpage.css';
import Modal from "../../components/modal/Modal";
import Viewjournal from "../view/Viewjournal";

function Journals() {
  const [showModal, setShowModal] = useState(false)
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/journals")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unable to fetch data");
        } else return res.json();
      })
      .then((res) => {
        // console.log(res);
        return setJournals(res);
      })
      .catch((err) => console.error(err));
  }, []);

  const ShowModal =(id)=> {
    fetch(`http://localhost:5000/journals/${id}`)
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
  

  return (
    <section>
      <div className="Journal-page">
        <div className="">
          <h1 className="title-our-jurnal text-center">Bizning jurnallar</h1>
          <Link to="/addjournal"><button className="btn btn-primary">Jurnal qo'shish</button></Link>
          <table className="table table-bordered " border="1">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">FOTO</th>
                <th scope="col">NOMI</th>
                <th scope="col">SARLOVHA</th>
                <th scope="col">TASNIFI</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {journals.map((value) => {
                return (
                  <tr key={value.id}>
                    <th scope="row">{value.id}</th>
                    <td>
                      <img
                        src={value.img}
                        className="img-fluid"
                        alt={value.name}
                        style={{width: "50px"}}
                      />
                    </td>
                    <td>{value.name}</td>
                    <td>{value.title}</td>
                    <td>{value.desc}</td>
                    <td style={{ display: "flex" }}>
                      <button
                        className="btn btn-primary m-2"
                        title="Tahrirlash"
                      >
                        <BiEdit />
                      </button>
                      <button className="btn btn-success m-2" title="Ko'rish" onClick={(e)=>ShowModal(value.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <BsFillEyeFill />
                      </button>
                   
                      <button className="btn btn-danger m-2" title="O'chirish">
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
                  <div className="col-sm-3">
                    <img
                      className="img-fluid"
                      src={showModal.img}
                      alt={showModal.name}
                    />
                  </div>
                  <div className="col-sm-9">
                   <h5> Nomi:</h5> <span> {showModal.name}</span> <br />
                    <h5>Sarlovhasi:</h5> <span>{showModal.title}</span> <br />
                    <h5>Tasmifi:</h5> <span>{showModal.desc}</span>
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

export default Journals;

{
  /* <div className="row">
            {journals.map((value)=> {
              return(
                <div className="col-md-4 my-2"  key={value.id}>
                <div className="card">
                  <div className="card-img">
                    <img src={value.img} alt="" className="img-fluid" />
                  </div>
                  <div className="card-body">
                    <h5 className="journal-name">
                     {value.name}
                    </h5>
                  </div>
                </div>
              </div>
              )
            })}
          
        </div> */
}
