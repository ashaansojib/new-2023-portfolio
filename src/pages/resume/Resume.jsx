import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Bio from "./Bio";
import Skill from "./Skill";
import Education from "./Education";
const Resume = () => {

  return (
    <div className="py-20 my-container ">
      <div className="relative px-2">
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
            <div className="mx-auto lg:w-4/5 md:p-2 w-full rounded-full border grid grid-cols-3 justify-between items-center md:gap-6 bg-[#022642] absolute -top-10 lg:right-28 right-0">
              <Tab><button className="title-btn">Biography</button></Tab>
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
