import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export const getData = () => (dispatch) => {
  axios.get(`/test`, {
      headers: { 'Access-Control-Allow-Origin': '*'}
    }).then(({
    data
  }) => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
}
