---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.572Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Regional availability in europe-west9"
feature_slug: "regional-availability-in-europe-west9"
latest_feature_date: "2022-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/pricing"
  - "https://docs.cloud.google.com/sql/docs/availability"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/availability"
keywords:
  - "regional"
  - "availability"
  - "europe"
  - "west9"
  - "sql"
  - "server"
  - "instances"
  - "can"
---

# Regional availability in europe-west9

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for SQL Server instances can be deployed in the europe-west9 (Paris) region.

## Extended Definition

Cloud SQL for SQL Server instances can be deployed in the europe-west9 (Paris) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing)
- [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability)
- [https://docs.cloud.google.com/sql/docs/sqlserver/availability](https://docs.cloud.google.com/sql/docs/sqlserver/availability)

## Supporting Pages

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Item Price (USD) Serverless export pricing $0.01 / 1 gibibyte Note: The price per GiB is calculated based on the disk size of the offload instance, which is the same as the disk size of the primary instance.
- High availability, or regional instances, will only incur the cost for a single license for the active resource.
- HA prices are applied for instances configured for high availability, also called regional instances.
- HA prices are applied for instances configured for high availability, also called regional instances.

### "Availability in Cloud SQL \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/availability](https://docs.cloud.google.com/sql/docs/sqlserver/availability)
- Source ID: `site-docs-reference-required-4`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- For instances configured with regional availability, if the instance encounters a failure, then Cloud SQL automatically brings up the instance in the secondary zone with the same IP address and no data loss so that applications can resume operations on the database.
- These downtimes are applicable to both standalone (zonal) and high availability (regional) instances.
- Unplanned events and zonal outage For applications that require high availability, we recommend configuring the instance for regional availability, also referred to as the high availability (HA) configuration in Cloud SQL.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Availability in Cloud SQL Stay organized with collections Save and categorize content based on your preferences.

### Availability in Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- For instances configured with regional availability, if the instance encounters a failure, then Cloud SQL automatically brings up the instance in the secondary zone with the same IP address and no data loss so that applications can resume operations on the database.
- These downtimes are applicable to both standalone (zonal) and high availability (regional) instances.
- Unplanned events and zonal outage For applications that require high availability, we recommend configuring the instance for regional availability, also referred to as the high availability (HA) configuration in Cloud SQL.
- If you don't configure regional availability for an instance, then the instance is configured for zonal availability, also referred to as a standalone instance.

