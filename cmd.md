### DOCKER
docker build 
docker compose up
### K8S operations
# start minikube
minikube start
minikube status
# Point docker local sang Minikube daemon
& minikube -p minikube docker-env --shell powershell | Invoke-Expression
# build images
docker compose build
# apply .yaml
kubectl apply -f k8s/
kubectl delete -f k8s/
# monitoring
kubectl get pods/svc/ingress/deployment
kubectl logs deployment/api
# rolling update 
kubectl scale deployment api --replicas=4
docker build -t fullstack-crud-react-net8-api:v2 ./API 
kubectl set image deployment/api api=fullstack-crud-react-net8-api:v2
kubectl rollout status deployment/api
kubectl rollout undo deployment/api
kubectl rollout history deployment/api

