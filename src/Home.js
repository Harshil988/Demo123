import React, { useState } from 'react'
import "./Style.css"
import profile from "./image/me.jpg"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

export default function Home() {

    const [data, setData] = useState(JSON.parse(localStorage.getItem("instagram")));

    const delate = (id) => {
        const copyData = data;
        copyData.splice(id, 1);
        localStorage.setItem("instagram", JSON.stringify((copyData)));
        setData([...copyData]);
    }

    console.log("DATA", data);
    return (
        <div>
            {
                data?.map((item, i) => {
                    return (
                        <div >
                            <div className='postCard'>
                                <div className='postpage'>
                                    <div >
                                        <button className='option-button' onClick={() => delate(i)}>delate</button>
                                        <div className='profileCard'>
                                            <img src={profile} alt="" className="profile" />
                                            <div className='location'>
                                                <h4>_sakhiya_1210_</h4>
                                                <p className='location-title'>{item.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src={item.img} alt="" className='image'/>
                                <div className='caption'>
                                    <h4>_sakhiya_1210_</h4>
                                    <p className='caption-title'>{item.caption}</p>
                                </div>
                                <div className='like'>
                                    <FormControlLabel
                                        control={<Checkbox icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />}
                                            name="checkedH" />}
                                    />
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
