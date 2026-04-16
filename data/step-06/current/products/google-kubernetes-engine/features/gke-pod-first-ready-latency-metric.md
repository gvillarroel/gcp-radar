---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.727Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE pod first ready latency metric"
feature_slug: "gke-pod-first-ready-latency-metric"
latest_feature_date: "2024-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics"
keywords:
  - "gke"
  - "pod"
  - "first"
  - "ready"
  - "latency"
  - "metric"
  - "monitoring"
  - "measures"
---

# GKE pod first ready latency metric

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This Cloud Monitoring metric measures pod end-to-end startup latency from Pod creation to Ready, including image pulls.

## Extended Definition

This Cloud Monitoring metric measures pod end-to-end startup latency from Pod creation to Ready, including image pulls.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics)

## Supporting Pages

### "Collect and view control plane metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- PromQL metric name Launch stage Cloud Monitoring metric name Kind, Type, Unit Monitored resources Required GKE version Description Labels apiserver current inflight requests GA apiserver current inflight requests/gauge Gauge , Double , 1 prometheus target 1.22.13+ Maximal number of currently used inflight request limit of this apiserver per request kind in last second. request kind apiserver flowcontrol current executing seats BETA apiserver flowcontrol current executing seats/gauge Gauge , Double , 1 prometheus target 1.28.3+ Concurrency (number of seats) occupied by the currently executing (initial stage for a WATCH, any stage otherwise) requests in the API Priority and Fairness subsystem. flow schema priority level apiserver flowcontrol current inqueue requests BETA apiserver flowcontrol current inqueue requests/gauge Gauge , Double , 1 prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Number of requests currently pending in queues of the API Priority and Fairness subsystem. flow schema priority level apiserver flowcontrol nominal limit seats BETA apiserver flowcontrol nominal limit seats/gauge Gauge , Double , 1 prometheus target 1.28.3+ (1.26.11+, 1.27.8+ for prior minor versions) Nominal number of execution seats configured for each priority level. priority level apiserver flowcontrol rejected requests total BETA apiserver flowcontrol rejected requests total/counter Cumulative , Double , 1 prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Number of requests rejected by the API Priority and Fairness subsystem. flow schema priority level reason apiserver flowcontrol request wait duration seconds BETA apiserver flowcontrol request wait duration seconds/histogram Cumulative , Distribution , s prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Length of time a request spent waiting in its queue. execute flow schema priority level apiserver request duration seconds GA apiserver request duration seconds/histogram Cumulative , Distribution , s prometheus target 1.23.6+ Response latency distribution in seconds for each verb, dry run value, group, version, resource, subresource, scope and component. component dry run group resource scope subresource verb version apiserver request total GA apiserver request total/counter Cumulative , Double , 1 prometheus target 1.22.13+ Counter of apiserver requests broken out for each verb, dry run value, group, version, resource, scope, component, and HTTP response code. code component dry run group resource scope subresource verb version apiserver response sizes GA apiserver response sizes/histogram Cumulative , Distribution , 1 prometheus target 1.22.13+ Response size distribution in bytes for each group, version, verb, resource, subresource, scope and component. component group resource scope subresource verb version apiserver storage objects GA apiserver storage objects/gauge Gauge , Double , 1 prometheus target 1.22.13+ Number of stored objects at the time of last check split by kind. resource apiserver admission controller admission duration seconds GA apiserver admission controller admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.23.6+ Admission controller latency histogram in seconds, identified by name and broken out for each operation and API resource and type (validate or admit). name operation rejected type apiserver admission step admission duration seconds GA apiserver admission step admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.22.13+ Admission sub-step latency histogram in seconds, broken out for each operation and API resource and step type (validate or admit). operation rejected type apiserver admission webhook admission duration seconds GA apiserver admission webhook admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.22.13+ Admission webhook latency histogram in seconds, identified by name and broken out for each operation and API resource and type (validate or admit). name operation rejected type This following sections provide additional information about the API server metrics. apiserver request duration seconds Use this metric to monitor latency in the API server.
- For more information, see Scheduler latency and Resource issues . scheduler scheduling attempt duration seconds This metric measures the duration of a single scheduling attempt within the scheduler itself and is broken down by the result: scheduled, unschedulable, or error.
- When using this metric, you must use filters or grouping to find specific sources of latency. apiserver admission controller admission duration seconds This metric measures the latency in built-in admission webhooks, not third-party webhooks.
- Monitoring the API server The API server metrics can give you insight into the main signals for system health: Latency : How long does it take to service a request?

### "Analyze model serving performance and costs with GKE Inference Quickstart\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Important: If PodMonitoring resources have already been deployed to collect metrics from supported workloads , remove them before enabling the auto-monitoring feature to avoid double collection.
- The following is an example of a command to enable observability features: gcloud container clusters update $CLUSTER NAME \ --project = $PROJECT ID \ --location = $LOCATION \ --enable-managed-prometheus \ --logging = SYSTEM,WORKLOAD \ --monitoring = SYSTEM,DEPLOYMENT,HPA,POD,DCGM \ --auto-monitoring-scope = ALL For more information, see Monitor your inference workloads . (HPA only) Deploy a metrics adapter : A metrics adapter, such as the Custom Metrics Stackdriver Adapter , is necessary if HPA resources were generated in the deployment manifests.
- For example: gcloud container ai profiles list \ --model = openai/gpt-oss-20b \ --pricing-model = on-demand \ --target-ttft-milliseconds = 300 The output shows supported profiles with performance metrics like throughput, latency, and cost per million tokens at the inflection point.
- How tailored best practices are generated We measure latency in Normalized Time per Output Token (NTPOT) and Time to First Token (TTFT) in milliseconds, and throughput in output tokens per second, by saturating accelerators.

### "Optimize Pod autoscaling based on metrics \_|\_ Kubernetes Engine \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/autoscaling-metrics)
- Source ID: `site-docs-reference-required-5`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Legacy authentication Enable the Pub/Sub API on your project: gcloud services enable cloudresourcemanager.googleapis.com pubsub.googleapis.com Create a Pub/Sub topic and subscription: gcloud pubsub topics create echo gcloud pubsub subscriptions create echo-read --topic = echo Create a service account with access to Pub/Sub: gcloud iam service-accounts create autoscaling-pubsub-sa gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount:autoscaling-pubsub-sa@ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/pubsub.subscriber" Download the service account key file: gcloud iam service-accounts keys create key.json \ --iam-account autoscaling-pubsub-sa@ $PROJECT ID .iam.gserviceaccount.com Import the service account key to your cluster as a Secret : kubectl create secret generic pubsub-key --from-file = key.json = ./key.json Deploy the application to your cluster: kubectl apply -f deployment/pubsub-with-secret.yaml Custom Metric kubectl apply -f custom-metrics-gmp.yaml After waiting a moment for the application to deploy, all Pods reach the Ready state: Pub/Sub kubectl get pods Output: NAME READY STATUS RESTARTS AGE pubsub-8cd995d7c-bdhqz 1/1 Running 0 58s Custom Metric kubectl get pods Output: NAME READY STATUS RESTARTS AGE custom-metrics-gmp-865dffdff9-x2cg9 1/1 Running 0 49s Viewing metrics on Cloud Monitoring As your application runs, it writes your metrics to Cloud Monitoring.
- Workload Identity apiVersion : apps/v1 kind : Deployment metadata : name : pubsub spec : selector : matchLabels : app : pubsub template : metadata : labels : app : pubsub spec : serviceAccountName : pubsub-sa containers : - name : subscriber image : us-docker.pkg.dev/google-samples/containers/gke/pubsub-sample:v2 Legacy authentication apiVersion : apps/v1 kind : Deployment metadata : name : pubsub spec : selector : matchLabels : app : pubsub template : metadata : labels : app : pubsub spec : volumes : - name : google-cloud-key secret : secretName : pubsub-key containers : - name : subscriber image : us-docker.pkg.dev/google-samples/containers/gke/pubsub-sample:v2 volumeMounts : - name : google-cloud-key mountPath : /var/secrets/google env : - name : GOOGLE APPLICATION CREDENTIALS value : /var/secrets/google/key.json Custom Metric apiVersion : apps/v1 kind : Deployment metadata : labels : run : custom-metrics-gmp name : custom-metrics-gmp namespace : default spec : replicas : 1 selector : matchLabels : run : custom-metrics-gmp template : metadata : labels : run : custom-metrics-gmp spec : containers : sample container generating custom metrics - name : prometheus-dummy-exporter image : us-docker.pkg.dev/google-samples/containers/gke/prometheus-dummy-exporter:v0.2.0 command : [ "./prometheus-dummy-exporter" ] args : - --metric-name=custom prometheus - --metric-value=40 - --port=8080 With the PodMonitoring resource , the Google Cloud Managed Service for Prometheus exports the Prometheus metrics to Cloud Monitoring: apiVersion : monitoring.googleapis.com/v1 kind : PodMonitoring metadata : name : "custom-metrics-exporter" spec : selector : matchLabels : run : custom-metrics-gmp endpoints : - port : 8080 path : /metrics interval : 15s Starting in GKE Standard version 1.27 or GKE Autopilot version 1.25, Google Cloud Managed Service for Prometheus is enabled.
- Allow this service account to read Cloud Monitoring metrics by assigning the Monitoring Viewer role: gcloud projects add-iam-policy-binding projects/ $PROJECT ID \ --role roles/monitoring.viewer \ --member = principal://iam.googleapis.com/projects/ $PROJECT NUMBER /locations/global/workloadIdentityPools/ $PROJECT ID .svc.id.goog/subject/ns/custom-metrics/sa/custom-metrics-stackdriver-adapter Legacy Authentication Grant your user the ability to create required authorization roles: kubectl create clusterrolebinding cluster-admin-binding \ --clusterrole cluster-admin --user " $( gcloud config get-value account ) " Deploy the custom metrics adapter on your cluster: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/k8s-stackdriver/master/custom-metrics-stackdriver-adapter/deploy/production/adapter new resource model.yaml Deploying an application with metrics Download the repository containing the application code for this tutorial: Pub/Sub git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git cd kubernetes-engine-samples/databases/cloud-pubsub Custom Metric git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git cd kubernetes-engine-samples/observability/custom-metrics-autoscaling/google-managed-prometheus The repository contains code that exports metrics to Cloud Monitoring: Pub/Sub This application polls a Pub/Sub subscription for new messages, acknowledging them as they arrive.
- Allow this service account to read Cloud Monitoring metrics by assigning the Monitoring Viewer role: gcloud projects add-iam-policy-binding projects/ $PROJECT ID \ --role roles/monitoring.viewer \ --member = principal://iam.googleapis.com/projects/ $PROJECT NUMBER /locations/global/workloadIdentityPools/ $PROJECT ID .svc.id.goog/subject/ns/custom-metrics/sa/custom-metrics-stackdriver-adapter Legacy Authentication Grant your user the ability to create required authorization roles: kubectl create clusterrolebinding cluster-admin-binding \ --clusterrole cluster-admin --user " $( gcloud config get-value account ) " Deploy the custom metrics adapter on your cluster: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/k8s-stackdriver/master/custom-metrics-stackdriver-adapter/deploy/production/adapter new resource model.yaml Custom Metric The procedure to install the Custom Metrics Adapter differs for clusters with or without Workload Identity Federation for GKE enabled.

