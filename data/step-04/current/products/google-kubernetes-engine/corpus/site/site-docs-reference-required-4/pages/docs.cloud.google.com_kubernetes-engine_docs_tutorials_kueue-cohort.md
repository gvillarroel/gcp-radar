---
title: "Implement a Job queuing system with quota sharing between namespaces on GKE\
  \ \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/kueue-cohort
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/kueue-cohort
  title: "Implement a Job queuing system with quota sharing between namespaces on\
    \ GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation"
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
Implement a Job queuing system with quota sharing between namespaces on GKE
Stay organized with collections
Save and categorize content based on your preferences.
Standard
This tutorial uses Kueue
to show you how to implement a Job queueing system, configure workload resource and quota sharing between different namespaces on Google Kubernetes Engine (GKE), and to maximize the utilization of your cluster.
Background
As an infrastructure engineer or cluster administrator, maximizing utilization between namespaces is very important.
A batch of Jobs in one namespace might not fully use the full quota assigned to the namespace,
while another namespace may have multiple pending Jobs.
In order to efficiently use the cluster resources among Jobs in different namespaces
and to increase the flexibility of quota management, you can configure cohorts in Kueue.
A cohort is a group of ClusterQueues that can borrow unused quota from one another.
A ClusterQueue governs a pool of resources such as CPU, memory, and hardware accelerators.
You can find a more detailed definition of all these concepts in the Kueue documentation
Note: Kueue refers to jobs defined with an arbitrary API as Workloads, to avoid the confusion
with the specific Kubernetes Job API.
Objectives
This tutorial is for infrastructure engineers or cluster administrators that want to
implement a Job queueing system on Kubernetes using Kueue with quota sharing.
This tutorial will mimic two teams in two different namespaces, where each
team has their dedicated resources, but can borrow from each other. A third set of
resources can be used as spillover when jobs accumulate.
Utilize Prometheus operator
to monitor Jobs and resource allocation in different namespaces.
This tutorial covers the following necessary steps:
Create a GKE cluster
Create the ResourceFlavors
For each team, create a ClusterQueue and LocalQueue
Create Jobs and observe the admitted workloads
Borrow unused quota with cohorts
Add a spillover ClusterQueue governing Spot VMs
Costs
This tutorial uses the following billable components of Google Cloud:
GKE
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
Set the default environment variables:
gcloud config set project PROJECT_ID
gcloud config set compute/region COMPUTE_REGION
Replace the following values:
PROJECT_ID : your Google Cloud project ID .
COMPUTE_REGION : the Compute Engine region .
Create a GKE cluster
Create a GKE cluster named kueue-cohort :
You will create a cluster with 6 nodes (2 per zone) in the default pool and no autoscaling.
Those will be all the resources available for the teams in the beginning, so they
will have to compete for them.
You will see later how Kueue manages the workloads that both teams will send to the respective queues.
gcloud container clusters create kueue-cohort --location COMPUTE_REGION \
--release-channel rapid --machine-type e2-standard-4 --num-nodes 2
Note: This step can take up to five minutes to complete.
The outcome is similar to the following once the cluster is created:
kubeconfig entry generated for kueue-cohort.
NAME: kueue-cohort
LOCATION: us-central1
MASTER_VERSION: 1.26.2-gke.1000
MASTER_IP: 35.224.108.58
MACHINE_TYPE: e2-medium
NODE_VERSION: 1.26.2-gke.1000
NUM_NODES: 6
STATUS: RUNNING
Where the STATUS is RUNNING for the kueue-cluster .
Create a node pool named spot .
This node pool uses Spot VM and has autoscaling enabled. It starts
with 0 nodes, but later you will make it available to the teams for use as overspill capacity.
gcloud container node-pools create spot --cluster = kueue-cohort --location COMPUTE_REGION \
--spot --enable-autoscaling --max-nodes 20 --num-nodes 0 \
--machine-type e2-standard-4
Install the release version of Kueue to the cluster:
VERSION = VERSION
kubectl apply -f \
https://github.com/kubernetes-sigs/kueue/releases/download/ $VERSION /manifests.yaml
Replace VERSION with the letter v following the latest version of Kueue, for example v0.4.0 . For more information about Kueue versions, see Kueue releases .
Note: The samples in the repo require v0.3.0 or later.
Wait until the Kueue controller is ready:
watch kubectl -n kueue-system get pods
The output should be similar to the following before you can continue:
NAME READY STATUS RESTARTS AGE
kueue-controller-manager-6cfcbb5dc5-rsf8k 2/2 Running 0 3m
Create two new namespaces called team-a and team-b :
kubectl create namespace team-a
kubectl create namespace team-b
Jobs will be generated on each namespace.
Create the ResourceFlavors
A ResourceFlavor represents resource variations in your cluster nodes, such as
different VMs (for example spot versus on-demand), architectures (for example, x86 vs ARM CPUs),
brands and models (for example, Nvidia A100 versus T4 GPUs).
ResourceFlavors use node labels and taints to match with a set of nodes in the cluster.
apiVersion : kueue.x-k8s.io/v1beta1
kind : ResourceFlavor
metadata :
name : on-demand # This ResourceFlavor will be used for the CPU resource
spec :
nodeLabels :
cloud.google.com/gke-provisioning : standard # This label was applied automatically by GKE
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : ResourceFlavor
metadata :
name : spot # This ResourceFlavor will be used as added resource for the CPU resource
spec :
nodeLabels :
cloud.google.com/gke-provisioning : spot # This label was applied automatically by GKE
In this manifest:
The ResourceFlavor on-demand has its label set to cloud.google.com/gke-provisioning: standard .
The ResourceFlavor spot has its label set to cloud.google.com/gke-provisioning: spot .
Note: These labels require GKE 1.26 or later
When a workload is assigned a ResourceFlavor, Kueue assigns the Pods of the workload
to nodes that match the node labels defined for the ResourceFlavor.
Deploy the ResourceFlavor:
kubectl apply -f flavors.yaml
Create the ClusterQueue and LocalQueue
Create two ClusterQueues cq-team-a and cq-team-b , and their corresponding
LocalQueues lq-team-a and lq-team-b respectively namespaced to team-a and team-b .
ClusterQueues are cluster-scoped object that governs a pool of resources such as CPU, memory, and hardware accelerators.
Batch administrators can restrict the visibility of these objects to batch users.
LocalQueues are namespaced objects that batch users can list. They point to CluterQueues,
from which resources are allocated to run the LocalQueue workloads.
apiVersion : kueue.x-k8s.io/v1beta1
kind : ClusterQueue
metadata :
name : cq-team-a
spec :
cohort : all-teams # cq-team-a and cq-team-b share the same cohort
namespaceSelector :
matchLabels :
kubernetes.io/metadata.name : team-a #Only team-a can submit jobs direclty to this queue, but will be able to share it through the cohort
resourceGroups :
- coveredResources : [ "cpu" , "memory" ]
flavors :
- name : on-demand
resources :
- name : "cpu"
nominalQuota : 10
borrowingLimit : 5
- name : "memory"
nominalQuota : 10Gi
borrowingLimit : 15Gi
- name : spot # This ClusterQueue doesn't have nominalQuota for spot, but it can borrow from others
resources :
- name : "cpu"
nominalQuota : 0
- name : "memory"
nominalQuota : 0
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : LocalQueue
metadata :
namespace : team-a # LocalQueue under team-a namespace
name : lq-team-a
spec :
clusterQueue : cq-team-a # Point to the ClusterQueue team-a-cq
ClusterQueues allows resources to have multiple flavors. In this case, both
ClusterQueues have two flavors, on-demand and spot , each providing cpu resources.
The quota of the ResourceFlavor spot is set to 0 , and will not be used for
now.
Both ClusterQueues share the same cohort called all-teams , defined in .spec.cohort .
When two or more ClusterQueues share the same cohort, they can borrow unused quota from each
other.
You can learn more about how cohorts work and the borrowing semantics in the Kueue documentation
Deploy the ClusterQueues and LocalQueues:
kubectl apply -f cq-team-a.yaml
kubectl apply -f cq-team-b.yaml
(Optional) Monitor Workloads using kube-prometheus
You can use Prometheus to monitor your active and pending Kueue workloads.
To monitor the workloads being brought up and observe the load on each
ClusterQueue, deploy kube-prometheus to the
cluster under the namespace monitoring :
Download the source code for Prometheus operator:
cd
git clone https://github.com/prometheus-operator/kube-prometheus.git
Create the CustomResourceDefinitions(CRDs):
kubectl create -f kube-prometheus/manifests/setup
Create the monitoring components:
kubectl create -f kube-prometheus/manifests
Allow the prometheus-operator to scrape metrics from Kueue components:
kubectl apply -f https://github.com/kubernetes-sigs/kueue/releases/download/ $VERSION /prometheus.yaml
Change to the working directory:
cd kubernetes-engine-samples/batch/kueue-cohort
Set up port forwarding to the Prometheus service running in your GKE cluster:
kubectl --namespace monitoring port-forward svc/prometheus-k8s 9090
Open the Prometheus web UI on localhost:9090 in the browser.
In the Cloud Shell:
Click Web Preview .
Click Change port and set the port number to 9090 .
Click Change and Preview .
The following Prometheus web UI appears.
In the Expression query box, enter the following query to create the first panel that
monitors the active workloads for cq-team-a ClusterQueue:
kueue_pending_workloads { cluster_queue = "cq-team-a" , status = "active" } or kueue_admitted_active_workloads { cluster_queue = "cq-team-a" }
Click Add panel .
In the Expression query box, enter the following query to create another panel that monitors
the active workloads for cq-team-b ClusterQueue:
kueue_pending_workloads { cluster_queue = "cq-team-b" , status = "active" } or kueue_admitted_active_workloads { cluster_queue = "cq-team-b" }
Click Add panel .
In the Expression query box, enter the following query to create a panel that monitors the
number of nodes in the cluster:
count ( kube_node_info )
(Optional) Monitor Workloads using Google Cloud Managed Service for Prometheus
You can use Google Cloud Managed Service for Prometheus
to monitor your active and pending Kueue workloads. A full list of metrics can
be found in the Kueue
documentation .
Setup Identity and RBAC for metrics access:
The following configuration creates 4 Kubernetes resources, that provide
metrics access for the Google Cloud Managed Service for Prometheus collectors.
A ServiceAccount named kueue-metrics-reader within the kueue-system
namespace, will be used to authenticate when accessing the Kueue metrics.
A Secret associated with the kueue-metrics-reader service account,
stores an authentication token, that is used by the collector, to
authenticate with metrics endpoint exposed by the Kueue deployment.
A Role named kueue-secret-reader in the kueue-system namespace,
which allows reading the secret containing the service account token.
A ClusterRoleBinding that grants the kueue-metrics-reader service
account the kueue-metrics-reader ClusterRole.
apiVersion : v1
kind : ServiceAccount
metadata :
name : kueue-metrics-reader
namespace : kueue-system
---
apiVersion : v1
kind : Secret
metadata :
name : kueue-metrics-reader-token
namespace : kueue-system
annotations :
kubernetes.io/service-account.name : kueue-metrics-reader
type : kubernetes.io/service-account-token
---
apiVersion : rbac.authorization.k8s.io/v1
kind : Role
metadata :
name : kueue-secret-reader
namespace : kueue-system
rules :
- resources :
- secrets
apiGroups : [ "" ]
verbs : [ "get" , "list" , "watch" ]
resourceNames : [ "kueue-metrics-reader-token" ]
---
apiVersion : rbac.authorization.k8s.io/v1
kind : ClusterRoleBinding
metadata :
name : kueue-metrics-reader
subjects :
- kind : ServiceAccount
name : kueue-metrics-reader
namespace : kueue-system
roleRef :
kind : ClusterRole
name : kueue-metrics-reader
apiGroup : rbac.authorization.k8s.io
Configure RoleBinding for Google Cloud Managed Service for Prometheus:
Depending on if you are using a Autopilot or Standard
cluster, you will need to create the RoleBinding in either the
gke-gmp-system or gmp-system namespace. This resource allows the
collector service account to access the kueue-metrics-reader-token secret
to authenticate and scrape the Kueue metrics.
Autopilot
apiVersion : rbac.authorization.k8s.io/v1
kind : RoleBinding
metadata :
name : gmp-system:collector:kueue-secret-reader
namespace : kueue-system
roleRef :
name : kueue-secret-reader
kind : Role
apiGroup : rbac.authorization.k8s.io
subjects :
- name : collector
namespace : gke-gmp-system
kind : ServiceAccount
Standard
apiVersion : rbac.authorization.k8s.io/v1
kind : RoleBinding
metadata :
name : gmp-system:collector:kueue-secret-reader
namespace : kueue-system
roleRef :
name : kueue-secret-reader
kind : Role
apiGroup : rbac.authorization.k8s.io
subjects :
- name : collector
namespace : gmp-system
kind : ServiceAccount
Configure Pod Monitoring resource:
The following resource configures the monitoring for the Kueue depployment,
it specifies that metrics are exposed on the /metrics path over HTTPS. It uses the
kueue-metrics-reader-token secret for authentication when scraping the
metrics.
apiVersion : monitoring.googleapis.com/v1
kind : PodMonitoring
metadata :
name : kueue
namespace : kueue-system
spec :
selector :
matchLabels :
control-plane : controller-manager
endpoints :
- port : 8443
interval : 30s
path : /metrics
scheme : https
tls :
insecureSkipVerify : true
authorization :
type : Bearer
credentials :
secret :
name : kueue-metrics-reader-token
key : token
Query exported metrics
Query exported metrics with Cloud Monitoring
Query exported metrics with Grafana
Sample PromQL queries for monitoring Kueue based systems
These PromQL queries allow you to monitor key Kueue metrics such as job throughput,
resource utilization by queue, and workload wait times to understand system
performance and identify potential bottlenecks.
Job Throughput
This calculates the per-second rate of admitted workloads over 5 minutes for
each cluster_queue. This metric can help in breaking it down by queue helps
pinpoint bottlenecks and summing it provides the overall system throughput.
Query:
sum(rate(kueue_admitted_workloads_total[5m])) by (cluster_queue)
Resource Utilization
This assumes metrics.enableClusterQueueResources is enabled. It calculates the
ratio of current CPU usage to the nominal CPU quota for each queue. A value
close to 1 indicates high utilization. You can adapt this for memory or other
resources by changing the resource label.
To install a custom-configured released version of Kueue in your cluster, follow
the Kueue
documentation.
Query:
sum(kueue_cluster_queue_resource_usage{resource="cpu"}) by (cluster_queue) / sum(kueue_cluster_queue_nominal_quota{resource="cpu"}) by (cluster_queue)
Queue Wait Times
This provides the 90th percentile wait time for workloads in a specific queue.
You can modify the quantile value (e.g. 0.5 for median, 0.99 for 99th
percentile) to understand the wait time distribution.
Query:
histogram_quantile(0.9, kueue_admission_wait_time_seconds_bucket{cluster_queue=" QUEUE_NAME "})
Create Jobs and observe the admitted workloads
In this section, you create Kubernetes Jobs under the namespace team-a and team-b . A Job controller in Kubernetes creates one or more
Pods and helps ensure that they successfully execute a specific
task.
Generate Jobs to both ClusterQueues that will sleep for 10 seconds, with three
paralleled Jobs and will be completed with three completions. It will then be
cleaned up after 60 seconds.
apiVersion : batch/v1
kind : Job
metadata :
namespace : team-a # Job under team-a namespace
generateName : sample-job-team-a-
labels :
kueue.x-k8s.io/queue-name : lq-team-a # Point to the LocalQueue
spec :
ttlSecondsAfterFinished : 60 # Job will be deleted after 60 seconds
parallelism : 3 # This Job will have 3 replicas running at the same time
completions : 3 # This Job requires 3 completions
suspend : true # Set to true to allow Kueue to control the Job when it starts
template :
spec :
containers :
- name : dummy-job
image : gcr.io/k8s-staging-perf-tests/sleep:latest
args : [ "10s" ] # Sleep for 10 seconds
resources :
requests :
cpu : "500m"
memory : "512Mi"
restartPolicy : Never
job-team-a.yaml creates Jobs under the namespace team-a and points to
the LocalQueue lq-team-a and the ClusterQueue cq-team-a .
Similarly, job-team-b.yaml creates Jobs under team-b namespace, and points
to the LocalQueue lq-team-b and the ClusterQueue cq-team-b .
Start a new terminal and run this script to generate a Job every second:
./create_jobs.sh job-team-a.yaml 1
Start another terminal and create Jobs for the team-b namespace:
./create_jobs.sh job-team-b.yaml 1
Observe the Jobs being queued up in Prometheus. Or with this command:
watch -n 2 kubectl get clusterqueues -o wide
The output should be similar to the following:
NAME COHORT STRATEGY PENDING WORKLOADS ADMITTED WORKLOADS
cq-team-a all-teams BestEffortFIFO 0 5
cq-team-b all-teams BestEffortFIFO 0 4
Borrow unused quota with cohorts
ClusterQueues might not be at full capacity at all times. Quotas usage is not
maximized when workloads are not evenly spread out among ClusterQueues.
If ClusterQueues share the same cohort between each other, ClusterQueues can
borrow quotas from other ClusterQueues to maximize the quota utilization.
Once there are Jobs queued up for both ClusterQueues cq-team-a and
cq-team-b , stop the script for the team-b namespace by pressing CTRL+c
on the corresponding terminal.
Once all the pending Jobs from the namespace team-b are processed, the jobs
from the namespace team-a can borrow the available
resources in cq-team-b :
kubectl describe clusterqueue cq-team-a
Because cq-team-a and cq-team-b share the same cohort called all-teams ,
these ClusterQueues are able to share resources that are not utilized.
Flavors Usage:
Name: on-demand
Resources:
Borrowed: 5
Name: cpu
Total: 15
Borrowed: 5Gi
Name: memory
Total: 15Gi
Resume the script for the team-b namespace.
./create_jobs.sh job-team-b.yaml 3
Observe how the borrowed resources from cq-team-a go back to 0 , while the
resources from cq-team-b are used for its own workloads:
kubectl describe clusterqueue cq-team-a
Flavors Usage:
Name: on-demand
Resources:
Borrowed: 0
Name: cpu
Total: 9
Borrowed: 0
Name: memory
Total: 9Gi
Increase quota with Spot VMs
When quota needs to be temporarily increased, for example to meet high demand
in pending workloads, you can configure Kueue to accommodate the demand by adding more ClusterQueues
to the cohort. ClusterQueues with unused resources can share those resources
with other ClusterQueues that belong to the same cohort.
At the beginning of the tutorial, you created a node pool named spot using Spot VMs and a ResourceFlavor named spot with the label set to cloud.google.com/gke-provisioning: spot . Create a ClusterQueue to use this node pool and the ResourceFlavor that represents it:
Create a new ClusterQueue called cq-spot with cohort set to all-teams :
apiVersion : kueue.x-k8s.io/v1beta1
kind : ClusterQueue
metadata :
name : spot-cq
spec :
cohort : all-teams # Same cohort as cq-team-a and cq-team-b
resourceGroups :
- coveredResources : [ "cpu" , "memory" ]
flavors :
- name : spot
resources :
- name : "cpu"
nominalQuota : 40
- name : "memory"
nominalQuota : 144Gi
Because this ClusterQueue shares the same cohort with cq-team-a and
cq-team-b , both ClusterQueue cq-team-a and cq-team-b can borrow
resources up to 15 CPU requests, and 15 Gi of memory.
kubectl apply -f cq-spot.yaml
In Prometheus, observe how the admitted workloads spike for both cq-team-a
and cq-team-b thanks to the added quota by cq-spot who shares the same
cohort. Or with this command:
watch -n 2 kubectl get clusterqueues -o wide
In Prometheus, observe the number of nodes in the cluster. Or with this command:
watch -n 2 kubectl get nodes -o wide
Stop both scripts by pressing CTRL+c for team-a and team-b namespace.
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
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Delete the individual resource
Delete the Kueue quota system:
kubectl delete -n team-a localqueue lq-team-a
kubectl delete -n team-b localqueue lq-team-b
kubectl delete clusterqueue cq-team-a
kubectl delete clusterqueue cq-team-b
kubectl delete clusterqueue cq-spot
kubectl delete resourceflavor default
kubectl delete resourceflavor on-demand
kubectl delete resourceflavor spot
Delete the Kueue manifest:
VERSION = VERSION
kubectl delete -f \
https://github.com/kubernetes-sigs/kueue/releases/download/ $VERSION /manifests.yaml
Delete the cluster:
gcloud container clusters delete kueue-cohort --location = COMPUTE_REGION
What's next
Learn more about Deploy a batch system using Kueue .
Learn more about Jobs on GKE .
Learn more about Kueue
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
