---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.538Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "AND/OR Filters in Explores"
feature_slug: "and-or-filters-in-explores"
latest_feature_date: "2023-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
keywords:
  - "filters"
  - "explores"
  - "provides"
  - "filter"
  - "editing"
  - "experience"
  - "logic"
  - "without"
---

# AND/OR Filters in Explores

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

AND/OR Filters in Explores provides a new filter-editing experience with AND/OR filter logic without custom filter expressions.

## Extended Definition

AND/OR Filters in Explores provides a new filter-editing experience with AND/OR filter logic without custom filter expressions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores](https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)

## Supporting Pages

### AND/OR Filters in Explores \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores](https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores)
- Source ID: `site-docs-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations The following are limitations for AND/OR filters in Explores: Multiple filters default to using AND filter logic.
- For example, the following Explore filters contain two groups separated with OR logic: Orders Status is pending AND Users State is California OR Products Category is active AND Inventory Items Cost is <= 100 The resulting explore will show order data of pending orders in California OR orders that contain Active category goods costing less than or equal to 100 .
- Important: When group A contains a required filter, AND filter logic will be applied between all filters within group A , and between all subsequent filter groups and group A .
- Home Documentation Data analytics Looker Send feedback AND/OR Filters in Explores Stay organized with collections Save and categorize content based on your preferences.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- When User Specific Time Zones is enabled, each user is assigned a time zone, and Looker converts time-based data from the Database Time Zone to a user's time zone when the user views query results or interprets filters.
- Reduce Filter Queries This feature reduces the number of queries that are sent by filters.
- The locations in Looker where users might see other users include the following: The Users page in the Admin section of Looker Users' folders in the Folders section of the Looker main menu, if they have been granted at least View access to another user's personal folder The Manage Access pop-up , which is a part of folder management When the Closed System setting is enabled, a non-admin user without the see users permission can see only the other users with whom they share a group and only those groups of which they are a member.
- Onboarding When enabled, Looker admins and developers who log in to a new Looker instance will see the Looker onboarding walkthrough, which guides users through the four major steps to make use of a Looker instance: Adding a connection Creating a project Editing project files as needed Exploring data Once any combination of admins or developers completes the full guide, it stops being displayed.

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Control the actions a user can perform Create a permission set with the appropriate permissions, then assign a group or user to a role with that permission set Control what fields a user can access Create a model with the appropriate fields, then assign a group or user to a role with that model Control what data a user can access Create a model with the appropriate data limitations, then assign a group or user to a role with that model - or - Use access filters to limit a user to the appropriate data - or - Use user attributes to provide differing database credentials to a group or user - or - Use user attributes with access grants to restrict access to specific Explores, joins, views, or fields Control what database connections a Looker developer can access Create a project with the appropriate connections, associate the project with a set of models, then assign a group or user to a role with those models Feature access can also affect content access .
- Control developer access to database connections Unlike regular users, Looker developers are not fully constrained by models and access filters, because they can make additions or changes to LookML models.
- Data access can be further restricted within a model using access filters to limit which rows of data they can see, as though there was an automatic filter on their queries.
- For a description of how to apply access filters, see the User attributes documentation page and the access filter parameter documentation page.

