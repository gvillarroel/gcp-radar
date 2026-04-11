---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:56.903Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Content de-identification"
feature_slug: "content-de-identification"
latest_feature_date: "2017-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/iam-roles"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs"
keywords:
  - "content"
  - "de"
  - "identification"
  - "provides"
  - "the"
  - "ability"
  - "to"
  - "identify"
---

# Content de-identification

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Provides the ability to de-identify content through the content.deidentify API.

## Extended Definition

Provides the ability to de-identify content through the content.deidentify API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-roles](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-roles)
- [https://docs.cloud.google.com/sensitive-data-protection/docs](https://docs.cloud.google.com/sensitive-data-protection/docs)

## Supporting Pages

### Sensitive Data Protection IAM permissions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Sensitive Data Protection IAM permissions Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions The Cloud Data Loss Prevention Service Agent is automatically granted common permissions on the project that are needed for inspecting resources and is listed in the IAM section of the Google Cloud console.
- Note: If you are using Sensitive Data Protection to scan critical resources, such as those protected by additional custom Identity and Access Management roles, you must assign those additional IAM roles to the Cloud Data Loss Prevention Service Agent.
- The service agent exists indefinitely with the project and is only deleted when the project is deleted.

### IAM roles | Sensitive Data Protection | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-roles](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-roles)
- Source ID: `site-iam-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IAM roles Sensitive Data Protection Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/iam-roles Roles limit an authenticated identity&#x27;s ability to access resources.
- Only grant an identity the permissions it needs in order to interact with applicable Google Cloud APIs, features, ...

### Sensitive Data Protection documentation | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs](https://docs.cloud.google.com/sensitive-data-protection/docs)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- The ability to define custom infoType detectors using dictionaries, regular expressions, and contextual elements.
- Sensitive Data Protection documentation Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs Sensitive Data Protection includes: Over 200 built-in information type (or &quot;infoType&quot;) detectors.

