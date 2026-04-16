---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.182Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Multi-NIC pod networking"
feature_slug: "multi-nic-pod-networking"
latest_feature_date: "2021-12-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support"
keywords:
  - "multi"
  - "nic"
  - "pod"
  - "networking"
  - "pods"
  - "can"
  - "use"
  - "additional"
---

# Multi-NIC pod networking

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Pods can use additional network interfaces through the multi-NIC capability.

## Extended Definition

Multi-NIC pod networking in Google Distributed Cloud (software only) for VMware is a user-cluster networking capability that enables Pods to be configured with multiple network interfaces via the multipleNetworkInterfaces setting. The topology domains guide states that multiple network interfaces for Pods are not supported when topology domains are enabled, so the feature is unavailable in that mode. The feature is documented in Google’s support matrix as "Multi-NIC capability for Pods" with GA status.

## Evidence Summary

The three official pages together confirm how to configure multi-NIC Pods, define an explicit topology-domains limitation, and list Multi-NIC capability for Pods as a supported GA feature.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- For more information about load balancing options, see Overview of load balancing . advancedNetworking If you plan to create an egress NAT gateway , set advancedNetworking to true . multipleNetworkInterfaces Decide whether you want to configure multiple network interfaces for Pods, and set multipleNetworkInterfaces accordingly. storage If you want to disable the deployment of vSphere CSI components, set storage.vSphereCSIDisabled to true . masterNode In the masterNode section, you can specify how many control-plane nodes you want for your user cluster: specify 3 for a highly-available (HA) cluster or 1 for a non-HA cluster.
- Networking In this section, you specify the IP addresses for your cluster's nodes, Pods, and Services.
- If you haven't already done so, set up your Google Cloud resources as described in these documents: Install the Google Cloud CLI Create Cloud projects Create service accounts As you set up your fleet host project , keep in mind your choice of tool, because if you have chosen one of the GKE On-Prem API clients, there are additional APIs that you must enable.
- In the Service and Pod CIDRs section, the console provides the following address ranges for your Kubernetes Services and Pods: Service CIDR : 10.96.0.0/20 Pod CIDR : 192.168.0.0/16 If you prefer to enter your own address ranges, see IP addresses for Pods and Services for best practices.

### "Create a user cluster for use with topology domains \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Multiple network interfaces for Pods aren't supported with topology domains. storage Set storage.vSphereCSIDisabled to true to disable the deployment of vSphere CSI components. masterNode If you want to specify CPU and memory for the control-plane nodes of the user cluster, fill in the cpus and memoryMB fields in the masterNode section.
- For more information, see Manual load balancing . advancedNetworking If you plan to create an egress NAT gateway , set advancedNetworking to true . multipleNetworkInterfaces Set multipleNetworkInterfaces to false .
- Prepared credentials aren't supported when topology domains is enabled. schedulerConfiguration If you want to set up additional configurations that will be passed to kube-scheduler , add the schedulerConfiguration section to your configuration file.
- This lets the Kubernetes scheduler distribute Pods across the topology domain to ensure high availability and prevent over-concentration in any single area in case of failure.

### "Getting support \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Feature/capability 1.30 1.31 1.32 1.33 1.34 (latest) Advanced clusters Preview GA GA GA Topology domains Preview Preview Preview Preview Regional fleet membership GA GA GA GA GA Version skew n+2 admin cluster - user cluster GA GA GA GA GA Version skew n+2 node pool - user cluster GA GA GA GA GA Max surge setting for node pool updates Preview Preview Preview Preview Preview cgroup v2 for nodes GA GA GA GA GA DSR mode for Dataplane V2 GA GA GA GA GA BinAuthz for Controlplane V2 user clusters GA GA GA GA GA User-managed admin workstation GA GA GA GA GA StatefulSet CSI migration tool GA GA GA GA GA Seesaw to MetalLB migration GA GA GA GA GA Disable bundled ingress GA GA GA GA GA Admin cluster prepared credentials GA GA GA GA GA Storage policy for a user cluster GA GA GA GA GA Storage policy for an admin cluster GA GA GA GA GA Node auto repair GA GA GA GA GA High availability admin cluster GA GA GA GA GA VM-Host affinity GA GA GA GA GA Generate configuration files from an existing cluster GA GA GA GA GA Managed Service for Prometheus system metrics collection GA GA GA GA GA Upgrade and rollback of nodepools GA GA GA GA GA Update private registry credentials GA GA GA GA GA Admin cluster backup and restore with gkectl Preview Preview Preview Preview Preview User cluster nodepool autoscaling GA GA GA GA GA Cluster automatic node resizing GA GA GA GA GA Multiple vSphere cluster support GA GA GA GA GA Multiple vSphere data centers support GA GA GA GA GA OpenID Connect (OIDC) support for authentication to clusters GA GA GA GA GA CA certificate rotation GA GA GA GA GA Workload Identity support GA GA GA GA GA AIS with LDAP authentication support GA GA GA GA GA Always-on secrets encryption without hardware security module (HSM) GA GA GA GA GA Update vCenter CA certificates with gkectl GA GA GA GA GA Egress NAT gateway GA GA GA GA GA Admin cluster fleet registration GA GA GA GA GA Windows node pool support GA GA GA 1 1 containerd runtime for Windows node pool GA GA GA 1 1 Container-optimized OS node pool support GA GA GA GA GA CoreDNS as the cluster DNS provider GA GA GA GA GA User cluster lifecycle in the Google Cloud console GA GA GA GA GA Admin cluster node creation with Container-optimized OS GA GA GA GA GA Multi-NIC capability for Pods GA GA GA GA GA MetalLB load balancer option GA GA GA GA GA gkectl update admin support for enabling and disabling Cloud Logging and Cloud Monitoring GA GA GA GA GA Windows Dataplane V2 support GA GA GA 1 1 Summary API metrics GA GA GA GA GA gkectl update credentials support for updating component access service account key GA GA GA GA GA Prepared credentials for user cluster GA GA GA GA GA Dry run upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of admin cluster GA GA GA GA GA Sequential update of node pools GA GA GA GA GA Create volume snapshot with vSphere CSI driver Preview Preview Preview Preview Preview Create user cluster with Controlplane V2 enabled GA GA GA GA GA Storage migration with SPBM GA GA GA GA GA Migrate a datastore to a SPBM GA GA GA GA GA Migrate a user cluster to Controlplane V2 GA GA GA GA GA Migrate to an HA admin cluster GA GA GA GA GA Migrate configuration settings for F5 BIG-IP GA GA GA GA GA 1 Windows Server OS node pools are deprecated in version 1.32 and will be unavailable in version 1.33 and higher.
- System-level logs are from Kubernetes pods running in one of the following namespaces: kube-system gke-system gke-connect istio-system config-management-system knative-serving Logs can be queried from the Cloud Logging console .
- Shared responsibility model Running a business-critical production application on Google Distributed Cloud requires multiple parties to carry different responsibilities.
- Note: If Cloud Monitoring is disabled, support is offered on best-effort basis only and could require significant additional effort from your on-site engineering team.

