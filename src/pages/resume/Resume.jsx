import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Bio from "./Bio";
import Skill from "./Skill";
import Education from "./Education";
const Resume = () => {

  const biography = () => {
    console.log("hello")
  }
  return (
    <div className="px-4 py-20 my-container ">
      <div className="relative">
        <Tabs>
          <TabPanel>
            <Bio />
          </TabPanel>
          <TabPanel>
            <Skill />
          </TabPanel>
          <TabPanel>
            <Education />
          </TabPanel>
          {/* section titile bar */}
          <TabList>
            <div className="mx-auto w-4/5 p-2 rounded-full border grid lg:grid-cols-3 grid-cols-1 justify-between items-center gap-6 bg-[#022642] absolute -top-10 right-28">
              <Tab><button onClick={biography} className="title-btn">Biography</button></Tab>
              <Tab><button className="title-btn">Skills</button></Tab>
              <Tab><button className="title-btn">Education</button></Tab>
            </div>
          </TabList>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
