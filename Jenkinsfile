pipeline {
    agent any

    environment {
        AWS_ACCOUNT_ID = '295506574119'
        AWS_DEFAULT_REGION = 'ap-southeast-1'
        IMAGE_REPO_NAME = 'ci-cd'
        IMAGE_TAG = 'latest'
        REPOSITORY_URI = '295506574119.dkr.ecr.ap-southeast-1.amazonaws.com/ci-cd'
    }

    stages {
        stage('Install') {
            steps {
                nodejs('NodeJS-18.20.1') {
                    sh 'yarn'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Executing tests...'

                nodejs('NodeJS-18.20.1') {
                    sh 'yarn test'
                }
            }
        }

        stage('Build') {
            steps {
                nodejs('NodeJS-18.20.1') {
                    sh 'yarn build'
                }
            }
        }

        stage('Logging into AWS ECR') {
            steps {
                script {
                    sh """aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com"""
                }
            }
        }

        stage('Building image') {
            steps {
                script {
                    dockerImage = docker.build "${IMAGE_REPO_NAME}:${IMAGE_TAG}"
                }
            }
        }

        stage('Pushing to ECR') {
            steps {
                script {
                    sh """docker tag ${IMAGE_REPO_NAME}:${IMAGE_TAG} ${REPOSITORY_URI}:$IMAGE_TAG"""
                    sh """docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}:${IMAGE_TAG}"""
                }
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
    // always {
    //     echo 'Cleaning up...'
    //     // Add any cleanup tasks here if needed
    // }
    }
}
