// import styled from "styled-components";
// import { FormControlLabel, Checkbox } from "@material-ui/core";
// import { withStyles } from "@material-ui/core/styles";
// import Slider from "@material-ui/core/Slider";
// const TripFilter = ({
//   tripFilter,
//   handleChange,
//   handlePriceChange,
//   minPrice,
//   maxPrice,
// }) => {
//   const {
//     org,
//     acc_type,
//     price,
//     //capacity,
//     // breakfast,
//     // pets,
//   } = tripFilter;

//   const getCheckBoxes = (group, groupName) => {
//     return group.map((item, index) => {
//       return (
//         <div className="filter-checkbox-item">
//           <FormControlLabel
//             control={
//               <Checkbox
//                 id={`${item.name}-checkbox-${index}`}
//                 name={`${groupName}*${item.name}`}
//                 value={item.name}
//                 checked={item.isChecked}
//                 onChange={handleChange}
//                 color="primary"
//               />
//             }
//             label={item.name}
//           />
//         </div>
//       );
//     });
//   };

//   let people = [];
//   people = people.map((item, index) => {
//     return (
//       <option value={item} key={index}>
//         {item}
//       </option>
//     );
//   });
//   return (
//     <TripFilterSection>
//       <div className="filter-container">
//         <h1 className="filter-heading">Filter:</h1>
//         <div className="filter-col">
//           <div className="filter-col-item">
//             <p>Organisation:</p>
//             {getCheckBoxes(org, "org")}
//           </div>
//           <div className="filter-col-item">
//             <p>Accomodation:</p>
//             {getCheckBoxes(acc_type, "acc_type")}
//           </div>
//           <div className="filter-col-item price-slider-item">
//             <p>Price:</p>
//             <PriceSlider
//               aria-labelledby="range-slider"
//               valueLabelDisplay="aurto"
//               onChange={handlePriceChange}
//               min={minPrice}
//               max={maxPrice}
//               value={price}
//             />
//           </div>
//           <div className="filter-button">More filters</div>
//         </div>
//       </div>
//     </TripFilterSection>
//   );
// };

// export default TripFilter;

// const PriceSlider = withStyles({
//   root: {
//     color: "primary",
//     height: 6,
//     maxWidth: "90%",
//     marginLeft: 9,
//   },
//   thumb: {
//     height: 22,
//     width: 22,
//     backgroundColor: "#fff",
//     border: "2px solid currentColor",
//     marginTop: -8,
//     marginLeft: -12,
//     "&:focus, &:hover, &$active": {
//       boxShadow: "inherit",
//     },
//   },
//   active: {},
//   valueLabel: {
//     left: "calc(-50% + 4px)",
//   },
//   track: {
//     height: 8,
//     borderRadius: 4,
//   },
//   rail: {
//     height: 6,
//     borderRadius: 2,
//   },
// })(Slider);

// const TripFilterSection = styled.header`
//   .filter-container {
//     flex: 20vw;
//     display: flex;
//     flex-direction: column;
//     padding-top: 4rem;
//     padding-right: 1.5rem;
//     padding-left: 1.5rem;
//     max-width: 100%;
//   }
//   .filter-heading {
//     font-size: 1.5rem;
//     font-weight: 300;
//   }
//   .filter-col {
//     display: none;
//     display: flex;
//     gap: 0.5rem;
//     flex-direction: column;
//     margin-bottom: 1.25rem;
//     white-space: nowrap;
//   }
//   .filter-col-item {
//     padding: 5px;
//     border: 1px solid var(--gray);
//   }
//   .filter-button {
//     padding-right: 1rem;
//     padding-left: 1rem;
//     padding-top: 0.5rem;
//     padding-bottom: 0.5rem;
//     text-transform: capitalize;
//   }
//   .filter-button:hover {
//     cursor: pointer;
//     border-radius: 9999px;
//     box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
//       0 4px 6px -2px rgba(0, 0, 0, 0.05);
//   }
//   .filter-button:active {
//     --transform-scale-x: 0.95;
//     --transform-scale-y: 0.95;
//     background-color: #f7fafc;
//     transition-property: transform;
//     transition-duration: 100ms;
//     transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
//   }
//   .filter-checkbox-list {
//     list-style-type: none;
//   }
//   .filter-checkbox-list {
//     list-style-type: none;
//   }
//   .filter-button label {
//     display: block;
//     letter-spacing: var(--mainSpacing);
//     margin-bottom: 0.5rem;
//   }
//   .filter-button {
//     width: 100%;
//     background: transparent;
//     font-size: 1rem;
//   }
// `;
