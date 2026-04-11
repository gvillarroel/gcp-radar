---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:56.751Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "MEDICAL_ID infoType detector"
feature_slug: "medical-id-infotype-detector"
latest_feature_date: "2026-01-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs"
keywords:
  - "medical"
  - "id"
  - "infotype"
  - "detector"
  - "detects"
  - "the"
  - "in"
  - "content"
---

# MEDICAL_ID infoType detector

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Detects the MEDICAL_ID infoType in content.

## Extended Definition

Detects the MEDICAL_ID infoType in content.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest)
- [https://docs.cloud.google.com/sensitive-data-protection/docs](https://docs.cloud.google.com/sensitive-data-protection/docs)

## Supporting Pages

### Sensitive Data Protection IAM permissions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Note: If you are using Sensitive Data Protection to scan critical resources, such as those protected by additional custom Identity and Access Management roles, you must assign those additional IAM roles to the Cloud Data Loss Prevention Service Agent.
- Sensitive Data Protection IAM permissions Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions The Cloud Data Loss Prevention Service Agent is automatically granted common permissions on the project that are needed for inspecting resources and is listed in the IAM section of the Google Cloud console.
- The service agent exists indefinitely with the project and is only deleted when the project is deleted.

### Sensitive Data Protection (DLP API) | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
- To call this service, we recommend that you use the Google-provided client libraries.
- Sensitive Data Protection (DLP API) Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest The Cloud Data Loss Prevention API (DLP API) is part of Sensitive Data Protection. ...
- A Discovery Document is a machine-readable specification for describing and consuming REST ...

### Sensitive Data Protection documentation | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs](https://docs.cloud.google.com/sensitive-data-protection/docs)
- Source ID: `site-docs-root`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- The ability to define custom infoType detectors using dictionaries, regular expressions, and contextual elements.
- Sensitive Data Protection documentation Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs Sensitive Data Protection includes: Over 200 built-in information type (or &quot;infoType&quot;) detectors.

