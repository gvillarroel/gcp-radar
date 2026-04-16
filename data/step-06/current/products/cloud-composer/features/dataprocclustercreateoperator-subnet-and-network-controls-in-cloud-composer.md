---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.378Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "DataprocClusterCreateOperator subnet and network controls in Cloud Composer"
feature_slug: "dataprocclustercreateoperator-subnet-and-network-controls-in-cloud-composer"
latest_feature_date: "2018-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
keywords:
  - "dataprocclustercreateoperator"
  - "subnet"
  - "and"
  - "network"
  - "controls"
  - "in"
  - "composer"
  - "added"
---

# DataprocClusterCreateOperator subnet and network controls in Cloud Composer

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer added support in DataprocClusterCreateOperator for network, subnetwork, and tags configuration when creating Dataproc clusters.

## Extended Definition

Cloud Composer added support in DataprocClusterCreateOperator for network, subnetwork, and tags configuration when creating Dataproc clusters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)

## Supporting Pages

### Configure authorized networks in Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)
- Source ID: `site-iam-reference`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example (Private IP environment): resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true }] } private environment config { // Private environment parameters } master authorized networks config { enabled = true cidr blocks { cidr block = "192.0.2.0/23" display name = "example range 1" } cidr blocks { cidr block = "192.0.4.0/23" display name = "example range 2" } } } } Specify authorized networks for an existing environment You can specify authorized networks for an existing environment. gcloud To specify authorized networks, use the --enable-master-authorized-networks argument.
- Example (Private IP environment): // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "example-environment" , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , }, "masterAuthorizedNetworksConfig" : { "enabled" : true , "cidrBlocks" : [ { "displayName" : "example range 1" , "cidrBlock" : "192.0.2.0/23" }, { "displayName" : "example range 2" , "cidrBlock" : "192.0.4.0/23" } ] } } } Terraform When you create an environment, the master authorized networks config block in the config block controls authorized networks for your environment.
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { // Other environment parameters master authorized networks config { enabled = true cidr blocks { cidr block = "192.0.2.0/23" display name = "example range 1" } cidr blocks { cidr block = "192.0.4.0/23" display name = "example range 2" } } } } Disable authorized networks You can disable authorized networks for an existing environment: For Private IP environments, this removes access for ranges that were previously added as authorized network.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.masterAuthorizedNetworksConfig "config" : { "masterAuthorizedNetworksConfig" : { "enabled" : true , "cidrBlocks" : [ { "displayName" : "example range 1" , "cidrBlock" : "192.0.2.0/23" }, { "displayName" : "example range 2" , "cidrBlock" : "192.0.4.0/23" } ] } } Terraform The master authorized networks config block in the config block controls authorized networks for your environment.

### "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- Source ID: `site-iam-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For each service account, add another role, compute.networkUser using one of the following options: Grant this role at the subnet level to allow a service account to set up the VPC peerings required by Cloud Composer.
- Service and host projects for Cloud Composer Shared VPC requires that you designate a host project to which networks and subnetworks belong and a service project , which is attached to the host project.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure Shared VPC networking Stay organized with collections Save and categorize content based on your preferences.
- What's next Create a Cloud Composer environment and provide the host project's network and subnetwork as configuration parameters.

### "Configure private IP networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get IP ranges for a subnetwork, go to VPC Networks page and click on the network's name to see details: Go to VPC Networks VPC-native cluster configuration Cloud Composer supports VPC-native GKE clusters in your environment.
- TCP 443 Environment's cluster Nodes Egress Allow Environment's subnetwork primary IP address range TCP, UDP all Environment's cluster Pods Egress Allow Secondary IP address range for Pods in the environment's subnetwork TCP, UDP all Environment's cluster Control Plane Egress Allow GKE Control Plane IP range TCP, UDP all Web server Egress Allow Web server network IP range TCP 3306, 3307 Caution: GKE service automatically creates a number of ingress and egress firewall rules so that your environment's cluster functions correctly (such as ingress and egress rules for Google Cloud Health Checks).
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure private IP networking Stay organized with collections Save and categorize content based on your preferences.
- If your VPC network and its established VPC peers have overlapping IP blocks with the VPC network in the Google-managed tenant project , Cloud Composer cannot create your environment.

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- To get IP ranges for a subnetwork, go to VPC Networks page and click on the network's name to see details: Go to VPC Networks VPC Service Controls logs When troubleshooting environment creation issues, you can analyze audit logs generated by VPC Service Controls.
- TCP 443 Environment's cluster Nodes Egress Allow Environment's subnetwork primary IP address range TCP, UDP all Environment's cluster Pods Egress Allow Secondary IP address range for Pods in the environment's subnetwork TCP, UDP all Environment's cluster Control Plane Egress Allow GKE Control Plane IP range TCP, UDP all Web server Egress Allow Web server network IP range TCP 3306, 3307 Caution: GKE service automatically creates a number of ingress and egress firewall rules so that your environment's cluster functions correctly (such as ingress and egress rules for Google Cloud Health Checks).
- Install PyPI packages in VPC Service Controls In the default VPC Service Controls configuration, Cloud Composer only supports installing PyPI packages from private repositories that are reachable from the internal IP address space of the VPC network.
- Configure connectivity to Google APIs and services In a VPC Service Controls configuration, to control network traffic, configure access to Google APIs and services through the restricted.googleapis.com .

