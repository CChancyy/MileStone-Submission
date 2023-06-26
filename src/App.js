import "./styles.css";
import WelcomeBanner from "./components/WelcomeBanner";
import WashingMachine from "./components/WashingMachine";
import Dryer from "./components/Dryer";

import React, {useEffect, useState} from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
// Import the functions you need from the SDKs you need
import { Auth } from "./components/auth";
import { db } from "./config/firebase";
import {getDocs, collection} from "firebase/firestore"

const actions = [
  { label: "RVRC Block A", value: 1 },
  { label: "RVRC Block B", value: 2 },
  { label: "RVRC Block C", value: 3 }
];

const dropdownoptions = (value) => {
  if (value === 1) {
    return (
      <>
        <WashingMachine />
        <Dryer />
      </>
    );
  }
};

export default function App() {
  const [userList, setUserList] = useState([]);
  const [dryerList, setDryerList] = useState([]);

  const usersCollectionRef = collection(db, "users");
  const dryersCollectionRef = collection(db, 'dryers');
  
  /*useEffect(() => {
    const getUserList = async () => {
      //read the data
      //set the user lis
      try {
        const data = await getDocs(usersCollectionRef);
        const filterdData = data.docs.map((doc) => ({...doc.data(), id: doc.id, }))
        
        setUserList(filterdData);
      } catch (err) {
        console.error(err);
      }
    };
    getUserList();
  }, []); */
  
  return (
    <>
      <div className="App">
        <WelcomeBanner />
        
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Select options={actions} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <WashingMachine />
      <Dryer />
      

    </>
  );
}
