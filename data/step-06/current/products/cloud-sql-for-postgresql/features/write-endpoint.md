---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.291Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Write endpoint"
feature_slug: "write-endpoint"
latest_feature_date: "2025-07-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip"
keywords:
  - "write"
  - "endpoint"
  - "provides"
  - "global"
  - "dns"
  - "name"
  - "that"
  - "resolves"
---

# Write endpoint

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

A write endpoint provides a global DNS name that resolves to the current primary instance to simplify failover and switchover handling; The write endpoint provides a global DNS name that resolves to the current primary private IP instance to reduce application changes during failover or switchover.

## Extended Definition

A write endpoint provides a global DNS name that resolves to the current primary instance to simplify failover and switchover handling; The write endpoint provides a global DNS name that resolves to the current primary private IP instance to reduce application changes during failover or switchover.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- This endpoint is a global domain name service (DNS) name and resolves to the IP address of the current primary Cloud SQL instance that's enabled with private services access.
- This endpoint is a global domain name service (DNS) name and resolves to the IP address of the current primary Cloud SQL instance that's enabled with private services access.
- This endpoint is a global domain name service (DNS) name.
- This endpoint is a global domain name service (DNS) name.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- This endpoint is a global domain name service (DNS) name and resolves to the IP address of the current primary Cloud SQL instance that's enabled with private services access.
- This endpoint is a global domain name service (DNS) name.
- These filters are space-efficient data structures that you can use to test whether an element is a member of a set. insert username (version 1.0): provides functions for storing the current user's name into a text field.
- This name resolves to the IP address of the current primary Cloud SQL instance that's enabled with private services access.

### Configure private IP \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- A write endpoint is a global domain name service (DNS) name that resolves to the IP address of the current primary instance automatically.
- After you assign a range to an instance, you can't modify the range. gcloud beta sql instances create INSTANCE ID \ --project = PROJECT ID \ --network = projects/ NETWORK PROJECT ID /global/networks/ VPC NETWORK NAME \ --no-assign-ip \ --allocated-ip-range-name = RANGE NAME \ --enable-google-private-path \ --database-version = DATABASE VERSION \ --cpu = NUMBER OF CPU \ --memory = MEMORY IN GB \ --region = REGION NAME \ --enforce-new-sql-network-architecture Terraform To configure private IP for a new instance, use the following Terraform resources: google compute network google compute global address google service networking connection google sql database instance resource "google compute network" "peering network" { name = "private-network" auto create subnetworks = "false" } resource "google compute global address" "private ip address" { name = "private-ip-address" purpose = "VPC PEERING" address type = "INTERNAL" prefix length = 16 network = google compute network.peering network.id } resource "google service networking connection" "default" { network = google compute network.peering network.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip address.name] } resource "google sql database instance" "default" { name = "private-ip-sql-instance" region = "us-central1" database version = "POSTGRES 14" depends on = [google service networking connection.default] settings { tier = "db-custom-2-7680" ip configuration { ipv4 enabled = "false" private network = google compute network.peering network.id } } } resource "google compute network peering routes config" "peering routes" { peering = google service networking connection.default.peering network = google compute network.peering network.name import custom routes = true export custom routes = true } [START cloud sql postgres instance private ip dns] Uncomment this block after adding a valid DNS suffix resource "google service networking peered dns domain" "default" { name = "example-com" network = google compute network.peering network.id dns suffix = "example.com." service = "servicenetworking.googleapis.com" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": "region", "databaseVersion": "database-version", "settings": { "tier": "machine-type", "ipConfiguration": { "ipv4Enabled": false, "privateNetwork": "projects/ PROJECT ID /global/networks/ VPC NETWORK NAME ", "allocatedIpRange": " RANGE NAME " "authorizedNetworks": [ AUTHORIZED NETWORKS ], "enablePrivatePathForGoogleCloudServices": true } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": "region", "databaseVersion": "database-version", "settings": { "tier": "machine-type", "ipConfiguration": { "ipv4Enabled": false, "privateNetwork": "projects/ PROJECT ID /global/networks/ VPC NETWORK NAME ", "allocatedIpRange": " RANGE NAME " "authorizedNetworks": [ AUTHORIZED NETWORKS ], "enablePrivatePathForGoogleCloudServices": true } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

