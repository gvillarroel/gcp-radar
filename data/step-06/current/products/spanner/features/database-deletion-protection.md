---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.275Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Database deletion protection"
feature_slug: "database-deletion-protection"
latest_feature_date: "2023-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesPager"
keywords:
  - "protection"
  - "deletion"
  - "allowing"
  - "offers"
  - "databases"
  - "database"
  - "preview"
---

# Database deletion protection

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner offers database deletion protection in preview, allowing databases to be protected from accidental deletion.

## Extended Definition

Spanner offers database deletion protection in preview, allowing databases to be protected from accidental deletion.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesAsyncPager](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesPager](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesPager)

## Supporting Pages

### Disaster recovery overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Database deletion protection : You can protect against the accidental deletion of existing databases by users or service accounts that have the necessary Identity and Access Management (IAM) permissions to delete the database.
- Accidental database deletion : Use database deletion protection to prevent the accidental deletion of existing databases by users or service accounts that have the necessary IAM permissions.
- Point-in-time recovery (PITR) : Spanner point-in-time recovery (PITR) provides protection against logical data corruption, and accidental database deletion or writes.
- Disaster recovery techniques Spanner offers disaster recovery techniques to protect your data against the following disasters: Zonal failure : Spanner regional configuration provides automatic protection against zonal failures, ensuring that if one zone within a region fails, your application remains operational.

### "Class ListDatabasesAsyncPager (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesAsyncPager](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Version latest keyboard arrow down 3.63.0 (latest) 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.1 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.1 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.0 3.23.0 3.22.2 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.1 3.14.1 3.13.0 3.12.1 3.11.1 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.1.1 2.0.0 1.19.3 1.18.0 1.17.1 1.16.0 1.15.1 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 ListDatabasesAsyncPager ( method : typing .
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.spanner admin database v1.types.ListDatabasesRequest The initial request object. response google.cloud.spanner admin database v1.types.ListDatabasesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListDatabasesAsyncPager (3.63.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListDatabases requests and continue to iterate through the databases field on the corresponding responses.

### "Class ListDatabasesPager (3.63.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesPager](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabasesPager)
- Source ID: `site-python-reference`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Version latest keyboard arrow down 3.63.0 (latest) 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.1 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.1 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.0 3.23.0 3.22.2 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.1 3.14.1 3.13.0 3.12.1 3.11.1 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.1.1 2.0.0 1.19.3 1.18.0 1.17.1 1.16.0 1.15.1 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 ListDatabasesPager ( method : typing .
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.spanner admin database v1.types.ListDatabasesRequest The initial request object. response google.cloud.spanner admin database v1.types.ListDatabasesResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListDatabasesPager (3.63.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the iter method will make additional ListDatabases requests and continue to iterate through the databases field on the corresponding responses.

