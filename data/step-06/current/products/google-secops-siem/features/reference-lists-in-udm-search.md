---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.669Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Reference lists in UDM Search"
feature_slug: "reference-lists-in-udm-search"
latest_feature_date: "2023-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
keywords:
  - "reference"
  - "lists"
  - "udm"
  - "search"
  - "can"
  - "used"
  - "searches"
  - "more"
---

# Reference lists in UDM Search

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Reference lists can be used in UDM searches to support more flexible query logic.

## Extended Definition

Reference lists can be used in UDM searches to support more flexible query logic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- For example: Optimized results view Timelines chart Aggregations window Optimized results view To maximize the space available for viewing search results, Google SecOps provides an event-focused view.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference-required-1`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reference lists Reference lists are collections of values that are used for matching and filtering data in UDM Search and detection rules.
- Can view and use unscoped list Yes Yes Can run UDM search and dashboard queries with unscoped reference lists Yes Yes Can run UDM search and dashboard queries with scoped reference lists Yes Yes (if there is at least one matching scope between the user and the reference list) For example, a user with scope A can run UDM search queries with reference lists with scopes A, B, and C, but not with reference lists with scopes B and C.
- Access permissions for rules in reference lists A scoped rule can use a reference list if there is at least one matching scope between the rule and the reference list.
- Access permissions for users in reference lists The scopes that are associated with a reference list determine how global and scoped users can interact with it.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference-required-1`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Functional limitations Custom Label query don't support the following advanced features: Reference lists Enrichment fields Data tables Query execution time : Custom label query is subject to a maximum execution time limit of 5 seconds.
- You have the following two options to set up data RBAC: Enable data RBAC before assigning scopes: when data RBAC is enabled, rules, reference lists, and data tables don't have any scopes assigned.
- Enable data RBAC Enabling data RBAC applies all assigned scopes to rules and reference lists, making sure users see only the data relevant to their scopes.
- The Enforce data access window displays the number of rules and reference lists that will be scoped after data RBAC is enforced.

