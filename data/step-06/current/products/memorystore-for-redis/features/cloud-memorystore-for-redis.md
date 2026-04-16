---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.288Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Cloud Memorystore for Redis"
feature_slug: "cloud-memorystore-for-redis"
latest_feature_date: "2018-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis"
  - "https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform"
keywords:
  - "memorystore"
  - "for"
  - "redis"
  - "reached"
  - "general"
  - "availability"
  - "launched"
  - "in"
---

# Cloud Memorystore for Redis

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Cloud Memorystore for Redis reached general availability; Cloud Memorystore for Redis launched in beta.

## Extended Definition

Cloud Memorystore for Redis reached general availability; Cloud Memorystore for Redis launched in beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- [https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform](https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform)

## Supporting Pages

### High availability for Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- Source ID: `site-docs-root`
- Final score: 292
- Re-rank relevance: N/A

Evidence snippets:
- Memorystore for Redis provides high availability by replicating a primary instance to one or more replicas.
- This page describes high availability (HA) for Memorystore for Redis instances in the Standard Tier.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback High availability for Memorystore for Redis Stay organized with collections Save and categorize content based on your preferences.
- How a failover affects your application When the primary instance fails over to the replica, Memorystore for Redis drops existing connections to the primary endpoint of the instance.

### "Find and set maintenance windows \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- Reschedule planned maintenance Caution: if you programmatically reschedule maintenance in bulk requests (not natively supported by Memorystore for Redis), limit batch reschedule sizes to 100 instances per batch.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Find and set maintenance windows Stay organized with collections Save and categorize content based on your preferences.
- Find scheduled maintenance If maintenance has been scheduled for your instance, you can view it using the following instructions: Console Go to the Memorystore for Redis page in the Google Cloud console.
- Set a preferred window for maintenance on an instance Console Go to the Memorystore for Redis page in the Google Cloud console.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- With Memorystore for Redis, you can easily achieve your latency and throughput targets by scaling up your Redis instances with minimal impact to your application's availability.
- In general, the Redis functionality that Memorystore for Redis instances provide is the same as the functionality that locally-hosted Redis instances provide.
- High availability: Memorystore for Redis instances in the Standard Tier are replicated across zones, monitored for health and have fast automatic failover.

### "Quickstart: Create a Memorystore for Redis instance by using Terraform \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform](https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to create a Memorystore for Redis instance, ask your administrator to grant you the following IAM roles on the project: Cloud Memorystore Redis Admin ( roles/redis.admin ) Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) Service Account User ( roles/iam.serviceAccountUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Add the following resource to your Terraform configuration file: resource "google redis instance" "my memorystore redis instance" { name = "myinstance" tier = "BASIC" memory size gb = 2 region = "us-central1" redis version = "REDIS 6 X" } Add the following output value to your Terraform configuration file to print the IP address of the instance.
- Connect to the Memorystore for Redis instance from a Compute Engine VM You can connect to the Memorystore for Redis instance from any Compute Engine VM that uses the instance's authorized network with a supported RFC 1918 IP address .
- You need this address to connect to your instance. output "host" { description = "The IP address of the instance." value = "${google redis instance.my memorystore redis instance.host}" } Run the terraform init command.

