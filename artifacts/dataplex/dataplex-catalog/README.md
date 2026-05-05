# Dataplex Catalog

Product: Dataplex
Feature slug: `dataplex-catalog`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Dataplex Catalog is a platform for storing, managing, and accessing metadata.

## Lifecycle

- Latest feature date: 2024-07-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources), [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets))
- allow (evidence: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources), [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets))
- audit (evidence: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources), [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets))
- auth (evidence: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources), [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets))
- encrypt (evidence: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources), [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets))
- iam (evidence: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources), [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets))
- logging (evidence: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources), [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets))
- permission (evidence: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources), [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets))
- policy (evidence: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources), [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets))
- role (evidence: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources), [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets))
- token (evidence: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources), [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets))

## Official Evidence

- [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)
- [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles)
- [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources)
- [https://docs.cloud.google.com/dataplex/docs/search-assets](https://docs.cloud.google.com/dataplex/docs/search-assets)
