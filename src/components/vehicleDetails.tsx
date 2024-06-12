import Hero1 from "../assets/hero1.png";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const vehicleDetails = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const properties = [
    { name: "Model", value: "Passat CC" },
    { name: "Mark", value: "Volkswagen" },
    { name: "Year", value: "2008" },
    { name: "Doors", value: "4/5" },
    { name: "AC", value: "Yes" },
    { name: "Transmission", value: "Automatic" },
    { name: "Fuel", value: "Gasoline" },
  ];

  const cars = [
    "Tata Nexon",
    "Maruti Suzuki Swift",
    "Hyundai Creta",
    "Toyota Hilux",
    "Mahindra Scorpio",
  ];
  return (
    <div className="mt-10 my-20 md:mt-60 ">
      <div className="heading flex flex-col justify-center items-center gap-3 text-center">
        <h5 className="font-bold text-xl md:text-2xl ">Vehicle Models</h5>
        <h2 className="font-extrabold text-3xl md:text-5xl ">
          Our rental fleet
        </h2>
        <p className=" text-base  mb-5 color-grey-100 ">
          Choose from a variety of our amazing vehicles to rent for your next{" "}
          <br />
          adventure or business trip
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-2 mx-10 lg:mx-20">
        <div className="pick-car flex flex-col w-full lg:w-1/4 h-40 lg:mb-0 mb-44">
          {cars.map((car) => {
            return (
              <button className="py-4 my-2 w-full text-neutral-900 h-18 bg-zinc-200 border-1 border-black opacity-90 text-xl font-bold">
                {car}
              </button>
            );
          })}
        </div>

        <div className="show-car-details flex flex-row  w-full lg:w-3/4 gap-2">
          <div className="car-img w-3/5 lg:w-3/4">
            <img src={Hero1} alt="" className="w-full" />
          </div>
          <div className="car-details w-2/5 lg:w-1/4">
            <TableContainer component={Paper} className="w-full">
              <button className="bg-[#FF4D30] text-white w-full h-12 text-center text-xl font-bold">
                <span className="text-3xl font-extra mr-4">25$</span>
                /rent per day
              </button>
              <Table aria-label="customized table">
                <TableBody>
                  {properties.map((property) => (
                    <StyledTableRow key={property.name}>
                      <StyledTableCell component="th" scope="row">
                        {property.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {property.value}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
              <button className="text-white bg-[#FF4D30] w-full h-12 text-center text-xl font-bold mt-4">
                RESERVE NOW
              </button>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default vehicleDetails;
