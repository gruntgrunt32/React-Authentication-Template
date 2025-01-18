# 🔐 React Authentication Template  

_A modern authentication template built with **React, Vite, Tailwind CSS, and Supabase**._  

---

## 🚀 Features  
- ✅ **Authentication System**: Includes **Sign In, Sign Up, and Forgot Password** functionality.  
- ✅ **Supabase Integration**: Fully connected with Supabase for authentication & user management.  
- ✅ **Simple Dashboard**: Displays a **welcome screen** after login.  
- ✅ **Light & Dark Mode**: Seamless theme switching for an enhanced UX.  
- ✅ **Tailwind CSS**: Clean, responsive, and modern UI design.  
- ✅ **Vite-Powered**: Fast development & optimized build performance.  

---

## 📦 Installation  

Ensure you have **Node.js (16.x or newer)** and **npm**, **pnpm**, or **yarn** installed.  

### 🔹 Clone the Repository  
```sh
git clone https://github.com/gruntgrunt32/React-Authentication-Template.git
cd React-Authentication-Template
```  

### 🔹 Install Dependencies  
Using npm:  
```sh
npm install
```  
Using pnpm:  
```sh
pnpm install
```  
Using yarn:  
```sh
yarn install
```  

---

## 🛠️ Setup Supabase  
1. Create a **Supabase** project at [https://supabase.com](https://supabase.com).  
2. Go to **Authentication → Settings** and enable **Email Auth**.  
3. Copy your **Supabase API URL** and **Anon Key**.  
4. Create a `.env` file in the root directory and add:  
```sh
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```  

---

## 🚀 Running the App  

### ▶ Start the Development Server  
```sh
npm run dev
```
Then open **[http://localhost:5173](http://localhost:5173)** in your browser.  

### 📦 Build for Production  
```sh
npm run build
```  

### 👀 Preview Production Build  
```sh
npm run preview
```  

---

## 📁 Project Structure  

```
📂 React-Authentication-Template
 ┣ 📂 src
 ┃ ┣ 📂 components    # Reusable UI components
 ┃ ┣ 📂 pages         # Sign In, Sign Up, Forgot Password, Dashboard
 ┃ ┣ 📂 context       # Auth context for global state management
 ┃ ┣ 📂 lib          # Helper functions & Supabase config
 ┃ ┣ 📜 main.jsx      # Entry point
 ┃ ┣ 📜 App.jsx       # Main App component
 ┃ ┣ 📜 index.css       # Main Styling File
 ┣ 📂 public          # Static assets
 ┣ 📜 .env.example    # Environment variables template
 ┣ 📜 package.json    # Dependencies & scripts
 ┗ 📜 tailwind.config.js # Tailwind CSS configuration
```  

---

## 🎨 Customization  

### Modify **Tailwind Theme**  
Edit `tailwind.config.js` to customize theme settings.  

### Update **Light/Dark Mode**  
The app includes **dark mode toggle** support using Tailwind’s `dark:` class system.  

---

## 📜 License  
This project is open-source and licensed under the **MIT License**.  

---

## 📢 Connect with Austin Reed  
🔗 **GitHub:** [gruntgrunt32](https://github.com/gruntgrunt32)  
🔗 **Website:** [austin-reed.com](https://austin-reed.com)  

---

### 🎉 **Happy Coding!** 🚀  
