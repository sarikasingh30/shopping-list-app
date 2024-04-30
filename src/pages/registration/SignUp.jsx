import { Link, useNavigate } from 'react-router-dom'
import {useState } from 'react'
// import {toast} from "react-toastify"
// import Layout from '../../components/layout/Layout'
// import MyContext from '../../context/data/MyContext'
import {auth,fireDB} from "../../firebase/FirebaseConfig"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import Loader from '../../components/loader/Loader'

function SignUp() {
    const [loading,setLoading]=useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate=useNavigate()
    const handleSignup=async()=>{
        setLoading(true)
        if(name===""||email===""||password===""){
            return alert("All fields are required...")
        }
        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);
            console.log(users)
            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time : Timestamp.now()
            }
            const userRef = collection(fireDB, "users")
            await addDoc(userRef, user);
            alert("Signup Succesfully")
            setName("");
            setEmail("");
            setPassword("");
            navigate("/login")
            setLoading(false)
            
        } catch (error) {
            setLoading(false)
        }
    }
    


    return (
        // <Layout>
        <div className=' flex justify-center items-center h-screen'>
            {loading &&<Loader/>}
            <div className='px-10 py-10 rounded-xl ' style={{ backgroundColor:'#3D0C11'}}>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="text"
                        name='name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className='mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray outline-none'
                        style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : ''}}
                        placeholder='Name'
                    />
                </div>
                <div>
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className='mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray outline-none'
                        style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : ''}}
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray outline-none'
                        style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : ''}}
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3 rounded-lg' style={{backgroundColor:theme==="dark" ? "rgb(59, 152, 245)":"rgb(250 204 21)"}}>
                    <button
                        onClick={handleSignup}
                        className='w-full text-white font-bold  px-2 py-2 rounded-lg' style={{color:theme==="dark"?"white":"black"}}>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account ? <Link className='font-bold' style={{color:theme==="dark" ? "rgb(59, 152, 245)":"rgb(250 204 21)"}} to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
        // </Layout>
    )
}

export {SignUp}