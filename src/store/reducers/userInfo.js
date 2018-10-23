import { GET_USER_INFO_FAIL, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS } from "../actions/userInfo";

const initState = {
  loading: false,
  user_info: {},
  error_msg: ''
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        loading: false,
        user_info: {},
        error_msg: ''
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        user_info: action.user_info,
        error_msg: ''
      }
    case GET_USER_INFO_FAIL:
      return {
        ...state,
        loading: false,
        user_info: {},
        error_msg: '请求失败'
      }
    default:
      return state
  }
}
