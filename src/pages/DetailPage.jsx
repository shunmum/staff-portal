import React from 'react';
import { useParams, Link } from 'react-router-dom';
import InfoSection from '../components/InfoSection';
import { CONTENT } from '../data/content';

export default function DetailPage() {
    const { id } = useParams();
    const data = CONTENT[id];

    if (!data) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h1>ページが見つかりません</h1>
                <Link to="/">トップに戻る</Link>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
            <header style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '3rem',
                borderBottom: '2px solid #333',
                paddingBottom: '1rem'
            }}>
                <h1 style={{ fontSize: '2.5rem' }}>{data.title}</h1>
                <Link to="/" style={{
                    fontSize: '1.2rem',
                    textDecoration: 'none',
                    backgroundColor: '#333',
                    color: '#fff',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '4px'
                }}>
                    記事一覧に戻る
                </Link>
            </header>

            <main>
                {data.sections.map((section, index) => (
                    <InfoSection key={index} title={section.title} items={section.items} />
                ))}
            </main>
        </div>
    );
}
