---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.831Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL for PostgreSQL general availability"
feature_slug: "cloud-sql-for-postgresql-general-availability"
latest_feature_date: "2018-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-ha"
  - "https://docs.cloud.google.com/sql/docs/postgres/availability"
  - "https://docs.cloud.google.com/sql/docs/availability"
keywords:
  - "became"
  - "availability"
  - "generally"
  - "available"
---

# Cloud SQL for PostgreSQL general availability

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for PostgreSQL became generally available.

## Extended Definition

Cloud SQL for PostgreSQL became generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/configure-ha](https://docs.cloud.google.com/sql/docs/postgres/configure-ha)
- [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability)
- [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability)

## Supporting Pages

### "Enable and disable high availability \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-ha](https://docs.cloud.google.com/sql/docs/postgres/configure-ha)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- You are returned to the instance page for the primary instance while the instance is updated. gcloud Create the regional instance: gcloud sql instances create REGIONAL INSTANCE NAME \ --availability-type = REGIONAL \ --database-version = DATABASE VERSION \ --cpu = NUMBER CPUS \ --memory = MEMORY SIZE For a complete list of available parameters, see the gcloud sql instances create reference page.
- Confirm the following high availability settings are displayed in the Configuration section: Highly available (regional) Located in shows the current primary zone of the instance. gcloud gcloud sql instances describe INSTANCE NAME The output indicates availabilityType is REGIONAL .
- In the Choose region and zonal availability section, select Multiple zones (Highly available) .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Configure the instance to be a regional, high availability instance: Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the instance that you're configuring for high availability HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": {"availabilityType": "REGIONAL" } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Availability in Cloud SQL \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability)
- Source ID: `site-iam-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- What's next Learn about high availability (HA) Enable or disable high availability (HA) Read about disaster recovery (DR) View all the Google Cloud services available in locations worldwide .
- Cloud SQL high availability is available for both Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition.
- For instances configured with regional availability, if the instance encounters a failure, then Cloud SQL automatically brings up the instance in the secondary zone with the same IP address and no data loss so that applications can resume operations on the database.
- Unplanned events and zonal outage For applications that require high availability, we recommend configuring the instance for regional availability, also referred to as the high availability (HA) configuration in Cloud SQL.

### Availability in Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- What's next Learn about high availability (HA) Enable or disable high availability (HA) Read about disaster recovery (DR) View all the Google Cloud services available in locations worldwide .
- Cloud SQL high availability is available for both Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition.
- For instances configured with regional availability, if the instance encounters a failure, then Cloud SQL automatically brings up the instance in the secondary zone with the same IP address and no data loss so that applications can resume operations on the database.
- Unplanned events and zonal outage For applications that require high availability, we recommend configuring the instance for regional availability, also referred to as the high availability (HA) configuration in Cloud SQL.

