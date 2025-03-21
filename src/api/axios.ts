import axios from 'axios'
import { apiConfig } from '@/api/config'

const client = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

const get = client.get
const post = client.post
const put = client.put
const patch = client.patch
const del = client.delete

export { get, post, put, patch, del }