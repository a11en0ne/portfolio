import React from "react"
import { FaCode, FaSketch, FaDiagnoses } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Goal-oriented Web Developer with a Certificate IV in Web-Based Technologies and bachelor’s degree in Engineering Management.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Passionate web designer, skilled in Adobe Creative Suite, HTML, CSS. Creates seamless UX and UI with creative but functional designs.`,
  },
  {
    id: 3,
    icon: <FaDiagnoses className="service-icon" />,
    title: "project Management",
    text: `Armed with a deep sense of responsibility, abundant knowledge and experience in project administration and possessing very high levels of enthusiasm.`,
  },
]

export default services
