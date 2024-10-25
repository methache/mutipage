import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import './Login.css';
import { verifyUser } from '../../data/users';

function Login({ setToken , setRole}) {  // ใช้ destructuring เพื่อดึง setToken จาก props
    const userRef = useRef();
    const passRef = useRef();

    return (
        <div className='login-container'>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
                type="text"
                id="username"
                placeholder='user'
                style={{ textAlign: 'center' }}
                ref={userRef}
            />
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
                type="password"
                id="password"
                placeholder='password'
                style={{ textAlign: 'center' }}
                ref={passRef}
            />
            <button className='btn btn-success mt-3' 
                onClick={() => {
                    const user = userRef.current.value.trim();
                    const pass = passRef.current.value.trim();
                    
                    // ล้างค่า input fields
                    userRef.current.value = '';
                    passRef.current.value = '';

                    // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
                    const userInfo = verifyUser(user, pass);
                    if (userInfo === null) {
                        alert('Wrong username or password');
                        userRef.current.focus();  // โฟกัสไปที่ input username หากมีข้อผิดพลาด
                    } else {
                        setToken(userInfo.token); 
                        setRole(userInfo.role); // ตั้งค่า token เมื่อเข้าสู่ระบบสำเร็จ
                    }
                }}
            >
                Login
            </button>
        </div>
    );
}

export default Login;
