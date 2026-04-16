---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.320Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Stackdriver Prometheus Sidecar"
feature_slug: "stackdriver-prometheus-sidecar"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support"
keywords:
  - "stackdriver"
  - "prometheus"
  - "sidecar"
  - "collects"
  - "metrics"
  - "same"
  - "components"
  - "logging"
---

# Stackdriver Prometheus Sidecar

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Stackdriver Prometheus Sidecar collects metrics for the same components as the logging agent.

## Extended Definition

The excerpts indicate that Google Distributed Cloud for VMware supports an in-cluster Stackdriver-based logging and monitoring setup for user clusters that can collect and forward application logs and metrics to Cloud Logging, Cloud Monitoring, and Google Cloud Managed Service for Prometheus (for example via settings such as `enableCloudLoggingForApplications`). The logging/monitoring stack includes Stackdriver components (for example `stackdriver-log-forwarder`, `gke-metrics-agent`, `stackdriver-metadata-agent-cluster-level`) that are deployed as cluster agents, with configurable scope (system-only vs system + applications) and metric depth (optimized vs full). The provided excerpts do not explicitly label a separate component as “Stackdriver Prometheus Sidecar,” so this is a partial/indirect mapping to that feature name.

## Evidence Summary

The cited pages describe Stackdriver logging/monitoring agents in user clusters, application-level log/metric export settings, and integration points to Managed Service for Prometheus, but do not directly document a standalone "Stackdriver Prometheus Sidecar" component.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)

## Supporting Pages

### "Enable application logging and monitoring \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: The page discusses editing a Stackdriver object for GMP configuration, but it does not describe a Stackdriver Prometheus Sidecar.

Evidence snippets:
- Under spec , set enableCloudLoggingForApplications to true : apiVersion : addons.gke.io/v1alpha1 kind : Stackdriver metadata : name : stackdriver namespace : kube-system spec : projectID : ... clusterName : ... clusterLocation : ... proxyConfigSecretName : ... enableCloudLoggingForApplications : true enableVPC : ... optimizedMetrics : true Save and close the edited file.
- This page shows how to configure a user cluster for Google Distributed Cloud so that custom logs and metrics from user applications are sent to Cloud Logging, Cloud Monitoring, and Google Cloud Managed Service for Prometheus .
- Any logs for Pods with the label disableGCPLogging=yes are dropped: apiVersion : addons.gke.io/v1alpha1 kind : Stackdriver metadata : name : stackdriver namespace : kube-system spec : ... appLogFilter : keepLogRules : - namespaces : - prod contentRegexes : - ". (ERROR WARN). " ruleName : include-prod-logs dropLogRules : - podLabelSelectors : - disableGCPLogging=yes # kubectl label pods pod disableGCPLogging=yes ruleName : drop-logs Deploy a Pod in the prod namespace and run a script that generates ERROR and INFO log entries: kubectl --kubeconfig USER CLUSTER KUBECONFIG run pod1 \ --image gcr.io/cloud-marketplace-containers/google/debian10:latest \ --namespace prod --restart Never --command -- \ /bin/sh -c "while true; do echo 'ERROR is 404\\nINFO is not 404' && sleep 1; done" The filtered logs should contain the ERROR entries only, not the INFO entries.
- For example: { "textPayload" : "2020/11/14 01:24:24 Starting to listen on :9090\n" , "insertId" : "1oa4vhg3qfxidt" , "resource" : { "type" : "k8s container" , "labels" : { "pod name" : "monitoring-example-7685d96496-xqfsf" , "cluster name" : ... , "namespace name" : "default" , "project id" : ... , "location" : "us-west1" , "container name" : "prometheus-example-exporter" } }, "timestamp" : "2020-11-14T01:24:24.358600252Z" , "labels" : { "k8s-pod/pod-template-hash" : "7685d96496" , "k8s-pod/app" : "monitoring-example" }, "logName" : "projects/.../logs/stdout" , "receiveTimestamp" : "2020-11-14T01:24:39.562864735Z" } gcloud Run this command: gcloud logging read 'resource.labels.project id=" PROJECT ID " AND \ resource.type="k8s container" AND resource.labels.namespace name="default"' Replace PROJECT ID with the ID of your logging-monitoring project .

### "Logging and monitoring \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- Source ID: `site-docs-reference-3`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: While the page lists Google Cloud Managed Service for Prometheus as an option, it does not mention the Stackdriver Prometheus Sidecar specifically.

Evidence snippets:
- The output of this command is similar to the following: gke-metrics-agent-global 1/1 Running 0 4h31m stackdriver-metadata-agent-cluster-level 1/1 Running 0 4h31m You can see all the DaemonSet agents by running the following command: kubectl --kubeconfig CLUSTER KUBECONFIG get daemonsets -l "managed-by=stackdriver" --all-namespaces The output of this command is similar to the following: gke-metrics-agent 1/1 Running 0 4h31m stackdriver-log-forwarder 1/1 Running 0 4h31m Configuring logging and monitoring agents for Google Distributed Cloud The agents installed with Google Distributed Cloud collect data about system components, subject to your settings and configuration, for the purposes of maintaining and troubleshooting issues with your clusters.
- You can configure the in-cluster agents for the scope of monitoring and logging, as well as the level of metrics collected: Scope of logging and monitoring can be set to system components only (the default) or for system components and applications Level of metrics collected can be configured for an optimized set of metrics or for full metrics See Configuring logging and monitoring agents for Google Distributed Cloud on this document for more information.
- Enable the following APIs in your logging-monitoring project: Stackdriver API Cloud Monitoring API Cloud Logging API Config Monitoring for Ops API Grant the following IAM roles to your logging-monitoring service account on your logging-monitoring project. logging.logWriter monitoring.metricWriter stackdriver.resourceMetadata.writer monitoring.dashboardEditor opsconfigmonitoring.resourceMetadata.writer Log tags Many Google Distributed Cloud logs have a tag of F : logtag: "F" This tag means that the log entry is complete or full .
- A Deployment that sends metadata for Kubernetes resources such as pods, deployments, or nodes to the Stackdriver Resource Metadata API; this data is used to enrich metric queries by enabling you to query by deployment name, node name, or even Kubernetes service name. kube-state-metrics A Deployment that listens to API server and generate metrics about the states of objects. node-exporter A DaemonSet that generates hardware and OS metrics.

### "Getting support \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Feature/capability 1.30 1.31 1.32 1.33 1.34 (latest) Advanced clusters Preview GA GA GA Topology domains Preview Preview Preview Preview Regional fleet membership GA GA GA GA GA Version skew n+2 admin cluster - user cluster GA GA GA GA GA Version skew n+2 node pool - user cluster GA GA GA GA GA Max surge setting for node pool updates Preview Preview Preview Preview Preview cgroup v2 for nodes GA GA GA GA GA DSR mode for Dataplane V2 GA GA GA GA GA BinAuthz for Controlplane V2 user clusters GA GA GA GA GA User-managed admin workstation GA GA GA GA GA StatefulSet CSI migration tool GA GA GA GA GA Seesaw to MetalLB migration GA GA GA GA GA Disable bundled ingress GA GA GA GA GA Admin cluster prepared credentials GA GA GA GA GA Storage policy for a user cluster GA GA GA GA GA Storage policy for an admin cluster GA GA GA GA GA Node auto repair GA GA GA GA GA High availability admin cluster GA GA GA GA GA VM-Host affinity GA GA GA GA GA Generate configuration files from an existing cluster GA GA GA GA GA Managed Service for Prometheus system metrics collection GA GA GA GA GA Upgrade and rollback of nodepools GA GA GA GA GA Update private registry credentials GA GA GA GA GA Admin cluster backup and restore with gkectl Preview Preview Preview Preview Preview User cluster nodepool autoscaling GA GA GA GA GA Cluster automatic node resizing GA GA GA GA GA Multiple vSphere cluster support GA GA GA GA GA Multiple vSphere data centers support GA GA GA GA GA OpenID Connect (OIDC) support for authentication to clusters GA GA GA GA GA CA certificate rotation GA GA GA GA GA Workload Identity support GA GA GA GA GA AIS with LDAP authentication support GA GA GA GA GA Always-on secrets encryption without hardware security module (HSM) GA GA GA GA GA Update vCenter CA certificates with gkectl GA GA GA GA GA Egress NAT gateway GA GA GA GA GA Admin cluster fleet registration GA GA GA GA GA Windows node pool support GA GA GA 1 1 containerd runtime for Windows node pool GA GA GA 1 1 Container-optimized OS node pool support GA GA GA GA GA CoreDNS as the cluster DNS provider GA GA GA GA GA User cluster lifecycle in the Google Cloud console GA GA GA GA GA Admin cluster node creation with Container-optimized OS GA GA GA GA GA Multi-NIC capability for Pods GA GA GA GA GA MetalLB load balancer option GA GA GA GA GA gkectl update admin support for enabling and disabling Cloud Logging and Cloud Monitoring GA GA GA GA GA Windows Dataplane V2 support GA GA GA 1 1 Summary API metrics GA GA GA GA GA gkectl update credentials support for updating component access service account key GA GA GA GA GA Prepared credentials for user cluster GA GA GA GA GA Dry run upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of admin cluster GA GA GA GA GA Sequential update of node pools GA GA GA GA GA Create volume snapshot with vSphere CSI driver Preview Preview Preview Preview Preview Create user cluster with Controlplane V2 enabled GA GA GA GA GA Storage migration with SPBM GA GA GA GA GA Migrate a datastore to a SPBM GA GA GA GA GA Migrate a user cluster to Controlplane V2 GA GA GA GA GA Migrate to an HA admin cluster GA GA GA GA GA Migrate configuration settings for F5 BIG-IP GA GA GA GA GA 1 Windows Server OS node pools are deprecated in version 1.32 and will be unavailable in version 1.33 and higher.
- The following table provides further details: Cloud Customer Care Collaborative Support Not Supported Kubernetes and the container runtime VMware vSphere (vCenter Server and ESXi) VMware products beyond vSphere Canonical Ubuntu for guest/node OS F5 BIG-IP load balancers Customer code (For more information, see the Developer Support section) vCenter controller Hardware and hyper-converged infrastructure solutions as listed in the Collaborative Support Partners page Customer choice of host OS F5 controller Physical server, storage, and network Calico and related network policies External DNS, DHCP, and identity systems Ingress controller Calico Enterprise Edition Prometheus and Grafana Stackdriver Monitoring, Stackdriver Logging, and Stackdriver agents Identity federation with OIDC compliant providers Hub, Connect, and the Connect Agent Knative serving / Knative Bundled LoadBalancer (Seesaw) Supported features This document lists the features for Google Distributed Cloud for supported releases.
- Logs When you create a new cluster, Cloud Logging agents are enabled by default and scoped only to system-level components.
- System-level metrics are from Kubernetes pods running in the same namespaces listed in Logs .

