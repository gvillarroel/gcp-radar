---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.861Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Database clone"
feature_slug: "database-clone"
latest_feature_date: "2025-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/manage-databases"
  - "https://docs.cloud.google.com/firestore/docs/cmek"
  - "https://docs.cloud.google.com/firestore/native/docs/cmek"
keywords:
  - "database"
  - "clone"
  - "firestore"
  - "cloning"
  - "available"
  - "availability"
  - "level"
  - "databases"
---

# Database clone

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore database cloning is available at the General Availability level; Firestore databases can be cloned into a new database from a selected timestamp.

## Extended Definition

Firestore database cloning is available at the General Availability level; Firestore databases can be cloned into a new database from a selected timestamp.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases)
- [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)
- [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek)

## Supporting Pages

### "Create and manage databases \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to configure CMEK encryption for the cloned database: gcloud firestore databases clone \ --source-database = 'projects/example-project/databases/(default)' \ --snapshot-time = '2025-06-01T10:20:00.00Z' \ --destination-database = 'example-dest-db' \ --encryption-type = 'customer-managed-encryption' \ --kms-key-name = 'projects/example-project/locations/us-central1/keyRings/example-key-ring/cryptoKeys/example-key' Configure per-database access permissions You can use Identity and Access Management Conditions to configure access permissions on a per-database level.
- Example: gcloud firestore databases clone \ --source-database = 'projects/example-project/databases/(default)' \ --snapshot-time = '2025-06-01T10:20:00.00Z' \ --destination-database = 'example-dest-db' If you want to bind to some tags while cloning a database, use the previous command with the --tags flag, which is an optional list of tags KEY=VALUE pairs to bind.
- If you want to specify a different encryption configuration for the cloned database, you can use Google Cloud CLI commands. gcloud Use the gcloud firestore databases clone command to clone a database: gcloud firestore databases clone \ --source-database = ' SOURCE DATABASE ' \ --snapshot-time = ' PITR TIMESTAMP ' \ --destination-database = ' DESTINATION DATABASE ID ' Replace the following: SOURCE DATABASE : the database name of an existing database that you want to clone.
- Example: gcloud firestore databases clone \ --source-database = 'projects/example-project/databases/(default)' \ --snapshot-time = '2025-06-01T10:20:00.00Z' \ --destination-database = 'example-dest-db' By default, the cloned database will have the same encryption configuration as the source database.

### "Customer-managed encryption keys (CMEK) \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CMEK and key availability When keys are unavailable or disabled, be aware of the following behaviors that can occur in CMEK-enabled databases: You can change Firestore point-in-time recovery (PITR) settings on a CMEK-enabled database even if the key is unavailable because PITR settings are database metadata, which isn't encrypted by CMEK.
- For more information about cloning a CMEK-protected Firestore database, see Clone a CMEK-protected database .
- For more information about cloning a Firestore database, see Clone a database .
- If the system detects that the key is unavailable, within 10 minutes any subsequent calls to the Firestore database, including reads, writes, and queries, return a FAILED PRECONDITION error with the The customer-managed encryption key required by the requested resource is not accessible message.

### "Customer-managed encryption keys (CMEK) \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek)
- Source ID: `site-docs-reference-required-4`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CMEK and key availability When keys are unavailable or disabled, be aware of the following behaviors that can occur in CMEK-enabled databases: You can change Firestore point-in-time recovery (PITR) settings on a CMEK-enabled database even if the key is unavailable because PITR settings are database metadata, which isn't encrypted by CMEK.
- For more information about cloning a CMEK-protected Firestore database, see Clone a CMEK-protected database .
- For more information about cloning a Firestore database, see Clone a database .
- If the system detects that the key is unavailable, within 10 minutes any subsequent calls to the Firestore database, including reads, writes, and queries, return a FAILED PRECONDITION error with the The customer-managed encryption key required by the requested resource is not accessible message.

