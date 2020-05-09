import React from 'react';
class TextDemo extends React.Component{
    constructor(props){
        super(props)
        this.state={name:"john", posts:""}
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>this.setState({posts : data }));
    }
    render() {
        const postItems = this.state.posts?this.state.posts.map(post =>(
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
         )):null;
        return (
            <div>
                {this.state.name}
                {this.props.id}
                {postItems}
            </div>
        )
    }
}
export default TextDemo;