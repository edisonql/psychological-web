import axios from 'axios'
// import forEach from 'lodash/forEach'

axios.defaults.baseURL = 'http://localhost:3000'

export const getData = () => (dispatch) => {
  axios.get(`/getData`, {
      headers: { 'Access-Control-Allow-Origin': '*'}
    }).then(({
    data
  }) => {
    // const scaleRecrods = []
    // data.forEach(item => {
    //   const answerArr = {}
    //   const keys = []
    //   item.answer.forEach(o => {
    //     if (!keys[o.sn]) {
    //       answerArr[o.sn] = []
    //     }
    //     answerArr[o.sn].push({
    //       option: o.option,
    //       category: o.category,
    //     })
    //     keys[o.sn] = o
    //   })
    //   const record = {
    //     subject: item._id.subject,
    //     answers: answerArr,
    //   }
    //   scaleRecrods.push(record)
    // })
    // console.log(scaleRecrods)
    dispatch({
      type: 'SET_SCALE_DATA',
      data: data.result,
      categoryKeys: data.categoryKeys,
    })
  }).catch(err => {
    console.log(err)
  })
}
