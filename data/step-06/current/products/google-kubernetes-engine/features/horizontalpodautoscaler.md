---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.826Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "HorizontalPodAutoscaler"
feature_slug: "horizontalpodautoscaler"
latest_feature_date: "2022-09-14"
deprecation_date: "2022-09-14"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale"
keywords:
  - "horizontalpodautoscaler"
  - "kubernetes"
  - "scaling"
  - "workloads"
  - "based"
  - "observed"
  - "metrics"
  - "deprecated"
---

# HorizontalPodAutoscaler

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

HorizontalPodAutoscaler is a Kubernetes API for scaling workloads based on observed metrics; HorizontalPodAutoscaler is a Kubernetes API for scaling workloads based on observed metrics; deprecated on 2022-09-14.

## Extended Definition

HorizontalPodAutoscaler is a Kubernetes API for scaling workloads based on observed metrics; HorizontalPodAutoscaler is a Kubernetes API for scaling workloads based on observed metrics; deprecated on 2022-09-14.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale)

## Supporting Pages

### "Optimize Pod autoscaling based on metrics \_|\_ Kubernetes Engine \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics)
- Source ID: `site-docs-reference-required-5`
- Final score: 193
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Optimize Pod autoscaling based on metrics Stay organized with collections Save and categorize content based on your preferences.
- This tutorial demonstrates how to automatically scale your Google Kubernetes Engine (GKE) workloads based on metrics available in Cloud Monitoring .
- Learn more about autoscaling workloads based on metrics .
- Allow this service account to read Cloud Monitoring metrics by assigning the Monitoring Viewer role: gcloud projects add-iam-policy-binding projects/ $PROJECT ID \ --role roles/monitoring.viewer \ --member = principal://iam.googleapis.com/projects/ $PROJECT NUMBER /locations/global/workloadIdentityPools/ $PROJECT ID .svc.id.goog/subject/ns/custom-metrics/sa/custom-metrics-stackdriver-adapter Legacy Authentication Grant your user the ability to create required authorization roles: kubectl create clusterrolebinding cluster-admin-binding \ --clusterrole cluster-admin --user " $( gcloud config get-value account ) " Deploy the custom metrics adapter on your cluster: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/k8s-stackdriver/master/custom-metrics-stackdriver-adapter/deploy/production/adapter new resource model.yaml Deploying an application with metrics Download the repository containing the application code for this tutorial: Pub/Sub git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git cd kubernetes-engine-samples/databases/cloud-pubsub Custom Metric git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git cd kubernetes-engine-samples/observability/custom-metrics-autoscaling/google-managed-prometheus The repository contains code that exports metrics to Cloud Monitoring: Pub/Sub This application polls a Pub/Sub subscription for new messages, acknowledging them as they arrive.

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: The condition ScalingLimited and status of true indicates that the HPA is bound by either its minimum or maximum replica count: kube horizontalpodautoscaler status condition{status="true", condition="ScalingLimited"} == 1 The condition AbleToScale and a status of false indicates that the HPA is encountering issues fetching or updating scales: kube horizontalpodautoscaler status condition{status="false", condition="AbleToScale"} == 1 The condition ScalingActive and a status of false indicates that the HPA is disabled or is unable to calculate a new scale: kube horizontalpodautoscaler status condition{status="false", condition="ScalingActive"} == 1 Some of the query and alert expressions in this section were adapted from the kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.
- To enable kube state metrics from the Observability tab for a Deployment, do the following: In the Google Cloud console, go to the Workloads page: Go to Workloads If you use the search bar to find this page, then select the result whose subheading is Kubernetes Engine .
- On the Observability tab for a cluster, you can filter the set of charts for kube state metrics by the following two items: Workloads State : includes the metrics for Pods, Deployments, StatefulSets, DaemonSets, and HorizontalPodAutoscaler resources.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Collect and view kube state metrics Stay organized with collections Save and categorize content based on your preferences.

### "Run full-stack workloads at scale on GKE \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. --- apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : frontend spec : behavior : scaleUp : stabilizationWindowSeconds : 0 policies : - type : Percent value : 100 periodSeconds : 5 selectPolicy : Max scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : frontend minReplicas : 5 maxReplicas : 25 metrics : - type : External external : metric : name : loadbalancing.googleapis.com https request count selector : matchLabels : resource.labels.forwarding rule name : FORWARDING RULE NAME target : type : AverageValue averageValue : "5" This manifest uses the following fields: spec.scaleTargetRef : The Kubernetes resource to scale. spec.minReplicas : The minimum number of replicas, which is 5 in this sample. spec.maxReplicas : The maximum number of replicas, which is 25 in this sample. spec.metrics. : The metric to use.
- To automatically scale the number of Pods in the cluster based on resource metrics, you must implement Kubernetes horizontal Pod autoscaling .
- Deploy the adapter: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/k8s-stackdriver/master/custom-metrics-stackdriver-adapter/deploy/production/adapter.yaml Configure the adapter to use Workload Identity Federation for GKE to get metrics: Configure the IAM service account: gcloud projects add-iam-policy-binding PROJECT ID \ --member "serviceAccount:bank-of-anthos@ PROJECT ID .iam.gserviceaccount.com" \ --role roles/monitoring.viewer gcloud iam service-accounts add-iam-policy-binding bank-of-anthos@ PROJECT ID .iam.gserviceaccount.com \ --role roles/iam.workloadIdentityUser \ --member "serviceAccount: PROJECT ID .svc.id.goog[custom-metrics/custom-metrics-stackdriver-adapter]" Annotate the Kubernetes service account that the adapter uses: kubectl annotate serviceaccount custom-metrics-stackdriver-adapter \ --namespace = custom-metrics \ iam.gke.io/gcp-service-account = bank-of-anthos@ PROJECT ID .iam.gserviceaccount.com Restart the adapter Deployment to propagate the changes: kubectl rollout restart deployment custom-metrics-stackdriver-adapter \ --namespace = custom-metrics Configure autoscaling for the database When you deployed Bank of Anthos and PostgreSQL earlier in this tutorial,, you deployed the database as a StatefulSet with one primary read/write replica to handle all incoming SQL statements.
- See the License for the specific language governing permissions and limitations under the License. --- apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : accounts-db-postgresql spec : behavior : scaleUp : stabilizationWindowSeconds : 0 policies : - type : Percent value : 100 periodSeconds : 5 selectPolicy : Max scaleTargetRef : apiVersion : apps/v1 kind : StatefulSet name : accounts-db-postgresql minReplicas : 1 maxReplicas : 5 metrics : - type : External external : metric : name : custom.googleapis.com mypgpool pgpool2 pool backend stats select cnt target : type : AverageValue averageValue : "15" This manifest does the following: Sets the maximum number of replicas during a scale-up to 5 .

