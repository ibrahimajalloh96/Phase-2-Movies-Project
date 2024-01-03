import React, {useState} from "react"

function NewMovieForm({onAddMovie, url}){
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    release_year: "",
    summary: "", 
  })
}

const handleChange = (e)=> {
  const {name, value} = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value
  })
  )
};
console.log (form)
const handleSubmit = (e)=> {
  e.preventDefaault();
}
  fetch(url,{
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  })
  .then((resp)=>resp.json())
  .then((newMovie)=>{ })
  