// components/Main/Main.tsx
import React from 'react';
import styles from './Main.module.css';

export const Main = () => {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <h1 className={styles.title}>Сучасна стоматологія для вашої усмішки</h1>
        <p className={styles.subtitle}>
          Професійне лікування зубів без болю. Запишіться на прийом онлайн через ваш Google акаунт або телефон.
        </p>
        <button className={styles.ctaButton}>Записатися на прийом</button>
      </section>

      <section id="services" className={styles.servicesSection}>
        <h2>Наші послуги</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Терапія</h3>
            <p>Лікування карієсу та каналів</p>
          </div>
          <div className={styles.card}>
            <h3>Ортодонтія</h3>
            <p>Брекети та елайнери</p>
          </div>
          <div className={styles.card}>
            <h3>Хірургія</h3>
            <p>Видалення та імплантація</p>
          </div>
        </div>
      </section>
    </main>
  );
};