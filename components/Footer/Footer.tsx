// components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4>DentalCare</h4>
          <p>© 2026 Всі права захищені.</p>
        </div>
        <div className={styles.column}>
          <h4>Графік роботи</h4>
          <p>Пн-Пт: 09:00 - 20:00</p>
          <p>Сб: 10:00 - 16:00</p>
        </div>
        <div className={styles.column}>
          <h4>Контакти</h4>
          <p>Київ, вул. Хрещатик 1</p>
          <p>+38 (044) 123-45-67</p>
        </div>
      </div>
    </footer>
  );
};