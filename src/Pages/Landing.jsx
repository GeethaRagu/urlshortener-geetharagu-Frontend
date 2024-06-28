import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const Landing = () => {
  const [currentmonth, setCurrentmonth] = useState("");
  const [currentday, setCurrentday] = useState("");
  const apiurl = import.meta.env.VITE_API_URLKEY;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `${apiurl}/url/url-dashboard`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    //console.log(data);
    setCurrentmonth(data.month);
    setCurrentday(data.date);
  };
  return (
    <div>
    <div className="d-flex">
      <div className="">
        <h5 className="">URL's of this month</h5>
        <h3 className="">{currentmonth}</h3>
      </div>
      <div className="d-flex">
        <h5 className="">URL's today</h5>
        <h3 className="">{currentday}</h3>
      </div>
    </div>
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
    <Link
      to="/createshorturl"
      className="btn btn-primary border border-radius mt-3"
    >
     <Button> Create Shorten URL</Button>
    </Link>
    <Link
      to="/urllists"
      className="btn btn-primary border border-radius mt-3"
    >
     <Button> See URL's</Button>
    </Link>
    </div>
  </div>
  );
};

export default Landing;
