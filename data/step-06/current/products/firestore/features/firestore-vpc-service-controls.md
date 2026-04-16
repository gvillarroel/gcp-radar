---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.891Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore VPC Service Controls"
feature_slug: "firestore-vpc-service-controls"
latest_feature_date: "2022-06-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import"
  - "https://docs.cloud.google.com/firestore/docs/manage-data/export-import"
  - "https://docs.cloud.google.com/firestore/docs/cmek"
keywords:
  - "firestore"
  - "vpc"
  - "controls"
  - "can"
  - "protected"
---

# Firestore VPC Service Controls

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore can be protected with VPC Service Controls; Firestore can be protected with VPC Service Controls.

## Extended Definition

Firestore can be protected with VPC Service Controls; Firestore can be protected with VPC Service Controls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- [https://docs.cloud.google.com/firestore/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/docs/manage-data/export-import)
- [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)

## Supporting Pages

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use VPC Service Controls, you must use the service-specific Firestore service agent to fully protect import and export operations.
- Note: If you use VPC Service Controls, you must use the Firestore service agent to fully protect import and export operations.
- Note: Exporting a collection group won't automatically export subcollections of the collections within the group. gcloud firestore export gs:// [BUCKET NAME] \ --collection-ids= [COLLECTION GROUP ID 1] , [COLLECTION GROUP ID 2] \ --database= [DATABASE] For example, you can design a restaurants collection in the foo database to include multiple subcollections, such as ratings , reviews , or outlets .
- In the navigation menu, click Import/Export . gcloud Use the operations list command to see all running and recently completed export and import operations: gcloud firestore operations list Check operation status Google Cloud Console You can view the status of a recent export or import operation in the Import/Export page of the Google Cloud console.

### "Exporting and importing data \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/docs/manage-data/export-import)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- If you use VPC Service Controls, you must use the service-specific Firestore service agent to fully protect import and export operations.
- Note: If you use VPC Service Controls, you must use the Firestore service agent to fully protect import and export operations.
- Note: Exporting a collection group won't automatically export subcollections of the collections within the group. gcloud firestore export gs:// [BUCKET NAME] \ --collection-ids= [COLLECTION GROUP ID 1] , [COLLECTION GROUP ID 2] \ --database= [DATABASE] For example, you can design a restaurants collection in the foo database to include multiple subcollections, such as ratings , reviews , or outlets .
- In the navigation menu, click Import/Export . gcloud Use the operations list command to see all running and recently completed export and import operations: gcloud firestore operations list Check operation status Google Cloud Console You can view the status of a recent export or import operation in the Import/Export page of the Google Cloud console.

### "Customer-managed encryption keys (CMEK) \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instead of Google managing the encryption keys that protect your data, your Firestore database is protected using a key that you control and manage in Cloud Key Management Service (Cloud KMS) .
- Appropriate security controls are required for any application accessing Firestore data to make sure that data is only accessed by those with proper authorization.
- When a CMEK-protected Firestore database creates a backup, it encrypts the backup with the primary key version used at the time of backup creation.
- What is protected with CMEK When you create a Firestore CMEK-protected database, your Cloud KMS key is used to protect data at rest.

