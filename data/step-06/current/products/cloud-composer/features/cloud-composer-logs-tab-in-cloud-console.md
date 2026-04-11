---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.641Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Logs tab in Cloud Console"
feature_slug: "cloud-composer-logs-tab-in-cloud-console"
latest_feature_date: "2022-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
keywords:
  - "composer"
  - "logs"
  - "tab"
  - "in"
  - "console"
  - "the"
  - "became"
  - "generally"
---

# Cloud Composer Logs tab in Cloud Console

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

The Cloud Composer Logs tab in Cloud Console became generally available.

## Extended Definition

The Cloud Composer Logs tab in Cloud Console became generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)

## Supporting Pages

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To specify several IP ranges, use this argument multiple times. --web-server-deny-all forbids access for all IP addresses. gcloud composer environments update ENVIRONMENT NAME \ --location LOCATION \ --update-web-server-allow-ip ip range = WS IP RANGE ,description = WS RANGE DESCRIPTION Replace the following: ENVIRONMENT NAME : the name of your environment.
- You can restart the web server using the restartWebServer API or the restart-web-server command in Google Cloud CLI: gcloud composer environments restart-web-server ENVIRONMENT NAME \ --location = LOCATION Replace the following: ENVIRONMENT NAME : the name of your environment.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Logs tab in Cloud Console is now generally available (GA).
- January 25, 2024 Feature The Logs in Cloud Logging Only feature is now generally available (GA): New Cloud Composer environments now save Airflow task logs only in Cloud Logging by default.
- April 06, 2023 Feature (Available without upgrading) Selected time ranges are now synchronized between the Monitoring tab and the Logs tab in Cloud Console.
- Airflow database upgrade logs are now published in the Composer logs under a separate log name.

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- For more information about deleting objects, see Deleting objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins delete \ --environment ENVIRONMENT NAME \ --location LOCATION \ PLUGIN TO DELETE Download plugins To download plugins, choose an option: Console In the Google Cloud console, go to the Environments page.
- For more information about deleting objects, see Downloading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins export \ --environment ENVIRONMENT NAME \ --location LOCATION \ --destination PATH TO LOCAL DESTINATION \ --source PATH IN FOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- For more information about uploading objects, see Uploading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins import \ --environment ENVIRONMENT NAME \ --location LOCATION \ --source PATH TO LOCAL FILE \ --destination PATH IN SUBFOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- View the plugin files. gcloud Use the following gcloud command: gcloud composer environments storage plugins list \ --environment ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.

