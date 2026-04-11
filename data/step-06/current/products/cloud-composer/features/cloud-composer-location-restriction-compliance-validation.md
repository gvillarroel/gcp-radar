---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.925Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer location restriction compliance validation"
feature_slug: "cloud-composer-location-restriction-compliance-validation"
latest_feature_date: "2020-12-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
keywords:
  - "composer"
  - "location"
  - "restriction"
  - "compliance"
  - "validation"
  - "now"
  - "validates"
  - "region"
---

# Cloud Composer location restriction compliance validation

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Composer now validates region compliance with organization location restriction policies during environment creation and updates.

## Extended Definition

Composer now validates region compliance with organization location restriction policies during environment creation and updates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions](https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)

## Supporting Pages

### "Configure resource location restrictions \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions](https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition to checking the location restrictions, Cloud Composer does the following: Stores user-customized Airflow images in regional Artifact Registry repositories.
- Caution: To get support from Cloud Customer Care, you might need to grant Google support engineers access to the Cloud Composer logs stored in Cloud Storage. gcloud Create a new Cloud Storage bucket. gcloud storage buckets create gs:// BUCKET NAME --location = LOCATION Replace: LOCATION with the region where the environment is located.
- To install Python dependencies in a Private IP environment when your location restrictions don't allow the US multi-region , use one of the following options: Use a private PyPI repository hosted in your VPC network .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure resource location restrictions Stay organized with collections Save and categorize content based on your preferences.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- New metrics have been added to monitor web server CPU and memory usage: CPU usage time CPU reserved cores Memory bytes used Memory quota During environment creation and updates, Composer will now verify whether you have chosen a region compliant with any location restriction organization policies.
- Feature Airflow 1.10.6 and 1.10.9: You can now specify a location argument when creating a BigQueryCheckOperator to use it in a different region from the Composer environment.
- Change New images are available in Cloud Composer 2: composer-2.13.1-airflow-2.10.5 (default) composer-2.13.1-airflow-2.9.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.3 (default) composer-3-airflow-2.9.3-build.23 Change The following Cloud Composer versions have an extended upgrade timeline: composer-3-airflow-2.10.5-build.3 composer-3-airflow-2.9.3-build.23 composer-2.13.1-airflow-2.10.5 composer-2.13.1-airflow-2.9.3 May 07, 2025 Feature Data lineage in Cloud Composer now uses OpenLineage in all regions supported by Cloud Composer.
- May 26, 2025 Feature (Cloud Composer 3) New metrics that show the number of active Airflow components are now available for Cloud Composer 3 environments: The number of active schedulers The number of active DAG processors The number of active triggerers The number of active web servers Fixed (Cloud Composer 3) It's now possible to override the default scopes of access tokens in all regions supported by Cloud Composer 3.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- If both this field and nodeConfig.location are specified, this machineType must belong to the nodeConfig.location ; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields.
- If both this field and nodeConfig.machineType are specified, nodeConfig.machineType must belong to this location ; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields.
- JSON representation { "location" : string , "machineType" : string , "network" : string , "subnetwork" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "tags" : [ string ] , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "enableIpMasqAgent" : boolean , "composerNetworkAttachment" : string , "composerInternalIpv4CidrBlock" : string } Fields location string Optional.
- For example: "projects/{projectId}/regions/{regionId}/subnetworks/{subnetworkId}" If a subnetwork is provided, nodeConfig.network must also be provided, and the subnetwork must belong to the enclosing environment's project and location. diskSizeGb integer Optional.

