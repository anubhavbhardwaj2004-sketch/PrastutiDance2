# Turning Prastuti Dance into an App

Converting your website into an app can be done in three main ways, depending on where you want the app to run (Android, iOS, or Windows/Mac).

---

## 1. The PWA Way (Best for Browsers & Quick Installs)
A **Progressive Web App (PWA)** allows users to "Add to Home Screen" on their phones. It feels like a native app and works offline.

### Steps:
1. **Install Vite PWA Plugin:**
   ```bash
   npm install vite-plugin-pwa -D
   ```
2. **Update `vite.config.js`:**
   Add the PWA configuration to your vite config. This creates a `manifest.json` which tells the phone how to display the app.
3. **Add Icons:**
   You will need app icons (192x192 and 512x512).

> [!TIP]
> This is the easiest method and doesn't require Google/Apple developer accounts.

---

## 2. The Capacitor Way (Best for Mobile Apps)
**Capacitor** (by Ionic) is the modern way to turn a web app into a real native app for the **Play Store** and **App Store**.

### Steps:
1. **Initialize Capacitor:**
   ```bash
   npm install @capacitor/core @capacitor/cli
   npx cap init
   ```
2. **Build your site:**
   ```bash
   npm run build
   ```
3. **Add Platforms:**
   ```bash
   npm install @capacitor/android @capacitor/ios
   npx cap add android
   npx cap add ios
   ```
4. **Open in Android Studio/Xcode:**
   ```bash
   npx cap open android
   ```

> [!IMPORTANT]
> You will need **Android Studio** installed to build the final `.apk` file for Android phones.

---

## 3. The Electron Way (Best for Desktop Apps)
If you want a Windows app (`.exe`), you should use **Electron**.

### Steps:
1. **Install Electron:**
   ```bash
   npm install electron -D
   ```
2. **Create a `main.js`:**
   This file tells Electron how to open your website in a desktop window.
3. **Update `package.json`:**
   Add a start script for Electron.

---

## Comparison Table

| Feature | PWA | Capacitor (Mobile) | Electron (Desktop) |
| :--- | :--- | :--- | :--- |
| **Ease of Setup** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Platform** | All (Web) | Android / iOS | Windows / Mac / Linux |
| **Store Presence** | No | Yes (Play Store/App Store) | No (Usually) |
| **Offline Support**| Basic | Full | Full |

---

### Which path would you like to explore first?
I can help you set up any of these! Just tell me:
1. Do you want it on the **Play Store**? (Choose Capacitor)
2. Do you just want it to be **"Installable"** on a phone? (Choose PWA)
3. Do you want a **Windows .exe**? (Choose Electron)
