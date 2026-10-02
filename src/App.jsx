import Content from "./components/Content.jsx"
import Header from "./components/Header.jsx"
import TotalUnits from "./components/TotalUnits.jsx"
import Name from "./components/Name.jsx"

const App = () => {
    const fullName = 'Sean Riley Dela Cruz'
    const courseCode = 'CSIT 340'
    const section = 'G7'

    const course = {
        name: 'BS in Information Technology',

        parts: [
            {name: 'Industry Elective 1 ', units: 3},
            {name: 'Project Management ', units: 3},
            {name: 'Data Analytics ', units: 3} 
        ]
    }

    
    
    return(
        <>
            <Header course = {course.name} />
            <Content parts = {course.parts} />
            <TotalUnits parts = {course.parts} />
            <Name name = {fullName} courseCode={courseCode} section = {section}/>
        </>
    );
}

export default App