---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:56.899Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "InspectConfig default likelihood"
feature_slug: "inspectconfig-default-likelihood"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions"
keywords:
  - "inspectconfig"
  - "default"
  - "likelihood"
  - "applies"
  - "so"
  - "findings"
  - "below"
  - "possible"
---

# InspectConfig default likelihood

Product: Sensitive Data Protection
Coverage: LOW

## Step 02 Summary

InspectConfig applies a default likelihood so findings below POSSIBLE are excluded automatically.

## Extended Definition

InspectConfig applies a default likelihood so findings below POSSIBLE are excluded automatically.

## Evidence Summary

Fast-mode lexical matching selected 1 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions)

## Supporting Pages

### Sensitive Data Protection IAM permissions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Sensitive Data Protection IAM permissions Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions The Cloud Data Loss Prevention Service Agent is automatically granted common permissions on the project that are needed for inspecting resources and is listed in the IAM section of the Google Cloud console.
- Note: If you are using Sensitive Data Protection to scan critical resources, such as those protected by additional custom Identity and Access Management roles, you must assign those additional IAM roles to the Cloud Data Loss Prevention Service Agent.
- Sensitive Data Protection relies on this service agent, so you should not remove it.

