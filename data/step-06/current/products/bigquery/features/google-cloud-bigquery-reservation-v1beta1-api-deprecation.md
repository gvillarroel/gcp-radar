---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.732Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "google.cloud.bigquery.reservation.v1beta1 API deprecation"
feature_slug: "google-cloud-bigquery-reservation-v1beta1-api-deprecation"
latest_feature_date: "2022-07-11"
deprecation_date: "September 27, 2022"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bigqueryconnection/rest"
keywords:
  - "September 27, 2022"
  - "google.cloud.bigquery.reservation.v1beta1"
  - "BigQuery reservation v1beta1"
  - "BigQuery Reservation v1beta1"
  - "v1beta1 reservation API"
  - "API deprecation"
  - "replace with v1 API"
  - "v1beta1"
---

# google.cloud.bigquery.reservation.v1beta1 API deprecation

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The google.cloud.bigquery.reservation.v1beta1 API package is deprecated and will be replaced by the GA v1 API package; deprecated on September 27, 2022.

## Extended Definition

The provided source does not confirm the stated deprecation of `google.cloud.bigquery.reservation.v1beta1` itself. It does show that BigQuery Connection exposes a `v1beta1` REST surface and provides discovery documents for both `v1beta1` and `v1`, so the evidence only supports the existence of dual-version API documentation, not a deprecation replacement statement for Reservation.

## Evidence Summary

The cited BigQuery Connection reference page documents `v1beta1` and `v1` endpoints/discovery docs for that service, but does not provide reservation-specific deprecation confirmation.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bigqueryconnection/rest](https://docs.cloud.google.com/bigquery/docs/reference/bigqueryconnection/rest)

## Supporting Pages

### BigQuery Connection API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bigqueryconnection/rest](https://docs.cloud.google.com/bigquery/docs/reference/bigqueryconnection/rest)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://bigqueryconnection.googleapis.com REST Resource: v1beta1.projects.locations.connections Methods create POST /v1beta1/{parent=projects/ /locations/ }/connections Creates a new connection. delete DELETE /v1beta1/{name=projects/ /locations/ /connections/ } Deletes connection and associated credential. get GET /v1beta1/{name=projects/ /locations/ /connections/ } Returns specified connection. getIamPolicy POST /v1beta1/{resource=projects/ /locations/ /connections/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent=projects/ /locations/ }/connections Returns a list of connections in the given project. patch PATCH /v1beta1/{name=projects/ /locations/ /connections/ } Updates the specified connection. setIamPolicy POST /v1beta1/{resource=projects/ /locations/ /connections/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta1/{resource=projects/ /locations/ /connections/ }:testIamPermissions Returns permissions that a caller has on the specified resource. updateCredential PATCH /v1beta1/{name=projects/ /locations/ /connections/ /credential} Sets the credential for the specified connection.
- This service provides the following discovery documents: https://bigqueryconnection.googleapis.com/$discovery/rest?version=v1 https://bigqueryconnection.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1beta1.projects.locations.connections REST Resource: v1.projects.locations.connections Service: bigqueryconnection.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

