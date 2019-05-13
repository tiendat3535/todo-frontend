pipeline {
    agent any

    tools {nodejs "node_10.15.3"}

    stages {
        stage('Add Libraries') {
            steps {
                echo 'Add Libraries'
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
