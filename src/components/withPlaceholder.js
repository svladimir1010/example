import React from "react";
import { User } from "./User";

// HOC который сам запрашивает данные с переданного url
// загруженные items передает в обернутый компонент
// во время загрузки или ошибки рендерит простые строки "loading" и "error"
export function withPlaceholder(EnhancedComponent) {
  return EnhancedComponent;
}

const UserListView = ({ items, onRemove }) => {
  return (
    <>
      {items &&
        items.map((item, index) => (
          <User {...item} onRemove={() => onRemove(index)} />
        ))}
    </>
  );
};

export const UserList = withPlaceholder(UserListView);
