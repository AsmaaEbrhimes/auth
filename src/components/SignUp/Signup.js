import axios from "axios";
import { useState } from "react";
import "./Signup.css"


const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accept, setAccept] = useState(false)
    const [number, setNumber] = useState("")
    const supmit = (e) => {
        let flag = true
        e.preventDefault();
        setAccept(true)
        if (name === "" || email === "" || password.length < 8) {
            flag = false
        } else flag = true
        if (flag) {
            axios.post('https://backfood2-1traner.onrender.com/register', {
                userName: name,
                email: email,
                password: password,
                phone: number
            })
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
        }

 
    }
    return (
        <>
            <div className="parent">
                <form onSubmit={supmit}>
                    <label>ENTER NAME :</label>
                    <input placeholder="Enter name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    {accept && name === "" && <p style={{ color: "red" }}>Enter your Name Please</p>}
                    <label>ENTER EMAIL :</label>
                    <input placeholder="Enter Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>ENTER Number :</label>
                    <input placeholder="Enter Phone" type="number" required value={number} onChange={(e) => setNumber(e.target.value)} />
                    {accept && email === "" && <p style={{ color: "red" }}>The Email is required</p>}
                    <label>ENTER Password :</label>
                    <input placeholder="Enter Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {accept && password.length < 8 && <p style={{ color: "red" }}>password must be more than 8 char</p>}
                    <div className="btn_supmit">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}


export default Signup;

