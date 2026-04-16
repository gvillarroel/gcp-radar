---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.195Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Google-managed OAuth client support for Google Drive connector"
feature_slug: "google-managed-oauth-client-support-for-google-drive-connector"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuresynapse/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/bigtable/configure"
keywords:
  - "managed"
  - "oauth"
  - "client"
  - "for"
  - "drive"
  - "connector"
  - "the"
  - "can"
---

# Google-managed OAuth client support for Google Drive connector

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The Google Drive connector can use a Google-managed OAuth client instead of a customer-created client.

## Extended Definition

The Google Drive connector can use a Google-managed OAuth client instead of a customer-created client.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuresynapse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuresynapse/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigtable/configure)

## Supporting Pages

### Azure Synapse \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuresynapse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuresynapse/configure)
- Source ID: `site-docs-root-2`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Get help from the Google Cloud community You can post your questions and discuss this connector in the Google Cloud community at Cloud Forums .
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT CHAR DATE DATETIME DATETIME2 DATETIMEOFFSET DECIMAL FLOAT DECIMAL FLOAT INT MONEY NCHAR NVARCHAR REAL LSEG SMALLDATETIME SMALLINT SMALLMONEY TINYINT UNIQUEIDENTIFIER VARBINARY VARCHAR Actions The Azure Synapse connector lets you execute your stored procedures and custom SQL queries in the format supported by your Azure Synapse.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- Additional steps after connection creation If you selected OAuth 2.0 - Authorization code for authentication, you must do the following additional steps after creating the connection: In the Connections page , locate the newly created connection.

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

### Azure DevOps \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Field name Information model Project model Repository model Analytics model All models AzureAD connection Location europe-west1 europe-west1 europe-west1 europe-west1 asia-east1 europe-west1 Connector Azure DevOps Azure DevOps Azure DevOps Azure DevOps Azure DevOps Azure DevOps Connector version 1 1 1 1 1 1 Connection Name azuredevops-informationmodel azuredevops-projectmodel azuredevops-repositorymodel azuredevops-analyticsmodel devops azuredevops-oauth Enable Cloud Logging Yes Yes Yes Yes Yes Yes Log Level Debug Debug Debug Debug Debug Debug Service Account Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Azure Tenant Tenant Id Tenant Id Tenant Id Tenant Id Tenant Id Tenant Id Organization Organization Name Organization Name Organization Name Organization Name Organization Name Organization Name Schema Information Project Repository RepositoryId Analytics Project Catalog Devops Project ProjectId Project ProjectId Project ProjectId Project ProjectId Azure Dev Ops Edition AzureDevOps Online AzureDevOps Online AzureDevOps Online AzureDevOps Online AzureDevOps Online AzureDevOps Online Azure Dev Ops Service API 6.0 6.0 6.0 6.0 6.0 6.0 Include Custom Fields Yes Yes Yes Yes Yes Yes CustomizedDefaultCatalogName CustomizedDefaultCatalogName=Google CustomizedDefaultCatalogName=Google Minimum number of nodes 2 2 2 2 2 2 Maximum number of nodes 50 50 50 50 50 50 Authentication Yes Yes Yes Yes Yes Yes Basic Yes Yes Yes Yes Yes API Token Api Token provided by your app Api Token provided by your app Api Token provided by your app Api Token provided by your app Api Token provided by your app Secret version 1 1 1 1 1 1 AzureAD Yes Client ID Client Id Client Secret Value Client Secret Value Scopes user impersonation Authorization URL https://login.microsoftonline.com/c6f32d0e-6725-4007-81c2-951e853061a6/oauth2/authorize You can use the following connection properties to manage data fetched from Azure DevOps.
- Running this example, returns a response similar to the following in the connector task's connectorOutputPayload output variable: {"Id": 13 } Get help from the Google Cloud community You can post your questions and discuss this connector in the Google Cloud community at Cloud Forums .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "CloneRequirements": true, "CopyAllSuites": true, "RelatedLinkComment": "Cloned from existing test plan googlecloud", "DestinationPlanName": "TestPlan 2", "DestinationPlanAreaPath": "GCPTesting New Project", "DestinationPlanIteration": "GCPTesting New Project", "DestinationPlanProject": "GCPTesting New Project", "SourceTestPlanId": 1, "CopyAncestorHierarchy": true } If the action is successful, the CloneTestPlan task's connectorOutputPayload response parameter will have a value similar to the following: [ { "CloneOperationId": null, "CloneOperationState": "queued", "sourcetestplan project id": "ea4270d3-d335-4ef1-b1af-37a7591880cf", "sourcetestplan project name": "GCPTesting New Project", "sourcetestplan project state": "unchanged", "sourcetestplan project visibility": "unchanged", "sourcetestplan project lastupdatetime": "0001-01-01T00:00:00", "sourcetestplan id": "1", "sourcetestplan name": "Test Plan 1", "destinationtestplan id": "15", "destinationtestplan project id": "ea4270d3-d335-4ef1-b1af-37a7591880cf", "destinationtestplan project name": "GCPTesting New Project", "destinationtestplan project state": "unchanged", "destinationtestplan project visibility": "unchanged", "destinationtestplan project lastupdatetime": "0001-01-01T00:00:00", "destinationtestplan updateddate": "2025-01-07T14:02:31.247Z", "destinationtestplan updatedby displayname": "Charlie Cruz", "destinationtestplan updatedby url": "https://spsprodcin1.vssps.visualstudio.com/A0f5fd5e8-7721-4842-b504-2a8ddb8efeb0/ apis/Identities/df102a0c-59d2-6d69-aecd-556086d6d8d6", "destinationtestplan updatedby links avatar href": "https://dev.azure.com/sunitavenkata2024/ apis/GraphProfile/MemberAvatars/msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan updatedby id": "df102a0c-59d2-6d69-aecd-556086d6d8d6", "destinationtestplan updatedby uniquename": "sunitavenkata2024@outlook.com", "destinationtestplan updatedby imageurl": "https://dev.azure.com/sunitavenkata2024/ apis/GraphProfile/MemberAvatars/msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan updatedby descriptor": "msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan rootsuite id": "16", "destinationtestplan rootsuite name": "TestPlan 2", "destinationtestplan links self href": "https://dev.azure.com/sunitavenkata2024/GCPTesting New Project/ apis/testplan/Plans/15", "destinationtestplan links clienturl href": "mtms://dev.azure.com:443/sunitavenkata2024/p:GCPTesting New Project/Testing/testplan/connect?id=15", "destinationtestplan links rootsuite href": "https://dev.azure.com/sunitavenkata2024/GCPTesting New Project/ apis/testplan/Plans/15/Suites/16", "destinationtestplan revision": "1", "destinationtestplan name": "TestPlan 2", "destinationtestplan areapath": "GCPTesting New Project", "destinationtestplan startdate": "2025-01-07T14:02:31.0878913Z", "destinationtestplan enddate": "2025-01-14T14:02:31.0878913Z", "destinationtestplan iteration": "GCPTesting New Project", "destinationtestplan owner displayname": "sunita m V", "destinationtestplan owner url": "https://spsprodcin1.vssps.visualstudio.com/A0f5fd5e8-7721-4842-b504-2a8ddb8efeb0/ apis/Identities/df102a0c-59d2-6d69-aecd-556086d6d8d6", "destinationtestplan owner links avatar href": "https://dev.azure.com/sunitavenkata2024/ apis/GraphProfile/MemberAvatars/msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan owner id": "df102a0c-59d2-6d69-aecd-556086d6d8d6", "destinationtestplan owner uniquename": "sunitavenkata2024@outlook.com", "destinationtestplan owner imageurl": "https://dev.azure.com/sunitavenkata2024/ apis/GraphProfile/MemberAvatars/msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan owner descriptor": "msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan state": "Active", "destinationtestplan testoutcomesettings syncoutcomeacrosssuites": "false", "cloneoptions relatedlinkcomment": "Cloned from existing test plan gcp", "cloneoptions copyallsuites": "true", "cloneoptions copyancestorhierarchy": "true", "cloneoptions clonerequirements": "true", "cloneoperationresponse state": "queued", "cloneoperationresponse links self href": "https://dev.azure.com/sunitavenkata2024/GCPTesting New Project/ apis/testplan/Plans/CloneOperation/0" } ] Example - Clone a test suite In the Configure connector task dialog, click Actions .
- In the Data Mapper section of the Data Mapping task, click Open Data Mapping Editor and then enter a value similar to the following in the Input Value field and choose the EntityId/ConnectorInputPayload as Local variable. { "Name": "project from Googlecloud test 4", "Description": "This is new project", "CapabilitiesVersionControlType": "Git\n", "CapabilitiesProcessTemplateTypeId": "6b724908-ef14-45cf-84f8-768b5384da45" } If the integration is successful, the Projects task's connectorOutputPayload response parameter will have a value similar to the following: { "Id": "c1a8e7f4-9afa-47a8-9862-b56229e134a9" } The ID generated after performing the Create operation on a project is not the actual project ID.

### Bigtable \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigtable/configure)
- Source ID: `site-docs-root-2`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service account authentication connection type Field name Details Location asia-east1 Version 1 Connector bigtable Connector version 1 Connection Name googlecloud-bigtable-service-authontication Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Project Id PROJECT ID Instance ID gcloud-bigtable-instance Connection Pool Size 1 Minimum number of nodes 2 Maximum number of nodes 50 Client Secret bigtable-client-secret Secret Version 1 OAuth 2.0 - Authorization code connection type Field name Details Location asia-east1 Version 1 Connector bigtable Connector version 1 Connection Name bigtable-oauth Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Project Id PROJECT ID Instance ID googlecloud-bigtable-instance Connection Pool Size 1 Minimum number of nodes 2 Maximum number of nodes 50 Client Secret bigtable-client-secret Secret Version 1 System limitations The Bigtable connector can process a maximum of 16 transactions per second, per node , and throttles any transactions beyond this limit.
- Get help from the Google Cloud community You can post your questions and discuss this connector in the Google Cloud community at Cloud Forums .
- You can perform any of the following operations on an entity: List Get Create Update Delete Selecting an entity from the available list, generates a list of operations available for the entity.
- For example, in a database connector, tables are the entities, in a file server connector, folders are the entities, and in a messaging system connector, queues are the entities.

