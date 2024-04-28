import React from 'react'
import { Link } from 'react-router-dom'
import Login from "./Login"
import { useForm } from "react-hook-form";
import axios from "axios"
import { toast } from 'react-hot-toast';


export default function SignUp() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password

        }
        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Signup successfully');
                }
                localStorage.setItem("users", JSON.stringify(res.data.user));
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);

                }
            })
            

    }

    return (
        <div >
            <div className="flex h-screen items-center justify-center">
                <div className="modal-box dark:bg-slate-600 dark:text-white">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg">Sign Up</h3>
                        {/* Name */}
                        <div className="mt-4 ">
                            <span>Name</span>
                            <br />
                            <input type="text" placeholder="Enter your name" className="w-98 px-3 border rounded-md outline-none mt-3 py-1"
                                {...register("fullname", { required: true })} />
                            <br />{errors.fullname && <span>This field is required</span>}
                        </div>
                        {/* Email */}
                        <div className="mt-4 ">
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder="Enter your email" className="w-98 px-3 border rounded-md outline-none mt-3 py-1"
                                {...register("email", { required: true })} />
                            <br />{errors.email && <span>This field is required</span>}
                        </div>
                        {/* password */}
                        <div className="mt-4">
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder="Enter password" className="w-98 px-3 border rounded-md outline-none mt-3 py-1 "
                                {...register("password", { required: true })} />
                            <br />{errors.password && <span>This field is required</span>}
                        </div>
                        {/* Button */}
                        <div className="flex justify-between mt-4">
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Sign up</button>
                            <p className="text-sm">Already registered? {" "}
                                <button className="underline text-blue-400 cursor-pointer"
                                    onClick={() =>
                                        document.getElementById("my_modal_3").showModal()}
                                >
                                    Login
                                </button>
                                <Login />
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
