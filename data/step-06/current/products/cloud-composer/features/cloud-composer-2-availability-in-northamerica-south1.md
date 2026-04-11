---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:47.893Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 availability in northamerica-south1"
feature_slug: "cloud-composer-2-availability-in-northamerica-south1"
latest_feature_date: "2024-12-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip"
keywords:
  - "composer"
  - "availability"
  - "in"
  - "northamerica"
  - "south1"
  - "became"
  - "available"
  - "the"
---

# Cloud Composer 2 availability in northamerica-south1

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer 2 became available in the Mexico (northamerica-south1) region.

## Extended Definition

Cloud Composer 2 became available in the Mexico (northamerica-south1) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- This feature is gradually rolled out in several releases and is available in the following regions in this release: africa-south1, asia-east1, asia-east2, asia-northeast2, asia-northeast3, asia-south2, asia-southeast2, australia-southeast2, europe-central2, europe-north1, europe-north2, europe-southwest1, europe-west10, europe-west12, europe-west3, europe-west4, europe-west6, europe-west8, europe-west9, me-central1, me-central2, me-west1, northamerica-northeast1, northamerica-northeast2, northamerica-south1, southamerica-east1, southamerica-west1, us-east1, us-east5, us-south1, us-west2, us-west3 and us-west4.
- This change is gradually rolled out in several releases and is available in the following regions in this release: africa-south1, asia-east1, asia-northeast2, asia-northeast3, asia-south2, asia-southeast2, asia-southeast3, australia-southeast2, europe-central2, europe-north2, europe-southwest1, europe-west10, europe-west12, europe-west4, europe-west6, europe-west8, europe-west9, me-central1, me-central2, me-west1, northamerica-northeast1, northamerica-northeast2, northamerica-south1, southamerica-east1, southamerica-west1, us-east5, us-south1, us-west3, us-west4.
- In this release, it's available in the following regions: asia-east1, asia-east2, asia-northeast2, asia-northeast3, asia-south2, asia-southeast2, australia-southeast1, australia-southeast2, europe-central2, europe-north1, europe-north2, europe-southwest1, europe-west, europe-west10, europe-west12, europe-west6, europe-west8, europe-west9, me-central1, me-central2, me-west1, northamerica-northeast2, northamerica-south1, southamerica-east1, southamerica-west1, us-east5, us-south1, us-west, and us-west3.
- Change Cloud Composer 2.6.2 images are available: composer-2.6.2-airflow-2.6.3 (default) composer-2.6.2-airflow-2.5.3 February 15, 2024 Announcement Starting February 16, 2024, in the asia-east2, asia-northeast1, asia-northeast2, asia-northeast3, asia-south1, and australia-southeast1 regions it is possible to create new Cloud Composer 1 environments only in projects that already have Cloud Composer 1 environments .

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- For more information about deleting objects, see Deleting objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins delete \ --environment ENVIRONMENT NAME \ --location LOCATION \ PLUGIN TO DELETE Download plugins To download plugins, choose an option: Console In the Google Cloud console, go to the Environments page.
- For more information about deleting objects, see Downloading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins export \ --environment ENVIRONMENT NAME \ --location LOCATION \ --destination PATH TO LOCAL DESTINATION \ --source PATH IN FOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- For more information about uploading objects, see Uploading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins import \ --environment ENVIRONMENT NAME \ --location LOCATION \ --source PATH TO LOCAL FILE \ --destination PATH IN SUBFOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- View the plugin files. gcloud Use the following gcloud command: gcloud composer environments storage plugins list \ --environment ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.

### "Configure private IP networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Default IP ranges Region GKE control plane IP range Web server IP range Cloud SQL IP range africa-south1 172.16.64.0/23 172.31.223.0/24 10.0.0.0/12 asia-east1 172.16.42.0/23 172.31.255.0/24 10.0.0.0/12 asia-east2 172.16.0.0/23 172.31.255.0/24 10.0.0.0/12 asia-northeast1 172.16.2.0/23 172.31.254.0/24 10.0.0.0/12 asia-northeast2 172.16.32.0/23 172.31.239.0/24 10.0.0.0/12 asia-northeast3 172.16.30.0/23 172.31.240.0/24 10.0.0.0/12 asia-south1 172.16.4.0/23 172.31.253.0/24 10.0.0.0/12 asia-south2 172.16.50.0/23 172.31.230.0/24 10.0.0.0/12 asia-southeast1 172.16.40.0/23 172.31.235.0/24 10.0.0.0/12 asia-southeast2 172.16.44.0/23 172.31.233.0/24 10.0.0.0/12 australia-southeast1 172.16.6.0/23 172.31.252.0/24 10.0.0.0/12 australia-southeast2 172.16.56.0/23 172.31.227.0/24 10.0.0.0/12 europe-central2 172.16.36.0/23 172.31.237.0/24 10.0.0.0/12 europe-north1 172.16.48.0/23 172.31.231.0/24 10.0.0.0/12 europe-southwest1 172.16.58.0/23 172.31.226.0/24 10.0.0.0/12 europe-west1 172.16.8.0/23 172.31.251.0/24 10.0.0.0/12 europe-west10 172.16.62.0/23 172.31.224.0/24 10.0.0.0/12 europe-west12 172.16.62.0/23 172.31.224.0/24 10.0.0.0/12 europe-west2 172.16.10.0/23 172.31.250.0/24 10.0.0.0/12 europe-west3 172.16.12.0/23 172.31.249.0/24 10.0.0.0/12 europe-west4 172.16.42.0/23 172.31.234.0/24 10.0.0.0/12 europe-west6 172.16.14.0/23 172.31.248.0/24 10.0.0.0/12 europe-west8 172.16.60.0/23 172.31.225.0/24 10.0.0.0/12 europe-west9 172.16.46.0/23 172.31.232.0/24 10.0.0.0/12 me-central1 172.16.58.0/23 172.31.226.0/24 10.0.0.0/12 me-central2 172.16.64.0/23 172.31.223.0/24 10.0.0.0/12 me-west1 172.16.54.0/23 172.31.228.0/24 10.0.0.0/12 northamerica-northeast1 172.16.16.0/23 172.31.247.0/24 10.0.0.0/12 northamerica-northeast2 172.16.46.0/23 172.31.232.0/24 10.0.0.0/12 northamerica-south1 172.16.68.0/23 172.31.221.0/24 10.0.0.0/12 southamerica-east1 172.16.18.0/23 172.31.246.0/24 10.0.0.0/12 southamerica-west1 172.16.58.0/23 172.31.226.0/24 10.0.0.0/12 us-central1 172.16.20.0/23 172.31.245.0/24 10.0.0.0/12 us-east1 172.16.22.0/23 172.31.244.0/24 10.0.0.0/12 us-east4 172.16.24.0/23 172.31.243.0/24 10.0.0.0/12 us-east5 172.16.52.0/23 172.31.229.0/24 10.0.0.0/12 us-south1 172.16.56.0/23 172.31.227.0/24 10.0.0.0/12 us-west1 172.16.38.0/23 172.31.236.0/24 10.0.0.0/12 us-west2 172.16.34.0/23 172.31.238.0/24 10.0.0.0/12 us-west3 172.16.26.0/23 172.31.242.0/24 10.0.0.0/12 us-west4 172.16.28.0/23 172.31.241.0/24 10.0.0.0/12 (Optional) Configure connectivity to Google APIs and services As an option, you might want to route all traffic to Google APIs and services through several IP addresses that belong to the private.googleapis.com domain.
- Cloud Composer environments use the following domains: .googleapis.com is used to access other Google services. .pkg.dev is used to get environment images, such as when creating or updating an environment. .gcr.io GKE requires connectivity to Container Registry domain regardless of Cloud Composer version.
- To get IP ranges for a subnetwork, go to VPC Networks page and click on the network's name to see details: Go to VPC Networks VPC-native cluster configuration Cloud Composer supports VPC-native GKE clusters in your environment.
- To obtain environment cluster's IP ranges: Pod, Service, and Control Plane address ranges are available on the Clusters page of your environment's cluster: In Google Cloud console, go to the Environments page.

