const commentServices = require('../../services/comment-services')

const commentController = {
  postComment: (req, res, next) => {
    commentServices.postComment(req, (err, data) => {
      if (err) return next(err)
      req.flash('success_messages', 'comment was successfully created')
      req.session.createdData = data
      return res.redirect(`/restaurants/${data.comment.restaurantId}`)
    })
  },
  deleteComment: (req, res, next) => {
    commentServices.deleteComment(req, (err, data) => {
      if (err) return next(err)
      req.flash('success_messages', 'comment was successfully to delete')
      req.session.deleteData = data
      return res.redirect(`/restaurants/${data.comment.restaurantId}`)
    })
  }
}

module.exports = commentController
