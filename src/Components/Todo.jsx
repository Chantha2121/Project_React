import React, { Component } from 'react';

class Tolist extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      items: [],
      inputValue: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newItems = this.state.inputValue.trim();
    if (newItems) {
      this.setState((prevState) => ({
        items: [...prevState.items, newItems],
        inputValue: ''
      }));
    }
  }

  handleDelete = (index) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item, i) => i !== index)
    }));
  }

  render() {
    const { items, inputValue } = this.state;
    const styleHlist = {
      textAlign:'center',
       fontSize:'40px',
       color:'blue'
    }
    const content = {
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontSize: '30px' 
    }
    const contentList = {
      display: 'flex',
       alignItems: 'center', 
       margin: '5px'  
    }
    const Hinlist = {
      color: 'red',
      marginRight: '10px', 
      width:'360px',height:'55px',
      backgroundColor:'skyblue',
      borderRadius:'5px',
      textAlign:'center'
    }
    const deletelist = {
      backgroundColor: 'red', 
      color: 'white', 
      borderRadius: '5px', 
      border: 'none', 
      padding: '3px 7px',
      fontSize:'20px'
    }
    const submitlist = {
      marginLeft: '4px',
      backgroundColor: 'green',
      fontSize: '20px',
      color: 'white',
      borderRadius: '10px'
    }
    const contentform = {
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontSize: '20px'
    }
    const inputlist = {
      width: '350px', 
      height: '40px', 
      backgroundColor: 'pink'
    }
    return (
      <div>
        <h1 style={styleHlist}>To Do list</h1>
        <div style={content}>
          <div >
            {items.map((item, index) => (
              <div key={index} style={contentList}>
                <h1 style={Hinlist}>{item}</h1>
                <button onClick={() => this.handleDelete(index)} style={deletelist}>Delete</button>
              </div>
            ))}
          </div><br />
        </div>
        <div style={contentform}>
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              value={inputValue} 
              placeholder='Add the new items' 
              onChange={this.handleInputChange} 
              style={inputlist}
            />
            <button 
              style={submitlist}
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Tolist;
