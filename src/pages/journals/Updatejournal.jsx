import {useState, useEffect} from 'react'
import './journals.css';
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

function Updatejournal() {

    // const [data, setData] = useState([])
    const {id} = useParams();
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: '',
        img: '',
        title: '',
        describtion: ''
    })

    useEffect(() => {
      const UpdateJOurnal = async()=> {
        try {
         const res = await axios.get(`"http://localhost:8800/journals/${id} `)
         setInput(res.data[0])
          console.log(res);
        } catch (error) {
          console.error(error)
        }
      }
      UpdateJOurnal();
      }, []);


      const handleUpdate = async(e)=> {
        e.preventDefault();
        try {
         await axios.put("http://localhost:8800/journals/" + id, input)
         navigate("/journals");
         console.log(input);
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <>
      <form className="w-100" onSubmit={handleUpdate}>
        <h3 className='text-center mb-4'>Jurnalni tahrirlash</h3>
        <div className="mr-3">
          <label className="form-label">
            <span>Jurnal nomi</span>
            <input type="text" className="form-control" value={input.name} onChange={(e)=> setInput({...input, name: e.target.value})}  required />
          </label>
        </div>
        <div className="mr-3">
          <label className="form-label">
            <span>Jurnal muqovasi</span>
            <input type="url" className="form-control" value={input.img} onChange={(e)=> setInput({...input, img: e.target.value})} required />
          </label>
        </div>
        <div className="mr-3">
          <label className="form-label">
            <span>Jurnal sarlovhasi</span>
            <input type="text" className="form-control" value={input.title} onChange={(e)=> setInput({...input, title: e.target.value})}  required />
          </label>
        </div>
        <div className="mr-3">
          <label className="form-label">
            <span>Jurnal mazmuni</span>
            <input type="text" className="form-control" value={input.describtion} onChange={(e)=> setInput({...input, describtion: e.target.value})}  required />
          </label>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginRight: "5px"}}>
          Saqlash
        </button>
        <Link to="/journals"><button type="submit" className="btn btn-danger">
          Ortga
        </button>
        </Link>
      </form>
    </>
  )
}

export default Updatejournal