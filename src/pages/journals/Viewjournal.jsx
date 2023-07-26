import { useEffect, useState } from "react";
import axios from "axios"
import './journals.css'
import { useParams, Link } from "react-router-dom";

function Viewjournal() {
  const [journal, setJournals] = useState([]);
  const {id} = useParams();
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
                <img
                  className="img-fluid"
                  src={`../upload/${journal.img}`}
                  alt={journal.name}
                />
              </div>
              <div className="col-sm-9">
                <h5>Nomi: {journal.name}</h5>
                <h5>Sarlovhasi: {journal.title}</h5>
                <h5>Tasmifi: {journal.describtion}</h5>
              </div>
            </div>
          );

        <Link to="/journals" className="btn btn-danger mt-4" >
          Ortga
        </Link>
      </div>
    </div>
  );
}

export default Viewjournal;
