---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.284Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Memorystore for Redis region us-west3"
feature_slug: "memorystore-for-redis-region-us-west3"
latest_feature_date: "2020-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-instance-gcloud"
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform"
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-instance-console"
  - "https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis"
keywords:
  - "memorystore"
  - "for"
  - "redis"
  - "region"
  - "us"
  - "west3"
  - "adds"
  - "the"
---

# Memorystore for Redis region us-west3

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Adds the Memorystore for Redis region us-west3 in Salt Lake City.

## Extended Definition

Adds the Memorystore for Redis region us-west3 in Salt Lake City.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/create-instance-gcloud](https://docs.cloud.google.com/memorystore/docs/redis/create-instance-gcloud)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform](https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-instance-console](https://docs.cloud.google.com/memorystore/docs/redis/create-instance-console)
- [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)

## Supporting Pages

### "Quickstart: Create a Memorystore for Redis instance by using the gcloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-instance-gcloud](https://docs.cloud.google.com/memorystore/docs/redis/create-instance-gcloud)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Memorystore for Redis instance In this section, you create a 2-GB Memorystore for Redis instance that's located in the us-central1 region and is in the Basic tier.
- If you already have the Google Cloud CLI installed, then update it. gcloud components update Required roles To get the permissions that you need to create a Memorystore for Redis instance, ask your administrator to grant you the following IAM roles on the project: Cloud Memorystore Redis Admin ( roles/redis.admin ) Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) Service Account User ( roles/iam.serviceAccountUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Connect to the Memorystore for Redis instance from a Compute Engine VM You can connect to the Memorystore for Redis instance from any Compute Engine VM that uses the instance's authorized network with a supported RFC 1918 IP address .
- Create a Memorystore for Redis instance by using the gcloud CLI Learn how to create a Memorystore for Redis instance, connect to it, and then delete it.

### "Quickstart: Create a Memorystore for Redis instance by using Terraform \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform](https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform)
- Source ID: `site-docs-root-2`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add the following resource to your Terraform configuration file: resource "google redis instance" "my memorystore redis instance" { name = "myinstance" tier = "BASIC" memory size gb = 2 region = "us-central1" redis version = "REDIS 6 X" } Add the following output value to your Terraform configuration file to print the IP address of the instance.
- Create a Memorystore for Redis instance In this section, you create a 2-GB Memorystore for Redis instance that's located in the us-central1 region and is in the Basic tier.
- Required roles To get the permissions that you need to create a Memorystore for Redis instance, ask your administrator to grant you the following IAM roles on the project: Cloud Memorystore Redis Admin ( roles/redis.admin ) Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) Service Account User ( roles/iam.serviceAccountUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Connect to the Memorystore for Redis instance from a Compute Engine VM You can connect to the Memorystore for Redis instance from any Compute Engine VM that uses the instance's authorized network with a supported RFC 1918 IP address .

### "Quickstart: Create a Memorystore for Redis instance by using the Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-instance-console](https://docs.cloud.google.com/memorystore/docs/redis/create-instance-console)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Memorystore for Redis instance In this section, you create a 2-GB Memorystore for Redis instance that's located in the us-central1 region and is in the Basic tier.
- Enable the API Required roles To get the permissions that you need to create a Memorystore for Redis instance, ask your administrator to grant you the following IAM roles on the project: Cloud Memorystore Redis Admin ( roles/redis.admin ) Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) Service Account User ( roles/iam.serviceAccountUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Connect to the Memorystore for Redis instance from a Compute Engine VM You can connect to the Memorystore for Redis instance from any Compute Engine VM that uses the instance's authorized network with a supported RFC 1918 IP address .
- Create a Memorystore for Redis instance by using the Google Cloud console Learn how to create a Memorystore for Redis instance, connect to it, and then delete it.

### High availability for Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: N/A

Evidence snippets:
- Memorystore for Redis uses the asynchronous replication protocol to copy any changes that you make to the data on the primary instance to the replicas.
- A failover occurs when you perform the following tasks: Scale your instance Upgrade the Redis version of an instance Initiate a manual failover Perform a maintenance update If you implement retry logic in your application to handle connection drops because of failovers, then your instance probably won't see a significant performance impact.
- How a failover affects your application When the primary instance fails over to the replica, Memorystore for Redis drops existing connections to the primary endpoint of the instance.
- For information about the metrics that Cloud Monitoring provides for Memorystore for Redis, see Monitor Redis Instances and Supported monitoring metrics for Memorystore for Redis .

