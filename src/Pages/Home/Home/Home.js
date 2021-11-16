import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import OurService from "../OurService/OurService";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Services />
      <OurService />
      <AppointmentBanner />
      <Testimonials />
      <Doctors />
    </div>
  );
};

export default Home;
