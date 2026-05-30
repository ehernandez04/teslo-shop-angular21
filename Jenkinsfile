pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Clonando repositorio...'
                checkout scm
            }
        }

        stage('Install Node and pnpm') {
            steps {
                echo 'Instalando Node.js y pnpm...'
                sh '''
                    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
                    apt-get install -y nodejs
                    npm install -g pnpm
                '''
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
