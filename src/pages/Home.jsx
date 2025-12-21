import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const MENU_ITEMS = [
    { id: 'company', label: '会社のこと' },
    { id: 'community', label: 'コミュニティのこと' },
    { id: 'cross-b', label: 'クロスビー\n(Cross B)' },
    { id: 'nohaco', label: 'ノハコ\n(Nohaco)' },
    { id: 'share-office', label: 'シェアオフィス甲州' },
    { id: 'baymax', label: 'べいまっくす' },
];

export default function Home() {
    return (
        <div className={styles.container}>
            <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h1>Staff Portal</h1>
            </header>
            <nav className={styles.grid}>
                {MENU_ITEMS.map((item) => (
                    <Link key={item.id} to={`/detail/${item.id}`} className={styles.card}>
                        <span style={{ whiteSpace: 'pre-wrap' }}>{item.label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}
