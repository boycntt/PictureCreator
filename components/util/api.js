import axios from "axios";
import Constants from "expo-constants";
// import { baseUrl} from "react-native-dotenv";
// ApiClient.init(baseUrl)

let GetApis = async (controller, action, params, timeout) => {
  try {
    let res = await axios.get("/" + controller + "/" + action, {
      baseURL: "http://appapi.sunhouse.com.vn/api/",
      timeout: timeout,
      headers: {
        "cache-control": "no-cache",
        Authorization: "Basic dHJpZXVwdjpwaGFtdHJpZXU=",
      },
      params: params,
    });
    let data = await res.data;
    if (data == undefined) {
      return "error get";
    } else return data;
  } catch (error) {
    return error;
  }
};

export default GetApis;
