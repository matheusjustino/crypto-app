pipeline {
	agent {
		docker {
			image 'node:14.17.5-alpine3.14'
			args '-p 3000:3000'
		}
	}
	stages {
		stage('Build') {
			steps {
				sh 'yarn install --frozen-lockfile'
			}
		}
	}
}
