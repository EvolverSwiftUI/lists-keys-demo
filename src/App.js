// import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile';
import Welcome from './components/Welcome';

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://picsum.photos/200",
    name: "Jhon Andrew",
    role: "Software Engineer"
  },
  {
    uniqueNo: 2,
    imageUrl: "https://picsum.photos/300",
    name: "Smith Wilson",
    role: "Sr. Software Engineer"
  },
  {
    uniqueNo: 3,
    imageUrl: "https://picsum.photos/400",
    name: "Mark Jukarburg",
    role: "Jr. Software Engineer"
  },
  {
    uniqueNo: 4,
    imageUrl: "https://picsum.photos/500",
    name: "Robot C Warnew",
    role: "Tech Lead"
  }
]

// by normal function format
// function App() {
//   return (
//     <UserProfile />
//   );
// }

// by arrow function format
// const App = () => (
//   <div className="list-container">
//     <h1 className="title"> Users List</h1>
//     <ul>
//         {/* <UserProfile userDetails={userDetailsList[0]}/>
//         <UserProfile userDetails={userDetailsList[1]}/>
//         <UserProfile userDetails={userDetailsList[2]}/>
//         <UserProfile userDetails={userDetailsList[3]}/> */}
//         {
//           userDetailsList.map((eachItem) => (
//             <UserProfile userDetails={eachItem} key={eachItem.uniqueNo}/>
//           ))
//         }
//     </ul>
    
//   </div>
// )

const App = () => <Welcome name="Sivaram Yadav"/>

export default App;
