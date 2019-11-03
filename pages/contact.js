import Template from '../components/Template';
import TextyAnim from "rc-texty";
import 'rc-texty/assets/index.css';

function Contact() {
  return (
    <Template seoTitle="Contact">
      <h3><TextyAnim type="right" mode="smooth" duration={100}>Me contacter</TextyAnim></h3>
    </Template>
  )
}

export default Contact;