---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.341Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Google Display and Video 360 API v1.1 support in Cloud Composer"
feature_slug: "google-display-and-video-360-api-v1-1-support-in-cloud-composer"
latest_feature_date: "2023-04-18"
deprecation_date: "2023-04-27"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks"
keywords:
  - "display"
  - "and"
  - "video"
  - "360"
  - "api"
  - "v1"
  - "in"
  - "composer"
---

# Google Display and Video 360 API v1.1 support in Cloud Composer

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer deprecated Google Display and Video 360 API v1.1, and dependent operators stop working after the sunset date; deprecated on 2023-04-27.

## Extended Definition

Cloud Composer deprecated Google Display and Video 360 API v1.1, and dependent operators stop working after the sunset date; deprecated on 2023-04-27.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)

## Supporting Pages

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Support for Google Display and Video 360 Operators Google Display and Video 360 Operators in Cloud Composer versions earlier than 2.1.13 are based on the Display and Video 360 v1.1 API that is deprecated and its sunset date is April 27, 2023.
- Support for Google Campaign Manager 360 Operators Google Campaign Manager Operators in Cloud Composer versions earlier than 2.1.13 are based on the Campaign Manager 360 v3.5 API that is deprecated and its sunset date is May 1, 2023 .
- In addition to that, you might need to change your DAGs because because some of the Google Display and Video 360 operators are deprecated and replaced with new ones.
- If you use Google Display and Video 360 operators, then upgrade your environment to Cloud Composer version 2.1.13 or later.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Changes compared to version 2023.3.14+composer : Update Google Display and Video 360 operators to use API v2.
- Feature Composer now uses the Kubernetes v1 API, and is compatible with GKE 1.16 An updated haproxy configuration for Composer increases the maximum number of connections to 2000, and changes load balancing to be based on the number of connections.
- If you use Google Display and Video 360 operators, then upgrade your environment to Cloud Composer version 2.1.13 or later.
- Deprecated The Google Display and Video 360 API v.1.1 is deprecated and its sunset date is April 27, 2023.

### Configure authorized networks in Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example (Private IP environment): // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "example-environment" , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , }, "masterAuthorizedNetworksConfig" : { "enabled" : true , "cidrBlocks" : [ { "displayName" : "example range 1" , "cidrBlock" : "192.0.2.0/23" }, { "displayName" : "example range 2" , "cidrBlock" : "192.0.4.0/23" } ] } } } Terraform When you create an environment, the master authorized networks config block in the config block controls authorized networks for your environment.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.masterAuthorizedNetworksConfig "config" : { "masterAuthorizedNetworksConfig" : { "enabled" : true , "cidrBlocks" : [ { "displayName" : "example range 1" , "cidrBlock" : "192.0.2.0/23" }, { "displayName" : "example range 2" , "cidrBlock" : "192.0.4.0/23" } ] } } Terraform The master authorized networks config block in the config block controls authorized networks for your environment.
- Example (Private IP environment): resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true }] } private environment config { // Private environment parameters } master authorized networks config { enabled = true cidr blocks { cidr block = "192.0.2.0/23" display name = "example range 1" } cidr blocks { cidr block = "192.0.4.0/23" display name = "example range 2" } } } } Specify authorized networks for an existing environment You can specify authorized networks for an existing environment. gcloud To specify authorized networks, use the --enable-master-authorized-networks argument.
- To specify authorized networks for a Private IP environment: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : " ENVIRONMENT NAME " , "config" : { "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , } }, "privateEnvironmentConfig" : { "enablePrivateEnvironment" : true , }, "masterAuthorizedNetworksConfig" : { "enabled" : true , "cidrBlocks" : [ { "displayName" : " AUTHORIZED NETWORK NAME " , "cidrBlock" : " AUTHORIZED NETWORK RANGE " } ] } } } Replace: ENVIRONMENT NAME with the name of the environment.

