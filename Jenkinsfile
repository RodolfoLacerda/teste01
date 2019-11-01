pipeline {
    agent {
        docker { 
            image "qaninja/node-wd"
            args "--network=skynet"
        }
    }
    stages {
        stage('Build') {
            steps {
                sh "npm set strict-ssl false"
                sh "npm install"
                
            }
            
        }
        stage('Tests') {
            steps {
                sh "npm run test:ci"
                junit testResults: "tests_output/**/*.xml"
            }
        }
    }
}
