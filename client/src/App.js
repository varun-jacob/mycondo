import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import CondoHome from "./pages/CondoHome/CondoHome"
import ResidentHome from "./pages/ResidentHome/ResidentHome"
import './App.scss';
import SignupResident from "./components/SignupResident/SignupResident";
import { AmenitiesPage } from "./pages/AmenitiesPage/AmenitiesPage";
import { BookAmenity } from "./components/BookAmenity/BookAmenity";
import { BookingsPage } from "./pages/BookingsPage/BookingsPage";
import { EditBooking } from "./components/EditBooking/EditBooking";
import { DeleteBooking } from "./components/DeleteBooking/DeleteBooking";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/condo/:condoId/resident/:residentId/addBooking" exact component={BookAmenity} />
            <Route path="/resident/signup" exact component={SignupResident}/>
            <Route path="/condo/:condoId/resident/:residentId/amenities" exact component={AmenitiesPage}/>
            <Route path="/condo/:condoId/resident/:residentId/bookings" exact component={BookingsPage}/>
            <Route path="/condo/:condoId" exact component={CondoHome} />
            <Route path="/condo/:condoId/resident/:residentId/editBooking/:bookingId"exact component={EditBooking}></Route>
            <Route path="/condo/:condoId/resident/:residentId/deleteBooking/:bookingId"exact component={DeleteBooking}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
