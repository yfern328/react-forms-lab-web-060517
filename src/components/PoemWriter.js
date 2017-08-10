import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      invalid: true
    };
  }

  modifyText = (event) => {
    this.setState({
      text: event.target.value
    }, () => {
      this.checkStructure()
    })
  }

  checkStructure = () => {
    let row_array = this.state.text.split("\n")
    let lengths_array = row_array.map(string => {
      return string.replace(/(\s+)/g," ").trim().split(" ").length
    })
    // console.log(row_array)
    // console.log(lengths_array)
    if( String(lengths_array) === String([5,3,5]) ) {
      this.setState({
        invalid: false
      })
    }
    else {
      this.setState({
        invalid: true
      })
    }
  }

  render() {
    // console.log(this.state.text)
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.modifyText}
          value={this.state.text}
        />
        {this.state.invalid && <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>}
        {!this.state.invalid && <div
          id="poem-validation-haiku"
          style={{color: 'green'}}
        >
          This poem is in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
