---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.202Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "BigQuery connector OAuth 2.0 authorization code support"
feature_slug: "bigquery-connector-oauth-2-0-authorization-code-support"
latest_feature_date: "2024-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/bigtable/configure"
keywords:
  - "connector"
  - "oauth"
  - "authorization"
  - "code"
  - "the"
  - "supports"
  - "authentication"
---

# BigQuery connector OAuth 2.0 authorization code support

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The BigQuery connector supports OAuth 2.0 authorization code authentication.

## Extended Definition

The BigQuery connector supports OAuth 2.0 authorization code authentication.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigtable/configure)

## Supporting Pages

### Apigee API hub \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following authentication types are supported by the Apigee API hub connection: OAuth 2.0 - Authorization code Service account authentication To understand how to configure these authentication types, see Configure authentication .
- Verify the OAuth 2.0 - Authorization code details in the Authentication section.
- Re-authorization for authorization code If you are using Authorization code authentication type and have made any configuration changes in the Apigee API hub, you must re-authorize your Apigee API hub connection.
- Authorize the connection If you use OAuth 2.0 - authorization code to authenticate the connection, complete the following tasks after you create the connection.

### Asana \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Additional steps after connection creation If you selected OAuth 2.0 - Authorization code for authentication, you must do the following additional steps after creating the connection: In the Connections page , locate the newly created connection.
- The following authentication types are supported by the Asana connection: Personal Access Token OAuth 2.0 Authorization code To understand how to configure these authentication types, see Configure authentication .
- Verify the OAuth 2.0 - Authorization code details in the Authentication section.
- Re-authorization for authorization code If you are using Authorization code authentication type and have made any configuration changes in your Asana application, you must re-authorize your Asana connection.

### Box \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- The following authentication types are supported by the Box connection: JWT authentication OAuth 2.0 - Authorization code Box JSON OAuth 2.0 - Client credentials To understand how to configure these authentication types, see Configure authentication .
- Additional steps after connection creation If you selected OAuth 2.0 - Authorization code for authentication, you must do the following additional steps after creating the connection: In the Connections page , locate the newly created connection.
- Verify the OAuth 2.0 - Authorization code details in the Authentication section.
- OAuth JWT token method connection type Field name Details Location us-central1 Connector Box Connector version 1 Connection Name box-conn Enable Cloud Logging yes Service Account XXXX@serviceaccount Impersonate User Mode User Minimum number of nodes 2 Maximum number of nodes 2 Authentication JWT Authentication Client ID XXXX Client Secret XXXX Secret Version 1 Private key XXXX Secret Version 1 Private key Password XXXX Secret Version 1 Box Application Access level Enterprise Enterprise ID/User Id XXXX OAuth JWT Public Key Id XXXX Auth Scheme OAuthJWT Initiatiate OAuth GETANDREFRESH OAuth JWT Cert Type PEMKEY BLOB You can access the Client ID, Client Secret, Box Application Access Level, and Enterprise Id/User Id from the Box account.

### Bigtable \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigtable/configure)
- Source ID: `site-docs-root-2`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service account authentication connection type Field name Details Location asia-east1 Version 1 Connector bigtable Connector version 1 Connection Name googlecloud-bigtable-service-authontication Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Project Id PROJECT ID Instance ID gcloud-bigtable-instance Connection Pool Size 1 Minimum number of nodes 2 Maximum number of nodes 50 Client Secret bigtable-client-secret Secret Version 1 OAuth 2.0 - Authorization code connection type Field name Details Location asia-east1 Version 1 Connector bigtable Connector version 1 Connection Name bigtable-oauth Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Project Id PROJECT ID Instance ID googlecloud-bigtable-instance Connection Pool Size 1 Minimum number of nodes 2 Maximum number of nodes 50 Client Secret bigtable-client-secret Secret Version 1 System limitations The Bigtable connector can process a maximum of 16 transactions per second, per node , and throttles any transactions beyond this limit.
- The following authentication types are supported by the Bigtable connection: Service Account Authentication OAuth 2.0 - Authorization code To understand how to configure these authentication types, see Configure authentication .
- OAuth 2.0 - Authorization code Client ID : The client ID provided by the application.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

