import React from 'react';
// import { Tooltip } from 'react-bootstrap';
import { CartesianGrid, Legend, Line, RadialBar, RadialBarChart, Scatter, XAxis, YAxis, Tooltip, ComposedChart } from 'recharts';

const MyChart = () => {

    // this data can be came from our JSON file as well
    const data = [
        {
            name: "8-12 years",
            uv: 31.47,
            pv: 2400,
            fill: "#8884d8"
        },
        {
            name: "12-16 years",
            uv: 26.69,
            pv: 4567,
            fill: "#83a6ed"
        },
        {
            name: "16-25 years",
            uv: 15.69,
            pv: 1398,
            fill: "#8dd1e1"
        },
        {
            name: "25-40 years",
            uv: 8.22,
            pv: 9800,
            fill: "#82ca9d"
        },
        {
            name: "40-49 years",
            uv: 8.63,
            pv: 3908,
            fill: "#a4de6c"
        },
        {
            name: "50+",
            uv: 2.63,
            pv: 4800,
            fill: "#d0ed57"
        },
        {
            name: "unknow",
            uv: 6.67,
            pv: 4800,
            fill: "#ffc658"
        }
    ];

    const style = {
        marginLeft: 30,
        top: 0,
        left: 350,
        lineHeight: "40px"
    };



    // Data2 for Another chart

    const data2 = [
        { index: 10000, red: 1643, blue: 790 },
        { index: 1666, red: 182, blue: 42 },
        { index: 625, red: 56, blue: 11 },
        // Calculation of line of best fit is not included in this demo
        { index: 300, redLine: 0 },
        { index: 10000, redLine: 1522 },
        { index: 600, blueLine: 0 },
        { index: 10000, blueLine: 678 }
    ];


    return (
        <div>
            <h1> User Experience and Customer Experience Chart  </h1>

            <div className="d-flex">



                <RadialBarChart
                    width={500}
                    height={300}
                    cx={200}
                    cy={150}
                    innerRadius={20}
                    outerRadius={140}
                    barSize={10}
                    data={data}
                >
                    <RadialBar
                        minAngle={15}
                        label={{ position: "insideStart", fill: "#fff" }}
                        background
                        clockWise
                        dataKey="uv"
                    />
                    <Legend
                        iconSize={10}
                        width={120}
                        height={140}
                        layout="vertical"
                        verticalAlign="middle"
                        wrapperStyle={style}
                    />
                </RadialBarChart>


                {/* this is second chart */}


                <ComposedChart
                    width={500}
                    height={400}
                    data={data2}
                    margin={{
                        top: 20,
                        right: 80,
                        bottom: 20,
                        left: 150
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <Tooltip />
                    <Legend />

                    <XAxis
                        dataKey="index"
                        type="number"
                        label={{ value: "By Year", position: "insideBottomRight", offset: 0 }}
                    />
                    <YAxis
                        unit="mins"
                        type="number"
                        label={{ value: "Time", angle: -90, position: "insideLeft" }}
                    />
                    <Scatter name="Course Not Enrolled" dataKey="red" fill="red" />
                    <Scatter name="Course Enroled" dataKey="blue" fill="blue" />
                    <Line
                        dataKey="blueLine"
                        stroke="blue"
                        dot={false}
                        activeDot={false}
                        legendType="none"
                    />
                    <Line
                        dataKey="redLine"
                        stroke="red"
                        dot={false}
                        activeDot={false}
                        legendType="none"
                    />
                </ComposedChart>


            </div>
        </div>


    );
};

export default MyChart;