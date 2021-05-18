import React, { useState } from 'react'
import Failure from './failure'
import Success from './success'


const Form = (props) => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [fail, setFail] = useState('')
    const [result, setResult] = useState('')



    const onSignIn = (e) => {
        e.preventDefault()
        if ((username !== props.username && password !== props.password) || (username !== props.username || password !== props.password)) {
            return setResult(<Failure />)
        }
        else if (username === props.username && password === props.password) {
            return setResult(<Success username={props.username} />)
        }
    }



    return (
        <div>
            <form className='ui form formbody' action="" onSubmit={onSignIn}>
                <div className='field'>
                    <label htmlFor="username">Username: </label>
                    <input id='username' value={username} type="text" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="pass">Password: </label>
                    <input id='pass' value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button className='ui button'>Sign In</button>
                </div>
            </form>
            <div>
                {fail}
                {result}
            </div>
        </div>
    )

}
export default Form