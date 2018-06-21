import axios from 'axios'
// import qs from 'qs'
// import forEach from 'lodash/forEach'

axios.defaults.baseURL = 'http://localhost:3000'

export const getData = () => (dispatch) => {
  axios.get(`/getData`, {
      headers: { 'Access-Control-Allow-Origin': '*'}
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
  // const data = new URLSearchParams()
  // data.append('result', 'test1111')
  axios.get(`/saveResult`, {
      params: result,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(({
    data
  }) => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
}
