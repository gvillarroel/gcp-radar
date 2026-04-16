---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.888Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Private Service Connect outbound connectivity"
feature_slug: "private-service-connect-outbound-connectivity"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect"
keywords:
  - "private"
  - "connect"
  - "outbound"
  - "connectivity"
  - "feature"
  - "lets"
  - "psc"
  - "enabled"
---

# Private Service Connect outbound connectivity

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

This feature lets PSC-enabled Cloud SQL instances make outbound connections to your network through an attached PSC interface.

## Extended Definition

This feature lets PSC-enabled Cloud SQL instances make outbound connections to your network through an attached PSC interface.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect)

## Supporting Pages

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can expect this operation to take about 8 minutes to complete with an approximate downtime of 3 minutes. gcloud To enable outbound connectivity, run the following command: gcloud beta sql instances patch INSTANCE NAME \ --psc-network-attachment-uri= NETWORK ATTACHMENT URI \ --project= PROJECT ID Replace the following: INSTANCE NAME : the name of the Private Service Connect-enabled Cloud SQL instance that you want to set up for outbound connectivity.
- You can expect this operation to take about 8 minutes to complete with an approximate downtime of 3 minutes. gcloud To disable outbound connectivity, run the following command: gcloud beta sql instances patch INSTANCE NAME \ --clear-psc-network-attachment-uri \ --project= PROJECT ID Replace the following: INSTANCE NAME : the name of the Private Service Connect-enabled Cloud SQL instance that you want to set up for outbound connectivity.
- Configure outbound connectivity for your Cloud SQL instance You can configure your Private Service Connect-enabled Cloud SQL instance to have outbound connectivity with your network using a Private Service Connect interface and a network attachment .
- You can confirm that Private Service Connect outbound connectivity was enabled successfully by running gcloud sql instances describe .

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can't convert the replica of an instance that has Private Service Connect outbound connectivity-enabled to a DR replica .
- Switchover isn't supported for instances with Private Service Connect outbound connectivity enabled.
- Private Service Connect outbound connectivity can't be enabled on a read replica instance.
- Limitations When using a Private Service Connect interface with a network attachment to create outbound connections to your network from your Cloud SQL instance, note the following limitations: Enabling or disabling Private Service Connect outbound connectivity requires downtime.

### "Configure both private services access and Private Service Connect \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To create an instance with both private services access and Private Service Connect enabled, use the google sql database instance Terraform resource . resource "google compute network" "peering network" { name = "private-network" auto create subnetworks = "false" } resource "google compute global address" "private ip address" { name = "private-ip-address" purpose = "VPC PEERING" address type = "INTERNAL" prefix length = 16 network = google compute network.peering network.id } resource "google service networking connection" "default" { network = google compute network.peering network.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip address.name] } resource "google sql database instance" "default" { name = "mysql-instance" region = "us-central1" database version = "MYSQL 8 0" depends on = [google service networking connection.default] settings { tier = "db-f1-micro" ip configuration { psc config { psc enabled = true allowed consumer projects = [] # Add consumer project IDs here. } ipv4 enabled = false private network = google compute network.peering network.id } } } resource "google compute network peering routes config" "peering routes" { peering = google service networking connection.default.peering network = google compute network.peering network.name import custom routes = true export custom routes = true } resource "google compute address" "default" { name = "psc-compute-address-${google sql database instance.default.name}" region = "us-central1" address type = "INTERNAL" subnetwork = "default" # Replace value with the name of the subnet here. address = "192.168.0.43" # Replace value with the IP address to reserve. } data "google sql database instance" "default" { name = resource.google sql database instance.default.name } resource "google compute forwarding rule" "default" { name = "psc-forwarding-rule-${google sql database instance.default.name}" region = "us-central1" network = "default" ip address = google compute address.default.self link load balancing scheme = "" target = data.google sql database instance.default.psc service attachment link } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- You can deactivate Private Service Connect for an instance by using gcloud CLI or the API. gcloud To deactivate Private Service Connect for an instance, use the gcloud sql instances patch command: gcloud sql instances patch INSTANCE NAME \ --project = PROJECT ID \ --no-enable-private-service-connect \ --clear-allowed-psc-projects Make the following replacements: INSTANCE NAME : the name of the instance PROJECT ID : the ID or project number of the Google Cloud project that contains the instance Terraform To deactivate Private Service Connect for an instance, use the google sql database instance Terraform resource . resource "google sql database instance" "disable psc example" { name = "mysql-disable-psc-example" region = "us-central1" database version = "MYSQL 8 0" depends on = [google service networking connection.default] settings { tier = "db-f1-micro" ip configuration { psc config { psc enabled = false allowed consumer projects = [] # clear consumer projects } ipv4 enabled = false private network = google compute network.peering network.id } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the instance HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "kind": "sql#instance", "name": " INSTANCE NAME ", "project": " PROJECT ID ", "settings": { "ipConfiguration": { "pscConfig": { "pscEnabled": "false", "allowedConsumerProjects": [{}] } }, "kind": "sql#settings" } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE NAME ", "project": PROJECT ID ", "region": " REGION NAME ", "databaseVersion": "MYSQL 8 0", "kind": "sql#instance", "settings": { "availabilityType": " AVAILABILITY TYPE ", "backupConfiguration": { "binaryLogEnabled": true, "enabled": true, "kind": "sql#backupConfiguration", "startTime": "00:00" }, "ipConfiguration": { "ipv4Enabled": false, "privateNetwork": VPC PSA NETWORK PATH , "allocatedIpRange": " RANGE NAME ", "enablePrivatePathForGoogleCloudServices": true, "pscConfig": { "allowedConsumerProjects": [ " ALLOWED PROJECTS " ], "pscAutoConnections": [ { "consumerProject":" SERVICE PROJECT ", "consumerNetwork":"projects/ SERVICE PROJECT /global/networks/ VPC PSC NETWORK PATH " } ], "pscEnabled": true } }, "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "tier": " MACHINE TYPE " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME ", "status": "RUNNING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "startTime": "2023-06-14T18:48:35.499Z", "operationType": "CREATE", "name": " OPERATION ID ", "targetId": " INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Deactivate Private Service Connect for an instance You can deactivate Private Service Connect for an instance that has both private services access and Private Service Connect enabled for it.

