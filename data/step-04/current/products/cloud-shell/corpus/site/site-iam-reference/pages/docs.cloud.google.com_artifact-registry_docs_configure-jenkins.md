---
title: "Integrating with Jenkins \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins
  title: "Integrating with Jenkins \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Integrating with Jenkins
Stay organized with collections
Save and categorize content based on your preferences.
This page guides you through configuring Jenkins to store built Maven
packages in an Artifact Registry repository.
Before you begin
If the target repository does not exist,
create a new repository .
Configuring access to your repository
Create a dedicated service account for Jenkins to use with Artifact Registry.
Run the following command to create a service account named jenkins-sa :
gcloud iam service-accounts create jenkins-sa
This creates a service account named
jenkins-sa@ PROJECT .iam.gserviceaccount.com, where
PROJECT is your project ID.
In the project that contains the repository, grant the Artifact Registry Writer role to the Jenkins service account that you created.
You can either grant the role for all repositories in the project or you can
grant the role for the specific repositories that service account needs to
access.
For details on permissions and granting access by role, see
Configuring access control .
Setting up a GKE cluster
When you set up a new Google Kubernetes Engine cluster or node pool, use the service account
that you created for Jenkins to use.
Console
To create a cluster using Google Cloud console, perform the following
steps:
Visit the Artifact Registry menu in Google Cloud console.
Visit the Artifact Registry menu
Click Create cluster .
Configure the cluster as desired. Don't click Create yet.
Click More options in the default node pool.
In the Security section, select the Jenkins service account
that you created.
Note: If you want to use the default Compute Engine service account
instead, select Set access for each API in the Access scopes
section. In the Cloud Platform Read Write drop-down list, select
Enabled .
Click Save to exit the overlay.
Click Create .
gcloud
Use one of the following commands to create the cluster with the Jenkins
service account. In the commands, PROJECT is your project ID.
To create a cluster with the service account, run the command.
gcloud container clusters create example-cluster --service-account=jenkins-sa@ PROJECT .iam.gserviceaccount.com
To create a node pool in an existing cluster:
gcloud container node-pools create example-pool --service-account=jenkins-sa@ PROJECT .iam.gserviceaccount.com
See the gcloud container clusters create
documentation for details about the command.
Note: If you want to use the default Compute Engine service account
instead, omit the --service-account option and add
--scopes cloud-platform to apply the Cloud Platform access scope.
Setting up Jenkins on GKE
Follow the tutorial for setting up Jenkins on GKE .
Use the cluster that you created in the previous section.
In Jenkins, update the GKE plugin to the latest version.
Click Manage Jenkins > Manage Plugins > Updates .
Set up a Maven project
Fork the sample Maven project
in the Jenkins documentation GitHub repository.
Clone the forked repository.
git clone git@github.com: USER_NAME /simple-java-maven-app.git
Set up a new pipeline in the Jenkins interface.
Click New Item .
Select Pipeline .
Set a name for the pipeline and click OK .
On the General tab, configure the following options in the Pipeline
section:
Select Pipeline script from SCM .
In the SCM drop-down list, select Git and then specify the URL
and credentials to connect to your GitHub repository.
Click Save .
Configuring the connection to the repository
Configure Jenkins with the repository and credentials to connect to the repository.
Add your repository to the Maven pom.xml . Use the following command to
print a snippet to add.
gcloud artifacts print-settings mvn [ --project = PROJECT ] \
[ --repository = REPOSITORY ] [ --location = LOCATION ]
Where
PROJECT is the project ID. If this flag is omitted, the current
or default project is used.
REPOSITORY is the ID of the repository. If you configured a
default Artifact Registry
repository, it is used when this flag is omitted from the command.
LOCATION is the regional or multi-regional
location for the repository.
Create a YAML file as the pod template for Jenkins agents.
mkdir jenkins
cat > jenkins/maven-pod.yaml << EOF
apiVersion: v1
kind: Pod
spec:
containers:
- name: maven
image: maven:3.3.9-jdk-8-alpine
command: [ 'cat' ]
tty: true
EOF
Modify the file Jenkinsfile .
pipeli ne {
age nt n o ne
s ta ges {
s ta ge('Deploy') {
s te ps {
age nt {
kuber netes {
label 'mave n pod'
yamlFile 'je n ki ns /mave n - pod.yaml'
}
}
co nta i ner ('mave n ') {
sh "mvn -B clean deploy"
}
}
}
}
}
Starting a build
Push the changes you made to GitHub project.
git add . && git commit -m "Configure my Jenkins pipeline" && git push
In the Jenkins interface, start a new build for the application in your
sample Maven project.
When the build completes successfully, the artifacts are added to the
Artifact Registry Java package repository that you created.
Run the following command to list packages in the repository:
gcloud artifacts packages list --repository = mvn-jenkins --location = LOCATION
The output looks similar to the following example:
Listing items under project {YOUR_PROJECT}, repository mvn-jenkins.
PACKAGE CREATE_TIME UPDATE_TIME
com.mycompany.app:my-app 2019-06-25T17:09:44 2019-06-25T17:09:44
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
