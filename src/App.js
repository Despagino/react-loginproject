import React from 'react'
import Form from './form'

const App = () => {

    const username = 'grayawesomeninja';
    const password = 'chikfila';

    return (
        <div>
            <Form username={username} password={password} />
        </div>
    )
}

export default App