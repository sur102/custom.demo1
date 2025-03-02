import charm1 from "../../assets/charm1.png";
import charm2 from "../../assets/charm2.png";
import charm3 from "../../assets/charm3.png";
import charm4 from "../../assets/charm4.png";
import charm5 from "../../assets/charm5.png";
import charm6 from "../../assets/charm6.png";
import charm7 from "../../assets/charm7.png";
import m1 from "../../assets/m1.webp";
import m2 from "../../assets/m2.webp";
import m3 from "../../assets/m3.webp";
import m4 from "../../assets/m4.webp";
import m5 from "../../assets/m5.webp";
import m6 from "../../assets/m6.webp";
import m7 from "../../assets/m7.webp";
import m8 from "../../assets/m8.webp";
import m9 from "../../assets/m9.webp";
import m10 from "../../assets/m10.webp";
import m11 from "../../assets/m11.webp";
import m12 from "../../assets/m12.webp";

const listCharm = [charm1, charm2, charm3, charm4, charm5, charm6, charm7];
const listM = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12];

export const getListM = () => {
  return listM;
};

export const getMByIndex = (index) => {
  return listM[index];
};

export const getListCharms = () => {
  return listCharm;
};

export const getCharmByIndex = (index) => {
  return listCharm[index];
};
