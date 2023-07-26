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
                      <Link to={`/viewjournal/${value.id}`} className="btn btn-success m-2" title="Ko'rish">
                        <BsFillEyeFill />
                      </Link>
                   
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
    </section>
  );
}

export default Journals;


