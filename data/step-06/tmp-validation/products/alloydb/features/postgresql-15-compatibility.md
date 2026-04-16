---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.172Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "PostgreSQL 15 compatibility"
feature_slug: "postgresql-15-compatibility"
latest_feature_date: "2023-09-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
keywords:
  - "compatibility"
  - "created"
  - "postgresql"
  - "clusters"
---

# PostgreSQL 15 compatibility

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB clusters can be created with PostgreSQL 15 compatibility.

## Extended Definition

AlloyDB clusters can be created with PostgreSQL 15 compatibility.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)

## Supporting Pages

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Choose one of the following: 14 : for compatibility with PostgreSQL 14 15 : for compatibility with PostgreSQL 15 16 : for compatibility with PostgreSQL 16 17 : for compatibility with PostgreSQL 17, which is the supported default PostgreSQL version 18 , for compatibility with PostgreSQL 18 CLUSTER PASSWORD : the password to use for the default postgres user.
- Connect to your primary instance and create an AlloyDB database and user To create a database and a database user on your primary instance, complete the following steps: Console If you're not in your newly created cluster Overview page, then in the Google Cloud console, go to the Clusters page.
- Open Cloud Shell In the Cloud Shell, get credentials for your cluster: gcloud container clusters get-credentials GKE CLUSTER ID --region REGION --project PROJECT ID This command configures kubectl to use the GKE cluster that you created.
- In the Cloud Shell, get credentials for your cluster: gcloud container clusters get-credentials GKE CLUSTER ID --region REGION --project PROJECT ID This command configures kubectl to use the GKE cluster that you created.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Choose one of the following: 14 , for compatibility with PostgreSQL 14 15 , for compatibility with PostgreSQL 15 16 , for compatibility with PostgreSQL 16 17 , for compatibility with PostgreSQL 17, which is the default PostgreSQL version supported 18 , for compatibility with PostgreSQL 18 PASSWORD : the password to use for the default postgres user.
- You can use curl to execute the request, as shown in the following example: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" https://alloydb.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID /instances?instance id= INSTANCE ID -d @instance request.json Clone an active cluster To create a clone of an active cluster, containing a copy of all the source cluster's data and running in the same region, perform a point-in-time recovery on that cluster .
- Private services access gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = PASSWORD \ --region = REGION ID \ --project = PROJECT ID \ --network = NETWORK Private Service Connect gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = PASSWORD \ --region = REGION ID \ --project = PROJECT ID \ --enable-private-service-connect Replace the following: CLUSTER ID : the ID of the cluster that you are creating.
- If only cpu count is provided, an N2 instance is created with the following specifications: 2: 2 vCPUs, 16 GB RAM 4: 4 vCPUs, 32 GB RAM 8: 8 vCPUs, 64 GB RAM 16: 16 vCPUs, 128 GB RAM 32: 32 vCPUs, 256 GB RAM 64: 64 vCPUs, 512 GB RAM 96: 96 vCPUs, 768 GB RAM 128: 128 vCPUs, 864 GB RAM If both machine type and cpu count are provided, the cpu count value must align with the number of vCPUs specified in the machine type .

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback REST Resource: projects.locations.clusters Stay organized with collections Save and categorize content based on your preferences.
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- JSON representation { "primaryClusterName" : string } Fields primaryClusterName string The name of the primary cluster name with the format: projects/{project}/locations/{region}/clusters/{clusterId} PrimaryConfig Configuration for the primary cluster.
- JSON representation { "enabled" : boolean } Fields enabled boolean This flag controls the integration of AlloyDB for PostgreSQL resources like databases, schemas, and tables with Dataplex.

