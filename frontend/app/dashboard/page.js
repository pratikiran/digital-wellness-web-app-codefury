import Head from 'next/head';
import styles from './dashboard.module.css';

function Dashboard() {
    return (
        <div>
            <Head>
                <title>Mental Health Dashboard</title>
            </Head>

            <header className={styles.header}>
                <h1>Mental Health Dashboard</h1>
            </header>

            <div className={styles.container}>
                <div className={styles.card}>
                    <h2>My Mood</h2>
                    <p>Today, I'm feeling:</p>
                    <select>
                        <option>Good</option>
                        <option>Sad</option>
                        <option>Anxious</option>
                        <option>Stressed</option>
                        <option>Content</option>
                        <option>Stressed</option>
                    </select>
                </div>

                <div className={styles.card}>
                    <h2>My Journal</h2>
                    <textarea rows="4" placeholder="Write your thoughts and feelings here..."></textarea>
                </div>

                <div className={styles.card}>
                    <h2>My Progress</h2>
                    <p>You've completed 3 out of 5 daily mindfulness exercises.</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
