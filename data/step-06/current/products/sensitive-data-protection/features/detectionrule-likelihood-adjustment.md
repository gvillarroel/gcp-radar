---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:56.893Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "DetectionRule likelihood adjustment"
feature_slug: "detectionrule-likelihood-adjustment"
latest_feature_date: "2018-02-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview"
keywords:
  - "detectionrule"
  - "likelihood"
  - "adjustment"
  - "can"
  - "adjust"
  - "finding"
  - "based"
  - "on"
---

# DetectionRule likelihood adjustment

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

DetectionRule can adjust a finding's likelihood based on related content in its vicinity.

## Extended Definition

DetectionRule can adjust a finding's likelihood based on related content in its vicinity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview](https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview)

## Supporting Pages

### Sensitive Data Protection IAM permissions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Note: If you are using Sensitive Data Protection to scan critical resources, such as those protected by additional custom Identity and Access Management roles, you must assign those additional IAM roles to the Cloud Data Loss Prevention Service Agent.
- Sensitive Data Protection IAM permissions Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions The Cloud Data Loss Prevention Service Agent is automatically granted common permissions on the project that are needed for inspecting resources and is listed in the IAM section of the Google Cloud console.
- The service agent exists indefinitely with the project and is only deleted when the project is deleted.
- Sensitive Data Protection relies on this service agent, so you should not remove it.

### Method types | Sensitive Data Protection | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Method types Sensitive Data Protection Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types Sensitive Data Protection includes different types of methods that you can use to inspect, transform (de-identify), discover, and classify data.
- Using these methods, you can scan data both on and off Google Cloud and optimize the behavior of ...

### Sensitive Data Protection overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview](https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Through the DLP API, you can inspect data from inside and outside Google Cloud and build custom workloads on or off cloud.
- Sensitive Data Protection overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview The Cloud Data Loss Prevention API lets you use the Sensitive Data Protection services programmatically.

