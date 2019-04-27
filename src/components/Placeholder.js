import React, { Component } from "react";
import PropTypes from "prop-types";
// import Service from "../services";
// компонент с render props который сам запрашивает данные с переданного url
// и передает в render prop загруженные items и состояние loading и error

// function withSubscription(WrappedComponent)

export class Placeholder extends Component {
   // static propTypes = {
   //   render: PropTypes.func.isRequired
   // }
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

   onRemove = () => {
      return console.log("HELLO");
   };

   // const { items, loading, error } = this.state

   render() {




      if (!this.state.items) return null;
      else {
        const { items, loading, error } = this.state;


        const data = () => {

          
          return (
            this.props.children = this.state
          )
        }



        
      }
   }
}
