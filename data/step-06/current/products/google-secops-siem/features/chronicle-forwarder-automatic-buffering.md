---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.651Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle forwarder automatic buffering"
feature_slug: "chronicle-forwarder-automatic-buffering"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "chronicle"
  - "forwarder"
  - "automatic"
  - "buffering"
  - "absorbs"
  - "incoming"
  - "traffic"
  - "spikes"
---

# Chronicle forwarder automatic buffering

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Chronicle forwarder automatic buffering absorbs incoming traffic spikes using available host memory.

## Extended Definition

Chronicle forwarder automatic buffering absorbs incoming traffic spikes using available host memory.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Chronicle BigQuery udm events table July 01, 2023 August 01, 2023 On or after July 1, 2023, the existing udm events table in Chronicle-managed BigQuery projects will be fully replaced with a new table named events .
- Google Security Operations forwarder executable for Windows April 04, 2023 March 31, 2024 On or after March 31, 2024, existing Google Security Operations forwarder executable for Windows will be removed.
- BigQuery data lake December 31, 2024 April 30, 2025 The shutdown of managed BigQuery resources and API keys associated with the chronicle-tla Google Cloud project has been extended to April 30, 2025.
- SOAR IAM Roles February 23, 2026 August 23, 2026 The chronicle.soarAnalyst , chronicle.soarViewer , and chronicle.soarEngineer roles in Cloud IAM are deprecated and will be removed.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference-required-1`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Data RBAC impacts rules in the following ways: Data RBAC is enabled before assigning scopes to rules: all existing rules are automatically assigned global scope.
- However, during their configuration, users can assign the default labels (log type, namespace, or ingestion labels) to the incoming data.
- Note: Users or service accounts that need access to global scope data, must have chronicle.globalDataAccessScopes.permit permission.
- Detections are generated when incoming security data matches the criteria defined in a rule.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- To share column sets, you must have the following permissions: chronicle.googleapis.com/savedColumnSets.create chronicle.googleapis.com/savedColumnSets.delete chronicle.googleapis.com/savedColumnSets.update chronicle.googleapis.com/savedColumnSets.list chronicle.googleapis.com/savedColumnSets.get In the Column Manager, add or remove the columns to create your customized view.
- If your simple query concurrency limit is exhausted, they automatically consume available complex query quota.
- When you run a query, the search editor panel automatically collapses to provide more space for the results.
- As you type, the automatic completion feature suggests valid UDM fields based on your input.

