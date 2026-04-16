---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.256Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Default monitoring dashboard"
feature_slug: "default-monitoring-dashboard"
latest_feature_date: "2020-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring"
keywords:
  - "default"
  - "monitoring"
  - "dashboard"
  - "includes"
---

# Default monitoring dashboard

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring includes a default monitoring dashboard.

## Extended Definition

For Google Distributed Cloud (software only) for VMware, the monitoring feature integrates with Cloud Monitoring and is set up with a default scope of system components only, while still allowing you to expand monitoring to applications and full metrics. The documented setup requires Cloud Monitoring and related roles such as `monitoring.dashboardEditor`, which indicates an included dashboard-capable monitoring experience rather than only raw metrics/logging data collection.

## Evidence Summary

The pages confirm required monitoring APIs/roles and default monitoring scope for Google Distributed Cloud, but only indirectly support the existence of a specific named “default monitoring dashboard.”

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring)

## Supporting Pages

### "Logging and monitoring \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Enable the following APIs in your logging-monitoring project: Stackdriver API Cloud Monitoring API Cloud Logging API Config Monitoring for Ops API Grant the following IAM roles to your logging-monitoring service account on your logging-monitoring project. logging.logWriter monitoring.metricWriter stackdriver.resourceMetadata.writer monitoring.dashboardEditor opsconfigmonitoring.resourceMetadata.writer Log tags Many Google Distributed Cloud logs have a tag of F : logtag: "F" This tag means that the log entry is complete or full .
- You can configure the in-cluster agents for the scope of monitoring and logging, as well as the level of metrics collected: Scope of logging and monitoring can be set to system components only (the default) or for system components and applications Level of metrics collected can be configured for an optimized set of metrics or for full metrics See Configuring logging and monitoring agents for Google Distributed Cloud on this document for more information.
- Google Distributed Cloud (software only) for VMware includes multiple options for cluster logging and monitoring, including cloud-based managed services, open source tools, and validated compatibility with third-party commercial solutions.
- For details about architecture, configuration, and what data is replicated to your Google Cloud project by default for Google Distributed Cloud, see the section How logging and monitoring for Google Distributed Cloud works .

### "Logging and monitoring \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- Source ID: `site-docs-reference-3`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Enable the following APIs in your logging-monitoring project: Stackdriver API Cloud Monitoring API Cloud Logging API Config Monitoring for Ops API Grant the following IAM roles to your logging-monitoring service account on your logging-monitoring project. logging.logWriter monitoring.metricWriter stackdriver.resourceMetadata.writer monitoring.dashboardEditor opsconfigmonitoring.resourceMetadata.writer Log tags Many Google Distributed Cloud logs have a tag of F : logtag: "F" This tag means that the log entry is complete or full .
- You can configure the in-cluster agents for the scope of monitoring and logging, as well as the level of metrics collected: Scope of logging and monitoring can be set to system components only (the default) or for system components and applications Level of metrics collected can be configured for an optimized set of metrics or for full metrics See Configuring logging and monitoring agents for Google Distributed Cloud on this document for more information.
- Google Distributed Cloud (software only) for VMware includes multiple options for cluster logging and monitoring, including cloud-based managed services, open source tools, and validated compatibility with third-party commercial solutions.
- For details about architecture, configuration, and what data is replicated to your Google Cloud project by default for Google Distributed Cloud, see the section How logging and monitoring for Google Distributed Cloud works .

### "Enable application logging and monitoring \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- For example: { "textPayload" : "2020/11/14 01:24:24 Starting to listen on :9090\n" , "insertId" : "1oa4vhg3qfxidt" , "resource" : { "type" : "k8s container" , "labels" : { "pod name" : "monitoring-example-7685d96496-xqfsf" , "cluster name" : ... , "namespace name" : "default" , "project id" : ... , "location" : "us-west1" , "container name" : "prometheus-example-exporter" } }, "timestamp" : "2020-11-14T01:24:24.358600252Z" , "labels" : { "k8s-pod/pod-template-hash" : "7685d96496" , "k8s-pod/app" : "monitoring-example" }, "logName" : "projects/.../logs/stdout" , "receiveTimestamp" : "2020-11-14T01:24:39.562864735Z" } gcloud Run this command: gcloud logging read 'resource.labels.project id=" PROJECT ID " AND \ resource.type="k8s container" AND resource.labels.namespace name="default"' Replace PROJECT ID with the ID of your logging-monitoring project .
- Save the following Deployment manifest to a file named my-app.yaml . apiVersion : apps/v1 kind : Deployment metadata : name : "monitoring-example" namespace : "default" labels : app : "monitoring-example" spec : replicas : 1 selector : matchLabels : app : "monitoring-example" template : metadata : labels : app : "monitoring-example" spec : containers : - image : gcr.io/google-samples/prometheus-dummy-exporter:latest name : prometheus-example-exporter imagePullPolicy : Always command : - /bin/sh - -c - ./prometheus-dummy-exporter --metric-name=example monitoring up --metric-value=1 --port=9090 resources : requests : cpu : 100m Create the deployment: kubectl --kubeconfig USER CLUSTER KUBECONFIG apply -f my-app.yaml View application logs Console Go to the Logs explorer in the Google Cloud console.
- For example: insertId : 1oa4vhg3qfxidt labels : k8s-pod/app : monitoring-example k8s- pod/pod-template-hash : 7685d96496 logName : projects/.../logs/stdout receiveTimestamp : '2020-11-14T01:24:39.562864735Z' resource : labels : cluster name : ... container name : prometheus-example-exporter location : us-west1 namespace name : default pod name : monitoring-example-7685d96496-xqfsf project id : ... type : k8s container textPayload : 2020/11/14 01:24:24 Starting to listen on :9090 timestamp : '2020-11-14T01:24:24.358600252Z' Filter application logs Application log filtering can reduce application logging billing and network traffic from the cluster to Cloud Logging.
- The matching Pods are scraped on a port named metrics , every 30 seconds, on the /metrics HTTP path. apiVersion : monitoring.googleapis.com/v1 kind : PodMonitoring metadata : name : prom-example spec : selector : matchLabels : app : prom-example endpoints : - port : metrics interval : 30s To apply this resource, run the following command: kubectl --kubeconfig USER CLUSTER KUBECONFIG -n gmp-test apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/prometheus-engine/v0.4.1/examples/pod-monitoring.yaml Google Cloud Managed Service for Prometheus is now scraping the matching Pods.

