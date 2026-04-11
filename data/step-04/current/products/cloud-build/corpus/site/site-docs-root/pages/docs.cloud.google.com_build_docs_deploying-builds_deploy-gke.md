---
title: "Deploying to GKE \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/deploying-builds/deploy-gke
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs
source_metadata:
  url: https://docs.cloud.google.com/build/docs/deploying-builds/deploy-gke
  title: "Deploying to GKE \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Guides
Send feedback
Deploying to GKE
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to deploy an application to Kubernetes using
Cloud Build.
Cloud Build provides a gke-deploy builder
that lets you deploy a containerized application to a
GKE cluster.
gke-deploy is a wrapper around kubectl , the command-line interface for
Kubernetes. It applies Google's recommended practices for deploying applications
to Kubernetes by:
Updating the application's Kubernetes resource file to use the container
image's digest instead of a tag.
Adding recommended labels to the Kubernetes resource file.
Retrieving credentials for the GKE clusters
to which you're deploying the image.
Waiting for the Kubernetes resource file that was submitted to be ready.
If you want to deploy your applications using kubectl directly and don't need
additional functionality, Cloud Build also provides a kubectl builder that you can use to deploy your application to a
GKE cluster.
Before you begin
Create a GKE cluster , if you don't have one yet.
Have your containerized application in the form of source code and a
Dockerfile ready. Your source code needs to be stored in a repository, such as
Cloud Source Repositories, GitHub, or Bitbucket.
You'll need at least one Kubernetes resource file describing the Kubernetes
resources used to run your application. If you don't have Kubernetes
resource files, use the following steps to generate one for your
application:
Open the Kubernetes Engine clusters page in the Google Cloud console.
On the Kubernetes Engine clusters page, click Deploy .
Select your container and click Continue . You will see the Configuration
section.
Under Configuration YAML, click View YAML to get a sample Kubernetes
resource file.
Note: If you already have another form of templated Kubernetes resource file
such as a Helm chart or a resource in Kustomize format, see the helm builder
or kustomize builder for examples of build configurations you can
use for deployment.
Caution: Effective June 17, 2024, Cloud Source Repositories isn't available
to new customers. If your organization hasn't
previously used Cloud Source Repositories, you can't enable the API or use
Cloud Source Repositories. New projects not connected to an organization can't enable the
Cloud Source Repositories API. Organizations that have used Cloud Source Repositories prior to
June 17, 2024 are not affected by this change.
Required IAM permissions
Add the Google Kubernetes Engine Developer role to your account:
In the Google Cloud console, go to the
settings Cloud Build Permissions page:
Go to Permissions
Set the status of the Kubernetes Engine Developer role to Enabled .
Deploying a prebuilt container image
To deploy a particular version of your application with gke-deploy :
Make sure your Kubernetes resource file is referring to the
correct container image tag or digest.
Add the gke-deploy step in your build configuration file :
YAML
steps :
...
# deploy container image to GKE
- name : "gcr.io/cloud-builders/gke-deploy"
args :
- run
- --filename= KUBERNETES_RESOURCE_FILE
- --location= CLUSTER_LOCATION
- --cluster= CLUSTER
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/gke-deploy" ,
"args" : [
"run" ,
"--filename= KUBERNETES_RESOURCE_FILE " ,
"--location= CLUSTER_LOCATION " ,
"--cluster= CLUSTER "
]
}
]
}
Where:
KUBERNETES_RESOURCE_FILE is the path of your Kubernetes resource
file or the directory path containing your Kubernetes resource files.
CLUSTER_LOCATION is the region of the cluster.
CLUSTER is the name of the GKE cluster that the application
will be deployed to.
For more information on available flags, see gke-deploy run flags .
Note: When deploying to multiple GKE clusters,
Cloud Build persists the home directory across build steps,
which means that the kubectl context of the previous step to be used by
subsequent steps by default. To avoid this, add an environment variable
declaration, KUBECONFIG=/tmp/kubeconfig , to each step of your build
config file.
Start your build:
gcloud builds submit -- region = LOCATION -- project = PROJECT -- config BUILD_CONFIG
Where:
LOCATION is one of the supported build locations .
PROJECT is the ID for your project.
BUILD_CONFIG is the name of your build configuration file.
Building and deploying a new container image
To build a new container image and deploy the new container image:
Update your Kubernetes resource file with the new container
image using the --image attribute:
YAML
steps :
# build the container image
- name : "gcr.io/cloud-builders/docker"
args : [ "build" , "-t" , " LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE_NAME : TAG " , "." ]
# push container image
- name : "gcr.io/cloud-builders/docker"
args : [ "push" , " LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE_NAME : TAG " ]
# deploy container image to GKE
- name : "gcr.io/cloud-builders/gke-deploy"
args :
- run
- --filename= KUBERNETES_RESOURCE_FILE
- --image= LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE_NAME : TAG
- --location= CLUSTER_LOCATION
- --cluster= CLUSTER
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"build" ,
"-t" ,
" LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE_NAME : TAG " ,
"."
]
},
{
"name" : "gcr.io/cloud-builders/docker" ,
"args" : [
"push" ,
" LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE_NAME : TAG "
]
},
{
"name" : "gcr.io/cloud-builders/gke-deploy" ,
"args" : [
"run" ,
"--filename= KUBERNETES_RESOURCE_FILE " ,
"--image= LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE_NAME : TAG " ,
"--location= CLUSTER_LOCATION " ,
"--cluster= CLUSTER "
]
}
]
}
Where:
LOCATION is one of the supported build locations .
PROJECT is the ID for your project.
IMAGE_NAME is the name that you want for the container
image, usually the application name.
TAG is the tag of the container image.
If you are building a new container image with each commit, a good practice
is to use the commit short SHA as a tag. Cloud Build makes this
available as a default substitution , $SHORT_SHA .
KUBERNETES_RESOURCE_FILE is the path of your Kubernetes resource
file or the directory path containing your Kubernetes resource files.
CLUSTER is the name of the GKE cluster that the application
will be deployed to.
CLUSTER_LOCATION is the region the cluster will be deployed to.
Note: gke-deploy can only reference one image in your build configuration
file. If your Kubernetes resource files contain multiple image
references, only the images beginning with LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE_NAME : TAG will
be updated to reference the specified tag.
Start your build:
gcloud builds submit -- region = LOCATION -- project = PROJECT -- config BUILD_CONFIG
Where:
LOCATION is one of the supported build regions .
PROJECT is the ID for your project.
BUILD_CONFIG is the name of your build configuration file.
Automating deployments
You can automate the deployment of your application to GKE by
creating a trigger in Cloud Build. You can configure triggers to
build and deploy images whenever you push changes to your code.
To create a build trigger:
Open the Triggers page in the Google Cloud console:
Open the Triggers page
Select your project from the project selector drop-down menu at the top of
the page.
Click Open .
Click Create trigger .
On the Create trigger page, enter the following settings:
Enter a name for your trigger.
Select the repository event to start your trigger.
Select the repository that contains your source code and build config
file.
Specify the regular expression for the branch or tag name that will
start your trigger.
Choose a Configuration for your trigger.
If you choose a Cloud Build configuration file, you can
specify Substitution variables by providing a variable name and
the value you want to associate with that variable. In the following
example, the user-defined substitution variable
_CLOUDSDK_CONTAINER_CLUSTER specifies the cluster to deploy to,
and the user-defined substitution variable _CLOUDSDK_COMPUTE_ZONE
specifies its location. If you want to deploy to a different cluster,
you can use the same build configuration and only need to change
the values of the substitution variables:
YAML
steps :
...
# deploy container image to GKE
- name : "gcr.io/cloud-builders/gke-deploy"
args :
- run
- --filename= KUBERNETES_RESOURCE_FILE
- --image= LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE_NAME : TAG
- --location=${_CLOUDSDK_COMPUTE_ZONE}
- --cluster=${_CLOUDSDK_CONTAINER_CLUSTER}
JSON
{
"steps" : [
{
"name" : "gcr.io/cloud-builders/gke-deploy" ,
"args" : [
"run" ,
"--filename= KUBERNETES_RESOURCE_FILE " ,
"--image= LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE_NAME : TAG " ,
"--location=${_CLOUDSDK_COMPUTE_ZONE}" ,
"--cluster=${_CLOUDSDK_CONTAINER_CLUSTER}"
]
}
]
}
Where:
KUBERNETES_RESOURCE_FILE is the path of
your Kubernetes configuration file or the directory path containing
your Kubernetes resource files.
PROJECT is the ID for your project.
IMAGE_NAME is the name you want for your
container image, usually the application name.
TAG is the tag of the container image.
To learn more about how to define substitutions for build configuration files,
see Using user-defined substitutions .
Click Create to save your build trigger.
When you push code to your repository, Cloud Build will automatically
trigger a build. To learn more about build triggers, see Creating and managing
build triggers .
What's next
Learn how to
configure automated deployments for your workloads on GKE .
Learn how to create a GitOps-style CI/CD pipeline deploying to
GKE with Cloud Build .
Learn about additional gke-deploy options .
Learn how to perform blue-green deployments on Compute Engine .
Learn about additional Cloud builders .
Learn how to troubleshoot build errors .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
