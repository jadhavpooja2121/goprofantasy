import React from 'react'

const date = new Date();
let year = date.getFullYear();

function FooterNote(){
    return(
        <footer>© {year} All rights are reserved </footer>
    );

}

export default FooterNote;