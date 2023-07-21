import { useEffect, useState } from "react";
import "./journal.css";

function Viewjournal({ closeModal }) {
  const [journal, setJournals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/journals/:id`)
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

  return (
    <div className="view-journal">
      <div className="container">
        {journal.map((value) => {
          return (
            <div className="row">
              <div className="col-sm-3">
                <img
                  className="img-fluid"
                  src={value.img}
                  alt={value.name}
                />
              </div>
              <div className="col-sm-9">
                <h5>Nomi: {value.name}</h5>
                <h5>Sarlovhasi: {value.title}</h5>
                <h5>Tasmifi: {value.desc}</h5>
              </div>
            </div>
          );
        })}

        <button className="btn btn-danger mt-4" onClick={closeModal}>
          Ortga
        </button>
      </div>
    </div>
  );
}

export default Viewjournal;
