import React, {useState} from "react"

function NewMovieForm({onAddMovie, url}){
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    release_year: "",
    summary: "", 
  })
}