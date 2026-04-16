---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.244Z"
product_name: "Memorystore for Memcached"
product_slug: "memorystore-for-memcached"
feature_name: "Version Upgrade"
feature_slug: "version-upgrade"
latest_feature_date: "2023-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/memcached/about-upgrading-version"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/about-auto-discovery"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/use-auto-discovery"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance"
keywords:
  - "version"
  - "upgrade"
  - "the"
  - "is"
  - "generally"
  - "available"
  - "for"
  - "memorystore"
---

# Version Upgrade

Product: Memorystore for Memcached
Coverage: MEDIUM

## Step 02 Summary

The Version Upgrade feature is generally available for Memorystore for Memcached.

## Extended Definition

The Version Upgrade feature is generally available for Memorystore for Memcached.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/memcached/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/memcached/about-upgrading-version)
- [https://docs.cloud.google.com/memorystore/docs/memcached/about-auto-discovery](https://docs.cloud.google.com/memorystore/docs/memcached/about-auto-discovery)
- [https://docs.cloud.google.com/memorystore/docs/memcached/use-auto-discovery](https://docs.cloud.google.com/memorystore/docs/memcached/use-auto-discovery)
- [https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance](https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance)

## Supporting Pages

### "About upgrading the Memcached version of an instance \_|\_ Memorystore for\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/memcached/about-upgrading-version)
- Source ID: `site-iam-reference`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how your Memorystore for Memcached instance behaves during a version upgrade operation, how an upgrade operation can affect your application, and when you should run an upgrade operation.
- Learn more about the deprecation Read the migration guide Home Documentation Databases Memorystore Memorystore for Memcached Guides Send feedback About upgrading the Memcached version of an instance Stay organized with collections Save and categorize content based on your preferences.
- Because of the short term connection break, there may be a small amount of stale or inconsistent data that didn't write or update to the cache for the short amount of time the Memcached node was unavailable.
- Best practices for upgrading an instance's Memcached version Upgrade your instance during periods of low instance traffic to minimize the impact of the full cache flush caused by the upgrade operation.

### "About the Auto Discovery service \_|\_ Memorystore for Memcached \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/about-auto-discovery](https://docs.cloud.google.com/memorystore/docs/memcached/about-auto-discovery)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String node1-ip node1-ip node1-port node2-ip node2-ip node2-port Memorystore for Memcached directly exposes the discovery endpoint, however auto discovery must also be available in your client libraries.
- Learn more about the deprecation Read the migration guide Home Documentation Databases Memorystore Memorystore for Memcached Guides Send feedback About the Auto Discovery service Stay organized with collections Save and categorize content based on your preferences.
- The discovery endpoint returns the following information: Field Description Datatype Example Configuration version ID ID that increments for each node list change Integer 9 Node List Returns a list of current nodes and their IP addresses.
- After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects.

### "Use the Auto Discovery service \_|\_ Memorystore for Memcached \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/use-auto-discovery](https://docs.cloud.google.com/memorystore/docs/memcached/use-auto-discovery)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To connect to your instance's discovery endpoint using Telnet, run the following command, replacing variables with appropriate values: telnet discovery-endpoint-ip-address discovery-endpoint-port-number Once connected to your Memorystore for Memcached instance's discovery endpoint using Telnet, run the following Memcached command to get the Configuration Version ID and Node List: config get cluster This command returns the following information in the following format: CONFIG cluster 0 [length-of-payload-in-next-two-lines] [integer] [node1-ip] [node1-ip] [node1-port][node2-ip] [node2-ip] [node2-port] \r\n END\r\n The last integer of the first line represents the number of bytes contained in the next two lines.
- Learn more about the deprecation Read the migration guide Home Documentation Databases Memorystore Memorystore for Memcached Guides Send feedback Use the Auto Discovery service Stay organized with collections Save and categorize content based on your preferences.
- After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects.
- You can also view your Memcached instance's discovery endpoint by running the following command, replacing variables with appropriate values: gcloud memcache instances describe instance-id --project= project --region= region --format="default(discoveryEndpoint)" The values for the discovery endpoint are listed under the discoveryEndpoint label: discoveryEndpoint: [IP-address]:[port-number] Connecting to your instance's discovery endpoint using Telnet Note: You should not use the discovery endpoint for Memcached data queries such as set and get .

### About maintenance on Memorystore for Memcached \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance](https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Leverage the reschedule features to test the update on a non-production instance once the update becomes available Manual maintenance While we expect that automatic maintenance via maintenance windows meets the requirements for the majority of Memorystore users, manual maintenance provides a gcloud interface for updating an instance.
- If the Memorystore for Memcached cluster is not fully updated by the scheduled maintenance time, any remaining cluster nodes are updated automatically during the maintenance window.
- FAQ The following are some frequently asked questions about the maintenance policy for Memorystore for Memcached: What is the impact of maintenance on Memcached instances?
- If you want to set an email filter for notifications, the email title is "Upcoming maintenance for your Cloud Memorystore instance [your-instance-name]" .

