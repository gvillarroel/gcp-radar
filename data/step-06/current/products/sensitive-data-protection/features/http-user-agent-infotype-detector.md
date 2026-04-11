---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:56.787Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "HTTP_USER_AGENT infoType detector"
feature_slug: "http-user-agent-infotype-detector"
latest_feature_date: "2024-02-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
keywords:
  - "http"
  - "user"
  - "agent"
  - "infotype"
  - "detector"
  - "the"
  - "built"
  - "in"
---

# HTTP_USER_AGENT infoType detector

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

The HTTP_USER_AGENT built-in infoType detector identifies HTTP user-agent strings.

## Extended Definition

The HTTP_USER_AGENT built-in infoType detector identifies HTTP user-agent strings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions)
- [https://docs.cloud.google.com/sensitive-data-protection/docs](https://docs.cloud.google.com/sensitive-data-protection/docs)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)

## Supporting Pages

### Sensitive Data Protection IAM permissions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Sensitive Data Protection IAM permissions Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/iam-permissions The Cloud Data Loss Prevention Service Agent is automatically granted common permissions on the project that are needed for inspecting resources and is listed in the IAM section of the Google Cloud console.
- Note: If you are using Sensitive Data Protection to scan critical resources, such as those protected by additional custom Identity and Access Management roles, you must assign those additional IAM roles to the Cloud Data Loss Prevention Service Agent.
- The service agent exists indefinitely with the project and is only deleted when the project is deleted.
- Sensitive Data Protection relies on this service agent, so you should not remove it.

### Sensitive Data Protection documentation | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs](https://docs.cloud.google.com/sensitive-data-protection/docs)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Sensitive Data Protection documentation Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs Sensitive Data Protection includes: Over 200 built-in information type (or &quot;infoType&quot;) detectors.
- The ability to define custom infoType detectors using dictionaries, regular expressions, and contextual elements.

### Overview of sensitive data discovery | Sensitive Data Protection | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Overview of sensitive data discovery Sensitive Data Protection Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles The Sensitive Data Protection discovery service (sometimes called data profiler) continuously monitors the data resources in your organization, folder, or project.
- It classifies the data into infoTypes, and assesses the data sensitivity and ...

