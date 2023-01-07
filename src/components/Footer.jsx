import React from 'react'

const date = new Date();
let year = date.getFullYear();

function FooterNote(){
    return(
        <div className='copyright-style'>
        © {year} GoProFantasy.com. All rights are reserved. 
        </div>
    );

}

export default FooterNote;