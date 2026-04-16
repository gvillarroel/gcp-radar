---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.536Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Product-centric feeds permissions"
feature_slug: "product-centric-feeds-permissions"
latest_feature_date: "2025-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
keywords:
  - "centric"
  - "feeds"
  - "permissions"
  - "exposes"
  - "managing"
  - "through"
  - "custom"
  - "iam"
---

# Product-centric feeds permissions

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Exposes permissions for managing product-centric feeds through custom IAM roles.

## Extended Definition

Exposes permissions for managing product-centric feeds through custom IAM roles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- The following table describes the error messages that you might encounter when working with data feeds: Error Code Cause Troubleshooting ACCESS DENIED The authentication account provided in the feed configuration lacks required permissions.
- Configure multiple feeds for a product family (Google SecOps customers only) You can configure multiple feeds per product family, based on log type.
- Note: Batches of data sent through Webhook feeds may experience ingestion delays if the request size or QPS limits are set too low.
- Required actions for customers To ensure continuous data ingestion, you must manually re-create your feeds in the new environment.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Examples SCC-E customers have immediate access to several key AI Protection capabilities: Model Armor : Protects against prompt injection, data loss, and offensive content,through prompt and response screening.
- Native Threat Feeds : Natively integrated threat intelligence feeds from Mandiant, VirusTotal, SafeBrowsing, and more, enable users to create their own custom detections and scoring methodologies.
- See activate enterprise tier Validate Security Command Center Detection Services are enabled: See How to configure Security Command Center Connect Security Command Center to AWS to get configuration and resource data that flows through to the Entity Graph: See Connect Security Command Center to AWS Preview - Connect Security Command Center to Azure to get configuration and resource data that flows through to the Entity Graph. (Optional) Integrate Security Command Center with ticketing systems.
- By applying this frontline intelligence directly within Google SecOps, security teams gain unparalleled visibility and context, ensuring that security events are actively interpreted through the lens of the latest, validated threat intelligence to help you stay ahead of novel and sophisticated attacks.

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Customers issuing queries against the udm events table through Cloud Console, API, or directly connecting to BQ should fully migrate queries to the new table by July 1 to avoid interruption.
- To facilitate this, customers might be required to take certain actions, such as updating IP allowlists or service account permissions.
- If any of your existing feeds for the MICROSOFT GRAPH ALERT log type are pointing towards the legacy alerts endpoint, you must update the API Full Path in your feed configuration to switch to the alerts v2 endpoint instead, as described in How to set up Microsoft Graph API alerts .
- BigQuery data lake December 31, 2024 March 31, 2025 On December 31, 2024, the managed BigQuery data lake for export won't be accessible to Google SecOps customers except for customers in the Enterprise Plus Tier.

