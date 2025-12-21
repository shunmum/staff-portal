import React from 'react';
import InfoItem from './InfoItem';

const InfoSection = ({ title, items }) => {
    if (!items || items.length === 0) return null;

    return (
        <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
                fontSize: '1.8rem',
                borderLeft: '8px solid var(--color-primary)',
                paddingLeft: '1rem',
                marginBottom: '1.5rem',
                backgroundColor: '#f9f9f9',
                padding: '0.5rem 1rem'
            }}>
                {title}
            </h2>
            <div>
                {items.map((item, index) => (
                    <InfoItem key={index} label={item.label} value={item.value} />
                ))}
            </div>
        </section>
    );
};

export default InfoSection;
