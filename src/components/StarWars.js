import React from 'react';

class StarWars extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            character: {}
        };
    }

    componentDidMount() {
        this.setState({loading: true});             // Set loading to true when we are loading the API
        fetch("https://swapi.dev/api/people/1/")    // Step 1) Fetch the data from the API
        .then(response => response.json())          // Step 2) Turn the data to a JSON object
        .then(data => {			                    // Step 3) Save the data to the current state so that we can use it later
            this.setState({
                loading: false,                     // Set loading back to false when we get the info we want
                character: data
            });
        });
    }

    render() {
        const text = this.state.loading ? "loading...": this.state.character.name;
        return (
            <div>
                {text}
            </div>
        );
    }
}

export default StarWars;