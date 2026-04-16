---
title: "Deploy an agentic AI application on GKE with the Agent Development Kit (ADK)\
  \ and Vertex AI \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex
  title: "Deploy an agentic AI application on GKE with the Agent Development Kit (ADK)\
    \ and Vertex AI \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE AI/ML
Guides
Send feedback
Deploy an agentic AI application on GKE with the Agent Development Kit (ADK) and Vertex AI
Stay organized with collections
Save and categorize content based on your preferences.
Standard
This guide demonstrates how to deploy and manage containerized agentic AI/ML
applications by using Google Kubernetes Engine (GKE). By combining the Google Agent
Development Kit (ADK) with Vertex AI as the large language model (LLM) provider,
you can operationalize AI agents efficiently and at scale. This guide walks you
through the end-to-end process of taking a FastAPI-based agent powered by Gemini
2.5 Flash from development to production deployment on GKE.
This guide targets Machine learning (ML) engineers, Developers, and
Cloud architects interested in using Kubernetes container orchestration
capabilities for serving agentic AI/ML applications. To learn more about common
roles and example tasks in Google Cloud content, see Common GKE user roles and tasks .
Before you begin, ensure you are familiar with the following:
GKE
Containerization with Docker
Vertex AI
Background
This guide combines several Google technologies to create a
scalable platform for agentic AI. GKE provides the container
orchestration for the agent, which is built using the ADK. By using the
Vertex AI API for LLM inference, the GKE cluster
does not require specialized GPU hardware, because the inference is handled by
Google's managed infrastructure.
Google Agent Development Kit (ADK)
Agent Development Kit (ADK) is a flexible and modular framework for developing
and deploying AI agents. Although it's optimized for Gemini and the Google ecosystem,
ADK is model-agnostic, deployment-independent, and is built for compatibility with
other frameworks.
For more information, see the ADK documentation .
GKE managed Kubernetes service
GKE is a managed Kubernetes service for deploying, scaling, and
managing containerized applications. GKE provides the necessary
infrastructure, including scalable resources, distributed computing, and
efficient networking, to handle the computational demands of LLMs.
For more information about key Kubernetes concepts, see
Start learning about Kubernetes .
For more information about the GKE and how it helps you scale,
automate, and manage Kubernetes, see
GKE overview .
Vertex AI
Vertex AI is Google Cloud's unified ML platform, which lets
developers build, deploy, and scale AI/ML models. For agentic AI applications on
GKE, Vertex AI provides essential tools and services,
including access to LLMs like Gemini 2.5 Flash, managed
infrastructure for training and inference, and MLOps capabilities for efficient
lifecycle management.
When consuming LLMs through the Vertex AI API, model inference occurs on
Google's managed infrastructure, reducing the need for specific GPU or TPU quotas
in your GKE cluster.
For more information about Vertex AI for agentic AI applications, see the Vertex AI documentation .
Gemini 2.5 Flash
Gemini 2.5 Flash delivers next-generation features and improved
capabilities designed for agentic workloads, including higher speed, built-in tool
use, multimodal generation, and a 1M token context window. Gemini
2.5 Flash improves upon the previous Flash model and offers enhanced quality at
similar speeds.
For technical information about Gemini 2.5 Flash (such as
performance benchmarks, information on our training datasets, efforts on
sustainability, intended usage and limitations, and our approach to ethics and safety),
see the model card for Gemini 2.5 Flash .
Objectives
This guide shows you how to do the following:
Set up your Google Cloud environment.
Build a container image for your agent.
Deploy the agent to a GKE cluster.
Test your deployed agent.
Costs
This guide uses the following billable components of Google Cloud:
GKE
Artifact Registry
Cloud Build
Vertex AI
Review the pricing for each service to understand potential costs.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the required APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the required APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following role or roles on the project:
roles/container.admin, roles/iam.serviceAccountAdmin, roles/artifactregistry.admin, roles/cloudbuild.builds.editor, roles/resourcemanager.projectIamAdmin
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Prepare the environment
This tutorial uses Cloud Shell to manage resources hosted on Google Cloud.
Cloud Shell comes preinstalled with the software you need for this tutorial,
including kubectl , terraform , and the Google Cloud CLI .
To set up your environment with Cloud Shell, follow these steps:
In the Google Cloud console, launch a Cloud Shell session and click
Activate Cloud Shell . This action launches a session in
the bottom pane of the Google Cloud console.
Set the default environment variables:
gcloud config set project PROJECT_ID
export GOOGLE_CLOUD_LOCATION = REGION
export PROJECT_ID = PROJECT_ID
export GOOGLE_CLOUD_PROJECT = $PROJECT_ID
export WORKLOAD_POOL = $PROJECT_ID .svc.id.goog
export PROJECT_NUMBER = $( gcloud projects describe --format json $PROJECT_ID | jq -r ".projectNumber" )
Replace the following values:
PROJECT_ID : your Google Cloud project ID .
REGION : the Google Cloud region (for example, us-central1 ) to provision your GKE cluster, Artifact Registry,
and other regional resources.
Clone the sample project
From your Cloud Shell terminal, clone the tutorial's sample code repository:
git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git
Navigate to the tutorial directory:
cd kubernetes-engine-samples/ai-ml/adk-vertex
Create and configure Google Cloud resources
To deploy your agent to GKE, provision the necessary
Google Cloud resources. You can deploy the agent by using either the
gcloud CLI for direct command-line execution or Terraform for
infrastructure as code.
gcloud
This section provides gcloud CLI commands to set up your GKE cluster, Artifact Registry, and Workload Identity Federation for GKE for seamless integration with Vertex AI. Ensure you have set the environment variables as described in Prepare the environment .
Create a GKE cluster : You can deploy your containerized agentic application in a GKE Autopilot or Standard cluster. Use an Autopilot cluster for a fully managed Kubernetes experience. To choose the GKE mode of operation that best fits your workloads, see Choose a GKE mode of operation .
Autopilot
In Cloud Shell, run the following command:
gcloud container clusters create-auto CLUSTER_NAME \
--location = $GOOGLE_CLOUD_LOCATION \
--project = $PROJECT_ID
Replace CLUSTER_NAME with the name of your GKE Autopilot cluster.
Standard
In Cloud Shell, run the following command:
gcloud container clusters create CLUSTER_NAME \
--location = $GOOGLE_CLOUD_LOCATION \
--project = $PROJECT_ID \
--release-channel = stable \
--num-nodes = 1 \
--machine-type = e2-medium \
--workload-pool = $PROJECT_ID .svc.id.goog
Replace CLUSTER_NAME with the name of your Standard cluster.
Create an Artifact Registry repository for your Docker container : Create an Artifact Registry repository to securely store and manage your agent's Docker container image. This private registry helps ensure your application is readily available to deploy to GKE and integrates with Cloud Build.
gcloud artifacts repositories create adk-repo \
--repository-format = docker \
--location = $GOOGLE_CLOUD_LOCATION \
--project = $PROJECT_ID
Get the repository URL : Run this command to verify the full path to your repository. You'll use this path format to tag your Docker image in the next step.
gcloud artifacts repositories describe adk-repo \
--location $GOOGLE_CLOUD_LOCATION \
--project = $PROJECT_ID
Grant the Compute Engine default service account required IAM roles :
By default, the Compute Engine default service account does not
have permissions to push images to Artifact Registry, or to view objects in
Cloud Storage or logs. Grant the necessary roles for these operations.
ROLES_TO_ASSIGN =(
"roles/artifactregistry.writer"
"roles/storage.objectViewer"
"roles/logging.viewer"
)
for ROLE in " ${ ROLES_TO_ASSIGN [@] } " ; do
gcloud projects add-iam-policy-binding " ${ PROJECT_ID } " \
--member = "serviceAccount: ${ PROJECT_NUMBER } -compute@developer.gserviceaccount.com" \
--role = " ${ ROLE } "
done
Build and push the agent container image : Run this command to build
your Docker image and push it to your Artifact Registry. Ensure your
Dockerfile and application code are within the /app directory.
export IMAGE_URL = " ${ GOOGLE_CLOUD_LOCATION } -docker.pkg.dev/ ${ PROJECT_ID } /adk-repo/adk-agent:latest"
gcloud builds submit \
--tag " $IMAGE_URL " \
--project = " $PROJECT_ID " \
app
Verify that the image has been pushed :
gcloud artifacts docker images list \
$GOOGLE_CLOUD_LOCATION -docker.pkg.dev/ $PROJECT_ID /adk-repo/adk-agent \
--project = $PROJECT_ID
Terraform
This section describes how to use Terraform to provision your Google Cloud
resources. The sample repository you cloned includes the necessary Terraform configuration files.
Note: If you use Terraform, make sure to
specify the REGION value in the default_env.tfvars
file.
Initialize Terraform : Navigate to the terraform directory and initialize Terraform.
terraform init
Review the execution plan : This command shows the infrastructure
changes Terraform will make.
terraform plan -var-file = default_env.tfvars
Apply the configuration : Execute the Terraform plan to create the
resources in your Google Cloud project. Confirm with yes when prompted.
terraform apply -var-file = default_env.tfvars
After you run these commands, Terraform provisions your GKE
cluster and Artifact Registry repository, and configures the necessary
IAM roles and service accounts, including
Workload Identity Federation for GKE.
To learn more about using Terraform, see Terraform support for
GKE .
Configure kubectl to communicate with your cluster
If you haven't configured kubectl to communicate with your cluster, run the following
command:
gcloud container clusters get-credentials CLUSTER_NAME \
--location = ${ GOOGLE_CLOUD_LOCATION }
Replace CLUSTER_NAME with the name of your GKE cluster.
Configure Workload Identity Federation for GKE access
You can skip this step if you are using Terraform. This process links a
Kubernetes Service Account (KSA) to an IAM service account
to securely grant your agent access to Google Cloud services.
Create a service account for Vertex AI access:
gcloud iam service-accounts create vertex-sa \
--project = $PROJECT_ID
Grant the service account the aiplatform.user role. This allows the service
account to interact with Vertex AI.
gcloud projects add-iam-policy-binding $PROJECT_ID \
--member "serviceAccount:vertex-sa@ $PROJECT_ID .iam.gserviceaccount.com" \
--role "roles/aiplatform.user"
Create a KSA in your cluster. Make
sure to follow the instructions in
Configure kubectl to communicate with your cluster
before running this command.
kubectl create serviceaccount vertex-sa
Annotate the KSA to link it to your service account:
kubectl annotate serviceaccount vertex-sa \
iam.gke.io/gcp-service-account = vertex-sa@ $PROJECT_ID .iam.gserviceaccount.com
Grant your service account permissions to act as a Workload Identity Federation for GKE user
for the KSA:
gcloud iam service-accounts add-iam-policy-binding vertex-sa@ $PROJECT_ID .iam.gserviceaccount.com \
--role roles/iam.workloadIdentityUser \
--member "serviceAccount: $PROJECT_ID .svc.id.goog[default/vertex-sa]"
Deploy and configure the agent application
After setting up your Google Cloud resources, prepare your agent application for
deployment and configure its runtime on GKE. This involves
defining your agent's code, creating a Dockerfile to containerize it, and writing
a Kubernetes manifest to deploy it to your cluster.
Understand the agent application structure : The
/app directory contains the core files for your
agent application:
main.py : The FastAPI application
entry point, responsible for exposing the agent's API.
agent.py : Contains the ADK agent's logic, defining how it uses
Vertex AI and handles requests.
__init__.py : Initializes the Python package.
requirements.txt : Lists all Python dependencies for your agent.
Dockerfile : Defines how your application is packaged into a Docker
image.
Create the agent deployment manifest : In the
tutorials-and-examples/adk/vertex directory, create the following manifest as a file
named agent-deployment.yaml :
apiVersion : apps/v1
kind : Deployment
metadata :
name : adk-agent-deployment
labels :
app : adk-agent
spec :
replicas : 1
selector :
matchLabels :
app : adk-agent
template :
metadata :
labels :
app : adk-agent
spec :
serviceAccountName : vertex-sa
containers :
- name : adk-agent
image : IMAGE_URL
ports :
- containerPort : 8000
env :
- name : GOOGLE_CLOUD_PROJECT_ID
value : PROJECT_ID
- name : GOOGLE_CLOUD_LOCATION
value : REGION
- name : GOOGLE_GENAI_USE_VERTEXAI
value : "1"
- name : PORT
value : "8000"
resources :
requests :
memory : "512Mi"
cpu : "500m"
limits :
memory : "1Gi"
cpu : "1"
Replace the following values:
IMAGE_URL : the full URL of the Docker image you pushed to
Artifact Registry (for example,
us-central1-docker.pkg.dev/${PROJECT_ID}/adk-repo/adk-agent:latest ).
You can get this value from the output of the gcloud artifacts docker
images list command in the previous section. Alternatively, run a command
like the following: sed -i "s|image: IMAGE_URL|image: $IMAGE_URL|" agent-deployment.yaml .
PROJECT_ID : your Google Cloud project ID.
REGION : the Google Cloud region where your GKE cluster is provisioned.
Apply the deployment manifest :
kubectl apply -f agent-deployment.yaml
This command creates the Deployment and associated Pods for your agent
application in the GKE cluster.
Expose the agent : You can use these methods to expose your agent for access.
To access your agent from outside the cluster, create a Kubernetes Service.
For a web API, a LoadBalancer type service is common.
For local development and testing, use the kubectl port-forward command
to access your agent directly.
LoadBalancer
Create the following manifest as a file named agent-service.yaml :
apiVersion : v1
kind : Service
metadata :
name : adk-agent-service
spec :
selector :
app : adk-agent
type : LoadBalancer # Creates an external IP address for access
ports :
- protocol : TCP
port : 80
targetPort : 8000 # Matches the containerPort exposed in the Deployment
Apply the manifest:
kubectl apply -f agent-service.yaml
It might take a few minutes for the external IP address to provision.
Verify that the IP address is provisioned:
kubectl get service adk-agent-service
Look for the EXTERNAL-IP value in the output. After the value is
available, use this IP address to interact with your deployed agent.
port-forward
If you primarily use port-forward , consider using a ClusterIP
Service type instead of LoadBalancer as the ClusterIP Service is
internal and consumes fewer resources.
POD_NAME = $( kubectl get pods -l app = adk-agent -o jsonpath = '{.items[0].metadata.name}' )
kubectl port-forward $POD_NAME 8000 :8000
This command blocks your terminal, but it forwards traffic from
localhost:8000 on your machine to the agent running inside the GKE
cluster.
Test your deployed agent
Now that your agent application is deployed and exposed, test its functionality.
This section describes how to identify your agent's endpoint and test the
agent's API.
Identify the agent's endpoint : Depending on how you chose to expose
your agent in the previous section, identify its accessible endpoint:
LoadBalancer
Retrieve the external IP address:
kubectl get service adk-agent-service -o jsonpath = '{.status.loadBalancer.ingress[0].ip}'
Store the external IP address in an environment variable for easier use:
export AGENT_IP = $( kubectl get service adk-agent-service -o jsonpath = '{.status.loadBalancer.ingress[0].ip}' )
Your agent's base URL is http://${AGENT_IP} .
port-forward
Ensure your kubectl port-forward command runs in a separate terminal. Your agent's base URL is http://localhost:8000 .
Test the agent's API : Test the agent's API by making a curl request to its
/run endpoint. The agent expects a JSON payload with a message field.
Replace AGENT_BASE_URL with either http://${AGENT_IP} (for
LoadBalancer) or http://localhost:8000 (for port-forward).
Create a new session. This prepares the agent for a new
conversation.
# The user ID and session ID are arbitrary.
# The appName must match the agent's Python package directory name (in this case, "capital-agent").
curl -X POST AGENT_BASE_URL /apps/capital-agent/users/user-123/sessions/session-123
You can list available apps with the following command:
curl -X GET AGENT_BASE_URL /list-apps
Send a query to the agent by using the session details from the previous step.
curl -X POST AGENT_BASE_URL /run \
-H "Content-Type: application/json" \
-d '{
"appName": "capital-agent",
"userId": "user-123",
"sessionId": "session-123",
"newMessage": {
"role": "user",
"parts": [{
"text": "Hello, agent! What can you do for me?"
}]
}
}'
You should receive a JSON response from your agent, indicating that it
successfully processes requests and interacts with the Gemini model
through Vertex AI. The response contains the agent's generated reply
based on your message.
Access the agent's web UI (if applicable) : If your agent includes a web-based user interface, access it by navigating to your AGENT_BASE_URL in a web browser. The ADK typically includes a basic web UI for
interaction and debugging. For example, if you exposed your agent using a
LoadBalancer and its EXTERNAL-IP is 34.123.45.67 , navigate to
http://34.123.45.67 in your browser.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the deployed resources
To avoid incurring charges to your Google Cloud account for the resources that
you created in this guide, run the following commands:
gcloud
gcloud container clusters delete CLUSTER_NAME \
--location = ${ GOOGLE_CLOUD_LOCATION } \
--project = $PROJECT_ID
gcloud projects remove-iam-policy-binding $PROJECT_ID \
--member "serviceAccount:vertex-sa@ $PROJECT_ID .iam.gserviceaccount.com" \
--role "roles/aiplatform.user"
gcloud iam service-accounts delete vertex-sa@ $PROJECT_ID .iam.gserviceaccount.com
gcloud artifacts repositories delete adk-repo \
--location = $GOOGLE_CLOUD_LOCATION \
--project = $PROJECT_ID
Replace CLUSTER_NAME with the name of your GKE cluster.
Terraform
In your Cloud Shell terminal, navigate to the tutorials-and-examples/adk/vertex/ directory:
cd tutorials-and-examples/adk/vertex/
Run this command to remove all resources defined in your Terraform configuration files.
cd terraform
terraform destroy
What's next
Learn how to configure Horizontal Pod Autoscaler (HPA) to
automatically adjust your agent's resources on-demand.
Learn how to configure Identity-Aware Proxy (IAP) for your web applications running onGoogle Cloud, providing centralized authorization for access to your agent's UI.
Learn how to use Cloud Logging and Cloud Monitoring to gain insights
into your agent's performance and health within your GKE cluster.
Explore experimental samples in GKE AI Labs that can
help you use GKE to accelerate your agentic AI initiatives.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
