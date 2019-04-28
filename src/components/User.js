import React from "react";

export const User = ({ name, email, phone, onRemove }) => (
    <div>
        {`${name} ${email} ${phone}`}
        <button onClick={onRemove}>X</button>
    </div>
);
