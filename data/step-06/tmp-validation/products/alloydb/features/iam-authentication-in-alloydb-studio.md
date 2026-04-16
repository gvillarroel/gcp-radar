---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.099Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "IAM authentication in AlloyDB Studio"
feature_slug: "iam-authentication-in-alloydb-studio"
latest_feature_date: "2025-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/manage-data-agents"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
keywords:
  - "authentication"
  - "method"
  - "studio"
  - "database"
  - "supports"
---

# IAM authentication in AlloyDB Studio

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Studio supports IAM authentication as a database authentication method.

## Extended Definition

AlloyDB Studio supports IAM authentication as a database authentication method.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/manage-data-agents](https://docs.cloud.google.com/alloydb/docs/ai/manage-data-agents)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect](https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect)
- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)

## Supporting Pages

### "Manage context sets in AlloyDB Studio \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/manage-data-agents](https://docs.cloud.google.com/alloydb/docs/ai/manage-data-agents)
- Source ID: `site-docs-root-2`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Manage context sets in AlloyDB Studio Stay organized with collections Save and categorize content based on your preferences.
- To perform steps in this tutorial, sign in to Google Cloud , and then authenticate to the database using IAM authentication.
- Sign in to Studio using Identity and Access Management authentication.
- Sign in to Studio using Identity and Access Management authentication.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- By default, Create an IAM database user is selected, which does the following: Enables the alloydb.iam authentication flag on the primary instance.
- Optional: To set the alloydb.iam authentication flag manually, deselect Create an IAM database user .
- The following is a code snippet for creating a cluster and a primary instance based on the AlloyDB instance full example: resource "google alloydb instance" "default" { cluster = google alloydb cluster.default.name instance id = "alloydb-instance" instance type = "PRIMARY" machine config { cpu count = 2 } depends on = [google service networking connection.vpc connection] } resource "google alloydb cluster" "cluster abc" { cluster id = "alloydb-cluster" location = "us-central1" network config { network = google compute network.default.id } database version = "POSTGRES 16" initial user { password = "alloydb-cluster" } } data "google project" "project" {} resource "google compute network" "default" { name = "alloydb-network" } resource "google compute global address" "private ip alloc" { name = "alloydb-cluster" address type = "INTERNAL" purpose = "VPC PEERING" prefix length = 16 network = google compute network.default.id } resource "google service networking connection" "vpc connection" { network = google compute network.default.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip alloc.name] } This example creates an N2 instance.
- Private services access gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = PASSWORD \ --region = REGION ID \ --project = PROJECT ID \ --network = NETWORK Private Service Connect gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = PASSWORD \ --region = REGION ID \ --project = PROJECT ID \ --enable-private-service-connect Replace the following: CLUSTER ID : the ID of the cluster that you are creating.

### "Create and query an AlloyDB database using the Google Cloud console \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect](https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Sign in to AlloyDB Studio page, follow these steps: Choose a database authentication method .
- Connect to your instance and create a database in AlloyDB Studio Note: To connect a psql client to an instance, follow the steps in Connect a psql client to an instance .
- In the Sign in to AlloyDB Studio page, follow these steps: Select the guestbook database.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and connect to an AlloyDB database: compute.networks.list compute.networks.addPeering compute.addresses.create servicenetworking.services.addPeering alloydb.clusters.create alloydb.instances.create alloydb.instances.login You might also be able to get these permissions with custom roles or other predefined roles .

