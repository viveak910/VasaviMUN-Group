import React from "react";
import "./busroute.css";

const busRoutes = [
  {
    title: "Nagole ‘x’ Roads",
    description:
      "Via: Nagole Metro, Ramanthapur Modern Bakery, D-Mart, HPS, T.V.Studio, Amberpet ‘x’ Roads, 6 No., Shivam Road, Vidyanagar ‘x’ Roads, VST, RTC ‘x’ Roads, Indira Park, Telugutalli Flyover, Lakdikapool, Mehdipatnam.",
  },
  {
    title: "Uppal Depot",
    description:
      "Via: Peerzadigua Kaman, Uppal Bus Stop, Uppal ‘x’ Roads, Survey of India, Street No.8 Main Road, Habsiguda ‘x’ Roads, Tarnaka, Adikmet, Vidyanagar, Shankermutt, Nallakunta Fever Hospital, Barkathpura ‘x’ Roads, Narayanguda, Himayathnagar, Liberty, Lakdikapool, Mehdipatnam.",
  },
  {
    title: "Moula – Ali",
    description:
      "Via: Coca Cola, Housing Board, 1st Phase, Noma Function Hall, Mallapur, Nacharam, Delhi Public School, HMT Bus Stop, Habsiguda ‘x’ Roads, Tarnaka, Adikmet, Vidyanagar, Shankermutt, Nallakunta Fever Hospital, Barkathpura ‘x’ Roads, Narayanguda, Himayathnagar, Liberty, Lakdikapool, Mehdipatnam.",
  },
  {
    title: "ECIL ‘x’ Roads",
    description:
      "Via: Kushaiguda D-Mart, ECIL, Radhika Theatre, A.S.Rao Nagar, Naredmet ‘x’ Roads, Vinayak Nagar, Krupa Complex, Safilguda, Anandbagh, Vani Nagar, Anu Tex, Malkajigiri, Mirzalguda, Lalaguda, Mettuguda, Allagadda, Chilkalguda ‘x’ Roads, Boiguda ‘x’ Roads, Musheerabad ‘x’ Roads, Kawadiguda, Lower Tankbund, Lakdikapool, Mehdipatnam.",
  },
  {
    title: "ECIL ‘x’ Roads",
    description:
      "Via: Moula-ali, Coca Cola, Mettuguda, Rail Nilayam, Sangeet, Sangeet ‘x’ Roads, Chilkalguda ‘x’ Roads, Kawadiguda, LowerTankbund, Lakdikapool, Mehdipatnam.",
  },
  {
    title: "Suchitra ‘x’ Roads",
    description:
      "Via: MMR Garden, B’pally x Road, Tarbund, Paradise, Police Lines, Prakashnagar, Begumpet, Punjagutta, Banjara Hills, Care Hospital, Masab Tank, Mehdipatnam.",
  },
  {
    title: "Chinthalakuntha Check Post",
    description:
      "Via: L.B. Nagar, D-Mart, Sarronagar Stadium, White House, Kothapet Asthalaxmi Temple, PVT, Chaitanyapuri, Dilsukhnagar, Chandana Brothers, Malakpet, Chaderghat, Saibaba Temple, Medical College, Koti, Moinja Market, Abids GPO, Nampally, Public Gardens, Lakdikapool, Mehdipatnam.",
  },
  {
    title: "Vanasthalipuram Red Tank",
    description:
      "Via: Panama, Raghavendra Hotel, L.B. Nagar ‘x’ Roads, Sagar Ring Road, Bairamalguda, Karmanghat, RTC Colony, Chempapet, Santhoshnagar Bharat Gardens, Santoshnagar I.S. Sadan, Yadagiri Theatre, Owaisi Hospital, Midhani ‘x’ Roads, DRDO, Chandrayanagutta, Aramghar ‘x’ Roads, Rajendra Nagar, Attapur.",
  },
  {
    title: "Vanastahlipuram Sushma Theatre",
    description:
      "Via: Rythu Bazar, Vydehi Nagar Circle, B.N. Reddy Signal, Hasthinapuram, Omkarnagar, Sagar Ring Road, TKR Kaman, Gayatrinagar, Manda Mallamma.",
  },
  {
    title: "Saroornagar",
    description:
      "Via: Kothapet ‘x’ Roads, Chaitanyapuri, Dilsukhnagar, Malakpet, Chaderghat, Moinja Market, Abids, Nampally, Public Gardens, Lakadikapool, Mehdipatnam.",
  },
  {
    title: "K.P.H.B",
    description:
      "Via: Vivekananda Nagar Colony, Kukatpally, Moosapet ‘x’ Roads, Erragadda, ESI, S.R.Nagar, Ameerpet, Punjagutta, Nagarjuna Circle, Banjara Hills, Masab Tank, NMDC, Mehdipatnam.",
  },
  {
    title: "Bheeramguda",
    description:
      "Via: Ashoknagar, Lingampally ‘x’ Roads, Chandanagar, Gangaram, Madinaguda, Alwyn ‘x’ Roads, Hafeezpet, Kondapur, Kothaguda ‘x’ Roads, Gachibowli, Outer Ring Road, Narsing.",
  },
  {
    title: "Miyapur",
    description:
      "Via: Pillar No.600, Miyapur Bus Stop, Hydernagar, Nizampet ‘x’ Roads, JNTUH, South India Shopping Mall, Rythu Bazar, Flour Mill, Malaysian Township, Hitech City, Mindspace, Gachibowli, Outer Ring Road, Narsing.",
  },
  {
    title: "Patancheru",
    description:
      "Via: Bheeramguda, R.C. Puram, Ashok Nagar, Lingampally ‘x’ Roads, Nallagandla Rythu Bazar, Seri Lingampally, HCU Bus Depot, Gachibowli, ORR.",
  },
  {
    title: "Alwal (Indira Gandhi Statue)",
    description:
      "Via: Alwal Main Road, Lothukunta, Lal Bazar, Tirumalagiri, Kharkhana, JBS, Patny, Paradise.",
  },
  {
    title: "Mehdipatnam",
    description:
      "Via: Humayun Nagar P.S., Mehdipatnam, Rethibowli, Pillar No.68.",
  },
];

const BusRoutes = () => {
  return (
    <div className="cards-container">
      {busRoutes.map((route, index) => (
        <div className="card" key={index}>
          <div className="card-title">{route.title}</div>
          <div className="card-description">{route.description}</div>
        </div>
      ))}
    </div>
  );
};

export default BusRoutes;
