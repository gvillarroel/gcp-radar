---
title: "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE) \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics
  title: "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\
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
Guides
Send feedback
Collect and view kube state metrics
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This page describes how to configure a Google Kubernetes Engine (GKE) cluster to
send a curated set of kube state, including metrics for Pods and
Deployments, Cloud Monitoring using Google Cloud Managed Service for Prometheus. This page
also describes how these metrics are formatted when they are written to
Monitoring, and how to query metrics.
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
Requirements
To collect kube state metrics, your GKE cluster must
meet the following requirements:
The cluster must be running the following versions based on the metric that
you want to enable:
To enable JobSet metrics package, your cluster must run
1.32.1-gke.1357001 or later. Starting with
version 1.32.1-gke.1357001, the JobSet metrics package
is enabled by default on newly created GKE
Standard and Autopilot clusters.
kube_jobset_restarts metric is available in 1.32 clusters starting from
1.32.4-gke.1767000 and in 1.33 clusters starting
from 1.33.0-gke.1868000.
To enable any other metric packages described in this page, your cluster
must run GKE 1.27.2-gke.1200 or later. Starting with
version 1.29.2-gke.2000 for GKE Standard clusters
and version 1.27.4-gke.900 for GKE Autopilot
clusters, the Kube state metrics package is enabled
by default.
The cluster must have
system metrics
enabled.
The cluster must have
Google Cloud Managed Service for Prometheus managed collection
enabled. Google Cloud Managed Service for Prometheus managed collection is enabled by
default for new clusters.
Warning: If you are running a self-deployed kube state metrics
package, you must stop collecting it before enabling managed
kube state metrics, otherwise you might end up with duplicate or
incorrect metrics.
Configure the collection of kube state metrics
You can enable kube state metrics using the Google Cloud console,
the gcloud CLI, or Terraform:
Console
You can enable kube state metrics from the
Observability tab for either a cluster or a Deployment
within a cluster. You can also preview the
available charts and metrics before you enable the metric package.
On the Observability tab for a cluster, you can filter the set of charts
for kube state metrics by the following two items:
Workloads State : includes the metrics for Pods,
Deployments, StatefulSets, DaemonSets, and HorizontalPodAutoscaler
resources.
Storage > Persistent : includes the metrics for Persistent
Volumes and Persistent Volume Claims.
You can enable either or both sets of metrics.
To enable kube state metrics from the Observability tab
for a cluster, do the following:
In the Google Cloud console, go to the Kubernetes clusters page:
Go to Kubernetes clusters
If you use the search bar to find this page, then select the result whose subheading is
Kubernetes Engine .
Click your cluster's name and then select the Observability
tab.
Select either Workloads State or
Storage > Persistent from the list of features.
Click Enable package .
If the kube state metrics package is already enabled, then you
see a set of charts for kube state metrics instead.
To enable kube state metrics from the Observability tab
for a Deployment, do the following:
In the Google Cloud console, go to the Workloads page:
Go to Workloads
If you use the search bar to find this page, then select the result whose subheading is
Kubernetes Engine .
Click the name of your Deployment and then select the Observability
tab.
Select Kube State from the list of features.
Click Enable package . The package is enabled for the entire
cluster.
If the kube state metrics package is already enabled, then you
see a set of charts for metrics from Pods, Deployments,
and Horizontal Pod Autoscalers.
To configure kube state metrics from the Details tab for the
cluster, do the following:
In the Google Cloud console, go to the Kubernetes clusters page:
Go to Kubernetes clusters
If you use the search bar to find this page, then select the result whose subheading is
Kubernetes Engine .
Click your cluster's name.
In the Features row labelled Cloud Monitoring ,
click the Edit icon.
In the Edit Cloud Monitoring dialog that appears, confirm that
Enable Cloud Monitoring is selected.
In the Components drop-down menu, select the
kube state components from which you want to collect metrics.
Click OK .
Click Save Changes .
gcloud
Update your cluster to collect metrics:
gcloud container clusters update CLUSTER_NAME \
--location = COMPUTE_LOCATION \
--enable-managed-prometheus \
--monitoring = SYSTEM,DAEMONSET,DEPLOYMENT,HPA,POD,STATEFULSET,STORAGE
Replace the following:
CLUSTER_NAME : the name of the existing cluster.
COMPUTE_LOCATION : the
Compute Engine location
of the cluster.
The set of values supplied to the monitoring flag overrides any previous
setting.
Terraform
To configure the collection of kube state metrics by using Terraform,
see the monitoring_config block in the
Terraform registry for google_container_cluster .
For general information about using Google Cloud with Terraform, see
Terraform with Google Cloud .
Note: kube state metrics does not collect metrics from system namespaces.
Quota
Kube state metrics consume the
Time series ingestion requests per minute quota of the Cloud Monitoring
API. Before enabling kube state metrics,
check your recent peak usage
of that quota. If you have many clusters in the same project or are already
approaching that quota limit, you can
request a quota limit increase
before enabling either observability package.
Pricing
Kube state metrics use
Google Cloud Managed Service for Prometheus to load
metrics into Cloud Monitoring. Cloud Monitoring charges for the ingestion
of these metrics are based on the number of samples ingested.
For more information, see
Cloud Monitoring pricing .
Metric format
All Kubernetes kube state metrics written to Cloud Monitoring
use the resource type
prometheus_target .
Each metric name is prefixed with
prometheus.googleapis.com/ and has a suffix indicating the
Prometheus metric type, such as /gauge , /histogram ,
or /counter . Otherwise, each metric name is
identical to the metric name exposed by open source Kubernetes.
Exporting from Cloud Monitoring
The kube state metrics can be exported from Cloud Monitoring by
using the Cloud Monitoring API .
Because all kube state metrics are ingested by using
Google Cloud Managed Service for Prometheus ,
kube state metrics can be queried
by using Prometheus Query Language (PromQL) . They can also be queried by
using by using Monitoring Query Language (MQL) .
Querying metrics
When you query kube state metrics, the name you use depends on
whether you are using PromQL or Cloud Monitoring-based features like
MQL or the Metrics Explorer
menu-driven interface .
The following tables of kube state metrics show two versions of
each metric name:
PromQL metric name : When
using PromQL in Cloud Monitoring pages
of the Google Cloud console or in PromQL fields of the
Cloud Monitoring API ,
use the PromQL metric name.
Cloud Monitoring metric name When using other
Cloud Monitoring features, use the Cloud Monitoring metric name
in the tables below. This name must be prefixed with
prometheus.googleapis.com/ , which has been omitted from the
entries in the table.
Storage metrics
The Cloud Monitoring metric names in this table must be prefixed with
prometheus.googleapis.com/ . That prefix has been omitted from the
entries in the table.
PromQL metric name
Cloud Monitoring metric name
Kind, Type, Unit
Monitored resources
Required GKE version
Description Labels
kube_persistentvolume_capacity_bytes
kube_persistentvolume_capacity_bytes/gauge
GAUGE , DOUBLE , By
prometheus_target
1.27.2-gke.1200
Persistentvolume capacity in bytes.
Sampled every 30 seconds.
persistentvolume : persistentvolume.
kube_persistentvolume_claim_ref
kube_persistentvolume_claim_ref/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
Information about the Persistent Volume Claim Reference.
Sampled every 30 seconds.
claim_name : claim_name.
name : name.
persistentvolume : persistentvolume.
kube_persistentvolume_info
kube_persistentvolume_info/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
Information about persistentvolume.
Sampled every 30 seconds.
csi_driver : csi_driver.
csi_volume_handle : csi_volume_handle.
local_fs : local_fs.
local_path : local_path.
persistentvolume : persistentvolume.
storageclass : storageclass.
kube_persistentvolume_status_phase
kube_persistentvolume_status_phase/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
The phase indicates if a volume is available, bound to a claim, or
released by a claim.
Sampled every 30 seconds.
persistentvolume : persistentvolume.
phase : phase.
kube_persistentvolumeclaim_info
kube_persistentvolumeclaim_info/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
Information about persistent volume claim.
Sampled every 30 seconds.
persistentvolumeclaim : persistentvolumeclaim.
storageclass : storageclass.
volumename : volumename.
kube_persistentvolumeclaim_resource_requests_storage_bytes
kube_persistentvolumeclaim_resource_requests_storage_bytes/gauge
GAUGE , DOUBLE , By
prometheus_target
1.27.2-gke.1200
The capacity of storage requested by the persistent volume claim.
Sampled every 30 seconds.
persistentvolumeclaim : persistentvolumeclaim.
kube_persistentvolumeclaim_status_phase
kube_persistentvolumeclaim_status_phase/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
The phase the persistent volume claim is currently in.
Sampled every 30 seconds.
persistentvolumeclaim : persistentvolumeclaim.
phase : phase.
For more information, see
PersistentVolume Metrics
and
PersistentVolumeClaim Metrics .
Pod metrics
A Pod is a group of one or more containers with a specification for how to
run the containers, which share storage and network resources.
Table of Pod metrics
The Pod metrics let you monitor and alert on the behavior of your Pods.
The following table shows the metrics available in the kube state
metrics package.
The Cloud Monitoring metric names in this table must be prefixed with
prometheus.googleapis.com/ . That prefix has been omitted from the
entries in the table.
PromQL metric name
Cloud Monitoring metric name
Kind, Type, Unit
Monitored resources
Required GKE version
Description Labels
kube_pod_container_status_ready
kube_pod_container_status_ready/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
Describes whether the containers readiness check succeeded.
Sampled every 30 seconds.
container : container.
pod : pod.
uid : uid.
kube_pod_container_status_waiting_reason
kube_pod_status_container_status_waiting_reason/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
Describes the reason the container is currently in waiting state.
Sampled every 30 seconds.
container : container.
pod : pod.
reason : reason.
uid : uid.
kube_pod_status_phase
kube_pod_status_phase/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
The pods current phase. Sampled every 30 seconds.
phase : phase.
pod : pod.
uid : uid.
kube_pod_status_unschedulable
kube_pod_status_unschedulable/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
Describes the unschedulable status for the pod.
Sampled every 30 seconds.
pod : pod.
uid : uid.
For more information, see
Pod Metrics .
Sample queries for Pod metrics
To determine if you have unschedulable Pods, use the following PromQL
expression:
sum(kube_pod_status_unschedulable{cluster=" CLUSTER ", namespace=" NAMESPACE "})
To alert on a number of unschedulable pods in a namespace, you can use the
following PromQL expression:
sum(kube_pod_status_unschedulable{cluster=" CLUSTER ", namespace=" NAMESPACE "}) > LIMIT
You can use the kube_pod_container_status_waiting_reason metric to create
an alert for a container stuck in a specific waiting state by using a PromQL
expression like the following:
max_over_time(kube_pod_container_status_waiting_reason{reason=" REASON ", cluster=" CLUSTER ", namespace=" NAMESPACE "}[5m]) >= 1
The value of REASON specifies the container's waiting state,
for example:
CrashLoopBackOff
ImagePullBackOff
ContainerCreating
To create an alert for a container stuck in any of the waiting states, use
the following PromQL expression:
max_over_time(kube_pod_container_status_waiting_reason{cluster=" CLUSTER ", namespace=" NAMESPACE "}[5m]) >= 1
To determine how many containers are failing readiness checks, use the
following PromQL expression
sum(kube_pod_container_status_ready) by (pod, container) == 0
Some of the query and alert expressions in this
section were adapted from the
kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.
Interactive playbooks
Kube state metrics are also used in the GKE
interactive playbooks for troubleshooting unschedulable or crashlooping
Pods. For more information about these failure modes, see the following
troubleshooting documents:
Crashlooping Pods
Unschedulable Pods
Without the kube state metrics package enabled, the primary way to
detect pod-scheduling issues is to query "Failed Scheduling" log events. After
you enable the kube state metrics package, you can use the
kube_pod_status_unschedulable metric, which serves the same purpose but
is easier to aggregate and chart. By using the metric, you can see how many
Pods are unschedulable and when the problem started.
Similarly, the GKE system metric
kubernetes.io/container/restart_count
can help you detect crashlooping Pods. The
kube_pod_container_status_waiting_reason metric also enumerates crashlooping
Pods, and it also lets you determine if Pods are stuck in waiting states other
than CrashLookBackOff , like ImagePullBackOff and ContainerCreating .
To explore the interactive playbooks, do the following:
In the Google Cloud console, go to the dashboard Dashboards page:
Go to Dashboards
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
Filter the dashboard list by clicking the
G​C​P category.
Click the name of a "GKE Interactive Playbook" dashboard in the list.
Deployment metrics
A Deployment is a controller that updates the state of resources like Pods,
to manage events like rollouts and turndowns.
Table of Deployment metrics
The Deployment metrics let you monitor and alert on the behavior
of the controller. The following table shows the metrics available in the
kube state metrics package:
The Cloud Monitoring metric names in this table must be prefixed with
prometheus.googleapis.com/ . That prefix has been omitted from the
entries in the table.
PromQL metric name
Cloud Monitoring metric name
Kind, Type, Unit
Monitored resources
Required GKE version
Description Labels
kube_deployment_spec_replicas
kube_deployment_spec_replicas/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
Number of desired pods for a deployment. Sampled every 30 seconds.
deployment : deployment.
kube_deployment_status_replicas_available
kube_deployment_status_replicas_available/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
The number of available replicas per deployment. Sampled every 30 seconds.
deployment : deployment.
kube_deployment_status_replicas_updated
kube_deployment_status_replicas_updated/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
The number of updated replicas per deployment. Sampled every 30 seconds.
deployment : deployment.
For more information, see
Deployment Metrics .
Sample queries for Deployment metrics
You can create charts and alerting policies for individual Deployments
by filtering Deployment metrics by cluster, namespace, and the name of the
Deployment.
For example, to compare the number of available replicas to the
expected number of replicas in a single Deployment, you can use the following
PromQL queries to plot both metrics on a single chart:
kube_deployment_spec_replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", deployment= DEPLOYMENT "}
and
kube_deployment_status_replicas_available{cluster=" CLUSTER ", namespace=" NAMESPACE ", deployment= DEPLOYMENT "}
To alert on a failed or stalled Deployment, you can use the following
PromQL expression:
(
kube_deployment_spec_replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", deployment=" DEPLOYMENT "}
>
kube_deployment_status_replicas_available{cluster=" CLUSTER ", namespace=" NAMESPACE ", deployment=" DEPLOYMENT "}
) and (
changes(kube_deployment_status_replicas_updated{cluster=" CLUSTER ", namespace=" NAMESPACE ", deployment=" DEPLOYMENT "}[10m])
==
0
)
Some of the query and alert expressions in this
section were adapted from the
kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.
StatefulSet metrics
A StatefulSet is a controller that manages the deployment and scaling of a
set of Pods for stateful applications. This controller manages the
the ordering and uniqueness of Pods.
Table of StatefulSet metrics
The StatefulSet metrics let you monitor and alert on the behavior
of the controller. The following table shows the metrics available in the
kube state metrics package:
The Cloud Monitoring metric names in this table must be prefixed with
prometheus.googleapis.com/ . That prefix has been omitted from the
entries in the table.
PromQL metric name
Cloud Monitoring metric name
Kind, Type, Unit
Monitored resources
Required GKE version
Description Labels
kube_statefulset_replicas
kube_statefulset_replicas/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
Number of desired pods for a StatefulSet. Sampled every 30 seconds.
statefulset : statefulset.
kube_statefulset_status_replicas_ready
kube_statefulset_status_replicas_ready/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
The number of ready replicas per StatefulSet. Sampled every 30 seconds.
statefulset : statefulset.
kube_statefulset_status_replicas_updated
kube_statefulset_status_replicas_updated/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
The number of updated replicas per StatefulSet. Sampled every 30 seconds.
statefulset : statefulset.
For more information, see
StatefulSet Metrics .
Sample queries for StatefulSet metrics
You can create charts and alerting policies for individual StatefulSets
by filtering statefulset metrics by cluster, namespace, and the name of the
StatefulSet.
For example, to compare the number of available replicas to the
expected number of replicas in a single StatefulSet, you can use the following
PromQL queries to plot both metrics on a single chart:
kube_statefulset_replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", statefulset=" STATEFULSET "}
and
kube_statefulset_status_replicas_ready{cluster=" CLUSTER ", namespace=" NAMESPACE ", statefulset=" STATEFULSET "}
To alert on a failed or stalled StatefulSet rollout, you can use the following
PromQL expression:
(
kube_statefulset_replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", statefulset=" STATEFULSET "}
>
kube_statefulset_status_replicas_ready{cluster=" CLUSTER ", namespace=" NAMESPACE ", statefulset=" STATEFULSET "}
) and (
changes(kube_statefulset_status_replicas_updated{cluster=" CLUSTER ", namespace=" NAMESPACE ", statefulset=" STATEFULSET "}[10m])
==
0
)
Some of the query and alert expressions in this
section were adapted from the
kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.
DaemonSet metrics
A DaemonSet is a controller that ensures that some set of Nodes runs a copy
of a Pod. For example, as Nodes are added to a cluster, the DaemonSet adds
Pods to the Nodes. This controller is useful for ensuring that certain
processes run on every node.
Table of DaemonSet metrics
The DaemonSet metrics let you monitor and alert on the behavior
of the controller. The following table shows the metrics available in the
kube state metrics package:
The Cloud Monitoring metric names in this table must be prefixed with
prometheus.googleapis.com/ . That prefix has been omitted from the
entries in the table.
PromQL metric name
Cloud Monitoring metric name
Kind, Type, Unit
Monitored resources
Required GKE version
Description Labels
kube_daemonset_status_desired_number_scheduled
kube_daemonset_status_desired_number_scheduled/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
The number of nodes that should be running the daemon pod.
Sampled every 30 seconds.
daemonset : daemonset.
kube_daemonset_status_number_misscheduled
kube_daemonset_status_number_misscheduled/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
The number of nodes running a daemon pod but are not supposed to. Sampled every 30 seconds.
daemonset : daemonset.
kube_daemonset_status_number_ready
kube_daemonset_status_number_ready/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
The number of nodes that should be running the daemon pod and have
one or more of the daemon pod running and ready. Sampled every 30 seconds.
daemonset : daemonset.
kube_daemonset_status_updated_number_scheduled
kube_daemonset_status_updated_number_scheduled/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
The number of nodes that are running updated daemon pod.
Sampled every 30 seconds.
daemonset : daemonset.
For more information, see
DaemonSet Metrics .
Sample queries for DaemonSet metrics
You can create charts and alerting policies for individual DaemonSets
by filtering daemonset metrics by cluster, namespace, and the name of the
DaemonSet.
For example, to compare the number of available replicas to the
expected number of replicas in a single DaemonSet, you can use the following
PromQL queries to plot both metrics on a single chart:
kube_daemonset_status_updated_number_scheduled{cluster=" CLUSTER ", namespace=" NAMESPACE ", daemonsetset= DAEMONSET "}
and
kube_daemonset_status_desired_number_scheduled{cluster=" CLUSTER ", namespace=" NAMESPACE ", daemonset= DAEMONSET "}
To alert on a failed or stalled DaemonSet rollout, you can use the following
PromQL expression:
(
(
kube_daemonset_status_number_misscheduled{cluster=" CLUSTER ", namespace=" NAMESPACE ", daemonset=" DAEMONSET "}
!=
0
) or (
kube_daemonset_status_updated_number_scheduled{cluster=" CLUSTER ", namespace=" NAMESPACE ", daemonset=" DAEMONSET "}
!=
kube_daemonset_status_desired_number_scheduled{cluster=" CLUSTER ", namespace=" NAMESPACE ", daemonset=" DAEMONSET "}
)
) and (
changes(kube_daemonset_status_updated_number_scheduled{cluster=" CLUSTER ", namespace=" NAMESPACE ", daemonset=" DAEMONSET "}[5m])
==
0
)
Some of the query and alert expressions in this
section were adapted from the
kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.
HorizontalPodAutoscaler metrics
A HorizontalPodAutoscaler (HPA) is a controller that periodically changes
the number of pods in a workload, such as a Deployment or StatefulSet,
in response to some metric like CPU or memory utilization. Changing the number
of pods available to a workload keeps the workload responsive but efficient.
For more information about HPAs, see Viewing details about a Horizontal Pod
Autoscaler .
Table of HPA metrics
The HorizontalPodAutoscaler metrics let you monitor and alert on the behavior
of the controller. The following table shows the metrics available in the
kube state metrics package:
The Cloud Monitoring metric names in this table must be prefixed with
prometheus.googleapis.com/ . That prefix has been omitted from the
entries in the table.
PromQL metric name
Cloud Monitoring metric name
Kind, Type, Unit
Monitored resources
Required GKE version
Description Labels
kube_horizontalpodautoscaler_spec_max_replicas
kube_horizontalpodautoscaler_spec_max_replicas/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
Upper limit for the number of pods that can be set by the autoscaler,
cannot be smaller than MinReplicas.
Sampled every 30 seconds.
horizontalpodautoscaler : horizontalpodautoscaler.
kube_horizontalpodautoscaler_spec_min_replicas
kube_horizontalpodautoscaler_spec_min_replicas/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
Lower limit for the number of pods that can be set by the autoscaler,
default 1.
Sampled every 30 seconds.
horizontalpodautoscaler : horizontalpodautoscaler.
kube_horizontalpodautoscaler_spec_target_metric
kube_horizontalpodautoscaler_spec_target_metric/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
The metric specifications used by this autoscaler when calculating the
desired replica count.
Sampled every 30 seconds.
horizontalpodautoscaler : horizontalpodautoscaler.
metric_name : metric_name.
metric_target_type : metric_target_type.
kube_horizontalpodautoscaler_status_condition
kube_horizontalpodautoscaler_status_condition/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
The condition of this autoscaler.
Sampled every 30 seconds.
condition : condition.
horizontalpodautoscaler : horizontalpodautoscaler.
namespace : namespace.
status : status.
kube_horizontalpodautoscaler_status_current_replicas
kube_horizontalpodautoscaler_status_status_current_replicas/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
Current number of replicas of pods managed by this autoscaler.
Sampled every 30 seconds.
horizontalpodautoscaler : horizontalpodautoscaler.
kube_horizontalpodautoscaler_status_desired_replicas
kube_horizontalpodautoscaler_status_desired_replicas/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.27.2-gke.1200
Desired number of replicas of pods managed by this autoscaler.
Sampled every 30 seconds.
horizontalpodautoscaler : horizontalpodautoscaler.
For more information, see
Horizontal Pod Autoscaler Metrics .
Sample queries for HPA metrics
For example, to determine if the HPA is approaching the maximum number of
replicas, you can plot the following ratio:
kube_horizontalpodautoscaler_status_current_replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", horizontalpodautoscaler=" HPA "} /
kube_horizontalpodautoscaler_spec_max_replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", horizontalpodautoscaler=" HPA "}
When the HPA is running with the maximum number of replicas, you might want to
increase the spec for maximum number of pods. You can use the following
PromQL expression to create an alert to notify you of this case:
kube_horizontalpodautoscaler_status_current_replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", horizontalpodautoscaler=" HPA "}
==
kube_horizontalpodautoscaler_spec_max_replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", horizontalpodautoscaler=" HPA "}
You can also compare the values of the
kube_horizontalpodautoscaler_status_current_replicas
and the kube_horizontalpodautoscaler_status_desired_replicas metrics
to determine if there is a difference between the current and needed
number of replicas. A difference might may indicate a resource constraint
in the cluster. The following PromQL expression looks for differences
between the current number of replicas and the needed, minimum, and maximum
numbers of replicas, as well as changes in the current number of replicas:
(kube_horizontalpodautoscaler_status_desired_replicas{job="kube-state-metrics", namespace=~" NAMESPACE "}
!=
kube_horizontalpodautoscaler_status_current_replicas{job="kube-state-metrics", namespace=~" NAMESPACE "})
and
(kube_horizontalpodautoscaler_status_current_replicas{job="kube-state-metrics", namespace=~" NAMESPACE "}
>
kube_horizontalpodautoscaler_spec_min_replicas{job="kube-state-metrics", namespace=~" NAMESPACE "})
and
(kube_horizontalpodautoscaler_status_current_replicas{job="kube-state-metrics", namespace=~" NAMESPACE "}
NAMESPACE "})
and
changes(kube_horizontalpodautoscaler_status_current_replicas{job="kube-state-metrics", namespace=~" NAMESPACE "}[15m]) == 0
The condition and status labels on the
kube_horizontalpodautoscaler_status_condition metric can also help you
detect when HPAs run into various failure modes. For example:
The condition ScalingLimited and status of true indicates that the HPA
is bound by either its minimum or maximum replica count:
kube_horizontalpodautoscaler_status_condition{status="true", condition="ScalingLimited"} == 1
The condition AbleToScale and a status of false indicates that the HPA
is encountering issues fetching or updating scales:
kube_horizontalpodautoscaler_status_condition{status="false", condition="AbleToScale"} == 1
The condition ScalingActive and a status of false indicates that the HPA
is disabled or is unable to calculate a new scale:
kube_horizontalpodautoscaler_status_condition{status="false", condition="ScalingActive"} == 1
Some of the query and alert expressions in this
section were adapted from the
kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.
JobSet metrics
A Jobset is a workload API that lets you manage a group of Kubernetes Jobs as a unit. The most common use case for a JobSet is distributed training, but you can also use it to run batch workloads.
For more information about JobSets, see JobSet
Documentation .
Table of JobSet metrics
The JobSet metrics let you monitor and alert on the behavior of your JobSets.
The following table shows the metrics that are available in the
kube state metrics package:
The Cloud Monitoring metric names in this table must be prefixed with
prometheus.googleapis.com/ . That prefix has been omitted from the
entries in the table.
PromQL metric name
Cloud Monitoring metric name
Kind, Type, Unit
Monitored resources
Required GKE version
Description Labels
kube_jobset_specified_replicas
kube_jobset_specified_replicas/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.32.1-gke.1357001
The number of specified replicas per replicated Jobs in a JobSet.
Sampled every 30 seconds.
jobset_name : jobset_name.
replicated_job_name : replicated_job_name.
kube_jobset_ready_replicas
kube_jobset_ready_replicas/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.32.1-gke.1357001
The number of replicas in a 'READY' state per replicated Jobs in a JobSet.
Sampled every 30 seconds.
jobset_name : jobset_name.
replicated_job_name : replicated_job_name.
kube_jobset_succeeded_replicas
kube_jobset_succeeded_replicas/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.32.1-gke.1357001
The number of replicas in a 'SUCCEEDED' state per replicated Jobs in a JobSet.
Sampled every 30 seconds.
jobset_name : jobset_name.
replicated_job_name : replicated_job_name.
kube_jobset_failed_replicas
kube_jobset_failed_replicas/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.32.1-gke.1357001
The number of replicas in a 'FAILED' state per replicated Jobs in a JobSet.
Sampled every 30 seconds.
jobset_name : jobset_name.
replicated_job_name : replicated_job_name.
kube_jobset_active_replicas
kube_jobset_active_replicas/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.32.1-gke.1357001
The number of replicas in a 'ACTIVE' state per replicated Jobs in a JobSet.
Sampled every 30 seconds.
jobset_name : jobset_name.
replicated_job_name : replicated_job_name.
kube_jobset_suspended_replicas
kube_jobset_suspended_replicas/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.32.1-gke.1357001
The number of replicas in a 'SUSPENDED' state per replicated Jobs in a JobSet.
Sampled every 30 seconds.
jobset_name : jobset_name.
replicated_job_name : replicated_job_name.
kube_jobset_status_condition
kube_jobset_status_condition/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.32.1-gke.1357001
The current status conditions of a JobSet.
Sampled every 30 seconds.
jobset_name : jobset_name.
condition : condition.
kube_jobset_restarts
kube_jobset_restarts/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.32.4-gke.1767000
1.33.0-gke.1868000
The number of JobSet restarts.
Sampled every 30 seconds.
jobset_name : jobset_name.
Sample queries for JobSet metrics
You can create charts and alerting policies for individual JobSets
by filtering JobSet metrics by cluster, namespace, and the name of the
JobSet.
For example, to compare the number of replicas in a READY state to the
expected number of replicas in a single JobSet, plot both metrics on a
single chart by using the following PromQL queries:
kube_jobset_specified_replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset_name=" JOBSET_NAME "}
and
kube_jobset_ready_replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset_name=" JOBSET_NAME "}
To alert on a failed or unavailable JobSet rollout, you can use the following
PromQL expression:
kube_jobset_specified_replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset_name=" JOBSET_NAME "}
>
kube_jobset_ready_replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset_name=" JOBSET_NAME "}
The condition label on the kube_jobset_status_condition metric can also
help you detect when JobSets run into various failure modes, for example:
The Failed condition indicates that the JobSet failed its execution:
kube_jobset_status_condition{jobset_name=" JOBSET_NAME , condition="Failed"} == 1
The Suspended condition indicates that the JobSet is suspended:
kube_jobset_status_condition{jobset_name=" JOBSET_NAME , condition="Suspended"} == 1
Some of the query and alert expressions in this
section were adapted from the
kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.
What's next
Learn how to configure metrics collection .
Learn how to collect and view cAdvisor/Kubelet metrics .
Learn how to collect and view control plane metrics .
Learn how to view observability metrics .
Learn how to use application performance metrics .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
