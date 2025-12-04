pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Node.js') {
            steps {
                sh '''
                    if ! command -v node &> /dev/null; then
                        echo "Installing Node.js..."
                        curl -fsSL https://deb.nodesource.com/setup_18.x | bash - || curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash || (wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash)
                        export NVM_DIR="$HOME/.nvm"
                        if [ -s "$NVM_DIR/nvm.sh" ]; then
                            . "$NVM_DIR/nvm.sh"
                            nvm install 18 || echo "Node.js installation failed, trying system node..."
                        fi
                    fi
                    node --version || echo "Node.js not found"
                    npm --version || echo "npm not found"
                '''
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci || npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive dist') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }
}


