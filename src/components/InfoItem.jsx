import React from 'react';

const InfoItem = ({ label, value }) => {
    return (
        <div style={{
            display: 'flex',
            padding: '0.75rem 0',
            borderBottom: '1px solid #eee',
            fontSize: '1.2rem',
        }}>
            <span style={{ fontWeight: 'bold', minWidth: '200px', color: '#555' }}>
                {label}
            </span>
            <span style={{ flex: 1, whiteSpace: 'pre-line' }}>
                {value}
            </span>
        </div>
    );
};

export default InfoItem;
