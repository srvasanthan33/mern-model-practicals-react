import React, { Component } from "react";
import axios from "axios";

class GetDataComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            errorMessage: ""
        };
    }

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                this.setState({ posts: response.data });
                console.log(response);
            })
            .catch(error => {
                this.setState({ errorMessage: "API Call failed" });
            });
    }

    render() {
        const { posts, errorMessage } = this.state;
        return (
            <div>
                Lists of Posts
                {posts.length
                    ? posts.map(post => (
                          <div key={post.id}>
                              <b>{post.title}</b>
                              <i>{post.body}</i>
                          </div>
                      ))
                    : null}
                {errorMessage ? <div>errorMessage</div> : null}
            </div>
        );
    }
}

export default GetDataComponent;
