---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.631Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle reference list type changes"
feature_slug: "chronicle-reference-list-type-changes"
latest_feature_date: "2023-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "chronicle"
  - "reference"
  - "list"
  - "type"
  - "changes"
  - "lists"
  - "can"
  - "now"
---

# Chronicle reference list type changes

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Chronicle reference lists can now have their type changed after creation.

## Extended Definition

Chronicle reference lists can now have their type changed after creation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference-required-1`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Functional limitations Custom Label query don't support the following advanced features: Reference lists Enrichment fields Data tables Query execution time : Custom label query is subject to a maximum execution time limit of 5 seconds.
- You have the following two options to set up data RBAC: Enable data RBAC before assigning scopes: when data RBAC is enabled, rules, reference lists, and data tables don't have any scopes assigned.
- Enable data RBAC Enabling data RBAC applies all assigned scopes to rules and reference lists, making sure users see only the data relevant to their scopes.
- The Enforce data access window displays the number of rules and reference lists that will be scoped after data RBAC is enforced.

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Reference lists June 2026 September 2026 The reference list functionality is being retired from the Google SecOps platform.
- During this migration period, you can continue to use your existing reference lists until they're migrated.
- All existing reference lists will be transparently migrated to data tables.
- To facilitate this, customers might be required to take certain actions, such as updating IP allowlists or service account permissions.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Reference lists are also supported.
- To share column sets, you must have the following permissions: chronicle.googleapis.com/savedColumnSets.create chronicle.googleapis.com/savedColumnSets.delete chronicle.googleapis.com/savedColumnSets.update chronicle.googleapis.com/savedColumnSets.list chronicle.googleapis.com/savedColumnSets.get In the Column Manager, add or remove the columns to create your customized view.
- Fields remain in the Selected list, and their hierarchy in the Pinned list is shown in dot-delimited notation with the udm prefix (for example, udm.metadata.event type ).

