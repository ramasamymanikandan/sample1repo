pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                // Check out the source code from Git
                git 'https://github.com/YOUR_USERNAME/my-lightweight-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests (can be more comprehensive)
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Here you can mimic deployment
                    // For instance, just starting the app
                    echo 'Deploying Application...'
                    // This should be the actual deployment command:
                    sh 'nohup npm start &'
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment completed successfully!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
