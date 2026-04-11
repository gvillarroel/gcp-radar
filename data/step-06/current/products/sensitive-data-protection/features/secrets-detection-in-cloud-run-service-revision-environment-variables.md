---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:56.775Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Secrets detection in Cloud Run service revision environment variables"
feature_slug: "secrets-detection-in-cloud-run-service-revision-environment-variables"
latest_feature_date: "2024-10-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview"
keywords:
  - "secrets"
  - "detection"
  - "in"
  - "run"
  - "revision"
  - "environment"
  - "variables"
  - "sensitive"
---

# Secrets detection in Cloud Run service revision environment variables

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Sensitive Data Protection can detect secrets in Cloud Run service revision environment variables and send findings to Security Command Center.

## Extended Definition

Sensitive Data Protection can detect secrets in Cloud Run service revision environment variables and send findings to Security Command Center.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview](https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview)

## Supporting Pages

### Overview of sensitive data discovery | Sensitive Data Protection | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Overview of sensitive data discovery Sensitive Data Protection Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles The Sensitive Data Protection discovery service (sometimes called data profiler) continuously monitors the data resources in your organization, folder, or project.
- It classifies the data into infoTypes, and assesses the data sensitivity and ...

### Sensitive Data Protection IAM permissions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Sensitive Data Protection IAM permissions Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions The Cloud Data Loss Prevention Service Agent is automatically granted common permissions on the project that are needed for inspecting resources and is listed in the IAM section of the Google Cloud console.
- Note: If you are using Sensitive Data Protection to scan critical resources, such as those protected by additional custom Identity and Access Management roles, you must assign those additional IAM roles to the Cloud Data Loss Prevention Service Agent.
- The service agent exists indefinitely with the project and is only deleted when the project is deleted.
- Sensitive Data Protection relies on this service agent, so you should not remove it.

### Sensitive Data Protection overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview](https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Sensitive Data Protection overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview The Cloud Data Loss Prevention API lets you use the Sensitive Data Protection services programmatically.
- Through the DLP API, you can inspect data from inside and outside Google Cloud and build custom workloads on or off cloud.

