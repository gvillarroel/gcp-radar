---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.267Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Maintenance"
feature_slug: "maintenance"
latest_feature_date: "2025-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/create-instances"
keywords:
  - "maintenance"
  - "allows"
  - "operations"
  - "on"
  - "memorystore"
  - "for"
  - "valkey"
  - "instance"
---

# Maintenance

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Allows maintenance operations on a Memorystore for Valkey instance; Allows maintenance operations on a Memorystore for Valkey instance.

## Extended Definition

Allows maintenance operations on a Memorystore for Valkey instance; Allows maintenance operations on a Memorystore for Valkey instance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance](https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication)
- [https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification](https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification)
- [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)

## Supporting Pages

### About maintenance \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance](https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance)
- Source ID: `site-iam-reference`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Default maintenance windows By default, Memorystore updates your instance in the following windows according to your instance's time zone: Weekday window (Monday to Friday): 10 PM to 6 AM Weekend window: Friday, 10 PM to Monday, 6 AM Gradual deployment strategy Memorystore for Valkey performs deployments with a progressively increasing scope, and at a rate that allows for failure detection early enough to mitigate any impact and establish stability confidence.
- Default maintenance windows If you don't set a maintenance window, then Memorystore for Valkey updates your instance in one of the following windows, according to your instance's time zone: Weekday window (Monday to Friday) : 10:00 PM to 6:00 AM Weekend window : Friday, 10:00 PM to Monday, 6:00 AM Maintenance example As a developer managing a shopping cart service at a retailer, you oversee a production environment that includes a Memorystore for Valkey instance.
- You set maintenance windows for each Memorystore for Valkey instance and you have the following configuration options: Day of the week : the day when maintenance occurs Start hour : the hour that maintenance begins The maintenance window lasts for one hour.
- Memorystore for Valkey achieves zero-downtime maintenance by using the request redirection capabilities of the OSS Valkey instance protocol with the following Memorystore mechanisms: A coordinated failover without any loss of data.

### "About cross-region replication \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication)
- Source ID: `site-iam-reference`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Settings that a secondary instance copies from the primary instance When you create a secondary instance, this instance copies the following settings from the primary instance: Shard count IAM authentication mode In-transit encryption mode Instance configurations Valkey version Node type Persistence mode Cluster Mode Enabled and Cluster Mode Disabled modes Override default settings When you create a secondary instance, you can use the following settings to override the default settings: Zone distribution configuration Replica count Maintenance windows Deletion protection Automated backups Update instance settings When you update the settings for your Memorystore for Valkey instance, you can change some settings only on the primary instance.
- Shard count Instance configurations Persistence mode Valkey version Node type Configure local settings You configure the following settings locally: Deletion protection Replica count Maintenance windows Instance endpoints Automated backups Best practices for switching primary and secondary instances When you perform a switchover , we recommend that you follow the instructions in this section.
- Benefits Benefits of cross-region replication on Memorystore for Valkey include the following: Disaster recovery : If the primary instance's region becomes unavailable, then you can detach or switch over to a secondary instance in another region to serve read and write requests.
- You detach secondary instances for the following reasons: Regional migration : perform a planned migration of Memorystore for Valkey resources from their primary region to another region.

### "Instance and node specification \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification](https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification)
- Source ID: `site-docs-root`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your reader endpoint has the following behavior: Even when an instance has no read replicas provisioned, Memorystore for Valkey provisions the reader endpoint IP address to allow for the dynamic addition of read replicas.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback Instance and node specification Stay organized with collections Save and categorize content based on your preferences.
- This endpoint is reserved for Memorystore for Valkey to use to connect your client to nodes in the instance.
- This page describes the instance and node specifications for Memorystore for Valkey instances.

### Create instances \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- Source ID: `site-docs-root`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Maintenance section, select one of the following options: Default : Memorystore for Valkey updates your instance routinely to ensure that the service is reliable, performant, secure, and up-to-date.
- In the Maintenance section, select one of the following options: Default : Memorystore for Valkey updates your instance routinely to ensure that the service is reliable, performant, secure, and up-to-date.
- Click Create instance . gcloud To create a single-zone instance, run the create command: gcloud memorystore instances create INSTANCE \ --location= REGION ID \ --endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/ PROJECT ID /global/networks/ NETWORK ID ", "projectId": " PROJECT ID "}}]}]' \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --engine-version= ENGINE VERSION \ --shard-count= SHARD COUNT \ --zone-distribution-config-mode= ZONE DISTRIBUTION CONFIG MODE \ --zone-distribution-config= ZONE \ --mode= MODE Replace the following: INSTANCE is the ID of the Memorystore for Valkey instance you're creating.
- Click Create instance . gcloud To create a Memorystore for Valkey instance, run the create command: gcloud memorystore instances create INSTANCE \ --location= REGION ID \ --endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/ PROJECT ID /global/networks/ NETWORK ID ", "projectId": " PROJECT ID "}}]}]' \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --engine-version= ENGINE VERSION \ --shard-count= SHARD COUNT \ --mode= MODE Replace the following: INSTANCE is the ID of the Memorystore for Valkey instance you're creating.

