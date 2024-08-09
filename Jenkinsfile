pipeline {
    @Library('github.com/releaseworks/jenkinslib') _

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

        stage('Pushing to ECR') {
            steps {
                script {
                    withCredentials() {
                        withElasticContainerRegistry {
                            // Build image in the current working directory
                            def app = docker.build("${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/app")

                            // Push to ECR
                            app.push("${env.BUILD_NUMBER}")
                        }
                    }
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
    }
}
