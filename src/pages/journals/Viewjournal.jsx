import { useEffect, useState } from "react";
import axios from "axios"
import './journals.css'
import { useParams, Link } from "react-router-dom";
import { BiEdit, BiArrowToRight } from "react-icons/bi";

function Viewjournal() {
  const [journal, setJournals] = useState([]);
  const { id } = useParams();
  console.log(journal);

  useEffect(() => {
    const fetchJOurnalsId = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/journals/${id}`)
        // console.log(res.data)
        setJournals(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchJOurnalsId()
  }, []);


  return (
    <div className="view-journal">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="viewjournal-img">

              <img
                className="img-fluid"
                src={`${journal.img}`}
                alt={journal.name}
              />
            </div>
          </div>
          <div className="col-sm-9">
            <div className="viewjournal-content">
              <h5><b> Nomi:</b> {journal.name}</h5>
              <h5><b> Sarlovhasi:</b> {journal.title}</h5>
              <h5><b> Tasmifi: </b>{journal.describtion}</h5>
            </div>
            <div className="viewjournal-buttons">
              <Link to={`/updatejournal/${journal.id}`}><button
                className="btn btn-primary m-2"
                title="Tahrirlash"
              >
                <BiEdit />Tahrirlash
              </button>
              </Link>

              <Link to="/journals" className="btn btn-danger" >
                <BiArrowToRight /> Ortga
              </Link>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
}

export default Viewjournal;
