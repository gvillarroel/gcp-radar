---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.398Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "LookML parser"
feature_slug: "lookml-parser"
latest_feature_date: "2026-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/action-hub"
  - "https://docs.cloud.google.com/looker/docs/additional-lookml-basics"
  - "https://docs.cloud.google.com/looker/docs/actions-overview"
keywords:
  - "lookml"
  - "parser"
  - "customer"
  - "hosted"
  - "looker"
  - "26"
  - "instances"
  - "use"
---

# LookML parser

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Customer-hosted Looker 26.4 instances use a new optimized LookML parser, matching the parser already used by Looker-hosted instances.

## Extended Definition

Customer-hosted Looker 26.4 instances use a new optimized LookML parser, matching the parser already used by Looker-hosted instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- [https://docs.cloud.google.com/looker/docs/actions-overview](https://docs.cloud.google.com/looker/docs/actions-overview)

## Supporting Pages

### Sharing data through an action hub \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- Source ID: `site-docs-reference-required-4`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Admins of customer-hosted instances may need to consider additional factors when choosing to enable Looker integrations from the Looker Action Hub, especially integrations that support streamed results or that use OAuth .
- Considerations for customer-hosted instances To use Looker integrations , the Looker Action Hub must be able to communicate with the Looker instance and fulfill the Looker Action hub requirements .
- This is not always possible with customer-hosted Looker instances, for various reasons.
- The appropriate solution or combination of solutions will depend on the architecture of the Looker instance: If the customer-hosted instance is not resolvable by the Looker Action Hub — that is, the Looker Action Hub cannot receive requests from the Looker instance — Looker admins can contact a Google Cloud sales specialist to enable the public host url license feature.

### Common LookML patterns \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- Source ID: `site-docs-reference-required-4`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- If you wanted a field that counted users from the EU, you could use something like this: measure: eu count { type: count # COUNT(CASE WHEN users.countrycode IN 'UK','FR','ES' THEN 1 ELSE NULL END) drill fields: [detail] filters: [users.countrycode: "UK,FR,ES"] } If you want to filter with a mathematical expression , be sure to enclose it in double quotes: measure: total orders above 100 dollars { type: sum # SUM(CASE WHEN order.value > 100 THEN order.value ELSE NULL END) sql: ${order.value} ;; drill fields: [detail] filters: [order.value: ">100"] } Percentages Many key performance indicators are expressed in the form of percentages, such as "the percent of items returned," "the percent of emails that resulted in a sale," or other instances of "the percent of X that Y." In LookML, the design pattern is to create counts for the two conditions and create a third field that computes the percentage between the two. dimension: returned { type: yesno } measure: count { # total count of items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] } measure: returned count { # count of returned items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] filters: [returned: "Yes"] } measure: percent returned { type: number sql: 100.0 ${returned count} / NULLIF(${count}, 0) ;; value format: "0.00" } Use the following format to compute percentages.
- The following code creates a set customers.detail and points both counts to the same set of fields. view: customers { set: detail { fields: [id, name, city] # creates named set customers.detail } measure: count { type: count drill fields: [detail ] # show fields in the set "customers.detail" } measure: in california count { type: count filters: [state: "California"] drill fields: [detail ] # show fields in the set "customers.detail" } } LookML sets are powerful in the following ways: Redeclaration of sets is additive.
- If the user didn't filter on any of those fields, Looker will automatically add a filter of 1 day on orders.created time . filters: [orders.created time: "1 day"] unless: [created date, shipped time, shipped date, orders.id, customer.name] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This page describes the following common patterns in LookML: Labeling fields (and names in the UI) Filtering counts by a dimension Percentages Using sets for drill-down details Filtering result sets Labeling fields (and names in the UI) Looker converts LookML field names into the strings that the UI displays by combining the view name in regular-weight font with the field's short name in bold.

### Looker actions overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/actions-overview](https://docs.cloud.google.com/looker/docs/actions-overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customer-hosted instances may be unable to enable actions from the Looker Action Hub that use Google OAuth.
- Customer-hosted instances may be unable to enable actions from the Looker Action Hub that stream results.
- Integrated service Description Link to README file How to use this integration Required LookML tags Action type Content available for scheduled deliveries Uses Google OAuth authentication (Yes/No) Uses data streaming (Yes/No) Minimum supported Looker version Airtable Add records to a table in Airtable.
- Note: The Looker Action Hub, a Looker-hosted service that provides common, prebuilt actions, is built on top of the Action API.

