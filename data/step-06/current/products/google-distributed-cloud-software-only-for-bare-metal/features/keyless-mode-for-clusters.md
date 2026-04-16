---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.338Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Keyless mode for clusters"
feature_slug: "keyless-mode-for-clusters"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade"
keywords:
  - "keyless"
  - "mode"
  - "clusters"
  - "uses"
  - "short"
  - "lived"
  - "tokens"
  - "workload"
---

# Keyless mode for clusters

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Keyless mode uses short-lived tokens and Workload Identity Federation instead of long-lived service account keys and Kubernetes Secrets.

## Extended Definition

Keyless mode uses short-lived tokens and Workload Identity Federation instead of long-lived service account keys and Kubernetes Secrets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)

## Supporting Pages

### "Update clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- The cluster create and update operations check that node machines can be accessed with the specified user and SSH key. bmctl apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : baremetal.cluster.gke.io/private-mode : "true" spec : nodeAccess : loginUser : abm gcloud CLI You specify the user that you want to use to access node machines in the --login-user flag, for example: gcloud container bare-metal clusters update abm-user-cluster1a \ --project = example-project-12345 \ --location = us-central1 \ --login-user = abm To enable passwordless sudo access for a user, follow these steps on each cluster node machine: Use sudo visudo to open the sudoers file for editing: sudo visudo -f /etc/sudoers The visudo command locks the sudoers file to prevent simultaneous edits and validates the syntax of the file upon saving.
- The network range can't be reduced, which means the mask (the value after "/") can't be increased. bmctl apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 spec : ... clusterNetwork : services : cidrBlocks : - 192.0.2.0/ 14 ... gcloud CLI To increase the range of the IPv4 service CIDR on a user cluster, specify the new range in the --island-mode-service-address-cidr-blocks flag. gcloud container bare-metal clusters update cluster1 \ --project = example-project-12345 \ --location = us-central1 \ --island-mode-service-address-cidr-blocks = 192 .0.2.0/ 14 Starting with version 1.34, you will see new ServiceCIDR resources in your cluster.
- If you set this field to true in the cluster configuration file, the internal preflight checks are ignored when you apply resources to existing clusters. apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : baremetal.cluster.gke.io/private-mode : "true" spec : bypassPreflightCheck : true Add or remove cluster administrators bmctl You can add or remove a user or service account as a cluster administrator for a user cluster by specifying email addresses in the clusterSecurity.authorization.clusterAdmin.gcpAccounts section of the cluster configuration file.
- Version 1.32 and later clusters have the following Keepalived customizations: For high availability control planes, Google Distributed Cloud automatically configures the Keepalived VRRP configuration to make failover behaviour deterministic and prevent interleaving of ARP replies with different MAC addresses: Each Keepalived instance is configured automatically with a different priority value in the VRRP router.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Standalone - single cluster that can administer itself, and that can also run workloads, but can't create or manage other user clusters.
- The standard deployment model consists of a single admin cluster and one or more user clusters, which are managed by the admin cluster.
- Google Distributed Cloud uses this service account to maintain a connection between your on-premises clusters and Google Cloud.
- In DSR mode ( forwardMode: dsr ), the load balancer node uses IP Options to save the client source address.

### "Upgrade clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- You might want to pause an upgrade for the following reasons: You've detected something wrong with cluster workloads during the upgrade and you want to pause the upgrade to look into the issue You have short maintenance windows, so you want to pause the upgrade in between windows While a cluster upgrade is paused, the following operations are supported: Adding or removing nodes Adding or removing node pools Increasing service network range Restore a cluster from a backup When a new node is added while an upgrade is paused, machine check jobs don't run on it until the upgrade is resumed and completed.
- Caution: If you use managed data services, such a Portworx, to help manage stateful workloads on your clusters, we recommend that you don't use parallel upgrades.
- These options are especially useful for large clusters with numerous nodes and node pools running important workloads.
- Therefore, for short pauses, you may want to keep bmctl running.

