"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="px-2 lg:px-40 my-16">
      <div className="">
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              border: 1,
              borderColor: "divider",
              backgroundColor: "#F1ECF8",
              borderRadius: "14px",
              padding: "15px",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTabs-flexContainer": {
                  gap: "1rem", // Add gap between tabs
                },
                // Responsive styles
                "@media (max-width: 600px)": {
                  fontSize: "12px", // Font size for mobile
                  "& .MuiTabs-flexContainer": {
                    gap: "8px", // Add gap between tabs
                  },
                },
              }}
            >
              <Tab
                label="Content"
                {...a11yProps(0)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  fontSize: "20px",

                  // border: "1px solid #753CBD !important",
                  text: "#2A254D",
                  "&.Mui-selected": {
                    color: "white",
                    backgroundColor: "#753CBD",
                    fontFamily: "inherit",
                  },
                  // Responsive styles
                  "@media (max-width: 600px)": {
                    fontSize: "14px", // Font size for mobile
                  },
                }}
              />
              <Tab
                label="Description"
                {...a11yProps(1)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  fontSize: "20px",

                  border: "1px solid #fff !important",
                  text: "#2A254D",
                  "&.Mui-selected": {
                    color: "white",
                    backgroundColor: "#753CBD",
                    fontFamily: "inherit",
                  },
                  // Responsive styles
                  "@media (max-width: 600px)": {
                    fontSize: "14px", // Font size for mobile
                  },
                }}
              />
              <Tab
                label="Item Three"
                {...a11yProps(2)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  fontSize: "20px",
                  border: "1px solid #fff !important",
                  text: "#2A254D",
                  "&.Mui-selected": {
                    color: "white",
                    backgroundColor: "#753CBD",
                    fontFamily: "inherit",
                  },
                  // Responsive styles
                  "@media (max-width: 600px)": {
                    fontSize: "14px", // Font size for mobile
                  },
                }}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Item One
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
