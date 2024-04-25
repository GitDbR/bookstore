import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";



export default function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (

        <div >

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-600 dark:text-white">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        {/* Email */}
                        <div className="mt-4">
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder="Enter your email" className="w-88 px-3 border rounded-md outline-none mt-3 py-1"
                                {...register("email", { required: true })} />
                            <br />{errors.email && <span>This field is required</span>}
                        </div>
                        {/* password */}
                        <div className="mt-4">
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder="Enter password" className="w-88 px-3 border rounded-md outline-none mt-3 py-1 "
                                {...register("password", { required: true })} />
                            <br />{errors.password && <span>This field is required</span>}
                        </div>
                        {/* Button */}
                        <div className="flex justify-between mt-4">
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
                            <p className="text-sm">Not registered? {" "}
                                <Link to="./SignUp" className="underline text-blue-400 cursor-pointer">Sign up.</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div >
    );
}
