# Raintor Ltd. -Junior Frontend Developer Technical Assessment

## Project Overview

This is a submission for the Frontend Developer role at **Raintor Ltd.**, implementing tasks involving real-time data via SignalR and paginated user feed with infinite scrolling using **Next.js** and modern frontend practices.

---

##  Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/mdYeasinIslam/raintor-task-2
cd raintor-task-2
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) to view it in your browser.

>  Ensure a stable internet connection for SignalR and user feed API integration.

---

##  Tech Stack & Tools

* **Framework:** [Next.js 14+ (App Router)](https://nextjs.org)
* **Styling:** [Tailwind CSS](https://tailwindcss.com)
* **API Handling:** [React Query & Axios](https://tanstack.com/query) (for infinite scroll)
* **Real-time Communication:** [@microsoft/signalr](https://www.npmjs.com/package/@microsoft/signalr)
* **Map Display:** [React Leaflet](https://react-leaflet.js.org/) (for live GPS)


---

## 🧪 Task Breakdown

###  Task 1: Real-Time Location Sharing

* Uses `useSignalR()` custom hook to connect with SignalR Hub (`https://tech-test.raintor.com/Hub`)
* Sends/receives GPS coordinates using `SendLatLon` / `ReceiveLatLon`
* Displays received data using **React Leaflet** map component
* Handles disconnection and reconnection scenarios

###  Task 2: Infinite Scroll - User Feed

* Uses **React Query** with `take`/`skip` strategy for fetching paginated data
* Displays list using `<UserCard />` component
* Integrated `IntersectionObserver` to trigger next page fetch
* Added skeleton loaders, error boundary, and no-data fallback
* Ensured keyboard navigation and screen-reader friendly markup

---

## Author

**Name:** Mohammad Yeasin Islam
**Email:** [hyeasinislam@gmail.com]
**Role:** Frontend Developer Candidate

---

Feel free to contact for any clarifications.

📞 +8801764078605

> Thank you for the opportunity to demonstrate my skills!
