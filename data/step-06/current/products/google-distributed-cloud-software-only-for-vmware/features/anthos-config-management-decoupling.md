---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.214Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Anthos Config Management decoupling"
feature_slug: "anthos-config-management-decoupling"
latest_feature_date: "2021-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "anthos"
  - "config"
  - "management"
  - "decoupling"
  - "decoupled"
  - "clusters"
  - "vmware"
  - "simplify"
---

# Anthos Config Management decoupling

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Anthos Config Management is decoupled from Anthos clusters on VMware to simplify testing, upgrades, and installation flow.

## Extended Definition

Based on the provided official-doc excerpts, this feature cannot be directly confirmed: the cited Google Distributed Cloud (software only) for VMware pages describe admin cluster configuration file fields (for example network, load balancer, datastore path behavior, and registration/API enrollment settings) rather than explicitly stating that Anthos Config Management is decoupled from Anthos clusters. Therefore, evidence for a distinct "Anthos Config Management decoupling" behavior is weak in the provided excerpts and should be treated as unverified from these sources alone.

## Evidence Summary

The cited pages provide configuration guidance for Google Distributed Cloud VMware admin clusters (1.28, 1.29, and latest 1.30+), not an explicit definition or announcement of Anthos Config Management decoupling.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Invalid for HA admin cluster as the path is generated automatically under # the root directory "anthos" in the specified datastore. dataDisk: "" (Required) Network configuration network: (Required when using "static" ipMode.type; or "Seesaw" loadBalancer.kind; or using amdin cluster HA mode) This section overrides ipMode.ipBlockFilePath values when ipMode.type=static.
- Example: gkeConnect: registerServiceAccountKeyPath: "my-key-folder/connect-register-key.json" gkeOnPremAPI Optional In 1.16 and later, if the GKE On-Prem API is enabled in your Google Cloud project, all clusters in the project are enrolled in the GKE On-Prem API automatically in the region configured in stackdriver.clusterLocation .
- It is a good idea to choose a region that is near your on-premises data center For new clusters, if you include the gkeOnPremAPI and stackdriver sections in the configuration file, the region that you set here must be the same region that you set in gkeConnect.location , gkeOnPremAPI.location , and stackdriver.clusterLocation .
- You might want to configure the privateRegistry section so that clusters pull system images from the private registry instead of gcr.io/gke-on-prem-release in the following cases: You need to minimize connections to Google Cloud because of security concerns or regulatory requirements.

### "Admin cluster configuration file 1.29 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.29)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Invalid for HA admin cluster as the path is generated automatically under # the root directory "anthos" in the specified datastore. dataDisk: "" (Required) Network configuration network: (Required when using "static" ipMode.type; or "Seesaw" loadBalancer.kind; or using amdin cluster HA mode) This section overrides ipMode.ipBlockFilePath values when ipMode.type=static.
- Example: gkeConnect: registerServiceAccountKeyPath: "my-key-folder/connect-register-key.json" gkeOnPremAPI Optional In 1.16 and later, if the GKE On-Prem API is enabled in your Google Cloud project, all clusters in the project are enrolled in the GKE On-Prem API automatically in the region configured in stackdriver.clusterLocation .
- It is a good idea to choose a region that is near your on-premises data center For new clusters, if you include the gkeOnPremAPI and stackdriver sections in the configuration file, the region that you set here must be the same region that you set in gkeConnect.location , gkeOnPremAPI.location , and stackdriver.clusterLocation .
- You might want to configure the privateRegistry section so that clusters pull system images from the private registry instead of gcr.io/gke-on-prem-release in the following cases: You need to minimize connections to Google Cloud because of security concerns or regulatory requirements.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Example: loadBalancer : f5BigIP : credentials : fileRef : path : "my-config-folder/admin-creds.yaml" loadBalancer.f5BigIP.credentialsfileRef.entry 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your F5 BIG-IP account.
- For example: loadBalancer : f5BigIP : address : "203.0.113.2" loadBalancer.f5BigIP.credentials.fileRef.path 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Mutable String The path of a credentials configuration file that holds the username and password of an account that Google Distributed Cloud can use to connect to your F5 BIG-IP load balancer.
- Invalid for HA admin cluster as the path is generated automatically under # the root directory "anthos" in the specified datastore. dataDisk: "" (Required) Network configuration network: (Required when using "static" ipMode.type; or "Seesaw" loadBalancer.kind; or using amdin cluster HA mode) This section overrides ipMode.ipBlockFilePath values when ipMode.type=static.
- Example: gkeConnect: registerServiceAccountKeyPath: "my-key-folder/connect-register-key.json" gkeOnPremAPI Optional In 1.16 and later, if the GKE On-Prem API is enabled in your Google Cloud project, all clusters in the project are enrolled in the GKE On-Prem API automatically in the region configured in stackdriver.clusterLocation .

