---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.772Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "autoinc extension"
feature_slug: "autoinc-extension"
latest_feature_date: "2024-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
keywords:
  - "increment"
  - "autoinc"
  - "integer"
  - "functions"
  - "trigger"
  - "automatically"
  - "provides"
  - "extension"
---

# autoinc extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The autoinc extension provides trigger functions that automatically increment integer fields from a sequence.

## Extended Definition

The autoinc extension provides trigger functions that automatically increment integer fields from a sequence.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)

## Supporting Pages

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the DNS zone ZONE NAME : the name of the zone DESCRIPTION : a description of the zone (for example, a DNS zone for the Cloud SQL instance) DNS NAME : the name of the DNS suffix for the zone, such as REGION NAME .sql.goog. (where REGION NAME is the region name for the zone) NETWORK NAME : the name of the VPC network HTTP method and URL: POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones Request JSON body: { "name": " ZONE NAME ", "description": " DESCRIPTION ", "dnsName": " DNS NAME ", "visibility": "private", "privateVisibilityConfig": { "kind": "dns#managedZonePrivateVisibilityConfig", "networks": [ { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/ NETWORK NAME " } ] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The following is a sample response: NAME REGION IP ADDRESS TARGET myInstance us-central1 10.10.10.10 us-central1/serviceAttachments/a-123456789e0a-psc-service-attachment-abc123d4e5f67gh8 REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the endpoint REGION NAME : the region name for the endpoint SERVICE ATTACHMENT PROJECT ID : the ID or project number of the Google Cloud project that contains the service attachment SERVICE ATTACHMENT NAME : the name of the service attachment for the Cloud SQL instance HTTP method and URL: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules?target="https://www.googleapis.com/compute/v1/projects/ SERVICE ATTACHMENT PROJECT ID /regions/ REGION NAME /serviceAttachments/ SERVICE ATTACHMENT NAME " To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Check the endpoint's status. gcloud To check the status, use the gcloud compute forwarding-rules describe command. gcloud compute forwarding-rules describe ENDPOINT NAME \ --project = PROJECT ID \ --region = REGION NAME \ grep pscConnectionStatus Make the following replacements: ENDPOINT NAME : the name of the endpoint PROJECT ID : the ID or project number of the Google Cloud project that contains the endpoint REGION NAME : the region name for the endpoint REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the Private Service Connect endpoint REGION NAME : the name of the region ENDPOINT NAME : the name of the endpoint HTTP method and URL: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies?serviceConnectionPolicyId= POLICY NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkconnectivity.v1.OperationMetadata", "createTime": "2023-08-15T16:59:29.236110917Z", "target": "projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies/ POLICY NAME ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a Cloud SQL instance You can create an instance with Private Service Connect enabled for the instance and configure the instance to create endpoints automatically by using gcloud CLI or the API.

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Check the endpoint's status. gcloud To check the status, use the gcloud compute forwarding-rules describe command. gcloud compute forwarding-rules describe ENDPOINT NAME \ --project = PROJECT ID \ --region = REGION NAME \ grep pscConnectionStatus Make the following replacements: ENDPOINT NAME : the name of the endpoint PROJECT ID : the ID or project number of the Google Cloud project that contains the endpoint REGION NAME : the region name for the endpoint REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the Private Service Connect endpoint REGION NAME : the name of the region ENDPOINT NAME : the name of the endpoint HTTP method and URL: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- You could build your own automated export system using Google Cloud products such as Cloud Scheduler, Pub/Sub, and Cloud Run functions, similar to this article on automating backups .
- Network attachments need to be configured to either accept all connections automatically, or configured manually with a list of accepted connections.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Specify additional properties here. ... config , }); }; C# To see this snippet in the context of a web application, view the README on GitHub . using Npgsql ; using System ; namespace CloudSql { public class PostgreSqlUnix { public static NpgsqlConnectionStringBuilder NewPostgreSqlUnixSocketConnectionString () { // Equivalent connection string: // "Server=<INSTANCE UNIX SOCKET>;Uid=<DB USER>;Pwd=<DB PASS>;Database=<DB NAME>" var connectionString = new NpgsqlConnectionStringBuilder () { // The Cloud SQL proxy provides encryption between the proxy and instance.
- HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "connectorEnforcement": "REQUIRED" } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "connectorEnforcement": "REQUIRED" } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Similarly, if the instance has read replicas, then you can't enable connector enforcement for the instance. gcloud The following command enforces the use of Cloud SQL connectors. gcloud sql instances patch INSTANCE NAME \ --connector-enforcement REQUIRED To disable the enforcement, use the following line of code: --connector-enforcement NOT REQUIRED The update doesn't trigger a restart.

