---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.973Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud Functions connectivity"
feature_slug: "cloud-functions-connectivity"
latest_feature_date: "2018-06-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-overview"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip"
keywords:
  - "functions"
  - "connectivity"
  - "sql"
  - "for"
  - "mysql"
  - "supports"
  - "connections"
  - "from"
---

# Cloud Functions connectivity

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports connections from Cloud Functions.

## Extended Definition

Cloud SQL for MySQL supports connections from Cloud Functions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- September 02, 2021 Feature Cloud SQL for MySQL now supports using a custom import to set up replication from large external databases.
- January 25, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) January 12, 2024 Feature Cloud SQL for MySQL now supports setting microsecond time periods for the following flag on MySQL 5.7 and MySQL 8.0: innodb flush log at timeout For more information about this flag, see supported flags .
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- December 05, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 04, 2024 Feature Cloud SQL for MySQL now supports minor version 8.0.40.

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Shell Connecting using the Cloud Shell Apps Script External connections with Apps Script Apps Script sample GitHub page Cloud Code Connecting using Cloud Code in JetBrains IDE Connect using third-party database administration tools MySQL Workbench Connecting with MySQL Workbench Toad for MySQL Connecting with Toad for MySQL SQuirrel SQL Connecting with SQuirrel SQL phpMyAdmin Using phpMyAdmin with Cloud SQL on App Engine Troubleshoot If you're having problems connecting, then check the following pages for help debugging or finding solutions to known issues: Debugging connection issues Known connectivity errors Troubleshooting Cloud SQL Auth Proxy connection Common connection issues What's next Learn how to connect with the Quickstart for Cloud SQL for mysql .
- Remove networking options from an instance Cloud SQL supports the removal of the following networking options from an instance: Public IP from an instance with both private services access and public IP Public IP from an instance with public IP, private services access, and Private Service Connect Private Service Connect from an instance with both Private Service Connect and private services access Private Service Connect from an instance with Private Service Connect, private services access, and public IP Enable networking options for an instance You can enable Cloud SQL supports enabling the following connection options for instances: Private services access on an instance with public IP only Private Service Connect on an instance with private services access only Private Service Connect on an instance with both private services access and public IP Public IP on an instance with private services access only Limitations You can't create an instance with both a public IP address and Private Service Connect.
- Summary Recommendation : For improved security, we recommend that you configure your instance with a private IP address type unless you have specific requirements for an internet-accessible Cloud SQL instance, or if you're connecting from a client that doesn't meet the requirements for a VPC.
- Learn about connecting using a mysql client from a local machine or Compute Engine .

### Configure private IP \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- After you assign a range to an instance, you can't modify the range. gcloud beta sql instances create INSTANCE ID \ --project = PROJECT ID \ --network = projects/ NETWORK PROJECT ID /global/networks/ VPC NETWORK NAME \ --no-assign-ip \ --allocated-ip-range-name = RANGE NAME \ --enable-google-private-path \ --enforce-new-sql-network-architecture Terraform To configure private IP for a new instance, use the following Terraform resources: google compute network google compute global address google service networking connection google sql database instance resource "google compute network" "peering network" { name = "private-network" auto create subnetworks = "false" } resource "google compute global address" "private ip address" { name = "private-ip-address" purpose = "VPC PEERING" address type = "INTERNAL" prefix length = 16 network = google compute network.peering network.id } resource "google service networking connection" "default" { network = google compute network.peering network.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip address.name] } resource "google sql database instance" "instance" { name = "private-ip-sql-instance" region = "us-central1" database version = "MYSQL 8 0" depends on = [google service networking connection.default] settings { tier = "db-f1-micro" ip configuration { ipv4 enabled = "false" private network = google compute network.peering network.id } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } resource "google compute network peering routes config" "peering routes" { peering = google service networking connection.default.peering network = google compute network.peering network.name import custom routes = true export custom routes = true } Uncomment this block after adding a valid DNS suffix resource "google service networking peered dns domain" "default" { name = "example-com" network = google compute network.peering network.name dns suffix = "example.com." service = "servicenetworking.googleapis.com" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- How Cloud SQL creates a write endpoint If you enable the Cloud DNS API for your Google Cloud project, and then you create a primary Cloud SQL Enterprise Plus edition instance , promote the replica for the instance , or upgrade the instance from Cloud SQL Enterprise edition , Cloud SQL generates a write endpoint automatically and assigns it to the instance.
- Depending on the service, the private services connection might create one or more of the following peering connections, but not necessarily all of them: cloudsql-mysql-googleapis-com cloudsql-postgres-googleapis-com servicenetworking-googleapis-com Update all of the peering connections to enable Export custom routes .
- Connect from an internal source To connect from a source in the same Google Cloud project as your Cloud SQL instance, such as the Cloud SQL Auth Proxy running on a Compute Engine resource, that resource must be in the same VPC network where private services access has been established for the Cloud SQL instance.

