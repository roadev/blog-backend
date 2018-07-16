'use strict';

const mongoose = require('mongoose'),
tag = mongoose.model('Tags');



exports.list_all_tags = function(req, res) {
  tag.find({}, function(err, tag) {
    if (err)
      res.send(err);
    res.json(tag);
  });
};


exports.create_a_tag = function(req, res) {
  const new_tag = new tag(req.body);
  new_tag.save(function(err, tag) {
    if (err)
      res.send(err);
    res.json(tag);
  });
};

exports.read_a_tag = function(req, res) {
  tag.findById(req.params.tagId, function(err, tag) {
    if (err)
      res.send(err);
    res.json(tag);
  });
};

exports.update_a_tag = function(req, res) {
  tag.findOneAndUpdate({_id:req.params.tagId}, req.body, {new: true}, function(err, tag) {
    if (err)
      res.send(err);
    res.json(tag);
  });
};
// tag.remove({}).exec(function(){});
exports.delete_a_tag = function(req, res) {

  tag.remove({
    _id: req.params.tagId
  }, function(err, tag) {
    if (err)
      res.send(err);
    res.json({ message: 'tag successfully deleted' });
  });
};
