
const jwt  =require('jsonwebtoken');
const {DB_ENVS} = require("/const");
//import jwt from 'jsonwebtoken'

function generateToken(resp, id, firstname) {
    const expiration=process.env.DB_ENV === DB_ENVS.TEST;
}