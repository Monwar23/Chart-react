import { LineChart,Line,XAxis,YAxis,BarChart, Bar } from "recharts";


const DirectLine = () => {
    const subjectMarksData=
    [
        {
          "id": 1,
          "name": "John",
          "math_marks": 85,
          "physics_marks": 78,
          "chemistry_marks": 90
        },
        {
          "id": 2,
          "name": "Emily",
          "math_marks": 78,
          "physics_marks": 82,
          "chemistry_marks": 85
        },
        {
          "id": 3,
          "name": "Michael",
          "math_marks": 92,
          "physics_marks": 90,
          "chemistry_marks": 88
        },
        {
          "id": 4,
          "name": "Sophia",
          "math_marks": 70,
          "physics_marks": 65,
          "chemistry_marks": 75
        },
        {
          "id": 5,
          "name": "Jacob",
          "math_marks": 88,
          "physics_marks": 85,
          "chemistry_marks": 80
        },
        {
          "id": 6,
          "name": "Emma",
          "math_marks": 65,
          "physics_marks": 70,
          "chemistry_marks": 72
        },
        {
          "id": 7,
          "name": "William",
          "math_marks": 80,
          "physics_marks": 88,
          "chemistry_marks": 82
        },
        {
          "id": 8,
          "name": "Olivia",
          "math_marks": 95,
          "physics_marks": 92,
          "chemistry_marks": 90
        },
        {
          "id": 9,
          "name": "Alexander",
          "math_marks": 75,
          "physics_marks": 78,
          "chemistry_marks": 80
        },
        {
          "id": 10,
          "name": "Ava",
          "math_marks": 82,
          "physics_marks": 85,
          "chemistry_marks": 88
        }
      ]
      


    return (
        <div>
            <div>
            <LineChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math_marks" stroke="red"></Line>
                <Line dataKey="physics_marks" stroke="yellow"></Line>
            </LineChart>
            </div>
            <div>
                <BarChart width={1200} height={400} data={subjectMarksData}>
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey="math_marks" stroke="blue" fill="red" ></Bar>
                    <Bar dataKey="physics_marks" stroke="blue" fill="yellow" ></Bar>
                    <Bar dataKey="chemistry_marks" stroke="blue" fill="green" ></Bar>
                </BarChart>
            </div>
        </div> 
        
    );
};

export default DirectLine;