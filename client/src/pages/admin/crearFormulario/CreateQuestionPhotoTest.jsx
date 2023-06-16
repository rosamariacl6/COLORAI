// import React, { useState} from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import Webcam from "react-webcam";
// import axios from 'axios'
// import { CameraVisor } from '../../fotos/CameraVisor';


// const  initialValues = {
   
//     test_id: 0,
//     photo_img : "",
//     photo_question_name: "",
//     question_id: ""
//   }

// export const CreatePhotoQuestionTest = () => {
//     const navigate= useNavigate();

//     const [question, setQuestion] = useState(initialValues)
//     const [questions, setQuestions] = useState([])
  
//     const {test_name,test_id} = useParams();

//     const handleChange = (e) => {
//         let {name,value} = e.target
//         setQuestion({...question,[name]:value,test_id:Number(test_id)})
    
//       }
//       const onSubmit = () => {
//         let question_id = Date.now().toString();
//         let prueba = parseInt(
//           question_id.slice(question_id.length - 8, question_id.length)
//         );
    
//         const data = {...question,question_id:prueba}
        
//         setQuestions([...questions,data])
//         setQuestion(initialValues)
//       } 
//       // console.log("QUESTIONS", questions);

//       const aceptar = () =>{
//         axios
//         .post("http://localhost:4000/photoQuestion/addPhotoQuestion",questions)
//         .then((res)=>{console.log(res)  
//           console.log("resDATAAA",res.data)
          
//         // navigate(`/editTest/${test_id}`)
//       })
//         .catch((err)=>{console.log(err)})
    
//       }

//   return (
//     <> <CameraVisorONE test_id = {test_id}  />
//     {/* <CameraVisor test_id = {test_id} /> */}
//     </>
    




//     // <>
//     //  <div>
    
//     //     <h1>{test_name}</h1>
//     //   <hr />
//     //   <input type='text'
//     //   placeholder='nombre imagen'
//     //   value={question.photo_question_name}
//     //   name='photo_question_name'
//     //   onChange={handleChange}/>
//     // </div>
//     // <div className='d-flex justify-content-center pt-3'>
//     //          <button onClick={onSubmit} > Seleccionar</button> 
//     //       </div>
//     //   <div className="col  p-5">
//     //           {questions.map((elemen,index)=>{return(
//     // <>
//     //           <p key={index}>
//     //           {elemen.photo_question_name}
//     //           </p>
//     //           <p>
//     //           {elemen.photo_img}
//     //           </p>   
//     // </>
//     //         )})}
//     //   </div>
//     //   <button onClick={aceptar}>enviar</button>
//     // </>

   
   
//   )
// }