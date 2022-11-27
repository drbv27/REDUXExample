import React from 'react'
import { connect } from 'react-redux'

class EditComponent extends React.Component {


        handleEdit = (event) => {
            event.preventDefault()
            const newTitle = this.getTitle.value
            const newMessage = this.getMessagge.value

            const data = {
                newTitle,
                newMessage
            }

            this.props.dispatch({
                type: 'UPDATE', 
                id: this.props.post.id,
                data: data
            })

        }

    render() {
        return (
            <form className="form" onSubmit= {this.handleEdit}>
                <input type="text" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} placeholder="ingresa el titulo del post" />
                <br />
                <textarea name="" id="" ref={(input) => this.getMessagge = input} defaultValue={this.props.post.message} cols="30" rows="10" placeholder=" Escribe tu  post aqui"></textarea>
                <br />
                <input type="submit" value='update' />
            </form>
        )
    }
}

export default connect()(EditComponent)