---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.895Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Allocated IP range selection for clones and replicas"
feature_slug: "allocated-ip-range-selection-for-clones-and-replicas"
latest_feature_date: "2022-02-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/how-tos/performance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance"
keywords:
  - "allocated"
  - "ip"
  - "range"
  - "selection"
  - "for"
  - "clones"
  - "and"
  - "replicas"
---

# Allocated IP range selection for clones and replicas

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL lets you select an allocated private IP range for clones and replicas created from a primary instance that uses private IP.

## Extended Definition

Cloud SQL lets you select an allocated private IP range for clones and replicas created from a primary instance that uses private IP.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/how-tos/performance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- February 23, 2022 Cloud SQL for MySQL Feature If your primary instance uses a private IP address, you can now select an allocated IP range for clones and replicas created from the instance.
- Cloud SQL for PostgreSQL Feature If your primary instance uses a private IP address, you can now select an allocated IP range for clones and replicas created from the instance.
- Cloud SQL for SQL Server Feature If your primary instance uses a private IP address, you can now select an allocated IP range for clones and replicas created from the instance.
- This enables you to create instances and replicas in a non-RFC 1918 IP address range.

### Performance tips \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/how-tos/performance)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Here is an example of properly formed HTTP headers for enabling gzip compression: Accept - Encoding : gzip User - Agent : my program ( gzip ) Working with partial resources Another way to improve the performance of your API calls is by sending and receiving only the portion of the data that you're interested in.
- Home Documentation Databases Cloud SQL SQL Server Reference Send feedback Performance tips Stay organized with collections Save and categorize content based on your preferences.
- Compression using gzip An easy and convenient way to reduce the bandwidth needed for each request is to enable gzip compression.
- As shown below, it also uses the fields parameter to limit the data returned in the patch response: PATCH https://www.googleapis.com/demo/v1/324?fields=etag,title,comment,characteristics Authorization: Bearer your auth token Content-Type: application/json If-Match: " ETagString " { "etag" : " ETagString " "title" : "" , / Clear the value of the title by setting it to the empty string. / "comment" : null , / Delete the comment by replacing its value with null. / "characteristics" : { "length" : "short" , "level" : "10" , / Modify the level value. / "followers" : [ "Jo" , "Liz" ], / Replace the followers array to delete Will and add Liz. / "accuracy" : "high" / Add a new characteristic. / } , } The server responds with a 200 OK HTTP status code, and the partial representation of the updated resource: 200 OK { "etag" : " newETagString " "title" : "" , / Title is cleared; deleted comment field is missing. / "characteristics" : { "length" : "short" , "level" : "10" , / Value is updated. / "followers" : [ "Jo" "Liz" ], / New follower Liz is present; deleted Will is missing. / "accuracy" : "high" / New characteristic is present. / } } Constructing a patch request directly For some patch requests, you need to base them on the data you previously retrieved.

### Clone instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance)
- Source ID: `site-iam-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- REST v1beta4 Clone the instance, optionally specifying the allocated IP range you want to use: Before using any of the request data, make the following replacements: project-id : the project ID source-instance-id : the source instance ID target-instance-id : the target instance ID allocated-ip-range-name : the name of an allocated IP range HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "destinationInstanceName": " target-instance-id ", "allocatedIpRange": " allocated-ip-range-name " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- REST v1 Clone the instance, optionally specifying the allocated IP range you want to use: Before using any of the request data, make the following replacements: project-id : the project ID source-instance-id : the source instance ID target-instance-id : the target instance ID allocated-ip-range-name : the name of an allocated IP range HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "destinationInstanceName": " target-instance-id ", "allocatedIpRange": " allocated-ip-range-name " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For example, google-managed-services-default . gcloud Clone the instance, optionally specifying the allocated IP range you want to use: gcloud sql instances clone SOURCE INSTANCE NAME TARGET INSTANCE NAME \ --allocated-ip-range-name ALLOCATED IP RANGE NAME The user or service account that's running the gcloud sql instances clone command must have the cloudsql.instances.clone permission.
- Use gcloud to clone the instance and provide a value for the --allocated-ip-range-name parameter.

