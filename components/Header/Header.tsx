// components/Header/Header.tsx
import React from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          🦷 DentalCare
        </div>
        
        <nav className={styles.nav}>
          <a href="#services" className={styles.link}>Послуги</a>
          <a href="#doctors" className={styles.link}>Лікарі</a>
          <a href="#contacts" className={styles.link}>Контакти</a>
        </nav>

        <div className={styles.authBlock}>
          <SignedOut>
            <SignInButton mode="modal">
              <button className={styles.loginBtn}>Увійти / Реєстрація</button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>
            <div className={styles.userProfile}>
              <span className={styles.welcomeText}>Вітаємо!</span>
              <UserButton afterSignOutUrl="/"/>
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};