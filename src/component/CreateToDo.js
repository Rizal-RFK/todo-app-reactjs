import React, { Component } from 'react';
import '../App.css';


class CreateToDo extends Component {
constructor(state){
  super(state)
  this.state = {
    todoItem: '',
    items: []
  }
}

handleSubmited = (event) => {
  event.preventDefault()
  this.setState({
    items: [...this.state.items,this.state.todoItem],
    todoItem: ''
  })
}

handleChangeUpdate = (event) => {
  this.setState({
    todoItem: event.target.value
  })
}

  render() {
    return (
      <section class="section mt-5">
        <div class="container">
          <div class="border row-lg p-5">
            <div class="col-lg-6">
              <form onSubmit = {this.handleSubmited}>
                <div class="form-group">
                  <label>Add To-Do List</label>
                  <input type="text" class="form-control" value={this.state.todoItem} onChange={this.handleChangeUpdate} />
                </div>
              <button class="btn btn-primary mt-1">+ Add</button>
              </form>
            </div>
            
              <div class="col-lg-6">
                <table class="table mt-5">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Name List</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                  this.state.items.map((item, index) => 
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item}</td>
                        <td>
                            <button class='btn btn-outline-danger'>Delete
                            </button>
                        </td>
                      </tr>
                    )
                  }
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CreateToDo;
