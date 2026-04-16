---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.612Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc regional availability in europe-west8"
feature_slug: "dataproc-regional-availability-in-europe-west8"
latest_feature_date: "2022-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/regions"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/scaling-factors"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/quotas"
keywords:
  - "dataproc"
  - "regional"
  - "availability"
  - "europe"
  - "west8"
  - "available"
  - "milan"
  - "italy"
---

# Dataproc regional availability in europe-west8

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc is available in the europe-west8 (Milan, Italy) region.

## Extended Definition

Dataproc is available in the europe-west8 (Milan, Italy) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/regions](https://docs.cloud.google.com/dataproc-metastore/docs/regions)
- [https://docs.cloud.google.com/dataproc-metastore/docs/scaling-factors](https://docs.cloud.google.com/dataproc-metastore/docs/scaling-factors)
- [https://docs.cloud.google.com/dataproc-metastore/docs/quotas](https://docs.cloud.google.com/dataproc-metastore/docs/quotas)

## Supporting Pages

### Dataproc Metastore regions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/regions](https://docs.cloud.google.com/dataproc-metastore/docs/regions)
- Source ID: `site-docs-root-2`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Asia Pacific Tokyo Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Sydney australia-southeast1 Melbourne australia-southeast2 Europe Region description Region name Warsaw europe-central2 Finland europe-north1 Madrid europe-southwest1 Belgium europe-west1 London europe-west2 Frankfurt europe-west3 Netherlands europe-west4 Zürich europe-west6 Milan europe-west8 Paris europe-west9 Turin europe-west12 Middle East Region description Region name Tel Aviv me-west1 Dammam me-central2 Dataproc Metastore services created in me-central2 can't be attached to Managed Service for Apache Spark clusters.
- Feature Supported Administrator Interface ✓ Artifacts Cloud Storage bucket ✓ Auxiliary versions ✓ Backup/Restore ✓ CMEK config ✓ Database type Spanner/MySQL Data Catalog sync ✓ Endpoint protocol (Thrift/gRPC) ✓ IAM policies on individual tables/databases ✓ Import/Export ✓ Kerberos ✓ Private Service Connect ✓ Release channels ✓ Scaling config ✓ VPC-SC ✓ Single region services Dataproc Metastore is available in the following regions.
- Home Documentation Data analytics Dataproc Metastore Resources Send feedback Dataproc Metastore regions Stay organized with collections Save and categorize content based on your preferences.
- When you create a Dataproc Metastore service, you permanently set a geographic location for your service to reside in, otherwise known as a region.

### Dataproc Metastore scaling factors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/scaling-factors](https://docs.cloud.google.com/dataproc-metastore/docs/scaling-factors)
- Source ID: `site-docs-root-2`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following regions are considered resource constrained regions by Dataproc Metastore: australia-southeast2 europe-southwest1 europe-west8 europe-west9 europe-west12 southamerica-west1 us-east5 us-south1 me-central1 me-central2 me-west1 What's next Create a service Release notes Version policy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Resource constrained regions Dataproc Metastore is present in several regions that have fewer resources available than others.
- Autoscaling is only available for single region Dataproc Metastore instances.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Dataproc Metastore scaling factors Stay organized with collections Save and categorize content based on your preferences.

### Quotas and limits \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/quotas](https://docs.cloud.google.com/dataproc-metastore/docs/quotas)
- Source ID: `site-docs-root-2`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- For example, you might have sufficient quota to create a new regional, external IP address in the us-central1 region, but that would not be possible if there were no available external IP addresses in that region.
- Resource availability Each quota represents a maximum number for a particular type of resource that you can create, provided that resource is available.
- Metadata storage for Dataproc Metastore services Item Quotas and limits Notes Metadata storage per Developer tier service 10 GB Metadata storage per Enterprise tier service 1 TB Queries per second for Dataproc Metastore projects Item Quotas and limits Notes Queries per second (QPS) per project 20 QPS Queries per second (QPS) per project per user 5 QPS Maintenance queries per second (QPS) per project 20 QPS The following Hive Metastore requests consume this quota: createTable createDatabase deleteTable deleteDatabase Job timeout limit for Dataproc Metastore Item Quotas and limits Notes Job timeout limit for export/backup/restore 1 hour Job timeout limit for import 3 hours Quotas management Dataproc Metastore enforces quotas on resource usage for a variety of reasons.
- Situations where resources are unavailable in an entire region are rare; however, resources within a zone can be depleted from time to time, typically without impact to the service level agreement (SLA) for the type of resource.

