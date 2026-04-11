---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.553Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer IP Masquerade agent support"
feature_slug: "cloud-composer-ip-masquerade-agent-support"
latest_feature_date: "2022-06-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
keywords:
  - "composer"
  - "ip"
  - "masquerade"
  - "agent"
  - "and"
  - "now"
  - "provide"
  - "ga"
---

# Cloud Composer IP Masquerade agent support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer 1 and 2 now provide GA support for the IP Masquerade agent.

## Extended Definition

Cloud Composer 1 and 2 now provide GA support for the IP Masquerade agent.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent](https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)

## Supporting Pages

### "Enable the IP Masquerade agent in Cloud Composer environments \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent](https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Enable the IP Masquerade agent in Cloud Composer environments Stay organized with collections Save and categorize content based on your preferences.
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { image version = "composer-1.20.12-airflow-1.10.15" } node config { ip allocation policy = [{ use ip aliases = true // Other networking configuration }] enable ip masq agent = true } } } Configure the IP Masquerade agent Caution: Cloud Composer enables intranode visibility on GKE clusters.
- For more information about using and configuring the IP Masquerade agent in Cloud Composer 1, see Configuring an IP masquerade agent in Standard clusters .
- You must also enable IP alias with the use ip aliases field in the ip allocation policy block. resource "google composer environment" "example environment" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { image version = "composer-1.20.12-airflow-1.10.15" } node config { ip allocation policy = [{ use ip aliases = true // Other networking configuration }] enable ip masq agent = true } } Replace: ENVIRONMENT NAME with the name of the environment.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "office net 1" }, allowed ip range { value = "192.0.4.0/24" description = "office net 3" } } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } Step 7. (Optional) Specify Airflow configuration overrides and environment variables You can set up Airflow configuration overrides and environment variables when you create an environment.
- Note: The Airflow web server of your environment is always protected by IAM, regardless of the IP ranges that are allowed to access it. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } node config { service account = " SERVICE ACCOUNT " } } } Replace: WS IP RANGE with the IP range, in the CIDR notation, that can access Airflow UI.
- This prevents all internet access to the control plane. --enable-master-authorized-networks and --master-authorized-networks arguments configure authorized networks for your environment. --enable-privately-used-public-ips configures privately used public IP addresses for your environment. --enable-ip-masq-agent enables the IP Masquerade agent .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "maintenanceWindow" : { "startTime" : "2023-01-01T01:00:00Z" , "endTime" : "2023-01-01T07:00:00Z" , "recurrence" : "FREQ=WEEKLY;BYDAY=SU,WE,SA" }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Terraform The maintenance window block specifies the maintenance windows for your environment: resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { maintenance window { start time = " DATETIME START " end time = " DATETIME END " recurrence = " MAINTENANCE RECURRENCE " } node config { service account = " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Feature IP Masquerade agent support is now generally available (GA) in Cloud Composer 1 and Cloud Composer 2.
- Change Cloud Composer 1.20.2 and 2.1.2 images are available: composer-1.20.2-airflow-1.10.15 (default) composer-1.20.2-airflow-2.2.5 composer-1.20.2-airflow-2.3.4 composer-2.1.2-airflow-2.2.5 composer-2.1.2-airflow-2.3.4 (default) December 06, 2022 Feature (Cloud Composer 2) Environment snapshots and Scheduled snapshots are now generally available (GA) for Cloud Composer 2 versions 2.1.1 and later.
- Change Cloud Composer 1.18.4 and 2.0.8 images are available: composer-2.0.8-airflow-2.2.3 composer-2.0.8-airflow-2.1.4 composer-1.18.4-airflow-2.2.3 composer-1.18.4-airflow-2.1.4 composer-1.18.4-airflow-1.10.15 (default) March 17, 2022 Change Environment labels are now propagated to the environment's bucket.
- New metrics have been added to monitor web server CPU and memory usage: CPU usage time CPU reserved cores Memory bytes used Memory quota During environment creation and updates, Composer will now verify whether you have chosen a region compliant with any location restriction organization policies.

