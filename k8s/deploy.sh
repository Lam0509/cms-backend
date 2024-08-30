#!/bin/bash

# Định nghĩa các biến
DOCKER_USERNAME="lamtran59"
USER_IMAGE="user:latest"
AUTH_IMAGE="auth:latest"
USER_IMAGE_TAG="$DOCKER_USERNAME/$USER_IMAGE"
AUTH_IMAGE_TAG="$DOCKER_USERNAME/$AUTH_IMAGE"

# Set default platform to amd64
export DOCKER_DEFAULT_PLATFORM=linux/amd64

# Build Docker images
echo "Building Docker images..."
docker build --no-cache --platform linux/amd64 -t $USER_IMAGE_TAG ../apps/user
docker build --no-cache --platform linux/amd64 -t $AUTH_IMAGE_TAG ../apps/auth

# Push Docker images to Docker Hub
echo "Pushing Docker images to Docker Hub..."
docker push $USER_IMAGE_TAG
docker push $AUTH_IMAGE_TAG

# Update Kubernetes deployment files with new image names
echo "Updating Kubernetes deployment files..."
sed -i '' "s|image: .*user:latest|image: $USER_IMAGE_TAG|g" ./user/deployment.yaml
sed -i '' "s|image: .*auth:latest|image: $AUTH_IMAGE_TAG|g" ./auth/deployment.yaml

# Apply the Kubernetes configurations
echo "Deploying to Kubernetes..."
kubectl apply -f ./user/deployment.yaml
kubectl apply -f ./user/service.yaml
kubectl apply -f ./auth/deployment.yaml
kubectl apply -f ./auth/service.yaml

echo "Deployment completed successfully!"
