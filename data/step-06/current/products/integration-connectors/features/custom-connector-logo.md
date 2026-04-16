---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.208Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Custom connector logo"
feature_slug: "custom-connector-logo"
latest_feature_date: "2024-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure"
keywords:
  - "custom"
  - "connector"
  - "logo"
  - "connectors"
  - "now"
---

# Custom connector logo

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Custom connectors now support a logo.

## Extended Definition

Custom connectors now support a logo.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring](https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure)

## Supporting Pages

### Monitor connectors \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring](https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Example - Monitor request count The following PromQL query shows how to get and aggregate request count data for active connections: sum by ( location , connection , provider ) ( sum over time ( { "connectors.googleapis.com/connection/request count" , monitored resource = "connectors.googleapis.com/Connection" } [ 1 m ]) ) and on ( location , connection , provider ) avg over time ( { "connectors.googleapis.com/connection/state" , monitored resource = "connectors.googleapis.com/Connection" } [ 1 m ]) > 0 Example - Monitor active nodes The following PromQL query shows how to get and aggregate active node count data for all your connections: sum by ( location , connection , provider ) ( sum over time ( { "connectors.googleapis.com/connection/nodes" , monitored resource = "connectors.googleapis.com/Connection" } [ 1 m ]) ) and on ( location , connection , provider ) avg over time ( { "connectors.googleapis.com/connection/state" , monitored resource = "connectors.googleapis.com/Connection" } [ 1 m ]) > 0 Example - Monitor connection status over a time period The following PromQL query shows how to get the status trend over a time period for all your connections: count by ( status , connection ) ( { "connectors.googleapis.com/connection/connection status" , monitored resource = "connectors.googleapis.com/Connection" } == 1 ) If you want to know the status of connections at the current point in time, use the Metrics Explorer in the Google Cloud console instead of a PromQL query.
- Access metrics using custom dashboards To create custom monitoring dashboards for your Integration Connectors resources in your Google Cloud project, do the following: In the Google Cloud console, go to the Cloud Monitoring > Dashboard Overview page: Go to Dashboard Overview page Click Create dashboard .
- You can visualize your Integration Connectors metrics and data using the following Cloud Monitoring tools: Custom dashboards Metrics Explorer Before you begin Before you use Cloud Monitoring, enable the Cloud Monitoring API.
- To know about the type of metrics sent by the Integration Connectors service, see Integration Connectors metrics .

### BigQuery \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Execute custom SQL query To create a custom query, follow these steps: Follow the detailed instructions to add a connectors task .
- Supported data types The following are the supported data types for this connector: ARRAY BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Known limitations The BigQuery connector doesn't support the primary key in a BigQuery table.
- The results of all the entity operations and actions will be available as a JSON response in the Connectors task's connectorOutputPayload response parameter after you run your integration.
- Enable the following services: secretmanager.googleapis.com (Secret Manager API) connectors.googleapis.com (Connectors API) To understand how to enable services, see Enabling services .

### BigCommerce \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigcommerce/configure)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the following services: secretmanager.googleapis.com (Secret Manager API) connectors.googleapis.com (Connectors API) To understand how to enable services, see Enabling services .
- Home Documentation Application development Integration Connectors Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- To create a connection, do the following: In the Cloud console , go to the Integration Connectors > Connections page and then select or create a Google Cloud project.
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.

### Azure DevOps \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Task Input section of the Connectors task, you can set the filterClause as per the customer requirement.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "CloneRequirements": true, "CopyAllSuites": true, "RelatedLinkComment": "Cloned from existing test plan googlecloud", "DestinationPlanName": "TestPlan 2", "DestinationPlanAreaPath": "GCPTesting New Project", "DestinationPlanIteration": "GCPTesting New Project", "DestinationPlanProject": "GCPTesting New Project", "SourceTestPlanId": 1, "CopyAncestorHierarchy": true } If the action is successful, the CloneTestPlan task's connectorOutputPayload response parameter will have a value similar to the following: [ { "CloneOperationId": null, "CloneOperationState": "queued", "sourcetestplan project id": "ea4270d3-d335-4ef1-b1af-37a7591880cf", "sourcetestplan project name": "GCPTesting New Project", "sourcetestplan project state": "unchanged", "sourcetestplan project visibility": "unchanged", "sourcetestplan project lastupdatetime": "0001-01-01T00:00:00", "sourcetestplan id": "1", "sourcetestplan name": "Test Plan 1", "destinationtestplan id": "15", "destinationtestplan project id": "ea4270d3-d335-4ef1-b1af-37a7591880cf", "destinationtestplan project name": "GCPTesting New Project", "destinationtestplan project state": "unchanged", "destinationtestplan project visibility": "unchanged", "destinationtestplan project lastupdatetime": "0001-01-01T00:00:00", "destinationtestplan updateddate": "2025-01-07T14:02:31.247Z", "destinationtestplan updatedby displayname": "Charlie Cruz", "destinationtestplan updatedby url": "https://spsprodcin1.vssps.visualstudio.com/A0f5fd5e8-7721-4842-b504-2a8ddb8efeb0/ apis/Identities/df102a0c-59d2-6d69-aecd-556086d6d8d6", "destinationtestplan updatedby links avatar href": "https://dev.azure.com/sunitavenkata2024/ apis/GraphProfile/MemberAvatars/msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan updatedby id": "df102a0c-59d2-6d69-aecd-556086d6d8d6", "destinationtestplan updatedby uniquename": "sunitavenkata2024@outlook.com", "destinationtestplan updatedby imageurl": "https://dev.azure.com/sunitavenkata2024/ apis/GraphProfile/MemberAvatars/msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan updatedby descriptor": "msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan rootsuite id": "16", "destinationtestplan rootsuite name": "TestPlan 2", "destinationtestplan links self href": "https://dev.azure.com/sunitavenkata2024/GCPTesting New Project/ apis/testplan/Plans/15", "destinationtestplan links clienturl href": "mtms://dev.azure.com:443/sunitavenkata2024/p:GCPTesting New Project/Testing/testplan/connect?id=15", "destinationtestplan links rootsuite href": "https://dev.azure.com/sunitavenkata2024/GCPTesting New Project/ apis/testplan/Plans/15/Suites/16", "destinationtestplan revision": "1", "destinationtestplan name": "TestPlan 2", "destinationtestplan areapath": "GCPTesting New Project", "destinationtestplan startdate": "2025-01-07T14:02:31.0878913Z", "destinationtestplan enddate": "2025-01-14T14:02:31.0878913Z", "destinationtestplan iteration": "GCPTesting New Project", "destinationtestplan owner displayname": "sunita m V", "destinationtestplan owner url": "https://spsprodcin1.vssps.visualstudio.com/A0f5fd5e8-7721-4842-b504-2a8ddb8efeb0/ apis/Identities/df102a0c-59d2-6d69-aecd-556086d6d8d6", "destinationtestplan owner links avatar href": "https://dev.azure.com/sunitavenkata2024/ apis/GraphProfile/MemberAvatars/msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan owner id": "df102a0c-59d2-6d69-aecd-556086d6d8d6", "destinationtestplan owner uniquename": "sunitavenkata2024@outlook.com", "destinationtestplan owner imageurl": "https://dev.azure.com/sunitavenkata2024/ apis/GraphProfile/MemberAvatars/msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan owner descriptor": "msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan state": "Active", "destinationtestplan testoutcomesettings syncoutcomeacrosssuites": "false", "cloneoptions relatedlinkcomment": "Cloned from existing test plan gcp", "cloneoptions copyallsuites": "true", "cloneoptions copyancestorhierarchy": "true", "cloneoptions clonerequirements": "true", "cloneoperationresponse state": "queued", "cloneoperationresponse links self href": "https://dev.azure.com/sunitavenkata2024/GCPTesting New Project/ apis/testplan/Plans/CloneOperation/0" } ] Example - Clone a test suite In the Configure connector task dialog, click Actions .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "PullRequestId": "23", "ProjectId": "64058663-6419-4b11-8ef0-2ebf985949bc", "RepositoryId": "e848b49e-704f-4df3-94ce-4f23176715b6" } If the action is successful, the GetPullRequestCommits task's connectorOutputPayload response parameter will have a value similar to the following: [ { "CommitId": "ebb720c5b93c52341cb86ccfb42258bb562a8406", "AuthorName": "dani.dana", "AuthorEmail": "baklavainthebalkans@gmail.com", "AuthoredDate": "2024-11-26 11:24:19.0", "CommitterName": "dani.dana", "CommitterEmail": "baklavainthebalkans@gmail.com", "CommittedDate": "2024-11-26 11:24:19.0", "Comment": "Updated sample.txt", "CommentTruncated": null, "Url": "https://dev.azure.com/charliecruz/64058663-6419-4b11-8ef0-2ebf985949bc/ apis/git/repositories/e848b49e-704f-4df3-94ce-4f23176715b6/commits/ebb720c5b93c52341cb86ccfb42258bb562a8406" }, { "CommitId": "353f74b48ada83111449b922f4660a338e058989", "AuthorName": "dani.dana", "AuthorEmail": "baklavainthebalkans@gmail.com", "AuthoredDate": "2024-11-26 11:23:01.0", "CommitterName": "dani.dana", "CommitterEmail": "baklavainthebalkans@gmail.com", "CommittedDate": "2024-11-26 11:23:01.0", "Comment": "Updated bcd", "CommentTruncated": null, "Url": "https://dev.azure.com/charliecruz/64058663-6419-4b11-8ef0-2ebf985949bc/ apis/git/repositories/e848b49e-704f-4df3-94ce-4f23176715b6/commits/353f74b48ada83111449b922f4660a338e058989" }, { "CommitId": "50a74dee46f8bcad4637d730994144f944c7d589", "AuthorName": "dani.dana", "AuthorEmail": "baklavainthebalkans@gmail.com", "AuthoredDate": "2024-11-26 11:21:59.0", "CommitterName": "dani.dana", "CommitterEmail": "baklavainthebalkans@gmail.com", "CommittedDate": "2024-11-26 11:21:59.0", "Comment": "Added bcd", "CommentTruncated": null, "Url": "https://dev.azure.com/charliecruz/64058663-6419-4b11-8ef0-2ebf985949bc/ apis/git/repositories/e848b49e-704f-4df3-94ce-4f23176715b6/commits/50a74dee46f8bcad4637d730994144f944c7d589" }, { "CommitId": "9813f562b0548144006f773314704db274c757c4", "AuthorName": "Alex amal", "AuthorEmail": "cloudysanfrancisco@gmail.com", "AuthoredDate": "2024-11-26 11:19:29.0", "CommitterName": "Alex amal", "CommitterEmail": "cloudysanfrancisco@gmail.com", "CommittedDate": "2024-11-26 11:19:29.0", "Comment": "hello", "CommentTruncated": null, "Url": "https://dev.azure.com/charliecruz/64058663-6419-4b11-8ef0-2ebf985949bc/ apis/git/repositories/e848b49e-704f-4df3-94ce-4f23176715b6/commits/9813f562b0548144006f773314704db274c757c4" } ] Example - Add a build tag In the Configure connector task dialog, click Actions .
- Field name Information model Project model Repository model Analytics model All models AzureAD connection Location europe-west1 europe-west1 europe-west1 europe-west1 asia-east1 europe-west1 Connector Azure DevOps Azure DevOps Azure DevOps Azure DevOps Azure DevOps Azure DevOps Connector version 1 1 1 1 1 1 Connection Name azuredevops-informationmodel azuredevops-projectmodel azuredevops-repositorymodel azuredevops-analyticsmodel devops azuredevops-oauth Enable Cloud Logging Yes Yes Yes Yes Yes Yes Log Level Debug Debug Debug Debug Debug Debug Service Account Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Azure Tenant Tenant Id Tenant Id Tenant Id Tenant Id Tenant Id Tenant Id Organization Organization Name Organization Name Organization Name Organization Name Organization Name Organization Name Schema Information Project Repository RepositoryId Analytics Project Catalog Devops Project ProjectId Project ProjectId Project ProjectId Project ProjectId Azure Dev Ops Edition AzureDevOps Online AzureDevOps Online AzureDevOps Online AzureDevOps Online AzureDevOps Online AzureDevOps Online Azure Dev Ops Service API 6.0 6.0 6.0 6.0 6.0 6.0 Include Custom Fields Yes Yes Yes Yes Yes Yes CustomizedDefaultCatalogName CustomizedDefaultCatalogName=Google CustomizedDefaultCatalogName=Google Minimum number of nodes 2 2 2 2 2 2 Maximum number of nodes 50 50 50 50 50 50 Authentication Yes Yes Yes Yes Yes Yes Basic Yes Yes Yes Yes Yes API Token Api Token provided by your app Api Token provided by your app Api Token provided by your app Api Token provided by your app Api Token provided by your app Secret version 1 1 1 1 1 1 AzureAD Yes Client ID Client Id Client Secret Value Client Secret Value Scopes user impersonation Authorization URL https://login.microsoftonline.com/c6f32d0e-6725-4007-81c2-951e853061a6/oauth2/authorize You can use the following connection properties to manage data fetched from Azure DevOps.

