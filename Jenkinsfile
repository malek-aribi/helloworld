pipeline {
agent any
           tools { nodejs "nodejs" }
stages {

 stage('clone') {          
         steps {

             checkout scm
             
         
         
         }
 }
  
 stage(' Build') {
           steps {
              script {

            
                sh 'npm install'
                sh 'npm install pm2 -g'
                sh 'pm2 restart index.js' 
                
                 

          }
        }
}

stage(' Test') {
           steps {
              script {
          
                /*sh 'node test.js'*/
               
               
          }
        }
}


stage(' tag Docker image') {
           steps {
              script {
                sh 'docker build -t malekaribi/helloworld:latest .' 
               
               
          }
        }
}

  stage('deploy in Docker Hub') {
          
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
