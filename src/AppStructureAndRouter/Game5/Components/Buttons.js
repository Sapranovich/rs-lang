import React, {Component} from 'react';



class Buttons extends Component{
  constructor(props){
    super(props)
    this.state={
    }
    // this.shuffleWordsBtns = this.shuffleWordsBtns.bind(this)
  // this.getSameWords = this.getSameWords.bind(this)
  this.lllgggl = this.lllgggl.bind(this)
  }
  componentWillMount(){
    // fetch(`https://dictionary.skyeng.ru/api/public/v1/words/search?search=${this.props.word}`)
    // .then(res =>  res.json())
    // .then(data => {
    //   // let obj=[ 
    //   //   data[0].meanings[0].translation.text,
    //   //   data[1].meanings[0].translation.text, 
    //   //   data[2].meanings[0].translation.text,
    //   //   data[3].meanings[0].translation.text, 
    //   //   data[4].meanings[0].translation.text
    //   // ]
    //   console.log(data)
    // })
  }
  lllgggl(event){
      let buttons =  document.body.querySelectorAll('.btns-wrapper button')
      buttons.forEach((el)=>{
        if(el.id === event.code){
          var evt = document.createEvent("HTMLEvents");
          evt.initEvent("click", true, false);
          el.dispatchEvent(evt)
          console.log(el.id)
        }
      })
      // let eventa = new Event("click");
      // dispatchEvent(eventa);
      // console.log(event.code)
  }
  componentDidMount(){
    document.addEventListener('keyup', this.lllgggl)
    // fetch(`https://dictionary.skyeng.ru/api/public/v1/words/search?search=${this.props.word}`)
    // .then(res =>  res.json())
    // .then(data => {   
    //   console.log(data)
    // })
  }
  componentWillUnmount(){
    document.removeEventListener('keyup', this.lllgggl)
  }
  
  render(){
    return(
      <div className = 'btns-wrapper'>
        {console.log(this.props.words)}
        <button id="Digit1" onClick={(word) => this.props.nextWord(this.props.words[0])}><span>1</span>{this.props.words[0]}</button>
        <button id="Digit2" onClick={(word) => this.props.nextWord(this.props.words[1])}><span>2</span>{this.props.words[1]}</button>
        <button id="Digit3" onClick={(word) => this.props.nextWord(this.props.words[2])}><span>3</span>{this.props.words[2]}</button>
        <button id="Digit4" onClick={(word) => this.props.nextWord(this.props.words[3])}><span>4</span>{this.props.words[3]}</button>
        {/* <button onClick={(word) => this.props.nextWord(this.props.words[4])}><span>5</span>{this.props.words[4]}</button> */}
      </div>
    )
  }
}
export default Buttons