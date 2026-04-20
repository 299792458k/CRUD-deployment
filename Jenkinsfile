pipeline {
  agent any

  environment {
    DOCKER_REGISTRY = 'docker.io'
    API_IMAGE = 'fullstack-crud-react-net8-api'
    CLIENT_IMAGE = 'fullstack-crud-react-net8-client'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build API Image') {
      steps {
        script {
          sh 'docker build -t ${API_IMAGE}:${BUILD_NUMBER} -t ${API_IMAGE}:latest ./API'
        }
      }
    }

    stage('Build Client Image') {
      steps {
        script {
          sh 'docker build -t ${CLIENT_IMAGE}:${BUILD_NUMBER} -t ${CLIENT_IMAGE}:latest ./client'
        }
      }
    }

    stage('Push to Minikube') {
        steps {
          script {
            // Lệnh này ép Minikube nạp image từ Docker host vào trong nó
            sh 'minikube image load fullstack-crud-react-net8-api:${BUILD_NUMBER}'
            sh 'minikube image load fullstack-crud-react-net8-client:${BUILD_NUMBER}'
          }
        }
    }

    stage('Update K8s Deployments') {
      steps {
        script {
          withKubeConfig([credentialsId: 'bcf55376-bfc4-41e6-ac62-df158a17dd5d']) {
            sh '''
              kubectl set image deployment/api api=${API_IMAGE}:${BUILD_NUMBER} --insecure-skip-tls-verify
              kubectl set image deployment/client client=${CLIENT_IMAGE}:${BUILD_NUMBER} --insecure-skip-tls-verify
            '''
          }
        }
      }
    }

    stage('Verify Rollout') {
      steps {
        script {
          withKubeConfig([credentialsId: 'bcf55376-bfc4-41e6-ac62-df158a17dd5d']) {
            sh '''
              echo "Waiting for API deployment..."
              kubectl rollout status deployment/api --timeout=5m --insecure-skip-tls-verify

              echo "Waiting for Client deployment..."
              kubectl rollout status deployment/client --timeout=5m --insecure-skip-tls-verify
            '''
          }
        }
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished'
    }
    success {
      echo 'Build and deployment successful!'
    }
    failure {
      echo 'Build or deployment failed!'
    }
  }
}
