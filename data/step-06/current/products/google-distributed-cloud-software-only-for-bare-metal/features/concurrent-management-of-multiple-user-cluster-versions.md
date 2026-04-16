---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.332Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Concurrent management of multiple user cluster versions"
feature_slug: "concurrent-management-of-multiple-user-cluster-versions"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api"
keywords:
  - "concurrent"
  - "management"
  - "multiple"
  - "user"
  - "cluster"
  - "versions"
  - "admin"
  - "hybrid"
---

# Concurrent management of multiple user cluster versions

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Admin and hybrid clusters can manage multiple user cluster versions concurrently; Admin and hybrid clusters can manage multiple user cluster versions concurrently.

## Extended Definition

Admin and hybrid clusters can manage multiple user cluster versions concurrently; Admin and hybrid clusters can manage multiple user cluster versions concurrently.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)

## Supporting Pages

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- User clusters use the credentials that were specified for the managing cluster (admin or hybrid).
- Allowed values: admin user hybrid standalone This value can't be modified for existing clusters.
- Hybrid - single cluster for both admin and workloads, that can also manage user clusters.
- Enrolling your admin or user cluster in the GKE On-Prem API lets you use standard tools—the Google Cloud console, Google Cloud CLI, or Terraform —to view cluster details and to manage the cluster lifecycle.

### "Upgrade clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you start a skip upgrade for a user cluster, ensure that your clusters meet the following criteria: The associated managing admin or hybrid cluster is two minor versions higher than the user cluster.
- Skip upgrade prerequisites The process for performing a skip upgrade isn't different from performing a sequential upgrade, but there are some additional prerequisites: Verify that the cluster is in a state where a skip upgrade doesn't violate cluster and node pool version rules : Before you start a skip upgrade for an admin or hybrid cluster, ensure that all of its managed user clusters are at the same minor version as the managing cluster.
- However, before upgrading the admin cluster to 1.34.200-gke.68 , make sure its associated user clusters are at version 1.33.0 or higher. bmctl emits an error if it finds any user cluster is with a version lower than 1.33.0 . bmctl When you download and install a new version of bmctl , you can upgrade your admin, hybrid, standalone, and user clusters created with an earlier version.
- You can upgrade admin, hybrid, standalone, or user clusters with the bmctl upgrade cluster command, or you can use kubectl .

### "Create a user cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Get a list of available versions to install on the user cluster: gcloud container bare-metal clusters query-version-config \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION Replace the following: ADMIN CLUSTER NAME : The name of the admin cluster.
- Get a list of available versions to install on the user cluster: gcloud container bare-metal clusters query-version-config \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION Replace the following: ADMIN CLUSTER NAME : The name of the admin cluster.
- MetalLB This example shows how to create a user cluster with the bundled MetalLB load balancer. gcloud container bare-metal clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --metal-lb-address-pools='pool= NAME ,avoid-buggy-ips= True False ,manual-assign= True False ,addresses= IP ADDRESS RANGE 1 ; IP ADDRESS RANGE 2 ;...' \ --control-plane-node-configs='node-ip= CP IP ADDRESS 1 ,labels= CP KEY 1.1 = CP VALUE 1.1 ; CP KEY 1.2 = CP VALUE 1.2 ;...' \ --control-plane-vip= CONTROL PLANE VIP \ --control-plane-load-balancer-port= CONTROL PLANE LB PORT \ --ingress-vip= INGRESS VIP \ --island-mode-service-address-cidr-blocks= SERVICE CIDR BLOCK \ --island-mode-pod-address-cidr-blocks= POD CIDR BLOCK \ --lvp-share-path=/mnt/localpv-share \ --lvp-share-storage-class=local-shared \ --lvp-node-mounts-config-path=/mnt/localpv-disk \ --lvp-node-mounts-config-storage-class=local-disks Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.
- Be sure to scroll over if needed to fill in the ADMIN CLUSTER NAME placeholder for the --admin-cluster-membership flag. gcloud container bare-metal clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --enable-manual-lb \ --control-plane-node-configs='node-ip= CP IP ADDRESS 1 ,labels= CP KEY 1.1 = CP VALUE 1.1 ; CP KEY 1.2 = CP VALUE 1.2 ;...' \ --control-plane-vip= CONTROL PLANE VIP \ --control-plane-load-balancer-port= CONTROL PLANE LB PORT \ --ingress-vip= INGRESS VIP \ --island-mode-service-address-cidr-blocks= SERVICE CIDR BLOCK \ --island-mode-pod-address-cidr-blocks= POD CIDR BLOCK \ --lvp-share-path=/mnt/localpv-share \ --lvp-share-storage-class=local-shared \ --lvp-node-mounts-config-path=/mnt/localpv-disk \ --lvp-node-mounts-config-storage-class=local-disks Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.

