import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 140,
      text: '',
      color: 'black'
    };
  }

  updateTextContent = (event) => {
    this.setState({
      text: event.target.value,
    }, (event) => {
      this.setState({
        color: this.charsRemaining() <= 0 ? 'red' : 'black'
      })
    })
  }

  charsRemaining = () => {
    return this.state.maxChars - this.state.text.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p style={{color: this.state.color}}>Remaining Characters: { this.charsRemaining() }</p>
        <input type="text" onChange={ this.updateTextContent } value={ this.state.text }/>
      </div>
    );
  }
}

export default TwitterMessage;
