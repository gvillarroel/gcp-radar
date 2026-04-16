---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.921Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Private Service Connect cross-region read replica support"
feature_slug: "private-service-connect-cross-region-read-replica-support"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
keywords:
  - "private"
  - "connect"
  - "cross"
  - "region"
  - "read"
  - "replica"
  - "supports"
  - "sql"
---

# Private Service Connect cross-region read replica support

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect supports Cloud SQL cross-region read replicas; Private Service Connect supports Cloud SQL cross-region read replicas.

## Extended Definition

Private Service Connect supports Cloud SQL cross-region read replicas; Private Service Connect supports Cloud SQL cross-region read replicas.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)

## Supporting Pages

### Create read replicas \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It also can't replicate from an instance that supports external IP connections or from an instance that's configured with private services access . gcloud To create a read replica of an instance, use the gcloud sql instances create command: gcloud sql instances create REPLICA INSTANCE NAME \ --master-instance-name = PRIMARY INSTANCE NAME \ --project = PROJECT ID \ --region = REGION NAME \ --enable-private-service-connect \ --allowed-psc-projects = ALLOWED PROJECTS \ --availability-type = AVAILABILITY TYPE \ --no-assign-ip Make the following replacements: REPLICA INSTANCE NAME : the name of the replica instance.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE REPLICA", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Create a read replica of an instance with Private Service Connect enabled To create a read replica of an instance with Private Service Connect enabled, use gcloud CLI or the API.
- If the primary instance has a private IP connection and the instance accepts database connections from Cloud SQL Language Connectors only, then you can't create read replicas for the instance.
- You can create this replica in either the same region or in a different region from the primary instance ( cross-region read replica ).

### "Configure both private services access and Private Service Connect \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE NAME ", "project": PROJECT ID ", "region": " REGION NAME ", "databaseVersion": "MYSQL 8 0", "kind": "sql#instance", "settings": { "availabilityType": " AVAILABILITY TYPE ", "backupConfiguration": { "binaryLogEnabled": true, "enabled": true, "kind": "sql#backupConfiguration", "startTime": "00:00" }, "ipConfiguration": { "ipv4Enabled": false, "privateNetwork": VPC PSA NETWORK PATH , "allocatedIpRange": " RANGE NAME ", "enablePrivatePathForGoogleCloudServices": true, "pscConfig": { "allowedConsumerProjects": [ " ALLOWED PROJECTS " ], "pscAutoConnections": [ { "consumerProject":" SERVICE PROJECT ", "consumerNetwork":"projects/ SERVICE PROJECT /global/networks/ VPC PSC NETWORK PATH " } ], "pscEnabled": true } }, "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "tier": " MACHINE TYPE " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For more information, see Create a Private Service Connect endpoint . gcloud To create an instance that supports both private services access and Private Service Connect, use the gcloud sql instances create command: gcloud sql instances create INSTANCE NAME \ --project = PROJECT ID \ --region = REGION NAME \ --enable-private-service-connect \ --allowed-psc-projects = ALLOWED PROJECTS \ --availability-type = AVAILABILITY TYPE \ --no-assign-ip \ --allocated-ip-range-name = RANGE NAME \ --enable-google-private-path \ --tier = MACHINE TYPE \ --database-version = DATABASE VERSION \ --network = VPC PSA NETWORK PATH \ --enable-bin-log \ --psc-auto-connections = network = VPC PSC NETWORK PATH ,project = SERVICE PROJECT Make the following replacements: INSTANCE NAME : the name of the instance.
- By configuring Private Service Connect , you can connect to either a primary Cloud SQL instance or any of its read replicas from multiple VPC networks that belong to different groups, teams, projects, or organizations.
- Terraform To create an instance with both private services access and Private Service Connect enabled, use the google sql database instance Terraform resource . resource "google compute network" "peering network" { name = "private-network" auto create subnetworks = "false" } resource "google compute global address" "private ip address" { name = "private-ip-address" purpose = "VPC PEERING" address type = "INTERNAL" prefix length = 16 network = google compute network.peering network.id } resource "google service networking connection" "default" { network = google compute network.peering network.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip address.name] } resource "google sql database instance" "default" { name = "mysql-instance" region = "us-central1" database version = "MYSQL 8 0" depends on = [google service networking connection.default] settings { tier = "db-f1-micro" ip configuration { psc config { psc enabled = true allowed consumer projects = [] # Add consumer project IDs here. } ipv4 enabled = false private network = google compute network.peering network.id } } } resource "google compute network peering routes config" "peering routes" { peering = google service networking connection.default.peering network = google compute network.peering network.name import custom routes = true export custom routes = true } resource "google compute address" "default" { name = "psc-compute-address-${google sql database instance.default.name}" region = "us-central1" address type = "INTERNAL" subnetwork = "default" # Replace value with the name of the subnet here. address = "192.168.0.43" # Replace value with the IP address to reserve. } data "google sql database instance" "default" { name = resource.google sql database instance.default.name } resource "google compute forwarding rule" "default" { name = "psc-forwarding-rule-${google sql database instance.default.name}" region = "us-central1" network = "default" ip address = google compute address.default.self link load balancing scheme = "" target = data.google sql database instance.default.psc service attachment link } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0", "settings": { "authorizedGaeApplications": [], "tier": "db-custom-2-7680", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "pscConfig": { "allowedConsumerProjects": [ " ALLOWED PROJECTS " ], "pscAutoConnections": { consumerNetwork:"projects/ PARENT PROJECT /global/networks/ CONSUMER NETWORK ", consumerNetworkStatus:" CONSUMER NETWORK STATUS ", consumerProject:" CONSUMER PROJECT ", ipAddress:" IP ADDRESS ", status:" STATUS " }, "pscEnabled": true }, "ipv4Enabled": false }, } The following fields exist for instances that have Private Service Connect enabled for them: allowedConsumerProjects : a list of the allowed projects for the instance.
- You can use Private Service Connect to connect to either a primary Cloud SQL instance or any of its read replicas from multiple Virtual Private Cloud (VPC) networks that belong to different groups, teams, projects, or organizations.
- By using Private Service Connect, you can connect to either a primary instance or any of its read replicas from multiple VPC networks.
- Learn more about creating a read replica of an instance with Private Service Connect enabled.

