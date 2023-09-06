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
                sh'npm config set prefix ~/.npm-global'
                sh'export PATH=~/.npm-global/bin:$PATH'
                 

          }
        }
}

stage(' Test') {
           steps {
              script {
                sh 'npm install pm2 -g'
                sh 'npm i pm2'
                sh 'pm2 --version'
                sh 'pm2 restart index.js' 
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
