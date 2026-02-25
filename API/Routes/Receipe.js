import express from 'express'
import { addreceipe, getallreceipe, getreceipebyid, getreceipebyuserid, getsavedreceipe, savedreceipebyId } from '../controllers/Receipe.js';
import { Authenticate } from '../Middleware/Auth.js';
const router=express.Router();

// adding // craeting receipe

router.post('/add',Authenticate,addreceipe)

// get all receipe

router.get('/',getallreceipe)

// get receipe by id

router.get('/:id',getreceipebyid)

// get recceipe by user id

router.get('/user/:id',getreceipebyuserid)

//save receipe by id
router.post('/:id',Authenticate,savedreceipebyId)

// get all saved receipe
router.get('/saved',getsavedreceipe)

export default router