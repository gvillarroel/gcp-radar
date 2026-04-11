---
title: "Run a large-scale workload with flex-start with queued provisioning \_|\_\
  \ GKE AI/ML \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest
  title: "Run a large-scale workload with flex-start with queued provisioning \_|\_\
    \ GKE AI/ML \_|\_ Google Cloud Documentation"
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
Run a large-scale workload with flex-start with queued provisioning
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
Note: Flex-start with queued provisioning supports new flags that are part of the
flex-start preview launch.
This page shows you how to optimize GPU obtainability for
large-scale batch and AI workloads with GPUs using flex-start with queued provisioning powered by
Dynamic Workload Scheduler .
Before reading this page, ensure that you're familiar with the following:
About GPUs in GKE
About GPU obtainability in GKE
This guide is intended for Machine learning (ML) engineers,
Platform admins and operators, and for Data and AI specialists who are interested
in using Kubernetes container orchestration capabilities for running batch
workloads. For more information about common roles and example tasks that we
reference in Google Cloud content, see
Common GKE user roles and tasks .
How flex-start with queued provisioning works
With flex-start with queued provisioning, GKE allocates all
requested resources at the same time. Flex-start with queued provisioning uses
the following tools:
Flex-start with queued provisioning is based on
Dynamic Workload Scheduler
combined with the
Provisioning Request custom resource definition (CRD) .
These tools manage the capacity allocated based on the available resources and
your workload requirements.
(Optional) Kueue automates the
lifecycle of flex-start with queued provisioning requests. Kueue implements Job queueing
and automatically handles the Provisioning Request lifecycle.
To use flex-start with queued provisioning, you have to add
the --flex-start and --enable-queued-provisioning flags when you create the
node pool.
Best practice :
Use flex-start with queued provisioning for large-scale batch and AI workloads when your workloads meet the following criteria:
Your workloads have flexible start times.
Your workloads are required to run across multiple nodes simultaneously.
For smaller workloads that can run on a single node, use Flex-start VMs .
For more information about GPU provisioning in GKE, see Obtain
accelerators for AI workloads .
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
Ensure that you have a GKE cluster in version 1.32.2-gke.1652000 or later.
Ensure that you have enough preemptible quota for the VMs that will be provisioned.
Ensure that you
manage disruptions in workloads that use Dynamic Workload Scheduler
to prevent workload disruption.
Ensure that you're familiar with the limitations of flex-start with queued provisioning .
When using a Standard cluster, ensure that you maintain at least one
node pool without flex-start with queued provisioning enabled for the cluster to
function correctly.
Use node pools with flex-start with queued provisioning
This section applies to Standard clusters only.
You can use any of the following methods to designate that
flex-start with queued provisioning can work with specific node pools in your cluster:
Create a node pool .
Configure node auto-provisioning to create node pools that has flex-start with queued provisioning enabled .
Create a node pool
Create a node pool that has flex-start with queued provisioning enabled by using the
gcloud CLI:
gcloud container node-pools create NODEPOOL_NAME \
--cluster = CLUSTER_NAME \
--location = LOCATION \
--enable-queued-provisioning \
--accelerator type = GPU_TYPE ,count = AMOUNT ,gpu-driver-version = DRIVER_VERSION \
--machine-type = MACHINE_TYPE \
--flex-start \
--enable-autoscaling \
--num-nodes = 0 \
--total-max-nodes TOTAL_MAX_NODES \
--location-policy = ANY \
--reservation-affinity = none \
--no-enable-autorepair
Replace the following:
NODEPOOL_NAME : The name you choose for the node pool.
CLUSTER_NAME : The name of the cluster.
LOCATION : The cluster's Compute Engine region, such
as us-central1 .
GPU_TYPE : The GPU type .
AMOUNT : The number of GPUs to attach to nodes in the
node pool.
DRIVER_VERSION : the NVIDIA driver version to install.
Can be one of the following:
default : Install the default driver version for your GKE
version.
latest : Install the latest available driver version for your
GKE version. Available only for nodes that use
Container-Optimized OS.
TOTAL_MAX_NODES : the maximum number of nodes to
automatically scale for the entire node pool.
MACHINE_TYPE : The Compute Engine machine type for
your nodes.
Best practice :
Use an accelerator-optimized machine type to improve performance and efficiency for AI/ML workloads.
Optionally, you can use the following flags:
--node-locations= COMPUTE_ZONES : The comma-separated
list of one or more zones where GKE creates the GPU nodes. The
zones must be in the same region as the cluster. Choose zones that have
available GPUs.
--enable-gvnic : This flag enables
gVNIC on the GPU node pools to increase network traffic
speed.
This command creates a node pool with the following configuration:
The --flex-start flag combined with the --enable-queued-provisioning flag
instructs GKE to create a node pool with flex-start with queued provisioning
enabled and to add the cloud.google.com/gke-queued taint to the node pool.
GKE enables queued provisioning and cluster autoscaling.
The node pool initially has zero nodes.
The --no-enable-autorepair flag disables automatic repairs, which could
disrupt workloads that run on repaired nodes.
Enable node auto-provisioning to create node pools for flex-start with queued provisioning
You can use node auto-provisioning to manage node pools for
flex-start with queued provisioning for clusters running version 1.29.2-gke.1553000 or
later. When you enable node auto-provisioning, GKE creates node
pools with the required resources for the associated workload.
To enable node auto-provisioning, consider the following settings and complete
the steps in
Configure GPU limits :
Specify the required resources for flex-start with queued provisioning when you enable
the feature. To list the available resourceTypes , run the gcloud compute
accelerator-types list command.
Use the --no-enable-autoprovisioning-autorepair flag to disable node
node auto-repair.
Let GKE automatically install
GPU drivers in auto-provisioned GPU nodes. For more information, see
Installing drivers using node auto-provisioning with GPUs .
Run your batch and AI workloads with flex-start with queued provisioning
To run batch workloads with flex-start with queued provisioning use any of the following
configurations:
Flex-start with queued provisioning for Jobs with Kueue : You can use
flex-start with queued provisioning with Kueue to automate the
lifecycle of the Provisioning Request requests. Kueue implements Job queueing
and observes the status of the flex-start with queued provisioning.
Kueue decides when Jobs should wait and when they should start, based on
quotas and a hierarchy for sharing resources fairly among teams.
Flex-start with queued provisioning for Jobs without Kueue : You
can use flex-start with queued provisioning without Kueue when you use your own internal
batch scheduling tools or platform. You manually create and cancel the
Provisioning Request.
Best practice :
Use Kueue to run your batch and AI workloads with flex-start with queued provisioning.
Flex-start with queued provisioning for Jobs with Kueue
The following sections show you how to configure the flex-start with queued provisioning
for Jobs with Kueue:
Flex-start with queued provisioning node pool setup.
Reservation and flex-start with queued provisioning node pool setup.
This section uses the samples in the dws-examples directory from the
ai-on-gke repository. We have published the samples in the dws-examples
directory under the Apache2 license.
You need to have administrator permissions to install Kueue. To gain them, make
sure you are granted the IAM role roles/container.admin . To
find out more about GKE IAM roles, see
Create IAM allow policies guide .
Prepare your environment
In Cloud Shell, run the following command:
git clone https://github.com/GoogleCloudPlatform/ai-on-gke
cd ai-on-gke/tutorials-and-examples/workflow-orchestration/dws-examples
Install the
latest Kueue version in your
cluster:
VERSION = KUEUE_VERSION
kubectl apply --server-side -f https://github.com/kubernetes-sigs/kueue/releases/download/ $VERSION /manifests.yaml
Replace KUEUE_VERSION with the latest Kueue version.
If you use Kueue in version earlier than 0.7.0 , change the Kueue feature gate
configuration by setting the ProvisioningACC feature gate to true . See
Kueue's feature gates
for more detailed explanation and default gate values. For more information
about Kueue installation, see
Installation .
Create the Kueue resources for the Dynamic Workload Scheduler node pool only setup
With the following manifest, you create a cluster-level queue named
dws-cluster-queue and the
LocalQueue namespace
named dws-local-queue . Jobs that refer to dws-cluster-queue queue in this
namespace use flex-start with queued provisioning to get the GPU resources.
apiVersion : kueue.x-k8s.io/v1beta1
kind : ResourceFlavor
metadata :
name : "default-flavor"
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : AdmissionCheck
metadata :
name : dws-prov
spec :
controllerName : kueue.x-k8s.io/provisioning-request
parameters :
apiGroup : kueue.x-k8s.io
kind : ProvisioningRequestConfig
name : dws-config
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : ProvisioningRequestConfig
metadata :
name : dws-config
spec :
provisioningClassName : queued-provisioning.gke.io
managedResources :
- nvidia.com/gpu
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : ClusterQueue
metadata :
name : "dws-cluster-queue"
spec :
namespaceSelector : {}
resourceGroups :
- coveredResources : [ "cpu" , "memory" , "nvidia.com/gpu" , "ephemeral-storage" ]
flavors :
- name : "default-flavor"
resources :
- name : "cpu"
nominalQuota : 1000000000 # "Infinite" quota
- name : "memory"
nominalQuota : 1000000000Gi # "Infinite" quota
- name : "nvidia.com/gpu"
nominalQuota : 1000000000 # "Infinite" quota
- name : "ephemeral-storage"
nominalQuota : 1000000000Ti # "Infinite" quota
admissionChecks :
- dws-prov
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : LocalQueue
metadata :
namespace : "default"
name : "dws-local-queue"
spec :
clusterQueue : "dws-cluster-queue"
---
apiVersion : monitoring.googleapis.com/v1
kind : PodMonitoring
metadata :
labels :
control-plane : controller-manager
name : controller-manager-metrics-monitor
namespace : kueue-system
spec :
endpoints :
- path : /metrics
port : 8080
scheme : http
interval : 30s
selector :
matchLabels :
control-plane : controller-manager
---
This cluster's queue has high quota limits and only the
flex-start with queued provisioning integration is enabled. For more information about Kueue
APIs and how to set up limits, see Kueue concepts .
Deploy the LocalQueue:
kubectl create -f ./dws-queues.yaml
The output is similar to the following:
resourceflavor.kueue.x-k8s.io/default-flavor created
admissioncheck.kueue.x-k8s.io/dws-prov created
provisioningrequestconfig.kueue.x-k8s.io/dws-config created
clusterqueue.kueue.x-k8s.io/dws-cluster-queue created
localqueue.kueue.x-k8s.io/dws-local-queue created
If you want to run Jobs that use flex-start with queued provisioning in other namespaces,
you can create additional LocalQueues using the preceding template.
Run your Job
In the following manifest, the sample Job uses flex-start with queued provisioning:
apiVersion : batch/v1
kind : Job
metadata :
name : sample-job
namespace : default
labels :
kueue.x-k8s.io/queue-name : dws-local-queue
annotations :
provreq.kueue.x-k8s.io/maxRunDurationSeconds : "600"
spec :
parallelism : 1
completions : 1
suspend : true
template :
spec :
nodeSelector :
cloud.google.com/gke-nodepool : NODEPOOL_NAME
tolerations :
- key : "nvidia.com/gpu"
operator : "Exists"
effect : "NoSchedule"
containers :
- name : dummy-job
image : gcr.io/k8s-staging-perf-tests/sleep:v0.0.3
args : [ "120s" ]
resources :
requests :
cpu : "100m"
memory : "100Mi"
nvidia.com/gpu : 1
limits :
cpu : "100m"
memory : "100Mi"
nvidia.com/gpu : 1
restartPolicy : Never
This manifest includes the following fields that are relevant for the
flex-start with queued provisioning configuration:
The kueue.x-k8s.io/queue-name: dws-local-queue label tells
GKE that Kueue is responsible for orchestrating that Job. This
label also defines the queue where the Job is queued.
The flag suspend: true tells GKE to create the Job resource
but to not schedule the Pods yet. Kueue changes that flag to false when
the nodes are ready for the Job execution.
nodeSelector tells GKE to schedule the
Job only on the specified node pool. The value should match
NODEPOOL_NAME , the name of the node pool with queued
provisioning enabled.
Run your Job:
kubectl create -f ./job.yaml
The output is similar to the following:
job.batch/sample-job created
Check the status of your Job:
kubectl describe job sample-job
The output is similar to the following:
Events:
Type Reason Age From Message
---- ------ ---- ---- -------
Normal Suspended 5m17s job-controller Job suspended
Normal CreatedWorkload 5m17s batch/job-kueue-controller Created Workload: default/job-sample-job-7f173
Normal Started 3m27s batch/job-kueue-controller Admitted by clusterQueue dws-cluster-queue
Normal SuccessfulCreate 3m27s job-controller Created pod: sample-job-9qsfd
Normal Resumed 3m27s job-controller Job resumed
Normal Completed 12s job-controller Job completed
The flex-start with queued provisioning with Kueue integration also supports other workload
types available in the open source ecosystem, like the following:
RayJob
JobSet v0.5.2 or later
Kubeflow MPIJob, TFJob, PyTorchJob.
Kubernetes Pods that are frequently used by workflow orchestrators
Flux mini cluster
For more information about this support, see
Kueue's batch user .
Create the Kueue resources for Reservation and Dynamic Workload Scheduler node pool setup
With the following manifest, you create two ResourceFlavors tied to two different node pools: reservation-nodepool and dws-nodepool . The name of these node pools are only exemplary names. Modify these names according to your node pool configuration.
Additionally, with the ClusterQueue configuration, incoming Jobs try to use reservation-nodepool , and if there is no capacity then these Jobs use Dynamic Workload Scheduler to get the GPU resources.
apiVersion : kueue.x-k8s.io/v1beta1
kind : ResourceFlavor
metadata :
name : "reservation"
spec :
nodeLabels :
cloud.google.com/gke-nodepool : "reservation-nodepool" # placeholder value
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : ResourceFlavor
metadata :
name : "dws"
spec :
nodeLabels :
cloud.google.com/gke-nodepool : "dws-nodepool" # placeholder value
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : ClusterQueue
metadata :
name : "cluster-queue"
spec :
namespaceSelector : {} # match all.
resourceGroups :
- coveredResources : [ "cpu" , "memory" , "nvidia.com/gpu" ]
flavors :
- name : "reservation" # first we try reservation
resources :
- name : "cpu"
nominalQuota : 9
- name : "memory"
nominalQuota : 36Gi
- name : "nvidia.com/gpu"
nominalQuota : 9
- name : "dws" # if reservation is saturated we try dws
resources :
- name : "cpu"
nominalQuota : 1000000000 # "Infinite" quota
- name : "memory"
nominalQuota : 1000000000Gi # "Infinite" quota
- name : "nvidia.com/gpu"
nominalQuota : 1000000000 # "Infinite" quota
admissionChecksStrategy :
admissionChecks :
- name : "dws-prov"
onFlavors : [ dws ]
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : LocalQueue
metadata :
namespace : "default"
name : "user-queue"
spec :
clusterQueue : "cluster-queue"
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : AdmissionCheck
metadata :
name : dws-prov
spec :
controllerName : kueue.x-k8s.io/provisioning-request
parameters :
apiGroup : kueue.x-k8s.io
kind : ProvisioningRequestConfig
name : dws-config
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : ProvisioningRequestConfig
metadata :
name : dws-config
spec :
provisioningClassName : queued-provisioning.gke.io
managedResources :
- nvidia.com/gpu
This cluster's queue has high quota limits and only the
flex-start with queued provisioning integration is enabled. For more information about Kueue
APIs and how to set up limits, see Kueue concepts .
Deploy the manifest using the following command:
kubectl create -f ./dws_and_reservation.yaml
The output is similar to the following:
resourceflavor.kueue.x-k8s.io/reservation created
resourceflavor.kueue.x-k8s.io/dws created
clusterqueue.kueue.x-k8s.io/cluster-queue created
localqueue.kueue.x-k8s.io/user-queue created
admissioncheck.kueue.x-k8s.io/dws-prov created
provisioningrequestconfig.kueue.x-k8s.io/dws-config created
Run your Job
Contrary to the preceding setup, this manifest does not include the
nodeSelector field because it's filled by Kueue, depending on the free capacity
in the ClusterQueue .
apiVersion : batch/v1
kind : Job
metadata :
generateName : sample-job-
namespace : default
labels :
kueue.x-k8s.io/queue-name : user-queue
annotations :
provreq.kueue.x-k8s.io/maxRunDurationSeconds : "600"
spec :
parallelism : 1
completions : 1
suspend : true
template :
spec :
tolerations :
- key : "nvidia.com/gpu"
operator : "Exists"
effect : "NoSchedule"
containers :
- name : dummy-job
image : gcr.io/k8s-staging-perf-tests/sleep:v0.0.3
args : [ "120s" ]
resources :
requests :
cpu : "100m"
memory : "100Mi"
nvidia.com/gpu : 1
limits :
cpu : "100m"
memory : "100Mi"
nvidia.com/gpu : 1
restartPolicy : Never
Run your Job:
kubectl create -f ./job-without-node-selector.yaml
The output is similar to the following:
job.batch/sample-job-v8xwm created
To identify which node pool your Job uses, you need to find out
what ResourceFlavor your Job uses .
Troubleshooting
For more information about Kueue's troubleshooting, see Troubleshooting Provisioning Request in Kueue .
Flex-start with queued provisioning for Jobs without Kueue
Define a ProvisioningRequest object
Create a request through the Provisioning Request for each Job.
Flex-start with queued provisioning doesn't start the Pods, it only provisions the nodes.
Create the following provisioning-request.yaml manifest:
Standard
apiVersion : v1
kind : PodTemplate
metadata :
name : POD_TEMPLATE_NAME
namespace : NAMESPACE_NAME
labels :
cloud.google.com/apply-warden-policies : "true"
template :
spec :
nodeSelector :
cloud.google.com/gke-nodepool : NODEPOOL_NAME
cloud.google.com/gke-flex-start : "true"
tolerations :
- key : "nvidia.com/gpu"
operator : "Exists"
effect : "NoSchedule"
containers :
- name : pi
image : perl
command : [ "/bin/sh" ]
resources :
limits :
cpu : "700m"
nvidia.com/gpu : 1
requests :
cpu : "700m"
nvidia.com/gpu : 1
restartPolicy : Never
---
apiVersion : autoscaling.x-k8s.io/ API_VERSION
kind : ProvisioningRequest
metadata :
name : PROVISIONING_REQUEST_NAME
namespace : NAMESPACE_NAME
spec :
provisioningClassName : queued-provisioning.gke.io
parameters :
maxRunDurationSeconds : " MAX_RUN_DURATION_SECONDS "
podSets :
- count : COUNT
podTemplateRef :
name : POD_TEMPLATE_NAME
Replace the following:
API_VERSION : The version of the API, either
v1 or v1beta1 . We recommend using v1 for stability and access to the latest
features.
NAMESPACE_NAME : The name of your Kubernetes namespace. The namespace must be the same as the namespace of the Pods.
PROVISIONING_REQUEST_NAME : The name of the ProvisioningRequest . You'll refer to this name in the Pod annotation.
MAX_RUN_DURATION_SECONDS : Optionally, the maximum
runtime of a node in seconds, up to the default of seven days. To learn
more, see How flex-start with queued provisioning works .
You can't change this value after
creation of the request. This field is available in GKE
version 1.28.5-gke.1355000 or later.
COUNT : Number of Pods requested. The nodes are scheduled atomically in one zone.
POD_TEMPLATE_NAME : The name of the PodTemplate .
NODEPOOL_NAME : The name you choose for the node pool. Remove if you want to use an auto-provisioned node pool.
GKE might apply validations and mutations to Pods during their creation.
The cloud.google.com/apply-warden-policies label allows GKE to apply the same validations and mutations to PodTemplate objects.
This label is necessary for GKE to calculate node resource requirements for your Pods.
Warning: The flex-start with queued provisioning integration supports only one PodSet
spec. If you want to mix different Pod templates, use the template that requests
the most resources. Mixing different machine types, such as VMs with different
GPU types, is not supported.
Node auto-provisioning
apiVersion : v1
kind : PodTemplate
metadata :
name : POD_TEMPLATE_NAME
namespace : NAMESPACE_NAME
labels :
cloud.google.com/apply-warden-policies : "true"
template :
spec :
nodeSelector :
cloud.google.com/gke-accelerator : GPU_TYPE
cloud.google.com/gke-flex-start : "true"
tolerations :
- key : "nvidia.com/gpu"
operator : "Exists"
effect : "NoSchedule"
containers :
- name : pi
image : perl
command : [ "/bin/sh" ]
resources :
limits :
cpu : "700m"
nvidia.com/gpu : 1
requests :
cpu : "700m"
nvidia.com/gpu : 1
restartPolicy : Never
---
apiVersion : autoscaling.x-k8s.io/ API_VERSION
kind : ProvisioningRequest
metadata :
name : PROVISIONING_REQUEST_NAME
namespace : NAMESPACE_NAME
spec :
provisioningClassName : queued-provisioning.gke.io
parameters :
maxRunDurationSeconds : " MAX_RUN_DURATION_SECONDS "
podSets :
- count : COUNT
podTemplateRef :
name : POD_TEMPLATE_NAME
Replace the following:
API_VERSION : The version of the API, either
v1 or v1beta1 . We recommend using v1 for stability and access to the latest
features.
NAMESPACE_NAME : The name of your Kubernetes namespace. The namespace must be the same as the namespace of the Pods.
PROVISIONING_REQUEST_NAME : The name of the ProvisioningRequest . You'll refer to this name in the Pod annotation.
MAX_RUN_DURATION_SECONDS : Optionally, the maximum
runtime of a node in seconds, up to the default of seven days. To learn
more, see How flex-start with queued provisioning works .
You can't change this value after
creation of the request. This field is available in GKE
version 1.28.5-gke.1355000 or later.
COUNT : Number of Pods requested. The nodes are scheduled atomically in one zone.
POD_TEMPLATE_NAME : The name of the PodTemplate .
GPU_TYPE : the type of GPU hardware.
GKE might apply validations and mutations to Pods during their creation.
The cloud.google.com/apply-warden-policies label allows GKE to apply the same validations and mutations to PodTemplate objects.
This label is necessary for GKE to calculate node resource requirements for your Pods.
Warning: The flex-start with queued provisioning integration supports only one PodSet
spec. If you want to mix different Pod templates, use the template that requests
the most resources, or use the IdenticalWorkloadSchedulingRequirements option in the podSetMergePolicy feature to merge Pod templates that have identical scheduling requirements. Mixing different machine types, such as VMs with different
GPU types, is not supported.
Apply the manifest:
kubectl apply -f provisioning-request.yaml
Configure the Pods
This section uses
Kubernetes Jobs to
configure the Pods. However, you can also use a Kubernetes
JobSet or any other framework
like Kubeflow, Ray, or custom controllers. In the
Job spec,
link the Pods to the
ProvisioningRequest using the following annotations:
apiVersion : batch/v1
kind : Job
spec :
template :
metadata :
annotations :
autoscaling.x-k8s.io/consume-provisioning-request : PROVISIONING_REQUEST_NAME
autoscaling.x-k8s.io/provisioning-class-name : "queued-provisioning.gke.io"
spec :
...
The Pod annotation key consume-provisioning-request defines which
ProvisioningRequest to consume. GKE uses the
consume-provisioning-request and provisioning-class-name annotations to do
the following:
To schedule the Pods only in the nodes provisioned by flex-start with queued provisioning.
To avoid double counting of resource requests between Pods and
flex-start with queued provisioning in the cluster autoscaler.
To inject safe-to-evict: false annotation, to prevent the cluster autoscaler
from moving Pods between nodes and interrupting batch computations. You can
change this behavior by specifying safe-to-evict: true in the Pod
annotations.
Observe the status of a Provisioning Request
The status of a Provisioning Request defines if a Pod can be scheduled or not.
You can use
Kubernetes watches
to observe changes efficiently or other tooling you already use for tracking
statuses of Kubernetes objects. The following table describes the possible status of
a Provisioning Request request and each possible outcome:
Provisioning Request status
Description
Possible outcome
Pending
The request was not seen and processed yet.
After processing, the request transitions to Accepted or Failed state.
Accepted=true
The request is accepted and is waiting for resources to be available.
The request should transition to Provisioned state, if resources were
found and nodes were provisioned or to Failed state if that was not possible.
Provisioned=true
The nodes are ready.
You
have 10 minutes to start the Pods to consume provisioned
resources. After this time, the cluster autoscaler considers the nodes as not
needed and removes them.
Failed=true
The nodes can't be provisioned due to
errors. Failed=true is a terminal state.
Troubleshoot
the condition based on the information in the Reason and
Message fields of the condition.
Create and retry a new Provisioning Request request.
Provisioned=false
The nodes haven't been provisioned yet.
If Reason=NotProvisioned , this is a temporary state before all resources are available.
If Reason=QuotaExceeded , troubleshoot the condition based on this reason and
the information in the Message field of the condition. You might need to request more quota. For more details, see Check if the Provisioning Request is limited by quota
section. This Reason is only available with GKE version 1.29.2-gke.1181000 or later.
If Reason=ResourcePoolExhausted , and the Message contains Expected time is indefinite , either select a different zone or region, or adjust the requested resources.
Start the Pods
When the Provisioning Request request reaches the Provisioned=true status, you can
run your Job
to start the Pods. This avoids proliferation of unschedulable Pods for pending
or failed requests, which can impact
kube-scheduler
and cluster autoscaler performance.
Alternatively, if you don't care about having unschedulable Pods, you can
create Pods in parallel with the Provisioning Request request.
Cancel the Provisioning Request request
To cancel the request before it's provisioned, you can delete the
ProvisioningRequest :
kubectl delete provreq PROVISIONING_REQUEST_NAME -n NAMESPACE
In most cases, deleting ProvisioningRequest stops nodes from being created.
However, depending on timing, for example if nodes were already
being provisioned, the nodes might still end up created. In these cases, the
cluster autoscaler removes the nodes after 10 minutes if no Pods are created.
Troubleshoot quota issues
All VMs provisioned by Provisioning Request requests use
preemptible quotas .
The number of ProvisioningRequests that are in Accepted state is limited by
a dedicated quota. You configure the quota for each project, one quota
configuration per region.
Check quota in the Google Cloud console
To check the name of the quota limit and current usage in the
Google Cloud console, follow these steps:
Go to the Quotas page in the Google Cloud console:
Go to Quotas
In the filter_list Filter box,
select the Metric property, enter active_resize_requests , and press
Enter.
The default value is 100. To increase the quota, follow the steps listed in
Request a quota adjustment .
Check if the Provisioning Request request is limited by quota
If your Provisioning Request request is taking longer than expected to be
fulfilled, check that the request isn't limited by quota. You might need to
request more quota.
For clusters running version 1.29.2-gke.1181000 or later, check whether specific
quota limitations are preventing your request from being fulfilled:
kubectl describe provreq PROVISIONING_REQUEST_NAME \
--namespace NAMESPACE
The output is similar the following:
…
Last Transition Time: 2024-01-03T13:56:08Z
Message: Quota 'NVIDIA_P4_GPUS' exceeded. Limit: 1.0 in region europe-west4.
Observed Generation: 1
Reason: QuotaExceeded
Status: False
Type: Provisioned
…
In this example, GKE can't deploy nodes because there isn't
enough quota in the region of europe-west4 .
Migrate node pools from queued provisioning to flex-start
The flex-start
consumption option creates Flex-start VMs.
To migrate existing node pools that were created by using the
--enable-queued-provisioning flag to use flex-start, do the following
steps:
Make sure that the node pool is empty:
kubectl get nodes -l cloud.google.com/gke-nodepool = NODEPOOL_NAME
If the command doesn't return any nodes, then you can update the node
pool to use Flex-start VMs.
If the command returns a list of nodes, you must first
migrate the workloads to another node pool .
Update the node pool to Flex-start VMs:
gcloud container node-pools update NODEPOOL_NAME \
--cluster = CLUSTER_NAME --flex-start
This operation does the following:
Update the node pool to a Flex-start VMs node pool.
Apply the pricing of nodes that use Flex-start VMs.
All nodes on clusters running on 1.32.2-gke.1652000 or later, the minimum
version for nodes that use Flex-start VMs, use short-lived upgrades.
What's next
Learn more about GPUs in GKE .
Learn how to Deploy GPU workloads in Autopilot .
Learn how to run GPUs on Confidential GKE Nodes .
Learn how to run a small batch workload with GPUs and flex-start provisioning mode .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
