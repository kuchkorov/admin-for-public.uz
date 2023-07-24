import { useEffect, useState } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { BiEdit, BiSolidMessageSquareX } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import './journals.css';

function Journals() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false)
  const [journals, setJournals] = useState([]);


//Get All info
  useEffect(() => {
    const fetchAllJOurnals = async () => {
      try {
      const res = await axios.get("http://localhost:8800/journals")
      setJournals(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchAllJOurnals()
  }, []);


// Get by ID
  const ShowModal =(id)=> {
    fetch(`http://localhost:8800/journals/${id}`)
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

// Delete Info
    const handleDelete = async (id)=> {
      const confirm = window.confirm("o'chirishni hohlaysizmi?")
      try {
        if(confirm) {
        await axios.delete("http://localhost:8800/journals/" + id)
        window.location.reload();
        toast.success("Jurnal bazadan o'chirildi!")
      }
      } catch (error) {
        console.log(error)
      }
    }
  

  return (
    <section >
      <div className="Journal-page">
      <ToastContainer />
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
                    <td>{value.describtion}</td>
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
                    <h5>Tasmifi:</h5> <span>{showModal.describtion}</span>
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


