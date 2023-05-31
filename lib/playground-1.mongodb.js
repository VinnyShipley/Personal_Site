use('personl-site')

db['blog-posts'].insertOne(
  {"title": "test_post", "body": "This is with no preset id"}
);

