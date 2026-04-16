---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.814Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Private IP environments"
feature_slug: "private-ip-environments"
latest_feature_date: "2020-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip"
keywords:
  - "private"
  - "ip"
  - "environments"
  - "composer"
  - "generally"
  - "available"
  - "beta"
  - "isolate"
---

# Private IP environments

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Private IP Cloud Composer environments are generally available; Private IP Cloud Composer environments are available in beta to isolate managed GKE and Cloud SQL resources from the public internet.

## Extended Definition

Private IP Cloud Composer environments are generally available; Private IP Cloud Composer environments are available in beta to isolate managed GKE and Cloud SQL resources from the public internet.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "maintenanceWindow" : { "startTime" : "2023-01-01T01:00:00Z" , "endTime" : "2023-01-01T07:00:00Z" , "recurrence" : "FREQ=WEEKLY;BYDAY=SU,WE,SA" }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Terraform The maintenance window block specifies the maintenance windows for your environment: resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { maintenance window { start time = " DATETIME START " end time = " DATETIME END " recurrence = " MAINTENANCE RECURRENCE " } node config { service account = " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "imageVersion" : "composer-1.20.12-airflow-1.10.15" }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform To create an environment with default parameters is a specified location, add the following resource block to your Terraform configuration and run terraform apply . resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { image version = " IMAGE VERSION " } node config { service account = " SERVICE ACCOUNT " } } } Important: You must specify an image version for Cloud Composer 1.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "tags" : [ "group1" , "production" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following fields define network tags for your environment: tags field in the node config block specifies a comma-separated list of network tags applied to all node VMs. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { tags = [ " TAGS " ] service account = " SERVICE ACCOUNT " } } } Replace: TAGS with a comma-separated list of network tags.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { airflow config overrides = { core-dags are paused at creation = "True" webserver-dag orientation = "TB" } env variables = { SENDGRID MAIL FROM = "user@example.com" SENDGRID API KEY = "example-key" } } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 8. (Optional) Specify maintenance windows By default, Cloud Composer 1 environments do not have defined maintenance windows if you create them using Google Cloud console, API, or Terraform.

### "Configure privately used public IP ranges \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true cluster ipv4 cidr block = null services ipv4 cidr block = null // Specify existing ranges cluster secondary range name = "public-1" services secondary range name = "public-2" }] } private environment config { enable privately used public ips = true // Other private environment parameters } } } What's next Configuring Private IP environments Creating environments About Private IP environments Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true // Specify PUPI addresses cluster ipv4 cidr block = "10.3.192.0/20" services ipv4 cidr block = "172.16.194.0/23" cluster secondary range name = null services secondary range name = null }] } private environment config { enable privately used public ips = true // Other private environment parameters } } } User-managed subnet ranges To create user-managed ranges : resource "google composer environment" "example environment" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { ip allocation policy = [{ use ip aliases = true cluster ipv4 cidr block = null services ipv4 cidr block = null cluster secondary range name = POD IP RANGE NAME services secondary range name = SERVICES IP RANGE NAME }] } private environment config { enable privately used public ips = true // Other private ip environment parameters } } Replace: ENVIRONMENT NAME with the name of the environment.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "example-environment" , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , "clusterIpv4CidrBlock" : "10.3.192.0/20" , "servicesIpv4CidrBlock" : "172.16.194.0/23" } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , "enablePrivatelyUsedPublicIps" : true } } } User-managed subnet ranges To create user-managed ranges : // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : " ENVIRONMENT NAME " , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , "clusterSecondaryRangeName" : " POD IP RANGE " , "servicesSecondaryRangeName" : " SERVICES IP RANGE " } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , "enablePrivatelyUsedPublicIps" : true } } } Replace: ENVIRONMENT NAME with the name of the environment.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --enable-ip-alias \ --enable-private-environment \ --enable-privately-used-public-ips \ --cluster-ipv4-cidr 10 .3.192.0/20 \ --services-ipv4-cidr 172 .16.194.0/23 User-managed subnet ranges To create user-managed ranges : gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --enable-ip-alias \ --enable-private-environment \ --enable-privately-used-public-ips \ --cluster-secondary-range-name POD IP RANGE NAME \ --services-secondary-range-name SERVICES IP RANGE NAME Replace: ENVIRONMENT NAME with the name of the environment.

### "Configure private IP networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Private IP environments, Cloud Composer assigns only private IP ( RFC 1918 ) addresses to the managed Google Kubernetes Engine and Cloud SQL VMs in your environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page provides information about configuring your Google Cloud project networking for Private IP environments.
- Cloud Composer environments use the following domains: .googleapis.com is used to access other Google services. .pkg.dev is used to get environment images, such as when creating or updating an environment. .gcr.io GKE requires connectivity to Container Registry domain regardless of Cloud Composer version.
- To obtain environment cluster's IP ranges: Pod, Service, and Control Plane address ranges are available on the Clusters page of your environment's cluster: In Google Cloud console, go to the Environments page.

