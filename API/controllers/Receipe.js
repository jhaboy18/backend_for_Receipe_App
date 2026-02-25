import { Receipe } from "../Models/Receipe.js";
import { savedReceipe } from "../Models/SavedReceipe.js";

// creating receipe

export const addreceipe = async (req, res) => {
  const {
    title,
    ist,
    ing1,
    ing2,
    ing3,
    ing4,
    qty1,
    qty2,
    qty3,
    qty4,
    imageurl,
    user,
  } = req.body;

  try {
    const receipe = await Receipe.create({
      title,
      ist,
      ing1,
      ing2,
      ing3,
      ing4,
      qty1,
      qty2,
      qty3,
      qty4,
      imageurl,
      user: req.user,
    });
    res.json({ message: "Receipe Created Successfully", receipe });
  } catch (err) {
    res.json({ message: err });
  }
};

// get all Receipe

export const getallreceipe = async (req, res) => {
  const receipe = await Receipe.find();
  res.json({ receipe });
};

// get specific receipe

export const getreceipebyid = async (req, res) => {
  const id = req.params.id;

  try {
    let receipe = await Receipe.findById(id);
    if (!receipe) return res.json({ message: "Receipe not exist" });
    res.json({ receipe });
  } catch (err) {
    res.json({ message: err });
  }
};

// get receipe by userid

export const getreceipebyuserid = async (req, res) => {
  const userId = req.params.id;

  try {
    let receipe = await Receipe.find({ user: userId });
    if (!receipe) return res.json({ message: "Receipe not exist" });
    res.json({ receipe });
  } catch (err) {
    res.json({ message: err });
  }
};

// save receipe by id

export const savedreceipebyId = async (req, res) => {
  const id = req.params.id;

  let receipe = await savedReceipe.findOne({ receipe: id });

  if (receipe) return res.json({ message: "Receipe already Exist" });
  receipe = await savedReceipe.create({
    receipe: id,
  });
  res.json({ message: "Receipe saved successfully" });
};


// get saved receipe

export const getsavedreceipe=async(req,res)=>{
    const receipe=await savedReceipe.find()
    res.json({receipe})
}