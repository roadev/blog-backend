'use strict';

module.exports = function(app) {
	const post = require('../controllers/postController');
	const tag =  require('../controllers/tagController');

	// post Routes
	app.route('/posts')
		.get(post.list_all_posts)
		.post(post.create_a_post);

	app.route('/posts/:postId')
		.get(post.read_a_post)
		.put(post.update_a_post)
		.delete(post.delete_a_post);

	app.route('/tags')
		.get(tag.list_all_tags)
		.post(tag.create_a_tag);

	app.route('/tags/:tagId')
		.get(tag.read_a_tag)
		.put(tag.update_a_tag)
		.delete(tag.delete_a_tag);
};
