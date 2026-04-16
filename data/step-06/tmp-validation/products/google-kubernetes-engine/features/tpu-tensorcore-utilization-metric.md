---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.242Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "TPU TensorCore utilization metric"
feature_slug: "tpu-tensorcore-utilization-metric"
latest_feature_date: "2023-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale"
keywords:
  - "tensorcore"
  - "utilization"
  - "usage"
  - "metric"
  - "adds"
---

# TPU TensorCore utilization metric

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE adds a TPU usage metric for TensorCore utilization.

## Extended Definition

GKE adds a TPU usage metric for TensorCore utilization.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale)

## Supporting Pages

### "Optimize Pod autoscaling based on metrics \_|\_ Kubernetes Engine \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics)
- Source ID: `site-docs-reference-required-5`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- For example, to chart the CPU utilization of a virtual machine, do the following: (Optional) To reduce the menu's options, enter part of the metric name in the Filter bar .
- In the Active metrics menu, select CPU utilization and then click Apply .
- Workload Identity apiVersion : apps/v1 kind : Deployment metadata : name : pubsub spec : selector : matchLabels : app : pubsub template : metadata : labels : app : pubsub spec : serviceAccountName : pubsub-sa containers : - name : subscriber image : us-docker.pkg.dev/google-samples/containers/gke/pubsub-sample:v2 Legacy authentication apiVersion : apps/v1 kind : Deployment metadata : name : pubsub spec : selector : matchLabels : app : pubsub template : metadata : labels : app : pubsub spec : volumes : - name : google-cloud-key secret : secretName : pubsub-key containers : - name : subscriber image : us-docker.pkg.dev/google-samples/containers/gke/pubsub-sample:v2 volumeMounts : - name : google-cloud-key mountPath : /var/secrets/google env : - name : GOOGLE APPLICATION CREDENTIALS value : /var/secrets/google/key.json Custom Metric apiVersion : apps/v1 kind : Deployment metadata : labels : run : custom-metrics-gmp name : custom-metrics-gmp namespace : default spec : replicas : 1 selector : matchLabels : run : custom-metrics-gmp template : metadata : labels : run : custom-metrics-gmp spec : containers : sample container generating custom metrics - name : prometheus-dummy-exporter image : us-docker.pkg.dev/google-samples/containers/gke/prometheus-dummy-exporter:v0.2.0 command : [ "./prometheus-dummy-exporter" ] args : - --metric-name=custom prometheus - --metric-value=40 - --port=8080 With the PodMonitoring resource , the Google Cloud Managed Service for Prometheus exports the Prometheus metrics to Cloud Monitoring: apiVersion : monitoring.googleapis.com/v1 kind : PodMonitoring metadata : name : "custom-metrics-exporter" spec : selector : matchLabels : run : custom-metrics-gmp endpoints : - port : 8080 path : /metrics interval : 15s Starting in GKE Standard version 1.27 or GKE Autopilot version 1.25, Google Cloud Managed Service for Prometheus is enabled.
- Allow this service account to read Cloud Monitoring metrics by assigning the Monitoring Viewer role: gcloud projects add-iam-policy-binding projects/ $PROJECT ID \ --role roles/monitoring.viewer \ --member = principal://iam.googleapis.com/projects/ $PROJECT NUMBER /locations/global/workloadIdentityPools/ $PROJECT ID .svc.id.goog/subject/ns/custom-metrics/sa/custom-metrics-stackdriver-adapter Legacy Authentication Grant your user the ability to create required authorization roles: kubectl create clusterrolebinding cluster-admin-binding \ --clusterrole cluster-admin --user " $( gcloud config get-value account ) " Deploy the custom metrics adapter on your cluster: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/k8s-stackdriver/master/custom-metrics-stackdriver-adapter/deploy/production/adapter new resource model.yaml Deploying an application with metrics Download the repository containing the application code for this tutorial: Pub/Sub git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git cd kubernetes-engine-samples/databases/cloud-pubsub Custom Metric git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git cd kubernetes-engine-samples/observability/custom-metrics-autoscaling/google-managed-prometheus The repository contains code that exports metrics to Cloud Monitoring: Pub/Sub This application polls a Pub/Sub subscription for new messages, acknowledging them as they arrive.

### "Reducing costs by scaling down GKE clusters during off-peak hours \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours)
- Source ID: `site-docs-reference-required-5`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Clone the kubernetes-engine-samples GitHub repository: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples/ cd kubernetes-engine-samples/cost-optimization/gke-scheduled-autoscaler The code in this example is structured into the following folders: Root: Contains the code that's used by the CronJobs to export custom metrics to Cloud Monitoring. k8s/ : Contains a deployment example that has a Kubernetes HPA. k8s/scheduled-autoscaler/ : Contains the CronJobs that export a custom metric and an updated version of the HPA to read from a custom metric. k8s/load-generator/ : Contains a Kubernetes Deployment that has an application to simulate hourly usage.
- The following listing shows the contents of the file. spec : maxReplicas : 20 minReplicas : 1 scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : php-apache metrics : - type : Resource resource : name : cpu target : type : Utilization averageUtilization : 60 - type : External external : metric : name : custom.googleapis.com scheduled autoscaler example target : type : AverageValue averageValue : 1 This configuration specifies that the HPA object should replace the HPA that was deployed earlier.
- The following listing shows the content of the file. spec : maxReplicas : 20 minReplicas : 10 scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : php-apache metrics : - type : Resource resource : name : cpu target : type : Utilization averageUtilization : 60 Notice that the minimum number of replicas ( minReplicas ) is set to 10.
- By using a script that generates traffic in this way, you can understand what happens when you combine CPU utilization and custom metrics in your HPA configuration.

### "Right-size your GKE workloads at scale \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale)
- Source ID: `site-docs-reference-required-5`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- METRIC WINDOW : establishes the timeframe for GKE usage and utilization metrics.
- CPU and memory workload recommendations : recommendations for how much CPU and memory should be allocated to the workload to ensure that it runs smoothly, based on VPA recommendations for Deployments and on actual usage and target utilizations for non-Deployment objects.
- Memory requested and limit container recommendation Memory recommendations use the maximum VPA recommendation for Deployments objects only and the maximum memory usage with a target utilization of 80% to ensure the workloads reliability.
- When the CPU request and limit values are equal, the recommendation for CPU limit is set to the maximum CPU request VPA recommendation for Deployment objects only and the CPU usage with a target utilization of 70%.

