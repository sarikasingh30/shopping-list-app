import { Link } from 'react-router-dom'
import { useState } from 'react'
// import Layout from '../../components/layout/Layout'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/FirebaseConfig'
// import { toast } from 'react-toastify'
function Login() {
    const [loading,setLoading]=useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin=async()=>{
        setLoading(true)
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem('user',JSON.stringify(result));
            alert('Login Successfully');
            window.location.href='/'
            setLoading(false);
          } catch (error) {
            alert('Login Failed');
            setLoading(false);
          }
    }


    return (
        // <Layout>
        <div className=' flex justify-center items-center h-screen'>
            {/* {loading && <Loader/>} */}
            <div className='px-10 py-10 rounded-xl ' style={{ backgroundColor:'#3D0C11'}}>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className='mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-grey outline-none'
                        style={{ backgroundColor:'#EBE3D5'}}
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg placeholder:text-grey outline-none text-black'
                        style={{ backgroundColor:'#EBE3D5'}}
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3 rounded-lg'  style={{backgroundColor:"rgb(59, 152, 245)"}}>
                    <button
                    onClick={handleLogin}
                        className=' w-full font-bold  px-2 py-2 rounded-lg' style={{color:"white"}}>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Not a member ? <Link className='font-bold'style={{color:"rgb(59, 152, 245)"}} to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
        // {/* </Layout> */}
    )
}

export {Login}