pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    stages {

        stage('Build') {
            steps {
                echo 'Building Node.js application...'
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running application tests...'
                bat 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t jenkins-cicd-demo:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                bat 'docker rm -f jenkins-cicd-app 2>NUL || exit /b 0'
                bat 'docker run -d --name jenkins-cicd-app -p 3001:3000 jenkins-cicd-demo:latest'
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'CI/CD Pipeline failed!'
        }
    }
}