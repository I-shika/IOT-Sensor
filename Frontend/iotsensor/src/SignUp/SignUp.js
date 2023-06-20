import React, { useState } from 'react'
import './SignUp.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { Authenticate } from '../utils';

const SignUp = () => { 

    const [userName,setUserName] = useState('');
    const [Password,setPassword] = useState('');
    const [contactNo,setContactNo] = useState('');

    const submit = () => {
        if(userName === ''){
            alert('Please enter user name');
        }
        else if(Password === ''){
            alert('Please enetr password');
        }
        else if(contactNo === ''){
            alert('Please enter your contact number')
        }
        else{
            if (Password?.length > 7){
                axios 
                    .post('http://127.0.0.1:8000/admin/usersData/users', {
                        userName: userName,
                        Password: Password,
                        contactNo: contactNo,
                    })
                    .then((res) => {
                        if(res.status === 200){
                            console.log(res.data);
                            Authenticate(res.data.n, res.data.e_id, res.data.at);
                        }
                    })
                    .catch((err) => {
                        alert(err.response.data.error);
                    });
            }
            else{
                alert('password should have 8 or more characters');
            }
        }
    };
    
        return (
          <div className='body'>
              <div className="left">
                  <div style={{marginRight:'1.875rem'}} >
      
                      <img src="/images/icons8-online-64.png" alt="" style={{float:'right'}}/>
                      </div>
                      <div style={{display:'flex',margin:'1.25rem'}}>
      
                      <div style={{display:'flex',flexDirection:'column'}}>
                      <img className='robot_img' src="/images/robot-assistant.svg" alt="" />
                      <img className='uno_img' src="/images/arduino-uno-board.png" alt="" />
                      <img className='voltmeter_img' src="/images/icons8-voltmeter-64.png" alt="" />
      
                      </div>
                      <div className="text" >
                          <p>IOT Based </p>
                          <p>Voltage AND Current Sensor</p>
                      </div>
                      </div>
      
                      <div style={{marginRight:'0.938rem'}}>
      
                      <img className='sensor_img' src="/images/gas-sensors.svg" alt="" />
                      </div>
                      <div>
      
                      <hr className='horizontal_line' />
                  </div>
              </div>
      
              <div className="right">
                  <div className="heading">
                      Create New Account
                  </div>
      
                  <div 
                      style={{display:'flex',gap:'0.625rem', flexDirection:'column'}}
                      >
                      <div className="inputLabel">Username</div>
                      <input type='text' placeholder='Create your username' className='Input' onChange={(e) => setUserName(e.target.value)} value={userName}>
                      </input>
                  </div>
      
                  <div
                      style={{display:'flex',gap:'0.625rem', flexDirection:'column'}}
                      >
                      <div className="inputLabel">Password</div>
                      <input type='text' placeholder='Create your password' className='Input' onChange={(e) => setPassword(e.target.value)} value={Password}/>
                  </div>
      
                  <div
                      style={{display:'flex',gap:'0.625rem', flexDirection:'column'}}
                      >
                      <div className="inputLabel">Contact Number</div>
                      <input type='number' placeholder='Enter your contact number' className='Input' onChange={(e) => setContactNo(e.target.value)} value={contactNo}/>
                  </div>
                
                <NavLink to="/login">

                  <button type='button' className="signUp-btn" onClick={submit}>
                      Sign Up
                  </button>
                </NavLink>
              </div>
            
          </div>
        )

    
}

export default SignUp
