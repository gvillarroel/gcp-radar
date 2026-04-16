---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.872Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Thailand Bangkok region support"
feature_slug: "thailand-bangkok-region-support"
latest_feature_date: "2026-01-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/access-monitoring"
  - "https://docs.cloud.google.com/storage/docs/locations"
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
keywords:
  - "thailand"
  - "bangkok"
  - "region"
  - "storage"
  - "buckets"
  - "are"
  - "supported"
  - "in"
---

# Thailand Bangkok region support

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage buckets are supported in the Thailand, Bangkok region (asia-southeast3).

## Extended Definition

Cloud Storage buckets are supported in the Thailand, Bangkok region (asia-southeast3).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring)
- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)

## Supporting Pages

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/google egress bandwidth to increase Google egress for your buckets located in regions.
- Increase requests greater than 1 Tbps for egress from buckets in multi-regions are not supported.
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/rapid zonal bytes to increase storage for your buckets located in zones.
- Bandwidth monitoring metrics The following bandwidth usage data is available for monitoring: Google egress bandwidth per second per region: monitors Google egress bandwidth usage for buckets in your project that are located in regions.

### Access monitoring data in Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Open Cloud Storage Quotas and systems limits Google Egress Bandwidth per second per region Rapid Zonal Egress Bandwidth per second per zone Dualregion Google Egress Bandwidth per second per region per dualregion location MultiRegion Google Egress Bandwidth per second per region Internet Egress Bandwidth per second per region Dualregion Internet Egress Bandwidth per second per region per dualregion location Multiregion Internet Egress Bandwidth per second per region Rapid Zonal Bytes per zone You can also view the Google egress bandwidth usage of buckets in your project that are located in regions on the Cloud Storage monitoring page .
- JSON API For information on programmatically retrieving time series information for non dual-region quotas, see the ListTimeSeries command , using the following values for filter : metric.type="serviceruntime.googleapis.com/quota/rate/net usage" resource.type="consumer quota" One of the following: metric.label.quota metric="storage.googleapis.com/google egress bandwidth" metric.label.quota metric="storage.googleapis.com/rapid zonal egress bandwidth" metric.label.quota metric="storage.googleapis.com/internet egress bandwidth" metric.label.quota metric="storage.googleapis.com/multiregion google egress bandwidth" metric.label.quota metric="storage.googleapis.com/multiregion internet egress bandwidth" For information on programmatically retrieving time series information for dual-region quotas, see the ListTimeSeries command , using the following values for filter : resource.type="storage.googleapis.com/Project" One of the following: metric.type="storage.googleapis.com/quota/dualregion google egress bandwidth/usage" metric.type="storage.googleapis.com/quota/dualregion internet egress bandwidth/usage" For information about bandwidth monitoring metrics and what data they represent, see Bandwidth monitoring metrics .
- In the YAML response, look for the following: storage.googleapis.com/google egress bandwidth storage.googleapis.com/rapid zonal egress bandwidth storage.googleapis.com/dualregion google egress bandwidth storage.googleapis.com/multiregion google egress bandwidth storage.googleapis.com/internet egress bandwidth storage.googleapis.com/dualregion internet egress bandwidth storage.googleapis.com/multiregion internet egress bandwidth storage.googleapis.com/rapid zonal bytes For information about bandwidth monitoring metrics and what data they represent, see Bandwidth monitoring metrics .
- To monitor bandwidth or storage usage: Console You can view egress bandwidth usage for your project's buckets or storage usage for zonal buckets only by using the Quotas and system limits page with the appropriate metric.

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- The following regions are available: Geographic Area Region Name Region Description North America NORTHAMERICA-NORTHEAST1 1 Montréal Low CO 2 NORTHAMERICA-NORTHEAST2 Toronto Low CO 2 NORTHAMERICA-SOUTH1 1 Querétaro US-CENTRAL1 Iowa Low CO 2 US-EAST1 South Carolina US-EAST4 Northern Virginia US-EAST5 Columbus US-SOUTH1 Dallas Low CO 2 US-WEST1 Oregon Low CO 2 US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas South America SOUTHAMERICA-EAST1 São Paulo Low CO 2 SOUTHAMERICA-WEST1 Santiago Low CO 2 Europe EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 Finland Low CO 2 EUROPE-NORTH2 Stockholm Low CO 2 EUROPE-SOUTHWEST1 Madrid Low CO 2 EUROPE-WEST1 Belgium Low CO 2 EUROPE-WEST2 London Low CO 2 EUROPE-WEST3 Frankfurt EUROPE-WEST4 Netherlands Low CO 2 EUROPE-WEST6 Zürich Low CO 2 EUROPE-WEST8 Milan EUROPE-WEST9 Paris Low CO 2 EUROPE-WEST10 Berlin EUROPE-WEST12 Turin Asia ASIA-EAST1 Taiwan ASIA-EAST2 Hong Kong ASIA-NORTHEAST1 Tokyo ASIA-NORTHEAST2 1 Osaka ASIA-NORTHEAST3 Seoul ASIA-SOUTHEAST1 Singapore India ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi Indonesia ASIA-SOUTHEAST2 Jakarta Thailand ASIA-SOUTHEAST3 Bangkok Middle East ME-CENTRAL1 Doha ME-CENTRAL2 Dammam, Saudi Arabia ME-WEST1 Tel Aviv Australia AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne Africa AFRICA-SOUTH1 Johannesburg 1 Montréal, Osaka, and Querétaro each have three zones housed in one or two physical data centers.
- Lowest storage price No replication charges No outbound data transfer charges when reading data inside the same region Highest storage price Replication charges apply on write No outbound data transfer charges when reading data within either region Higher storage price than regions, but lower than dual-regions Replication charges apply on write Outbound data transfer charges always apply when reading data Location recommendations Requirements Recommended bucket location Workload examples Ultra-low latency Ultra-high bandwidth and I/O High performance Zone 1 Artificial Intelligence (AI) and Machine Learning (ML) High-performance computing Data-intensive analytics Optimized latency and bandwidth Lowest data storage cost Cross-zone redundancy Region 2 Analytics Backup and archive Optimized latency and bandwidth Cross-region redundancy, with precise control of the locations where copies of data are stored Dual-region 3 Analytics Backup and archive Disaster recovery Cross-geography data access Cross-region redundancy Multi-region Content serving Zonal locations for buckets are only available through Rapid Bucket .
- If the regions you want to pair are not available as a dual-region, consider creating a separate bucket in each region and using Storage Transfer Service Event-driven transfers to keep the buckets in sync.
- The following types of dual-regions are supported in Cloud Storage: A predefined dual-region is identified by a unique location code and represents two specific regions.

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Client ( extra headers = { "x-custom-header" : "value" } ) Ruby require "google/cloud/storage" storage = Google :: Cloud :: Storage . new storage . add custom headers { 'X-Custom-Header' = > 'value' } Accessing buckets with a CORS configuration If you have set a CORS configuration on your bucket and notice that incoming requests from client browsers are failing, try the following troubleshooting steps: Review the CORS configuration on the target bucket.
- The following is an example of a valid URL: curl -X PATCH -H "Content-Type: application/json" -d '{"edition config": "STANDARD" }' -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://storage.googleapis.com/v2/projects/my-project/locations/global/storageIntelligence?updateMask=edition config" 400: Invalid Argument - Empty Update Mask Issue : When you configure or manage Storage Intelligence for a resource, you might receive this error and the message Empty UPDATE MASK in the request.
- Solution : To create managed folders , make sure the following requirements are met: You have an IAM role that contains the storage.managedfolders.create permission, such as the Storage Object Admin ( roles/storage.objectAdmin ) role.
- Because Google services are exposed using DNS names that map to a large number of IP addresses that can change over time, configuring your proxy based on a one-time lookup may lead to failures to connect to Cloud Storage.

