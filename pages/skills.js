import Template from "../components/Template";
import TextyAnim from "rc-texty";
import 'rc-texty/assets/index.css';

function Skills() {
  return (
    <Template seoTitle="Compétences">
      <h3><TextyAnim mode="smooth" type="right" duration={100}>Mes compétences</TextyAnim></h3>
    </Template>
  )
}

export default Skills;