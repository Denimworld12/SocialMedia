const { default: axios } = require("axios");



const clientserver = axios.create({
    baseURL:"http//:localhost:90"
})