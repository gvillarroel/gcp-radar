---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.477Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Data clean room analysis rule list overlap"
feature_slug: "data-clean-room-analysis-rule-list-overlap"
latest_feature_date: "2024-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints"
keywords:
  - "clean"
  - "room"
  - "analysis"
  - "rule"
  - "list"
  - "overlap"
  - "bigquery"
  - "rooms"
---

# Data clean room analysis rule list overlap

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery data clean rooms can enforce list overlap controls through analysis rules.

## Extended Definition

BigQuery data clean rooms can enforce list overlap controls through analysis rules.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)

## Supporting Pages

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-reference-2`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ExamTable ); Update a list overlap analysis rule for a view You can change the list overlap analysis rule for a view with a data clean room or with the ALTER VIEW statement: ALTER VIEW VIEW NAME SET OPTIONS ( privacy policy = ' '' { "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) For more information about the values you can set for the privacy policy in the preceding syntax, see Define a list overlap analysis rule for a view .
- Define a list overlap analysis rule for a view You can define a list overlap analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: join restriction policy : The join restriction policy for the list overlap analysis rule.
- With BigQuery, you can enforce an analysis rule on a view, using a data clean room or by applying the analysis rule directly to the view.
- You can define a differential privacy analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED }, "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: differential privacy policy : The differential privacy policy for the differential privacy analysis rule.

### "View and subscribe to listings and data exchanges \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- Source ID: `site-docs-root-2`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- In the Filters section, you can filter data clean room exchanges based on the following fields: Listings : select the Clean rooms checkbox to view the data clean rooms shared with you.
- Subscribe to data exchanges : BigQuery User ( roles/bigquery.user ) To subscribe to data exchanges in the context of data clean room exchanges, you must also ask the BigQuery sharing exchange publisher to grant you the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) on the specific data clean room.
- To subscribe to a data clean room exchange, follow these steps: Console To view a list of data clean room exchanges that you have access to, follow the steps in Discover data exchanges .
- To filter data exchanges by their name or description, enter the name or description of the data clean room exchange in the Search for listings field.

### "Manage Sharing data exchanges and listings using custom constraints \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Existing listings published to data clean rooms aren't checked during the dry run of existing resources.
- Resource Field analyticshub.googleapis.com/DataExchange resource.description resource.discoveryType resource.displayName resource.documentation resource.icon resource.logLinkedDatasetQueryUserEmail resource.primaryContact analyticshub.googleapis.com/Listing resource.allowOnlyMetadataSharing resource.bigqueryDataset.dataset resource.bigqueryDataset.replicaLocations resource.bigqueryDataset.restrictedExportPolicy.enabled resource.bigqueryDataset.restrictedExportPolicy.restrictDirectTableAccess resource.bigqueryDataset.restrictedExportPolicy.restrictQueryResult resource.bigqueryDataset.selectedResources.routine resource.bigqueryDataset.selectedResources.table resource.categories resource.dataProvider.name resource.dataProvider.primaryContact resource.description resource.discoveryType resource.displayName resource.documentation resource.icon resource.logLinkedDatasetQueryUserEmail resource.primaryContact resource.publisher.name resource.publisher.primaryContact resource.pubsubTopic.dataAffinityRegions resource.pubsubTopic.topic resource.requestAccess resource.restrictedExportConfig.enabled resource.restrictedExportConfig.restrictQueryResult What's next Learn more about custom constraints .
- The Listing resource must have the restrictedExportPolicy object enabled. name : organizations/ ORGANIZATION ID /customConstraints/custom.listingWithRestrictedExportPolicy resource types : analyticshub.googleapis.com/Listing method types : - CREATE - UPDATE condition : has(resource.bigqueryDataset) && has(resource.bigqueryDataset.restrictedExportPolicy) && resource.bigqueryDataset.restrictedExportPolicy.enabled == true action type : DENY display name : The Listing must have restricted export policy. description : The Listing resource must have restrictedExportPolicy enabled to allow egress controls.
- The Listing resource must refer to a BigQuery dataset. name : organizations/ ORGANIZATION ID /customConstraints/custom.listingWithBQDataset resource types : analyticshub.googleapis.com/Listing method types : - CREATE - UPDATE condition : has(resource.bigqueryDataset) && resource.bigqueryDataset.dataset.contains('test') action type : ALLOW display name : Listing must have a BigQuery dataset. description : Listing must have a BigQuery dataset whose name contains the string "test".

