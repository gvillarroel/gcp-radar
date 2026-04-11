---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.107Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer London region availability"
feature_slug: "cloud-composer-london-region-availability"
latest_feature_date: "2019-06-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
keywords:
  - "composer"
  - "london"
  - "region"
  - "availability"
  - "became"
  - "available"
  - "in"
  - "the"
---

# Cloud Composer London region availability

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer became available in the London (europe-west2) region.

## Extended Definition

Cloud Composer became available in the London (europe-west2) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)

## Supporting Pages

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To ensure that web server remains accessible regardless of DAG load time, you can configure asynchronous DAG loading to parse and load DAGs in the background at a pre-configured interval (available in composer-1.7.1-airflow-1.10.2 and later versions).
- To specify several IP ranges, use this argument multiple times. --web-server-deny-all forbids access for all IP addresses. gcloud composer environments update ENVIRONMENT NAME \ --location LOCATION \ --update-web-server-allow-ip ip range = WS IP RANGE ,description = WS RANGE DESCRIPTION Replace the following: ENVIRONMENT NAME : the name of your environment.

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- For more information about deleting objects, see Deleting objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins delete \ --environment ENVIRONMENT NAME \ --location LOCATION \ PLUGIN TO DELETE Download plugins To download plugins, choose an option: Console In the Google Cloud console, go to the Environments page.
- For more information about deleting objects, see Downloading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins export \ --environment ENVIRONMENT NAME \ --location LOCATION \ --destination PATH TO LOCAL DESTINATION \ --source PATH IN FOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- For more information about uploading objects, see Uploading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins import \ --environment ENVIRONMENT NAME \ --location LOCATION \ --source PATH TO LOCAL FILE \ --destination PATH IN SUBFOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- View the plugin files. gcloud Use the following gcloud command: gcloud composer environments storage plugins list \ --environment ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Change New images are available in Cloud Composer 2: composer-2.13.1-airflow-2.10.5 (default) composer-2.13.1-airflow-2.9.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.3 (default) composer-3-airflow-2.9.3-build.23 Change The following Cloud Composer versions have an extended upgrade timeline: composer-3-airflow-2.10.5-build.3 composer-3-airflow-2.9.3-build.23 composer-2.13.1-airflow-2.10.5 composer-2.13.1-airflow-2.9.3 May 07, 2025 Feature Data lineage in Cloud Composer now uses OpenLineage in all regions supported by Cloud Composer.
- May 26, 2025 Feature (Cloud Composer 3) New metrics that show the number of active Airflow components are now available for Cloud Composer 3 environments: The number of active schedulers The number of active DAG processors The number of active triggerers The number of active web servers Fixed (Cloud Composer 3) It's now possible to override the default scopes of access tokens in all regions supported by Cloud Composer 3.
- Change Cloud Composer 2.6.2 images are available: composer-2.6.2-airflow-2.6.3 (default) composer-2.6.2-airflow-2.5.3 February 15, 2024 Announcement Starting February 16, 2024, in the asia-east2, asia-northeast1, asia-northeast2, asia-northeast3, asia-south1, and australia-southeast1 regions it is possible to create new Cloud Composer 1 environments only in projects that already have Cloud Composer 1 environments .
- Change Cloud Composer 2.6.3 images are available: composer-2.6.3-airflow-2.6.3 (default) composer-2.6.3-airflow-2.5.3 February 26, 2024 Change Starting February 27, 2024, in the us-central1, europe-west1, europe-west2, europe-west3, europe-west6, us-east1, and us-east4 regions it is possible to create new Cloud Composer 1 environments only in projects that already have Cloud Composer 1 environments .

