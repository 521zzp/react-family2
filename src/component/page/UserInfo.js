import React from 'react'
import { getUserInfo } from '@/store/actions/userInfo'
import { connect } from 'react-redux'

function UserInfo({
  user_info,
  loading,
  error_msg,
  getUserInfo
}) {

  return (
    <div>
      {
        user_info.loading ? '请求信息中……' :
          (
            user_info.error_msg ? user_info.error_msg :
              <div>
                <p>用户信息：</p>
                <p>用户名：{ user_info.name }</p>
                <p>介绍：{ user_info.intro }</p>
              </div>
          )
      }
      <button onClick={ getUserInfo }>获取用户信息</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { user_info, loading, error_msg } = state.userInfo;
  return{
    user_info,
    loading,
    error_msg
  }
}



export default connect(mapStateToProps, { getUserInfo })(UserInfo)
