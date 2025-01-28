currentBuild.displayName = "AIMTECH-#"+currentBuild.number

pipeline {
    agent any 
    stages {
        stage ('CODE CHECKOUT'){
            steps {
                echo "Code Clone :- "
                git branch: 'main', url: 'https://github.com/ajajmujawar911/AIM_TECH.git'
            }
        }
        stage ('Build Code :-'){
            steps {
                echo 'Build Code Using Docker'
                //sh 'docker build -t aimimage:v1 .'  //Uncomment when you don't want to use "Docker-compose"
            }
        }
        stage ('Run Code'){
            steps {
                echo 'Running Code Using Docker'
                sh 'docker-compose up --build'
            }
        }
    }
}
