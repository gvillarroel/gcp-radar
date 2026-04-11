---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.899Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer domain-restricted sharing"
feature_slug: "cloud-composer-domain-restricted-sharing"
latest_feature_date: "2021-02-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
keywords:
  - "composer"
  - "domain"
  - "restricted"
  - "sharing"
  - "added"
  - "for"
  - "environments"
  - "and"
---

# Cloud Composer domain-restricted sharing

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer added domain-restricted sharing support for environments and resources.

## Extended Definition

Cloud Composer added domain-restricted sharing support for environments and resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Fixed Improved the file synchronization error handling for environments that run under the Domain Restricted Sharing organizational policy .
- November 20, 2020 Feature Composer version 1.12.5 or newer: File synchronization between buckets in Domain restricted sharing compliant environments has been improved.
- Added validation to the v1 API so that environment creation fails quickly if Domain Restricted Sharing is enforced in the project.
- Change (Airflow 1.10.15) Upgraded apache-beam and google provider packages to version 2022.6.1: Support impersonation chain parameter for Dataflow runner in Apache Beam operators Added missing project id parameter for wait for job method in the Dataflow operators Added key secret project id parameter which specifies a project with KeyFile Change Cloud Composer 1.18.12 and 2.0.16 images are available: composer-1.18.12-airflow-1.10.15 (default) composer-1.18.12-airflow-2.1.4 composer-1.18.12-airflow-2.2.5 composer-2.0.16-airflow-2.1.4 composer-2.0.16-airflow-2.2.5 June 01, 2022 Feature Web server restarting is available in Preview in Cloud Composer 2.

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Composer supports Domain Restricted Sharing organizational policy .
- Compliance to standards See the pages linked below to check Cloud Composer's compliance with various standards: HIPAA Compliance Access Transparency PCI DSS ISO/IEC: 27001 , 27017 , 27018 SOC: SOC 1 , SOC 2 , SOC 3 NIST: NIST800-53 , NIST800-171 DRZ FedRamp Moderate Data Residency/Location Restrictions ( configuration guide for Cloud Composer) See also Some of the security features mentioned in this article are discussed in the the Airflow Summit 2020 presentation: Run Airflow DAGs in a secure way .
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Cloud Composer offers a handful of security features and compliances that are beneficial for enterprise companies with stricter security requirements.
- Cloud Composer 1 environments that were created based on GKE versions 1.18 and later use Shielded VMs to run the nodes of their environment cluster.

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- In addition to other log messages, you can check logs for information about cloud-airflow-prod@system.gserviceaccount.com and service- PROJECT ID @cloudcomposer-accounts.iam.gserviceaccount.com service accounts that configure components of your environments.
- Displaying a rendered template with functions in the web UI with DAG serialization enabled is supported for environments running Cloud Composer version 1.12.0 or later and Airflow version 1.10.9 or later.
- Create environments in a perimeter The following steps are required to deploy Cloud Composer inside a perimeter: Enable Access Context Manager API and Cloud Composer API for your project.
- Cloud Composer environments use the following domains: .googleapis.com is used to access other Google services. .pkg.dev is used to get environment images, such as when creating or updating an environment. .gcr.io GKE requires connectivity to Container Registry domain regardless of Cloud Composer version.

