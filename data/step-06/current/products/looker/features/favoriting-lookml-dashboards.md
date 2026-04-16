---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.428Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Favoriting LookML Dashboards"
feature_slug: "favoriting-lookml-dashboards"
latest_feature_date: "2026-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/additional-lookml-basics"
  - "https://docs.cloud.google.com/looker/docs/actions-overview"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "favoriting"
  - "lookml"
  - "dashboards"
  - "can"
  - "marked"
  - "favorites"
  - "shown"
  - "looker"
---

# Favoriting LookML Dashboards

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

LookML dashboards can be marked as favorites and shown on the Looker Favorites tab; LookML dashboards can now be marked as favorites and shown on the Looker Favorites tab.

## Extended Definition

LookML dashboards can be marked as favorites and shown on the Looker Favorites tab; LookML dashboards can now be marked as favorites and shown on the Looker Favorites tab.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- [https://docs.cloud.google.com/looker/docs/actions-overview](https://docs.cloud.google.com/looker/docs/actions-overview)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### Common LookML patterns \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- Source ID: `site-docs-reference-required-4`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- This page describes the following common patterns in LookML: Labeling fields (and names in the UI) Filtering counts by a dimension Percentages Using sets for drill-down details Filtering result sets Labeling fields (and names in the UI) Looker converts LookML field names into the strings that the UI displays by combining the view name in regular-weight font with the field's short name in bold.
- Home Documentation Data analytics Looker Guides Send feedback Common LookML patterns Stay organized with collections Save and categorize content based on your preferences.
- If you wanted a field that counted users from the EU, you could use something like this: measure: eu count { type: count # COUNT(CASE WHEN users.countrycode IN 'UK','FR','ES' THEN 1 ELSE NULL END) drill fields: [detail] filters: [users.countrycode: "UK,FR,ES"] } If you want to filter with a mathematical expression , be sure to enclose it in double quotes: measure: total orders above 100 dollars { type: sum # SUM(CASE WHEN order.value > 100 THEN order.value ELSE NULL END) sql: ${order.value} ;; drill fields: [detail] filters: [order.value: ">100"] } Percentages Many key performance indicators are expressed in the form of percentages, such as "the percent of items returned," "the percent of emails that resulted in a sale," or other instances of "the percent of X that Y." In LookML, the design pattern is to create counts for the two conditions and create a third field that computes the percentage between the two. dimension: returned { type: yesno } measure: count { # total count of items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] } measure: returned count { # count of returned items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] filters: [returned: "Yes"] } measure: percent returned { type: number sql: 100.0 ${returned count} / NULLIF(${count}, 0) ;; value format: "0.00" } Use the following format to compute percentages.
- Looker would generate the following declaration: view: airports { dimension: cntrl twr { # full name: airports.cntrl twr type: yesno # default name: AIRPORT Cntrl Twr (Yes/No) sql: ${TABLE}.cntrl twr ;; # the sql expression for this field } } You can rename the cntrl twr dimension to be human-readable: view: airports { dimension: has control tower { # full name: airports.has control tower type: yesno # aliased name: AIRPORTS Has Control Tower (Yes/No) sql: ${TABLE}.cntrl twr ;; # the sql expression for this field } } Filtering counts by a dimension You can group by a dimension and count entities — grouping by USERS Country , ORDERS Count will tell you where your orders are coming from by country.

### Looker actions overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/actions-overview](https://docs.cloud.google.com/looker/docs/actions-overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Integrated service Description Link to README file How to use this integration Required LookML tags Action type Content available for scheduled deliveries Uses Google OAuth authentication (Yes/No) Uses data streaming (Yes/No) Minimum supported Looker version Airtable Add records to a table in Airtable.
- Here is how to use the list: The URLs that are shown in the Link to README file column provide instructions for enabling and configuring the integrated service to work with Looker.
- The URLs that are shown in the How to use this integration column provide instructions for how to send data from Looker to the integrated service.
- No README available View documentation None Query, dashboard Look, Explore, dashboard Yes Yes (for Looks and Explores), No (for dashboards) 6.24 Slack Attachment (API Token) Send data directly into a Slack channel along with user credentials.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- This setting lets Looker admins define the email domains to which your users can deliver Looker content — Looks, dashboards, queries with visualizations — or alert notifications through email.
- Limit Automatically refresh dashboard option When this setting is enabled, only Looker admins will be able to enable the Automatically refresh dashboard option on user-defined dashboards.
- This allows LookML dashboards that use those collections to render consistently across instances if both instances have the same custom collections named identically.
- This applies both to existing LookML dashboards and LookML Explores and any LookML dashboards or LookML Explores created in the future.

