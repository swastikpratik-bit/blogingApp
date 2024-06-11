import { signupInput } from '@swastikpratik/blog-common';
import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../config';


const SignupAuth = () => {

    const [postInputs, setPostInputs] = useState<signupInput>({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    async function sendRequest() {
        try {
            console.log("here");
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
                name: postInputs.name,
                email: postInputs.email,
                password : postInputs.password
            });
            const jwt = res.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");

        } catch (error) {
            alert("Error while signing up !")
        }
    }

    return (
        <div className="flex justify-center h-[75vh] flex-col lg:h-screen ">
            <div className="flex justify-center">
                <div className='w-[70%]  lg:w-[50%]'>
                    <div className='text-center'>
                        <div className="text-3xl font-extrabold">
                            Create an account
                        </div>
                        <div className="text-xl text-slate-500">
                            Already have an account <Link className="pl-2 underline" to={"/signin"}>Log In</Link> 
                        </div>
                    </div>
                    <div className='pt-8'>
                        <InputComponent title='Name' placeholder='Swastik Pratik' onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                name: e.target.value
                            })
                        }} />
                        <InputComponent title='Email' placeholder='example@gmail.com' onChange={(e) => {
                            setPostInputs({
                            ...postInputs,
                            email: e.target.value
                            })
                        }}/>
                        <InputComponent type='password' title='Password' placeholder='password' onChange={(e) => {
                            setPostInputs({
                            ...postInputs,
                            password: e.target.value
                            })
                        }}/>
                        <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4 w-full">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface InputLabelType{
    type? : string,
    title: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputComponent ({type ,title, placeholder ,onChange} : InputLabelType ){
    return (
    
        <div>
            <label className="pt-2 block mb-2 text-md text-black font-semibold">{ title}</label>
            <input onChange={onChange} type={type || 'text'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required  />
        </div>
        
    )
}

export default SignupAuth;