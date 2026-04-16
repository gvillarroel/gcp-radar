---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.096Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Private Service Connect cluster creation in Google Cloud console"
feature_slug: "private-service-connect-cluster-creation-in-google-cloud-console"
latest_feature_date: "2025-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
keywords:
  - "creation"
  - "private"
  - "console"
  - "connect"
  - "clusters"
  - "cluster"
---

# Private Service Connect cluster creation in Google Cloud console

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB clusters with Private Service Connect can be created through the Google Cloud console.

## Extended Definition

AlloyDB clusters with Private Service Connect can be created through the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect](https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect)
- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)

## Supporting Pages

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The configuration for Private Service Connect (PSC) for the cluster. maintenanceUpdatePolicy object ( MaintenanceUpdatePolicy ) Optional.
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- JSON representation { "primaryClusterName" : string } Fields primaryClusterName string The name of the primary cluster name with the format: projects/{project}/locations/{region}/clusters/{clusterId} PrimaryConfig Configuration for the primary cluster.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback REST Resource: projects.locations.clusters Stay organized with collections Save and categorize content based on your preferences.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Private services access gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = PASSWORD \ --region = REGION ID \ --project = PROJECT ID \ --network = NETWORK Private Service Connect gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = PASSWORD \ --region = REGION ID \ --project = PROJECT ID \ --enable-private-service-connect Replace the following: CLUSTER ID : the ID of the cluster that you are creating.
- Create a cluster To create the cluster with either private service access or Private Service Connect enabled, use the gcloud alloydb clusters create command.
- The following is a code snippet for creating a cluster and a primary instance based on the AlloyDB instance full example: resource "google alloydb instance" "default" { cluster = google alloydb cluster.default.name instance id = "alloydb-instance" instance type = "PRIMARY" machine config { cpu count = 2 } depends on = [google service networking connection.vpc connection] } resource "google alloydb cluster" "cluster abc" { cluster id = "alloydb-cluster" location = "us-central1" network config { network = google compute network.default.id } database version = "POSTGRES 16" initial user { password = "alloydb-cluster" } } data "google project" "project" {} resource "google compute network" "default" { name = "alloydb-network" } resource "google compute global address" "private ip alloc" { name = "alloydb-cluster" address type = "INTERNAL" purpose = "VPC PEERING" prefix length = 16 network = google compute network.default.id } resource "google service networking connection" "vpc connection" { network = google compute network.default.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip alloc.name] } This example creates an N2 instance.
- In case of Shared VPC network, set to the fully qualified path of the VPC network—for example, projects/cymbal-project/global/networks/shared-vpc-network . --enable-private-service-connect (Optional): set to enable Private Service Connect as the connectivity method for the cluster and its instances.

### "Create and query an AlloyDB database using the Google Cloud console \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect](https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you created a private connection when you created a cluster , go to the Google Cloud console Networking page and click Delete VPC network .
- Connect to the guestbook database In the Google Cloud console, go to the Clusters page.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and connect to an AlloyDB database: compute.networks.list compute.networks.addPeering compute.addresses.create servicenetworking.services.addPeering alloydb.clusters.create alloydb.instances.create alloydb.instances.login You might also be able to get these permissions with custom roles or other predefined roles .
- Create and query an AlloyDB database using the Google Cloud console In AlloyDB for PostgreSQL, your databases are stored in clusters that contain instances .

