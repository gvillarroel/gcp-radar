---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.190Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Cross-region replication"
feature_slug: "cross-region-replication"
latest_feature_date: "2023-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
keywords:
  - "replicates"
  - "another"
  - "replication"
  - "resources"
  - "region"
  - "cross"
  - "cluster"
---

# Cross-region replication

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB cross-region replication replicates cluster data and resources to another region for disaster recovery; AlloyDB cross-region replication makes primary cluster data and resources available in other regions for disaster recovery.

## Extended Definition

AlloyDB cross-region replication replicates cluster data and resources to another region for disaster recovery; AlloyDB cross-region replication makes primary cluster data and resources available in other regions for disaster recovery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)

## Supporting Pages

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As a further method of disaster recovery, you can achieve cross-region replication by creating secondary clusters in separate Google Cloud regions.
- For more information, see About cross-region replication .
- The following diagram illustrates the AlloyDB resource hierarchy, featuring a cluster scaled with a primary instance and multiple load-balanced read pool instances: Cluster: a top-level resource that acts as a logical container for your databases, logs, and other metadata within a region.
- AlloyDB resource hierarchy AlloyDB organizes its resources into three levels: clusters, instances, and nodes.

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Continuous backup properties for this cluster. secondaryConfig object ( SecondaryConfig ) Cross Region replication config specific to SECONDARY cluster. primaryConfig object ( PrimaryConfig ) Output only.
- Cross Region replication config specific to PRIMARY cluster. satisfiesPzs boolean Output only.
- Resource: Cluster A cluster is a collection of regional AlloyDB resources.
- SECONDARY Secondary cluster that is replicating from another region.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- If you want to create secondary clusters that automatically track and replicate data changes made in their source clusters, see About cross-region replication .
- You can use curl to execute the request, as shown in the following example: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" https://alloydb.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID /instances?instance id= INSTANCE ID -d @instance request.json Clone an active cluster To create a clone of an active cluster, containing a copy of all the source cluster's data and running in the same region, perform a point-in-time recovery on that cluster .
- Private services access gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = PASSWORD \ --region = REGION ID \ --project = PROJECT ID \ --network = NETWORK Private Service Connect gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = PASSWORD \ --region = REGION ID \ --project = PROJECT ID \ --enable-private-service-connect Replace the following: CLUSTER ID : the ID of the cluster that you are creating.
- Create a primary instance To create a primary instance, use the gcloud alloydb instances create command. gcloud alloydb instances create INSTANCE ID \ --instance-type = PRIMARY \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --allowed-psc-projects = ALLOWED PROJECT LIST Replace the following: INSTANCE ID : the ID of the instance you are creating.

