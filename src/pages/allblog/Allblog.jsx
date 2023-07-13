import {useEffect, useState} from 'react'
import axios from 'axios';
import './allblog.css'

function Allblog() {

    const [blog, setBlog] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/blog")
          .then((res) => setBlog(res.data))
          .catch((err) => console.error(err));
      }, []);
  return (
    <>
        <div className="all-blogs">
            <div className="container">
                <div className="row">
                    {blog.map((value) => {
                        return(
                            <div className="col-md-4">
                                <div className="card ">
                                    <div className="card-img">
                                        <img src={value.img} alt={value.name} className='img-fluid' />
                                    </div>
                                    <div className="card-body">
                                        <div className='d-flex'><h5>Maqola nomi: </h5>{value.name}</div>
                                        <div className=''><h5>Maqola mazmuni: </h5>{value.desc}</div>
                                        <div className=''><h5>Kun: </h5>{value.date}</div>
                                        <div className=''><h5>Kalit so'zlar: </h5>{value.keyword}</div>
                                        <div className=''><h5>Maqola muallifi: </h5>{value.autor}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Allblog