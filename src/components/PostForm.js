import React, { Component } from "react";

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Add Post</h1>
        <form className="fm-box" onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              value={title}
            />
          </div>
          <div>
            <label>Body:</label>
            <textarea name="body" value={body} onChange={this.handleChange} />
          </div>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default PostForm;
