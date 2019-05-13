pipeline {
    agent any

    tools {
        nodejs 'node_11.14.0'
    }

    stages {
        stage('Add Libraries') {
            steps {
                echo pwd()
            }
        }
        stage('Test') {
            steps {
                echo 'Building'
            }
        }
        stage('Build') {
            steps {
                echo 'Testing'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}
