pipeline {

    agent any

    stages {

        stage("install") {
            
            steps {
                echo "Installing packages..."
                sh 'yarn'
            }
        }

        stage("test") {
            
            steps {
                echo "Executing tests..."
                sh 'yarn test'
                echo "Tests executed successfully ⚙️︎"
            }
        }

        stage("build") {
            
            steps {
                echo "Building app..."
                sh 'yarn build'
                echo "App is built successfully 💪"
            }
        }

        stage("deploy") {
            
            steps {
                echo "Deploying..."
                echo "App is deployed successfully 🚀"
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
        always {
            echo 'Cleaning up...'
            // Add any cleanup tasks here if needed
        }
    }
}