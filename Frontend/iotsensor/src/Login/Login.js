import React, { useState } from 'react';
import './Login.css'
import { NavLink} from 'react-router-dom'


function Login() {
//   const [userName,setUserName] = useState('');
//   const [Password,setPassword] = useState('');
//   const [pass_error, setpass_error] = useState('');
// 	const [Error, setError] = useState("")
// 	const [pass_error_bool, setpass_error_bool] = useState(false);

//   const LOGIN_API = '.........';

//   const passValidate = () => {
// 		setTimeout(function () {
// 			if (Password.length < 7) {
// 				setpass_error_bool(true);
// 				setpass_error('Password should be more than 8 letters');
// 			} else {
// 				setpass_error_bool(false);
// 				setpass_error('');
// 			}
// 		}, 100000);
// 	};



  return (
    <div className='login-body'>
      <div className="login-left">
       
        <div style={{marginRight:'30px'}} >

        <img src="/images/icons8-online-64.png" alt="" style={{float:'right'}}/>
        </div>
        <div style={{display:'flex',margin:'20px'}}>

          <div style={{display:'flex',flexDirection:'column'}}>
          <img src="/images/robot-assistant.svg" alt="" style={{height:'100px', width:'100px'}}/>
          <img src="/images/arduino-uno-board.png" alt="" style={{height:'100px', width:'100px'}} />
          <img src="/images/icons8-voltmeter-64.png" alt="" style={{height:'100px', width:'100px'}}/>

          </div>
          <div className="text" style={{textAlign:'center',color:'white',marginTop:'220px',marginLeft:'40px',fontSize:'40px',marginRight:'-20px',fontWeight:'600',letterSpacing:'1.2px'}}>
            <p>IOT Based </p>
            <p>Voltage AND Current Sensor</p>
          </div>
        </div>

        <div style={{marginRight:'0px'}}>
        {/* <img src="/images/arduino.svg" alt="" style={{marginTop:'160px',float:'right'}}/> */}
        </div>
        <div style={{marginRight:'15px'}}>

        <img src="/images/gas-sensors.svg" alt="" style={{height:'100px', width:'100px',marginTop:'180px',float:'right'}} />
        </div>
        <div>

        <hr style={{marginTop:'280px',marginRight:'140px',marginLeft:'20px'}}/>
        </div>

      </div>
      <div className="login-right">
        <div 
        style={{display:'flex',gap:10, flexDirection:'column'}}
        >
        <div className="inputLabel">Username</div>
        <input type='text' placeholder='Enter your username' className='Input'>
          </input>
        </div>

        <div
        style={{display:'flex',gap:10, flexDirection:'column'}}
        >
        <div className="inputLabel">Password</div>
        <input type='text' placeholder='Enter your password' className='Input'/>
      </div>
      <div className="checkboxContainer">
        <div style={{display:'flex', gap: 10, float: 'left',cursor:'pointer'}}>
          <input type="checkbox" className='checkInput' />
          <label htmlFor="">Remember me</label>
        </div>
        <div style={{color: 'red'}}>Forgot your password?</div>
      </div>
      <NavLink to="/Changed">

      <button className="login-btn">Login</button>
      </NavLink>
      
      {/* <Outlet/> */}

     
      <div>
				<text style={{fontSize: '18px'}}> Don’t have an account?</text>
				<span
					style={{
						cursor: 'pointer',
						color: 'black',
						marginLeft: '10px',
            fontSize: '19px'
					}}
				>
                    <NavLink to="/SignUp">
					    <a href="/" style={{color:'#008080'}}>Create Account</a>

                    </NavLink>
				</span>
			</div>

      </div>
    </div>
  )
}

export default Login
