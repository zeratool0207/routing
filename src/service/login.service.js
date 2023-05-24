import axios from "axios";
import { ADMIN_DEV_URL } from "./config";
import admAuthHeader from "./auth.header";

const partnerList = (url, params, res, err) => post(url, params, res, err);    // 파트너리스트
const approvalList = (url, params, res, err) => get(url, params, res, err);   // 승인리스트


const post = (url, params, res, err) => {
    axios
      .post(ADMIN_DEV_URL + 'api/' + url, params, { headers: admAuthHeader() })
      .then(response => {
        if (response.status === 200) return res(response.data)
        else return response
      })
      .catch(error => {
        return err(error)
      })
  }

const get = (url, params, res, err) => {
    axios
      .get(ADMIN_DEV_URL + 'api/' + url, params, { headers: admAuthHeader() })
      .then(response => {
        if (response.status === 200) return res(response.data)
        else return response
      })
      .catch(error => {
        return err(error)
      })
  }



  export default {
    partnerList,
    approvalList
  }