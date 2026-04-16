---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.784Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE metrics packages"
feature_slug: "gke-metrics-packages"
latest_feature_date: "2023-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics"
keywords:
  - "gke"
  - "metrics"
  - "packages"
  - "exports"
  - "predefined"
  - "set"
  - "managed"
  - "kube"
---

# GKE metrics packages

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Exports a predefined set of GKE-managed kube-state-metrics metrics to Cloud Monitoring for workload state and persistent storage.

## Extended Definition

Exports a predefined set of GKE-managed kube-state-metrics metrics to Cloud Monitoring for workload state and persistent storage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics)

## Supporting Pages

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 175
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Autopilot Standard This page describes how to configure a Google Kubernetes Engine (GKE) cluster to send a curated set of kube state, including metrics for Pods and Deployments, Cloud Monitoring using Google Cloud Managed Service for Prometheus.
- Warning: If you are running a self-deployed kube state metrics package, you must stop collecting it before enabling managed kube state metrics, otherwise you might end up with duplicate or incorrect metrics.
- Because all kube state metrics are ingested by using Google Cloud Managed Service for Prometheus , kube state metrics can be queried by using Prometheus Query Language (PromQL) .
- Pricing Kube state metrics use Google Cloud Managed Service for Prometheus to load metrics into Cloud Monitoring.

### "Collect and view cAdvisor/Kubelet metrics \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 173
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Requirements To collect cAdvisor/Kubelet metrics, your GKE cluster must meet the following requirements: The cluster must be running GKE version 1.29.3-gke.1093000 or later. cAdvisor/Kubelet packages are enabled by default when you create a cluster running version 1.29.3-gke.1093000 or later.
- Click Save Changes . gcloud Update your cluster to collect metrics: gcloud container clusters update CLUSTER NAME \ --location = COMPUTE LOCATION \ --enable-managed-prometheus \ --monitoring = SYSTEM,CADVISOR,KUBELET Replace the following: CLUSTER NAME : the name of the existing cluster.
- Warning: If you are already ingesting cAdvisor/Kubelet metrics into Google Cloud Managed Service for Prometheus, then you must stop ingesting those metrics before enabling managed cAdvisor/Kubelet metrics, otherwise you might end up with duplicate or incorrect metrics.
- Autopilot Standard This page describes how to configure a Google Kubernetes Engine (GKE) cluster to send a curated set of cAdvisor/Kubelet metrics to Cloud Monitoring using Google Cloud Managed Service for Prometheus.

### "Optimize Pod autoscaling based on metrics \_|\_ Kubernetes Engine \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics)
- Source ID: `site-docs-reference-required-5`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Allow this service account to read Cloud Monitoring metrics by assigning the Monitoring Viewer role: gcloud projects add-iam-policy-binding projects/ $PROJECT ID \ --role roles/monitoring.viewer \ --member = principal://iam.googleapis.com/projects/ $PROJECT NUMBER /locations/global/workloadIdentityPools/ $PROJECT ID .svc.id.goog/subject/ns/custom-metrics/sa/custom-metrics-stackdriver-adapter Legacy Authentication Grant your user the ability to create required authorization roles: kubectl create clusterrolebinding cluster-admin-binding \ --clusterrole cluster-admin --user " $( gcloud config get-value account ) " Deploy the custom metrics adapter on your cluster: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/k8s-stackdriver/master/custom-metrics-stackdriver-adapter/deploy/production/adapter new resource model.yaml Deploying an application with metrics Download the repository containing the application code for this tutorial: Pub/Sub git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git cd kubernetes-engine-samples/databases/cloud-pubsub Custom Metric git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git cd kubernetes-engine-samples/observability/custom-metrics-autoscaling/google-managed-prometheus The repository contains code that exports metrics to Cloud Monitoring: Pub/Sub This application polls a Pub/Sub subscription for new messages, acknowledging them as they arrive.
- Workload Identity apiVersion : apps/v1 kind : Deployment metadata : name : pubsub spec : selector : matchLabels : app : pubsub template : metadata : labels : app : pubsub spec : serviceAccountName : pubsub-sa containers : - name : subscriber image : us-docker.pkg.dev/google-samples/containers/gke/pubsub-sample:v2 Legacy authentication apiVersion : apps/v1 kind : Deployment metadata : name : pubsub spec : selector : matchLabels : app : pubsub template : metadata : labels : app : pubsub spec : volumes : - name : google-cloud-key secret : secretName : pubsub-key containers : - name : subscriber image : us-docker.pkg.dev/google-samples/containers/gke/pubsub-sample:v2 volumeMounts : - name : google-cloud-key mountPath : /var/secrets/google env : - name : GOOGLE APPLICATION CREDENTIALS value : /var/secrets/google/key.json Custom Metric apiVersion : apps/v1 kind : Deployment metadata : labels : run : custom-metrics-gmp name : custom-metrics-gmp namespace : default spec : replicas : 1 selector : matchLabels : run : custom-metrics-gmp template : metadata : labels : run : custom-metrics-gmp spec : containers : sample container generating custom metrics - name : prometheus-dummy-exporter image : us-docker.pkg.dev/google-samples/containers/gke/prometheus-dummy-exporter:v0.2.0 command : [ "./prometheus-dummy-exporter" ] args : - --metric-name=custom prometheus - --metric-value=40 - --port=8080 With the PodMonitoring resource , the Google Cloud Managed Service for Prometheus exports the Prometheus metrics to Cloud Monitoring: apiVersion : monitoring.googleapis.com/v1 kind : PodMonitoring metadata : name : "custom-metrics-exporter" spec : selector : matchLabels : run : custom-metrics-gmp endpoints : - port : 8080 path : /metrics interval : 15s Starting in GKE Standard version 1.27 or GKE Autopilot version 1.25, Google Cloud Managed Service for Prometheus is enabled.
- Pub/Sub apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : pubsub spec : minReplicas : 1 maxReplicas : 5 metrics : - external : metric : name : pubsub.googleapis.com subscription num undelivered messages selector : matchLabels : resource.labels.subscription id : echo-read target : type : AverageValue averageValue : 2 type : External scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : pubsub Custom Metric apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : custom-metrics-gmp-hpa namespace : default spec : scaleTargetRef : apiVersion : apps/v1 kind : Deployment name : custom-metrics-gmp minReplicas : 1 maxReplicas : 5 metrics : - type : Pods pods : metric : name : prometheus.googleapis.com custom prometheus gauge target : type : AverageValue averageValue : 20 Deploy the HorizontalPodAutoscaler to your cluster: Pub/Sub kubectl apply -f deployment/pubsub-hpa.yaml Custom Metric kubectl apply -f custom-metrics-gmp-hpa.yaml Generating load For some metrics, you might need to generate load to watch the autoscaling: Pub/Sub Publish 200 messages to the Pub/Sub topic: for i in { 1 ..200 } ; do gcloud pubsub topics publish echo --message = "Autoscaling # ${ i } " ; done Custom Metric Not Applicable: The code used in this sample exports a constant value of 40 for the custom metric.
- Legacy authentication Enable the Pub/Sub API on your project: gcloud services enable cloudresourcemanager.googleapis.com pubsub.googleapis.com Create a Pub/Sub topic and subscription: gcloud pubsub topics create echo gcloud pubsub subscriptions create echo-read --topic = echo Create a service account with access to Pub/Sub: gcloud iam service-accounts create autoscaling-pubsub-sa gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:autoscaling-pubsub-sa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/pubsub.subscriber" Download the service account key file: gcloud iam service-accounts keys create key.json \ --iam-account autoscaling-pubsub-sa@ $PROJECT ID .iam.gserviceaccount.com Import the service account key to your cluster as a Secret : kubectl create secret generic pubsub-key --from-file = key.json = ./key.json Deploy the application to your cluster: kubectl apply -f deployment/pubsub-with-secret.yaml Custom Metric kubectl apply -f custom-metrics-gmp.yaml After waiting a moment for the application to deploy, all Pods reach the Ready state: Pub/Sub kubectl get pods Output: NAME READY STATUS RESTARTS AGE pubsub-8cd995d7c-bdhqz 1/1 Running 0 58s Custom Metric kubectl get pods Output: NAME READY STATUS RESTARTS AGE custom-metrics-gmp-865dffdff9-x2cg9 1/1 Running 0 49s Viewing metrics on Cloud Monitoring As your application runs, it writes your metrics to Cloud Monitoring.

