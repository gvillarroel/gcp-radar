---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.577Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Allocated IP range selection for clones and replicas"
feature_slug: "allocated-ip-range-selection-for-clones-and-replicas"
latest_feature_date: "2022-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting"
keywords:
  - "allocated"
  - "ip"
  - "range"
  - "selection"
  - "clones"
  - "replicas"
  - "sql"
  - "lets"
---

# Allocated IP range selection for clones and replicas

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL lets you select an allocated private IP range for clones and replicas created from a primary instance that uses private IP.

## Extended Definition

Cloud SQL lets you select an allocated private IP range for clones and replicas created from a primary instance that uses private IP.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Using this flag when you create an instance before that project has been fully upgraded to the new network architecture can lead to IP address overconsumption or a failure to create instances if there aren't sufficient IP addresses remaining in the allocated IP range.
- Available only for the beta command ( gcloud beta sql instances create ). --no-assign-ip : Instance will only have a private IP address. --allocated-ip-range-name : If specified, sets a range name for which an IP range is allocated.
- Connectivity Private IP --network --no-assign-ip (optional) --allocated-ip-range-name (optional) --enable-google-private-path (optional) --network : Specifies the name of the VPC network you want to use for this instance.
- See allocated range size To resolve this issue, you can either expand the existing allocated IP range or allocate an additional IP range to the private service connection.

### Clone instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance)
- Source ID: `site-docs-reference-required-4`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- REST v1beta4 Clone the instance, optionally specifying the allocated IP range you want to use: Before using any of the request data, make the following replacements: project-id : the project ID source-instance-id : the source instance ID target-instance-id : the target instance ID allocated-ip-range-name : the name of an allocated IP range HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "destinationInstanceName": " target-instance-id ", "allocatedIpRange": " allocated-ip-range-name " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- REST v1 Clone the instance, optionally specifying the allocated IP range you want to use: Before using any of the request data, make the following replacements: project-id : the project ID source-instance-id : the source instance ID target-instance-id : the target instance ID allocated-ip-range-name : the name of an allocated IP range HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "destinationInstanceName": " target-instance-id ", "allocatedIpRange": " allocated-ip-range-name " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For example, google-managed-services-default . gcloud Clone the instance, optionally specifying the allocated IP range you want to use: gcloud sql instances clone SOURCE INSTANCE NAME TARGET INSTANCE NAME \ --allocated-ip-range-name ALLOCATED IP RANGE NAME The user or service account that's running the gcloud sql instances clone command must have the cloudsql.instances.clone permission.
- You're trying to use the Google Cloud console to clone an instance with a private IP address, but you didn't specify the allocated IP range that you want to use and the source instance isn't created with the specified range.

### Troubleshoot \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- You're trying to use the Google Cloud console to clone an instance with a private IP address, but you didn't specify the allocated IP range that you want to use and the source instance isn't created with the specified range.
- See allocated range size To resolve this issue, you can either expand the existing allocated IP range or allocate an additional IP range to the private service connection.
- There can be several possible scenarios: The size of the allocated IP range for the private service connection is smaller than /24.
- If you used the --allocated-ip-range-name flag while creating the Cloud SQL instance, you may only expand the specified IP range.

