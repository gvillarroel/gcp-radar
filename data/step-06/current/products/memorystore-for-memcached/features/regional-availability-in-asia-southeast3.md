---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.242Z"
product_name: "Memorystore for Memcached"
product_slug: "memorystore-for-memcached"
feature_name: "Regional availability in asia-southeast3"
feature_slug: "regional-availability-in-asia-southeast3"
latest_feature_date: "2026-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/instance-node-properties"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/monitor-instances"
keywords:
  - "regional"
  - "availability"
  - "in"
  - "asia"
  - "southeast3"
  - "memorystore"
  - "for"
  - "memcached"
---

# Regional availability in asia-southeast3

Product: Memorystore for Memcached
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Memcached supports deployment in the asia-southeast3 (Bangkok) region.

## Extended Definition

Memorystore for Memcached supports deployment in the asia-southeast3 (Bangkok) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows)
- [https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached](https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached)
- [https://docs.cloud.google.com/memorystore/docs/memcached/instance-node-properties](https://docs.cloud.google.com/memorystore/docs/memcached/instance-node-properties)
- [https://docs.cloud.google.com/memorystore/docs/memcached/monitor-instances](https://docs.cloud.google.com/memorystore/docs/memcached/monitor-instances)

## Supporting Pages

### "Find and set maintenance windows \_|\_ Memorystore for Memcached \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows)
- Source ID: `site-iam-reference`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn more about the deprecation Read the migration guide Home Documentation Databases Memorystore Memorystore for Memcached Guides Send feedback Find and set maintenance windows Stay organized with collections Save and categorize content based on your preferences.
- Reschedule planned maintenance Caution: if you programmatically reschedule maintenance in bulk requests (not natively supported by Memorystore for Memcached), limit batch reschedule sizes to 100 instances per batch.
- Find scheduled maintenance If maintenance has been scheduled for your instance, you can view it using the following instructions: Console Go to the Memorystore for Memcached page in the Google Cloud console.
- After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects.

### "Configure a Memcached instance \_|\_ Memorystore for Memcached \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached](https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Gcloud Update the configuration parameters by running the following command: gcloud memcache instances update instance-id --region= region --parameters= parameter = value , parameter = value List and take note of all node IDs for your instance by running the following command: gcloud memcache instances describe instance-id --region= region --format="value(memcacheNodes.nodeId.list())" Apply the parameters one by one, or in batches, to nodes in your cluster by running the following command: Note: Updating node configurations one at a time, or in batches, helps you avoid instance unavailability and reduces data loss. gcloud memcache instances apply-parameters instance-id --region= region --node-ids= node-1-id , node-2-id Alternatively, you can apply the parameters for all nodes at once by using the following command, but we don't recommend it: gcloud memcache instances apply-parameters instance-id --region= region --apply-all You cannot simultaneously run the --parameters flag with any other flags when using the Memorystore for Memcached update command.
- Configuring parameters using gcloud during instance creation To set configuration parameters during creation, enter the following command replacing variables with appropriate values: gcloud memcache instances create instance-name --size= size --region= region --parameters= parameter = value , parameter = value You can simultaneously run the --parameters flag with all other flags when using the Memorystore for Memcached create command.
- Learn more about the deprecation Read the migration guide Home Documentation Databases Memorystore Memorystore for Memcached Guides Send feedback Configure a Memcached instance Stay organized with collections Save and categorize content based on your preferences.
- Clearing configuration parameters to default values using the Google Cloud console Go to the Memorystore for Memcached page in the Google Cloud console.

### "Instance and node properties \_|\_ Memorystore for Memcached \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/instance-node-properties](https://docs.cloud.google.com/memorystore/docs/memcached/instance-node-properties)
- Source ID: `site-iam-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Minimum vCPU according to region Nodes in your Memcached instances have a minimum vCPU count of 2, except for the following regions whose minimum is 1 vCPU: Region Name Region Description Minimum vCPU count asia-east1 Taiwan 1 asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-south2 Delhi asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne europe-central2 Warsaw europe-north1 Finland europe-west1 Belgium europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zurich northamerica-northeast1 Montreal northamerica-northeast2 Toronto southamerica-east1 São Paulo us-central1 Iowa us-east1 South Carolina us-east4 Northern Virginia us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City us-west4 Las Vegas Output fields The following tables list the output properties of instances and nodes that you can query to learn about an instance or node.
- Learn more about the deprecation Read the migration guide Home Documentation Databases Memorystore Memorystore for Memcached Guides Send feedback Instance and node properties Stay organized with collections Save and categorize content based on your preferences.
- After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects.
- This page lists the properties of Memorystore for Memcached instances and nodes, as well as the possible values for those properties.

### "Monitor Memcached instances \_|\_ Memorystore for Memcached \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/monitor-instances](https://docs.cloud.google.com/memorystore/docs/memcached/monitor-instances)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn more about the deprecation Read the migration guide Home Documentation Databases Memorystore Memorystore for Memcached Guides Send feedback Monitor Memcached instances Stay organized with collections Save and categorize content based on your preferences.
- In addition to the types of monitoring covered here, Memorystore for Memcached is compatible with open source Memcached, so you can use existing Memcached monitoring tools from Compute Engine VMs to monitor your instances.
- Monitoring instances in the Google Cloud console To view an instance's core metrics: Go to the Memorystore for Memcached page in the Google Cloud console.
- After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects.

