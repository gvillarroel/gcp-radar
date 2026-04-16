---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.558Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Privately used public IP addresses"
feature_slug: "privately-used-public-ip-addresses"
latest_feature_date: "2022-05-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks"
keywords:
  - "privately"
  - "used"
  - "public"
  - "ip"
  - "addresses"
  - "composer"
  - "supports"
---

# Privately used public IP addresses

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports privately used public IP addresses.

## Extended Definition

Cloud Composer supports privately used public IP addresses.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)

## Supporting Pages

### "Configure privately used public IP ranges \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip)
- Source ID: `site-iam-reference`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true // Specify PUPI addresses cluster ipv4 cidr block = "10.3.192.0/20" services ipv4 cidr block = "172.16.194.0/23" cluster secondary range name = null services secondary range name = null }] } private environment config { enable privately used public ips = true // Other private environment parameters } } } User-managed subnet ranges To create user-managed ranges : resource "google composer environment" "example environment" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { ip allocation policy = [{ use ip aliases = true cluster ipv4 cidr block = null services ipv4 cidr block = null cluster secondary range name = POD IP RANGE NAME services secondary range name = SERVICES IP RANGE NAME }] } private environment config { enable privately used public ips = true // Other private ip environment parameters } } Replace: ENVIRONMENT NAME with the name of the environment.
- About privately used public IP ranges in Cloud Composer Google Kubernetes Engine requires many IP addresses for its resources: each node, pod, and service must have a unique IP address.
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true cluster ipv4 cidr block = null services ipv4 cidr block = null // Specify existing ranges cluster secondary range name = "public-1" services secondary range name = "public-2" }] } private environment config { enable privately used public ips = true // Other private environment parameters } } } What's next Configuring Private IP environments Creating environments About Private IP environments Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "example-environment" , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , "clusterIpv4CidrBlock" : "10.3.192.0/20" , "servicesIpv4CidrBlock" : "172.16.194.0/23" } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , "enablePrivatelyUsedPublicIps" : true } } } User-managed subnet ranges To create user-managed ranges : // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : " ENVIRONMENT NAME " , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , "clusterSecondaryRangeName" : " POD IP RANGE " , "servicesSecondaryRangeName" : " SERVICES IP RANGE " } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , "enablePrivatelyUsedPublicIps" : true } } } Replace: ENVIRONMENT NAME with the name of the environment.

### Configure authorized networks in Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example (Private IP environment): gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --enable-ip-alias \ --enable-private-environment \ --enable-privately-used-public-ips \ --enable-master-authorized-networks \ --master-authorized-networks 192 .0.2.0/23,192.0.4.0/23 API Construct an environments.create API request.
- For Public IP environments, this removes previously configured restrictions. gcloud To disable authorized networks, use the --disable-master-authorized-networks argument. gcloud composer environments update ENVIRONMENT NAME \ --location LOCATION \ --disable-master-authorized-networks Replace: ENVIRONMENT NAME with the name of the environment.
- In Public IP environments, you can configure authorized networks to restrict the range of IP addresses that can access the control plane of your environment's cluster.
- Example (Private IP environment): resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true }] } private environment config { // Private environment parameters } master authorized networks config { enabled = true cidr blocks { cidr block = "192.0.2.0/23" display name = "example range 1" } cidr blocks { cidr block = "192.0.4.0/23" display name = "example range 2" } } } } Specify authorized networks for an existing environment You can specify authorized networks for an existing environment. gcloud To specify authorized networks, use the --enable-master-authorized-networks argument.

### "Configure private IP networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- As an option, you can also use privately used public IP addresses and the IP Masquerade agent to save the IP address space and to use non-RFC 1918 addresses.
- Cloud Composer environments use the following domains: .googleapis.com is used to access other Google services. .pkg.dev is used to get environment images, such as when creating or updating an environment. .gcr.io GKE requires connectivity to Container Registry domain regardless of Cloud Composer version.
- To get IP ranges for a subnetwork, go to VPC Networks page and click on the network's name to see details: Go to VPC Networks VPC-native cluster configuration Cloud Composer supports VPC-native GKE clusters in your environment.
- For Private IP environments, Cloud Composer assigns only private IP ( RFC 1918 ) addresses to the managed Google Kubernetes Engine and Cloud SQL VMs in your environment.

