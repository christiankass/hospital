#!/usr/bin/env bash
set -e
IMAGE_NAME=hospital-management:latest
ZIP_OUT=hospital-management-installed.zip

echo "Building Docker image ${IMAGE_NAME}..."
docker build -t $IMAGE_NAME .

echo "Extracting ${ZIP_OUT} from Docker image..."
CONTAINER_ID=$(docker create $IMAGE_NAME)
docker cp ${CONTAINER_ID}:/hospital-management-installed.zip ./
docker rm ${CONTAINER_ID}

if [ -f "$ZIP_OUT" ]; then
  echo "Success! Created $ZIP_OUT"
else
  echo "Failed to create $ZIP_OUT"
fi
