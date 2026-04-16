---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.477Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "PostgreSQL 17 compatibility"
feature_slug: "postgresql-17-compatibility"
latest_feature_date: "2025-09-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/db-version-policies"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
keywords:
  - "postgresql"
  - "17"
  - "compatibility"
  - "lets"
  - "you"
  - "create"
  - "alloydb"
  - "clusters"
---

# PostgreSQL 17 compatibility

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

PostgreSQL 17 compatibility lets you create AlloyDB clusters with PostgreSQL 17 compatibility; PostgreSQL 17 compatibility lets you create AlloyDB clusters with PostgreSQL 17 compatibility.

## Extended Definition

PostgreSQL 17 compatibility lets you create AlloyDB clusters with PostgreSQL 17 compatibility; PostgreSQL 17 compatibility lets you create AlloyDB clusters with PostgreSQL 17 compatibility.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)

## Supporting Pages

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- You can use curl to execute the request, as shown in the following example: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" https://alloydb.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID /instances?instance id= INSTANCE ID -d @instance request.json Clone an active cluster To create a clone of an active cluster, containing a copy of all the source cluster's data and running in the same region, perform a point-in-time recovery on that cluster .
- Private services access gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = PASSWORD \ --region = REGION ID \ --project = PROJECT ID \ --network = NETWORK Private Service Connect gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = PASSWORD \ --region = REGION ID \ --project = PROJECT ID \ --enable-private-service-connect Replace the following: CLUSTER ID : the ID of the cluster that you are creating.
- You can use the following curl to execute the preceding request: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" https://alloydb.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION ID /clusters?cluster id= CLUSTER ID -d @cluster request.json Create a primary instance This example creates a primary instance.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Create a cluster and its primary instance Stay organized with collections Save and categorize content based on your preferences.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To configure service access using the allocated IP range, run the following command: gcloud services vpc-peerings connect \ --service = servicenetworking.googleapis.com \ --ranges = IP RANGE NAME \ --network = default To deploy the AlloyDB cluster, run the following command: gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = CLUSTER PASSWORD \ --network = default \ --region = REGION \ --project = PROJECT ID Replace the following: CLUSTER ID : the ID of the cluster that you are creating.
- Enable the Cloud APIs necessary to create and connect to AlloyDB for PostgreSQL. gcloud services enable alloydb.googleapis.com \ compute.googleapis.com \ cloudresourcemanager.googleapis.com \ cloudbuild.googleapis.com \ containerregistry.googleapis.com \ servicenetworking.googleapis.com \ artifactregistry.googleapis.com \ container.googleapis.com Note: If you've already enabled any or all of these APIs, you won't see them listed here.
- Connect to your primary instance and create an AlloyDB database and user To create a database and a database user on your primary instance, complete the following steps: Console If you're not in your newly created cluster Overview page, then in the Google Cloud console, go to the Clusters page.
- This can take several minutes. gcloud In the Cloud Shell, check if the unused IP addresses (IPv4) range is already assigned to service peering: gcloud services vpc-peerings list --network = default Skip the next step if your output looks similar to the following: network: projects/493573376485/global/networks/default peering: servicenetworking-googleapis-com reservedPeeringRanges: - default-ip-range service: services/servicenetworking.googleapis.com In this output, the value of reservedPeeringRanges is default-ip-range , which you can use as IP RANGE NAME to create a private connection in step 3. (Skip when using the default value of reservedPeeringRanges ) To allocate unused IP addresses in the VPC, use the following command: gcloud compute addresses create IP RANGE NAME \ --global \ --purpose = VPC PEERING \ --prefix-length = 16 \ --description = "VPC private service access" \ --network = default Replace IP RANGE NAME with your name for available internal IP addresses within an AlloyDB subnet, such as alloydb-gke-psa-01 .

### "Database version policies \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Major version support timeline The following table shows the dates when AlloyDB support for compatible versions became generally available (GA): PostgreSQL compatible version AlloyDB version support GA date AlloyDB Omni version support GA Date PostgreSQL 18 March 18, 2026 Not applicable PostgreSQL 17 September 22, 2025 Not applicable PostgreSQL 16 October 23, 2024 April 8, 2025 PostgreSQL 15 January 19, 2024 October 11, 2023 PostgreSQL 14 December 12, 2022 Not applicable Major version compatibility release policy We aim to offer timely support for AlloyDB compatibility with new PostgreSQL major versions.
- Major and minor version support AlloyDB supports compatibility with the following PostgreSQL database versions: PostgreSQL compatible version AlloyDB AlloyDB Omni PostgreSQL 18 18.1 Not applicable PostgreSQL 17 (default) 17.5 17.5 PostgreSQL 16 16.9 16.8 16.3 PostgreSQL 15 15.13 15.12 15.7 15.5 15.4 15.2 PostgreSQL 14 14.18 Not applicable PostgreSQL 18 compatibility Before you use PostgreSQL 18 as your database version, consider the following: PostgreSQL 18 isn't available with AlloyDB Omni.
- For example, if AlloyDB releases support for a new minor version of PostgreSQL 17, then a cluster configured with Postgres 17 compatibility has all of its instances upgraded to this new minor version during a subsequent scheduled maintenance operation.
- The specific timing depends on the AlloyDB product: AlloyDB for PostgreSQL : We aim to support compatibility with a new major PostgreSQL version within eight months of the PostgreSQL release numbered MAJOR VERSION .1 .

