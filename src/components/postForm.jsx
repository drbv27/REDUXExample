import React from 'react'
import { connect } from 'react-redux'



class PostForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    const title = this.getTitle.value
    const message = this.getMessagge.value

    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    }
    this.props.dispatch({
      type: 'ADD_POST',
      data
    })

    this.getTitle.value = ''
    this.getMessagge.value = ''

  }


  render() {
    return (
      <div className="post-container">
        <h1 className="post-heading"> Crear Post</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" required ref={(input) => this.getTitle = input} placeholder="ingresa el titulo del post" />
          <br />
          <textarea name="" id="" required ref={(input) => this.getMessagge = input} cols="30" rows="10" placeholder=" Escribe tu  post aqui"></textarea>
          <br />
          <input type="submit" value='post' />
        </form>
      </div>
    )
  }
}

export default connect()(PostForm)