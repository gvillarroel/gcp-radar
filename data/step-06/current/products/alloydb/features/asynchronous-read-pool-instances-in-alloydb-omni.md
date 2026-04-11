---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.619Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Asynchronous read pool instances in AlloyDB Omni"
feature_slug: "asynchronous-read-pool-instances-in-alloydb-omni"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "asynchronous read pool instances"
  - "async read pool"
  - "read pool scaling"
  - "AlloyDB Omni read pool"
  - "read pool instance"
  - "read pool"
---

# Asynchronous read pool instances in AlloyDB Omni

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB Omni supports creating asynchronous read pool instances.

## Extended Definition

AlloyDB Omni supports creating asynchronous read pool instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To enable managed connection pooling in your read pool instance, add the --enable-connection-pooling flag to the gcloud alloydb instances create command: gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --enable-connection-pooling To create a read pool instance for a public IP-enabled cluster, add the --assign-inbound-public-ip= ASSIGN IPV4 parameter. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --assign-inbound-public-ip = ASSIGN IPV4 Optionally, you can pass the comma separated list of CIDR blocks, such as 64.233.160.0/16 to the --authorized-external-networks parameter to set authorized external networks on your instance.
- Use the gcloud alloydb instances create command to create a read pool instance. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID Replace the following: INSTANCE ID : The ID of the instance you are creating.
- To create a read pool instance for a Private Service Connect-enabled cluster, add the --allowed-psc-projects flag to set a comma separated list of project IDs or project numbers: The comma-separated list of project IDs or project numbers that you want to allow access to the instance—for example, my-project-1 , 12345 , my-project-n .
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Create a read pool instance in a cluster Stay organized with collections Save and categorize content based on your preferences.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- You can create asynchronous read pool instances .
- These clusters let you test the majority of AlloyDB features for up to 30 days through a 8 vCPU basic primary instance along with an optional 8 vCPU read pool instance, and automatically scale storage up to 1TB.
- February 17, 2026 Feature AlloyDB performance snapshot and reports now support read pool instance nodes, providing deeper observability into read operations and replica-specific performance issues.
- August 08, 2024 Feature Enhanced Query Insights and active queries are now available in Preview for read pool instances.

