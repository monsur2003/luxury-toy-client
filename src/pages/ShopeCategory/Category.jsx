import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Category = () => {
   const [datas, setDatas] = useState([]);
   const [categorys, setCategorys] = useState("Sports");

   useEffect(() => {
      fetch(`http://localhost:5000/category?category=${categorys}`)
         .then((res) => res.json())
         .then((data) => setDatas(data));
   }, [categorys]);
   return (
      <div>
         <Tabs>
            <TabList>
               <Tab onClick={() => setCategorys("Sports")}>Sports Car</Tab>
               <Tab onClick={() => setCategorys("Dump Truck")}>Dump Truck</Tab>
               <Tab onClick={() => setCategorys("Racing Car")}>Title 2</Tab>
            </TabList>

            <TabPanel>
               <h2>{datas.length}</h2>
            </TabPanel>
            <TabPanel>
               <h2>{datas.length}</h2>
            </TabPanel>
            <TabPanel>
               <h2>{datas.length}</h2>
            </TabPanel>
         </Tabs>
      </div>
   );
};

export default Category;
