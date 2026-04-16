---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.214Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "HTTP connector OAuth 2.0 authorization code authentication"
feature_slug: "http-connector-oauth-2-0-authorization-code-authentication"
latest_feature_date: "2024-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure"
keywords:
  - "http"
  - "connector"
  - "oauth"
  - "authorization"
  - "code"
  - "authentication"
  - "the"
  - "supports"
---

# HTTP connector OAuth 2.0 authorization code authentication

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The HTTP connector supports OAuth 2.0 authorization code authentication.

## Extended Definition

The HTTP connector supports OAuth 2.0 authorization code authentication.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)

## Supporting Pages

### Asana \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additional steps after connection creation If you selected OAuth 2.0 - Authorization code for authentication, you must do the following additional steps after creating the connection: In the Connections page , locate the newly created connection.
- The following authentication types are supported by the Asana connection: Personal Access Token OAuth 2.0 Authorization code To understand how to configure these authentication types, see Configure authentication .
- Verify the OAuth 2.0 - Authorization code details in the Authentication section.
- Re-authorization for authorization code If you are using Authorization code authentication type and have made any configuration changes in your Asana application, you must re-authorize your Asana connection.

### Box \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following authentication types are supported by the Box connection: JWT authentication OAuth 2.0 - Authorization code Box JSON OAuth 2.0 - Client credentials To understand how to configure these authentication types, see Configure authentication .
- Additional steps after connection creation If you selected OAuth 2.0 - Authorization code for authentication, you must do the following additional steps after creating the connection: In the Connections page , locate the newly created connection.
- Verify the OAuth 2.0 - Authorization code details in the Authentication section.
- OAuth JWT token method connection type Field name Details Location us-central1 Connector Box Connector version 1 Connection Name box-conn Enable Cloud Logging yes Service Account XXXX@serviceaccount Impersonate User Mode User Minimum number of nodes 2 Maximum number of nodes 2 Authentication JWT Authentication Client ID XXXX Client Secret XXXX Secret Version 1 Private key XXXX Secret Version 1 Private key Password XXXX Secret Version 1 Box Application Access level Enterprise Enterprise ID/User Id XXXX OAuth JWT Public Key Id XXXX Auth Scheme OAuthJWT Initiatiate OAuth GETANDREFRESH OAuth JWT Cert Type PEMKEY BLOB You can access the Client ID, Client Secret, Box Application Access Level, and Enterprise Id/User Id from the Box account.

### Azure AD (Entra ID) \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Azure AD (Auth Code Grant Type) connection type Field name Details Location europe-west1 Connector Azure AD (Entra ID) Connector version 1 Connection Name azure-ad-connection Enable Cloud Logging Yes Service Account XXXX@serviceaccount Azure Tenant 9b25e811-f983-4982-82e4-263c1ca48112 Minimum number of nodes 2 Maximum number of nodes 50 Authentication Yes Azure AD Yes Client Id XXXX Scope https://graph.microsoft.com/user.read Client Secret XXXX Secret version 1 Authorization URL https://login.microsoftonline.com/9bxxxxxxxxx8112/oauth2/v2.0/authorize?prompt=consent Before you specify a value for the Scope field, ensure the following: You must provide User.Read.All and User.Write.All permissions at the connection level and at the Azure App level.
- The following authentication types are supported by the Azure AD (Entra ID) connection: Azure AD (Authorization Code Grant Type) OAuth 2.0 Client Credentials OAuth 2.0 Client credentials with JWT bearer To understand how to configure these authentication types, see Configure authentication .
- Additional steps after connection creation If you selected OAuth 2.0 - Authorization code for authentication, you must do the following additional steps after creating the connection: In the Connections page , locate the newly created connection.
- Verify the OAuth 2.0 - Authorization code details in the Authentication section.

### BigQuery \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select whether to authenticate with OAuth 2.0 - Authorization code or to proceed without authentication.
- Verify the OAuth 2.0 - Authorization code details in the Authentication section.
- Re-authorization for authorization code If you are using Authorization code authentication type and have made any configuration changes in BigQuery, you must re-authorize your BigQuery connection.
- Authorize the connection If you use OAuth 2.0 - authorization code to authenticate the connection, complete the following tasks after you create the connection.

