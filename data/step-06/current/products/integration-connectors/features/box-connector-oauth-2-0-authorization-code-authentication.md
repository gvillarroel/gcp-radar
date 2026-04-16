---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.228Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Box connector OAuth 2.0 authorization code authentication"
feature_slug: "box-connector-oauth-2-0-authorization-code-authentication"
latest_feature_date: "2023-04-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure"
keywords:
  - "box"
  - "connector"
  - "oauth"
  - "authorization"
  - "code"
  - "authentication"
  - "the"
  - "supports"
---

# Box connector OAuth 2.0 authorization code authentication

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The Box connector supports OAuth 2.0 authorization code authentication.

## Extended Definition

The Box connector supports OAuth 2.0 authorization code authentication.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure)

## Supporting Pages

### Box \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure)
- Source ID: `site-docs-root-2`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following authentication types are supported by the Box connection: JWT authentication OAuth 2.0 - Authorization code Box JSON OAuth 2.0 - Client credentials To understand how to configure these authentication types, see Configure authentication .
- OAuth JWT token method connection type Field name Details Location us-central1 Connector Box Connector version 1 Connection Name box-conn Enable Cloud Logging yes Service Account XXXX@serviceaccount Impersonate User Mode User Minimum number of nodes 2 Maximum number of nodes 2 Authentication JWT Authentication Client ID XXXX Client Secret XXXX Secret Version 1 Private key XXXX Secret Version 1 Private key Password XXXX Secret Version 1 Box Application Access level Enterprise Enterprise ID/User Id XXXX OAuth JWT Public Key Id XXXX Auth Scheme OAuthJWT Initiatiate OAuth GETANDREFRESH OAuth JWT Cert Type PEMKEY BLOB You can access the Client ID, Client Secret, Box Application Access Level, and Enterprise Id/User Id from the Box account.
- OAuth Client Credentials connection type Field name Details Location us-central1 Connector Box Connector version 1 Connection Name oauth-clientcred-conn Enable Cloud Logging yes Service Account XXXX@serviceaccount Impersonate User Mode User As User Id XXXX Minimum number of nodes 2 Maximum number of nodes 2 Authentication OAuth Client Credentials OAuth Client ID XXXX OAuth Client Secret XXXX Secret Version 1 Subject ID XXXX Box Application Access Level enterprise You can access Client ID, Client Secret, Box Application Access Level, and Enterprise Id/User Id from the Box account.
- OAuth authorization code connection type Field name Details Location us-central1 Connector Box Connector version 1 Connection Name box-conn Enable Cloud Logging yes Service Account XXXX@serviceaccount Impersonate User Mode User Authorization OAuth 2.0 - Authorization code Minimum number of nodes 2 Maximum number of nodes 2 Client ID XXXX Scopes root readwrite Client Secret XXXX Secret Version 1 For information about Box OAuth configuration, see Create your OAuth application .

### DocuSign \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OAUTH 2.0 - Authorization Code connection type Field name Details Location us-central1 Connector DocuSign Connector version 1 Connection Name gcp-docusign-new-auth Enable Cloud Logging No UseSandbox Yes Service Account 123456789012-compute@developer.gserviceaccount.com Authentication OAuth 2.0 - Authorization code Client Id 67dxxxxx-xxxx-xxxx-xxxx-xxxxxxxcb79 Scopes signature Client secret CLIENT SECRET Secret Version 1 Authorization URL https://account-d.docusign.com/oauth/auth OAuth 2.0 - JWT Bearer connection type Field name Details Location us-central1 Connector DocuSign Connector version 1 Connection Name gcp-docusign-token Enable Cloud Logging No UseSandbox Yes Service Account 123456789012-compute@developer.gserviceaccount.com Authentication OAuth 2.0 - JWT Bearer Connected App Consumer Key 67dxxxxx-xxxx-xxxx-xxxx-xxxxxxxcb79 Username USER NAME Private Key PRIVATE KEY Secret Version 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- The following authentication types are supported by the DocuSign connection: OAUTH 2.0 - Authorization Code OAuth 2.0 - JWT Bearer To understand how to configure these authentication types, see Configure authentication .
- Authorization URL : Enter the URL for authorization, such as https://account.docusign.com/oauth/auth for production account or https://account-d.docusign.com/oauth/auth for sandbox account.
- OAUTH 2.0 - Authorization Code Client ID : The client ID used for requesting access tokens.

### Asana \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additional steps after connection creation If you selected OAuth 2.0 - Authorization code for authentication, you must do the following additional steps after creating the connection: In the Connections page , locate the newly created connection.
- The following authentication types are supported by the Asana connection: Personal Access Token OAuth 2.0 Authorization code To understand how to configure these authentication types, see Configure authentication .
- Verify the OAuth 2.0 - Authorization code details in the Authentication section.
- Re-authorization for authorization code If you are using Authorization code authentication type and have made any configuration changes in your Asana application, you must re-authorize your Asana connection.

### Dropbox \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure)
- Source ID: `site-docs-root-2`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following authentication types are supported by the dropbox connection: OAuth 2.0 Auth Code Grant To understand how to configure these authentication types, see Configure authentication .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Id" : "id:8-07A6kHAoIAAAAAAAABcg" , "FileType" : "file" } If the action is successful, the DownloadFile task's connectorOutputPayload response parameter will have a value similar to the following: [ { "Success" : "true" , "Name" : "license.txt" , "Id" : "id:8-07A6kHAoIAAAAAAAABcg" , "ClientModified" : "2024-07-09T09:52:41Z" , "ServerModified" : "2024-07-09T09:52:41Z" , "Revision" : "61ccd7da2b987c0f52053" , "Size" : "11" , "LowerCasePath" : "/sahil kapoor/testingdropboxupdated/uploadfolderwithnestedfolder/nestedfolder2/license.txt" , "DisplayPath" : "/Sahil Kapoor/TestingDropBoxUpdated/uploadFolderWithNestedFolder/NestedFolder2/license.txt" , "PreviewURL" : null , "IsDownloadable" : "true" , "HasExplicitSharedMembers" : null , "ContentHash" : "f6dc724d119649460e47ce719139e521e082be8a9755c5bece181de046ee65fe" , "Owner" : null , "Title" : null , "MimeType" : null , "FileData" : "SGVsbG8gd29ybGQ=" , "parent shared folder id" : "3237290067" , "sharing info read only" : "false" , "sharing info parent shared folder id" : "3237290067" , "sharing info modified by" : "dbid:AACVLctlrEo-ouTSxUVSTi0loZCSZKc933A" } ] Use the Dropbox connection in an integration After you create the connection, it becomes available in both Apigee Integration and Application Integration.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "From Path" : "/DropboxFolder/pptxFile.pptx" , "To Path" : "/DropBoxFolder2/Folder/pptFile.pptx" } If the action is successful, the CopyResource task's connectorOutputPayload response parameter will have a value similar to the following: [ { "Success" : "true" , "metadata .tag" : "file" , "metadata name" : "pptxFile.pptx" , "metadata path lower" : "/testingdropboxupdated/abcde/pptxfile.pptx" , "metadata path display" : "/TestingDropBoxUpdated/abcde/pptxFile.pptx" , "metadata parent shared folder id" : "3204685267" , "metadata id" : "id:8-07A6kHAoIAAAAAAAAC1w" , "metadata client modified" : "2024-06-13T11:06:37Z" , "metadata server modified" : "2024-07-12T10:19:02Z" , "metadata rev" : "61d0a3560ecb5bf039dd3" , "metadata size" : "17052" , "metadata sharing info read only" : "false" , "metadata sharing info parent shared folder id" : "3204685267" , "metadata sharing info modified by" : "dbid:AACVLctlrEo-ouTSxUVSTi0loZCSZKc933A" , "metadata is downloadable" : "true" , "metadata content hash" : "0234f7d4eaf914cb276716c8b2a24e24655d1f6f39ee549207e33a4255e2fba2" } ] Example - Create a folder The following example shows how to create a folder at a given path: In the Configure connector task dialog, click Actions .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "From Path" : "/TestDropBoxFolder/Folder1/dummypdf2.pdf" , "To Path" : "/EmptyFolder/Folder1/dummypdf2.pdf" } If the action is successful, the MoveResource task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Status" : "Success" }] Example - Rename a resource The following example shows how to rename a resource: In the Configure connector task dialog, click Actions .

