---
title: "Collect and view logs and metrics for Ray clusters on Google Kubernetes Engine\
  \ (GKE) \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics
  title: "Collect and view logs and metrics for Ray clusters on Google Kubernetes\
    \ Engine (GKE) \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation"
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
Collect and view logs and metrics for Ray clusters on Google Kubernetes Engine (GKE)
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This page shows how to configure Google Kubernetes Engine (GKE) to collect logs
and metrics for Ray clusters running on Google Kubernetes Engine (GKE), plus how to
view Ray logs and metrics in Cloud Logging and Cloud Monitoring.
For more
information on Ray and KubeRay, see
Ray on Google Kubernetes Engine (GKE) overview .
Before you begin
Before you start, make sure that you have performed the following tasks:
Enable
the Google Kubernetes Engine API.
Enable Google Kubernetes Engine API
If you want to use the Google Cloud CLI for this task,
install and then
initialize the
gcloud CLI. If you previously installed the gcloud CLI, get the latest
version by running the gcloud components update command. Earlier gcloud CLI versions might not support running the commands in this document.
Note: For existing gcloud CLI
installations, make sure to set the compute/region property . If you use primarily zonal clusters, set the compute/zone instead. By setting a default location,
you can avoid errors in the gcloud CLI like the following:
One of [--zone, --region] must be supplied: Please specify location . You might need to specify the location in certain commands if the location of your cluster differs from the default that you set.
Enable the Ray operator for Google Kubernetes Engine (GKE) .
Requirements and limitations
You must enable system and workload logging on an existing GKE
cluster before you enable log collection for Ray clusters.
If you enable log collection for Ray clusters on an existing
GKE cluster, GKE only collects logs from newly
created Ray Pods, not from existing Ray Pods.
For Standard GKE clusters, you must enable
Google Cloud Managed Service for Prometheus to enable metrics collection for Ray clusters. For Autopilot clusters, Google Cloud Managed Service for Prometheus is enabled by
default.
You must not specify a volume named ray-logs in any Ray container in the
Ray cluster. Otherwise, GKE won't collect logs.
JSON logging is available in GKE version v1.35.1-gke.1616000 and later. To enable structured JSON logging, configure specific environment variables within your Ray container specification.
Enable log collection for a Ray cluster
You can enable log collection for Ray clusters with new or existing
Autopilot or Standard GKE clusters. The Ray
logs that GKE collects from Ray clusters are classified as
container logs. This includes all logs produced by the Ray cluster header and
worker nodes.
You can enable log collection for Ray clusters using the Google Cloud console
or the gcloud CLI.
Console
Go to the Google Kubernetes Engine page in the Google Cloud console.
Go to Google Kubernetes Engine
Click add_box Create then in the Standard or Autopilot section, click Configure .
From the navigation pane, under Cluster , click Features .
In the Operations section, ensure the System and Workloads
checkbox is selected.
In the AI and Machine Learning section, select
Enable Ray Operator and then select Enable log collection for
Ray clusters .
Click Create .
For Standard clusters, you must also enable
Google Cloud Managed Service for Prometheus.
gcloud
Create a cluster using the --addons=RayOperator option and the
--enable-ray-cluster-logging option:
gcloud container clusters create CLUSTER_NAME \
--location = LOCATION \
--addons = RayOperator \
--enable-ray-cluster-logging
Replace the following:
CLUSTER_NAME : the name of the new cluster.
LOCATION : the location of the new cluster, for example, us-central1.
You can enable log collection for Ray clusters on an existing cluster by
using the
gcloud container clusters update
command with the --addons=RayOperator option and the
--enable-ray-cluster-logging option.
Note: You might observe that, in GKE, the Ray Operator collects logs from Ray head and worker Pods (standard output and standard error) even when the Enable log collection for Ray clusters option is not selected. This behavior is expected because GKE, by default, automatically collects all workload logs written to standard output or standard error. The Enable log collection for Ray clusters checkbox specifically controls the collection of additional Ray-specific logs, separate from these default workload logs. To manage which logs are sent to Cloud Logging by default and to reduce logging volume, refer to the About GKE logs page.
View Ray logs
You can view logs collected from Ray clusters running on GKE
using Logging.
Go to the Cloud Logging page in the Google Cloud console.
Go to Cloud Logging
Open the query editor and paste your expression into the query editor
Click Run query
You can use the following example queries in the Logs Explorer:
Query/filter name
Expression
All Ray logs
resource.type="k8s_container"
labels."k8s-pod/ray_io/is-ray-node"="yes"
All Ray head logs
resource.type="k8s_container"
labels."k8s-pod/ray_io/node-type"="head"
All logs in a Ray cluster
resource.type="k8s_container"
labels."k8s-pod/ray_io/cluster"=" RAY_CLUSTER_NAME "
All driver logs from a Ray job
resource.type="k8s_container"
jsonPayload.ray_submission_id=" RAY_JOB_SUBMISSION_ID "
All worker logs from a Ray job
resource.type="k8s_container"
labels."k8s-pod/ray_io/cluster"=" RAY_CLUSTER_NAME "
labels."k8s-pod/ray_io/node-type"="worker"
jsonPayload.filename=~"/tmp/ray/session_latest/logs/worker-(.*).out"
This query is for large-scale clusters where ray.init(log_to_driver=False) is set. For more information, see the Ray documentation on disabling logging to the driver .
Enable enhanced structured logging (recommended)
Enhanced structured logging is available for GKE version v1.35.1-gke.1616000 and onwards.
By default, Ray logs are captured as unstructured text strings within the jsonPayload.log field in Cloud Logging. To improve querying, analysis, and observability, you can configure Ray clusters to generate logs in a structured JSON format. This enhanced format parses logs into detailed key-value pairs, enabling faster, field-based querying on attributes like task_id and job_id . Enhanced structured logging provides correct severity labeling, preventing multi-line log splitting, and integrating seamlessly with Cloud Logging features for improved analysis and debugging.
To enable structured JSON output, complete the following steps:
Enable log collection enabled for your Ray cluster
Set the following environment variables within your Ray container specifications in the RayCluster YAML manifest:
RAY_LOGGING_CONFIG_ENCODING="JSON" : configures Ray application logs (Ray Core, actors, and tasks) to use structured JSON encoding.
RAY_BACKEND_LOG_JSON="1" : configures Ray system logs (such as those from the GCS server and Raylet) to be generated in structured JSON format.
For example, the following RayCluster manifests includes the env section for all Ray containers, in both headGroupSpec and workerGroupSpecs specs:
# Example snippet for a RayCluster manifest
apiVersion : ray.io/v1
kind : RayCluster
metadata :
name : raycluster-structured
spec :
headGroupSpec :
template :
spec :
containers :
- name : ray-head
image : rayproject/ray:2.54.0 # Replace with your desired Ray image
# ... other container settings
env :
- name : RAY_LOGGING_CONFIG_ENCODING
value : "JSON"
- name : RAY_BACKEND_LOG_JSON
value : "1"
workerGroupSpecs :
- groupName : small-group
replicas : 1
minReplicas : 1
maxReplicas : 5
template :
spec :
containers :
- name : ray-worker
image : rayproject/ray:2.54.0 # Replace with your desired Ray image
# ... other container settings
env :
- name : RAY_LOGGING_CONFIG_ENCODING
value : "JSON"
- name : RAY_BACKEND_LOG_JSON
value : "1"
Apply the updated RayCluster manifest:
kubectl apply -f your-raycluster.yaml
Queries for structured logs
Query/filter name
Expression
All error logs for a specific Ray Job ID
resource.type="k8s_container"
labels."k8s-pod/ray_io/is-ray-node"="yes"
severity=ERROR
jsonPayload.job_id=" YOUR_JOB_ID "
Logs for a specific Ray worker process ID
resource.type="k8s_container"
labels."k8s-pod/ray_io/is-ray-node"="yes"
jsonPayload.worker_id=" YOUR_WORKER_ID "
Error logs for a specific Task ID on a specific worker Pod
resource.type="k8s_container"
resource.labels.pod_name=" YOUR_WORKER_POD_NAME "
labels."k8s-pod/ray_io/is-ray-node"="yes"
severity=ERROR
jsonPayload.task_id=" YOUR_TASK_ID "
Enable metrics collection for a Ray cluster
You can enable metrics collection for Ray clusters with new or existing
Autopilot or Standard GKE clusters.
After you enable metrics collection for Ray clusters, GKE
collects metrics from existing Ray clusters and new Ray clusters.
GKE collects all system metrics exported by Ray in Prometheus
format.
You can enable metrics collection for Ray clusters using the
Google Cloud console or the gcloud CLI.
Console
Go to the Google Kubernetes Engine page in the Google Cloud console.
Go to Google Kubernetes Engine
Click add_box Create then in the Standard or Autopilot section, click Configure .
From the navigation pane, under Cluster , click Features .
In the Operations section, ensure the System and Workloads
checkbox is selected.
In the AI and Machine Learning section, select
Enable Ray Operator and then select Enable metrics collection for
Ray clusters .
Click Create .
For Standard clusters, you must also enable
Google Cloud Managed Service for Prometheus.
gcloud
Create a cluster using the --addons=RayOperator option and the
--enable-ray-cluster-monitoring option:
gcloud container clusters create CLUSTER_NAME \
--location = LOCATION \
--addons = RayOperator \
--enable-ray-cluster-monitoring
Replace the following:
CLUSTER_NAME : the name of the new cluster.
LOCATION : the location of the new cluster, for example, us-central1.
You can enable log collection for Ray clusters on an existing cluster by
using the
gcloud container clusters update
command with the --addons=RayOperator option and the
--enable-ray-cluster-monitoring option.
View Ray metrics
Google Cloud Managed Service for Prometheus provides a pre-configured
Ray on GKE Overview dashboard that offers a centralized view
of key Ray metrics. This is the recommended way
to quickly get started with monitoring your Ray clusters on GKE.
Go to Ray on GKE Overview dashboard
The dashboard is automatically populated when you enable
metrics collection for your Ray cluster.
Alternatively, if you want to explore individual metrics collected from Ray
clusters running on GKE, follow these steps:
Go to the Metrics Explorer page in the Google Cloud console.
Go to Metrics Explorer
In the Select a metric field, you can search for Ray-specific metrics.
These metrics are typically prefixed with prometheus/ray_ . Examples include
prometheus/ray_worker_cpu_seconds_total or prometheus/ray_memory_bytes_max .
You can further refine your search by selecting the appropriate resource type
(for example, k8s_pod , k8s_container ) and filtering by labels relevant to
your Ray cluster (for example, ray.io/cluster ).
What's next
Learn about
Ray on Kubernetes .
Explore the
KubeRay documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
