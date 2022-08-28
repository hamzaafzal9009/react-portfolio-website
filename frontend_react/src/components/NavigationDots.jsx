import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div>
      <div className="app__navigation">
        {["home", "about", "work", "skills", "testimonials", "contact"].map(
          (item, index) => (
            <a
              href={`#${item}`}
              key={item + index}
              onClick=""
              className="app__navigation-dot"
              style={active === item ? { backgroundColor: "#313BAC" } : {}}
            />
          )
        )}
      </div>
    </div>
  );
};

export default NavigationDots;
