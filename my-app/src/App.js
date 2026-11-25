import logo from './logo.svg';
import './App.css';
import Sample from './sample';
import Profile from './profile';
//import Car from './sample2';
import Person from './state_example';
import StudentDe from './state_ex1';
import StudentDetail from './state.ex2';
import Project from './class_comp';
import Table from './class_comp1';
import Electronics from './props1';
import MultiObj from './multipleobj';
import FunCar from './functionBased';
import ArrayMap from './ArrayMapping';
import CarList1 from './function_Connect1';
import Click1 from './Onclick_1';
function App() {
  return (
    <div className="App">
      <Sample />
      <h1>hello world !!!</h1>
      <h2>welcome to react</h2>
      <i>welcome <strong><del>Isha Balu</del> JaiBalaji 😎👌</strong></i>  
        <table>
          <tr>
            <th>sno</th>
            <th>name</th>
            <th>course</th>
          </tr>
          <tr>
            <td>1</td>  
            <td>G.jaibalaji</td>
            <td>fullstack</td>
          </tr>
        </table>
        <>
        <Profile />
        </>
        <Person />
        <h1>state example , student details</h1>
        <StudentDe />
        <StudentDetail />
        <Project />
        <Table />
        <Electronics />
        <MultiObj />
        <FunCar />
        <br></br>
        <ArrayMap />
        <br></br>
        <CarList1 />
        <Click1 />
    </div>
  );
}

export default App;
