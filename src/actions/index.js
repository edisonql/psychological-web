import axios from 'axios'
import qs from 'qs'
// import forEach from 'lodash/forEach'

axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const getData = () => (dispatch) => {
  axios.get(`/getData`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'x-requested-with,content-type',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(({
    data
  }) => {
    dispatch({
      type: 'SET_SCALE_DATA',
      data: data.result,
      categoryKeys: data.categoryKeys,
    })
  }).catch(err => {
    console.log(err)
  })
}

export const setPersonalInfo = (info) => (dispatch) => {
  dispatch({
    type: 'SET_PERSONAL_INFO',
    nickname: info.nickname,
    age: info.age,
    occupation: info.occupation,
    mobile: info.mobile,
  })
}

export const saveResult = (result) => () => {
  // const params = new URLSearchParams()
  // params.append('result', result)
  axios.post(`/saveResult`, {
      data: qs.stringify(result),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then(({
    data
  }) => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
}
