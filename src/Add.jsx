import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"


const initial = {
    caption: "",
    location: "",

}
export default function
    () {
    const [change, setChange] = useState(initial);
    const [record, setRecord] = useState(JSON.parse(localStorage.getItem("instagram")));
    const [img, setimg] = useState("")

    const changeEvent = (event) => {
        const name = (event.target.name);
        const value = (event.target.value);
        setChange({ ...change, [name]: value });

    }

    const changeEventimg = (e) => {
        const files = e.target.files
        const img = URL.createObjectURL(files[0])
        setimg(img);
    }


    const AddClick = (e) => {
        e.preventDefault();
        const newuser = { ...change, img };
        console.log("newuser", newuser);
        localStorage.setItem("instagram", JSON.stringify(([...record, newuser])))
        setRecord([...record, newuser]);
        console.log(record);
        setChange(initial);

    }
    return (
        <div className='add'>

            <div>
                <h1>add post</h1>
                <input
                    type="file"
                    id="img"
                    name="img"
                    // value={change.img}
                    accept="image/*"
                    onChange={(e) => changeEventimg(e)}
                /><br></br>

                <input
                    type="text"
                    placeholder='write a caption'
                    id='caption'
                    name='caption'
                    className='addinput'
                    value={change.caption}
                    onChange={changeEvent}
                /><br></br>

                <input
                    type="text"
                    placeholder='location'
                    id='location'
                    name='location'
                    className='addinput'
                    value={change.location}
                    onChange={changeEvent}
                /><br></br>

                <Link to="/"><button className='btnAdd' onClick={(e) => AddClick(e)}>add</button></Link>

            </div>
        </div>

    )
}
