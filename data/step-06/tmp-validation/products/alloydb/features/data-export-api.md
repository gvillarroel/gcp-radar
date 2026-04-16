---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.118Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Data export API"
feature_slug: "data-export-api"
latest_feature_date: "2024-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox"
keywords:
  - "export"
  - "cancel"
  - "operations"
  - "provides"
  - "clusters"
---

# Data export API

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB provides an API to export data from clusters and to cancel export operations.

## Extended Definition

AlloyDB provides an API to export data from clusters and to cancel export operations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/rest](https://docs.cloud.google.com/alloydb/docs/reference/rest)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)

## Supporting Pages

### AlloyDB API \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest](https://docs.cloud.google.com/alloydb/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1beta.projects.locations.clusters Methods create POST /v1beta/{parent=projects/ /locations/ }/clusters Creates a new Cluster in a given project and location. createsecondary POST /v1beta/{parent=projects/ /locations/ }/clusters:createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete DELETE /v1beta/{name=projects/ /locations/ /clusters/ } Deletes a single Cluster. export POST /v1beta/{name=projects/ /locations/ /clusters/ }:export Exports data from the cluster. get GET /v1beta/{name=projects/ /locations/ /clusters/ } Gets details of a single Cluster. import POST /v1beta/{name=projects/ /locations/ /clusters/ }:import Imports data to the cluster. list GET /v1beta/{parent=projects/ /locations/ }/clusters Lists Clusters in a given project and location. patch PATCH /v1beta/{cluster.name=projects/ /locations/ /clusters/ } Updates the parameters of a single Cluster. promote POST /v1beta/{name=projects/ /locations/ /clusters/ }:promote Promotes a SECONDARY cluster. restore POST /v1beta/{parent=projects/ /locations/ }/clusters:restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL POST /v1beta/{parent=projects/ /locations/ }/clusters:restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover POST /v1beta/{name=projects/ /locations/ /clusters/ }:switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade PATCH /v1beta/{name=projects/ /locations/ /clusters/ }:upgrade Upgrades a single Cluster.
- REST Resource: v1.projects.locations.clusters Methods create POST /v1/{parent=projects/ /locations/ }/clusters Creates a new Cluster in a given project and location. createsecondary POST /v1/{parent=projects/ /locations/ }/clusters:createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete DELETE /v1/{name=projects/ /locations/ /clusters/ } Deletes a single Cluster. export POST /v1/{name=projects/ /locations/ /clusters/ }:export Exports data from the cluster. get GET /v1/{name=projects/ /locations/ /clusters/ } Gets details of a single Cluster. import POST /v1/{name=projects/ /locations/ /clusters/ }:import Imports data to the cluster. list GET /v1/{parent=projects/ /locations/ }/clusters Lists Clusters in a given project and location. patch PATCH /v1/{cluster.name=projects/ /locations/ /clusters/ } Updates the parameters of a single Cluster. promote POST /v1/{name=projects/ /locations/ /clusters/ }:promote Promotes a SECONDARY cluster. restore POST /v1/{parent=projects/ /locations/ }/clusters:restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL POST /v1/{parent=projects/ /locations/ }/clusters:restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover POST /v1/{name=projects/ /locations/ /clusters/ }:switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade PATCH /v1/{name=projects/ /locations/ /clusters/ }:upgrade Upgrades a single Cluster.
- REST Resource: v1beta.projects.locations.operations Methods cancel POST /v1beta/{name=projects/ /locations/ /operations/ }:cancel Starts asynchronous cancellation on a long-running operation. delete DELETE /v1beta/{name=projects/ /locations/ /operations/ } Deletes a long-running operation. get GET /v1beta/{name=projects/ /locations/ /operations/ } Gets the latest state of a long-running operation. list GET /v1beta/{name=projects/ /locations/ }/operations Lists operations that match the specified filter in the request.
- REST Resource: v1.projects.locations.operations Methods cancel POST /v1/{name=projects/ /locations/ /operations/ }:cancel Starts asynchronous cancellation on a long-running operation. delete DELETE /v1/{name=projects/ /locations/ /operations/ } Deletes a long-running operation. get GET /v1/{name=projects/ /locations/ /operations/ } Gets the latest state of a long-running operation. list GET /v1/{name=projects/ /locations/ }/operations Lists operations that match the specified filter in the request.

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- JSON representation { "primaryClusterName" : string } Fields primaryClusterName string The name of the primary cluster name with the format: projects/{project}/locations/{region}/clusters/{clusterId} PrimaryConfig Configuration for the primary cluster.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback REST Resource: projects.locations.clusters Stay organized with collections Save and categorize content based on your preferences.
- The name of the cluster resource with the format: projects/{project}/locations/{region}/clusters/{clusterId} where the cluster ID segment should satisfy the regex expression [a-z0-9-]+ .

### "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Category Tools Example natural language prompt Database operations database overview Give me an overview of the current database. list tables Show me all the tables in the current database. execute sql Show me the 10 most expensive products in the "Laptops" category. list active queries What queries are running on the database? get query plan Explain the query plan for a query that finds all customers who have not placed an order in the last 6 months. list available extensions What are the available extensions I can install? list installed extensions List all the extensions that are installed. list indexes List all indexes in the products table. list locks Show all active locks on the database. list schemas List all schemas in the database. list sequences Show all sequences in the current schema. list triggers List all triggers for the orders table. list views Show me all the views in the sales schema.
- Before you begin To connect to your AlloyDB instance and use the available tools, you must have one of the following Identity and Access Management (IAM) roles, or a custom role with equivalent permissions: Task Role name Required Identity and Access Management (IAM) role Use read-only tools to list and get AlloyDB resources AlloyDB Viewer roles/alloydb.viewer Connect to an instance and run queries Cloud AlloyDB Client roles/alloydb.client Service Usage Consumer roles/serviceusage.serviceUsageConsumer Perform administrative tasks (such as creating or managing clusters, instances, and users) AlloyDB Admin roles/alloydb.admin Use the observability extension Monitoring Viewer roles/monitoring.viewer Before you can connect to your AlloyDB instance, complete the following steps to set up your project and database.
- Resource management clusters, instances, users create cluster Create an AlloyDB cluster named sales-quarterly-db in the us-east1 region. get cluster Get the details for the cluster sales-quarterly-db . list clusters List all of my AlloyDB clusters. create instance Create a new read instance in the sales-quarterly-db cluster. get instance Show me the information for the instance sales-quarterly-db-rp . list instances List all instances in the sales-quarterly-db cluster. create user Note: The create user tool can create two types of database users: Database users with built-in authentication : these users are managed within the database and authenticate with a password.
- Install the AlloyDB extension for Gemini CLI from the GitHub repository using the following command: gemini extensions install https://github.com/gemini-cli-extensions/alloydb Set environment variables to connect to your AlloyDB instance: export ALLOYDB POSTGRES PROJECT=" PROJECT ID " export ALLOYDB POSTGRES REGION=" REGION " export ALLOYDB POSTGRES CLUSTER=" CLUSTER NAME " export ALLOYDB POSTGRES INSTANCE=" INSTANCE NAME " export ALLOYDB POSTGRES DATABASE=" DATABASE NAME " The Gemini CLI extension for AlloyDB uses your application default credentials (ADC) for authentication by default.

