---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.489Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Forwarder migration tool"
feature_slug: "forwarder-migration-tool"
latest_feature_date: "2026-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "forwarder"
  - "migration"
  - "tool"
  - "helps"
  - "move"
  - "existing"
  - "configurations"
  - "into"
---

# Forwarder migration tool

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The migration tool helps move existing forwarder configurations into Bindplane-managed pipelines.

## Extended Definition

The migration tool helps move existing forwarder configurations into Bindplane-managed pipelines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- AI Protection helps overcome this challenge by providing the tools and insights needed to mitigate risks such as data breaches, misconfigurations, and unsafe model usage.
- Strengthening Endpoint Security: Integrated protection with Google Chrome Enterprise Premium & Google SecOps Chrome Enterprise Premium (CEP) integration with Google SecOps provides critical visibility into threats originating from browser activity to strengthen your endpoint security posture.
- SIEM Log Searching and Investigation : During a CDIR investigation, or on an ad-hoc basis, analysts can use either natural language syntax, Yara-L syntax, or raw log searching to surface information in various logs ingested into Google SecOps related to cloud infrastructure and services.
- Enable Secure AI Adoption from Creation to Consumption Google Cloud's AI Protection is a comprehensive set of capabilities integrated directly into Security Command Center Enterprise (SCC-E), designed to help you proactively manage the unique risks associated across the AI lifecycle.

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Google Security Operations forwarder executable for Windows April 04, 2023 March 31, 2024 On or after March 31, 2024, existing Google Security Operations forwarder executable for Windows will be removed.
- During this migration period, you can continue to use your existing reference lists until they're migrated.
- If any of your existing feeds for the MICROSOFT GRAPH ALERT log type are pointing towards the legacy alerts endpoint, you must update the API Full Path in your feed configuration to switch to the alerts v2 endpoint instead, as described in How to set up Microsoft Graph API alerts .
- SOAR infrastructure migration to Google Cloud June, 2025 December 31, 2025 Starting June 2025, the SOAR infrastructure is migrating to Google Cloud, including authentication migration to Workforce Identity Federation and Cloud Identity.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Record and delete existing feeds (before migration) : Before you begin the BYOP migration, record the configuration settings for all existing feeds that use the impacted connectors (for example, Amazon S3 V2), and then delete the feeds.
- Manage feeds After you configure your data feeds, use the management tools to monitor ingestion health, modify existing parameters, and manage the feed lifecycle.
- Existing Data : Any data that was already transferred to Google SecOps before the migration will be ingested automatically; no data will be lost.
- Troubleshoot failed feeds On the Feeds page, you can view details such as source type, log type, feed ID, and status of the existing feeds, as follows: Hold the pointer over an existing feed and click more vert in the right column.

