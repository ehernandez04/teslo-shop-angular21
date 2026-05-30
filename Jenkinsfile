pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Clonando repositorio...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Instalando dependencias con pnpm...'
                sh 'pnpm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Ejecutando tests...'
                sh 'pnpm test'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                echo 'Analizando código con SonarQube...'
                sh 'pnpm run sonar'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completado'
        }
        success {
            echo '✅ Build exitoso'
        }
        failure {
            echo '❌ Build falló'
        }
    }
}
