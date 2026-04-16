---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.030Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Oregon (us-west1) region availability"
feature_slug: "cloud-composer-oregon-us-west1-region-availability"
latest_feature_date: "2021-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip"
keywords:
  - "composer"
  - "oregon"
  - "us"
  - "west1"
  - "region"
  - "availability"
  - "became"
  - "available"
---

# Cloud Composer Oregon (us-west1) region availability

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer became available in the Oregon (us-west1) region.

## Extended Definition

Cloud Composer became available in the Oregon (us-west1) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip)

## Supporting Pages

### "Migrate to Cloud Composer\_3 from Cloud Composer\_1 (Airflow 2) \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- COMPOSER 3 LOCATION with the region where the environment is located. (Airflow versions 2.9.1 and later) If there are quota errors while unpausing a large number of DAGs, you can use the following Airflow CLI commands to unpause all DAGs at once: gcloud composer environments run COMPOSER 3 ENV dags unpause \ --project PROJECT ID \ --location COMPOSER 3 LOCATION \ -- -y --treat-dag-id-as-regex ". " (Airflow versions earlier than 2.9.1) If there are quota errors while unpausing a large number of DAGs, it's possible to unpause DAGs using the Airflow REST API .
- COMPOSER 1 LOCATION with the region where the environment is located. (Airflow versions 2.9.1 and later) If there are quota errors while pausing a large number of DAGs, you can use the following Airflow CLI commands to pause all DAGs at once: gcloud composer environments run COMPOSER 1 ENV dags pause \ --project PROJECT ID \ --location COMPOSER 1 LOCATION \ -- -y --treat-dag-id-as-regex ". " (Airflow versions earlier than 2.9.1) If there are quota errors while pausing a large number of DAGs, it's possible to pause DAGs using the Airflow REST API .
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Note: This feature might not be available in some regions yet.
- Other migration guides From To Method Guide Cloud Composer 2 Cloud Composer 3 Side-by-side, using the migration script Script migration guide Cloud Composer 2 Cloud Composer 3 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 2 Cloud Composer 3 Side-by-side, using snapshots This guide Cloud Composer 1, Airflow 2 Cloud Composer 2 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 2 Cloud Composer 2 Side-by-side, manual transfer Manual migration guide Cloud Composer 1, Airflow 1 Cloud Composer 2, Airflow 2 Side-by-side, using snapshots Snapshots migration guide Cloud Composer 1, Airflow 1 Cloud Composer 2, Airflow 2 Side-by-side, manual transfer Manual migration guide Cloud Composer 1, Airflow 1 Cloud Composer 1, Airflow 2 Side-by-side, manual transfer Manual migration guide Before you begin Cloud Composer supports side-by-side migration from Cloud Composer 1 to Cloud Composer 3.

### "Configure private IP networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Default IP ranges Region GKE control plane IP range Web server IP range Cloud SQL IP range africa-south1 172.16.64.0/23 172.31.223.0/24 10.0.0.0/12 asia-east1 172.16.42.0/23 172.31.255.0/24 10.0.0.0/12 asia-east2 172.16.0.0/23 172.31.255.0/24 10.0.0.0/12 asia-northeast1 172.16.2.0/23 172.31.254.0/24 10.0.0.0/12 asia-northeast2 172.16.32.0/23 172.31.239.0/24 10.0.0.0/12 asia-northeast3 172.16.30.0/23 172.31.240.0/24 10.0.0.0/12 asia-south1 172.16.4.0/23 172.31.253.0/24 10.0.0.0/12 asia-south2 172.16.50.0/23 172.31.230.0/24 10.0.0.0/12 asia-southeast1 172.16.40.0/23 172.31.235.0/24 10.0.0.0/12 asia-southeast2 172.16.44.0/23 172.31.233.0/24 10.0.0.0/12 australia-southeast1 172.16.6.0/23 172.31.252.0/24 10.0.0.0/12 australia-southeast2 172.16.56.0/23 172.31.227.0/24 10.0.0.0/12 europe-central2 172.16.36.0/23 172.31.237.0/24 10.0.0.0/12 europe-north1 172.16.48.0/23 172.31.231.0/24 10.0.0.0/12 europe-southwest1 172.16.58.0/23 172.31.226.0/24 10.0.0.0/12 europe-west1 172.16.8.0/23 172.31.251.0/24 10.0.0.0/12 europe-west10 172.16.62.0/23 172.31.224.0/24 10.0.0.0/12 europe-west12 172.16.62.0/23 172.31.224.0/24 10.0.0.0/12 europe-west2 172.16.10.0/23 172.31.250.0/24 10.0.0.0/12 europe-west3 172.16.12.0/23 172.31.249.0/24 10.0.0.0/12 europe-west4 172.16.42.0/23 172.31.234.0/24 10.0.0.0/12 europe-west6 172.16.14.0/23 172.31.248.0/24 10.0.0.0/12 europe-west8 172.16.60.0/23 172.31.225.0/24 10.0.0.0/12 europe-west9 172.16.46.0/23 172.31.232.0/24 10.0.0.0/12 me-central1 172.16.58.0/23 172.31.226.0/24 10.0.0.0/12 me-central2 172.16.64.0/23 172.31.223.0/24 10.0.0.0/12 me-west1 172.16.54.0/23 172.31.228.0/24 10.0.0.0/12 northamerica-northeast1 172.16.16.0/23 172.31.247.0/24 10.0.0.0/12 northamerica-northeast2 172.16.46.0/23 172.31.232.0/24 10.0.0.0/12 northamerica-south1 172.16.68.0/23 172.31.221.0/24 10.0.0.0/12 southamerica-east1 172.16.18.0/23 172.31.246.0/24 10.0.0.0/12 southamerica-west1 172.16.58.0/23 172.31.226.0/24 10.0.0.0/12 us-central1 172.16.20.0/23 172.31.245.0/24 10.0.0.0/12 us-east1 172.16.22.0/23 172.31.244.0/24 10.0.0.0/12 us-east4 172.16.24.0/23 172.31.243.0/24 10.0.0.0/12 us-east5 172.16.52.0/23 172.31.229.0/24 10.0.0.0/12 us-south1 172.16.56.0/23 172.31.227.0/24 10.0.0.0/12 us-west1 172.16.38.0/23 172.31.236.0/24 10.0.0.0/12 us-west2 172.16.34.0/23 172.31.238.0/24 10.0.0.0/12 us-west3 172.16.26.0/23 172.31.242.0/24 10.0.0.0/12 us-west4 172.16.28.0/23 172.31.241.0/24 10.0.0.0/12 (Optional) Configure connectivity to Google APIs and services As an option, you might want to route all traffic to Google APIs and services through several IP addresses that belong to the private.googleapis.com domain.
- Cloud Composer environments use the following domains: .googleapis.com is used to access other Google services. .pkg.dev is used to get environment images, such as when creating or updating an environment. .gcr.io GKE requires connectivity to Container Registry domain regardless of Cloud Composer version.
- To get IP ranges for a subnetwork, go to VPC Networks page and click on the network's name to see details: Go to VPC Networks VPC-native cluster configuration Cloud Composer supports VPC-native GKE clusters in your environment.
- To obtain environment cluster's IP ranges: Pod, Service, and Control Plane address ranges are available on the Clusters page of your environment's cluster: In Google Cloud console, go to the Environments page.

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- To preregister a user with a custom role through Google Cloud CLI, run the following Airflow CLI command : gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users create -- \ -r ROLE \ -e USER EMAIL \ -u USER EMAIL \ -f FIRST NAME \ -l LAST NAME \ --use-random-password # The password value is required, but is not used Replace the following: ENVIRONMENT NAME : the name of the environment LOCATION : the region where the environment is located ROLE : an Airflow role for the user, for example, Op USER EMAIL : the user's email address FIRST NAME and LAST NAME : user's first name and last name Example: gcloud composer environments run example-environment \ --location us-central1 \ users create -- \ -r Op \ -e "example-user@example.com" \ -u "example-user@example.com" \ -f "Name" \ -l "Surname" \ --use-random-password Remove users Deleting a user from Airflow does not revoke access for that user, because they are automatically registered again next time they access the Airflow UI.
- To assign the Admin role, run the following Airflow CLI command with gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users add-role -- -e USER EMAIL -r Admin Replace: ENVIRONMENT NAME with the name of the environment.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Using Airflow UI Access Control Stay organized with collections Save and categorize content based on your preferences.
- Per-folder Roles Registration is available in Cloud Composer 1.18.12 and later versions in Airflow 2, and in Cloud Composer 1.13.4 and later versions in Airflow 1.

### "Configure privately used public IP ranges \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true // Specify PUPI addresses cluster ipv4 cidr block = "10.3.192.0/20" services ipv4 cidr block = "172.16.194.0/23" cluster secondary range name = null services secondary range name = null }] } private environment config { enable privately used public ips = true // Other private environment parameters } } } User-managed subnet ranges To create user-managed ranges : resource "google composer environment" "example environment" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { ip allocation policy = [{ use ip aliases = true cluster ipv4 cidr block = null services ipv4 cidr block = null cluster secondary range name = POD IP RANGE NAME services secondary range name = SERVICES IP RANGE NAME }] } private environment config { enable privately used public ips = true // Other private ip environment parameters } } Replace: ENVIRONMENT NAME with the name of the environment.
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true cluster ipv4 cidr block = null services ipv4 cidr block = null // Specify existing ranges cluster secondary range name = "public-1" services secondary range name = "public-2" }] } private environment config { enable privately used public ips = true // Other private environment parameters } } } What's next Configuring Private IP environments Creating environments About Private IP environments Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Subnet ranges managed by GKE To create subnet ranges managed by GKE : resource "google composer environment" "example environment" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { ip allocation policy = [{ use ip aliases = true cluster ipv4 cidr block = " POD IP RANGE " services ipv4 cidr block = " SERVICES IP RANGE " cluster secondary range name = null services secondary range name = null }] } private environment config { enable privately used public ips = true // Other private ip environment parameters } } } Replace: ENVIRONMENT NAME with the name of the environment.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "example-environment" , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , "clusterIpv4CidrBlock" : "10.3.192.0/20" , "servicesIpv4CidrBlock" : "172.16.194.0/23" } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , "enablePrivatelyUsedPublicIps" : true } } } User-managed subnet ranges To create user-managed ranges : // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : " ENVIRONMENT NAME " , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , "clusterSecondaryRangeName" : " POD IP RANGE " , "servicesSecondaryRangeName" : " SERVICES IP RANGE " } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , "enablePrivatelyUsedPublicIps" : true } } } Replace: ENVIRONMENT NAME with the name of the environment.

