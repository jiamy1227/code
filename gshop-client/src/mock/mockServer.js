import Mock from 'mockjs'
import apiData from './data.json'
Mock.mock('/shop_info', {code:0, data:apiData.info})
Mock.mock('/shop_goods', {code:0, data:apiData.goods})
Mock.mock('/shop_ratings', {code:0, data:apiData.ratings})
