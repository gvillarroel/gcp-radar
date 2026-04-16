---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.196Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Google-managed OAuth client support for Google Forms connector"
feature_slug: "google-managed-oauth-client-support-for-google-forms-connector"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/AuthConfig"
  - "https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection"
keywords:
  - "managed"
  - "oauth"
  - "client"
  - "for"
  - "forms"
  - "connector"
  - "the"
  - "can"
---

# Google-managed OAuth client support for Google Forms connector

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The Google Forms connector can use a Google-managed OAuth client instead of a customer-created client.

## Extended Definition

The Google Forms connector can use a Google-managed OAuth client instead of a customer-created client.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/AuthConfig](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/AuthConfig)
- [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection)

## Supporting Pages

### DocuSign \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure)
- Source ID: `site-docs-root-2`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OAUTH 2.0 - Authorization Code connection type Field name Details Location us-central1 Connector DocuSign Connector version 1 Connection Name gcp-docusign-new-auth Enable Cloud Logging No UseSandbox Yes Service Account 123456789012-compute@developer.gserviceaccount.com Authentication OAuth 2.0 - Authorization code Client Id 67dxxxxx-xxxx-xxxx-xxxx-xxxxxxxcb79 Scopes signature Client secret CLIENT SECRET Secret Version 1 Authorization URL https://account-d.docusign.com/oauth/auth OAuth 2.0 - JWT Bearer connection type Field name Details Location us-central1 Connector DocuSign Connector version 1 Connection Name gcp-docusign-token Enable Cloud Logging No UseSandbox Yes Service Account 123456789012-compute@developer.gserviceaccount.com Authentication OAuth 2.0 - JWT Bearer Connected App Consumer Key 67dxxxxx-xxxx-xxxx-xxxx-xxxxxxxcb79 Username USER NAME Private Key PRIVATE KEY Secret Version 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- You can perform LIST operations on the following entities as well: UserInfo UserSignatures Workspaces Recipients AccountBrands AccountCustomFields EnvelopeTemplates EnvelopeAttachments EnvelopeConsumerDisclosures CloudStorageProviders CustomTabs Locks GroupBrands GroupUsers PowerForms RecipientTabs SigningGroups SigningGroupUsers Templates Example - GET single record for Entity "Accounts" In the Configure connector task dialog, click Entities .
- Get help from the Google Cloud community You can post your questions and discuss this connector in the Google Cloud community at Cloud Forums .
- OAUTH 2.0 - Authorization Code Client ID : The client ID used for requesting access tokens.

### Box \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- OAuth JWT token method connection type Field name Details Location us-central1 Connector Box Connector version 1 Connection Name box-conn Enable Cloud Logging yes Service Account XXXX@serviceaccount Impersonate User Mode User Minimum number of nodes 2 Maximum number of nodes 2 Authentication JWT Authentication Client ID XXXX Client Secret XXXX Secret Version 1 Private key XXXX Secret Version 1 Private key Password XXXX Secret Version 1 Box Application Access level Enterprise Enterprise ID/User Id XXXX OAuth JWT Public Key Id XXXX Auth Scheme OAuthJWT Initiatiate OAuth GETANDREFRESH OAuth JWT Cert Type PEMKEY BLOB You can access the Client ID, Client Secret, Box Application Access Level, and Enterprise Id/User Id from the Box account.
- OAuth Client Credentials connection type Field name Details Location us-central1 Connector Box Connector version 1 Connection Name oauth-clientcred-conn Enable Cloud Logging yes Service Account XXXX@serviceaccount Impersonate User Mode User As User Id XXXX Minimum number of nodes 2 Maximum number of nodes 2 Authentication OAuth Client Credentials OAuth Client ID XXXX OAuth Client Secret XXXX Secret Version 1 Subject ID XXXX Box Application Access Level enterprise You can access Client ID, Client Secret, Box Application Access Level, and Enterprise Id/User Id from the Box account.
- OAuth authorization code connection type Field name Details Location us-central1 Connector Box Connector version 1 Connection Name box-conn Enable Cloud Logging yes Service Account XXXX@serviceaccount Impersonate User Mode User Authorization OAuth 2.0 - Authorization code Minimum number of nodes 2 Maximum number of nodes 2 Client ID XXXX Scopes root readwrite Client Secret XXXX Secret Version 1 For information about Box OAuth configuration, see Create your OAuth application .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Name" : "Google Cloud Platforms created folders" , "ParentId" : "0" } If the integration is successful, the Folder task's connectorOutputPayload response parameter will have a value similar to the following: { "Id" : "222269371053" } Example - Create collaborations In the Configure connector task dialog, click Entities .

### AuthConfig \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/AuthConfig](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/AuthConfig)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "authCode" : string , "pkceVerifier" : string , "redirectUri" : string , "clientId" : string , "clientSecret" : { object ( Secret ) } , "scopes" : [ string ] , "enablePkce" : boolean , "authUri" : string } Fields authCode string Authorization code to be exchanged for access and refresh tokens. pkceVerifier string PKCE verifier to be used during the auth code exchange. redirectUri string Redirect URI to be provided during the auth code exchange. clientId string Client ID for user-provided OAuth app. clientSecret object ( Secret ) Client secret for user-provided OAuth app. scopes[] string Scopes the connection will request when the user performs the auth code flow. enablePkce boolean Whether to enable PKCE when the user performs the auth code flow. authUri string Auth URL for Authorization Code Flow Oauth2AuthCodeFlowGoogleManaged Parameters to support Oauth 2.0 Auth Code Grant Authentication using Google Provided OAuth Client.
- JSON representation { "authType" : enum ( AuthType ) , "additionalVariables" : [ { object ( ConfigVariable ) } ] , "authKey" : string , // Union field type can be only one of the following: "userPassword" : { object ( UserPassword ) } , "oauth2JwtBearer" : { object ( Oauth2JwtBearer ) } , "oauth2ClientCredentials" : { object ( Oauth2ClientCredentials ) } , "sshPublicKey" : { object ( SshPublicKey ) } , "oauth2AuthCodeFlow" : { object ( Oauth2AuthCodeFlow ) } , "oauth2AuthCodeFlowGoogleManaged" : { object ( Oauth2AuthCodeFlowGoogleManaged ) } // End of list of possible types for union field type . } Fields authType enum ( AuthType ) The type of authentication configured. additionalVariables[] object ( ConfigVariable ) List containing additional auth configs. authKey string Identifier key for auth config Union field type .
- Supported auth types. type can be only one of the following: userPassword object ( UserPassword ) UserPassword. oauth2JwtBearer object ( Oauth2JwtBearer ) Oauth2JwtBearer. oauth2ClientCredentials object ( Oauth2ClientCredentials ) Oauth2ClientCredentials. sshPublicKey object ( SshPublicKey ) SSH Public Key. oauth2AuthCodeFlow object ( Oauth2AuthCodeFlow ) Oauth2AuthCodeFlow. oauth2AuthCodeFlowGoogleManaged object ( Oauth2AuthCodeFlowGoogleManaged ) Oauth2AuthCodeFlowGoogleManaged.
- JSON representation UserPassword JSON representation Oauth2JwtBearer JSON representation JwtClaims JSON representation Oauth2ClientCredentials JSON representation SshPublicKey JSON representation Oauth2AuthCodeFlow JSON representation Oauth2AuthCodeFlowGoogleManaged JSON representation AuthConfig defines details of a authentication type.

### "Sample terraform template for connection creation \_|\_ Integration Connectors\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must repurpose this sample based on the connection that you want to create. resource "google integration connectors connection" "testconnection" { name = "test-connection" description = "tf updated description" location = "us-central1" service account = "${data.google project.default.number}-compute@developer.gserviceaccount.com" connector version = "projects/${data.google project.default.project id}/locations/global/providers/zendesk/connectors/zendesk/versions/1" // These show all the different types of config variables, not necessary that each resource will use everything. config variable { key = "proxy enabled" boolean value = false } config variable { key = "sample integer value" integer value = 1 } config variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } config variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } suspended = false auth config { // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } auth type = "USER PASSWORD" auth key = "sampleAuthKey" user password { username = "user@xyz.com" password { secret version = google secret manager secret version.default.name } } } destination config { key = "url" destination { host = "https://test.zendesk.com" port = 80 } } lock config { locked = false reason = "Its not locked" } log config { enabled = true } node config { min node count = 2 max node count = 50 } labels = { foo = "bar" } ssl config { // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } client cert type = "PEM" client certificate { secret version = google secret manager secret version.default.name } client private key { secret version = google secret manager secret version.default.name } client private key pass { secret version = google secret manager secret version.default.name } private server certificate { secret version = google secret manager secret version.default.name } server cert type = "PEM" trust model = "PRIVATE" type = "TLS" use ssl = true } eventing enablement type = "EVENTING AND CONNECTION" eventing config { // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } registration destination config { key = "registration destination config" destination { host = "https://test.zendesk.com" port = 80 } } auth config { auth type = "USER PASSWORD" auth key = "sampleAuthKey" user password { username = "user@xyz.com" password { secret version = google secret manager secret version.default.name } } // These show all the different types of additional variables, not necessary that each resource will use everything. additional variable { key = "sample string" string value = "sampleString" } additional variable { key = "sample boolean" boolean value = false } additional variable { key = "sample integer" integer value = 1 } additional variable { key = "sample secret value" secret value { secret version = google secret manager secret version.default.name } } additional variable { key = "sample encryption key value" encryption key value { type = "GOOGLE MANAGED" kms key name = "sampleKMSKkey" } } } enrichment enabled = true } depends on = [google secret manager secret iam member.default] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Sample terraform template for connection creation The following is a sample terraform template for connection creation.
- For details, see the Google Developers Site Policies .

