---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.822Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "postgres_fdw extension"
feature_slug: "postgres-fdw-extension"
latest_feature_date: "2020-05-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-overview"
  - "https://docs.cloud.google.com/sql/docs/postgres/authorize-networks"
  - "https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect"
keywords:
  - "federated"
  - "postgres"
  - "extension"
  - "supports"
  - "access"
---

# postgres_fdw extension

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports the postgres_fdw extension for federated access to remote PostgreSQL tables.

## Extended Definition

Cloud SQL for PostgreSQL supports the postgres_fdw extension for federated access to remote PostgreSQL tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/connect-overview](https://docs.cloud.google.com/sql/docs/postgres/connect-overview)
- [https://docs.cloud.google.com/sql/docs/postgres/authorize-networks](https://docs.cloud.google.com/sql/docs/postgres/authorize-networks)
- [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)

## Supporting Pages

### "Authorize with authorized networks \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/authorize-networks](https://docs.cloud.google.com/sql/docs/postgres/authorize-networks)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Limitations Some IP address ranges can't be added as authorized networks.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 Configuring authorized networks replaces the existing authorized networks list.
- Terraform To configure authorized networks, use a Terraform resource . resource "google sql database instance" "default" { name = "postgres-instance-with-authorized-network" region = "us-central1" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" ip configuration { authorized networks { name = "Network Name" value = "192.0.2.0/24" expiration time = "3021-11-15T16:19:00.094Z" } } } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Save the request body in a file named request.json , and execute the following command: curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-overview](https://docs.cloud.google.com/sql/docs/postgres/connect-overview)
- Source ID: `site-docs-root`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Remove networking options from an instance Cloud SQL supports the removal of the following networking options from an instance: Public IP from an instance with both private services access and public IP Public IP from an instance with public IP, private services access, and Private Service Connect Private Service Connect from an instance with both Private Service Connect and private services access Private Service Connect from an instance with Private Service Connect, private services access, and public IP Enable networking options for an instance You can enable Cloud SQL supports enabling the following connection options for instances: Private services access on an instance with public IP only Private Service Connect on an instance with private services access only Private Service Connect on an instance with both private services access and public IP Public IP on an instance with private services access only Limitations You can't create an instance with both a public IP address and Private Service Connect.
- Supported by using the Private Service Connect endpoint. pglogical , PL/Proxy , dblink , and postgres fdw extensions Supported.
- Cloud Shell Connecting using the Cloud Shell Cloud Code Connecting using Cloud Code in JetBrains IDE Connect using third-party database administration tools pgAdmin pgAdmin.org for PostgreSQL Toad Edge Toad Edge for PostgreSQL Blendo How to connect Google Cloud SQL PostgreSQL with Blendo Troubleshoot If you're having problems connecting, then check the following pages for help debugging or finding solutions to known issues: Debugging connection issues Known connectivity errors Troubleshooting Cloud SQL Auth Proxy connection Common connection issues What's next Learn how to connect with the Quickstart for Cloud SQL for postgres .
- Private IP address Public IP address Description Internal, Virtual Private Cloud (VPC) network-only (private) IP address An external, internet-accessible (public) IP address Decision points Do you need to connect from clients hosted on VPC networks inside Google Cloud or from clients that have access to those VPC networks?

### "Private Service Connect overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- You can use outbound connectivity to migrate data from an external server within your network, use PostgreSQL extensions that require an outbound connection to your Cloud SQL instance, or do a homogeneous migration using Database Migration Service.
- You can use Private Service Connect for the following purposes: Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations Connect to either a primary instance or any of its read replicas Private Service Connect endpoint You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks.
- To use Private Service Connect backends, you must setup the following resources for each serving port on which you want to access a given Cloud SQL instance: Private Service Connect Network Endpoint Group (NEG) , which must reference the service attachment and a serving port of the Cloud SQL instance.
- By adding a single common services VPC network to the NCC hub, all Private Service Connect endpoints in the VPC network become accessible transitively to other spoke VPC networks through the hub.

