use('personl-site')

db['blog-posts'].insertOne(
  { "_id" : 0, "title": "Test", "body": "This is the body"}
);

