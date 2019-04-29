import React from "react";
import ReactDOM from "react-dom";
import { Placeholder } from "./components/Placeholder";
import { ToDo } from "./components/ToDo";
import { User } from "./components/User";
import { UserList } from "./components/withPlaceholder";

import "./styles.css";

/**
 * Написать реализацию Placeholer компонента и withPlaceholder HOC
 * https://reactjs.org/docs/render-props.html
 * https://reactjs.org/docs/higher-order-components.html
 * компоненты загружают данные с переданных url и передают их в расширяемый компонент или в render prop
 * дополнительно реализовать функционал удаления элементов при нажатии на кнопку X
 */

function App() {
    return (
        <div className="App">
            <Placeholder url={"https://jsonplaceholder.typicode.com/users"}>
                {({ items, loading, error, onRemove }) => {
                    if (loading) return "loading";
                    if (error) return "error";
                    return items.map((item, index) => (
                        <User
                            {...item}
                            key={item.id}
                            onRemove={() => onRemove(index)}
                        />
                    ));
                }}
            </Placeholder>

            <Placeholder url={"https://jsonplaceholder.typicode.com/todos"}>
                {({ items, loading, error, onRemove }) => {
                    if (loading) return "loading";
                    if (error) return "error";
                    return items.map((item, index) => (
                        <ToDo
                            {...item}
                            key={item.id}
                            onRemove={() => onRemove(index)}
                        />
                    ));
                }}
            </Placeholder>

            <UserList url={"https://jsonplaceholder.typicode.com/users"} />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
