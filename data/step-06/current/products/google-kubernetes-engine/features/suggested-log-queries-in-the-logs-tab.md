---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.816Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Suggested log queries in the Logs tab"
feature_slug: "suggested-log-queries-in-the-logs-tab"
latest_feature_date: "2022-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster"
keywords:
  - "suggested"
  - "log"
  - "queries"
  - "logs"
  - "tab"
  - "cluster"
  - "includes"
  - "gke"
---

# Suggested log queries in the Logs tab

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The cluster Logs tab includes suggested queries for GKE logs.

## Extended Definition

The cluster Logs tab includes suggested queries for GKE logs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)

## Supporting Pages

### "Collect and view logs and metrics for Ray clusters on Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics)
- Source ID: `site-docs-reference-required-4`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following RayCluster manifests includes the env section for all Ray containers, in both headGroupSpec and workerGroupSpecs specs: Example snippet for a RayCluster manifest apiVersion : ray.io/v1 kind : RayCluster metadata : name : raycluster-structured spec : headGroupSpec : template : spec : containers : - name : ray-head image : rayproject/ray:2.54.0 # Replace with your desired Ray image ... other container settings env : - name : RAY LOGGING CONFIG ENCODING value : "JSON" - name : RAY BACKEND LOG JSON value : "1" workerGroupSpecs : - groupName : small-group replicas : 1 minReplicas : 1 maxReplicas : 5 template : spec : containers : - name : ray-worker image : rayproject/ray:2.54.0 # Replace with your desired Ray image ... other container settings env : - name : RAY LOGGING CONFIG ENCODING value : "JSON" - name : RAY BACKEND LOG JSON value : "1" Apply the updated RayCluster manifest: kubectl apply -f your-raycluster.yaml Queries for structured logs Query/filter name Expression All error logs for a specific Ray Job ID resource.type="k8s container" labels."k8s-pod/ray io/is-ray-node"="yes" severity=ERROR jsonPayload.job id=" YOUR JOB ID " Logs for a specific Ray worker process ID resource.type="k8s container" labels."k8s-pod/ray io/is-ray-node"="yes" jsonPayload.worker id=" YOUR WORKER ID " Error logs for a specific Task ID on a specific worker Pod resource.type="k8s container" resource.labels.pod name=" YOUR WORKER POD NAME " labels."k8s-pod/ray io/is-ray-node"="yes" severity=ERROR jsonPayload.task id=" YOUR TASK ID " Enable metrics collection for a Ray cluster You can enable metrics collection for Ray clusters with new or existing Autopilot or Standard GKE clusters.
- Go to Cloud Logging Open the query editor and paste your expression into the query editor Click Run query You can use the following example queries in the Logs Explorer: Query/filter name Expression All Ray logs resource.type="k8s container" labels."k8s-pod/ray io/is-ray-node"="yes" All Ray head logs resource.type="k8s container" labels."k8s-pod/ray io/node-type"="head" All logs in a Ray cluster resource.type="k8s container" labels."k8s-pod/ray io/cluster"=" RAY CLUSTER NAME " All driver logs from a Ray job resource.type="k8s container" jsonPayload.ray submission id=" RAY JOB SUBMISSION ID " All worker logs from a Ray job resource.type="k8s container" labels."k8s-pod/ray io/cluster"=" RAY CLUSTER NAME " labels."k8s-pod/ray io/node-type"="worker" jsonPayload.filename= "/tmp/ray/session latest/logs/worker-(. ).out" This query is for large-scale clusters where ray.init(log to driver=False) is set.
- This includes all logs produced by the Ray cluster header and worker nodes.
- To enable structured JSON output, complete the following steps: Enable log collection enabled for your Ray cluster Set the following environment variables within your Ray container specifications in the RayCluster YAML manifest: RAY LOGGING CONFIG ENCODING="JSON" : configures Ray application logs (Ray Core, actors, and tasks) to use structured JSON encoding.

### GKE audit logging information \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To find audit logs for GKE, use the following queries in the Logs Explorer: Query/filter name Expression Workload audit logs log id("cloudaudit.googleapis.com/activity") resource.type="k8s cluster" resource.labels.cluster name=" CLUSTER NAME " protoPayload.request.metadata.name=" WORKLOAD NAME " Node metadata update for node object resource.type="k8s cluster" log id("cloudaudit.googleapis.com/activity") protoPayload.methodName="io.k8s.core.v1.nodes.update" resource.labels.cluster name=" CLUSTER NAME " resource.labels.location=" LOCATION NAME " Changes to Role-Based Access Control, excluding automated system changes logName="projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" resource.type="k8s cluster" protoPayload.methodName:"io.k8s.authorization.rbac.v1" NOT protoPayload.authenticationInfo.principalEmail:"system" Changes to Role-Based Access Control roles, excluding automated system changes logName="projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" resource.type="k8s cluster" protoPayload.methodName:"io.k8s.authorization.rbac.v1.roles" NOT protoPayload.authenticationInfo.principalEmail:"system" Changes to Role-Based Access Control role bindings, excluding automated system changes logName="projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" resource.type="k8s cluster" protoPayload.methodName:"io.k8s.authorization.rbac.v1.rolebindings" NOT protoPayload.authenticationInfo.principalEmail:"system" Certificate signing requests logName="projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" resource.type="k8s cluster" protoPayload.resourceName:"certificates.k8s.io/v1beta1/certificatesigningrequests" Unauthenticated web requests logName="projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" resource.type="k8s cluster" protoPayload.authenticationInfo.principalEmail:"system:anonymous" kubelet bootstrap identity calls logName="projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" resource.type="k8s cluster" protoPayload.authenticationInfo.principalEmail:"kubelet" Node authenticated requests logName="projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" resource.type="k8s cluster" protoPayload.authenticationInfo.principalEmail:"system:node" Calls outside an IP address range logName="projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" resource.type="k8s cluster" protoPayload.requestMetadata.callerIp!="127.0.0.1" protoPayload.requestMetadata.callerIp!="::1" NOT protoPayload.requestMetadata.callerIp:" IP ADDRESS PREFIX " Admin Activity audit log entries that apply to the k8s cluster resource type and describe creating a Deployment logName="projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" resource.type="k8s cluster" protoPayload.methodName:"deployments.create" Admin Activity audit log entries that apply to the k8s cluster resource type and have a principalEmail value of system:anonymous .
- These entries probably represent failed attempts to authenticate. logName="projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" resource.type="k8s cluster" protoPayload.authenticationInfo.principalEmail="system:anonymous" Admin Activity audit log entries that apply to the gke cluster resource type and have a severity value of ERROR . logName="projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" resource.type="gke cluster" severity="ERROR" Admin Activity audit log entries that apply to the k8s cluster resource type and describe a write request to a Secret. logName="projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" resource.type="k8s cluster" protoPayload.methodName:"io.k8s.core.v1.secrets" NOT protoPayload.methodName:"get" NOT protoPayload.methodName:"list" NOT protoPayload.methodName:"watch" Admin Activity audit log entries that apply to the k8s cluster resource type and describe a Pod request from a particular user. logName="projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" resource.type="k8s cluster" protoPayload.methodName:"io.k8s.core.v1.pods" protoPayload.authenticationInfo.principalEmail="dev@example.com" Route audit logs You can route audit logs to supported destinations in the same way that you can route other kinds of logs.
- To display all audit logs, enter either of the following queries into the query-editor field, and then click Run query : logName:"cloudaudit.googleapis.com" protoPayload."@type"="type.googleapis.com/google.cloud.audit.AuditLog" To display the audit logs for a specific resource and audit log type, in the Query builder pane, do the following: In Resource type , select the Google Cloud resource whose audit logs you want to see.
- The Private Logs Viewer role (roles/logging.privateLogViewer ) includes the permissions contained in roles/logging.viewer , plus the ability to read Data Access audit logs in the Default bucket.

### Harden your cluster's security \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- In addition to system and workload logs, all GKE clusters send the following audit logs to Logging: Kubernetes audit logs : a chronological record of calls that have been made to the Kubernetes API server.
- Go to Policy details Configure log collection Recommended : to reduce operational overhead and to maintain a consolidated view of your logs, implement a consistent logging strategy across your clusters.
- Cluster management The following sections provide recommendations for managing your clusters over time, such as upgrading, monitoring, and configuring logs.
- This default storage-layer encryption includes the database that stores the state of your cluster, which is based on either etcd or Spanner.

