const { User } = require("./user");

const findUserByEmail = email => {
  return User.findOne({ email }).exec();
};

const findUserById = id => {
  return User.findById(id).exec();
};

const addUser = user => {
  return User.create(user);
};

const updateUser = user => {
  return {};
};

const removeUser = userId => {
  return {};
};

module.exports = {
  findUserByEmail,
  findUserById,
  addUser,
  updateUser,
  removeUser
};

// const postByTitle = title => {
//   return Post.findOne({ title }).exec();
// };

// const postsForAuthor = authorId => {
//   return Post.find({ author: authorId }).exec();
// };

// const fullPostById = id => {
//   return Post.findById(id)
//     .populate("author")
//     .exec();
// };

// const allPostsSlim = fieldsToSelect => {
//   return Post.find({})
//     .select(fieldsToSelect)
//     .exec();
// };

// const postByContentLength = (maxContentLength, minContentLength) => {
//   return Post.find({
//     contentLength: { $lt: maxContentLength, $gt: minContentLength }
//   }).exec();
// };

// const addSimilarPosts = (postId, similarPosts) => {
//   //similarPosts is an array on the post schema
//   //push each items in the similarPosts array to the property similarPosts
//   //which is also array of similarPostId
//   //  {new : true} will make sure new updated data is returned
//   // return Post.findByIdAndUpdate(
//   //   postId,
//   //   {
//   //     $push: { similarPosts: { $each: similarPosts } }
//   //   },
//   //   { new: true }
//   // ).exec();
// };
