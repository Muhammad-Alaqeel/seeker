import React, { useState, useRef, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Input, Spacer } from '@nextui-org/react';
import './Profile.css'
import axios from 'axios';

export default function (props) {

    const [userInfo, setuserInfo] = useState({
        file: [],
        filepreview: null,
    });

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        linkedin: "",
        image: "",
    })
    const [profileInfo, setProfileIfno] = useState([])
    // const [userId, setUserId] = useState([]) to store a specific profile id
    useEffect(() => {
        axios.get('/userProfile')
            .then(res => {
                console.log(res)
                // console.log(res.data[0]); if I want to specify a specifi id
                // setUserId(res.data[0])
                // console.log(userId);
                setProfileIfno(res.data)
            })
            .catch(err => console.log(err));
    }, [])
    // console.log(profileInfo[0].firstName)

    const handleInputChange = (event) => {
        const newuserInfo = { ...userInfo }
        newuserInfo.file = event.target.files[0];
        newuserInfo.filepreview = URL.createObjectURL(event.target.files[0]);
        setuserInfo(newuserInfo);
        // console.log(newuserInfo)
    }


    function handle(e) {
        const newdata = { ...data }
        // when writing in the input apper in the console
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    const [isSucces, setSuccess] = useState(null);

    const submit = async () => {
        const formdata = new FormData();
        formdata.append('avatar', userInfo.file);
        axios.post("/uploadImg", formdata, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(res => { // then print response status
                console.warn(res);
            })
    }

    function submitProfile(e) {
        // e.preventDefault();
        const body = JSON.stringify(data);
        axios.post("/profile", body, {
            headers: { "Content-Type": 'application/json' }
        })
            .then(res => console.log("JSON is sent"))
            .catch(err => console.log(err))
    }

    const checkName = () => {
        if (data.firstName === "" && data.lastName === "") {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className='container'>
            <div className='row border-top'>
                <div className='col-md-3 col-xl-3 col-xxl-3 col-sm-12 border-end'>
                    <div className='d-flex justify-content-center'>
                        <img className='profileImage img-fluid' src='images/1.jpg' />
                    </div>
                    {checkName() ? <h4 className='text-center fontColor mt-3 text-uppercase '> user Name </h4> : <h4 className='text-center fontColor mt-3 text-uppercase '>{data.firstName} {data.lastName}</h4>}

                    <div className='row mt-4 no-gutters d-grid gap-2'>
                        <div className='col-12'>
                            <Button className='w-100' variant="outline-primary" size="sm">Profile</Button>
                        </div>
                        {/* <div className='col-12'>
                            <Button className='w-100' variant="outline-primary" size="sm">Interest</Button>
                        </div> */}
                    </div>
                </div>
                <div className='col-md-9 mt-3 col-xl-9 col-xxl-9 col-sm-12 border-bottom border-start p-0'>
                    <div className='align-self-center border-bottom border-top border-end'>
                        <h4 className='text-center fontColor'>User Profile</h4>
                        <p className='text-center fontColor'>Add information about yourself</p>
                    </div>
                    {/* 1st button Profile */}
                    <div className='ML-3'>
                        <h5 className='mt-5 mb-5 fontColor' >User information</h5>
                        <form onSubmit={(e) => submitProfile(e)}>
                            <Input color='primary' width="500px" clearable bordered labelPlaceholder="Fisrt Name" onChange={(e) => handle(e)} id="firstName" value={data.firstName} required={true} />
                            <Spacer y={1.8} />
                            <Input color='primary' width="500px" clearable bordered labelPlaceholder="Last Name" onChange={(e) => handle(e)} id="lastName" value={data.lastName} required={true} />
                            <Spacer y={1.5} />
                            <Input
                                bordered
                                labelLeft="https://www.linkedin.com/in/"
                                placeholder="Linkedin profile"
                                color='primary'
                                width="500px"
                                onChange={(e) => handle(e)}
                                id="linkedin"
                                value={data.linkedin}
                            />
                            <Spacer y={1.0} />

                            <div className="formdesign">
                                {isSucces !== null ? <h4> {isSucces} </h4> : null}
                                <div className="form-row">
                                    <label className="text-black-50 mb-1">Select a profile image :</label>
                                    {/* onChange={handleInputChange} */}
                                    <input type="file" className="form-control" required={true} onChange={handleInputChange} id="file" value={data.file} />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                {userInfo.filepreview !== null ? <img className="profileImage mt-2" src={userInfo.filepreview} alt="UploadImage" /> : null}
                            </div>
                            <Spacer y={1.5} />
                            {/* <div className="form-row ">
                                <button className="btn btn-primary" } > Save Inmage </button>
                            </div> */}
                            <div className='d-flex justify-content-center border-top' >
                                <button type='submit' onClick={() => submit()} className="btn btn-primary mt-3">Update</button>
                            </div>
                        </form>
                        <Spacer y={1.0} />
                    </div>
                </div>
            </div>
        </div>
    )
}