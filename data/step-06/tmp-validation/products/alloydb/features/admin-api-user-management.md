---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.194Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Admin API user management"
feature_slug: "admin-api-user-management"
latest_feature_date: "2023-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
keywords:
  - "managing"
  - "methods"
  - "user"
  - "admin"
  - "includes"
  - "management"
  - "cluster"
---

# Admin API user management

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The AlloyDB Admin API includes user-management methods for managing cluster user roles with gcloud.

## Extended Definition

The AlloyDB Admin API includes user-management methods for managing cluster user roles with gcloud.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)

## Supporting Pages

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Automatic memory and storage management systems take advantage of the Google-built, cloud-based environment that AlloyDB runs on, continuously allocating and releasing memory and storage as needed to keep your cluster running with optimal performance and resource efficiency.
- Security and access control You can configure a cluster to require connection with the secure AlloyDB Auth Proxy, which uses Google Cloud Identity Access and Management (IAM) for access control.
- You still need administrative tools to manage the schemas, data, and users within your databases.
- The following diagram illustrates the AlloyDB resource hierarchy, featuring a cluster scaled with a primary instance and multiple load-balanced read pool instances: Cluster: a top-level resource that acts as a logical container for your databases, logs, and other metadata within a region.

### "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin To connect to your AlloyDB instance and use the available tools, you must have one of the following Identity and Access Management (IAM) roles, or a custom role with equivalent permissions: Task Role name Required Identity and Access Management (IAM) role Use read-only tools to list and get AlloyDB resources AlloyDB Viewer roles/alloydb.viewer Connect to an instance and run queries Cloud AlloyDB Client roles/alloydb.client Service Usage Consumer roles/serviceusage.serviceUsageConsumer Perform administrative tasks (such as creating or managing clusters, instances, and users) AlloyDB Admin roles/alloydb.admin Use the observability extension Monitoring Viewer roles/monitoring.viewer Before you can connect to your AlloyDB instance, complete the following steps to set up your project and database.
- Resource management clusters, instances, users create cluster Create an AlloyDB cluster named sales-quarterly-db in the us-east1 region. get cluster Get the details for the cluster sales-quarterly-db . list clusters List all of my AlloyDB clusters. create instance Create a new read instance in the sales-quarterly-db cluster. get instance Show me the information for the instance sales-quarterly-db-rp . list instances List all instances in the sales-quarterly-db cluster. create user Note: The create user tool can create two types of database users: Database users with built-in authentication : these users are managed within the database and authenticate with a password.
- Add the following configuration, replace the environment variables with your values, and save. { "mcpServers": { "alloydb": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","alloydb-postgres","--stdio"], "env": { "ALLOYDB POSTGRES PROJECT": " PROJECT ID ", "ALLOYDB POSTGRES REGION": " REGION ", "ALLOYDB POSTGRES CLUSTER": " CLUSTER NAME ", "ALLOYDB POSTGRES INSTANCE": " INSTANCE NAME ", "ALLOYDB POSTGRES DATABASE": " DATABASE NAME ", "ALLOYDB POSTGRES USER": " USERNAME ", "ALLOYDB POSTGRES PASSWORD": " PASSWORD " } } } } Note: To connect using a private IP address, add the following line to the env object: "ALLOYDB POSTGRES IP TYPE": "private" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Add the following configuration, replace the environment variables with your values, and save. { "mcpServers": { "alloydb": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","alloydb-postgres","--stdio"], "env": { "ALLOYDB POSTGRES PROJECT": " PROJECT ID ", "ALLOYDB POSTGRES REGION": " REGION ", "ALLOYDB POSTGRES CLUSTER": " CLUSTER NAME ", "ALLOYDB POSTGRES INSTANCE": " INSTANCE NAME ", "ALLOYDB POSTGRES DATABASE": " DATABASE NAME ", "ALLOYDB POSTGRES USER": " USERNAME ", "ALLOYDB POSTGRES PASSWORD": " PASSWORD " } } } } Note: To connect using a private IP address, add the following line to the env object: "ALLOYDB POSTGRES IP TYPE": "private" Open Cursor and navigate to Settings > Cursor Settings > MCP .

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- The following is a code snippet for creating a cluster and a primary instance based on the AlloyDB instance full example: resource "google alloydb instance" "default" { cluster = google alloydb cluster.default.name instance id = "alloydb-instance" instance type = "PRIMARY" machine config { cpu count = 2 } depends on = [google service networking connection.vpc connection] } resource "google alloydb cluster" "cluster abc" { cluster id = "alloydb-cluster" location = "us-central1" network config { network = google compute network.default.id } database version = "POSTGRES 16" initial user { password = "alloydb-cluster" } } data "google project" "project" {} resource "google compute network" "default" { name = "alloydb-network" } resource "google compute global address" "private ip alloc" { name = "alloydb-cluster" address type = "INTERNAL" purpose = "VPC PEERING" prefix length = 16 network = google compute network.default.id } resource "google service networking connection" "vpc connection" { network = google compute network.default.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip alloc.name] } This example creates an N2 instance.
- To send your request, save the request body in a file named cluster request.json : { "databaseVersion" : "<var>DATABASE VERSION</var>" , "initialUser" : { "user" : "<var>INITIAL USERNAME</var>" , "password" : "<var>INITIAL USER PASSWORD</var>" }, "labels" : { "test" : "alloydb-cluster-full" } } Make the following replacements: DATABASE VERSION : enum string of the database version—for example, POSTGRES 17 .
- To gain this permission while following the principle of least privilege, ask your administrator to grant you the Compute Network User ( roles/compute.networkUser ) role.
- Required roles Before you can create your first postgres cluster, you must have the correct Identity and Access Management (IAM) roles.

