import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface CarProperty {
  name: string;
  value: string;
}

interface Car {
  name: string;
  properties: CarProperty[];
  image: string;
}

interface VehicleDetailsProps {
  searchFormRef: React.RefObject<HTMLDivElement>;
  onReserve?: (carName: string) => void;
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({
  searchFormRef,
  onReserve,
}) => {
  const [carData, setCarData] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<string>("");
  const [carProperties, setCarProperties] = useState<CarProperty[]>([]);
  const [selectedCarPrice, setSelectCarPrice] = useState<number>(30);
  const [carImage, setCarImage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4050/cars");
        const data: Car[] = await response.json();
        setCarData(data);

        // Set the first car as the selected car initially
        if (data.length > 0) {
          setSelectedCar(data[0].name);
          setCarProperties(data[0].properties);
          setCarImage(data[0].image);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleScrollToForm = () => {
    if (searchFormRef.current) {
      searchFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (onReserve) {
      onReserve(selectedCar);
    }
  };

  // Initial animation when component mounts
  useGSAP(() => {
    gsap.from(".car-image", {
      y: -800, // Start from above the viewport
      duration: 1.5,
      opacity: 0,
      ease: "bounce.out",
      scale: 0.5, // Bouncy effect
      scrollTrigger: {
        trigger: ".car-image",
        start: "top 30%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  // Animation when switching between cars
  useEffect(() => {
    if (carImage) {
      gsap.fromTo(
        ".car-image",
        {
          y: -400,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "bounce.out",
          clearProps: "all", // Clear properties after animation
        }
      );
    }
  }, [carImage]);

  const handleSelect = (carName: string) => {
    const selectedCarData = carData.find((car) => car.name === carName);
    if (selectedCarData) {
      setSelectedCar(carName);
      setCarProperties(selectedCarData.properties);
      setCarImage(selectedCarData.image);
      const priceProperty = selectedCarData.properties.find(
        (prop) => prop.name === "Price"
      );
      setSelectCarPrice(Number(priceProperty?.value) || 25);
    }
  };

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

  return (
    <div className="mt-10 my-20 md:mt-60">
      <div className="heading flex flex-col justify-center items-center gap-3 text-center">
        <h5 className="font-bold text-xl md:text-2xl">Vehicle Models</h5>
        <h2 className="font-extrabold text-3xl md:text-5xl">
          Our rental fleet
        </h2>
        <p className="text-base mb-5 color-grey-100">
          Choose from a variety of our amazing vehicles to rent for your next{" "}
          <br />
          adventure or business trip
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-2 mx-10">
        <div className="pick-car flex flex-col w-full lg:w-1/4 h-40 lg:mb-0 mb-44">
          {carData.map((car) => (
            <button
              key={car.name}
              className={`py-4 my-2 w-full text-neutral-900 h-18 bg-zinc-200 border-1 border-black opacity-90 text-xl font-bold ${
                selectedCar === car.name ? "bg-[#e04f38] text-white" : ""
              }`}
              onClick={() => handleSelect(car.name)}
            >
              {car.name}
            </button>
          ))}
        </div>

        <div className="show-car-details flex flex-col md:flex-row w-full lg:w-3/4 lg:gap-2 mt-20 lg:mt-0">
          <div className="car-img w-full md:w-8/12 lg:w-8/12">
            <img src={carImage} alt={selectedCar} className="block car-image" />
          </div>
          <div className="car-details w-full md:w-4/12 lg:w-4/12 flex justify-center items-center lg:p-2 md:mx-0">
            <TableContainer component={Paper} className="w-full">
              <button className="bg-[#FF4D30] text-white w-full h-12 text-center text-xl font-bold">
                <span className="text-3xl font-extra mr-4">
                  {selectedCarPrice}
                </span>
                /rent per day
              </button>
              <Table aria-label="customized table">
                <TableBody>
                  {carProperties.map((property) => (
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
              <button
                className="text-white bg-[#e04f38] w-full h-12 text-center text-xl font-bold mt-4"
                onClick={handleScrollToForm}
              >
                RESERVE NOW
              </button>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
