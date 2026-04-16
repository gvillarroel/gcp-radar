---
title: "Serve scalable LLMs on GKE with TorchServe \_|\_ GKE AI/ML \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scalable-ml-models-torchserve
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scalable-ml-models-torchserve
  title: "Serve scalable LLMs on GKE with TorchServe \_|\_ GKE AI/ML \_|\_ Google\
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
GKE AI/ML
Guides
Send feedback
Serve scalable LLMs on GKE with TorchServe
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
This tutorial shows you how to deploy and serve a scalable machine learning (ML)
model to a Google Kubernetes Engine (GKE) cluster using the
TorchServe framework . You serve a pre-trained
PyTorch model that generates predictions based on user requests. After you
deploy the model, you get a prediction URL that your application uses to send
prediction requests. This method lets you scale the model and web application independently. When you deploy the ML workload and application on
Autopilot, GKE chooses the most efficient underlying
machine type and size to run the workloads.
This tutorial is intended for Machine learning (ML) engineers,
Platform admins and operators, and for Data and AI specialists who are interested
in using GKE Autopilot to reduce administrative overhead
for node configuration, scaling, and upgrades. To learn more about common roles
and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Before reading this page, ensure that you're familiar with
GKE Autopilot mode .
About the tutorial application
The application is a small Python web application created using the
Fast Dash framework .
You use the application to send prediction requests to the T5 model. This
application captures user text inputs and language pairs and sends the
information to the model. The model translates the text and returns the result
to the application, which displays the result to the user. For more information
about Fast Dash, see
the Fast Dash documentation .
Objectives
Prepare a pre-trained T5 model from the
Hugging Face
repository for serving by packaging it as a container image and pushing it
to Artifact Registry
Deploy the model to an Autopilot cluster
Deploy the Fast Dash application that communicates with the model
Autoscale the model based on Prometheus metrics
Costs
In this document, you use the following billable components of Google Cloud:
GKE Autopilot mode
Artifact Registry
Cloud Storage
Cloud Build
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Kubernetes Engine, Cloud Storage, Artifact Registry, and Cloud Build APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable container.googleapis.com storage.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Kubernetes Engine, Cloud Storage, Artifact Registry, and Cloud Build APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable container.googleapis.com storage.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com
Prepare the environment
Clone the example repository and open the tutorial directory:
git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git
cd kubernetes-engine-samples/ai-ml/t5-model-serving
Create the cluster
Run the following command:
gcloud container clusters create-auto ml-cluster \
--release-channel = RELEASE_CHANNEL \
--cluster-version = CLUSTER_VERSION \
--location = us-central1
Replace the following:
RELEASE_CHANNEL : the release channel for your cluster.
Must be one of rapid , regular , or stable . Choose a channel that has
GKE version 1.28.3-gke.1203000 or later to use L4 GPUs. To
see the versions available in a specific channel, see
View the default and available versions for release channels .
CLUSTER_VERSION : the GKE version to
use. Must be 1.28.3-gke.1203000 or later.
This operation takes several minutes to complete.
Create an Artifact Registry repository
Create a new Artifact Registry standard repository with the Docker format
in the same region as your cluster:
gcloud artifacts repositories create models \
--repository-format = docker \
--location = us-central1 \
--description = "Repo for T5 serving image"
Verify the repository name:
gcloud artifacts repositories describe models \
--location = us-central1
The output is similar to the following:
Encryption: Google-managed key
Repository Size: 0.000MB
createTime: '2023-06-14T15:48:35.267196Z'
description: Repo for T5 serving image
format: DOCKER
mode: STANDARD_REPOSITORY
name: projects/ PROJECT_ID /locations/us-central1/repositories/models
updateTime: '2023-06-14T15:48:35.267196Z'
Package the model
In this section, you package the model and the serving framework in a single
container image using Cloud Build and push the resulting image to the
Artifact Registry repository.
Review the Dockerfile for the container image:
# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
ARG BASE_IMAGE = pytorch / torchserve : 0.12 . 0 - cpu
FROM alpine / git
ARG MODEL_NAME = t5 - small
ARG MODEL_REPO = https : // huggingface . co /$ { MODEL_NAME }
ENV MODEL_NAME =$ { MODEL_NAME }
ENV MODEL_VERSION =$ { MODEL_VERSION }
RUN git clone "${MODEL_REPO}" / model
FROM $ { BASE_IMAGE }
ARG MODEL_NAME = t5 - small
ARG MODEL_VERSION = 1.0
ENV MODEL_NAME =$ { MODEL_NAME }
ENV MODEL_VERSION =$ { MODEL_VERSION }
COPY -- from = 0 / model /. / home / model - server /
COPY handler . py \
model . py \
requirements . txt \
setup_config . json / home / model - server /
RUN torch - model - archiver \
-- model - name = "${MODEL_NAME}" \
-- version = "${MODEL_VERSION}" \
-- model - file = "model.py" \
-- serialized - file = "pytorch_model.bin" \
-- handler = "handler.py" \
-- extra - files = "config.json,spiece.model,tokenizer.json,setup_config.json" \
-- runtime = "python" \
-- export - path = "model-store" \
-- requirements - file = "requirements.txt"
FROM $ { BASE_IMAGE }
ENV PATH / home / model - server /. local / bin : $ PATH
ENV TS_CONFIG_FILE / home / model - server / config . properties
# CPU inference will throw a warning cuda warning (not error)
# Could not load dynamic library 'libnvinfer_plugin.so.7'
# This is expected behaviour. see: https://stackoverflow.com/a/61137388
ENV TF_CPP_MIN_LOG_LEVEL 2
COPY -- from = 1 / home / model - server / model - store / / home / model - server / model - store
COPY config . properties / home / model - server /
This Dockerfile defines the following multiple stage build process:
Download the model artifacts from the Hugging Face repository.
Package the model using the
PyTorch Serving Archive
tool. This creates a model archive (.mar) file that the inference server
uses to load the model.
Build the final image with PyTorch Serve.
Build and push the image using Cloud Build:
gcloud builds submit model/ \
--region = us-central1 \
--config = model/cloudbuild.yaml \
--substitutions = _LOCATION = us-central1,_MACHINE = gpu,_MODEL_NAME = t5-small,_MODEL_VERSION = 1 .0
The build process takes several minutes to complete. If you use a larger model
size than t5-small , the build process might take significantly more
time.
Check that the image is in the repository:
gcloud artifacts docker images list us-central1-docker.pkg.dev/ PROJECT_ID /models
Replace PROJECT_ID with your Google Cloud
project ID.
The output is similar to the following:
IMAGE DIGEST CREATE_TIME UPDATE_TIME
us-central1-docker.pkg.dev/ PROJECT_ID /models/t5-small sha256:0cd... 2023-06-14T12:06:38 2023-06-14T12:06:38
Deploy the packaged model to GKE
To deploy the image, this tutorial use Kubernetes Deployments. A Deployment is a Kubernetes API object that lets you run multiple replicas of Pods that are distributed among the nodes in a cluster..
Modify the Kubernetes manifest in the example repository to
match your environment.
Review the manifest for the inference workload:
# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
---
apiVersion : apps/v1
kind : Deployment
metadata :
name : t5-inference
labels :
model : t5
version : v1.0
machine : gpu
spec :
replicas : 1
selector :
matchLabels :
model : t5
version : v1.0
machine : gpu
template :
metadata :
labels :
model : t5
version : v1.0
machine : gpu
spec :
nodeSelector :
cloud.google.com/gke-accelerator : nvidia-l4
securityContext :
fsGroup : 1000
runAsUser : 1000
runAsGroup : 1000
containers :
- name : inference
image : us-central1-docker.pkg.dev/PROJECT_ID/models/t5-small:1.0-gpu
imagePullPolicy : IfNotPresent
args : [ "torchserve" , "--start" , "--foreground" ]
resources :
limits :
nvidia.com/gpu : "1"
cpu : "3000m"
memory : 16Gi
ephemeral-storage : 10Gi
requests :
nvidia.com/gpu : "1"
cpu : "3000m"
memory : 16Gi
ephemeral-storage : 10Gi
ports :
- containerPort : 8080
name : http
- containerPort : 8081
name : management
- containerPort : 8082
name : metrics
readinessProbe :
httpGet :
path : /ping
port : http
initialDelaySeconds : 120
failureThreshold : 10
livenessProbe :
httpGet :
path : /models/t5-small
port : management
initialDelaySeconds : 150
periodSeconds : 5
---
apiVersion : v1
kind : Service
metadata :
name : t5-inference
labels :
model : t5
version : v1.0
machine : gpu
spec :
type : ClusterIP
selector :
model : t5
version : v1.0
machine : gpu
ports :
- port : 8080
name : http
targetPort : http
- port : 8081
name : management
targetPort : management
- port : 8082
name : metrics
targetPort : metrics
Replace PROJECT_ID with your Google Cloud
project ID:
sed -i "s/PROJECT_ID/ PROJECT_ID /g" "kubernetes/serving-gpu.yaml"
This ensures that the container image path in the Deployment specification
matches the path to your T5 model image in Artifact Registry.
Create the Kubernetes resources:
kubectl create -f kubernetes/serving-gpu.yaml
To verify that the model deployed successfully, do the following:
Get the status of the Deployment and the Service:
kubectl get -f kubernetes/serving-gpu.yaml
Wait until the output shows ready Pods, similar to the following. Depending
on the size of the image, the first image pull might take several minutes.
NAME READY UP-TO-DATE AVAILABLE AGE
deployment.apps/t5-inference 1/1 1 0 66s
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
service/t5-inference ClusterIP 10.48.131.86 <none> 8080/TCP,8081/TCP,8082/TCP 66s
Open a local port for the t5-inference Service:
kubectl port-forward svc/t5-inference 8080
Open a new terminal window and send a test request to the Service:
curl -v -X POST -H 'Content-Type: application/json' -d '{"text": "this is a test sentence", "from": "en", "to": "fr"}' "http://localhost:8080/predictions/t5-small/1.0"
If the test request fails and the Pod connection closes, check the logs:
kubectl logs deployments/t5-inference
If the output is similar to the following, TorchServe failed to install
some model dependencies:
org.pytorch.serve.archive.model.ModelException: Custom pip package installation failed for t5-small
To resolve this issue, restart the Deployment:
kubectl rollout restart deployment t5-inference
The Deployment controller creates a new Pod. Repeat the previous steps to
open a port on the new Pod.
Access the deployed model using the web application
To access the deployed model with the Fast Dash web application , complete the following steps:
Build and push the Fast Dash web application as a container image in
Artifact Registry:
gcloud builds submit client-app/ \
--region = us-central1 \
--config = client-app/cloudbuild.yaml
Open kubernetes/application.yaml in a text editor and replace
PROJECT_ID in the image: field with your
project ID. Alternatively, run the following command:
sed -i "s/PROJECT_ID/ PROJECT_ID /g" "kubernetes/application.yaml"
Create the Kubernetes resources:
kubectl create -f kubernetes/application.yaml
The Deployment and Service might take some time to fully provision.
To check the status, run the following command:
kubectl get -f kubernetes/application.yaml
Wait until the output shows ready Pods, similar to the following:
NAME READY UP-TO-DATE AVAILABLE AGE
deployment.apps/fastdash 1/1 1 0 1m
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
service/fastdash NodePort 203.0.113.12 <none> 8050/TCP 1m
The web application is now running, although it isn't exposed on an external
IP address. To access the web application, open a local port:
kubectl port-forward service/fastdash 8050
In a browser, open the web interface:
If you're using a local shell, open a browser and go to
http://127.0.0.1:8050.
If you're using Cloud Shell, click Web preview , and then click
Change port . Specify port 8050 .
To send a request to the T5 model, specify values in the TEXT ,
FROM LANG , and TO LANG fields in the web interface and click
Submit . For a list of available languages, see the
T5 documentation .
Enable autoscaling for the model
This section shows you how to enable autoscaling for the model based on metrics
from Google Cloud Managed Service for Prometheus
by doing the following:
Install Custom Metrics Stackdriver Adapter
Apply PodMonitoring and HorizontalPodAutoscaling configurations
Google Cloud Managed Service for Prometheus is enabled by default in Autopilot
clusters running version 1.25 and later.
Install Custom Metrics Stackdriver Adapter
This adapter lets your cluster use metrics from Prometheus to make Kubernetes
autoscaling decisions.
Deploy the adapter:
kubectl create -f https://raw.githubusercontent.com/GoogleCloudPlatform/k8s-stackdriver/master/custom-metrics-stackdriver-adapter/deploy/production/adapter_new_resource_model.yaml
Create an IAM service account for the adapter to use:
gcloud iam service-accounts create monitoring-viewer
Grant the IAM service account the monitoring.viewer role on
the project and the iam.workloadIdentityUser role:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member "serviceAccount:monitoring-viewer@ PROJECT_ID .iam.gserviceaccount.com" \
--role roles/monitoring.viewer
gcloud iam service-accounts add-iam-policy-binding monitoring-viewer@ PROJECT_ID .iam.gserviceaccount.com \
--role roles/iam.workloadIdentityUser \
--member "serviceAccount: PROJECT_ID .svc.id.goog[custom-metrics/custom-metrics-stackdriver-adapter]"
Replace PROJECT_ID with your Google Cloud
project ID.
Annotate the Kubernetes ServiceAccount of the adapter to let it impersonate
the IAM service account:
kubectl annotate serviceaccount custom-metrics-stackdriver-adapter \
--namespace custom-metrics \
iam.gke.io/gcp-service-account = monitoring-viewer@ PROJECT_ID .iam.gserviceaccount.com
Restart the adapter to propagate the changes:
kubectl rollout restart deployment custom-metrics-stackdriver-adapter \
--namespace = custom-metrics
Apply PodMonitoring and HorizontalPodAutoscaling configurations
PodMonitoring is a Google Cloud Managed Service for Prometheus custom resource that
enables metrics ingestion and target scraping in a specific namespace.
Deploy the PodMonitoring resource in the same namespace as the TorchServe
Deployment:
kubectl apply -f kubernetes/pod-monitoring.yaml
Review the HorizontalPodAutoscaler manifest:
# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : autoscaling/v2
kind : HorizontalPodAutoscaler
metadata :
name : t5-inference
spec :
scaleTargetRef :
apiVersion : apps/v1
kind : Deployment
name : t5-inference
minReplicas : 1
maxReplicas : 5
metrics :
- type : Pods
pods :
metric :
name : prometheus.googleapis.com|ts_queue_latency_microseconds|counter
target :
type : AverageValue
averageValue : "30000"
The HorizontalPodAutoscaler scales the T5 model Pod quantity based on the
cumulative duration of the request queue. Autoscaling is based on the
ts_queue_latency_microseconds metric, which shows cumulative queue
duration in microseconds.
Create the HorizontalPodAutoscaler:
kubectl apply -f kubernetes/hpa.yaml
Verify autoscaling using a load generator
To test your autoscaling configuration, generate load for the serving
application. This tutorial uses a Locust load generator to send requests to the
prediction endpoint for the model.
Create the load generator:
kubectl apply -f kubernetes/loadgenerator.yaml
Wait for the load generator Pods to become ready.
Expose the load generator web interface locally:
kubectl port-forward svc/loadgenerator 8080
If you see an error message, try again when the Pod is running.
In a browser, open the load generator web interface:
If you're using a local shell, open a browser and go to
http://127.0.0.1:8080.
If you're using Cloud Shell, click Web preview , and then
click Change port . Enter port 8080 .
Click the Charts tab to observe performance over time.
Open a new terminal window and watch the replica count of your
horizontal Pod autoscalers:
kubectl get hpa -w
The number of replicas increases as the load increases. The scaleup might
take approximately ten minutes. As new replicas start, the number of
successful requests in the Locust chart increases.
NAME REFERENCE TARGETS MINPODS MAXPODS REPLICAS AGE
t5-inference Deployment/t5-inference 71352001470m/7M 1 5 1 2m11s
Note: The Locust framework reuses opened connections, so you can't see changes
in a chart after a scale-up event. However, you can stop a current run of the
load generator by clicking Stop , and then start a new load generation test to
observe the increase in requests per second.
Recommendations
Build your model with the same version of the base Docker image that you'll
use for serving.
If your model has special package dependencies, or if the size of your
dependencies is large, create a custom version of your base Docker image.
Watch the tree version of your model dependency packages. Ensure that your
package dependencies support each others' versions. For example, Panda version
2.0.3 supports NumPy version 1.20.3 and later.
Run GPU-intensive models on GPU nodes and CPU-intensive models on CPU. This
could improve the stability of model serving and ensures that you're
efficiently consuming node resources.
Observe model performance
To observe the model performance, you can use the TorchServe dashboard
integration in
Cloud Monitoring .
With this dashboard, you can view critical performance metrics like token
throughput, request latency, and error rates.
To use the TorchServe dashboard, you must enable
Google Cloud Managed Service for Prometheus ,
which collects the metrics from TorchServe,
in your GKE cluster.
TorchServe exposes metrics in Prometheus format by default;
you do not need to install an additional exporter.
You can then view the metrics by using the TorchServe dashboard.
For information about using Google Cloud Managed Service for Prometheus to collect
metrics from your model, see the
TorchServe
observability guidance in the Cloud Monitoring documentation.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
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
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
Delete individual resources
Delete the Kubernetes resources:
kubectl delete -f kubernetes/loadgenerator.yaml
kubectl delete -f kubernetes/hpa.yaml
kubectl delete -f kubernetes/pod-monitoring.yaml
kubectl delete -f kubernetes/application.yaml
kubectl delete -f kubernetes/serving-gpu.yaml
kubectl delete -f https://raw.githubusercontent.com/GoogleCloudPlatform/k8s-stackdriver/master/custom-metrics-stackdriver-adapter/deploy/production/adapter_new_resource_model.yaml
Delete the GKE cluster:
gcloud container clusters delete "ml-cluster" \
--location = "us-central1" --quiet
Delete the IAM service account and IAM policy
bindings:
gcloud projects remove-iam-policy-binding PROJECT_ID \
--member "serviceAccount:monitoring-viewer@ PROJECT_ID .iam.gserviceaccount.com" \
--role roles/monitoring.viewer
gcloud iam service-accounts remove-iam-policy-binding monitoring-viewer@ PROJECT_ID .iam.gserviceaccount.com \
--role roles/iam.workloadIdentityUser \
--member "serviceAccount: PROJECT_ID .svc.id.goog[custom-metrics/custom-metrics-stackdriver-adapter]"
gcloud iam service-accounts delete monitoring-viewer
Delete the images in Artifact Registry. Optionally, delete the entire
repository. For instructions, see the Artifact Registry documentation about
Deleting images .
Component overview
This section describes the components used in this tutorial, such as the model,
the web application, the framework, and the cluster.
About the T5 model
This tutorial uses a pre-trained multilingual T5 model . T5 is a text-to-text
transformer that converts text from one language to another. In T5, inputs and
outputs are always text strings, in contrast to BERT-style models that can only
output either a class label or a span of the input. The T5 model can also be
used for tasks such as summarization, Q&A, or text classification. The model
is trained on a large quantity of text from
Colossal Clean Crawled Corpus (C4)
and
Wiki-DPR .
For more information, see
the T5 model documentation .
Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang, Michael
Matena, Yanqi Zhou, Wei Li, and Peter J. Liu presented the T5 model in
Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer ,
published in the Journal of Machine Learning Research .
The T5 model supports various model sizes , with different levels of complexity
that suit specific use cases. This tutorial uses the default size, t5-small ,
but you can also choose a different size. The following T5 sizes are distributed
under the Apache 2.0 license:
t5-small :
60 million parameters
t5-base :
220 million parameters
t5-large :
770 million parameters. 3GB download.
t5-3b :
3 billion parameters. 11GB download.
t5-11b :
11 billion parameters. 45GB download.
For other available T5 models, see the
Hugging Face repository .
About TorchServe
TorchServe is a flexible tool for serving PyTorch models. It provides out of
the box support for all major deep learning frameworks, including PyTorch,
TensorFlow, and ONNX. TorchServe can be used to deploy models in production, or
for rapid prototyping and experimentation.
What's next
Serve an LLM with multiple GPUs .
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
