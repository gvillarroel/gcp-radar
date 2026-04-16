---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.306Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner regional instance support in Milan (europe-west8)"
feature_slug: "spanner-regional-instance-support-in-milan-europe-west8"
latest_feature_date: "2022-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
  - "https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview"
keywords:
  - "west8"
  - "milan"
  - "regional"
  - "instance"
  - "europe"
  - "supports"
---

# Spanner regional instance support in Milan (europe-west8)

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports creating regional instances in the Milan (europe-west8) region.

## Extended Definition

Spanner now supports creating regional instances in the Milan (europe-west8) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- For example, if your Spanner database is in the multi-region instance configuration nam3 , with instance partitions located in europe-west1 and europe-west2 , then you must create Cloud KMS keys in the following regions: us-east4 (part of nam3 ) us-east1 (part of nam3 ) us-central1 (part of nam3 ) europe-west1 (location of instance partition) europe-west2 (location of instance partition) For more information, see Secure a database with CMEK .
- Multiple regional keys support: you can create multiple regional (single-region) Cloud KMS keys to protect a database in a Spanner custom, dual-region, or multi-region instance configuration .
- When using geo-partitioning, you must use a regional Cloud KMS key for each instance replica locatoin, including those in the instance partition configuration.
- Each regional Cloud KMS key must be located in the same region as the corresponding Spanner instance replica or instance partition location.

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- For example, to create a free trial instance named trial-instance with the display name Trial Instance using the regional instance configuration regional-us-east5 , run the following: gcloud spanner instances create trial - instance -- config = regional - us - east5 \ -- instance - type = free - instance -- description = "Trial Instance" Note: Use the instance ID, not the display name, when referring to an instance in gcloud CLI commands.
- Note: A Spanner free trial instance supports Standard edition features, and Enterprise edition features, such as KNN vector distance functions , full-text search , and Spanner Graph .
- You can create a free trial instance in any of the Spanner regional instance configurations : INSTANCE DESCRIPTION : the name to display for the instance in the Google Cloud console.
- For a full list of all available instance configurations, see Regional, dual-region, and multi-region configurations .

### Disaster recovery overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Disaster recovery techniques Spanner offers disaster recovery techniques to protect your data against the following disasters: Zonal failure : Spanner regional configuration provides automatic protection against zonal failures, ensuring that if one zone within a region fails, your application remains operational.
- Spanner offers the following features to help ensure high data availability: Multi-regional configurations : Spanner can maintain replicas of your data in separate zones within a single region or multiple regions to ensure data availability even if a zone or region fails.
- Large data exports : Consider using Spanner Data Boost for Spanner for large data exports to offload compute resources from your instance and avoid negative impact on your transaction performance.
- Regional failure : If your application requires even higher data availability and protection against regional failures, use multi-region configurations that offer 99.999% availability.

