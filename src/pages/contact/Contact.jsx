
import { useState } from "react"
import "./contact.css"
const Contact = () => {

  const [number , setNumber] = useState()

  const numberLimit = (e) => {
    if(e.target.value.length <= 10){
      setNumber(e.target.value)
    }
  }
 
  return (
    <div className="contact">
      <form action="https://formspree.io/f/manbjvnw" method="POST">
        <input type="text" name="name" placeholder="Enter Your Name" required />
        <input type="email" name="email" placeholder="Enter Your Email" required />
        <input type="number" name="contact" placeholder="Enter Your Contact" value={number} onChange={numberLimit} required />
        <textarea name="comment" placeholder="Enter Your Comment"></textarea>
        <button type="sumbit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
