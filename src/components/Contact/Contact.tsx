import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:piyushchaukade21@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:piyushchaukade21@gmail.com">piyushchaukade21@gmail.com</a>
        </div>
        <div>
        <a href="tel:+91 9730450023"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+91 9730450023">(+91) 9730450023</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}