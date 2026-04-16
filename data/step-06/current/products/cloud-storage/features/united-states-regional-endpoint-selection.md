---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.898Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "United States regional endpoint selection"
feature_slug: "united-states-regional-endpoint-selection"
latest_feature_date: "2024-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/locations"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client"
  - "https://docs.cloud.google.com/storage/docs/ai-zones"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
keywords:
  - "united"
  - "states"
  - "regional"
  - "endpoint"
  - "selection"
  - "endpoints"
  - "specifying"
  - "regions"
---

# United States regional endpoint selection

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Regional endpoints support specifying United States regions for Cloud Storage access.

## Extended Definition

Regional endpoints support specifying United States regions for Cloud Storage access.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client)
- [https://docs.cloud.google.com/storage/docs/ai-zones](https://docs.cloud.google.com/storage/docs/ai-zones)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)

## Supporting Pages

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Multi-regions Multi-Region Name Multi-Region Description ASIA Data centers in Asia, excluding Hong Kong and Indonesia EU Data centers within member states of the European Union US Data centers in the United States Object data added to a bucket in the EU multi-region is not stored in the EUROPE-WEST2 (London) or EUROPE-WEST6 (Zürich) regions.
- A multi-region is a large geographic area that contains two or more geographic regions, such as the United States ( US ).
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.
- The following regions are available: Geographic Area Region Name Region Description North America NORTHAMERICA-NORTHEAST1 1 Montréal Low CO 2 NORTHAMERICA-NORTHEAST2 Toronto Low CO 2 NORTHAMERICA-SOUTH1 1 Querétaro US-CENTRAL1 Iowa Low CO 2 US-EAST1 South Carolina US-EAST4 Northern Virginia US-EAST5 Columbus US-SOUTH1 Dallas Low CO 2 US-WEST1 Oregon Low CO 2 US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas South America SOUTHAMERICA-EAST1 São Paulo Low CO 2 SOUTHAMERICA-WEST1 Santiago Low CO 2 Europe EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 Finland Low CO 2 EUROPE-NORTH2 Stockholm Low CO 2 EUROPE-SOUTHWEST1 Madrid Low CO 2 EUROPE-WEST1 Belgium Low CO 2 EUROPE-WEST2 London Low CO 2 EUROPE-WEST3 Frankfurt EUROPE-WEST4 Netherlands Low CO 2 EUROPE-WEST6 Zürich Low CO 2 EUROPE-WEST8 Milan EUROPE-WEST9 Paris Low CO 2 EUROPE-WEST10 Berlin EUROPE-WEST12 Turin Asia ASIA-EAST1 Taiwan ASIA-EAST2 Hong Kong ASIA-NORTHEAST1 Tokyo ASIA-NORTHEAST2 1 Osaka ASIA-NORTHEAST3 Seoul ASIA-SOUTHEAST1 Singapore India ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi Indonesia ASIA-SOUTHEAST2 Jakarta Thailand ASIA-SOUTHEAST3 Bangkok Middle East ME-CENTRAL1 Doha ME-CENTRAL2 Dammam, Saudi Arabia ME-WEST1 Tel Aviv Australia AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne Africa AFRICA-SOUTH1 Johannesburg 1 Montréal, Osaka, and Querétaro each have three zones housed in one or two physical data centers.

### Class Client (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client)
- Source ID: `site-python-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- See: https://cloud.google.com/storage/docs/request-endpoints#cname scheme str (Optional) If bucket bound hostname is passed as a bare hostname, use this value as a scheme. https will work only when using a CDN.
- A non-default universe domain or api endpoint should be set through client options. use auth w custom endpoint bool (Optional) Whether authentication is required under custom endpoints.
- Dual-regions require exactly 2 regional locations.
- 3.10.0 (latest) 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.1 3.3.1 3.2.0 3.1.1 3.0.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.0 1.44.0 1.43.0 1.42.3 1.41.1 1.40.0 1.39.0 1.38.0 1.37.1 1.36.2 1.35.1 1.34.0 1.33.0 1.32.0 1.31.2 1.30.0 1.29.0 1.28.1 1.27.0 1.26.0 1.25.0 1.24.1 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 Client ( project = object , credentials = None , http = None , client info = None , client options = None , use auth w custom endpoint = True , extra headers = {}, , api key = None ) Client to bundle configuration needed for API requests.

### AI zones \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/ai-zones](https://docs.cloud.google.com/storage/docs/ai-zones)
- Source ID: `site-iam-reference`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Geographic area Parent region AI zone United States us-central1 us-central1-ai1a United States us-south1 us-south1-ai1b Considerations You can access Google Cloud products in a Google Cloud region from the region's AI zone.
- Storage architecture recommendations We recommend that you use a tiered storage architecture to balance cost, durability, and performance: Cold storage layer : use regional Cloud Storage buckets in standard zones for persistent, highly durable storage (the "source of truth") of your training datasets and model checkpoints.
- Create a Rapid Cache instance in an AI zone for the regional source bucket that contains the training datasets or models that you want to serve.
- Available AI zones The following table shows the AI zones and their parent Google Cloud regions.

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- See: https://cloud.google.com/storage/docs/request-endpoints#cname scheme str (Optional) If bucket bound hostname is passed as a bare hostname, use this value as the scheme. https will work only when using a CDN.
- See https://cloud.google.com/storage/docs/json api/v1/buckets and https://cloud.google.com/storage/docs/locations Returns None if the property has not been set before creation, if the bucket's resource has not been loaded from the server, or if the bucket is not a dual-regions bucket. default event based hold Scalar property getter. default kms key name Retrieve / set default KMS encryption key for objects in the bucket.
- Returns Type Description Bucket The bucket object created. generate signed url generate signed url ( expiration = None , api access endpoint = None , method = "GET" , headers = None , query parameters = None , client = None , credentials = None , version = None , virtual hosted style = False , bucket bound hostname = None , scheme = "http" , ) Generates a signed URL for this bucket.
- E.g.: >> policies = bucket.cors >> policies.append({'origin': '/foo', ...}) >> policies[1]['maxAgeSeconds'] = 3600 >> del policies[0] >> bucket.cors = policies >> bucket.update() Returns Type Description list of dictionaries A sequence of mappings describing each CORS policy. data locations Retrieve the list of regional locations for custom dual-region buckets.

