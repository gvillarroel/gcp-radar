---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.683Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Multiple API rate quota categories"
feature_slug: "multiple-api-rate-quota-categories"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/quotas"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api"
keywords:
  - "multiple"
  - "api"
  - "rate"
  - "quota"
  - "categories"
  - "sql"
  - "supports"
  - "of"
---

# Multiple API rate quota categories

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL supports multiple categories of API rate quotas enforced per minute, project, region, and user.

## Extended Definition

Cloud SQL supports multiple categories of API rate quotas enforced per minute, project, region, and user.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- August 03, 2023 Feature Cloud SQL now supports multiple categories of API rate quotas.
- December 17, 2019 Feature Cloud SQL now supports VPC Service Controls, which let you add a service perimeter around the Cloud SQL Admin API and host project for Cloud SQL instances to reduce the risk of data exfiltration.
- December 05, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 03, 2024 Feature You can now use the Network Connectivity Center hub to propagate Private Service Connect endpoints of Cloud SQL instances in a VPC network.
- Specifically, the user has the CONTROL permission on the tempdb database, and can do many operations, including (and not limited to) the following: ALTER DATABASE [ tempdb ] ADD FILE ALTER DATABASE [ tempdb ] REMOVE March 29, 2021 Feature You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory.

### Quotas and limits \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Rate quotas reset after a time interval that's specific to Cloud SQL (for example, the number of API requests per minute).
- Each rate quota corresponds to all requests for a category of one or more Cloud SQL Admin API methods.
- Rate quotas Cloud SQL supports rate quotas, which are also known as rate limits or API quotas.
- GenerateEphermalCertificates 1000 Get sqladmin.googleapis.com/get The number of requests that are made per minute per user per region to use the APIs in this category.

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- You are also using the Cloud SQL Admin API, indirectly, when you use any of the following ways of administering instances: gcloud CLI , which contains a command-line interface you can use to work with your instances.
- When you send requests directly to the Cloud SQL REST API, you must create the correct form of the request, authorize the request as an authenticated user, and process any responses returned.
- If you are just starting out with Cloud SQL, we recommend that you start with one of these tools first before working with the REST API directly.
- For more examples of using the APIs, see the page for the request in the Cloud SQL Admin API Reference .

