---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.281Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Redis AUTH"
feature_slug: "redis-auth"
latest_feature_date: "2020-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-redis-auth"
  - "https://docs.cloud.google.com/memorystore/docs/redis/auth-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/access-control"
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances"
keywords:
  - "redis"
  - "auth"
  - "memorystore"
  - "for"
  - "supports"
---

# Redis AUTH

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Redis supports Redis AUTH; Memorystore for Redis supports Redis AUTH.

## Extended Definition

Memorystore for Redis supports Redis AUTH; Memorystore for Redis supports Redis AUTH.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-redis-auth](https://docs.cloud.google.com/memorystore/docs/redis/about-redis-auth)
- [https://docs.cloud.google.com/memorystore/docs/redis/auth-overview](https://docs.cloud.google.com/memorystore/docs/redis/auth-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/access-control](https://docs.cloud.google.com/memorystore/docs/redis/access-control)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)

## Supporting Pages

### About Redis AUTH \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-redis-auth](https://docs.cloud.google.com/memorystore/docs/redis/about-redis-auth)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About Redis AUTH Stay organized with collections Save and categorize content based on your preferences.
- Note: If you are looking for the Memorystore for Redis Cluster documentation, see About IAM authentication .
- For Memorystore for Redis, the AUTH string is automatically generated after AUTH is enabled on the instance.
- AUTH behavior Using AUTH is optional for Memorystore for Redis.

### About Redis AUTH \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/auth-overview](https://docs.cloud.google.com/memorystore/docs/redis/auth-overview)
- Source ID: `site-iam-reference`
- Final score: 262
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About Redis AUTH Stay organized with collections Save and categorize content based on your preferences.
- Note: If you are looking for the Memorystore for Redis Cluster documentation, see About IAM authentication .
- For Memorystore for Redis, the AUTH string is automatically generated after AUTH is enabled on the instance.
- AUTH behavior Using AUTH is optional for Memorystore for Redis.

### Access control with IAM \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/access-control](https://docs.cloud.google.com/memorystore/docs/redis/access-control)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions and their roles The following table lists each permission that Memorystore for Redis supports and the Memorystore for Redis roles that include it: Permission Redis role Basic role redis.instances.list Redis Admin Redis Editor Redis Viewer Reader redis.instances.get Redis Admin Redis Editor Redis Viewer Reader redis.instances.create Redis Admin Writer redis.instances.update Redis Admin Redis Editor Writer redis.instances.updateAuth Redis Admin Writer redis.instances.getAuthString Redis Admin Writer redis.instances.delete Redis Admin Writer redis.instances.upgrade Redis Admin Writer redis.instances.import Redis Admin Writer redis.instances.export Redis Admin Writer redis.locations.list Redis Admin Redis Editor Redis Viewer Reader redis.locations.get Redis Admin Redis Editor Redis Viewer Reader redis.operations.list Redis Admin Redis Editor Redis Viewer Reader redis.operations.get Redis Admin Redis Editor Redis Viewer Reader redis.operations.delete Redis Admin Writer Custom roles If the predefined roles do not address your unique business requirements, you can define your own custom roles with permissions that you specify.
- The following table lists the permissions that the user invoking a gcloud command must have for each gcloud redis subcommand: Command Required permissions gcloud redis instances auth redis.instances.updateAuth redis.instances.getAuthString gcloud redis instances create redis.instances.get redis.instances.create gcloud redis instances delete redis.instances.delete gcloud redis instances update redis.instances.get redis.instances.update gcloud redis instances list redis.instances.list gcloud redis instances describe redis.instances.get gcloud redis instances import redis.instances.import gcloud redis instances export redis.instances.export gcloud redis instances upgrade redis.instances.upgrade gcloud redis operations list redis.operations.list gcloud redis operations describe redis.operations.get gcloud redis regions list redis.locations.list gcloud redis regions describe redis.locations.get gcloud redis zones list redis.locations.list Required permissions for API methods The following table lists the permissions that the caller must have to call each method in the Memorystore for Redis API or to perform tasks using Google Cloud tools that use the API (such as the Google Cloud console or the gcloud command line tool): Note : To call a method, in addition to the permissions in the following table, you must also have the required scopes.
- Permissions needed Create a Memorystore instance with Redis AUTH enabled Enable / disable AUTH on an existing Redis instance View the AUTH string View whether AUTH is enabled / disabled for a Redis instance redis.instances.create ✓ X X X redis.instances.update X ✓ X X redis.instances.get X X X ✓ redis.instances.updateAuth ✓ ✓ X X redis.instances.getAuthString X X ✓ X In-transit encryption permissions The table below shows permissions required for enabling and managing In-transit encryption for Memorystore for Redis.
- View your instance's service account To view the service account for your instance, run the following command and make a note of the service account listed under persistenceIamIdentity : gcloud redis instances describe [ INSTANCE ID ] --region=[REGION] Redis AUTH permissions The following table shows the minimum permissions a user needs to complete some basic Memorystore for Redis AUTH tasks.

### "Create and manage Redis instances \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Memorystore for Redis Click the ID of an instance about which you want to view summary information. gcloud To view summary information about an instance, use the gcloud redis instances describe command: gcloud redis instances describe INSTANCE ID \ --region= REGION ID Make the following replacements: INSTANCE ID : the ID of the instance about which you want to view summary information REGION ID : the region where the instance is located For example: gcloud redis instances describe my-instance \ --region=us-central1 Edit instances To edit an instance: Console Go to the Memorystore for Redis page in the Google Cloud console.
- To choose one of the available OSS Redis versions for Memorystore for Redis, use the --redis-version flag with one of the following values: redis 7 2 redis 7 0 (Default) redis 6 X redis 5 0 redis 4 0 redis 3 2 For example: gcloud redis instances create myinstance --size=5 --region=us-central1 \ --zone=us-central1-a --redis-version=redis 6 X Networking You can create Redis instances using one of two connection modes : --connect-mode=PRIVATE SERVICE ACCESS or --connect-mode=DIRECT PEERING .
- The following command creates a Standard Tier instance: gcloud redis instances create INSTANCE ID --size= SIZE --zone= ZONE --alternative-zone= ALTERNATIVE ZONE --tier= STANDARD For example: gcloud redis instances create myinstance --size=5 --region=us-central1 --tier=standard For more information about using gcloud with Memorystore for Redis, see the Google Cloud CLI reference page .
- For example: gcloud redis instances create myinstance --region=us-central1 --size=1 --connect-mode=DIRECT PEERING --network=default --reserved-ip-range=10.0.0.0/24 Custom ranges with private services access If you only have one IP address range allocated for your private services access connection , that range is used by default for Memorystore instance creation.

