import axios from "axios";
import { SERP } from "../../constants/constants";

const instance = axios.create({
  baseURL: SERP.BASE,
});

export default instance;
