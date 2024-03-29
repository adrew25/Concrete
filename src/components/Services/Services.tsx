import React from "react";
import { useSpring, animated } from "react-spring";

interface ServiceProps {
  title: string;
  items: string[];
}

const Service: React.FC<ServiceProps> = ({ title, items }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props} className="p-4 mb-4 bg-white shadow rounded">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <hr className="bg-gray-400 mb-2" />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </animated.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Τηλεοπτικές Παραγωγές",
      items: [
        "Δημιουργία Concepts",
        "Σκηνοθεσία",
        "Διεύθυνση Φωτογραφίας",
        "Μίξη ήχου – Ηχοληψία",
        "Βιντεοσκόπηση",
      ],
      Icon: "",
    },
    {
      title: "Podcasts – Vodcasts",
      items: [
        "Δημιουργία Περιεχομένου",
        "Σκηνοθεσία",
        "Βιντεοσκόπηση / Επεξεργασία ήχου",
        "Post Production",
      ],
      Icon: "",
    },
    {
      title: "Τηλεοπτική Κάλυψη events",
      items: ["ΟΒ Van", "Σκηνοθεσία", "Διεύθυνση Φωτογραφίας", "Μοντάζ"],
      Icon: "",
    },
    {
      title: "Video Clips ",
      items: ["Scouting", "Mood Board", "Production"],
      Icon: "",
    },
    {
      title: "Διαφημιστικά Spots & Εταιρικά Videos",
      items: ["Kινηματογραφική Κάλυψη", "Speakage / Sound Design", "Μοντάζ"],
      Icon: "",
    },
    {
      title: "Social Media Content ",
      items: ["Δημιουργία περιεχομένου / Social Media Campaigns"],
      Icon: "",
    },
    {
      title: "Φωτογραφία",
      items: [
        "Studio Φωτογράφησης ",
        "Drone Photography",
        "Επεξεργασία Φωτογραφίας",
      ],
      Icon: "",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gray-100 bg-opacity-70 text-center p-5">
      <h2 className="text-2xl md:text-4xl lg:text-6xl text-gray-700 bg-opacity-75 mb-5">
        Υπηρεσίες
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <Service key={index} title={service.title} items={service.items} />
        ))}
      </div>
    </section>
  );
};

export default Services;
