---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.467Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Bangkok region support"
feature_slug: "bangkok-region-support"
latest_feature_date: "2026-01-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
keywords:
  - "bangkok"
  - "region"
  - "lets"
  - "you"
  - "create"
  - "alloydb"
  - "cluster"
  - "instances"
---

# Bangkok region support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Bangkok region support lets you create AlloyDB cluster instances in the asia-southeast3 region.

## Extended Definition

Bangkok region support lets you create AlloyDB cluster instances in the asia-southeast3 region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)

## Supporting Pages

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use curl to execute the request, as shown in the following example: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" https://alloydb.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID /instances?instance id= INSTANCE ID -d @instance request.json Clone an active cluster To create a clone of an active cluster, containing a copy of all the source cluster's data and running in the same region, perform a point-in-time recovery on that cluster .
- Create a primary instance To create a primary instance, use the gcloud alloydb instances create command. gcloud alloydb instances create INSTANCE ID \ --instance-type = PRIMARY \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --allowed-psc-projects = ALLOWED PROJECT LIST Replace the following: INSTANCE ID : the ID of the instance you are creating.
- Private services access gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = PASSWORD \ --region = REGION ID \ --project = PROJECT ID \ --network = NETWORK Private Service Connect gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = PASSWORD \ --region = REGION ID \ --project = PROJECT ID \ --enable-private-service-connect Replace the following: CLUSTER ID : the ID of the cluster that you are creating.
- The following is a code snippet for creating a cluster and a primary instance based on the AlloyDB instance full example: resource "google alloydb instance" "default" { cluster = google alloydb cluster.default.name instance id = "alloydb-instance" instance type = "PRIMARY" machine config { cpu count = 2 } depends on = [google service networking connection.vpc connection] } resource "google alloydb cluster" "cluster abc" { cluster id = "alloydb-cluster" location = "us-central1" network config { network = google compute network.default.id } database version = "POSTGRES 16" initial user { password = "alloydb-cluster" } } data "google project" "project" {} resource "google compute network" "default" { name = "alloydb-network" } resource "google compute global address" "private ip alloc" { name = "alloydb-cluster" address type = "INTERNAL" purpose = "VPC PEERING" prefix length = 16 network = google compute network.default.id } resource "google service networking connection" "vpc connection" { network = google compute network.default.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip alloc.name] } This example creates an N2 instance.

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- To enable managed connection pooling in your read pool instance, add the --enable-connection-pooling flag to the gcloud alloydb instances create command: gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --enable-connection-pooling To create a read pool instance for a public IP-enabled cluster, add the --assign-inbound-public-ip= ASSIGN IPV4 parameter. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --assign-inbound-public-ip = ASSIGN IPV4 Optionally, you can pass the comma separated list of CIDR blocks, such as 64.233.160.0/16 to the --authorized-external-networks parameter to set authorized external networks on your instance.
- Use the gcloud alloydb instances create command to create a read pool instance. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID Replace the following: INSTANCE ID : The ID of the instance you are creating.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Create a read pool instance in a cluster Stay organized with collections Save and categorize content based on your preferences.
- REGION ID : The region of your existing cluster, in which your want to create the read pool instance.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- To deploy the AlloyDB primary instance, run the following: gcloud alloydb instances create INSTANCE ID \ --instance-type = PRIMARY \ --cpu-count = NUM CPU \ --region = REGION \ --cluster = CLUSTER ID \ --project = PROJECT ID Replace the following: INSTANCE ID with the name of the AlloyDB instance of your choice, such as alloydb-primary .
- To configure service access using the allocated IP range, run the following command: gcloud services vpc-peerings connect \ --service = servicenetworking.googleapis.com \ --ranges = IP RANGE NAME \ --network = default To deploy the AlloyDB cluster, run the following command: gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = CLUSTER PASSWORD \ --network = default \ --region = REGION \ --project = PROJECT ID Replace the following: CLUSTER ID : the ID of the cluster that you are creating.
- You use this information in Create a Kubernetes secret . gcloud To create an AlloyDB database user, run the following command in the Cloud Shell: gcloud alloydb users create USERNAME \ --cluster = CLUSTER ID \ --region = REGION \ --password = DATABASE PASSWORD Replace the following: USERNAME : the name of the AlloyDB user, such as tutorial user .
- Get the instance connection INSTANCE URI for the AlloyDB primary instance you want AlloyDB proxy to connect to: gcloud alloydb instances describe INSTANCE ID \ --cluster = CLUSTER ID \ --region = REGION \ --format = "value(name)" Replace the following: INSTANCE ID : name for the instance, such as alloydb-primary .

