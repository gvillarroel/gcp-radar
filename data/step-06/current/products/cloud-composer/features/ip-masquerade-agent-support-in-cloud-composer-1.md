---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.755Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "IP Masquerade agent support in Cloud Composer 1"
feature_slug: "ip-masquerade-agent-support-in-cloud-composer-1"
latest_feature_date: "2021-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
keywords:
  - "ip"
  - "masquerade"
  - "agent"
  - "in"
  - "composer"
  - "supports"
  - "the"
  - "preview"
---

# IP Masquerade agent support in Cloud Composer 1

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer 1 supports the IP Masquerade agent in Preview for new environments.

## Extended Definition

Cloud Composer 1 supports the IP Masquerade agent in Preview for new environments.

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
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- About the IP Masquerade agent in Cloud Composer Cloud Composer supports the IP Masquerade agent for your environments.
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { image version = "composer-1.20.12-airflow-1.10.15" } node config { ip allocation policy = [{ use ip aliases = true // Other networking configuration }] enable ip masq agent = true } } } Configure the IP Masquerade agent Caution: Cloud Composer enables intranode visibility on GKE clusters.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Enable the IP Masquerade agent in Cloud Composer environments Stay organized with collections Save and categorize content based on your preferences.
- For more information about using and configuring the IP Masquerade agent in Cloud Composer 1, see Configuring an IP masquerade agent in Standard clusters .

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- This prevents all internet access to the control plane. --enable-master-authorized-networks and --master-authorized-networks arguments configure authorized networks for your environment. --enable-privately-used-public-ips configures privately used public IP addresses for your environment. --enable-ip-masq-agent enables the IP Masquerade agent .
- By using environments with the IP Masquerade agent, you can use many-to-one IP address translations in your environment's networking configurations.
- For more information about creating environments with IP Masquerade agent, see Enable the IP Masquerade agent .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "office net 1" }, { "value" : "192.0.4.0/24" , "description" : "office net 3" } ] }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, the allowed ip range block in the web server network access control block contains IP ranges that can access web server.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- September 29, 2021 Feature Cloud Composer supports the IP Masquerade agent in Preview.
- Fixed (Available without upgrading) Fixed a problem that caused Cloud Composer 1 environments with IP Masquerade Agent to break after an upgrade.
- Feature IP Masquerade agent support is now generally available (GA) in Cloud Composer 1 and Cloud Composer 2.
- Feature Cloud Composer supports Privately used public IP addresses in Preview.

