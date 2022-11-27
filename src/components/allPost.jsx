import React from 'react'
import { connect } from 'react-redux'
import Post from './post'
import EditComponent from './editComponent'


class AllPost extends React.Component {

  render() {

    return (
      <div>
        <h1 className="post_heading">Todos los post</h1>
        {
          this.props.posts.map((post) => (
            <div key={post.id}>
              {
                post.editing ? <EditComponent post={post} />
                  :
                  <Post post={post} />
              }
            </div>
          )
          )
        }
      </div>
    )
  }
}

const mapStateProps = (state) => {
  return {
    posts: state
  }
}

export default connect(mapStateProps)(AllPost)