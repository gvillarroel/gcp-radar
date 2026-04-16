---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.522Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Paginated search results"
feature_slug: "paginated-search-results"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
keywords:
  - "paginated"
  - "search"
  - "results"
  - "broad"
  - "queries"
  - "now"
  - "return"
  - "selectable"
---

# Paginated search results

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Broad search queries now return paginated results with a selectable rows-per-page setting.

## Extended Definition

Broad search queries now return paginated results with a selectable rows-per-page setting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Search returns too many results If your search is too broad, Google SecOps displays a warning message indicating that not all search results can be shown.
- Searching for text in Values returns results as follows: If the string is found at the beginning or end of the value, it is highlighted in the result, along with the UDM field name and the log ingestion time.
- The results are slightly different when searching in UDM Fields versus Values : Searching for a text string in UDM field names returns an exact match found at any location in the name.
- Navigate search results using pagination To improve browser stability and performance when loading a large number of results, Google SecOps provides paginated search results.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference-required-1`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Search The data returned in search results is based on the user's data access scopes.
- Can view and use unscoped list Yes Yes Can run UDM search and dashboard queries with unscoped reference lists Yes Yes Can run UDM search and dashboard queries with scoped reference lists Yes Yes (if there is at least one matching scope between the user and the reference list) For example, a user with scope A can run UDM search queries with reference lists with scopes A, B, and C, but not with reference lists with scopes B and C.
- Can view and use unscoped data table Yes Yes Can run search queries with unscoped data tables Yes Yes Can run search queries with scoped data tables Yes Yes (if there's at least one matching scope between the user and the data table) For example, a user with scope A can run search queries with data tables with scopes A, B, and C, but not with data tables with scopes B and C.
- Data belonging to scopes that the user doesn't have access to does not appear in search results.

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- CuratedRule fields Field Name Type ruleId string Unique identifier for a rule, defined and returned by the server. ruleName string Name of the rule. metadata map< string , string > Metadata for the rule. severity string Severity of the rule ("Info", "Low", or "High"). ruleType string Type of the rule ("SINGLE EVENT" or "MULTI EVENT"). precision string Precision of the rule ("BROAD" or "PRECISE"). tactics []string List of MITRE tactic IDs covered by the rule. techniques []string List of MITRE technique IDs covered by the rule. updateTime string String representing the time the rule was last updated, in RFC 3339 format. ruleSet string Unique identifier of the Google SecOps rule set containing the rule. description string Description of the rule.
- Request POST https://backstory.googleapis.com/v2/detect/rules:streamTestRule Request body { "rule": { "ruleText": "<ruleText here>" }, "startTime": "<startTime here>", "endTime": "<endTime here>", "maxResults": "<maxResults here>", } Body parameters Parameter Name Value Required Description rule.ruleText string Required Text of the new rule in YARA-L 2.0 format. startTime string Required Start time for the time range of logs being processed, in RFC 3339 format. endTime string Required End time for the time range of logs being processed, in RFC 3339 format. maxResults integer Optional Maximum number of results to return.
- Interpreting results Use the following as guidelines when interpreting the results returned by StreamDetectionAlerts: If the client receives a 503 error (perhaps due to server maintenance), it should simply reconnect with exponential backoff.
- The max results parameter only limits the number of detections returned, not the number of errors.

