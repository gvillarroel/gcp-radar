---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.903Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Predefined dual-region pairing: Frankfurt and Zurich"
feature_slug: "predefined-dual-region-pairing-frankfurt-and-zurich"
latest_feature_date: "2024-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/locations"
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/availability-durability"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
keywords:
  - "predefined"
  - "dual"
  - "region"
  - "pairing"
  - "frankfurt"
  - "and"
  - "zurich"
  - "storage"
---

# Predefined dual-region pairing: Frankfurt and Zurich

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage supports Frankfurt and Zurich as a predefined dual-region bucket pairing.

## Extended Definition

Cloud Storage supports Frankfurt and Zurich as a predefined dual-region bucket pairing.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/availability-durability](https://docs.cloud.google.com/storage/docs/availability-durability)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)

## Supporting Pages

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- The following regions are available when creating a configurable dual-region bucket: Location code Region Name Region Description ASIA ASIA-EAST1 Taiwan ASIA-SOUTHEAST1 Singapore AU AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne CA NORTHAMERICA-NORTHEAST1 Montréal NORTHAMERICA-NORTHEAST2 Toronto DE EUROPE-WEST3 Frankfurt EUROPE-WEST10 Berlin EU EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 1 Finland EUROPE-SOUTHWEST1 Madrid EUROPE-WEST1 Belgium EUROPE-WEST3 5 Frankfurt EUROPE-WEST4 1 Netherlands EUROPE-WEST8 4 Milan EUROPE-WEST9 Paris EUROPE-WEST10 5 Berlin EUROPE-WEST12 4 Turin IN ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi IT EUROPE-WEST8 Milan EUROPE-WEST12 Turin US US-CENTRAL1 2 Iowa US-EAST1 2 South Carolina US-EAST4 Northern Virginia US-EAST5 3 Columbus US-SOUTH1 Dallas US-WEST1 Oregon US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas 1 The EUROPE-NORTH1 and EUROPE-WEST4 dual-region pairing is only available as a predefined dual-region .
- The following options are available when creating a bucket in a predefined dual-region: Predefined dual-region name Region Name Region Description ASIA1 ASIA-NORTHEAST1 + ASIA-NORTHEAST2 Tokyo + Osaka EUR4 EUROPE-NORTH1 + EUROPE-WEST4 Finland + Netherlands EUR5 EUROPE-WEST1 + EUROPE-WEST2 Belgium + London EUR7 EUROPE-WEST2 + EUROPE-WEST3 London + Frankfurt EUR8 EUROPE-WEST3 + EUROPE-WEST6 Frankfurt + Zürich NAM4 US-CENTRAL1 + US-EAST1 Iowa + South Carolina Request routing for dual-region buckets When you access data in a dual-region bucket from a resource that's located in one of the regions of the dual-region, the request is routed to that same region to provide the best performance.
- The following types of dual-regions are supported in Cloud Storage: A predefined dual-region is identified by a unique location code and represents two specific regions.
- 2 The US-CENTRAL1 and US-EAST1 dual-region pairing is only available as a predefined dual-region .

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Monitoring alerts You can use Monitoring alerting policies to inform you when metrics such as storage.googleapis.com/google egress bandwidth , storage.googleapis.com/dualregion google egress bandwidth , and storage.googleapis.com/multiregion google egress bandwidth approach a quota limit.
- For the storage.googleapis.com/dualregion google egress bandwidth and storage.googleapis.com/dualregion internet egress bandwidth metrics, there must be non-zero historical usage of the metric before you can request an increase.
- Use storage.googleapis.com/dualregion internet egress bandwidth to increase Internet egress for your buckets located in dual-regions.
- Use storage.googleapis.com/dualregion google egress bandwidth to increase Google egress for your buckets located in dual-regions.

### "Data availability and durability \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/availability-durability](https://docs.cloud.google.com/storage/docs/availability-durability)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- To achieve redundancy between a region pairing not available as a dual-region, consider creating a separate bucket for each region and using Storage Transfer Service event-driven transfers or cross-bucket replication to keep the buckets in sync.
- Redundancy across regions While traditional storage models often rely on an active-passive approach with "primary" and "secondary" geographic locations, Cloud Storage dual-regions and multi-regions provide an active-active architecture based on a single bucket with redundancy across regions.
- The following sections cover how Cloud Storage redundantly stores data, the default replication behavior for dual-regions and multi-regions, and advanced features like turbo replication and cross-bucket replication.
- In the unlikely event of a region-wide outage, such as one caused by a natural disaster, dual-region and multi-region buckets remain available, with no need to change storage paths.

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- See https://cloud.google.com/storage/docs/json api/v1/buckets and https://cloud.google.com/storage/docs/locations Returns None if the property has not been set before creation, if the bucket's resource has not been loaded from the server, or if the bucket is not a dual-regions bucket. default event based hold Scalar property getter. default kms key name Retrieve / set default KMS encryption key for objects in the bucket.
- Returns Type Description str or NoneType If set, one of NEARLINE STORAGE CLASS , COLDLINE STORAGE CLASS , ARCHIVE STORAGE CLASS , STANDARD STORAGE CLASS , MULTI REGIONAL LEGACY STORAGE CLASS , REGIONAL LEGACY STORAGE CLASS , or DURABLE REDUCED AVAILABILITY LEGACY STORAGE CLASS , else None . time created Retrieve the timestamp at which the bucket was created.
- To update the bucket's IP filter, create and assign a new IPFilter object to this property and then call xref patch. .. code-block:: python from google.cloud.storage.ip filter import ( IPFilter, PublicNetworkSource, ) ip filter = IPFilter() ip filter.mode = "Enabled" ip filter.public network source = PublicNetworkSource( allowed ip cidr ranges=["203.0.113.5/32"] ) bucket.ip filter = ip filter bucket.patch() :setter: Set the IP Filter configuration for this bucket. :getter: Gets the IP Filter configuration for this bucket.
- For such buckets, iterate over the blobs returned by list blobs and call make public for each blob. move blob move blob ( blob , new name , client = None , if generation match = None , if generation not match = None , if metageneration match = None , if metageneration not match = None , if source generation match = None , if source generation not match = None , if source metageneration match = None , if source metageneration not match = None , timeout = 60 , retry = google . cloud . storage . retry .

