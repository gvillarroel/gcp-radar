---
title: "GitOps-style continuous delivery with Cloud Build \_|\_ Kubernetes Engine\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build
  title: "GitOps-style continuous delivery with Cloud Build \_|\_ Kubernetes Engine\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Documentation
Guides
Send feedback
GitOps-style continuous delivery with Cloud Build
Stay organized with collections
Save and categorize content based on your preferences.
Caution: Effective June 17, 2024, Cloud Source Repositories isn't available to new
customers. If your organization hasn't previously used Cloud Source Repositories,
you can't use Cloud Source Repositories to configure GitOps-style continuous
delivery. You can use this tutorial to configure CI/CD with a different source
control system, such as GitHub, Bitbucket, or Gitlab. Organizations that have
used Cloud Source Repositories prior to June 17, 2024 are not affected by this
change.
This page explains how to create a continuous integration and delivery (CI/CD)
pipeline on Google Cloud using only hosted products and the popular
GitOps methodology.
Google engineers have been storing configuration and deployment files in our
primary source code repository for a long time. This methodology is
described in the book
Site Reliability Engineering, Chapter 8 ( Beyer et. al., 2016 ),
and was demonstrated by Kelsey Hightower during his Google Cloud Next '17 keynote .
A key part of GitOps is the idea of
"environments-as-code": describing your deployments declaratively using files
(for example, Kubernetes manifests) stored in a Git repository.
In this tutorial, you create a CI/CD pipeline that automatically builds a
container image from committed code, stores the image in
Artifact Registry ,
updates a Kubernetes manifest in a Git repository, and deploys the application
to Google Kubernetes Engine (GKE) using that manifest.
This tutorial uses two Git repositories:
app repository : contains the source code of the application itself
env repository : contains the manifests for the Kubernetes Deployment
When you push a change to the app repository, the Cloud Build pipeline
runs tests, builds a container image, and pushes it to Artifact Registry.
After pushing the image, Cloud Build updates the Deployment manifest and
pushes it to the env repository. This triggers another Cloud Build
pipeline that applies the manifest to the GKE cluster and, if
successful, stores the manifest in another branch of the env repository.
We keep the app and env repositories separate because they have different
lifecycles and uses. The main users of the app repository are actual
humans and this repository is dedicated to a specific application. The main
users of the env repository are automated systems (such as Cloud Build),
and this repository might be shared by several applications. The env repository
can have several branches that each map to a specific environment (you only use
production in this tutorial) and reference a specific container image, whereas
the app repository does not.
When you finish this tutorial, you have a system where you can easily:
Distinguish between failed and successful deployments by looking at the
Cloud Build history,
Access the manifest currently used by looking at the production branch of
the env repository,
Rollback to any previous version by re-executing the corresponding
Cloud Build build.
About this tutorial
This tutorial uses Cloud Source Repositories to host Git repositories, but you can
achieve the same results with other third-party products such as GitHub,
Bitbucket, or GitLab.
This pipeline does not implement a validation mechanism before the deployment.
If you use GitHub, Bitbucket, or GitLab, you can modify the pipeline
to use a Pull Request
for this purpose.
While we recommend Spinnaker
to the teams who want to implement advanced deployment patterns (blue/green,
canary analysis, multi-cloud, etc.), its feature set might not be needed for a
successful CI/CD strategy for smaller organizations and projects. In this
tutorial, you learn how to create a CI/CD pipeline fit for applications hosted
on GKE with tooling.
For simplicity, this tutorial uses a single environment —production— in the
env repository, but you can extend it to deploy to multiple environments if
needed.
Objectives
Create Git repositories in Cloud Source Repositories.
Create a container image with Cloud Build and store it in Artifact Registry.
Create a CI pipeline.
Create a CD pipeline.
Test the CI/CD pipeline.
Costs
In this document, you use the following billable components of Google Cloud:
GKE
Cloud Source Repositories
Artifact Registry
Cloud Build
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Select or create a Google Cloud project.
Go to Manage Resources
Enable billing for your project.
Enable Billing
Open Cloud Shell to execute the commands listed in this tutorial. Cloud Shell is an interactive shell environment
for Google Cloud that lets you manage your projects and resources from your web browser.
Go to Cloud Shell
If the gcloud config get-value project command does not return the ID of
the project you selected, configure Cloud Shell to use your project.
gcloud config set project [PROJECT_ID]
In Cloud Shell, enable the required APIs.
gcloud services enable container.googleapis.com \
cloudbuild.googleapis.com \
sourcerepo.googleapis.com \
artifactregistry.googleapis.com
Create an Artifact Registry Docker repository named my-repository in the
us-central1 region to store your container images.
gcloud artifacts repositories create my-repository \
--repository-format = docker \
--location = us-central1
In Cloud Shell, create a GKE cluster that you
will use to deploy the sample application of this tutorial.
Autopilot
Create an Autopilot cluster named hello-cloudbuild :
gcloud container clusters create-auto hello-cloudbuild \
--location us-central1
Standard
Create a one-node Standard cluster named hello-cloudbuild :
gcloud container clusters create hello-cloudbuild \
--num-nodes 1 --location us-central1
If you have never used Git in Cloud Shell, configure it with
your name and email address. Git will use those to identify you as the
author of the commits you will create in Cloud Shell.
git config --global user.email " YOUR_EMAIL_ADDRESS "
git config --global user.name " YOUR_NAME "
When you finish this tutorial, you can avoid continued billing by deleting the
resources you created. See
Cleaning up
for more detail.
Creating the Git repositories in Cloud Source Repositories
In this section, you create the two Git repositories ( app and env ) used in
this tutorial, and initialize the app one with some sample code.
In Cloud Shell, create the two Git repositories.
gcloud source repos create hello-cloudbuild-app
gcloud source repos create hello-cloudbuild-env
Clone the sample code from GitHub.
cd ~
git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples
cd ~/kubernetes-engine-samples/management/gitops-style-delivery/
Configure Cloud Source Repositories as a remote.
PROJECT_ID=$(gcloud config get-value project)
git remote add google \
"https://source.developers.google.com/p/${PROJECT_ID}/r/hello-cloudbuild-app"
The code you cloned contains a "Hello World" application.
from flask import Flask
app = Flask ( 'hello-cloudbuild' )
@app . route ( '/' )
def hello ():
return "Hello World! \n "
if __name__ == '__main__' :
app . run ( host = '0.0.0.0' , port = 8080 )
Creating a container image with Cloud Build
The code you cloned contains the following Dockerfile.
FROM python:3.13-slim
RUN pip install flask
WORKDIR /app
COPY app.py /app/app.py
ENTRYPOINT [ "python" ]
CMD [ "/app/app.py" ]
With this Dockerfile, you can create a container image with Cloud Build
and store it in Artifact Registry.
In Cloud Shell, create a Cloud Build build based on the
latest commit with the following command.
cd ~/kubernetes-engine-samples/management/gitops-style-delivery/
COMMIT_ID="$(git rev-parse --short=7 HEAD)"
gcloud builds submit --tag="us-central1-docker.pkg.dev/${PROJECT_ID}/my-repository/hello-cloudbuild:${COMMIT_ID}" .
Cloud Build streams the logs generated by the creation of the
container image to your terminal when you execute this command.
After the build finishes, verify that your new container image is
available in Artifact Registry.
Go to Artifact Registry
Creating the continuous integration pipeline
In this section, you configure Cloud Build to automatically run a small
unit test, build the container image, and then push it to
Artifact Registry. Pushing a new commit to Cloud Source Repositories
automatically triggers this pipeline. The cloudbuild.yaml file
included in the code is the pipeline's configuration.
steps :
# This step runs the unit tests on the app
- name : 'python:3.13-slim'
id : Test
entrypoint : /bin/sh
args :
- -c
- 'pip install flask && python test_app.py -v'
# This step builds the container image.
- name : 'gcr.io/cloud-builders/docker'
id : Build
args :
- 'build'
- '-t'
- 'us-central1-docker.pkg.dev/$PROJECT_ID/my-repository/hello-cloudbuild:$SHORT_SHA'
- '.'
# This step pushes the image to Artifact Registry
# The PROJECT_ID and SHORT_SHA variables are automatically
# replaced by Cloud Build.
- name : 'gcr.io/cloud-builders/docker'
id : Push
args :
- 'push'
- 'us-central1-docker.pkg.dev/$PROJECT_ID/my-repository/hello-cloudbuild:$SHORT_SHA'
Open the Cloud Build Triggers page.
Go to Triggers
Click Create trigger .
Fill out the following options:
In the Name field, type hello-cloudbuild .
Under Event , select Push to a branch .
Under Source , select hello-cloudbuild-app as your Repository
and ^master$ as your Branch .
Under Build configuration , select Cloud Build
configuration file .
In the Cloud Build configuration file location field,
type cloudbuild.yaml after the / .
Click Create to save your build trigger.
Tip : If you need to create Build Triggers for many projects, you can use
the Build Triggers API .
In Cloud Shell, push the application code to
Cloud Source Repositories to trigger the CI pipeline in Cloud Build.
cd ~/kubernetes-engine-samples/management/gitops-style-delivery/
git push google master
Open the Cloud Build console.
Go to Cloud Build
Your recently run and finished builds appear. You can click on a build to follow its execution and examine its logs.
Creating the continuous delivery pipeline
Cloud Build is also used for the continuous delivery pipeline. The
pipeline runs each time a commit is pushed to the candidate branch of the
hello-cloudbuild-env repository. The pipeline applies the new version of the
manifest to the Kubernetes cluster and, if successful, copies the manifest over
to the production branch. This process has the following properties:
The candidate branch is a history of the deployment attempts.
The production branch is a history of the successful deployments.
You have a view of successful and failed deployments in Cloud Build.
You can rollback to any previous deployment by re-executing the
corresponding build in Cloud Build. A rollback also updates the
production branch to truthfully reflect the history of deployments.
You will modify the continuous integration pipeline to update the candidate
branch of the hello-cloudbuild-env repository, triggering the continuous
delivery pipeline.
Note: You can extend the system described in this tutorial to manage several
environments. The easiest way to achieve this is to have a pair of branches
for each environment env : a candidate-env branch and an env branch.
Granting Cloud Build access to GKE
To deploy the application in your Kubernetes cluster, Cloud Build needs
the Kubernetes Engine Developer Identity and Access Management Role .
Shell
In Cloud Shell, execute the following command:
PROJECT_NUMBER="$(gcloud projects describe ${PROJECT_ID} --format='get(projectNumber)')"
gcloud projects add-iam-policy-binding ${PROJECT_NUMBER} \
--member=serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com \
--role=roles/container.developer
Console
In the Google Cloud console, go to the
settings GKE Permissions page:
Go to Permissions
Set the status of the Kubernetes Engine Developer role to Enable .
Initializing the hello-cloudbuild-env repository
You need to initialize the hello-cloudbuild-env repository with two branches
( production and candidate ) and a Cloud Build configuration file
describing the deployment process.
In Cloud Shell, clone the hello-cloudbuild-env repository and
create the production branch.
cd ~
gcloud source repos clone hello-cloudbuild-env
cd ~/kubernetes-engine-samples/management/gitops-style-delivery/
git checkout -b production
Copy the cloudbuild-delivery.yaml file available in the
hello-cloudbuild-app repository and commit the change.
cd ~/kubernetes-engine-samples/management/gitops-style-delivery/
cp ~/hello-cloudbuild-app/cloudbuild-delivery.yaml ~/kubernetes-engine-samples/management/gitops-style-delivery/cloudbuild.yaml
git add .
git commit -m "Create cloudbuild.yaml for deployment"
The cloudbuild-delivery.yaml file describes the deployment process to be
run in Cloud Build. It has two steps:
Cloud Build applies the manifest on the GKE
cluster.
If successful, Cloud Build copies the manifest on the production
branch.
steps :
# This step deploys the new version of our container image
# in the hello-cloudbuild Kubernetes Engine cluster.
- name : 'gcr.io/cloud-builders/kubectl'
id : Deploy
args :
- 'apply'
- '-f'
- 'kubernetes.yaml'
env :
- 'CLOUDSDK_COMPUTE_REGION=us-central1'
- 'CLOUDSDK_CONTAINER_CLUSTER=hello-cloudbuild'
# This step copies the applied manifest to the production branch
# The COMMIT_SHA variable is automatically
# replaced by Cloud Build.
- name : 'gcr.io/cloud-builders/git'
id : Copy to production branch
entrypoint : /bin/sh
args :
- '-c'
- |
set -x && \
# Configure Git to create commits with Cloud Build's service account
git config user.email $(gcloud auth list --filter=status:ACTIVE --format='value(account)') && \
# Switch to the production branch and copy the kubernetes.yaml file from the candidate branch
git fetch origin production && git checkout production && \
git checkout $COMMIT_SHA kubernetes.yaml && \
# Commit the kubernetes.yaml file with a descriptive commit message
git commit -m "Manifest from commit $COMMIT_SHA
$(git log --format=%B -n 1 $COMMIT_SHA)" && \
# Push the changes back to Cloud Source Repository
git push origin production
Create a candidate branch and push both branches for them to be available
in Cloud Source Repositories.
git checkout -b candidate
git push origin production
git push origin candidate
Grant the Source Repository Writer IAM role to the Cloud Build service
account for the hello-cloudbuild-env repository.
PROJECT_NUMBER="$(gcloud projects describe ${PROJECT_ID} \
--format='get(projectNumber)')"
cat >/tmp/hello-cloudbuild-env-policy.yaml <<EOF
bindings :
- members :
- serviceAccount:${PROJECT_NUMBER}@cloudbuild. gserviceaccount.com
role : roles/source.writer
EOF
gcloud source repos set-iam-policy \
hello-cloudbuild-env /tmp/hello-cloudbuild-env-policy.yaml
Creating the trigger for the continuous delivery pipeline
In this section, you configure Cloud Build to be triggered by a push to
the candidate branch of the hello-cloudbuild-env repository.
Open the Triggers page of Cloud Build.
Go to Triggers
Click Create trigger .
Fill out the following options:
In the Name field, type hello-cloudbuild-deploy .
Under Event , select Push to a branch .
Under Source , select hello-cloudbuild-env as your Repository
and ^candidate$ as your Branch .
Under Configuration , select Cloud Build
configuration file (yaml or json) .
In the Cloud Build configuration file location field,
type cloudbuild.yaml after the / .
Click Create .
Modifying the continuous integration pipeline to trigger the continuous delivery pipeline
In this section, you add some steps to the continuous integration pipeline that
generates a new version of the Kubernetes manifest and push it to the
hello-cloudbuild-env repository to trigger the continuous delivery pipeline.
Replace the cloudbuild.yaml file with the extended example in
the cloudbuild-trigger-cd.yaml file.
cd ~/kubernetes-engine-samples/management/gitops-style-delivery/
cp cloudbuild-trigger-cd.yaml cloudbuild.yaml
The cloudbuild-trigger-cd.yaml is an extended version of the
cloudbuild.yaml file. It adds steps to generate the new
Kubernetes manifest and trigger the continuous delivery pipeline.
Note: This pipeline uses a sed to render the
manifest template. In reality, you might benefit from using a dedicated
tool such as kustomize
or skaffold .
These tools give you more control over the rendering of the manifest templates.
# This step clones the hello-cloudbuild-env repository
- name : 'gcr.io/cloud-builders/gcloud'
id : Clone env repository
entrypoint : /bin/sh
args :
- '-c'
- |
gcloud source repos clone hello-cloudbuild-env && \
cd hello-cloudbuild-env && \
git checkout candidate && \
git config user.email $(gcloud auth list --filter=status:ACTIVE --format='value(account)')
# This step generates the new manifest
- name : 'gcr.io/cloud-builders/gcloud'
id : Generate manifest
entrypoint : /bin/sh
args :
- '-c'
- |
sed "s/GOOGLE_CLOUD_PROJECT/${PROJECT_ID}/g" kubernetes.yaml.tpl | \
sed "s/COMMIT_SHA/${SHORT_SHA}/g" > hello-cloudbuild-env/kubernetes.yaml
# This step pushes the manifest back to hello-cloudbuild-env
- name : 'gcr.io/cloud-builders/gcloud'
id : Push manifest
entrypoint : /bin/sh
args :
- '-c'
- |
set -x && \
cd hello-cloudbuild-env && \
git add kubernetes.yaml && \
git commit -m "Deploying image us-central1-docker.pkg.dev/$PROJECT_ID/my-repository/hello-cloudbuild:${SHORT_SHA}
Built from commit ${COMMIT_SHA} of repository hello-cloudbuild-app
Author: $(git log --format='%an <%ae>' -n 1 HEAD)" && \
git push origin candidate
Commit the modifications and push them to Cloud Source Repositories.
cd ~/kubernetes-engine-samples/management/gitops-style-delivery/
git add cloudbuild.yaml
git commit -m "Trigger CD pipeline"
git push google master
This triggers the continuous integration pipeline in Cloud Build.
Examine the continuous integration build.
Go to Cloud Build
Your recently run and finished builds for the hello-cloudbuild-app
repository appear. You can click on a build to follow its
execution and examine its logs.
The last step of this pipeline pushes the new manifest to the
hello-cloudbuild-env repository, which triggers the continuous delivery
pipeline.
Examine the continuous delivery build.
Go to Cloud Build
Your recently run and finished builds for the hello-cloudbuild-env
repository appear. You can click on a build to follow its
execution and examine its logs.
Testing the complete pipeline
The complete CI/CD pipeline is now configured. In this section, you test it from
end to end.
Go to the GKE Services page.
Go to Google Kubernetes Engine Services
The list contains a single service called hello-cloudbuild created by
the recently completed continuous delivery build.
Click on the endpoint for the hello-cloudbuild service.
"Hello World!" appears.
If there is no endpoint, or if you see a load balancer error, you might have
to wait a few minutes for the load balancer to be completely initialized.
Click Refresh to update the page if needed.
In Cloud Shell, replace "Hello World" by "Hello Cloud Build",
both in the application and in the unit test.
cd ~/kubernetes-engine-samples/management/gitops-style-delivery/
sed -i 's/Hello World/Hello Cloud Build/g' app.py
sed -i 's/Hello World/Hello Cloud Build/g' test_app.py
Commit and push the change to Cloud Source Repositories.
git add app.py test_app.py
git commit -m "Hello Cloud Build"
git push google master
This triggers the full CI/CD pipeline.
After a few minutes, reload the application in your browser.
"Hello Cloud Build!" appears.
Testing the rollback
In this section, you rollback to the version of the application that said
"Hello World!".
Open the Cloud Build console for the hello-cloudbuild-env
repository.
Go to Cloud Build
Click on the second most recent build available.
Click Rebuild .
When the build is finished, reload the application in your browser.
"Hello World!" appears again.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Deleting the resources
If you want to keep the Google Cloud project you used in this tutorial,
delete the individual resources:
Delete the local Git repositories.
cd ~
rm -rf ~/hello-cloudbuild-app
rm -rf ~/hello-cloudbuild-env
Delete the Git repositories in Cloud Source Repositories.
gcloud source repos delete hello-cloudbuild-app --quiet
gcloud source repos delete hello-cloudbuild-env --quiet
Delete the Cloud Build Triggers.
Open the Triggers page of Cloud Build.
Go to Triggers
For each trigger, click More more_vert ,
then Delete .
Delete the Docker repository in Artifact Registry.
gcloud artifacts repositories delete my-repository \
--location=us-central1
Remove the permission granted to Cloud Build to connect to
GKE.
PROJECT_NUMBER="$(gcloud projects describe ${PROJECT_ID} \
--format='get(projectNumber)')"
gcloud projects remove-iam-policy-binding ${PROJECT_NUMBER} \
--member=serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com \
--role=roles/container.developer
Delete the GKE cluster.
gcloud container clusters delete hello-cloudbuild \
--location us-central1
What's next
Take a look at more advanced Cloud Build features:
Configuring the order of build steps ,
Building, Testing, and Deploying Artifacts ,
Creating Custom Build Steps
Learn how to mirror a GitHub or Bitbucket repository to Cloud Source Repositories
Connect Cloud Build directly to your GitHub repository
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
