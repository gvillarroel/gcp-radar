---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.994Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Private IP connectivity"
feature_slug: "private-ip-connectivity"
latest_feature_date: "2018-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "private"
  - "ip"
  - "connectivity"
  - "sql"
  - "provides"
  - "generally"
  - "available"
  - "beta"
---

# Private IP connectivity

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL provides generally available Private IP connectivity; Cloud SQL provides beta support for Private IP connectivity using private services access.

## Extended Definition

Cloud SQL provides generally available Private IP connectivity; Cloud SQL provides beta support for Private IP connectivity using private services access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### Configure private IP \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)
- Source ID: `site-docs-reference-3`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After you assign a range to an instance, you can't modify the range. gcloud beta sql instances create INSTANCE ID \ --project = PROJECT ID \ --network = projects/ NETWORK PROJECT ID /global/networks/ VPC NETWORK NAME \ --no-assign-ip \ --allocated-ip-range-name = RANGE NAME \ --enable-google-private-path \ --enforce-new-sql-network-architecture Terraform To configure private IP for a new instance, use the following Terraform resources: google compute network google compute global address google service networking connection google sql database instance resource "google compute network" "peering network" { name = "private-network" auto create subnetworks = "false" } resource "google compute global address" "private ip address" { name = "private-ip-address" purpose = "VPC PEERING" address type = "INTERNAL" prefix length = 16 network = google compute network.peering network.id } resource "google service networking connection" "default" { network = google compute network.peering network.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip address.name] } resource "google sql database instance" "instance" { name = "private-ip-sql-instance" region = "us-central1" database version = "MYSQL 8 0" depends on = [google service networking connection.default] settings { tier = "db-f1-micro" ip configuration { ipv4 enabled = "false" private network = google compute network.peering network.id } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } resource "google compute network peering routes config" "peering routes" { peering = google service networking connection.default.peering network = google compute network.peering network.name import custom routes = true export custom routes = true } Uncomment this block after adding a valid DNS suffix resource "google service networking peered dns domain" "default" { name = "example-com" network = google compute network.peering network.name dns suffix = "example.com." service = "servicenetworking.googleapis.com" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Create a new instance with a private IP address: Before using any of the request data, make the following replacements: PROJECT ID: The project ID INSTANCE ID: The instance ID VPC NETWORK NAME: Specify the name of the Virtual Private Cloud (VPC) network that you want to use for this instance.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Connect to an instance using its Private IP You use private services access to connect to Cloud SQL instances from Compute Engine or Google Kubernetes Engine instances in the same VPC network (defined here as internal sources) or from outside of that network (an external source).
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Create a new instance with a private IP address: Before using any of the request data, make the following replacements: PROJECT ID: The project ID INSTANCE ID: The instance ID VPC NETWORK NAME: Specify the name of the Virtual Private Cloud (VPC) network that you want to use for this instance.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": USER , "insertTime": "2025-05-13T20:44:23.064Z", "operationType": "UPDATE", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID "," } Test connectivity To test inbound connectivity to a Cloud SQL instance with Private Service Connect enabled, set the IP address of the Private Service Connect endpoint to be the destination IP address. gcloud To create a connectivity test for a Cloud SQL instance with Private Service Connect enabled, use the gcloud network-management connectivity-tests create command: gcloud network-management connectivity-tests create CONNECTIVITY TEST NAME \ --source-instance = SOURCE INSTANCE \ --destination-cloud-sql-instance = DESTINATION CLOUD SQL INSTANCE \ --destination-network = DESTINATION NETWORK \ --destination-port = DESTINATION PORT \ --protocol = tcp Make the following replacements: CONNECTIVITY TEST NAME : the name of the connectivity test.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkmanagement.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/connectivityTests?testId= CONNECTIVITY TEST NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/global/operations/operation- OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkmanagement.v1.OperationMetadata", "createTime": "2024-05-23T16:43:49.313981473Z", "target": "projects/ PROJECT ID /locations/global/connectivityTests/ CONNECTIVITY TEST NAME ", "verb": "create", "cancelRequested": false, "apiVersion": "v1" }, "done": false } Note: In addition to testing connectivity, you can restrict connectivity to Private Service Connect endpoints from service consumers in a VPC network.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": USER , "insertTime": "2025-05-13T20:44:23.064Z", "operationType": "UPDATE", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID "," } For troubleshooting information related to Private Service Connect outbound connectivity, see Private Service Connect troubleshooting .
- You can expect this operation to take about 8 minutes to complete with an approximate downtime of 3 minutes. gcloud To enable outbound connectivity, run the following command: gcloud beta sql instances patch INSTANCE NAME \ --psc-network-attachment-uri= NETWORK ATTACHMENT URI \ --project= PROJECT ID Replace the following: INSTANCE NAME : the name of the Private Service Connect-enabled Cloud SQL instance that you want to set up for outbound connectivity.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Available only for the beta command ( gcloud beta sql instances create ). --no-assign-ip : Instance will only have a private IP address. --allocated-ip-range-name : If specified, sets a range name for which an IP range is allocated.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "dataCacheConfig" { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Available only for the beta command ( gcloud beta sql instances create ).
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.

