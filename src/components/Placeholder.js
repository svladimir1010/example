import React, { Component } from "react";
// import PropTypes from "prop-types";
// import Service from "../services";
// компонент с render props который сам запрашивает данные с переданного url
// и передает в render prop загруженные items и состояние loading и error

export class Placeholder extends Component {
  state = {
    items: null,
    loading: true,
    error: false
  };

  getResource = async ur => {
    const data = await fetch(ur)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(body => body.json())
      .catch(() => this.setState({ error: true }));

    return data;
  };

  componentDidMount() {
    this.getResource(this.props.url).then(items => {
      this.setState({ items, loading: false });
    });
  }

  render() {
    const { items, loading, error } = this.state;
    const onRemove = id => {
      const newItems = items.slice();
      newItems.splice(id, 1);
      this.setState({
        items: newItems
      });
    };

    if (!items) return null;
    else {
      return (
        <>
          {" "}
          {this.props.children({
            items,
            loading,
            error,
            onRemove
          })}{" "}
        </>
      );
    }
  }
}
