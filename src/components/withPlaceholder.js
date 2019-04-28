import React, { Component } from "react";
import { User } from "./User";
// HOC который сам запрашивает данные с переданного url
// загруженные items передает в обернутый компонент
// во время загрузки или ошибки рендерит простые строки "loading" и "error"
const withPlaceholder = EnhancedComponent => {
    return class extends Component {
        state = {
            data: null,
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
            this.setState({ loading: true });
            this.getResource(this.props.url).then(data => {
                this.setState({ data, loading: false });
            });
        }

        render() {
            const { data, loading, error } = this.state;
            const onRemove = id => {
                const newItems = data.slice();
                newItems.splice(id, 1);
                this.setState({
                    data: newItems
                });
            };
            if (loading) return "loading";
            if (error) return "error";
            return (
                <EnhancedComponent
                    {...this.props}
                    items={data}
                    onRemove={onRemove}
                />
            );
        }
    };
};

const UserListView = ({ items, onRemove }) => {
    return (
        <>
            {items &&
                items.map((item, index) => (
                    <User
                        key={index}
                        {...item}
                        onRemove={() => onRemove(index)}
                    />
                ))}
        </>
    );
};

export const UserList = withPlaceholder(UserListView);
