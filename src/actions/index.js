import axios from 'axios'
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
