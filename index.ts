
import './styles.css'
interface ButtonProps {
label:string, 
primary?:boolean
}
class Button {
private props: ButtonProps;
constructor(props:ButtonProps){
this.props=props;
}
render():HtmlButtonElement{
const button  = document.createElement('button');

button.textContent= this.props.label;
button.className= `button ${this.props.primary? 'button-primary': 'buttom-secondary'}`

}
}
