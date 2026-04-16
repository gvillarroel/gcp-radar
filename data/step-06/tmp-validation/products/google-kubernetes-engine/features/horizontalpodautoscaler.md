---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.285Z"
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
  - "observed"
  - "horizontalpodautoscaler"
  - "scaling"
  - "deprecated"
  - "workloads"
  - "metrics"
  - "based"
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
- Learn more about autoscaling workloads based on metrics .
- Pub/Sub apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : pubsub spec : minReplicas : 1 maxReplicas : 5 metrics : - external : metric : name : pubsub.googleapis.com subscription num undelivered messages selector : matchLabels : resource.labels.subscription id : echo-read target : type : AverageValue averageValue : 2 type : External scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : pubsub Custom Metric apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : custom-metrics-gmp-hpa namespace : default spec : scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : custom-metrics-gmp minReplicas : 1 maxReplicas : 5 metrics : - type : Pods pods : metric : name : prometheus.googleapis.com custom prometheus gauge target : type : AverageValue averageValue : 20 Deploy the HorizontalPodAutoscaler to your cluster: Pub/Sub kubectl apply -f deployment/pubsub-hpa.yaml Custom Metric kubectl apply -f custom-metrics-gmp-hpa.yaml Generating load For some metrics, you might need to generate load to watch the autoscaling: Pub/Sub Publish 200 messages to the Pub/Sub topic: for i in { 1 ..200 } ; do gcloud pubsub topics publish echo --message = "Autoscaling # ${ i } " ; done Custom Metric Not Applicable: The code used in this sample exports a constant value of 40 for the custom metric.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Optimize Pod autoscaling based on metrics Stay organized with collections Save and categorize content based on your preferences.
- In this tutorial, you can set up autoscaling based on one of the following metrics: Pub/Sub Pub/Sub backlog Scale based on an external metric reporting the number of unacknowledged messages remaining in a Pub/Sub subscription .

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- On the Observability tab for a cluster, you can filter the set of charts for kube state metrics by the following two items: Workloads State : includes the metrics for Pods, Deployments, StatefulSets, DaemonSets, and HorizontalPodAutoscaler resources.
- The following PromQL expression looks for differences between the current number of replicas and the needed, minimum, and maximum numbers of replicas, as well as changes in the current number of replicas: (kube horizontalpodautoscaler status desired replicas{job="kube-state-metrics", namespace= " NAMESPACE "} != kube horizontalpodautoscaler status current replicas{job="kube-state-metrics", namespace= " NAMESPACE "}) and (kube horizontalpodautoscaler status current replicas{job="kube-state-metrics", namespace= " NAMESPACE "} kube horizontalpodautoscaler spec min replicas{job="kube-state-metrics", namespace= " NAMESPACE "}) and (kube horizontalpodautoscaler status current replicas{job="kube-state-metrics", namespace= " NAMESPACE "} NAMESPACE "}) and changes(kube horizontalpodautoscaler status current replicas{job="kube-state-metrics", namespace= " NAMESPACE "}[15m]) == 0 The condition and status labels on the kube horizontalpodautoscaler status condition metric can also help you detect when HPAs run into various failure modes.
- For example: The condition ScalingLimited and status of true indicates that the HPA is bound by either its minimum or maximum replica count: kube horizontalpodautoscaler status condition{status="true", condition="ScalingLimited"} == 1 The condition AbleToScale and a status of false indicates that the HPA is encountering issues fetching or updating scales: kube horizontalpodautoscaler status condition{status="false", condition="AbleToScale"} == 1 The condition ScalingActive and a status of false indicates that the HPA is disabled or is unable to calculate a new scale: kube horizontalpodautoscaler status condition{status="false", condition="ScalingActive"} == 1 Some of the query and alert expressions in this section were adapted from the kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.
- You can use the following PromQL expression to create an alert to notify you of this case: kube horizontalpodautoscaler status current replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", horizontalpodautoscaler=" HPA "} == kube horizontalpodautoscaler spec max replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", horizontalpodautoscaler=" HPA "} You can also compare the values of the kube horizontalpodautoscaler status current replicas and the kube horizontalpodautoscaler status desired replicas metrics to determine if there is a difference between the current and needed number of replicas.

### "Run full-stack workloads at scale on GKE \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. --- apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : frontend spec : behavior : scaleUp : stabilizationWindowSeconds : 0 policies : - type : Percent value : 100 periodSeconds : 5 selectPolicy : Max scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : frontend minReplicas : 5 maxReplicas : 25 metrics : - type : External external : metric : name : loadbalancing.googleapis.com https request count selector : matchLabels : resource.labels.forwarding rule name : FORWARDING RULE NAME target : type : AverageValue averageValue : "5" This manifest uses the following fields: spec.scaleTargetRef : The Kubernetes resource to scale. spec.minReplicas : The minimum number of replicas, which is 5 in this sample. spec.maxReplicas : The maximum number of replicas, which is 25 in this sample. spec.metrics. : The metric to use.
- See the License for the specific language governing permissions and limitations under the License. --- apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : accounts-db-postgresql spec : behavior : scaleUp : stabilizationWindowSeconds : 0 policies : - type : Percent value : 100 periodSeconds : 5 selectPolicy : Max scaleTargetRef : apiVersion : apps/v1 kind : StatefulSet name : accounts-db-postgresql minReplicas : 1 maxReplicas : 5 metrics : - type : External external : metric : name : custom.googleapis.com mypgpool pgpool2 pool backend stats select cnt target : type : AverageValue averageValue : "15" This manifest does the following: Sets the maximum number of replicas during a scale-up to 5 .
- See the License for the specific language governing permissions and limitations under the License. --- apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : userservice spec : behavior : scaleUp : stabilizationWindowSeconds : 0 policies : - type : Percent value : 100 periodSeconds : 5 selectPolicy : Max scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : userservice minReplicas : 5 maxReplicas : 50 metrics : - type : Resource resource : name : cpu target : type : Utilization averageUtilization : 60 This manifest does the following: Sets the maximum number of replicas during a scale-up to 50 .
- Delete a Google Cloud project: gcloud projects delete PROJECT ID What's next Learn about vertical Pod autoscaling , which you can use to automatically adjust resource requests for long-running workloads with recommendations that are based on historical usage.

