---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:56.822Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "BASIC_AUTH_HEADER infoType detector"
feature_slug: "basic-auth-header-infotype-detector"
latest_feature_date: "2019-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/iam-roles"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
keywords:
  - "basic"
  - "auth"
  - "header"
  - "infotype"
  - "detector"
  - "detects"
  - "http"
  - "authentication"
---

# BASIC_AUTH_HEADER infoType detector

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Detects HTTP basic authentication headers as an infoType.

## Extended Definition

Detects HTTP basic authentication headers as an infoType.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs](https://docs.cloud.google.com/sensitive-data-protection/docs)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-roles](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-roles)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)

## Supporting Pages

### Sensitive Data Protection documentation | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs](https://docs.cloud.google.com/sensitive-data-protection/docs)
- Source ID: `site-docs-root`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Sensitive Data Protection documentation Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs Sensitive Data Protection includes: Over 200 built-in information type (or &quot;infoType&quot;) detectors.
- The ability to define custom infoType detectors using dictionaries, regular expressions, and contextual elements.

### IAM roles | Sensitive Data Protection | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/iam-roles](https://docs.cloud.google.com/sensitive-data-protection/docs/iam-roles)
- Source ID: `site-iam-reference`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IAM roles Sensitive Data Protection Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/iam-roles Roles limit an authenticated identity&#x27;s ability to access resources.

### Overview of sensitive data discovery | Sensitive Data Protection | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Overview of sensitive data discovery Sensitive Data Protection Google Cloud Documentation Source URL: https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles The Sensitive Data Protection discovery service (sometimes called data profiler) continuously monitors the data resources in your organization, folder, or project.
- It classifies the data into infoTypes, and assesses the data sensitivity and ...

