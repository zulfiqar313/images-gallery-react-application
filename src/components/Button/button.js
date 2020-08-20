import React from 'react';

import './style.css';

const button = ({ children, loading, ...props }) => (
    <button className="button" disabled={loading} {...props}>
        {loading ? 'Loading...' : children}
    </button>
);

button.defaultProps = {
    loading: false,
};

export default button;
