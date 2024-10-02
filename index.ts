
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
return button ; 
}}
  interface Card{
    title:content,
  content:content
  }
class Card{
  private props : Card ;
  constructor(props:Card){
    this.props= props;}
  render():HtmlDivElement{
    const card = document.createElement('card');
    card.className= "card";
    card.innerHtml=`
    
      <h1>${this.props.title} </h1>
      <p>${this.props.content}</p>
    `
  return card;
}
const app = document.getElementById('app');
if (app) {
  const primaryButton = new Button({ label: 'Primary Button', primary: true });
  const secondaryButton = new Button({ label: 'Secondary Button' });
  const card = new Card({ title: 'Card Title', content: 'This is a simple card content.' });

  app.appendChild(primaryButton.render());
  app.appendChild(secondaryButton.render());
  app.appendChild(card.render());
}
