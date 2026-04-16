---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.204Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "HTTP connector status check"
feature_slug: "http-connector-status-check"
latest_feature_date: "2024-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure"
keywords:
  - "http"
  - "connector"
  - "status"
  - "check"
  - "the"
  - "can"
  - "connection"
  - "by"
---

# HTTP connector status check

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The HTTP connector can check a connection's status by using an endpoint URL in the Status Check field.

## Extended Definition

The HTTP connector can check a connection's status by using an endpoint URL in the Status Check field.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure)

## Supporting Pages

### Couchbase \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optionally, in Task Input section of the Connectors task, you can filter your result set by specifying a filter clause .
- You can use the connection in an integration through the Connectors task.
- SSL - Certificate connection type Field Name Details Region us-central1 Connector Couchbase Connector Version 1 Connector Name Couchbase-basic-auth-conn Service Account NAME-compute@developer.gserviceaccount.com Verbosity Level 5 Connection node settings: Min/Max number of nodes 2/50 SSL Configuration Enable SSL True Trust Store Private Custom Trust Store A full PEM Certificate (-----BEGIN CERTIFICATE----- MIIChTCCAe4CAQAwDQYJKoZIhv......Qw== -----END CERTIFICATE-----) Secret version 1 Host Address xx.1HOST NAME.cloud.couchbase.com:18xxx Authentication User Password Username username Password password versions 1 vConnection Mode Cloud DNS Server 192.0.2.0 OAuth scheme Basic Analytics Couchbase connection type Field Name Details Region us-central1 Connector Couchbase Connector Version 1 Connector Name Couchbase-basic-auth-Analytics-conn Service Account NAME-compute@developer.gserviceaccount.com Analytics Port 18095 Couchbase Service Analytics Verbosity Level 5 Connection node settings: Min/Max number of nodes 2/50 Host Address xx.1HOST NAME.cloud.couchbase.com:18095 Authentication User Password Username username Password password versions 1 vConnection Mode Cloud DNS Server 192.0.2.0 OAuth scheme Basic Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { } If the action is successful, the ListIndices task's connectorOutputPayload response parameter will have a value similar to the following: [{ "id" : "3d8a78cd2e302ac2" , "datastore id" : "http://127.0.0.1:8091" , "namespace id" : "default" , "bucket id" : null , "scope id" : null , "keyspace id" : "CouchbaseTestBucket" , "index key" : "" , "condition" : null , "is primary" : "false" , "name" : "test" , "state" : "online" , "using" : "gsi" }, { "id" : "d6ce8c103b97a00d" , "datastore id" : "http://127.0.0.1:8091" , "namespace id" : "default" , "bucket id" : "CouchbaseTestBucket" , "scope id" : "TestScope" , "keyspace id" : "CouchBaseDatatypes" , "index key" : "" , "condition" : null , "is primary" : "true" , "name" : "#primary" , "state" : "online" , "using" : "gsi" }, { "id" : "58c25aef49dd32b3" , "datastore id" : "http://127.0.0.1:8091" , "namespace id" : "default" , "bucket id" : "CouchbaseTestBucket" , "scope id" : "TestScope" , "keyspace id" : "TestCollection" , "index key" : "" , "condition" : null , "is primary" : "false" , "name" : "SearchIndexTest 1" , "state" : "online" , "using" : "fts" }] Example - Manage indices This example deletes an index in the specified bucket.

### Azure DevOps \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Field name Information model Project model Repository model Analytics model All models AzureAD connection Location europe-west1 europe-west1 europe-west1 europe-west1 asia-east1 europe-west1 Connector Azure DevOps Azure DevOps Azure DevOps Azure DevOps Azure DevOps Azure DevOps Connector version 1 1 1 1 1 1 Connection Name azuredevops-informationmodel azuredevops-projectmodel azuredevops-repositorymodel azuredevops-analyticsmodel devops azuredevops-oauth Enable Cloud Logging Yes Yes Yes Yes Yes Yes Log Level Debug Debug Debug Debug Debug Debug Service Account Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Azure Tenant Tenant Id Tenant Id Tenant Id Tenant Id Tenant Id Tenant Id Organization Organization Name Organization Name Organization Name Organization Name Organization Name Organization Name Schema Information Project Repository RepositoryId Analytics Project Catalog Devops Project ProjectId Project ProjectId Project ProjectId Project ProjectId Azure Dev Ops Edition AzureDevOps Online AzureDevOps Online AzureDevOps Online AzureDevOps Online AzureDevOps Online AzureDevOps Online Azure Dev Ops Service API 6.0 6.0 6.0 6.0 6.0 6.0 Include Custom Fields Yes Yes Yes Yes Yes Yes CustomizedDefaultCatalogName CustomizedDefaultCatalogName=Google CustomizedDefaultCatalogName=Google Minimum number of nodes 2 2 2 2 2 2 Maximum number of nodes 50 50 50 50 50 50 Authentication Yes Yes Yes Yes Yes Yes Basic Yes Yes Yes Yes Yes API Token Api Token provided by your app Api Token provided by your app Api Token provided by your app Api Token provided by your app Api Token provided by your app Secret version 1 1 1 1 1 1 AzureAD Yes Client ID Client Id Client Secret Value Client Secret Value Scopes user impersonation Authorization URL https://login.microsoftonline.com/c6f32d0e-6725-4007-81c2-951e853061a6/oauth2/authorize You can use the following connection properties to manage data fetched from Azure DevOps.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "CloneRequirements": true, "CopyAllSuites": true, "RelatedLinkComment": "Cloned from existing test plan googlecloud", "DestinationPlanName": "TestPlan 2", "DestinationPlanAreaPath": "GCPTesting New Project", "DestinationPlanIteration": "GCPTesting New Project", "DestinationPlanProject": "GCPTesting New Project", "SourceTestPlanId": 1, "CopyAncestorHierarchy": true } If the action is successful, the CloneTestPlan task's connectorOutputPayload response parameter will have a value similar to the following: [ { "CloneOperationId": null, "CloneOperationState": "queued", "sourcetestplan project id": "ea4270d3-d335-4ef1-b1af-37a7591880cf", "sourcetestplan project name": "GCPTesting New Project", "sourcetestplan project state": "unchanged", "sourcetestplan project visibility": "unchanged", "sourcetestplan project lastupdatetime": "0001-01-01T00:00:00", "sourcetestplan id": "1", "sourcetestplan name": "Test Plan 1", "destinationtestplan id": "15", "destinationtestplan project id": "ea4270d3-d335-4ef1-b1af-37a7591880cf", "destinationtestplan project name": "GCPTesting New Project", "destinationtestplan project state": "unchanged", "destinationtestplan project visibility": "unchanged", "destinationtestplan project lastupdatetime": "0001-01-01T00:00:00", "destinationtestplan updateddate": "2025-01-07T14:02:31.247Z", "destinationtestplan updatedby displayname": "Charlie Cruz", "destinationtestplan updatedby url": "https://spsprodcin1.vssps.visualstudio.com/A0f5fd5e8-7721-4842-b504-2a8ddb8efeb0/ apis/Identities/df102a0c-59d2-6d69-aecd-556086d6d8d6", "destinationtestplan updatedby links avatar href": "https://dev.azure.com/sunitavenkata2024/ apis/GraphProfile/MemberAvatars/msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan updatedby id": "df102a0c-59d2-6d69-aecd-556086d6d8d6", "destinationtestplan updatedby uniquename": "sunitavenkata2024@outlook.com", "destinationtestplan updatedby imageurl": "https://dev.azure.com/sunitavenkata2024/ apis/GraphProfile/MemberAvatars/msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan updatedby descriptor": "msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan rootsuite id": "16", "destinationtestplan rootsuite name": "TestPlan 2", "destinationtestplan links self href": "https://dev.azure.com/sunitavenkata2024/GCPTesting New Project/ apis/testplan/Plans/15", "destinationtestplan links clienturl href": "mtms://dev.azure.com:443/sunitavenkata2024/p:GCPTesting New Project/Testing/testplan/connect?id=15", "destinationtestplan links rootsuite href": "https://dev.azure.com/sunitavenkata2024/GCPTesting New Project/ apis/testplan/Plans/15/Suites/16", "destinationtestplan revision": "1", "destinationtestplan name": "TestPlan 2", "destinationtestplan areapath": "GCPTesting New Project", "destinationtestplan startdate": "2025-01-07T14:02:31.0878913Z", "destinationtestplan enddate": "2025-01-14T14:02:31.0878913Z", "destinationtestplan iteration": "GCPTesting New Project", "destinationtestplan owner displayname": "sunita m V", "destinationtestplan owner url": "https://spsprodcin1.vssps.visualstudio.com/A0f5fd5e8-7721-4842-b504-2a8ddb8efeb0/ apis/Identities/df102a0c-59d2-6d69-aecd-556086d6d8d6", "destinationtestplan owner links avatar href": "https://dev.azure.com/sunitavenkata2024/ apis/GraphProfile/MemberAvatars/msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan owner id": "df102a0c-59d2-6d69-aecd-556086d6d8d6", "destinationtestplan owner uniquename": "sunitavenkata2024@outlook.com", "destinationtestplan owner imageurl": "https://dev.azure.com/sunitavenkata2024/ apis/GraphProfile/MemberAvatars/msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan owner descriptor": "msa.ZGYxMDJhMGMtNTlkMi03ZDY5LWFlY2QtNTU2MDg2ZDZkOGQ2", "destinationtestplan state": "Active", "destinationtestplan testoutcomesettings syncoutcomeacrosssuites": "false", "cloneoptions relatedlinkcomment": "Cloned from existing test plan gcp", "cloneoptions copyallsuites": "true", "cloneoptions copyancestorhierarchy": "true", "cloneoptions clonerequirements": "true", "cloneoperationresponse state": "queued", "cloneoperationresponse links self href": "https://dev.azure.com/sunitavenkata2024/GCPTesting New Project/ apis/testplan/Plans/CloneOperation/0" } ] Example - Clone a test suite In the Configure connector task dialog, click Actions .
- You can use the connection in an integration through the Connectors task.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "PullRequestId": "23", "ProjectId": "64058663-6419-4b11-8ef0-2ebf985949bc", "RepositoryId": "e848b49e-704f-4df3-94ce-4f23176715b6" } If the action is successful, the GetPullRequestCommits task's connectorOutputPayload response parameter will have a value similar to the following: [ { "CommitId": "ebb720c5b93c52341cb86ccfb42258bb562a8406", "AuthorName": "dani.dana", "AuthorEmail": "baklavainthebalkans@gmail.com", "AuthoredDate": "2024-11-26 11:24:19.0", "CommitterName": "dani.dana", "CommitterEmail": "baklavainthebalkans@gmail.com", "CommittedDate": "2024-11-26 11:24:19.0", "Comment": "Updated sample.txt", "CommentTruncated": null, "Url": "https://dev.azure.com/charliecruz/64058663-6419-4b11-8ef0-2ebf985949bc/ apis/git/repositories/e848b49e-704f-4df3-94ce-4f23176715b6/commits/ebb720c5b93c52341cb86ccfb42258bb562a8406" }, { "CommitId": "353f74b48ada83111449b922f4660a338e058989", "AuthorName": "dani.dana", "AuthorEmail": "baklavainthebalkans@gmail.com", "AuthoredDate": "2024-11-26 11:23:01.0", "CommitterName": "dani.dana", "CommitterEmail": "baklavainthebalkans@gmail.com", "CommittedDate": "2024-11-26 11:23:01.0", "Comment": "Updated bcd", "CommentTruncated": null, "Url": "https://dev.azure.com/charliecruz/64058663-6419-4b11-8ef0-2ebf985949bc/ apis/git/repositories/e848b49e-704f-4df3-94ce-4f23176715b6/commits/353f74b48ada83111449b922f4660a338e058989" }, { "CommitId": "50a74dee46f8bcad4637d730994144f944c7d589", "AuthorName": "dani.dana", "AuthorEmail": "baklavainthebalkans@gmail.com", "AuthoredDate": "2024-11-26 11:21:59.0", "CommitterName": "dani.dana", "CommitterEmail": "baklavainthebalkans@gmail.com", "CommittedDate": "2024-11-26 11:21:59.0", "Comment": "Added bcd", "CommentTruncated": null, "Url": "https://dev.azure.com/charliecruz/64058663-6419-4b11-8ef0-2ebf985949bc/ apis/git/repositories/e848b49e-704f-4df3-94ce-4f23176715b6/commits/50a74dee46f8bcad4637d730994144f944c7d589" }, { "CommitId": "9813f562b0548144006f773314704db274c757c4", "AuthorName": "Alex amal", "AuthorEmail": "cloudysanfrancisco@gmail.com", "AuthoredDate": "2024-11-26 11:19:29.0", "CommitterName": "Alex amal", "CommitterEmail": "cloudysanfrancisco@gmail.com", "CommittedDate": "2024-11-26 11:19:29.0", "Comment": "hello", "CommentTruncated": null, "Url": "https://dev.azure.com/charliecruz/64058663-6419-4b11-8ef0-2ebf985949bc/ apis/git/repositories/e848b49e-704f-4df3-94ce-4f23176715b6/commits/9813f562b0548144006f773314704db274c757c4" } ] Example - Add a build tag In the Configure connector task dialog, click Actions .

### Confluence \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description proxy enabled BOOLEAN False Select this checkbox to configure a proxy server for the connection. proxy auth scheme ENUM False The authentication type to use to authenticate to the ProxyServer proxy.
- Note: You can customize the connection node values only if you are a Pay-as-you-go customer. (Optional) In the Advanced settings section, select the Use proxy checkbox to configure a proxy server for the connection and configure the following values: Proxy Auth Scheme : Select the authentication type to authenticate with the proxy server.
- You can use the connection in an integration through the Connectors task.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "SpaceId" : "12345" , "Status" : "Current" , "Title" : "FROM XYZ" , "Storage" : "XYZ1234" } Example - Upda te Pages This example upda tes a page record i n t he Pages e nt i t y.

### Acumatica \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure)
- Source ID: `site-docs-root-2`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST connection type Field name Details Location europe-west1 Connector Acumatica Connector version 1 Connection Name acumatica Enable Cloud Logging False Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Verbosity Level 5 Minimum number of nodes 2 Maximum number of nodes 50 Host https://examplepetstore.com Username USERNAME Password PASSWORD Secret version 1 OData connection type Field name Details Location europe-west1 Connector Acumatica Connector version 1 Connection Name acumatica Enable Cloud Logging False Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Company Example Organization Endpoint Version 22.200.001 Inquiry Table PX Objects AP APInvoice Schema OData Verbosity Level 5 Minimum number of nodes 2 Maximum number of nodes 50 Host https://examplepetstore.com Username USERNAME Password PASSWORD Secret version 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "ActionName" : "PrintSalesOrder" , "TopLevelEntity" : "SalesOrder" "EntityRecord" : "{ " Type ": { " value ": " IN " }, " OrderNbr ": { " value ": " 000007 " }, " Cus t omerID ": { " value ": " CANDYY " }, " Loca t io n ID ": { " value ": " MAIN " }}}" If the action is successful, the ExecuteAction task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Status" : "Success" , "AffectedRecords" : "1" }] Entity operation examples This section shows how to perform some of the entity operations in this connector.
- Optionally, in Task Input section of the Connectors task, you can filter your result set by specifying a filter clause .
- You can use the connection in an integration through the Connectors task.

