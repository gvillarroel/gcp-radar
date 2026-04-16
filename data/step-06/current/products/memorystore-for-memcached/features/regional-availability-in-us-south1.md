---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.245Z"
product_name: "Memorystore for Memcached"
product_slug: "memorystore-for-memcached"
feature_name: "Regional availability in us-south1"
feature_slug: "regional-availability-in-us-south1"
latest_feature_date: "2022-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-gcloud"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-console"
keywords:
  - "regional"
  - "availability"
  - "in"
  - "us"
  - "south1"
  - "memorystore"
  - "for"
  - "memcached"
---

# Regional availability in us-south1

Product: Memorystore for Memcached
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Memcached is available in the us-south1 (Dallas) region.

## Extended Definition

Memorystore for Memcached is available in the us-south1 (Dallas) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows)
- [https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached](https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached)
- [https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-gcloud](https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-gcloud)
- [https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-console](https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-console)

## Supporting Pages

### "Find and set maintenance windows \_|\_ Memorystore for Memcached \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows)
- Source ID: `site-iam-reference`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Find scheduled maintenance If maintenance has been scheduled for your instance, you can view it using the following instructions: Console Go to the Memorystore for Memcached page in the Google Cloud console.
- Updating individual nodes in the Memcached cluster To update individual nodes in your cluster, run the following command, replacing VARIABLES with appropriate values: gcloud beta memcache instances apply-software-update INSTANCE NAME --node-ids= NODE ID 1 , NODE ID 2 --region= REGION Updating all nodes in the Memcached cluster To update all nodes in your cluster, run the following command, replacing VARIABLES with appropriate values: gcloud beta memcache instances apply-software-update INSTANCE NAME --apply-all --region= REGION Checking for available updates and verifying node updates Signing up for maintenance notifications is the best way to learn when an update is available, but you can also use the command to below to manually check if maintenance is available.
- Learn more about the deprecation Read the migration guide Home Documentation Databases Memorystore Memorystore for Memcached Guides Send feedback Find and set maintenance windows Stay organized with collections Save and categorize content based on your preferences.
- Reschedule planned maintenance Caution: if you programmatically reschedule maintenance in bulk requests (not natively supported by Memorystore for Memcached), limit batch reschedule sizes to 100 instances per batch.

### "Configure a Memcached instance \_|\_ Memorystore for Memcached \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached](https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Gcloud Update the configuration parameters by running the following command: gcloud memcache instances update instance-id --region= region --parameters= parameter = value , parameter = value List and take note of all node IDs for your instance by running the following command: gcloud memcache instances describe instance-id --region= region --format="value(memcacheNodes.nodeId.list())" Apply the parameters one by one, or in batches, to nodes in your cluster by running the following command: Note: Updating node configurations one at a time, or in batches, helps you avoid instance unavailability and reduces data loss. gcloud memcache instances apply-parameters instance-id --region= region --node-ids= node-1-id , node-2-id Alternatively, you can apply the parameters for all nodes at once by using the following command, but we don't recommend it: gcloud memcache instances apply-parameters instance-id --region= region --apply-all You cannot simultaneously run the --parameters flag with any other flags when using the Memorystore for Memcached update command.
- Configuring parameters using gcloud during instance creation To set configuration parameters during creation, enter the following command replacing variables with appropriate values: gcloud memcache instances create instance-name --size= size --region= region --parameters= parameter = value , parameter = value You can simultaneously run the --parameters flag with all other flags when using the Memorystore for Memcached create command.
- Clearing configuration parameters to default values using the Google Cloud console Go to the Memorystore for Memcached page in the Google Cloud console.
- Memorystore for Memcached requires you to update the configurations first, and then apply the changes to the nodes in your cluster.

### "Quickstart: Create a Memorystore for Memcached instance by using the gcloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-gcloud](https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-gcloud)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you used a Debian based image to create your VM instance as described in the quickstart, install telnet using apt-get : sudo apt-get install telnet From the terminal, telnet to the IP address of one of the Memcached nodes, replacing variables with appropriate values. telnet node-ip-address 11211 If it works correctly, you should see the following output with the [bracketed-variables] replaced by your project's variables: Trying [node-ip-address]… Connected to [node-ip-address] In the telnet session, enter some Memcached commands: Enter: get greeting Result: END Enter: set greeting 1 0 11 hello world Result: STORED Enter: get greeting Result: VALUE greeting 1 11 hello world END Memorystore for Memcached supports standard open source Memcached libraries.
- Create a Memorystore for Memcached instance by using the gcloud CLI This quickstart walks you through the steps to create a Memorystore for Memcached instance, connect to the instance, send some Memcached commands, and delete the instance.
- Enable the Memorystore for Memcached API Creating a Memorystore for Memcached instance To create a Memorystore for Memcached instance: Open a terminal window.
- After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects.

### "Quickstart: Create a Memorystore for Memcached instance by using the Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-console](https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-console)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Memorystore for Memcached instance by using the Google Cloud console This quickstart walks you through the steps to create a Memorystore for Memcached instance, connect to the instance, set a value, retrieve a value, and delete the instance.
- Replace node-ip-address with the IP address of your node. telnet node-ip-address 11211 You should see the following output with the [bracketed-variables] replaced your project's variables: Trying [node-ip-address]… Connected to [node-ip-address] In the telnet session, enter some Memcached commands: Enter: get greeting Result: END Enter: set greeting 1 0 11 hello world Result: STORED Enter: get greeting Result: VALUE greeting 1 11 hello world END Memorystore for Memcached supports standard open source Memcached libraries.
- Select the configurations for your new instance on the Create a Memcached instance page in the Google Cloud console: Enter an instance ID using only lowercase letters, numbers, and hyphens.
- After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects.

