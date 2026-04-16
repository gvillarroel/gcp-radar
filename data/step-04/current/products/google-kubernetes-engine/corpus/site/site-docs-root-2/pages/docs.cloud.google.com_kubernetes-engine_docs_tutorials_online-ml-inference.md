---
title: "Serve a model with a single GPU in GKE \_|\_ Kubernetes Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/online-ml-inference
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/learn
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/online-ml-inference
  title: "Serve a model with a single GPU in GKE \_|\_ Kubernetes Engine \_|\_ Google\
    \ Cloud Documentation"
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
Serve a model with a single GPU in GKE
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This tutorial shows you how to deploy and serve a large language model (LLM)
using GPUs on Google Kubernetes Engine (GKE) with
NVIDIA Triton Inference Server
and
TensorFlow Serving
This provides a foundation for understanding and exploring practical LLM
deployment for inference in a managed Kubernetes environment. You deploy a
pre-built container to a GKE cluster with a single
L4 Tensor Core GPU and you
prepare the GKE infrastructure to do online inference.
This tutorial is intended for Machine learning (ML) engineers,
Platform admins and operators, and for Data and AI specialists who want to host
a pre-trained machine learning (ML) model on a GKE cluster.
To learn more about common roles and example tasks referenced in Google Cloud
content, see
Common GKE user roles and tasks .
Before reading this page, ensure that you're familiar with the following:
Current GPU version availability
GPUs in GKE
Objectives
Create a GKE Autopilot or Standard cluster.
Configure a Cloud Storage bucket, where the pre-trained model lives.
Deploy the online inference framework you select.
Make a test request to the deployed service.
Note: This tutorial is a foundation for online serving. Additional elements like
Load Balancers should be considered depending on the use case.
Costs
This tutorial uses the following billable components of Google Cloud:
GKE
Cloud Storage
L4 GPU accelerators
Egress traffic
Use the Pricing Calculator to
generate a cost estimate based on your projected usage.
When you finish this tutorial, you can avoid continued billing by deleting the
resources you created. For more information, see Clean up .
Before you begin
Set up your project
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
click Create project to begin creating a new
Google Cloud project.
Roles required to create a project
To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains
the resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the GKE API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
click Create project to begin creating a new
Google Cloud project.
Roles required to create a project
To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains
the resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the GKE API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set defaults for the Google Cloud CLI
In the Google Cloud console, start a Cloud Shell instance:
Open Cloud Shell
Download the source code for this sample app:
git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples
cd kubernetes-engine-samples/ai-ml/gke-online-serving-single-gpu
Set the default environment variables:
gcloud config set project PROJECT_ID
gcloud config set compute/region COMPUTE_REGION
Replace the following values:
PROJECT_ID : your Google Cloud project ID .
COMPUTE_REGION : the Compute Engine region that supports the accelerator type you want to use,
for example, us-central1 for L4 GPU.
In Cloud Shell, create the following environment variables:
export PROJECT_ID = $( gcloud config get project )
export REGION = $( gcloud config get compute/region )
export K8S_SA_NAME = gpu-k8s-sa
export GSBUCKET = $PROJECT_ID -gke-bucket
export MODEL_NAME = mnist
export CLUSTER_NAME = online-serving-cluster
Create a GKE cluster
You can serve models on a single GPU in a GKE Autopilot
or Standard cluster. We recommend that you use a Autopilot cluster for a fully managed Kubernetes experience. With GKE Autopilot the resources scale automatically based on the model requests.
To choose the GKE mode of operation that's the best fit for your workloads, see Choose a GKE mode of operation .
Autopilot
Run the following command to create a GKE Autopilot cluster:
gcloud container clusters create-auto ${ CLUSTER_NAME } \
--location = ${ REGION } \
--project = ${ PROJECT_ID } \
--release-channel = rapid
Note: This step can take up to five minutes to complete.
GKE creates an Autopilot cluster with CPU and GPU
nodes as requested by the deployed workloads.
Standard
Run the following command to create a GKE Standard cluster:
gcloud container clusters create ${ CLUSTER_NAME } \
--project = ${ PROJECT_ID } \
--location = ${ REGION } \
--workload-pool = ${ PROJECT_ID } .svc.id.goog \
--addons GcsFuseCsiDriver \
--release-channel = rapid \
--num-nodes = 1
The cluster creation might take several minutes.
Run the following command to create the node pool:
gcloud container node-pools create gpupool \
--accelerator type = nvidia-l4,count = 1 ,gpu-driver-version = latest \
--project = ${ PROJECT_ID } \
--location = ${ REGION } \
--node-locations = ${ REGION } -a \
--cluster = ${ CLUSTER_NAME } \
--machine-type = g2-standard-8 \
--num-nodes = 1
GKE creates a single node pool containing one L4 GPU for
each node.
Create a Cloud Storage bucket
Create a Cloud Storage bucket to store the pre-trained model that will be served.
In Cloud Shell, run the following:
gcloud storage buckets create gs:// $GSBUCKET
Configure your cluster to access the bucket using Workload Identity Federation for GKE
To let your cluster access the Cloud Storage bucket, you do the following:
Create a Google Cloud service account.
Create a Kubernetes ServiceAccount in your cluster.
Bind the Kubernetes ServiceAccount to the Google Cloud service account.
Create a Google Cloud service account
In the Google Cloud console, go to the Create service account page:
Go to Create service account
In the Service account ID field, enter gke-ai-sa .
Click Create and continue .
In the Role list, select the Cloud Storage > Storage Insights Collector Service role.
Click add Add another role .
In the Select a role list, select the
Cloud Storage > Storage Object Admin role.
Click Continue , and then click Done .
Create a Kubernetes ServiceAccount in your cluster
In Cloud Shell, do the following:
Create a Kubernetes namespace:
kubectl create namespace gke-ai-namespace
Create a Kubernetes ServiceAccount in the namespace:
kubectl create serviceaccount gpu-k8s-sa --namespace = gke-ai-namespace
Bind the Kubernetes ServiceAccount to the Google Cloud service account
In Cloud Shell, run the following commands:
Add an IAM binding to the Google Cloud service account:
gcloud iam service-accounts add-iam-policy-binding gke-ai-sa@ PROJECT_ID .iam.gserviceaccount.com \
--role roles/iam.workloadIdentityUser \
--member "serviceAccount: PROJECT_ID .svc.id.goog[gke-ai-namespace/gpu-k8s-sa]"
The --member flag provides the full identity of the Kubernetes ServiceAccount
in Google Cloud.
Annotate the Kubernetes ServiceAccount:
kubectl annotate serviceaccount gpu-k8s-sa \
--namespace gke-ai-namespace \
iam.gke.io/gcp-service-account = gke-ai-sa@ PROJECT_ID .iam.gserviceaccount.com
Deploy the online inference server
Each online inference framework expects to find the pre-trained ML model in a
specific format. The following section shows how to deploy the inference server depending on the framework you want to use:
Triton
In Cloud Shell, copy the pre-trained ML model into the Cloud Storage
bucket:
gcloud storage cp src/triton-model-repository gs:// $GSBUCKET --recursive
Deploy the framework by using a Deployment. A Deployment is a Kubernetes API object that lets you run multiple replicas of Pods that are distributed among the nodes in a cluster.:
envsubst < src/gke-config/deployment-triton.yaml | kubectl --namespace = gke-ai-namespace apply -f -
Validate that GKE deployed the framework:
kubectl get deployments --namespace = gke-ai-namespace
When the framework is ready, the output is similar to the following:
NAME READY UP-TO-DATE AVAILABLE AGE
triton-deployment 1/1 1 1 5m29s
Deploy the Services to access the Deployment:
kubectl apply --namespace = gke-ai-namespace -f src/gke-config/service-triton.yaml
Check the external IP is assigned:
kubectl get services --namespace = gke-ai-namespace
The output is similar to the following:
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
kubernetes ClusterIP 34.118.224.1 <none> 443/TCP 60m
triton-server LoadBalancer 34.118.227.176 35.239.54.228 8000:30866/TCP,8001:31035/TCP,8002:30516/TCP 5m14s
Take note of the IP address for the triton-server in the EXTERNAL-IP
column.
Check that the service and the deployment are working correctly:
curl -v EXTERNAL_IP :8000/v2/health/ready
The output is similar to the following:
...
< HTTP/1.1 200 OK
< Content-Length: 0
< Content-Type: text/plain
...
TF Serving
In Cloud Shell, copy the pre-trained ML model into the Cloud Storage
bucket:
gcloud storage cp src/tfserve-model-repository gs:// $GSBUCKET --recursive
Deploy the framework by using a Deployment. A Deployment is a Kubernetes API object that lets you run multiple replicas of Pods that are distributed among the nodes in a cluster.:
envsubst < src/gke-config/deployment-tfserve.yaml | kubectl --namespace = gke-ai-namespace apply -f -
Validate that GKE deployed the framework:
kubectl get deployments --namespace = gke-ai-namespace
When the framework is ready, the output is similar to the following:
NAME READY UP-TO-DATE AVAILABLE AGE
tfserve-deployment 1/1 1 1 5m29s
Deploy the Services to access the Deployment:
kubectl apply --namespace = gke-ai-namespace -f src/gke-config/service-tfserve.yaml
Check the external IP is assigned:
kubectl get services --namespace = gke-ai-namespace
The output is similar to the following:
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
kubernetes ClusterIP 34.118.224.1 <none> 443/TCP 60m
tfserve-server LoadBalancer 34.118.227.176 35.239.54.228 8500:30003/TCP,8000:32194/TCP 5m14s
Take note of the IP address for the tfserve-server in the EXTERNAL-IP column.
Check that the Service and the Deployment are working correctly:
curl -v EXTERNAL_IP :8000/v1/models/mnist
Replace the EXTERNAL_IP with your
external IP address.
The output is similar to the following:
...
< HTTP/1.1 200 OK
< Content-Type: application/json
< Date: Thu, 12 Oct 2023 19:01:19 GMT
< Content-Length: 154
<
{
"model_version_status": [
{
"version": "1",
"state": "AVAILABLE",
"status": {
"error_code": "OK",
"error_message": ""
}
}
]
}
Serve the model
Triton
Create a Python virtual environment in Cloud Shell.
python -m venv ./mnist_client
source ./mnist_client/bin/activate
Install the required Python packages.
pip install -r src/client/triton-requirements.txt
Test Triton inference server by loading an image:
cd src/client
python triton_mnist_client.py -i EXTERNAL_IP -m mnist -p ./images/ TEST_IMAGE .png
Replace the following:
EXTERNAL_IP : Your external IP address.
TEST_IMAGE : The name of the file that corresponds
to the image you want to test. You can use the images stored in
src/client/images .
Depending on which image you use, the output is similar to the following:
Calling Triton HTTP Service -> Prediction result: 7
Note: You can write clients that run inference against the Triton Inference server. To learn more, see NVIDIA examples and libraries .
TF Serving
Create a Python virtual environment in Cloud Shell.
python -m venv ./mnist_client
source ./mnist_client/bin/activate
Install the required Python packages.
pip install -r src/client/tfserve-requirements.txt
Test TensorFlow Serving with a few images.
cd src/client
python tfserve_mnist_client.py -i EXTERNAL_IP -m mnist -p ./images/ TEST_IMAGE .png
Replace the following:
EXTERNAL_IP : Your external IP address.
TEST_IMAGE : A value from 0 to 9 . You can use the images stored in src/client/images .
Depending on which image you use, you will get an output similar to this:
Calling TensorFlow Serve HTTP Service -> Prediction result: 5
Note: You can write clients that run inference against the TensorFlow
server. To learn more, see TensorFlow API .
Success: You've successfully deployed an online serving framework for a
pre-trained ML model.
Observe model performance
Triton
To observe the model performance, you can use the Triton dashboard
integration in
Cloud Monitoring .
With this dashboard, you can view critical performance metrics like token
throughput, request latency, and error rates.
To use the Triton dashboard, you must enable
Google Cloud Managed Service for Prometheus ,
which collects the metrics from Triton,
in your GKE cluster.
Triton exposes metrics in Prometheus format by default;
you do not need to install an additional exporter.
You can then view the metrics by using the Triton dashboard.
For information about using Google Cloud Managed Service for Prometheus to collect
metrics from your model, see the
Triton
observability guidance in the Cloud Monitoring documentation.
TF Serving
To observe the model performance, you can use the TF Serving dashboard
integration in
Cloud Monitoring .
With this dashboard, you can view critical performance metrics like token
throughput, request latency, and error rates.
To use the TF Serving dashboard, you must enable
Google Cloud Managed Service for Prometheus ,
which collects the metrics from TF Serving,
in your GKE cluster.
You can then view the metrics by using the TF Serving dashboard.
For information about using Google Cloud Managed Service for Prometheus to collect
metrics from your model, see the
TF Serving
observability guidance in the Cloud Monitoring documentation.
Clean up
To avoid incurring charges to your Google Cloud account for the resources
that you created in this guide, do one of the following:
Keep the GKE cluster: Delete the Kubernetes resources in
the cluster and the Google Cloud resources
Keep the Google Cloud project: Delete the GKE cluster
and the Google Cloud resources
Delete the project
Delete the Kubernetes resources in the cluster and the Google Cloud resources
Delete the Kubernetes namespace and the workloads that you deployed:
Triton
kubectl -n gke-ai-namespace delete -f src/gke-config/service-triton.yaml
kubectl -n gke-ai-namespace delete -f src/gke-config/deployment-triton.yaml
kubectl delete namespace gke-ai-namespace
TF Serving
kubectl -n gke-ai-namespace delete -f src/gke-config/service-tfserve.yaml
kubectl -n gke-ai-namespace delete -f src/gke-config/deployment-tfserve.yaml
kubectl delete namespace gke-ai-namespace
Delete the Cloud Storage bucket:
Go to the Buckets page:
Go to Buckets
Select the checkbox for
PROJECT_ID -gke-bucket .
Click delete Delete .
To confirm deletion, type DELETE and click Delete .
Delete the Google Cloud service account:
Go to the Service accounts page:
Go to Service accounts
Select your project.
Select the checkbox for
gke-gpu-sa@ PROJECT_ID .iam.gserviceaccount.com .
Click delete Delete .
To confirm deletion, click Delete .
Delete the GKE cluster and the Google Cloud resources
Delete the GKE cluster:
Go to the Clusters page:
Go to Clusters
Select the checkbox for online-serving-cluster .
Click delete Delete .
To confirm deletion, type online-serving-cluster and click Delete .
Delete the Cloud Storage bucket:
Go to the Buckets page:
Go to Buckets
Select the checkbox for
PROJECT_ID -gke-bucket .
Click delete Delete .
To confirm deletion, type DELETE and click Delete .
Delete the Google Cloud service account:
Go to the Service accounts page:
Go to Service accounts
Select your project.
Select the checkbox for
gke-gpu-sa@ PROJECT_ID .iam.gserviceaccount.com .
Click delete Delete .
To confirm deletion, click Delete .
Delete the project
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
What's next
Serve an LLM with multiple GPUs in GKE
Serve Gemma using TPUs on GKE with JetStream .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
