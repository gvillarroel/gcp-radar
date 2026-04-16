---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.345Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Zurich (europe-west6) regional Spanner instance availability"
feature_slug: "zurich-europe-west6-regional-spanner-instance-availability"
latest_feature_date: "2019-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/compute-capacity"
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
keywords:
  - "west6"
  - "zurich"
  - "availability"
  - "instances"
  - "regional"
  - "instance"
  - "europe"
---

# Zurich (europe-west6) regional Spanner instance availability

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner regional instances can be created in the Zurich region (europe-west6).

## Extended Definition

Spanner regional instances can be created in the Zurich region (europe-west6).

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)

## Supporting Pages

### "Compute capacity, nodes and processing units \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- As detailed in Quotas & limits , to provide high availability and low latency when accessing a database, Spanner uses the compute capacity of an instance as a basis for determining storage limits, using the following guidelines: For instances smaller than 1 node (1000 PUs), Spanner allots 1024.0 GiB of data for every 100 PUs in the database.
- Compute capacity and instance configurations As described in Regional, dual-region, and multi-region configurations , Spanner distributes an instance across zones of one or more regions to provide high performance and high availability.
- When removing compute capacity, monitor your CPU utilization and request latencies in Cloud Monitoring to ensure CPU utilization stays under 65% for regional instances and 45% for each region in multi-region instances.
- This diagram depicts two instances that have regional configurations: Instance-A shows an instance of 1000 PUs (1 node) with its compute capacity distribution consuming server resources in each of the three zones.

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- For example, if your Spanner database is in the multi-region instance configuration nam3 , with instance partitions located in europe-west1 and europe-west2 , then you must create Cloud KMS keys in the following regions: us-east4 (part of nam3 ) us-east1 (part of nam3 ) us-central1 (part of nam3 ) europe-west1 (location of instance partition) europe-west2 (location of instance partition) For more information, see Secure a database with CMEK .
- If you're using multiple regional keys to protect a Spanner database, only those replicas that are protected by a key residing in the unavailable regional Cloud KMS are affected by the unavailability.
- Multiple regional keys support: you can create multiple regional (single-region) Cloud KMS keys to protect a database in a Spanner custom, dual-region, or multi-region instance configuration .
- When using geo-partitioning, you must use a regional Cloud KMS key for each instance replica locatoin, including those in the instance partition configuration.

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- For example, to create a free trial instance named trial-instance with the display name Trial Instance using the regional instance configuration regional-us-east5 , run the following: gcloud spanner instances create trial - instance -- config = regional - us - east5 \ -- instance - type = free - instance -- description = "Trial Instance" Note: Use the instance ID, not the display name, when referring to an instance in gcloud CLI commands.
- Click Save to upgrade your free trial instance. gcloud To upgrade your free trial instance to a paid Enterprise edition instance with the same instance configuration, run the following gcloud spanner instances update command: gcloud spanner instances update INSTANCE ID -- instance - type = provisioned Delete the instance Warning: Deleting an instance permanently removes the instance and all its databases.
- For more information, see Free trial instances overview . gcloud To create a free trial instance, use the gcloud spanner instances create command. gcloud spanner instances create INSTANCE ID \ -- instance - type = free - instance -- config = INSTANCE CONFIG \ -- description = INSTANCE DESCRIPTION Replace the following: INSTANCE ID : a permanent identifier that is unique within your Google Cloud project.
- Click Delete . gcloud To delete your free trial instance, use the following gcloud spanner instances delete command: gcloud spanner instances delete INSTANCE ID What's next Learn more about Spanner free trial instances .

