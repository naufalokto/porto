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
                        echo "Downloading Node.js..."
                        NODE_VERSION="20.11.0"
                        NODE_DIST="node-v${NODE_VERSION}-linux-x64"
                        cd /tmp
                        curl -fsSL "https://nodejs.org/dist/v${NODE_VERSION}/${NODE_DIST}.tar.gz" -o node.tar.gz || \
                        wget -q "https://nodejs.org/dist/v${NODE_VERSION}/${NODE_DIST}.tar.gz" -O node.tar.gz
                        tar -xzf node.tar.gz
                        export PATH="/tmp/${NODE_DIST}/bin:$PATH"
                        echo "Node.js installed to /tmp/${NODE_DIST}"
                    fi
                    export PATH="/tmp/${NODE_DIST}/bin:$PATH"
                    node --version
                    npm --version
                '''
            }
        }

        stage('Install dependencies') {
            steps {
                sh '''
                    export PATH="/tmp/node-v20.11.0-linux-x64/bin:$PATH"
                    npm ci || npm install
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                    export PATH="/tmp/node-v20.11.0-linux-x64/bin:$PATH"
                    npm run build
                '''
            }
        }

        stage('Archive dist') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }
}


