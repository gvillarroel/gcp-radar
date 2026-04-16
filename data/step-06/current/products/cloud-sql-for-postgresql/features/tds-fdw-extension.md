---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.756Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "tds_fdw extension"
feature_slug: "tds-fdw-extension"
latest_feature_date: "2025-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access"
keywords:
  - "external"
  - "extension"
  - "access"
  - "lets"
---

# tds_fdw extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The tds_fdw PostgreSQL extension lets Cloud SQL access external databases that use the Tabular Data Stream protocol, such as SQL Server or Sybase.

## Extended Definition

The tds_fdw PostgreSQL extension lets Cloud SQL access external databases that use the Tabular Data Stream protocol, such as SQL Server or Sybase.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- For Private IP-only instances, enabling Data API access lets authorized users connect and execute SQL statements from the public internet.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "enableGoogleMlIntegration": " true " " false " "databaseFlags": [ { "name": "cloudsql.enable google ml integration", "value": " on " " off " } ] "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", "passwordChangeInterval": " PASSWORD CHANGE INTERVAL " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /addresses/ ADDRESS NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "compute#address", "id": " ADDRESS ID ", "creationTimestamp": "2024-05-09T11:20:50.114-07:00", "name": " ADDRESS NAME ", "description": "This is the name of the internal IP address.", "address": " IP ADDRESS ", "status": "RESERVED", "region": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME ", "selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /addresses/ ADDRESS NAME ", "networkTier": "PREMIUM", "labelFingerprint": " LABEL FINGERPRINT ID ", "addressType": "EXTERNAL" } The internal IP address is the value that's associated with the address field.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /addresses/ ADDRESS NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "compute#address", "id": " ADDRESS ID ", "creationTimestamp": "2024-05-09T11:20:50.114-07:00", "name": " ADDRESS NAME ", "description": "This is the name of the internal IP address.", "address": " IP ADDRESS ", "status": "RESERVED", "region": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME ", "selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /addresses/ ADDRESS NAME ", "networkTier": "PREMIUM", "labelFingerprint": " LABEL FINGERPRINT ID ", "addressType": "EXTERNAL" } In the response, verify that a RESERVED status appears for the IP address.
- The following flags are invalidated or impacted: --no-assign-ip: use this flag because instances with Private Service Connect enabled aren't supported to use other connectivity types such as external IP connections --authorized-networks: you can't use this flag to add authorized networks --network: you can't use this flag because it's associated with private services access --allocated-ip-range-name: you can't use this flag because allowed IP range names aren't supported You can't configure an instance that has Private Service Connect enabled to use private services access or external IP connections.
- Use the following sample to create an IPv4 Private Service Connect endpoint. resource "google compute address" "default" { name = "psc-compute-address" region = "us-central1" address type = "INTERNAL" subnetwork = "default" # Replace value with the name of the subnet here. address = "10.128.0.42" # Replace value with the IP address to reserve. } data "google sql database instance" "default" { name = resource.google sql database instance.default.name } resource "google compute forwarding rule" "default" { name = "psc-forwarding-rule-${google sql database instance.default.name}" region = "us-central1" network = "default" ip address = google compute address.default.self link load balancing scheme = "" target = data.google sql database instance.default.psc service attachment link allow psc global access = true } Use the following sample to create an IPv6 Private Service Connect endpoint. resource "google compute network" "ipv6 default" { name = "net-ipv6" auto create subnetworks = false enable ula internal ipv6 = true } resource "google compute subnetwork" "ipv6 default" { name = "subnet-internal-ipv6" ip cidr range = "10.0.0.0/16" region = "us-central1" stack type = "IPV4 IPV6" ipv6 access type = "INTERNAL" network = google compute network.ipv6 default.id } resource "google compute address" "ipv6 default" { name = "psc-compute-ipv6-address-${google sql database instance.default.name}" region = "us-central1" address type = "INTERNAL" subnetwork = google compute subnetwork.ipv6 default.name ip version = "IPV6" } resource "google compute forwarding rule" "ipv6 ilb example" { name = "ipv6-psc-forwarding-rule-${google sql database instance.default.name}" region = "us-central1" load balancing scheme = "" target = data.google sql database instance.default.psc service attachment link network = google compute network.ipv6 default.name subnetwork = google compute subnetwork.ipv6 default.name ip address = google compute address.ipv6 default.id allow psc global access = true } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### "Configure private services access \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access)
- Source ID: `site-iam-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VM instances don't need Internet access or external IP addresses to reach services that are available through private services access .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage a private services access connection: compute.addresses.create compute.addresses.list compute.globalAddresses.create compute.globalAddresses.createInternal compute.globalAddresses.list compute.networks.list compute.networks.use servicenetworking.services.addPeering serviceusage.services.list You might also be able to get these permissions with custom roles or other predefined roles .
- If you see an error about either the compute.globalAddresses.list permission or the compute.projects.get permission for the project, run this gcloud command: gcloud projects add-iam-policy-binding HOST PROJECT NAME \ --member = serviceAccount:service- HOST PROJECT NUMBER @service-networking.iam.gserviceaccount.com \ --role = roles/servicenetworking.serviceAgent Change the private service access configuration You can change the allocated address range of a private service connection without modifying any existing Cloud SQL instances.
- Move the Cloud SQL instance to the temporary VPC network. gcloud beta sql instances patch INSTANCE ID \ --project = PROJECT ID \ --network = projects/ PROJECT ID /global/networks/ TEMPORARY VPC NETWORK NAME \ --no-assign-ip Change the private service access configuration in the original network to add a new allocated range or delete existing ones.

