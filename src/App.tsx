import React from 'react';
import logo from './logo.svg';
import './App.css';
import Booking from './bookheader';
import Booktable from './booktable';
import Footer from './footer';
import Details from './details';

const book = {
  booklogo: "https://booking.webestica.com/assets/images/logo.svg",
  listing: "Listings",
  pages: "Pages",
  account: "Accounts",
  contact: "Contact Us",
  girllogo: "https://booking.webestica.com/assets/images/avatar/01.jpg",
  upgrade: " Upgrade now"
}

const group = {
  hi: "Hi",
  name: " Jacqueline Miller",
  listing: "Add New Listing",
  dashboard: "Dashboard",
  listings: "Listings",
  booking: "Bookings",
  activities: "Activities",
  earnings: "Earnings",
  reviews: "Reviews",
  settings: "Settings",
  dropdown: "Dropdown"
}

const box = {
  title: "Bookings",
  name: "Bookings",
  room: "20 Rooms"
}

const foot = {
  image: "https://booking.webestica.com/assets/images/logo-light.svg",
  year: " Copyrights ©2023 Booking. Build by",
  webestica: "Webestica"
}

function App() {
  return (
    <div className="App">
      <Booking book={book}></Booking>
      <Details group={group}></Details>
      <Booktable box={box}></Booktable>
      <Footer foot={foot}></Footer>
    </div>
  )
}
{/* <header className="App-header">
        <Booking></Booking>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */}

export default App;
