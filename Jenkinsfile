pipeline {
agent any

stages {

 stage('Checkout SCM') {          
         steps {
             checkout scm
             


         }
 }
  
 stage(' Build') {
           steps {
              script {

                sh 'npm install' 
               
               
          }
        }
}

stage(' Test') {
           steps {
              script {

                sh 'node test.js' 
               
               
          }
        }
}


stage(' tag ') {
           steps {
              script {
                sh 'docker build -t malekaribi/helloworld:latest .' 
               
               
          }
        }
}

  stage('deploy') {
          
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
}
}
