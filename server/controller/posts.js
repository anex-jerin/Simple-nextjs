import Places from '../models/place.js';
export const getPosts = async (req, res) => {
  try {
    const post = await Places.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = req.body;
    const post = await Places.create(newPost);
    res.status(201).json(post);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

export const getPost = async (req,res) => {
  try {
    const id = req.params.id
    const post = await Places.findById(id)
    res.status(201).json(post)
  } catch (error) {
    
  }
}
