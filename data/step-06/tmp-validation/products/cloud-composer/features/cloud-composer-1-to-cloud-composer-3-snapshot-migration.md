---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:01.904Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 1 to Cloud Composer 3 snapshot migration"
feature_slug: "cloud-composer-1-to-cloud-composer-3-snapshot-migration"
latest_feature_date: "2025-05-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-2/composer-overview"
  - "https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-overview"
keywords:
  - "migrating"
  - "migration"
  - "snapshots"
  - "snapshot"
  - "environments"
  - "supports"
---

# Cloud Composer 1 to Cloud Composer 3 snapshot migration

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports migrating environments from Cloud Composer 1 to Cloud Composer 3 by using snapshots.

## Extended Definition

Cloud Composer supports migrating environments from Cloud Composer 1 to Cloud Composer 3 by using snapshots.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- [https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots](https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)

## Supporting Pages

### "Save and load environment snapshots \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots](https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment:loadSnapshot { "snapshotPath" : "gs://us-central1-example-916807e1-bucket/snapshots/example-project us-central1 example-environment 2022-01-05T18-59-00" , "skipPypiPackagesInstallation" : "False" } Terraform It is not possible to save and load environment snapshots using Terraform.
- The following example uses the default location: gcloud composer environments snapshots save \ example-environment \ --location us-central1 The following example saves to a custom folder: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" API Construct an environments.saveSnapshot API request.
- If you load a snapshot of an environment with installed custom PyPI packages , then Cloud Composer does not install these custom packages. gcloud composer environments snapshots load \ DESTINATION ENVIRONMENT NAME \ --location LOCATION \ --snapshot-path " SNAPSHOT PATH " Replace: DESTINATION ENVIRONMENT NAME with the name of the environment where you want to load the snapshot.
- Example: // POST https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment:saveSnapshot { "snapshotLocation" : "gs://us-central1-example-916807e1-bucket/snapshots" } Terraform It is not possible to save and load environment snapshots from Terraform.

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Private Service Connect environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Environment networking Cloud Composer supports several networking configurations for environments, with many configuration options.
- What's next Security overview Create environments Environment architecture Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Logging and monitoring for DAGs, Airflow components, and Cloud Composer environments: You can view Airflow logs that are associated with single DAG tasks in the Airflow web interface and the logs folder in the environment's bucket .

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Environment networking Cloud Composer supports several networking configurations for environments, with many configuration options.
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- What's next Security overview Create environments Environment architecture Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Logging and monitoring for DAGs, Airflow components, and Cloud Composer environments: You can view Airflow logs that are associated with single DAG tasks in the Airflow web interface and the logs folder in the environment's bucket .

