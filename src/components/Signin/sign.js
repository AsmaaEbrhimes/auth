import axios from "axios";
import { useState } from "react";
import Cookies from "cookie-universal";
import { useNavigate } from "react-router-dom";


const Sign = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accept, setAccept] = useState(false)
    const cookies = Cookies()
    const nav=useNavigate()

    const supmit = (e) => {
        let flag = true
        e.preventDefault();
        setAccept(true)
        if (email === "" || password.length < 8) {
            flag = false
        } else flag = true
        if (flag) {
            axios.post('https://backfood2-1traner.onrender.com/login',{
                email: email,
                password: password,
            })
                .then((res) => {
                    const token = res.data.token;
                    cookies.set('token', token);
                    nav("../Dashbord")
                })
                .catch((err) => console.log(err.message))
        }
    }

    return (
        <>
            <div className="parent">
                <form onSubmit={supmit}>

                    <label>ENTER EMAIL :</label>
                    <input placeholder="Enter Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    {accept && email === "" && <p style={{ color: "red" }}>The Email is required</p>}
                    <label>ENTER Password :</label>
                    <input placeholder="Enter Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {accept && password.length < 8 && <p style={{ color: "red" }}>password must be more than 8 char</p>}
                    <div className="btn_supmit">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Sign;