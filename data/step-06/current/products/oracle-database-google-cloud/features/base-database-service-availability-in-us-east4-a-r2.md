---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:04.988Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "Base Database Service availability in us-east4-a-r2"
feature_slug: "base-database-service-availability-in-us-east4-a-r2"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/create"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/delete"
keywords:
  - "base"
  - "database"
  - "availability"
  - "in"
  - "us"
  - "east4"
  - "r2"
  - "is"
---

# Base Database Service availability in us-east4-a-r2

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Base Database Service is available in the us-east4-a-r2 location.

## Extended Definition

Base Database Service is available in the us-east4-a-r2 location.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/create](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/create)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/delete](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/delete)

## Supporting Pages

### "Method: projects.locations.autonomousDatabaseBackups.list \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabaseBackups/list)
- Source ID: `site-api-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "autonomousDatabaseBackups" : [ { object ( AutonomousDatabaseBackup ) } ] , "nextPageToken" : string } Fields autonomousDatabaseBackups[] object ( AutonomousDatabaseBackup ) The list of Autonomous Database Backups. nextPageToken string A token identifying a page of results the server should return.
- IAM Permissions Requires the following IAM permission on the parent resource: oracledatabase.autonomousDatabaseBackups.list For more information, see the IAM documentation .
- HTTP request GET https://oracledatabase.googleapis.com/v1/{parent=projects/ /locations/ }/autonomousDatabaseBackups The URL uses gRPC Transcoding syntax.
- Only the autonomousDatabaseId field is supported in the following format: autonomousDatabaseId="{autonomousDatabaseId}" .

### "Method: projects.locations.autonomousDatabases.list \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list)
- Source ID: `site-api-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "autonomousDatabases" : [ { object ( AutonomousDatabase ) } ] , "nextPageToken" : string } Fields autonomousDatabases[] object ( AutonomousDatabase ) The list of Autonomous Databases. nextPageToken string A token identifying a page of results the server should return.
- HTTP request Path parameters Query parameters Request body Response body JSON representation Authorization scopes IAM Permissions Lists the Autonomous Databases in a given project and location.
- IAM Permissions Requires the following IAM permission on the parent resource: oracledatabase.autonomousDatabases.list For more information, see the IAM documentation .
- HTTP request GET https://oracledatabase.googleapis.com/v1/{parent=projects/ /locations/ }/autonomousDatabases The URL uses gRPC Transcoding syntax.

### "Method: projects.locations.autonomousDatabases.create \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/create](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/create)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP request Path parameters Query parameters Request body Response body Authorization scopes IAM Permissions Creates a new Autonomous Database in a given project and location.
- IAM Permissions Requires the following IAM permission on the parent resource: oracledatabase.autonomousDatabases.create For more information, see the IAM documentation .
- HTTP request POST https://oracledatabase.googleapis.com/v1/{parent=projects/ /locations/ }/autonomousDatabases The URL uses gRPC Transcoding syntax.
- Request body The request body contains an instance of AutonomousDatabase .

### "Method: projects.locations.autonomousDatabases.delete \_|\_ Oracle Database\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/delete](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/delete)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IAM Permissions Requires the following IAM permission on the name resource: oracledatabase.autonomousDatabases.delete For more information, see the IAM documentation .
- HTTP request DELETE https://oracledatabase.googleapis.com/v1/{name=projects/ /locations/ /autonomousDatabases/ } The URL uses gRPC Transcoding syntax.
- HTTP request Path parameters Query parameters Request body Response body Authorization scopes IAM Permissions Deletes a single Autonomous Database.
- The name of the resource in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomousDatabase}.

