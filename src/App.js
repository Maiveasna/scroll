import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import scrollIntoView from "scroll-into-view";
import PropTypes from "prop-types";

export default class App extends React.Component {
  render() {
    const items = [
      {
        id: 1,
        name: "test",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.edPhzdwaCyg3Ma19mqkhrAHaEK&pid=Api&P=0&w=306&h=173"
      },
      {
        id: 2,
        name: "test",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.edPhzdwaCyg3Ma19mqkhrAHaEK&pid=Api&P=0&w=306&h=173"
      },
      {
        id: 3,
        name: "test",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.edPhzdwaCyg3Ma19mqkhrAHaEK&pid=Api&P=0&w=306&h=173"
      },
      {
        id: 4,
        name: "test",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.edPhzdwaCyg3Ma19mqkhrAHaEK&pid=Api&P=0&w=306&h=173"
      },
      {
        id: 5,
        name: "test",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.edPhzdwaCyg3Ma19mqkhrAHaEK&pid=Api&P=0&w=306&h=173"
      },
      {
        id: 6,
        name: "test",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.edPhzdwaCyg3Ma19mqkhrAHaEK&pid=Api&P=0&w=306&h=173"
      }
    ];
    return (
      <div className="app">
        <div className="scroller">
          {items.map(item => {
            return (
              <div className="item">{/* <img src={item.image} />{" "} */}</div>
            );
          })}
        </div>
      </div>
    );
  }
}

class ScrollView extends Component {
  scrollTo = name => {
    const node = findDOMNode(this.elements[name]);
    scrollIntoView(node, {
      time: 500,
      align: {
        top: 0
      }
    });
  };
  static childContextTypes = {
    scroll: PropTypes.object
  };
  static childContextTypes = {
    scroll: PropTypes.object
  };
  register = (name, ref) => {
    this.elements[name] = ref;
  };
  unregister = name => {
    delete this.elements[name];
  };
  getChildContext() {
    return {
      scroll: {
        register: this.register,
        unregister: this.unregister
      }
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

class ScrollElement extends Component {
  static contextTypes = {
    scroll: PropTypes.object
  };
  componentDidMount() {
    this.context.scroll.register(this.props.name, this._element);
  }
  componentWillUnmount() {
    this.context.scroll.unregister(this.props.name);
  }

  render() {
    return React.cloneElement(this.props.children, {
      ref: ref => (this._element = ref)
    });
  }
}
