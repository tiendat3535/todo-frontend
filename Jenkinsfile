pipeline {
    agent any

    stages {
        stage('Add Libraries') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Test Todo-Frontend') {
            steps {
                echo 'Running Test'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn ng build'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh '''
                    cd dist/todo-frontend
                    aws s3 rm s3://phamtiendat-todo --recursive 
                    aws s3 cp ./ s3://phamtiendat-todo --recursive
                    '''
                }
            }
        }
    }

    post {
        failure {
            echo "Deployment Failure!"
        }
        success {
            echo "${DEPLOY_ENV} - Deployment Successful."
        }
    }
}
