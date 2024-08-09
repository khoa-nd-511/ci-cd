@Library("github.com/releaseworks/jenkinslib") _

pipeline {

    agent any

    environment {
        AWS_ACCOUNT_ID = '295506574119'
        AWS_DEFAULT_REGION = 'ap-southeast-1'
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
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-credentials', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                        withElasticContainerRegistry {
                            // Build image in the current working directory
                            def app = docker.build("${REPOSITORY_URI}")

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
