class GetDataComponent extends Componnet {
    constructor(props) {
        super(props);

        this.state = {
            s: []
        };
    }

    componentDidMount() {
        axios
            .get("http:")
            .then(response => {
                this.setState({
                    s: response.data.results
                });
            })
            .catch(error => {
                this.setState({ error: "" });
            });
    }
}
