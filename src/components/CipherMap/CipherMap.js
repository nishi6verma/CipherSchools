import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const CipherMap = () => {
  const data = [
    { date: "2023-01-29", count: 0 },
    { date: "2023-01-30", count: 0 },
    { date: "2023-01-31", count: 0 },
    { date: "2023-02-01", count: 0 },
    { date: "2023-02-02", count: 0 },
    { date: "2023-02-03", count: 0 },
    { date: "2023-02-19", count: 0 },
    { date: "2023-02-20", count: 0 },
    { date: "2023-02-21", count: 0 },
    { date: "2023-02-22", count: 0 },
    { date: "2023-02-23", count: 0 },
    { date: "2023-02-24", count: 0 },
  ];

  return (
    <section className="px-10">
      <div>
        <div className="flex items-center mb-4 mt-6">
          <div>
            <h1 className="text-text text-base font-bold uppercase">
              Cipher Map
            </h1>
          </div>
        </div>
        <CalendarHeatmap
          startDate={new Date("2023-01-01")}
          endDate={new Date("2023-12-31")}
          values={data}
          showWeekdayLabels={true}
          gutterSize={5}
        />
      </div>
      <hr className="mt-4" />
    </section>
  );
};

export default CipherMap;