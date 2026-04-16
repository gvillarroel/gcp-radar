---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.787Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Non-RFC 1918 IP address support"
feature_slug: "non-rfc-1918-ip-address-support"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/debugging-connectivity"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip"
  - "https://docs.cloud.google.com/sql/docs/postgres/authorize-networks"
keywords:
  - "1918"
  - "address"
  - "ranges"
  - "supports"
---

# Non-RFC 1918 IP address support

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports non-RFC 1918 IP address ranges for instance creation, replicas, and client connectivity.

## Extended Definition

Cloud SQL supports non-RFC 1918 IP address ranges for instance creation, replicas, and client connectivity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- [https://docs.cloud.google.com/sql/docs/postgres/authorize-networks](https://docs.cloud.google.com/sql/docs/postgres/authorize-networks)

## Supporting Pages

### Debugging connection issues \_|\_ Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The limit flag is an optional parameter that indicates the maximum number of entries to return. gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/mysql-general.log" \ --limit = 10 gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/postgres.log" \ --limit = 10 Private IP addresses Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- Non-RFC 1918 address ranges must be configured in Cloud SQL as authorized networks .
- Non-RFC 1918 address ranges must be configured as authorized networks .

### Configure private IP \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Specifically, these are: 10.0.0.0/8 172.16.0.0/12 192.168.0.0/16 Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- To connect from a non-RFC 1918 IP address, you must set per-instance IP authorization to allow traffic from non-RFC 1918 IP address ranges.
- Note: You must configure all the non-RFC 1918 IP address ranges as authorized networks of the Cloud SQL for PostgreSQL instances.
- After you assign a range to an instance, you can't modify the range. gcloud beta sql instances create INSTANCE ID \ --project = PROJECT ID \ --network = projects/ NETWORK PROJECT ID /global/networks/ VPC NETWORK NAME \ --no-assign-ip \ --allocated-ip-range-name = RANGE NAME \ --enable-google-private-path \ --database-version = DATABASE VERSION \ --cpu = NUMBER OF CPU \ --memory = MEMORY IN GB \ --region = REGION NAME \ --enforce-new-sql-network-architecture Terraform To configure private IP for a new instance, use the following Terraform resources: google compute network google compute global address google service networking connection google sql database instance resource "google compute network" "peering network" { name = "private-network" auto create subnetworks = "false" } resource "google compute global address" "private ip address" { name = "private-ip-address" purpose = "VPC PEERING" address type = "INTERNAL" prefix length = 16 network = google compute network.peering network.id } resource "google service networking connection" "default" { network = google compute network.peering network.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip address.name] } resource "google sql database instance" "default" { name = "private-ip-sql-instance" region = "us-central1" database version = "POSTGRES 14" depends on = [google service networking connection.default] settings { tier = "db-custom-2-7680" ip configuration { ipv4 enabled = "false" private network = google compute network.peering network.id } } } resource "google compute network peering routes config" "peering routes" { peering = google service networking connection.default.peering network = google compute network.peering network.name import custom routes = true export custom routes = true } [START cloud sql postgres instance private ip dns] Uncomment this block after adding a valid DNS suffix resource "google service networking peered dns domain" "default" { name = "example-com" network = google compute network.peering network.id dns suffix = "example.com." service = "servicenetworking.googleapis.com" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### "Authorize with authorized networks \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/authorize-networks](https://docs.cloud.google.com/sql/docs/postgres/authorize-networks)
- Source ID: `site-iam-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Limitations Some IP address ranges can't be added as authorized networks.
- Your client application is connecting directly to a Cloud SQL instance on its private IP address, and your client's IP address is a non-RFC 1918 address The IP address can be either a single endpoint or consist of a range in CIDR notation .
- These are automatically and implicitly included in the authorized networks by Cloud SQL 192.168.0.0/16 RFC 1918 address range.
- These are automatically and implicitly included in the authorized networks by Cloud SQL 172.16.0.0/12 RFC 1918 address range.

