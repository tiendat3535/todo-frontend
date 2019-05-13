pipeline {
    agent any


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
