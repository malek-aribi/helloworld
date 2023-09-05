pipeline {
agent any

stages {

stage('Checkout SCM') {          
         steps {
             checkout scm
             


         }
}


stage('Docker Build and Tag') {
           steps {
              script {
                sh 'docker build -t malekaribi/helloworld:latest .' 
               
               
          }
        }
}
  stage('Publish image to Docker Hub') {
          
          steps {
              script {
  withCredentials([string(credentialsId: 'dockerhub-pwd', variable: 'dockerhubpwd')]) 
  {
                   sh 'docker login -u malekaribi -p ${dockerhubpwd}'
                             sh  'docker push malekaribi/helloworld:latest'
  }
                  
          }
        }
  }