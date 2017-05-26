#! /bin/bash

echo "Run with following values:"
echo "MONGODB_URI: $MONGODB_URI"
echo "MASTER_KEY: $MASTER_KEY"
echo "APP_ID: $APP_ID"

docker run \
  --name davegee-words \
  -p 8080:1337 \
  -d davegee/words