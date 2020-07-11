import React, {Component} from 'react';

import './Statistic.css'
class Statistic extends Component{
  constructor(){
    super()
    this.state={

    }
    this.handleCardClick = this.handleCardClick.bind(this)
  }
  // componentWillMount(){
  //   //  Перезаписываем статистику по изученным словам 
  // }
  handleCardClick = (e) => {
    if (!this.state.isRecognition) {
        let currId = e.target.closest('.card').dataset.id;
        let currentObj = this.state.fullData.find(el => el.id === currId);
        this.setState({
            currentObj
        })
        this.playSound(currentObj.audio);
    }
}
  render(){
    return(
      <div className="results">
                    <div className="results-container">
                        <p className="errors">Ошибок
                        <span className="errors-number">{this.props.true.length}</span>
                        </p>
                        <div className="error-items">
                        {
                                this.props.true.map(wordObj =>
                                    <Card wordObj={wordObj} 
                                        key={wordObj.id} 

                                       onCardClick={this.handleCardClick}
                                    />
                                )
                            }
                        </div>
                        <p className="success">Знаю
                        <span className="success-number">{this.props.false.length}</span>
                        </p>
                        <div className="success-items">
                        {
                                this.props.false.map(wordObj =>
                                    <Card wordObj={wordObj} 
                                        key={wordObj.id} 

                                       onCardClick={this.handleCardClick}
                                    />
                                )
                            }
                        </div>
                        <div className="results__btns">
                            <button className="btn btn-return" >Return</button>
                            <button className="btn btn-new-game">New Game</button>
                        </div>
                    </div>
                </div>
    )
  }
}
class Card extends React.Component {
  render() {
      const { id, audio, transcription, word, wordTranslate } = this.props.wordObj;
      const card =  "card";
      const card1 = "results__card"
      const card2 = "card-active"
      return (
          // this.props.isStatistics ?
          //     (
                  <div data-id={id} className={card1}>
                      <img  onClick={() => this.props.playSound(audio)}
                          className="card__icon" alt="soundIcon"></img>
                      <span className="bold results__text">{word}</span>
                      <span className="results__text">{transcription}</span>
                      <span className="results__text">{wordTranslate}</span>
                  </div>
                  // ) : (
                  // <div data-id={id} onClick={(e) => this.props.onCardClick(e)} className={card}>
                  //     <img  className="card__icon" alt="soundIcon"></img>
                  //     <div className="card__text">
                  //         <div className="bold">{word}</div>
                  //         <div >{transcription}</div>
                  //     </div>
                  // </div>)
      )
  }
}


// class StatisticString extends Component {
//   playSound = () => {
//       let sound = new Audio(`https://raw.githubusercontent.com/22-22/rslang/rslang-data/data/${this.props.word.audio}`);
//       sound.play()
//   };
//   render() {
//       return (
//           <div className='Statistic__word' onClick={() => this.playSound()}>
//               <div>Sound</div>
//               <div>{this.props.word.word}</div>
//               <div>{this.props.word.wordTranslate}</div>
//           </div>
//       )
//   }
// }
export default Statistic