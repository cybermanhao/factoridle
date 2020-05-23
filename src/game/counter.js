import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div className="counter">
        <button
          onClick={() => {
            this.setState(state => ({
              count: state.count + 1
            }));
          }}
        >
          state.count: {this.state.count}
        </button>
      </div>
    );
  }
}
export default Counter;
