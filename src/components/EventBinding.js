import React from "react";

class EventBinding extends React.Component {

   greeting = "Ford"

    constructor(props) {
        // super calls the parent component --> React.Component
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
        };
    }

    // handleClick() {
    //     this.setState({
    //         introduction: "Goodbye",
    //     });
    //     console.log(this.state.introduction)
    // }

    handleClick = () => {
        this.setState({
            introduction: "Goodbye",
        });
        console.log(this);
    }


    render() {
        // return <h1>Hello from the stateful class component!</h1>
        return (
            <div>
                <h2>{this.state.introduction} {this.props.greeting}</h2>
                {/* <button onClick={() => this.handleClick()}> */}
                {/* <button onClick={this.handleClick.bind(this)}> */}
                <button onClick={this.handleClick}>
                    {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default EventBinding;