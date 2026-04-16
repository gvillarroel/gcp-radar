---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.630Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Reference list access in Search and Rules Editor"
feature_slug: "reference-list-access-in-search-and-rules-editor"
latest_feature_date: "2023-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
keywords:
  - "reference"
  - "list"
  - "access"
  - "search"
  - "rules"
  - "editor"
  - "lists"
  - "now"
---

# Reference list access in Search and Rules Editor

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Reference lists are now accessible from the Search page and the Rules Editor page.

## Extended Definition

Reference lists are now accessible from the Search page and the Rules Editor page.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- This list is saved in your browser session history across the Search, Rules, and Dashboard editors.
- Reference lists are also supported.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Feature Programmatic access limit Web interface limit QPH limit 2,000 1,000 Simple query concurrency 40 40 Complex query concurrency 10 10 Concurrency limits Concurrency limits define the number of simultaneous search operations allowed per tenant: Simple queries: Queries that span less than one day, use a single data source, and don't include stats.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference-required-1`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Enforce data access window displays the number of rules and reference lists that will be scoped after data RBAC is enforced.
- To grant access, define scopes and assign them to users, rules, and reference lists based on your requirement.
- You have the following two options to set up data RBAC: Enable data RBAC before assigning scopes: when data RBAC is enabled, rules, reference lists, and data tables don't have any scopes assigned.
- Enable data RBAC Enabling data RBAC applies all assigned scopes to rules and reference lists, making sure users see only the data relevant to their scopes.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference-required-1`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access permissions for rules in reference lists A scoped rule can use a reference list if there is at least one matching scope between the rule and the reference list.
- Reference lists Reference lists are collections of values that are used for matching and filtering data in UDM Search and detection rules.
- Assigning scopes to a reference list (scoped list) restricts its access to specific users and resources such as rules and UDM search.
- Can view and use unscoped list Yes Yes Can run UDM search and dashboard queries with unscoped reference lists Yes Yes Can run UDM search and dashboard queries with scoped reference lists Yes Yes (if there is at least one matching scope between the user and the reference list) For example, a user with scope A can run UDM search queries with reference lists with scopes A, B, and C, but not with reference lists with scopes B and C.

