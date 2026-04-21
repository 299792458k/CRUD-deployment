### DOCKER
docker build 
docker compose up
### K8S operations
# start minikube
minikube start | minikube start --driver=docker

minikube status
# start tunnel (minikube chạy trên VM linux, host window ko thể nhìn thấy dải IP này. => cần mở tunnel của minikube để localhost mở kết nối được đến service/ingress bên trong k8s của minikube)
minikube tunnel
# Point docker local sang Minikube daemon
minikube -p minikube docker-env --shell powershell | Invoke-Expression
# addons check for ingress
minikube addons list
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
# local registry (minikube), using port 5678 to avoid conflict with 5000
kubectl port-forward --namespace kube-system service/registry 5678:80
# ngrok public
ngrok http 8081 (jenkins container running on 8081)
# Jenkin admin psw
163f7b9c2b514f5faa1cd30a062c305c