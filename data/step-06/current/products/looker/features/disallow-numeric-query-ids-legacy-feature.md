---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.528Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Disallow Numeric Query IDs legacy feature"
feature_slug: "disallow-numeric-query-ids-legacy-feature"
latest_feature_date: "2024-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/hubspot-transfer"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features"
  - "https://docs.cloud.google.com/bigquery/docs/data-types"
keywords:
  - "disallow"
  - "numeric"
  - "query"
  - "ids"
  - "legacy"
  - "feature"
  - "lets"
  - "users"
---

# Disallow Numeric Query IDs legacy feature

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

This legacy feature lets users opt in to or out of query API changes that affect numeric query IDs.

## Extended Definition

This legacy feature lets users opt in to or out of query API changes that affect numeric query IDs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/hubspot-transfer](https://docs.cloud.google.com/bigquery/docs/hubspot-transfer)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
- [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)

## Supporting Pages

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- When enabled, the New Looker Explore and Merge Query Experience feature lets individual users have the option to try the redesigned Looker Explore and Merge Query interfaces.
- The Enhanced Content Cleanup preview feature provides the following capabilities: Lets admins and users access a new Unused content folder to quickly identify and manage the unused content on a Looker instance.
- When this preview feature is enabled, the new Enhanced search experience lets you search for Looker content using filters for specific content types, special characters, and more metadata options.
- When the BI Engine Symmetric Aggregates feature is enabled, for queries that use symmetric aggregates , Looker generates experimental SQL patterns that execute faster on the BigQuery BI Engine.

### Load HubSpot data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/hubspot-transfer](https://docs.cloud.google.com/bigquery/docs/hubspot-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- To allow the HubSpot connector to transfer data from your HubSpot account, you must enable the following scopes for your private app: Required scopes automation business-intelligence collector graphql query execute collector graphql query read content conversations.read conversations.visitor identification.tokens.create crm.import crm.lists.read crm.objects.companies.read crm.objects.contacts.read crm.objects.deals.read crm.objects.owners.read crm.schemas.companies.read crm.schemas.contacts.read crm.schemas.deals.read e-commerce files forms forms-uploaded-files hubdb integration-sync oauth sales-email-read settings.users.read settings.users.teams.read social tickets timeline transactional-email For information about configuring scopes for your private app, see Legacy private apps .
- Data type mapping The following table maps HubSpot data types to the corresponding BigQuery data types: HubSpot data type BigQuery data type String STRING Text STRING Integer INTEGER Boolean BOOLEAN Date TIMESTAMP Datetime TIMESTAMP Long BIGNUMERIC Pricing There is no cost to transfer HubSpot data into BigQuery while this feature is in Preview .
- The following list includes a list of required scopes needed to transfer its corresponding data object: crm.objects.appointments.read crm.objects.courses.read crm.objects.custom.read crm.objects.goals.read crm.objects.leads.read crm.objects.line items.read crm.objects.listings.read crm.objects.orders.read crm.objects.owners.read crm.objects.products.read crm.objects.services.read crm.objects.users.read crm.pipelines.orders.read crm.schemas.appointments.read crm.schemas.courses.read crm.schemas.custom.read crm.schemas.deals.read crm.schemas.line items.read crm.schemas.listings.read crm.schemas.orders.read crm.schemas.quotes.read crm.schemas.services.read marketing.campaigns.read marketing.campaigns.revenue.read settings.users.read settings.users.teams.read crm.dealsplits.read write crm.export crm.extensions calling transcripts.read crm.schemas.carts.read crm.objects.carts.read crm.objects.subscriptions.read crm.objects.commercepayments.read crm.objects.projects.read crm.objects.quotes.read crm.objects.partner-clients.read crm.objects.partner-services.read crm.objects.marketing events.read crm.objects.invoices.read crm.objects.feedback submissions.read crm.objects.forecasts.read crm.schemas.commercepayments.read crm.schemas.forecasts.read crm.schemas.invoices.read crm.schemas.projects.read crm.schemas.subscriptions.read BigQuery prerequisites Verify that you have completed all actions required to enable the BigQuery Data Transfer Service .
- Load HubSpot data into BigQuery Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### Legacy SQL data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)
- Source ID: `site-docs-reference-required-6`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- The following cast and conversion functions are supported in legacy SQL: CAST(<numeric> AS STRING) CAST(<bignumeric> AS STRING) CAST(<string> AS NUMERIC) CAST(<string> AS BIGNUMERIC) Civil time in legacy SQL You can read civil time data types—DATE, TIME, and DATETIME—and process them with non-modifying operators such as SELECT list (with aliases) , GROUP BY keys , and pass-through fields in window functions, etc.
- Exact numeric in legacy SQL You can read NUMERIC or BIGNUMERIC values in non-modifying clauses such as SELECT list (with aliases) , GROUP BY keys , and pass-through fields in window functions, and so on.
- Legacy SQL data types This document details the data types supported by BigQuery's legacy SQL query syntax.
- BIGNUMERIC Legacy SQL has limited support for BIGNUMERIC.

