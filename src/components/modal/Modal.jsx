import React from 'react'
import './modal.css'

function Modal({ShowModal}) {

  const {name, img, title, desc} = ShowModal
  
  return (
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
                      src={img}
                      alt={name}
                    />
                  </div>
                  <div className="col-sm-9" style={{display: "flex"}}>
                   <h5> Nomi:</h5> <span> {name}</span> <br />
                    <h5>Sarlovhasi:</h5> <span>{title}</span> <br />
                    <h5>Tasmifi:</h5> <span>{desc}</span>
                  </div>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Ortga</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Modal