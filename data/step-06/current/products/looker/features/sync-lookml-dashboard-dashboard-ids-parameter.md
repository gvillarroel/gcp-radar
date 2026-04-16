---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.466Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "sync_lookml_dashboard dashboard_ids parameter"
feature_slug: "sync-lookml-dashboard-dashboard-ids-parameter"
latest_feature_date: "2025-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/additional-lookml-basics"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/create_alert"
  - "https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart"
keywords:
  - "sync"
  - "lookml"
  - "dashboard"
  - "ids"
  - "parameter"
  - "adds"
  - "optional"
  - "so"
---

# sync_lookml_dashboard dashboard_ids parameter

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Adds an optional dashboard_ids parameter so the sync_lookml_dashboard API endpoint can synchronize only a subset of dashboards.

## Extended Definition

Adds an optional dashboard_ids parameter so the sync_lookml_dashboard API endpoint can synchronize only a subset of dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/create_alert](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/create_alert)
- [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)

## Supporting Pages

### Common LookML patterns \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- Source ID: `site-docs-reference-required-4`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dashboards support visual drilling using the link parameter without the need to enable the Visual Drilling feature.
- If you wanted a field that counted users from the EU, you could use something like this: measure: eu count { type: count # COUNT(CASE WHEN users.countrycode IN 'UK','FR','ES' THEN 1 ELSE NULL END) drill fields: [detail] filters: [users.countrycode: "UK,FR,ES"] } If you want to filter with a mathematical expression , be sure to enclose it in double quotes: measure: total orders above 100 dollars { type: sum # SUM(CASE WHEN order.value > 100 THEN order.value ELSE NULL END) sql: ${order.value} ;; drill fields: [detail] filters: [order.value: ">100"] } Percentages Many key performance indicators are expressed in the form of percentages, such as "the percent of items returned," "the percent of emails that resulted in a sale," or other instances of "the percent of X that Y." In LookML, the design pattern is to create counts for the two conditions and create a third field that computes the percentage between the two. dimension: returned { type: yesno } measure: count { # total count of items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] } measure: returned count { # count of returned items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] filters: [returned: "Yes"] } measure: percent returned { type: number sql: 100.0 ${returned count} / NULLIF(${count}, 0) ;; value format: "0.00" } Use the following format to compute percentages.
- The following code creates a set customers.detail and points both counts to the same set of fields. view: customers { set: detail { fields: [id, name, city] # creates named set customers.detail } measure: count { type: count drill fields: [detail ] # show fields in the set "customers.detail" } measure: in california count { type: count filters: [state: "California"] drill fields: [detail ] # show fields in the set "customers.detail" } } LookML sets are powerful in the following ways: Redeclaration of sets is additive.
- Initially, declaring these fields literally might seem sufficient: view: customers { measure: count { type: count drill fields: [id, name, city] } measure: in california count { type: count filters: [state: "California"] drill fields: [id, name, city] } } However, if you wanted to add a new field (such as customers.state ), you would have to edit both lists, unless you used the set parameter to create named sets that you can maintain in one place and use in multiple places.

### "Quickstart: Build a dashboard with sample data \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- Source ID: `site-docs-reference-required-4`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Yearly Sales Goal Tracking (2024) : Visualize your year-to-date sales and compare them to a set goal by using table calculations to visualize a running total and by adding a reference line. (Optional) Weekly Shipping Trends (Last 8 Weeks) : If you've completed the Build a Look with sample data quickstart, you can also add your shipping delay analysis Look to this dashboard.
- This quickstart guides you through building a dashboard with the following tiles, including an optional Look-linked tile that you can add to your dashboard if you've completed the Build a Look with sample data quickstart: Top Weekly Spenders : Identify the top spenders for the past four weeks to target them with personalized promotions.
- Add an existing Look as a tile (Optional) If you have completed the Build a Look with sample data quickstart, you can add your Weekly Shipping Trends (Last 8 Weeks) Look to your dashboard as a tile.
- Build a dashboard with sample data Learn how to create a dashboard with sample data from the Intermediate Ecommerce Explore in the sample LookML project on your Looker (Google Cloud core) instance.

### Create an alert \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/create_alert](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/create_alert)
- Source ID: `site-api-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At minimum, it has to be longer than 15 minute intervals custom url base string Domain for the custom url selected by the alert creator from the admin defined domain allowlist custom url params string Parameters and path for the custom url defined by the alert creator custom url label string Label for the custom url defined by the alert creator show custom url boolean Boolean to determine if the custom url should be used custom title string An optional, user-defined title for the alert dashboard element id string ID of the dashboard element associated with the alert.
- At minimum, it has to be longer than 15 minute intervals custom url base string Domain for the custom url selected by the alert creator from the admin defined domain allowlist custom url params string Parameters and path for the custom url defined by the alert creator custom url label string Label for the custom url defined by the alert creator show custom url boolean Boolean to determine if the custom url should be used custom title string An optional, user-defined title for the alert dashboard element id string ID of the dashboard element associated with the alert.
- For dashboards, this will be the dashboard ID investigative content title lock string The title of the investigative content. lookml dashboard id string ID of the LookML dashboard associated with the alert lookml link id string ID of the LookML dashboard element associated with the alert owner id string User id of alert owner owner display name lock string Alert owner's display name threshold number Value of the alert threshold time series condition state AlertConditionState (Write-Only) (Optional) Only used when first creating time series alerts.
- For dashboards, this will be the dashboard ID investigative content title lock string The title of the investigative content. lookml dashboard id string ID of the LookML dashboard associated with the alert lookml link id string ID of the LookML dashboard element associated with the alert owner id string User id of alert owner owner display name lock string Alert owner's display name threshold number Value of the alert threshold time series condition state AlertConditionState (Write-Only) (Optional) Only used when first creating time series alerts.

