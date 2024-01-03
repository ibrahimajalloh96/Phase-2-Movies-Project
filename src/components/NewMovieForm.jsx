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
  
  
}