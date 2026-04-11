---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.666Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Stockholm Sweden region support"
feature_slug: "stockholm-sweden-region-support"
latest_feature_date: "2025-03-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-monitoring"
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage"
keywords:
  - "stockholm"
  - "sweden"
  - "region"
  - "storage"
  - "buckets"
  - "are"
  - "supported"
  - "in"
---

# Stockholm Sweden region support

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Cloud Storage buckets are supported in the Stockholm, Sweden region (europe-north2).

## Extended Definition

Cloud Storage buckets are supported in the Stockholm, Sweden region (europe-north2).

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring)
- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)

## Supporting Pages

### Access monitoring data in Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Open Cloud Storage Quotas and systems limits Google Egress Bandwidth per second per region Rapid Zonal Egress Bandwidth per second per zone Dualregion Google Egress Bandwidth per second per region per dualregion location MultiRegion Google Egress Bandwidth per second per region Internet Egress Bandwidth per second per region Dualregion Internet Egress Bandwidth per second per region per dualregion location Multiregion Internet Egress Bandwidth per second per region Rapid Zonal Bytes per zone You can also view the Google egress bandwidth usage of buckets in your project that are located in regions on the Cloud Storage monitoring page .
- JSON API For information on programmatically retrieving time series information for non dual-region quotas, see the ListTimeSeries command , using the following values for filter : metric.type="serviceruntime.googleapis.com/quota/rate/net usage" resource.type="consumer quota" One of the following: metric.label.quota metric="storage.googleapis.com/google egress bandwidth" metric.label.quota metric="storage.googleapis.com/rapid zonal egress bandwidth" metric.label.quota metric="storage.googleapis.com/internet egress bandwidth" metric.label.quota metric="storage.googleapis.com/multiregion google egress bandwidth" metric.label.quota metric="storage.googleapis.com/multiregion internet egress bandwidth" For information on programmatically retrieving time series information for dual-region quotas, see the ListTimeSeries command , using the following values for filter : resource.type="storage.googleapis.com/Project" One of the following: metric.type="storage.googleapis.com/quota/dualregion google egress bandwidth/usage" metric.type="storage.googleapis.com/quota/dualregion internet egress bandwidth/usage" For information about bandwidth monitoring metrics and what data they represent, see Bandwidth monitoring metrics .
- In the YAML response, look for the following: storage.googleapis.com/google egress bandwidth storage.googleapis.com/rapid zonal egress bandwidth storage.googleapis.com/dualregion google egress bandwidth storage.googleapis.com/multiregion google egress bandwidth storage.googleapis.com/internet egress bandwidth storage.googleapis.com/dualregion internet egress bandwidth storage.googleapis.com/multiregion internet egress bandwidth storage.googleapis.com/rapid zonal bytes For information about bandwidth monitoring metrics and what data they represent, see Bandwidth monitoring metrics .
- To monitor bandwidth or storage usage: Console You can view egress bandwidth usage for your project's buckets or storage usage for zonal buckets only by using the Quotas and system limits page with the appropriate metric.

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/google egress bandwidth to increase Google egress for your buckets located in regions.
- Increase requests greater than 1 Tbps for egress from buckets in multi-regions are not supported.
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/rapid zonal bytes to increase storage for your buckets located in zones.
- Bandwidth monitoring metrics The following bandwidth usage data is available for monitoring: Google egress bandwidth per second per region: monitors Google egress bandwidth usage for buckets in your project that are located in regions.

### Shim for Running gcloud storage \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- In both the shim and unshimmed cases, the old key is maintained. rm $folder$ delete markers are not supported. rpo Works as expected. setmeta Does not throw an error if no headers are changed. stat Includes a field "Storage class update time:" which may throw off tabbing. ubla Works as expected. versioning Works as expected. web The get subcommand has different JSON spacing and doesn't print an informational message if no configuration is found.
- The all-version flag ( -A ) silently enables sequential execution rather than raising an error. defacl The ch subcommand is not supported. defstorageclass Works as expected. hash In gsutil, the -m and -c flags that affect which hashes are displayed are ignored for cloud objects.
- Boto Configuration Configuration found in the boto file is mapped 1:1 to gcloud environment variables where appropriate. [Credentials] aws access key id: AWS ACCESS KEY ID aws secret access key: AWS SECRET ACCESS KEY use client certificate: CLOUDSDK CONTEXT AWARE USE CLIENT CERTIFICATE [Boto] proxy: CLOUDSDK PROXY ADDRESS proxy type: CLOUDSDK PROXY TYPE proxy port: CLOUDSDK PROXY PORT proxy user: CLOUDSDK PROXY USERNAME proxy pass: CLOUDSDK PROXY PASSWORD proxy rdns: CLOUDSDK PROXY RDNS http socket timeout: CLOUDSDK CORE HTTP TIMEOUT ca certificates file: CLOUDSDK CORE CUSTOM CA CERTS FILE max retry delay: CLOUDSDK STORAGE BASE RETRY DELAY num retries: CLOUDSDK STORAGE MAX RETRIES [GSUtil] check hashes: CLOUDSDK STORAGE CHECK HASHES default project id: CLOUDSDK CORE PROJECT disable analytics prompt: CLOUDSDK CORE DISABLE USAGE REPORTING use magicfile: CLOUDSDK STORAGE USE MAGICFILE parallel composite upload threshold: CLOUDSDK STORAGE PARALLEL COMPOSITE UPLOAD THRESHOLD resumable threshold: CLOUDSDK STORAGE RESUMABLE THRESHOLD [OAuth2] client id: CLOUDSDK AUTH CLIENT ID client secret: CLOUDSDK AUTH CLIENT SECRET provider authorization uri: CLOUDSDK AUTH AUTH HOST provider token uri: CLOUDSDK AUTH TOKEN HOST General Compatibility Notes Due to its compatibility across all major platforms, multiprocessing is enabled for all commands by default (equivalent to the -m option always being included in gsutil).
- This will be updated as new commands are supported by both gcloud storage and the shim.

