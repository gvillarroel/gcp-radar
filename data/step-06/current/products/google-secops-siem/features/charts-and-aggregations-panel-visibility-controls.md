---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.522Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Charts and Aggregations panel visibility controls"
feature_slug: "charts-and-aggregations-panel-visibility-controls"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab"
keywords:
  - "charts"
  - "aggregations"
  - "panel"
  - "visibility"
  - "controls"
  - "users"
  - "can"
  - "hide"
---

# Charts and Aggregations panel visibility controls

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Users can hide or show the Charts and Aggregations panels from the View Options list.

## Extended Definition

Users can hide or show the Charts and Aggregations panels from the View Options list.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- You can also hide the Charts and Aggregations panels by default by clearing the related checkboxes in the View Options list.
- Grouped fields can also be used in combination with regular UDM fields as shown in the following example: ip = "5.6.7.8" AND metadata.event type = "NETWORK CONNECTION" Grouped fields have a separate section in Aggregations .
- For example: Optimized results view Timelines chart Aggregations window Optimized results view To maximize the space available for viewing search results, Google SecOps provides an event-focused view.
- Use Aggregations to sort alerts by: Case Name Priority Severity Status Verdict This helps you to focus on the alerts that are most important to you.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference-required-1`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- The specific scope associated with a dashboard determines the level of interaction permitted for global and scoped users : Global users : Maintain full visibility and management capabilities across all dashboards, regardless of scope.
- IOC matches and ATI data derived from customer logs require global scope for visibility and aren't available to users with restricted scopes.
- Data RBAC controls user access according to their assigned scopes and ensures that users can access only authorized information.
- Before data RBAC is enabled, all users have visibility into all detections, regardless of any scope tagging.

### "Explore the alert overview tab \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

