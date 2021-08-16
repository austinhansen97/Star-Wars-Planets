// import React from "react";
// import Card from "../UI/Card";
// import "./Forms.css";
// import { useState } from "react";

// function Forms(props) {
//   // useState for grabbing the value of the state selected
//   const [selectedState, setState] = useState("");

//   //   // States list data
//   //   const statesData = [
//   //     { states: "Select" },
//   //     { states: "Virginia" },
//   //     { states: "Massachusetts" },
//   //     { states: "RhodeIsland" },
//   //     { states: "Connecticut" },
//   //     { states: "NewHampshire" },
//   //     { states: "NewYork" },
//   //     { states: "NewJersey" },
//   //     { states: "Pennsylvania" },
//   //     { states: "Delaware" },
//   //     { states: "Maryland" },
//   //     { states: "NorthCarolina" },
//   //     { states: "SouthCarolina" },
//   //     { states: "Georgia" },
//   //   ];

//   //   // dynamic listing of State data
//   //   const stateOption = statesData.map((data) => (
//   //     <option value={data.states}>{data.states}</option>
//   //   ));

//   const latinObject = props.latin.album;

//   console.log(latinObject);

//   // Cities list data
//   const citiesData = [
//     {
//       Select: "",
//       Virginia: "Richmond",
//       Massachusetts: "Boston",
//       RhodeIsland: "Providence",
//       Connecticut: "Hartford",
//       NewHampshire: "Concord",
//       NewYork: "Albany",
//       NewJersey: "Trenton",
//       Pennsylvania: "Harrisburg",
//       Delaware: "Dover",
//       Maryland: "Annapolis",
//       NorthCarolina: "Raleigh",
//       SouthCarolina: "Columbia",
//       Georgia: "Atlanta",
//     },
//   ];

//   // city dynamically appears dependent on "useState" updated variable
//   let test = citiesData[0][selectedState];

//   return (
//     <section>
//       <Card>
//         <form className="dropdowns">
//           <label>EASTERN STATES</label>
//           <select
//             onChange={(event) => {
//               setState(event.target.value);
//             }}
//           >
//             <option value={latinObject}>{latinObject}</option>
//           </select>

//           <label>CAPITAL</label>
//           <select>
//             <option value={test}>{test}</option>
//           </select>
//         </form>
//       </Card>
//     </section>
//   );
// }

// export default Forms;
