import React from 'react';

const ALert = ({showAlert}) => {
    return (
        <div>
            {showAlert !== null && (
                <div style={inlineStyle}>Please Enter all Fields</div>
            )}
        </div>
    )
}
//Functional Style
const inlineStyle = {
    backgroundColor: 'red',
    color: '#fff',
    width: '220px',
    padding: '5px',
    textAlign:'center'
}
export default ALert;
;