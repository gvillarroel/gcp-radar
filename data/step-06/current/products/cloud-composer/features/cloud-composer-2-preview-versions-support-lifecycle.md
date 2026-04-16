---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.249Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 preview versions support lifecycle"
feature_slug: "cloud-composer-2-preview-versions-support-lifecycle"
latest_feature_date: "2024-03-13"
deprecation_date: "2024-03-13"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview"
keywords:
  - "composer"
  - "preview"
  - "versions"
  - "lifecycle"
  - "all"
  - "of"
  - "are"
  - "no"
---

# Cloud Composer 2 preview versions support lifecycle

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

All preview versions of Cloud Composer 2 are no longer supported after their security notifications period ended; deprecated on 2024-03-13.

## Extended Definition

All preview versions of Cloud Composer 2 are no longer supported after their security notifications period ended; deprecated on 2024-03-13.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)

## Supporting Pages

### "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- Source ID: `site-iam-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For each service account, add another role, compute.networkUser using one of the following options: Grant this role at the subnet level to allow a service account to set up the VPC peerings required by Cloud Composer.
- To set up Shared VPC, select the following IP ranges in the host project: Primary IP Range of the subnet used by GKE nodes that Cloud Composer uses as its Compute Engine layer.
- On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life .
- Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.pypiPackages.EXAMPLE PACKAGE, // config.softwareConfig.pypiPackages.ANOTHER PACKAGE { "config" : { "softwareConfig" : { "pypiPackages" : { "EXAMPLE PACKAGE" : "" , "ANOTHER PACKAGE" : ">=1.10.3" } } } } Terraform The pypi packages block in the software config block specifies packages. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { pypi packages = { PACKAGE NAME = " EXTRAS AND VERSION " } } } } Replace: ENVIRONMENT NAME with the name of the environment.
- Example: resource "google composer environment" "example" { name = "example-environment" region = "us-central1" config { software config { pypi packages = { scipy = ">=1.10.3" scikit-learn = "" nltk = "[machine learning]" } } } } Install packages from a public repository You can install packages hosted in other repositories that have a public IP address.
- What's next Troubleshooting package installation Troubleshooting updates and upgrades Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life .

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Environment creation fails in projects with Identity-Aware Proxy APIs added to the VPC Service Controls perimeter Note: This issue affects all versions of Cloud Composer 1.
- Only the following list of Non-RFC 1918 ranges is supported in Cloud Composer: 100.64.0.0/10 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 240.0.0.0/4 Airflow UI does not show tasks logs when DAG Serialization is on in Composer 1.10.2 and Composer 1.10.3 Enabling DAG serialization in environments using Composer versions 1.10.2 and 1.10.3 prevents logs from showing in the Airflow web server.
- Cloud Composer 1 environment creation fails when the compute.vmCanIpForward policy is disabled Cloud Composer 1 environments created in the non-VPC-Native (using alias IP) mode require this policy to allow the creation of VMs with the enabled IP Forwarding feature.
- Non-RFC 1918 address ranges are partially supported for Pods and Services Cloud Composer depends on GKE to deliver support for non-RFC 1918 addresses for Pods and Services.

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Composer 1 environments that were created based on GKE versions 1.18 and later use Shielded VMs to run the nodes of their environment cluster.
- On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life .
- Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
- Compliance to standards See the pages linked below to check Cloud Composer's compliance with various standards: HIPAA Compliance Access Transparency PCI DSS ISO/IEC: 27001 , 27017 , 27018 SOC: SOC 1 , SOC 2 , SOC 3 NIST: NIST800-53 , NIST800-171 DRZ FedRamp Moderate Data Residency/Location Restrictions ( configuration guide for Cloud Composer) See also Some of the security features mentioned in this article are discussed in the the Airflow Summit 2020 presentation: Run Airflow DAGs in a secure way .

