---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.356Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "IPv4/IPv6 dual-stack networking"
feature_slug: "ipv4-ipv6-dual-stack-networking"
latest_feature_date: "2021-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/cluster-lifecycle-management-tools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
keywords:
  - "ipv4"
  - "ipv6"
  - "dual"
  - "stack"
  - "networking"
  - "clusters"
  - "can"
  - "deployed"
---

# IPv4/IPv6 dual-stack networking

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Clusters can be deployed in a dual-stack network with both IPv4 and IPv6 addresses assigned to nodes and pods.

## Extended Definition

Clusters can be deployed in a dual-stack network with both IPv4 and IPv6 addresses assigned to nodes and pods.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/cluster-lifecycle-management-tools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/cluster-lifecycle-management-tools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)

## Supporting Pages

### "Choose a tool to manage cluster lifecycle \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/cluster-lifecycle-management-tools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/cluster-lifecycle-management-tools)
- Source ID: `site-iam-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Admin and user clusters are the only supported cluster types The latest minor or patch versions aren't available in the GKE On-Prem API until 7 to 10 days after the release The following advanced networking features aren't supported: IPv4/IPv6 dual-stack networking IPv4 flat mode network model What's next bmctl Cluster configuration field reference gcloud CLI gcloud container bare-metal clusters gcloud container bare-metal node-pools gcloud container bare-metal admin-clusters Terraform google gkeonprem bare metal cluster google gkeonprem bare metal node pool google gkeonprem bare metal admin cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Distributed Cloud provides you a choice of tools to create clusters and manage the cluster lifecycle operations (update, upgrade, and delete): The command-line tool bmctl , which you run on your admin workstation in your on-premises data center.
- If your organization has regulatory requirements or restrictions, you might need to limit your reliance on Google Cloud and use bmctl on your admin workstation to create clusters and manage cluster lifecycle.
- To manage the lifecycle of your clusters, the GKE On-Prem API must store metadata about your cluster's state in Google Cloud, in the Google Cloud region that you specify when creating the cluster.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- At least one of the ipv4 or ipv6 fields must be provided for the ClusterCidrConfig resource.
- At least one of the ipv4 or ipv6 fields must be provided for the ClusterCidrConfig resource.
- Cluster resource Optional Immutable gkeOnPremAPI In 1.16 and later, if the GKE On-Prem API is enabled in your Google Cloud project, all clusters in the project are enrolled in the GKE On-Prem API automatically in the region configured in clusterOperations.location .
- For example: proxy : url : "http://my-proxy.example.local:80" noProxy : "10.151.222.0/24, my-host.example.local,10.151.2.1" Cluster resource Optional Mutable clusterSecurity This section specifies the cluster security-related settings.

### "Update clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- The network range can't be reduced, which means the mask (the value after "/") can't be increased. bmctl apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 spec : ... clusterNetwork : services : cidrBlocks : - 192.0.2.0/ 14 ... gcloud CLI To increase the range of the IPv4 service CIDR on a user cluster, specify the new range in the --island-mode-service-address-cidr-blocks flag. gcloud container bare-metal clusters update cluster1 \ --project = example-project-12345 \ --location = us-central1 \ --island-mode-service-address-cidr-blocks = 192 .0.2.0/ 14 Starting with version 1.34, you will see new ServiceCIDR resources in your cluster.
- BGPLoadBalancer apiVersion : networking.gke.io/v1 kind : BGPLoadBalancer metadata : name : default namespace : cluster-bm spec : peerSelector : cluster.baremetal.gke.io/default-peer : "true" BGPPeer apiVersion : networking.gke.io/v1 kind : BGPPeer metadata : name : bgppeer1 namespace : cluster-bm labels : cluster.baremetal.gke.io/default-peer : "true" spec : localASN : 65001 peerASN : 65002 peerIP : 10.0.3.254 sessions : 2 Increase service network range To create more services than the initial limit, you can reduce the IPv4 service CIDR mask to increase the service network of your cluster.
- To use the custom resources and related networking features, you must enable advanced networking when you create your cluster. bmctl Set clusterNetwork.advancedNetworking to true in the cluster configuration when you create your cluster: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 spec : clusterNetwork : ... advancedNetworking : true ... gcloud CLI Include the --enable-advanced-networking flag in the gcloud container bare-metal clusters create command when you create your cluster.
- Starting with Google Distributed Cloud version 1.33.0, clusters are bundled with a complete NVIDIA GPU Operator stack to provide a managed solution for handling the NVIDIA software components needed to provision GPUs on your cluster worker nodes.

