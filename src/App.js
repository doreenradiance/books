import React from "react";
import "./App.css";
import UserItem from "./components/UserItem";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       title: '',
       name: '',
       books: [],
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {    
     this.setState({ title: e.target.value });          
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
     e.preventDefault()
     let newBook = { title:  this.state.title, name: this.state.name };
     this.setState({books: [...this.state.books,newBook] });
  } 

  render() {
    return (
      <div className="App">
        {/* Form to add new book */}
        <div>
          <form onSubmit={this.handleSubmit}>
            <input 
            onChange={this.handleTitleChange}
            type="text"
             placeholder="Title"
             value={this.state.title}
            />
            <br />
            <input
            onChange={this.handleNameChange}
            type="name" 
            placeholder="Publisher Name"  
            value={this.state.name}
            />
            <br />
            <input type="submit"/>
          </form>
        </div>

        {/* List of books */}
        <div>
          <h3>List of Users</h3>
          {this.state.books.map((book, index) =>(            
            <UserItem title={book.title} name={book.name} key={index} />
          ))}
          
        </div>
      </div>
    );
  }
}

export default App;
