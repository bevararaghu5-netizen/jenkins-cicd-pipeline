\# Jenkins CI/CD Pipeline Project



\## Project Overview

This project demonstrates a simple CI/CD pipeline using Jenkins, Node.js, and Docker. Jenkins automatically builds, tests, creates a Docker image, and deploys the application whenever changes are detected in the GitHub repository.



\## Technologies Used

\- Jenkins

\- Git and GitHub

\- Node.js

\- Docker



\## Pipeline Stages

1\. \*\*Build:\*\* Installs dependencies and validates the application.

2\. \*\*Test:\*\* Runs automated tests using Node.js test runner.

3\. \*\*Docker Build:\*\* Creates a Docker image.

4\. \*\*Deploy:\*\* Runs the application inside a Docker container.



\## Automatic Trigger

Jenkins uses SCM polling to check the GitHub repository every minute for changes.



\## Application URL

http://localhost:3001



\## GitHub Repository

https://github.com/bevararaghu5-netizen/jenkins-cicd-pipeline



\## Result

The CI/CD pipeline successfully builds, tests, containerizes, and deploys the Node.js application using Jenkins and Docker.

