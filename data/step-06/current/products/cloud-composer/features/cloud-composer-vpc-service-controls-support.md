---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.157Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer VPC Service Controls support"
feature_slug: "cloud-composer-vpc-service-controls-support"
latest_feature_date: "2020-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc"
keywords:
  - "composer"
  - "vpc"
  - "controls"
  - "now"
  - "supports"
  - "added"
  - "in"
  - "beta"
---

# Cloud Composer VPC Service Controls support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer now supports VPC Service Controls; Cloud Composer added VPC Service Controls support in Beta.

## Extended Definition

Cloud Composer now supports VPC Service Controls; Cloud Composer added VPC Service Controls support in Beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)

## Supporting Pages

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Environment creation fails in projects with Identity-Aware Proxy APIs added to the VPC Service Controls perimeter Note: This issue affects all versions of Cloud Composer 1.
- If you use Private Google Access and send traffic over private.googleapis.com Virtual IPs, or VPC Service Controls and send traffic over restricted.googleapis.com Virtual IPs, make sure that your Cloud DNS is configured also for .composer.cloud.google.com domain names.
- Cloud Composer 1 environment creation fails when the compute.vmCanIpForward policy is disabled Cloud Composer 1 environments created in the non-VPC-Native (using alias IP) mode require this policy to allow the creation of VMs with the enabled IP Forwarding feature.
- Usage of Deployment Manager to manage Google Cloud resources protected by VPC Service Controls Cloud Composer 1 and Cloud Composer 2 versions 2.0.x use Deployment Manager to create components of Cloud Composer environments.

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Install PyPI packages in VPC Service Controls In the default VPC Service Controls configuration, Cloud Composer only supports installing PyPI packages from private repositories that are reachable from the internal IP address space of the VPC network.
- VPC Service Controls support for Cloud Composer means that: Cloud Composer can now be selected as a secured service inside a VPC Service Controls perimeter.
- By configuring your environment with VPC Service Controls, you can keep sensitive data private while taking advantage of the fully-managed workflow orchestration capabilities of Cloud Composer.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 VPC Service Controls enable organizations to define a perimeter around Google Cloud resources to mitigate data exfiltration risks.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- What's next Troubleshooting environment creation Configuring Shared VPC Configuring VPC Service Controls Adding and updating DAGs Accessing Airflow UI Updating and deleting environments About Cloud Composer versions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When used with Cloud Composer, VPC Service Controls have several known limitations .
- Note: Cloud Composer 1 supports only private IP environments with VPC peerings.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "maintenanceWindow" : { "startTime" : "2023-01-01T01:00:00Z" , "endTime" : "2023-01-01T07:00:00Z" , "recurrence" : "FREQ=WEEKLY;BYDAY=SU,WE,SA" }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Terraform The maintenance window block specifies the maintenance windows for your environment: resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { maintenance window { start time = " DATETIME START " end time = " DATETIME END " recurrence = " MAINTENANCE RECURRENCE " } node config { service account = " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .

### "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Configure the service project If Cloud Composer environments were never created in the service project, then provision the Composer Service Agent Account in the service project : gcloud beta services identity create --service = composer.googleapis.com Configure the host project Configure the host project as described further.
- In the host project: Edit permissions for the Composer Service Agent account, service- SERVICE PROJECT NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com ) For this account, add another role on the project level: For Private IP environments, add the Composer Shared VPC Agent role.
- For each service account, add another role, compute.networkUser using one of the following options: Grant this role at the subnet level to allow a service account to set up the VPC peerings required by Cloud Composer.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure Shared VPC networking Stay organized with collections Save and categorize content based on your preferences.

