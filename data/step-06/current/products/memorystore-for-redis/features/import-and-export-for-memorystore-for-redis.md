---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.285Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Import and export for Memorystore for Redis"
feature_slug: "import-and-export-for-memorystore-for-redis"
latest_feature_date: "2020-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-importing-exporting"
  - "https://docs.cloud.google.com/memorystore/docs/redis/troubleshoot-issues"
  - "https://docs.cloud.google.com/memorystore/docs/redis/export-data"
  - "https://docs.cloud.google.com/memorystore/docs/redis/access-control"
keywords:
  - "import"
  - "and"
  - "export"
  - "for"
  - "memorystore"
  - "redis"
  - "supports"
  - "importing"
---

# Import and export for Memorystore for Redis

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Supports importing and exporting Redis data for Memorystore for Redis; Supports importing and exporting Redis data for Memorystore for Redis.

## Extended Definition

Supports importing and exporting Redis data for Memorystore for Redis; Supports importing and exporting Redis data for Memorystore for Redis.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-importing-exporting](https://docs.cloud.google.com/memorystore/docs/redis/about-importing-exporting)
- [https://docs.cloud.google.com/memorystore/docs/redis/troubleshoot-issues](https://docs.cloud.google.com/memorystore/docs/redis/troubleshoot-issues)
- [https://docs.cloud.google.com/memorystore/docs/redis/export-data](https://docs.cloud.google.com/memorystore/docs/redis/export-data)
- [https://docs.cloud.google.com/memorystore/docs/redis/access-control](https://docs.cloud.google.com/memorystore/docs/redis/access-control)

## Supporting Pages

### "About importing and exporting data \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-importing-exporting](https://docs.cloud.google.com/memorystore/docs/redis/about-importing-exporting)
- Source ID: `site-docs-root-2`
- Final score: 359
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About importing and exporting data Stay organized with collections Save and categorize content based on your preferences.
- Exporting and importing to instances with read replicas For all Redis instances, including read replica enabled instances, data is exported from the primary node.
- The import and export feature uses the native RDB snapshot feature of Redis to import data into or export data out of a Memorystore for Redis instance.
- For instructions on how to import and export RDB files, see Importing data to a Redis instance and Exporting data from a Redis instance .

### Troubleshoot issues \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/troubleshoot-issues](https://docs.cloud.google.com/memorystore/docs/redis/troubleshoot-issues)
- Source ID: `site-docs-root`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Troubleshooting import and export issues This section outlines some common issues you may run into when using import and export for Memorystore for Redis.
- Troubleshooting Google Cloud CLI issues If you run into an issue where a gcloud CLI command is unavailable, or if the command behaves differently from how it is documented, try updating the gcloud CLI: gcloud components update Stopping all ongoing commands and connections for a Redis instance As Memorystore for Redis is a Google managed product, there are some commands that are blocked in your Redis instance in order to provide a safe and reliable environment.
- If you use both the --reserved-ip-range parameter and the --connect-mode=private-service-access parameter, then you receive the following error message: Reserved IP range is not supported for --connect-mode private services access You can't use both parameters at the same time because Memorystore for Redis doesn't support the --reserved-ip-range parameter for the private services access connection mode.
- If your Memorystore for Redis instance experiences high latency or unresponsiveness, then these issues might be caused by using the following resource-intensive Redis commands: KEYS LRANGE EVAL HGETALL ZRANGE These commands can put heavy CPU pressure on your instance.

### "Export data from a Redis instance \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/export-data](https://docs.cloud.google.com/memorystore/docs/redis/export-data)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Gcloud Export an RDB file to the Cloud Storage bucket referred to in step one of Before you begin by executing the following command: gcloud redis instances export gs://[BUCKET NAME]/[FILE NAME].rdb [INSTANCE ID] --region=[REGION] --project=[PROJECT ID] Stop an ongoing export operation Console Go to the Memorystore for Redis page in the Google Cloud console.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Export data from a Redis instance Stay organized with collections Save and categorize content based on your preferences.
- Export an RDB backup file to a Cloud Storage bucket Console Go to the Memorystore for Redis page in the Google Cloud console.
- Follow the instructions on this page to export an RDB backup of your Memorystore for Redis instance.

### Access control with IAM \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/access-control](https://docs.cloud.google.com/memorystore/docs/redis/access-control)
- Source ID: `site-docs-root`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions and their roles The following table lists each permission that Memorystore for Redis supports and the Memorystore for Redis roles that include it: Permission Redis role Basic role redis.instances.list Redis Admin Redis Editor Redis Viewer Reader redis.instances.get Redis Admin Redis Editor Redis Viewer Reader redis.instances.create Redis Admin Writer redis.instances.update Redis Admin Redis Editor Writer redis.instances.updateAuth Redis Admin Writer redis.instances.getAuthString Redis Admin Writer redis.instances.delete Redis Admin Writer redis.instances.upgrade Redis Admin Writer redis.instances.import Redis Admin Writer redis.instances.export Redis Admin Writer redis.locations.list Redis Admin Redis Editor Redis Viewer Reader redis.locations.get Redis Admin Redis Editor Redis Viewer Reader redis.operations.list Redis Admin Redis Editor Redis Viewer Reader redis.operations.get Redis Admin Redis Editor Redis Viewer Reader redis.operations.delete Redis Admin Writer Custom roles If the predefined roles do not address your unique business requirements, you can define your own custom roles with permissions that you specify.
- Permissions needed Create a Memorystore instance with a maintenance policy enabled Create or modify maintenance policies on an existing Memorystore instance View the maintenance policy settings Reschedule maintenance redis.instances.create ✓ X X X redis.instances.update X ✓ X X redis.instances.get X X ✓ X redis.instances.rescheduleMaintenance X X X ✓ Required permissions for import and export Using custom roles for importing and exporting requires two separate custom roles.
- The following table lists the permissions that the user invoking a gcloud command must have for each gcloud redis subcommand: Command Required permissions gcloud redis instances auth redis.instances.updateAuth redis.instances.getAuthString gcloud redis instances create redis.instances.get redis.instances.create gcloud redis instances delete redis.instances.delete gcloud redis instances update redis.instances.get redis.instances.update gcloud redis instances list redis.instances.list gcloud redis instances describe redis.instances.get gcloud redis instances import redis.instances.import gcloud redis instances export redis.instances.export gcloud redis instances upgrade redis.instances.upgrade gcloud redis operations list redis.operations.list gcloud redis operations describe redis.operations.get gcloud redis regions list redis.locations.list gcloud redis regions describe redis.locations.get gcloud redis zones list redis.locations.list Required permissions for API methods The following table lists the permissions that the caller must have to call each method in the Memorystore for Redis API or to perform tasks using Google Cloud tools that use the API (such as the Google Cloud console or the gcloud command line tool): Note : To call a method, in addition to the permissions in the following table, you must also have the required scopes.
- The following table provides the other permissions required for some common tasks in the Google Cloud console: Task Required additional permissions Display the instance listing page redis.instances.get redis.instances.list Create and edit an instance redis.instances.create redis.instances.get redis.instances.list compute.networks.list Delete an instance redis.instances.delete redis.instances.get redis.instances.list Connect to an instance from Cloud Shell redis.instances.get redis.instances.list redis.instances.update View instance information redis.instances.get monitoring.timeSeries.list Import and export RDB backup files redis.instances.import redis.instances.export Upgrade the Redis version of an instance redis.instances.upgrade Required permissions for gcloud commands To enable a user to work with Memorystore for Redis using gcloud commands, the user's role must include the resourcemanager.projects.get and the resourcemanager.projects.list permission.

