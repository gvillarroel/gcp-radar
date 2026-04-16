---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.913Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Dataset labels"
feature_slug: "dataset-labels"
latest_feature_date: "2016-07-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/migration/rest"
  - "https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest"
  - "https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc"
keywords:
  - "dataset"
  - "labels"
  - "bigquery"
  - "supports"
  - "labeling"
  - "datasets"
  - "through"
  - "command"
---

# Dataset labels

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports labeling datasets through the API and command-line tool.

## Extended Definition

BigQuery supports labeling datasets through the API and command-line tool.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/migration/rest](https://docs.cloud.google.com/bigquery/docs/reference/migration/rest)
- [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest)
- [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc)

## Supporting Pages

### BigQuery Migration API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/migration/rest](https://docs.cloud.google.com/bigquery/docs/reference/migration/rest)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://bigquerymigration.googleapis.com REST Resource: v2alpha.projects.locations.workflows Methods create POST /v2alpha/{parent=projects/ /locations/ }/workflows Creates a migration workflow. delete DELETE /v2alpha/{name=projects/ /locations/ /workflows/ } Deletes a migration workflow by name. get GET /v2alpha/{name=projects/ /locations/ /workflows/ } Gets a previously created migration workflow. list GET /v2alpha/{parent=projects/ /locations/ }/workflows Lists previously created migration workflow. start POST /v2alpha/{name=projects/ /locations/ /workflows/ }:start Starts a previously created migration workflow.
- REST Resource: v2alpha.projects.locations.workflows REST Resource: v2alpha.projects.locations.workflows.subtasks REST Resource: v2.projects.locations.workflows REST Resource: v2.projects.locations.workflows.subtasks Service: bigquerymigration.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service provides the following discovery documents: https://bigquerymigration.googleapis.com/$discovery/rest?version=v2 https://bigquerymigration.googleapis.com/$discovery/rest?version=v2alpha Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- Home Documentation Data analytics BigQuery Reference Send feedback BigQuery Migration API Stay organized with collections Save and categorize content based on your preferences.

### BigQuery Reservation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest)
- Source ID: `site-api-reference-required-3`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://bigqueryreservation.googleapis.com REST Resource: v1.projects.locations Methods getBiReservation GET /v1/{name=projects/ /locations/ /biReservation} Retrieves a BI reservation. searchAllAssignments GET /v1/{parent=projects/ /locations/ }:searchAllAssignments Looks up assignments for a specified resource for a particular region. searchAssignments (deprecated) GET /v1/{parent=projects/ /locations/ }:searchAssignments Deprecated: Looks up assignments for a specified resource for a particular region. updateBiReservation PATCH /v1/{biReservation.name=projects/ /locations/ /biReservation} Updates a BI reservation.
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.capacityCommitments REST Resource: v1.projects.locations.reservationGroups REST Resource: v1.projects.locations.reservations REST Resource: v1.projects.locations.reservations.assignments Service: bigqueryreservation.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service provides the following discovery document: https://bigqueryreservation.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- Home Documentation Data analytics BigQuery Reference Send feedback BigQuery Reservation API Stay organized with collections Save and categorize content based on your preferences.

### BigQuery Reservation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service: bigqueryreservation.googleapis.com The Service name bigqueryreservation.googleapis.com is needed to create RPC client stubs. google.cloud.bigquery.reservation.v1.ReservationService Methods CreateAssignment Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation.
- Home Documentation Data analytics BigQuery Reference Send feedback BigQuery Reservation API Stay organized with collections Save and categorize content based on your preferences.
- A service to modify your BigQuery reservations.

