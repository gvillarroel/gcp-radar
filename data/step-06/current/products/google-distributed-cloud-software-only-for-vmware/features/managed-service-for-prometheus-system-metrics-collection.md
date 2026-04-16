---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.111Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Managed Service for Prometheus system metrics collection"
feature_slug: "managed-service-for-prometheus-system-metrics-collection"
latest_feature_date: "2023-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring"
keywords:
  - "managed"
  - "prometheus"
  - "system"
  - "metrics"
  - "collection"
  - "anthos"
  - "clusters"
  - "vmware"
---

# Managed Service for Prometheus system metrics collection

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on VMware adds preview support for collecting system metrics with Google Cloud Managed Service for Prometheus.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, the feature named **“Managed Service for Prometheus system metrics collection”** is a GA-listed capability in the product’s supported-feature matrix, indicating it is available on supported releases (including 1.30+ and up to the cited 1.34/latest releases). It is part of the platform’s logging and monitoring system, where in-cluster agents collect system-component metrics (and related monitoring data) and allow configuration of monitoring scope and metric detail level. The supported-features tables also indicate this capability appears as standard/GA in the listed releases.

## Evidence Summary

The first two pages provide direct feature support status for “Managed Service for Prometheus system metrics collection,” while the logging and monitoring page provides context that GDC’s built-in agents collect system-component metrics for troubleshooting and configurable monitoring.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)

## Supporting Pages

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud Managed Service for Prometheus system metrics collection GA GA GA GA No differences.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Advanced clusters Stay organized with collections Save and categorize content based on your preferences.
- The following table lists the features supported for Google Distributed Cloud for VMware, their availability status when advanced clusters is enabled , and any differences in behavior or use: Make a selection No differences Changes apply Not supported Not recommended Deprecated Feature/capability 1.31 Adv. clusters (Preview) 1.32 Not enabled 1.32 Advanced clusters (GA) 1.33 Advanced clusters (GA) Differences Advanced clusters Preview GA GA GA Not supported Topology domains Preview Preview Preview Changes apply.
- Consistent experience and implementation The advanced clusters feature implements a cluster architecture that better aligns Google Distributed Cloud for VMware with the rest of the Google Distributed Cloud products.

### "Getting support \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: The page only references Cloud Monitoring for support troubleshooting and does not describe Managed Service for Prometheus integration.

Evidence snippets:
- Feature/capability 1.30 1.31 1.32 1.33 1.34 (latest) Advanced clusters Preview GA GA GA Topology domains Preview Preview Preview Preview Regional fleet membership GA GA GA GA GA Version skew n+2 admin cluster - user cluster GA GA GA GA GA Version skew n+2 node pool - user cluster GA GA GA GA GA Max surge setting for node pool updates Preview Preview Preview Preview Preview cgroup v2 for nodes GA GA GA GA GA DSR mode for Dataplane V2 GA GA GA GA GA BinAuthz for Controlplane V2 user clusters GA GA GA GA GA User-managed admin workstation GA GA GA GA GA StatefulSet CSI migration tool GA GA GA GA GA Seesaw to MetalLB migration GA GA GA GA GA Disable bundled ingress GA GA GA GA GA Admin cluster prepared credentials GA GA GA GA GA Storage policy for a user cluster GA GA GA GA GA Storage policy for an admin cluster GA GA GA GA GA Node auto repair GA GA GA GA GA High availability admin cluster GA GA GA GA GA VM-Host affinity GA GA GA GA GA Generate configuration files from an existing cluster GA GA GA GA GA Managed Service for Prometheus system metrics collection GA GA GA GA GA Upgrade and rollback of nodepools GA GA GA GA GA Update private registry credentials GA GA GA GA GA Admin cluster backup and restore with gkectl Preview Preview Preview Preview Preview User cluster nodepool autoscaling GA GA GA GA GA Cluster automatic node resizing GA GA GA GA GA Multiple vSphere cluster support GA GA GA GA GA Multiple vSphere data centers support GA GA GA GA GA OpenID Connect (OIDC) support for authentication to clusters GA GA GA GA GA CA certificate rotation GA GA GA GA GA Workload Identity support GA GA GA GA GA AIS with LDAP authentication support GA GA GA GA GA Always-on secrets encryption without hardware security module (HSM) GA GA GA GA GA Update vCenter CA certificates with gkectl GA GA GA GA GA Egress NAT gateway GA GA GA GA GA Admin cluster fleet registration GA GA GA GA GA Windows node pool support GA GA GA 1 1 containerd runtime for Windows node pool GA GA GA 1 1 Container-optimized OS node pool support GA GA GA GA GA CoreDNS as the cluster DNS provider GA GA GA GA GA User cluster lifecycle in the Google Cloud console GA GA GA GA GA Admin cluster node creation with Container-optimized OS GA GA GA GA GA Multi-NIC capability for Pods GA GA GA GA GA MetalLB load balancer option GA GA GA GA GA gkectl update admin support for enabling and disabling Cloud Logging and Cloud Monitoring GA GA GA GA GA Windows Dataplane V2 support GA GA GA 1 1 Summary API metrics GA GA GA GA GA gkectl update credentials support for updating component access service account key GA GA GA GA GA Prepared credentials for user cluster GA GA GA GA GA Dry run upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of admin cluster GA GA GA GA GA Sequential update of node pools GA GA GA GA GA Create volume snapshot with vSphere CSI driver Preview Preview Preview Preview Preview Create user cluster with Controlplane V2 enabled GA GA GA GA GA Storage migration with SPBM GA GA GA GA GA Migrate a datastore to a SPBM GA GA GA GA GA Migrate a user cluster to Controlplane V2 GA GA GA GA GA Migrate to an HA admin cluster GA GA GA GA GA Migrate configuration settings for F5 BIG-IP GA GA GA GA GA 1 Windows Server OS node pools are deprecated in version 1.32 and will be unavailable in version 1.33 and higher.
- The following table provides further details: Cloud Customer Care Collaborative Support Not Supported Kubernetes and the container runtime VMware vSphere (vCenter Server and ESXi) VMware products beyond vSphere Canonical Ubuntu for guest/node OS F5 BIG-IP load balancers Customer code (For more information, see the Developer Support section) vCenter controller Hardware and hyper-converged infrastructure solutions as listed in the Collaborative Support Partners page Customer choice of host OS F5 controller Physical server, storage, and network Calico and related network policies External DNS, DHCP, and identity systems Ingress controller Calico Enterprise Edition Prometheus and Grafana Stackdriver Monitoring, Stackdriver Logging, and Stackdriver agents Identity federation with OIDC compliant providers Hub, Connect, and the Connect Agent Knative serving / Knative Bundled LoadBalancer (Seesaw) Supported features This document lists the features for Google Distributed Cloud for supported releases.
- Support tools To troubleshoot business-critical incidents effectively, Cloud Customer Care relies on three pieces of information: Your environment's configuration Logs from your admin and user clusters Metrics from your admin and user clusters Configuration When you open a support case, you are asked to run the gkectl diagnose snapshot --seed-config command and attach the resulting tar file to the support case.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Getting support Stay organized with collections Save and categorize content based on your preferences.

### "Logging and monitoring \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: The page explicitly lists Google Cloud Managed Service for Prometheus (Preview) as a logging/monitoring option for Google Distributed Cloud, though without implementation-level details.

Evidence snippets:
- The output of this command is similar to the following: gke-metrics-agent-global 1/1 Running 0 4h31m stackdriver-metadata-agent-cluster-level 1/1 Running 0 4h31m You can see all the DaemonSet agents by running the following command: kubectl --kubeconfig CLUSTER KUBECONFIG get daemonsets -l "managed-by=stackdriver" --all-namespaces The output of this command is similar to the following: gke-metrics-agent 1/1 Running 0 4h31m stackdriver-log-forwarder 1/1 Running 0 4h31m Configuring logging and monitoring agents for Google Distributed Cloud The agents installed with Google Distributed Cloud collect data about system components, subject to your settings and configuration, for the purposes of maintaining and troubleshooting issues with your clusters.
- It offers a fully managed logging solution, metrics collection, monitoring, dashboarding, and alerting.
- Excluded container metrics The following container metrics are excluded from the optimized metrics: container cpu cfs periods total container cpu cfs throttled periods total container cpu load average 10s container cpu system seconds total container cpu user seconds total container fs io current container fs io time seconds total container fs io time weighted seconds total container fs read seconds total container fs reads bytes total container fs reads merged total container fs reads total container fs sector reads total container fs sector writes total container fs write seconds total container fs writes bytes total container fs writes merged total container fs writes total container last seen container memory cache container memory failcnt container memory mapped file container memory max usage bytes container memory swap container network receive packets dropped total container network receive packets total container network transmit packets dropped total container network transmit packets total container start time seconds container spec cpu period container spec cpu quota container spec cpu shares container spec memory limit bytes container spec memory reservation limit bytes container spec memory swap limit bytes container start time seconds container tasks state The complete set of Google Distributed Cloud metrics is documented in Google Distributed Cloud metrics .
- You can configure the in-cluster agents for the scope of monitoring and logging, as well as the level of metrics collected: Scope of logging and monitoring can be set to system components only (the default) or for system components and applications Level of metrics collected can be configured for an optimized set of metrics or for full metrics See Configuring logging and monitoring agents for Google Distributed Cloud on this document for more information.

