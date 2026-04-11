---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.735Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Regional availability: Dammam"
feature_slug: "regional-availability-dammam"
latest_feature_date: "2023-09-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/availability-durability"
  - "https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist"
  - "https://docs.cloud.google.com/storage/docs/storage-classes"
keywords:
  - "regional"
  - "availability"
  - "dammam"
  - "storage"
  - "is"
  - "available"
  - "in"
  - "the"
---

# Regional availability: Dammam

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Cloud Storage is available in the Dammam region (me-central2).

## Extended Definition

Cloud Storage is available in the Dammam region (me-central2).

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/availability-durability](https://docs.cloud.google.com/storage/docs/availability-durability)
- [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist)
- [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)

## Supporting Pages

### "Data availability and durability \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/availability-durability](https://docs.cloud.google.com/storage/docs/availability-durability)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the unlikely event of an availability zone outage, such as one caused by a natural disaster, regional buckets remain available, with no need to change storage paths.
- If one of the regions in which an object is stored becomes unavailable after the object is successfully uploaded but prior to it being replicated for georedundancy, Cloud Storage's strong consistency ensures that stale versions of the object won't be served and that subsequent overwrites aren't reverted when the region becomes available again.
- In the unlikely event of a region-wide outage, such as one caused by a natural disaster, dual-region and multi-region buckets remain available, with no need to change storage paths.
- However, because data is not redundant across availability zones, it may become unavailable or permanently lost in the event of an availability zone failure.

### "Analyze your stored data with Gemini Cloud Assist \_|\_ Cloud Storage \_\

- URL: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- The following data is not available in Storage Insights datasets, meaning that Gemini Cloud Assist lacks the proper context to respond to prompts relating to that data: Specific cost data, for example: "how much does my bucket cost per month".
- You can ask prompts such as the following: Prompts related to usage and cost savings: "5 largest buckets without Object Lifecycle Management" "5 largest buckets without Autoclass enabled" Prompts related to security and compliance: "5 largest buckets without object versioning enabled" "5 largest objects with a retention expiration date within the next 30 days" Prompts related to data discovery: "Buckets with a high volume of small files (each under 1 MB)" "Objects in Standard storage class smaller than 50 MB" Before you begin In order to use Gemini Cloud Assist for general prompts related to Cloud Storage, you must first set up Gemini Cloud Assist, including getting required roles.
- To get the permissions that you need to get insights on bucket and object metadata, ask your administrator to grant you the following IAM roles on the project, folder, or organization that contains the datasets you want to analyze: BigQuery Job User ( roles/bigquery.jobUser ) BigQuery Data Viewer ( roles/bigquery.dataViewer ) Storage Insights Viewer ( roles/storageinsights.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- When you use Gemini Cloud Assist alone without a Storage Intelligence subscription, you can ask prompts about how Cloud Storage generally works, such as the following: "How do I transition objects from one storage class to another?" "How do I enable soft delete on a bucket?" When you enable a Storage Intelligence subscription , you can also ask prompts related to cost saving opportunities, security and compliance, and data discovery.

### Storage classes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Storage Class Name for APIs and CLIs Minimum storage duration Retrieval fees Typical monthly availability 1 Rapid storage 2 RAPID None None 99.95% in zones Standard storage STANDARD None None 99.99% in multi-regions and dual-regions 99.99% in regions Nearline storage NEARLINE 30 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions Coldline storage COLDLINE 90 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions Archive storage ARCHIVE 365 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions 1 See the class descriptions for the availability SLA for each storage class.
- Availability The availability of Nearline storage data is: Location type Availability SLA 1 Typical monthly availability multi-region 99.9% 99.95% dual-region 99.9% 99.95% region 99.0% 99.9% 1 The availability SLA is the monthly uptime percentage backed by the Cloud Storage SLA .
- Availability The availability of Coldline storage data is: Location type Availability SLA 1 Typical monthly availability multi-region 99.9% 99.95% dual-region 99.9% 99.95% region 99.0% 99.9% 1 The availability SLA is the monthly uptime percentage backed by the Cloud Storage SLA .
- Unlike the "coldest" storage services offered by other Cloud providers, your data is available within milliseconds, not hours or days.

