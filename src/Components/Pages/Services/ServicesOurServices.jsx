"use client";

import { FaCarBattery, FaCogs, FaTools, FaFan, FaCarSide, FaPlug, FaKey, FaCamera, FaMicrochip, FaBolt,  FaSnowflake, FaWrench } from "react-icons/fa";

import { PrimaryButton } from "@/Components/ReUseAbleComponents/Buttons/Buttons";
import Link from "next/link";


import { useEffect, useRef, useState } from "react";




const services = [
  // ===== Electrical Services =====
  {
    category: "Electrical Services",
    items: [
      {
        title: "Engine Wiring & Transmission Wiring",
        icon: <FaCarBattery className="text-[var(--primary-blue-light)] text-3xl" />,
        image: "https://images.unsplash.com/photo-1621217899086-01f0e603009e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWR2YW5jZWQlMjBFQ1UlMjAlMjYlMjBCQ00lMjBQcm9ncmFtbWluZyUyMG9mJTIwY2FyfGVufDB8fDB8fHww",
        description:
          "Expert wiring services for both engine and transmission systems. We ensure all electrical connections are secure, reliable, and optimized for peak vehicle performance, reducing the risk of breakdowns and costly repairs."
      },
      {
        title: "Airbag & ABS System Repairs",
        icon: <FaTools className="text-[var(--accent-yellow)] text-3xl" />,
        image: "https://media.istockphoto.com/id/672738286/photo/airbag-work.webp?a=1&b=1&s=612x612&w=0&k=20&c=lmIgYbLTzerumddidkK9uAE6b6XEqb-nWYEKINfRQQU=",
        description:
          "Comprehensive diagnostic and repair services for airbag and ABS systems, ensuring your vehicle's safety features work flawlessly to protect you and your passengers."
      },
      {
        title: "Radar & ADAS Calibration",
        icon: <FaCamera className="text-[var(--primary-green-light)] text-3xl" />,
        image: "https://images.unsplash.com/photo-1743732407061-65ab2fee36b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmFkYXIlMjBzeXN0ZW0lMjBpbiUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        description:
          "We offer static camera calibration, radar calibration, blind spot monitoring module servicing, and lane assist system setup. These services ensure your vehicle's driver assistance systems perform with maximum accuracy."
      },
      {
        title: "Advanced ECU & BCM Programming",
        icon: <FaMicrochip className="text-[var(--accent-orange)] text-3xl" />,
        image: "https://images.pexels.com/photos/3862610/pexels-photo-3862610.jpeg?_gl=1*qnmcen*_ga*MTg5NTQwNjMwNy4xNzUwMzQ3NDY4*_ga_8JE65Q40S6*czE3NTQ3MzUyMTAkbzMkZzEkdDE3NTQ3MzUzMTUkajMwJGwwJGgw",
        description:
          "From ECU programming to BCM updates, we provide precise programming for all vehicle modules, including remote key and transmission circuit plate programming, using industry-standard tools."
      },
      {
        title: "Hybrid & Electric Vehicle Services",
        icon: <FaBolt className="text-[var(--primary-green)] text-3xl" />,
        image: "https://images.unsplash.com/photo-1617886322207-6f504e7472c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SHlicmlkJTIwJTI2JTIwRWxlY3RyaWMlMjBWZWhpY2xlJTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D",
        description:
          "Specialized maintenance for hybrid and electric vehicles, including battery replacements, inverter servicing, and EV battery repair with advanced programming to maximize lifespan and efficiency."
      },
      {
        title: "Air Conditioning Services",
        icon: <FaSnowflake className="text-[var(--info-cyan)] text-3xl" />,
        image: "https://media.istockphoto.com/id/1318616314/photo/car-air-conditioner-check-service-leak-detection-fill-refrigerant-device-and-meter-liquid.webp?a=1&b=1&s=612x612&w=0&k=20&c=YX3z_a9bJ274_PDZE6F1I5E-LRVHOqAqviIUBFFHZyo=",
        description:
          "Complete AC solutions including compressor repair/replacement, cooling coil service, and refilling with genuine American gas and oil for consistent, reliable cooling."
      }
    ]
  },
  // ===== Mechanical Services =====
  {
    category: "Mechanical Services",
    items: [
      {
        title: "Engine Services",
        icon: <FaCogs className="text-[var(--primary-blue)] text-3xl" />,
        image: "https://media.istockphoto.com/id/2168533566/photo/car-mechanic-fixing-the-car-in-car-repair-shop-young-engineer-checking-the-car-and-fixing.webp?a=1&b=1&s=612x612&w=0&k=20&c=PanQDDaQyhjh3bZaN6TuHSBTMPLn6IgsUuN4zz-PAVc=",
        description:
          "From complete engine swaps and overhauls to fixing overheating issues and internal noise, we provide detailed inspections and precision repairs to keep your engine in top shape."
      },
      {
        title: "Transmission Services",
        icon: <FaCarSide className="text-[var(--accent-yellow)] text-3xl" />,
        image: "https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.webp?a=1&b=1&s=612x612&w=0&k=20&c=I9kCVeGbPl3yrto59PFC7ErW8i27mJ1pD5ohzdBADFI=",
        description:
          "Expert transmission swaps, overhauls, and calibrations for smooth, efficient power delivery and long-term reliability on the road."
      },
      {
        title: "Suspension & Steering",
        icon: <FaWrench className="text-[var(--primary-green-light)] text-3xl" />,
        image: "https://media.istockphoto.com/id/2153972424/photo/shock-absorber-and-coil-spring-of-car-suspension-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=aMl_UcgjIbhIuOTEgBTTam3DyCy-x9HLIx1biJFiJ7s=",
        description:
          "Complete suspension overhauls, brake servicing, engine mount replacement, shock absorber replacement, and steering box assembly for superior handling and ride comfort."
      }
    ]
  }
];

// const ImageWithLoader = ({ src, alt, className }) => {
//   const [loading, setLoading] = useState(true);

//   const imgRef = useRef(null);

//   useEffect(() => {
//     if (imgRef.current?.complete) {
//       // Image already loaded (from cache)
//       setLoading(false);
//     }
//   }, [src]);

//   return (
//     <div className={`relative overflow-hidden ${className}`}>
//       {loading && (
//         <div className="absolute inset-0 flex items-center justify-center bg-[var(--gray-background)]">
//           <svg
//             className="animate-spin h-10 w-10 text-[var(--primary-blue)]"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               strokeWidth="4"
//             ></circle>
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8v8z"
//             ></path>
//           </svg>
//         </div>
//       )}
//       <img
//         src={src}
//         alt={alt}
//         className={`w-full h-full object-cover transition-transform duration-300 ${
//           loading ? "opacity-0" : "opacity-100"
//         }`}
//         onLoad={() => setLoading(false)}
//         onError={() => setLoading(false)} 
//       />
//     </div>
//   );
// };


const ImageWithLoader = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;

    if (!img) return;

    if (img.complete && img.naturalHeight !== 0) {
      // Already loaded from cache
      setLoading(false);
      return;
    }

    const handleLoad = () => setLoading(false);
    const handleError = () => setLoading(false);

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    // Cleanup listeners on unmount or src change
    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--gray-background)]">
          <svg
            className="animate-spin h-10 w-10 text-[var(--primary-blue)]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};



const ServicesOurServices = () => {
  return (
    <section className="px-4 md:px-8 py-12 md:py-16 bg-[var(--gray-surface)]">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[var(--gray-text-dark)] mb-12">
        Our Professional Auto Services
      </h2>

      {services.map((category, idx) => (
        <div key={idx} className="mb-16">
          <h3 className="text-2xl font-semibold text-[var(--primary-blue)] mb-8 text-center">
            {category.category}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((service, sIdx) => (
              <div
                key={sIdx}
                className="bg-[var(--white)] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                {/* <div className="h-60 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                </div> */}

                  <ImageWithLoader
                    src={service.image}
                    alt={service.title}
                    className="h-60 w-full transition-transform duration-300 group-hover:scale-105"
                    />

                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[var(--primary-green)] text-2xl">
                        {service.icon}
                      </span>
                      <h4 className="text-lg font-semibold text-[var(--gray-text-dark)]">
                        {service.title}
                      </h4>
                    </div>
                    <p className="text-[var(--gray-text-muted)] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href={"/contact"} className="flex justify-center items-center mt-12">
            <PrimaryButton buttonName={"Get a free quote"} />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default ServicesOurServices;