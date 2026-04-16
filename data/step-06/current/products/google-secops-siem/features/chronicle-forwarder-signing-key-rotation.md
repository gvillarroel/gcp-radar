---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.657Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle forwarder signing key rotation"
feature_slug: "chronicle-forwarder-signing-key-rotation"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
keywords:
  - "chronicle"
  - "forwarder"
  - "signing"
  - "key"
  - "rotation"
  - "rotates"
  - "every"
  - "six"
---

# Chronicle forwarder signing key rotation

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The Chronicle forwarder signing key rotates every six months for security.

## Extended Definition

The Chronicle forwarder signing key rotates every six months for security.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview](https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)

## Supporting Pages

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Chronicle BigQuery udm events table July 01, 2023 August 01, 2023 On or after July 1, 2023, the existing udm events table in Chronicle-managed BigQuery projects will be fully replaced with a new table named events .
- Google Security Operations forwarder executable for Windows April 04, 2023 March 31, 2024 On or after March 31, 2024, existing Google Security Operations forwarder executable for Windows will be removed.
- BigQuery data lake December 31, 2024 April 30, 2025 The shutdown of managed BigQuery resources and API keys associated with the chronicle-tla Google Cloud project has been extended to April 30, 2025.
- SOAR IAM Roles February 23, 2026 August 23, 2026 The chronicle.soarAnalyst , chronicle.soarViewer , and chronicle.soarEngineer roles in Cloud IAM are deprecated and will be removed.

### "Google SecOps APIs and libraries overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview](https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview)
- Source ID: `site-api-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google SecOps recommends using the unified Chronicle API for the modern platform, case management and response workflows that provide a secure, compliant and extensible experience.
- Google SecOps recommends using the newer generation Chronicle API because it improves and expands on the functionality offered by Ingestion API.
- It includes the Feed Management, Detection Engine, Search, Forwarder Management, Data Export and Customer Management APIs.
- Google SecOps recommends using the newer generation Chronicle API for a more robust, secure, and extensible experience.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference-required-1`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Data RBAC impacts rules in the following ways: Data RBAC is enabled before assigning scopes to rules: all existing rules are automatically assigned global scope.
- Data RBAC is enabled after assigning scopes to rules : scoped rules operate on ingested data according to their defined scopes, even before data RBAC is enabled.
- Assigning scopes to a reference list (scoped list) restricts its access to specific users and resources such as rules and UDM search.
- Note: Users or service accounts that need access to global scope data, must have chronicle.globalDataAccessScopes.permit permission.

