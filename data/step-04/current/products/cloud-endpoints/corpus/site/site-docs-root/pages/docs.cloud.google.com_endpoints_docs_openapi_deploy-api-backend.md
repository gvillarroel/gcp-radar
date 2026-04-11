---
title: "Deploying the API backend \_|\_ Cloud Endpoints with OpenAPI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/endpoints/docs/openapi/deploy-api-backend
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/endpoints/docs/openapi
source_metadata:
  url: https://docs.cloud.google.com/endpoints/docs/openapi/deploy-api-backend
  title: "Deploying the API backend \_|\_ Cloud Endpoints with OpenAPI \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Endpoints
OpenAPI
Send feedback
Deploying the API backend
Stay organized with collections
Save and categorize content based on your preferences.
OpenAPI
| gRPC
This page explains how to deploy your API's backend code and the
Extensible Service Proxy (ESP)
to Google Kubernetes Engine, Compute Engine, and the App Engine flexible
environment.
Although the deployment steps vary depending on the platform hosting your API,
there is always a step where you provide ESP the
service name
and an option that configures ESP to use the latest deployed
Cloud Endpoints service configuration. With this information,
ESP can obtain your API's Endpoints configuration,
which allows ESP to proxy requests and responses so that
Endpoints can manage your API.
Note: ESP and ESPV2 each have different environment support. ESP is only supported on the App Engine flexible environment and is not available on the App Engine standard environment. In contrast, ESPV2 can be deployed on GKE and Kubernetes but does not support App Engine.
Prerequisites
As a starting point, this page assumes that you have:
Created a Google Cloud project .
Configured Endpoints .
Deployed the Endpoints configuration .
Preparing for deployment
App Engine flexible environment
With the addition of a small configuration step (described in the
following steps), deploying your API so that it is managed by
Endpoints is the same as deploying any application to the
App Engine flexible environment. Follow the App Engine documentation to:
Organize your configuration files .
Create the app.yaml configuration file
If your application is based on microservices, see
Deploying
multiple service applications
documentation for information on configuring the app.yaml files
for each service.
You deploy your API to App Engine by using the
gcloud app deploy
command. This command automatically builds a container image by using the
Container Builder service and then
deploys that image to your App Engine flexible environment.
Before you deploy:
The Owner
of the Google Cloud project must create the
App Engine application .
Ensure that your user account includes the
required privileges .
Compute Engine
For Endpoints to manage your API, you must install and
configure ESP, as well as the backend server code for your
API. You need to
install Docker on your Compute Engine VM instance so that you
can run the ESP Docker image that is freely available in
Artifact Registry .
Before you deploy:
The following outlines at a high-level the steps you must take before you
can deploy your API and ESP to Compute Engine. In
general, you do all
the steps that you normally would to run your backend server code on
Compute Engine.
Create, configure, and start your VM instance. See the
Compute Engine documentation .
Install Docker Enterprise Edition (EE) or Docker Community Edition (CE) on
your VM instance. See
Install Docker .
Create a Docker container for your backend server code. See
Cloud Build documentation .
Push the container to
Artifact Registry or another registry.
Make sure that you can successfully:
Connect to
the VM instance .
Run the Docker image to start your backend server on the VM
instance. See Docker run reference .
Send requests to your API.
GKE
When you create a cluster in the Google Cloud console, by default, the
OAuth scopes that are granted to the cluster's service account include the
scopes that Endpoints requires:
Service Control: Enabled
Service Management: Read Only
When you create a cluster by using the
gcloud container clusters create command or by using a
third-party configuration file, make sure you specify the following scopes:
"https://www.googleapis.com/auth/servicecontrol"
"https://www.googleapis.com/auth/service.management.readonly"
For more information,
see
What are access scopes?
Before you deploy:
With the addition of a small section to your
Deployment manifest
file ,
you can run the ESP Docker image on your container clusters
along with your
containerized application. The following outlines at a high-level the steps
you must take before you can deploy your API with ESP to
GKE. In general, you do all the steps that you normally
would to run your backend server code on GKE.
Deploy your containerized application to the container clusters. The
general steps as described in the
GKE documentation
are:
Package your app into a Docker image.
Upload the image to a registry.
Create a container cluster.
Deploy your app to the cluster.
Expose your app to the internet.
Make sure that you can successfully:
Start your API's server.
Send requests to your API.
Deploying your API and ESP
App Engine flexible environment
To deploy the API and ESP to App Engine:
Get the
service name of your API. This is the name that you specified in the
host field of your OpenAPI document.
Edit the app.yaml file, and add a section called
endpoints_api_service that contains the service name. You can
use the app.yaml file from the
tutorial as a model:
Java
endpoints_api_service :
# The following values are to be replaced by information from the output of
# 'gcloud endpoints services deploy openapi-appengine.yaml' command.
name : ENDPOINTS-SERVICE-NAME
rollout_strategy : managed
Python
endpoints_api_service :
# The following values are to be replaced by information from the output of
# 'gcloud endpoints services deploy openapi-appengine.yaml' command.
name : ENDPOINTS-SERVICE-NAME
rollout_strategy : managed
Go
endpoints_api_service :
# The following values are to be replaced by information from the output of
# 'gcloud endpoints services deploy openapi-appengine.yaml' command.
name : ENDPOINTS-SERVICE-NAME
rollout_strategy : managed
PHP
endpoints_api_service :
# The following values are to be replaced by information from the output of
# 'gcloud endpoints services deploy openapi-appengine.yaml' command. If you have
# previously run the deploy command, you can list your existing configuration
# ids using the 'configs list' command as follows:
#
# gcloud endpoints configs list --service=YOUR-PROJECT-ID.appspot.com
#
name : ENDPOINTS-SERVICE-NAME
rollout_strategy : managed
Ruby
endpoints_api_service :
# The following values are to be replaced by information from the output of
# 'gcloud endpoints services deploy openapi-appengine.yaml' command.
name : ENDPOINTS-SERVICE-NAME
rollout_strategy : managed
NodeJS
endpoints_api_service :
# The following values are to be replaced by information from the output of
# 'gcloud endpoints services deploy openapi-appengine.yaml' command.
name : ENDPOINTS-SERVICE-NAME
rollout_strategy : managed
Replace ENDPOINTS-SERVICE-NAME with your API's service name.
Add the runtime and environment variables in the app.yaml configuration file.
For example:
runtime: nodejs
env: flex
endpoints_api_service:
name: example-project-12345.appspot.com
rollout_strategy: managed
The rollout_strategy: managed option
configures ESP to use the latest deployed service configuration. When you
specify this option, up to 5 minutes after you deploy a new service
configuration, ESP detects the change and automatically begins using it. We
recommend that you specify this option instead of a specific configuration ID
for ESP to use.
If your application is based on microservices, you must include the
endpoints_api_service section in every app.yaml file.
Save the app.yaml file (or files).
Deploy your backend code and ESP to App Engine:
gcloud app deploy
Because you added the endpoints_api_service section to the
app.yaml file, the gcloud app deploy command deploys
and configures ESP in a separate container to your
App Engine flexible environment. All request traffic is routed through
ESP, and it
proxies requests and responses to and from the container running your
backend server code.
If you need to configure ESP to use a specific configuration ID:
In the endpoints_api_service section of your app.yaml file,
add the config_id field and set it to a specific
configuration ID.
Either remove rollout_strategy: managed or set
rollout_strategy to fixed . The fixed
option configures ESP to use the service configuration that you
specified in
config_id .
Redeploy your API and ESP: gcloud app deploy
We recommend that you don't keep ESP configured to use a specific
configuration ID for very long because if you deploy an updated service
configuration, you have to restart ESP to use the new configuration.
To remove the specific configuration ID:
Remove the config_id option from the app.yaml file.
Add the rollout_strategy: managed option.
Issue the gcloud app deploy command
When you use the rollout_strategy: managed option, don't include
config_id: YOUR_SERVICE_CONFIG_ID in the
app.yaml file. If you do, gcloud app deploy fails
with the following error:
config_id is forbidden when rollout_strategy is set to "managed".
When you deploy your API to the App Engine flexible environment for
the first time, there might be a delay as your virtual machine (VM) and other
infrastructure are set up. For additional information, see
Ensuring successful deployment in the App Engine
documentation.
Compute Engine
To deploy your API with ESP to Compute Engine with Docker:
Connect to your VM instance. Replace INSTANCE_NAME with the
name of your VM instance.
gcloud compute ssh INSTANCE_NAME
Create your own container network called esp_net :
sudo docker network create --driver bridge esp_net
Run an instance of the image of your backend server code and connect it to
the esp_net container network:
sudo docker run \
--detach \
--name= YOUR_API_CONTAINER_NAME \
--net=esp_net \
gcr.io/ YOUR_PROJECT_ID / YOUR_IMAGE :1.0
Replace YOUR_API_CONTAINER_NAME with the name of your
container.
Replace YOUR_PROJECT_ID with the Google Cloud project
ID that you used when you pushed the image.
Replace YOUR_IMAGE with the name of your image.
Get the service
name of your API. This is the name that you specified in the
host field of your OpenAPI document.
Run an instance of the ESP Docker image:
sudo docker run \
--name=esp \
--detach \
--publish=80:8080 \
--net=esp_net \
gcr.io/endpoints-release/endpoints-runtime:1 \
--service= SERVICE_NAME \
--rollout_strategy=managed \
--backend= YOUR_API_CONTAINER_NAME :8080
Replace SERVICE_NAME with the name of your service.
Replace YOUR_API_CONTAINER_NAME with the name of your API's
container.
The --rollout_strategy=managed option
configures ESP to use the latest deployed service configuration. When you
specify this option, up to 5 minutes after you deploy a new service
configuration, ESP detects the change and automatically begins using it. We
recommend that you specify this option instead of a specific configuration ID
for ESP to use.
If you need to configure ESP to use a specific configuration ID:
Include the --version option and set it to a specific
configuration ID.
Either remove the --rollout_strategy=managed option or set
--rollout_strategy to fixed . The fixed
option configures ESP to use the service configuration that you
specified in
--version .
Issue the docker run command again.
If you specify both --rollout_strategy=managed and the
--version option, ESP starts with the configuration
that you specified in --version , but then runs in managed mode
and obtains the latest configuration.
We recommend that you don't keep ESP configured to use a specific
configuration ID for very long because if you deploy an updated service
configuration, you have to restart ESP to use the new configuration.
To remove the specific configuration ID:
In the ESP flags for docker run , remove the
--version option.
Add the --rollout_strategy=managed option.
Issue the docker run command to restart ESP.
See ESP startup
options for the full list of options that you can specify when starting
ESP.
GKE
To deploy ESP to GKE:
Get the
service name of
your API (the name that you specified in the host field of
your OpenAPI document).
Open your Deployment manifest file (referred to as the
deployment.yaml file) and add the following to the
containers section:
containers:
- name: esp
image: gcr.io/endpoints-release/endpoints-runtime:1
args: [
"--http_port=8081",
"--backend=127.0.0.1:8080",
"--service= SERVICE_NAME ",
"--rollout_strategy=managed"
]
Replace SERVICE_NAME with your API's service name.
The --rollout_strategy=managed" option
configures ESP to use the latest deployed service configuration. When you
specify this option, up to 5 minutes after you deploy a new service
configuration, ESP detects the change and automatically begins using it. We
recommend that you specify this option instead of a specific configuration ID
for ESP to use.
Start the Kubernetes service by using the
kubectl create command:
kubectl create -f deployment.yaml
If you need to configure ESP to use a specific configuration ID:
In your Deployment manifest file, add the --version option and
set it to a specific
configuration ID.
Either remove --rollout_strategy=managed or set
--rollout_strategy to fixed . The fixed
option configures ESP to use the service configuration that you
specified in --version .
Start the Kubernetes service: kubectl create -f deployment.yaml
If you specify both --rollout_strategy=managed and the
--version option, ESP starts with the configuration
that you specified in --version but then runs in managed mode and
obtains the latest configuration.
We recommend that you don't keep ESP configured to use a
specific configuration ID for very long because if you deploy an updated service
configuration, you have to restart ESP to use the new configuration.
To remove the specific configuration ID:
In your Deployment manifest file, remove the --version
option.
Add the --rollout_strategy=managed .
Start the Kubernetes service: kubectl create -f deployment.yaml
See ESP startup
options for the full list of options that you can specify when starting
ESP.
Tracking API activity
After you deploy ESP and your API backend, you can use tools such
as curl or Postman to send requests to your API. If you don't get a successful
response, see
Troubleshooting response errors .
After sending some requests, you can:
View the activity graphs for your API on Endpoints > Services .
Go to the Endpoints Services page
It may take a few moments for the request to be reflected in the graphs.
Look at the request logs for your API on the Cloud Logging page.
Go to the Logs Explorer page
What's next
Troubleshooting the App Engine flexible environment deployment .
Troubleshooting Endpoints on Compute Engine .
Troubleshooting Endpoints in Google Kubernetes Engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
