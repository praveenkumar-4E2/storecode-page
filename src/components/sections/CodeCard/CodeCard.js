import React from 'react'
import './CodeCard.css'

const CodeCard = () => {
    return (
        <div className='codeCard-border border-gradient gradient-bottom'>
            <div className=' codeCard-inner gradient-background-right'>

                <div>
                    <h3>Get a code for your link</h3>
                </div>

                <div className='border-gradient gradient-right  input-box'>
                    <div className='box'>

                        <input type='text' placeholder='Paste your link here..' />
                        <div className='code-btn border-gradient gradient-right '>
                            <div className='btn-txt gradient-background-bottom'><p>GET CODE</p></div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default CodeCard