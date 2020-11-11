// import React from 'react';
// import ' ../App.css'
// const Contact = () => {
//     return ()
// }export default Contact;
import React from 'react'
import '../App.css'
const Contact = () => {
    return (
        
     <div class="contact">
    <h2>Contact Us</h2>
    <h3> Call us on 123-456-789 or Write to us via our email:chocolatelyhse@gmail.com</h3>
    <ul class="contact-items">
        <li class="contact-item">
            <a href="https://www.facebook.com/" class="networks-list__item-link">
                <i class="fa fa-facebook-square" aria-hidden="true">Facebook</i>
            </a>
        </li>
        <li class="contact-item">
            <a href="https://www.instagram.com/" class="networks-list__item-link">
                <i class="fa fa-instagram" aria-hidden="true">instagram</i>
            </a>
        </li>
        <li class="contact-item">
            <a href="https://www.twitter.com/" class="networks-list__item-link">
                <i class="fa fa-twitter" aria-hidden="true">Twitter</i>
            </a>
        </li>
    </ul>
</div>
    
    )
}
export default Contact;