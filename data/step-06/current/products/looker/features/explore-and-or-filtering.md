---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.534Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Explore AND/OR Filtering"
feature_slug: "explore-and-or-filtering"
latest_feature_date: "2024-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores"
  - "https://docs.cloud.google.com/looker/docs/additional-lookml-basics"
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
keywords:
  - "explore"
  - "filtering"
  - "generally"
  - "available"
  - "when"
  - "creating"
  - "filters"
  - "explores"
---

# Explore AND/OR Filtering

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

AND/OR filtering is generally available when creating filters in Explores.

## Extended Definition

AND/OR filtering is generally available when creating filters in Explores.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores](https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores)
- [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)

## Supporting Pages

### AND/OR Filters in Explores \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores](https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Looker Send feedback AND/OR Filters in Explores Stay organized with collections Save and categorize content based on your preferences.
- Limitations The following are limitations for AND/OR filters in Explores: Multiple filters default to using AND filter logic.
- You can customize filters with AND/OR logic when you add or edit a filter on an Explore.
- Creating AND/OR filters AND/OR filters appear in the Filters section in an Explore.

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Control the actions a user can perform Create a permission set with the appropriate permissions, then assign a group or user to a role with that permission set Control what fields a user can access Create a model with the appropriate fields, then assign a group or user to a role with that model Control what data a user can access Create a model with the appropriate data limitations, then assign a group or user to a role with that model - or - Use access filters to limit a user to the appropriate data - or - Use user attributes to provide differing database credentials to a group or user - or - Use user attributes with access grants to restrict access to specific Explores, joins, views, or fields Control what database connections a Looker developer can access Create a project with the appropriate connections, associate the project with a set of models, then assign a group or user to a role with those models Feature access can also affect content access .
- You can also control access to specific Explores, joins, views, or fields by creating access grants .
- To limit access to specific Explores, joins, views, or fields, create access grants that limit access to only those users who are assigned the allowed user attribute values, as described on the access grant parameter documentation page.
- Just like the hidden field parameter is not intended for controlling field access, the hidden parameter for Explores does not prevent all users from viewing an Explore.

### Common LookML patterns \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- Source ID: `site-docs-reference-required-4`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filtering result sets LookML provides a set of filter operations that can be applied to fields and Explores to filter result sets before they are returned to the user. always filter on the Explore Use always filter to always apply a set of filters to any query that is run within an Explore.
- You use sets to give Looker the following information: The fields that you want to show when drilling into a count or another measure The fields that you want to import when you join a view The fields that you want to be indexed in an Explore Because the same set can be used in many places in a model, Looker provides several methods for creating sets.
- If you wanted a field that counted users from the EU, you could use something like this: measure: eu count { type: count # COUNT(CASE WHEN users.countrycode IN 'UK','FR','ES' THEN 1 ELSE NULL END) drill fields: [detail] filters: [users.countrycode: "UK,FR,ES"] } If you want to filter with a mathematical expression , be sure to enclose it in double quotes: measure: total orders above 100 dollars { type: sum # SUM(CASE WHEN order.value > 100 THEN order.value ELSE NULL END) sql: ${order.value} ;; drill fields: [detail] filters: [order.value: ">100"] } Percentages Many key performance indicators are expressed in the form of percentages, such as "the percent of items returned," "the percent of emails that resulted in a sale," or other instances of "the percent of X that Y." In LookML, the design pattern is to create counts for the two conditions and create a third field that computes the percentage between the two. dimension: returned { type: yesno } measure: count { # total count of items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] } measure: returned count { # count of returned items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] filters: [returned: "Yes"] } measure: percent returned { type: number sql: 100.0 ${returned count} / NULLIF(${count}, 0) ;; value format: "0.00" } Use the following format to compute percentages.
- The following example prevents users from looking at orders before 2012-01-01: Using Looker references explore: order { sql always where: ${created date} >= '2012-01-01' ;; } Using raw SQL explore: order { sql always where: DATE(created time) >= '2012-01-01' ;; } conditionally filter on the Explore Very large tables require some thought when querying, since unlimited queries can quickly become too burdensome on the database.

