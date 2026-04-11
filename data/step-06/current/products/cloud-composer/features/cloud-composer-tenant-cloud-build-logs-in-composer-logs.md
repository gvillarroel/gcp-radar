---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.012Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer tenant Cloud Build logs in Composer logs"
feature_slug: "cloud-composer-tenant-cloud-build-logs-in-composer-logs"
latest_feature_date: "2020-10-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
keywords:
  - "composer"
  - "tenant"
  - "build"
  - "logs"
  - "in"
  - "from"
  - "the"
  - "project"
---

# Cloud Composer tenant Cloud Build logs in Composer logs

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Build logs from the tenant project are now published in Composer logs under the build-log-webserver log name.

## Extended Definition

Cloud Build logs from the tenant project are now published in Composer logs under the build-log-webserver log name.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project](https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)

## Supporting Pages

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ConnectionType Represents connection type between Composer environment in Customer Project and the corresponding Tenant project, from a predefined list of available connection modes.
- The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved.
- When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. networkingConfig object ( NetworkingConfig ) Optional.
- The CIDR block from which IP range in tenant project will be reserved for Cloud SQL.

### "Access resources in another project \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project](https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access resources in another project Stay organized with collections Save and categorize content based on your preferences.
- If you want to use a service account from one project to run environments in another project, see Using a service account from another project .
- The value is an email address, such as service-account-name@example-project.iam.gserviceaccount.com . gcloud gcloud composer environments describe ENVIRONMENT NAME \ --location LOCATION \ --format = "get(config.nodeConfig.serviceAccount)" The value is an email address, such as service-account-name@example-project.iam.gserviceaccount.com .
- After you grant the required permissions and roles, you can access resources in a different project with the same default Airflow connections that you use to access resources in the project where your environment is located.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Feature Cloud Build logs from the tenant project are now published in the Composer logs.
- It comes with a number of new features and characteristics: All infrastructure hidden in a tenant project Evergreen versioning Simplified networking configuration Improved performance More reliable DAG parsing and scheduling as DAG Processor and Schedulers are now separate components 10 times bigger storage for Airflow workers As well as most functionalities already known from the previous Composer versions.
- Change (Airflow 2.10.2 and 2.9.3) The following preinstalled provider packages were upgraded to new major versions: apache-airflow-providers-apache-beam upgraded from 5.9.1 to 6.0.0 apache-airflow-providers-dbt-cloud upgraded from 3.11.2 to 4.0.0 apache-airflow-providers-hashicorp upgraded from 3.8.0 to 4.0.0 apache-airflow-providers-http upgraded from 4.13.3 to 5.0.0 apache-airflow-providers-mysql upgraded from 5.7.4 to 6.0.0 apache-airflow-providers-sendgrid upgraded from 3.6.0 to 4.0.0 apache-airflow-providers-sqlite upgraded from 3.9.1 to 4.0.0 apache-airflow-providers-ssh upgraded from 3.14.0 to 4.0.0 Change (Airflow 2.10.2 and 2.9.3) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 10.1.0 in Cloud Composer 2 images and Cloud Composer 3 builds.
- Change (Airflow 2.10.2 and 2.9.3) Preinstalled packages were changed: logbook was removed from preinstalled packages minimal-snowplow-tracker was removed from preinstalled packages mashumaro was downgraded from 3.15 to 3.14 Change New images are available in Cloud Composer 2: composer-2.11.2-airflow-2.10.2 (default) composer-2.11.2-airflow-2.9.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.2-build.8 (default) composer-3-airflow-2.9.3-build.15 Deprecated Cloud Composer versions 2.6.0 and 2.6.1 have reached their end of support period .

