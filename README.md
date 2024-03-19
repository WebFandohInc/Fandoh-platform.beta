<h1 align="center">
  <img src="public/images/webfandoh-logo.png" width="300" />
</h1>

## Requisites

## Features

### Authentication

- It should be able to authenticate using Google account;
- It should be able to authenticate using Facebook account;
- It should be able to authenticate using Twitter account;

### Posts

- It should be able to create a post;
- It should be able to create a post without publish;
- It should be able to create and publish a post;
- It should be able to continue the publish of a post if it is a draft;
- It should be able to delete a post;

### User

- Should be able to update a user (avatar, name, username, bio);
- Should be able to remove a follower;

### Follow

- Should be able to follow a user;
- Should be able to unfollow a user;
- Should be able to view a follower profile;

## Database entities

### User
📌 *users*
* 👉 [avatar](#attachment)
* 👉 [followers](#user-follower)
* 👉 [following](#user-follower)
* 👉 [accounts](#account)
* 👉 [sessions](#session)
* 👉 [posts](#post)
* 👉 [ratings](#post-ratings)

### User Follower
📌 *user_followers*
* 👉 [user](#user)
* 👉 [follower](#user)


### Account
📌 *accounts*
* 👉 [user](#user)

### Session
📌 *sessions*
* 👉 [user](#user)

### Attachment
📌 *attachments*
* 👉 [users](#user)
* 👉 [banners](#post)
* 👉 [postContentImages](#post-content-images)

### Post
📌 *posts*
* 👉 [banner](#attachment)
* 👉 [author](#user)
* 👉 [ratings](#post-rating)
* 👉 [tags](#post-tag)
* 👉 [comments](#post-comment)
* 👉 [contentImages](#post-content-images)

### Post Content Images
📌 *post_content_images*
* 👉 [post](#post)
* 👉 [image](#attachment)

### Post Rating
📌 *post_ratings*
* 👉 [rater](#user)
* 👉 [post](#post)

### Tag
📌 *tags*
* 👉 [posts](#post-tag)

### Post Tag
📌 *post_tags*
* 👉 [post](#post)
* 👉 [tag](#tag)

### Post Comment
📌 *post_comments*
* 👉 [post](#post)

You can view more detailed dabase [here](https://dbdiagram.io/d/Webfandoh-65eb864fb1f3d4062c7c1cb7) or on the embed link, bellow.

<embed src="https://dbdiagram.io/d/Webfandoh-65eb864fb1f3d4062c7c1cb7" width="100%" height="500px " />

____

<h1 align="center">🚧Work in progress🚧</h1>

