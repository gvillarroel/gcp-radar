---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.867Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Organization Policy Service custom constraints for Firestore"
feature_slug: "organization-policy-service-custom-constraints-for-firestore"
latest_feature_date: "2024-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/custom-constraints"
  - "https://docs.cloud.google.com/firestore/native/docs/custom-constraints"
  - "https://docs.cloud.google.com/firestore/docs/cmek"
keywords:
  - "organization"
  - "policy"
  - "custom"
  - "constraints"
  - "firestore"
  - "resources"
  - "can"
  - "managed"
---

# Organization Policy Service custom constraints for Firestore

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore resources can be managed using Organization Policy Service custom constraints.

## Extended Definition

Firestore resources can be managed using Organization Policy Service custom constraints.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints)
- [https://docs.cloud.google.com/firestore/native/docs/custom-constraints](https://docs.cloud.google.com/firestore/native/docs/custom-constraints)
- [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)

## Supporting Pages

### "Manage Firestore resources using custom constraints \_|\_ Firestore in Native\

- URL: [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage Firestore resources using custom constraints This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: firestore.googleapis.com/Database To learn more about Organization Policy, see Custom organization policies .
- Set up the custom constraint at the organization level: gcloud org-policies set-custom-constraint deleteProtectionRequired.yaml Test the policy Try to create a database without setting the --delete-protection flag in a project in the organization: gcloud firestore database create \ --project = PROJECT ID \ --database = DATABASE ID \ The output is the following: Operation denied by custom org policies: ["customConstraints/custom.deleteProtectionRequired": "To ensure the data security, Delete Protection is required to be enabled for Firestore databases"] Test and analyze organization policy changes We recommend that you test and dry-run all changes to your organization policies, to better understand the state of your environment and how changes affect it.
- Test the custom organization policy Before you begin, you must know the following: Your organization ID Create the deleteProtectionRequired.yaml file as follows: name : organizations/ ORGANIZATION ID /customConstraints/custom.deleteProtectionRequired resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.deleteProtectionState == \"DELETE PROTECTION ENABLED\"" actionType : ALLOW displayName : Firestore Delete Protection Required description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.
- Databases must use the specified CMEK (Customer Managed Encryption Key) configuration . name : organizations/ ORGANIZATION ID /customConstraints/custom.cmekKeyNotDev resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.cmekConfig.kmsKeyName.matches('dev$')" actionType : DENY displayName : Firestore database CMEK key not dev description : Disallow the creation and updating of databases with CMEK KMS keys ending with "dev".

### "Manage Firestore resources using custom constraints \_|\_ Firestore in Native\

- URL: [https://docs.cloud.google.com/firestore/native/docs/custom-constraints](https://docs.cloud.google.com/firestore/native/docs/custom-constraints)
- Source ID: `site-docs-reference-required-4`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage Firestore resources using custom constraints This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: firestore.googleapis.com/Database To learn more about Organization Policy, see Custom organization policies .
- Set up the custom constraint at the organization level: gcloud org-policies set-custom-constraint deleteProtectionRequired.yaml Test the policy Try to create a database without setting the --delete-protection flag in a project in the organization: gcloud firestore database create \ --project = PROJECT ID \ --database = DATABASE ID \ The output is the following: Operation denied by custom org policies: ["customConstraints/custom.deleteProtectionRequired": "To ensure the data security, Delete Protection is required to be enabled for Firestore databases"] Test and analyze organization policy changes We recommend that you test and dry-run all changes to your organization policies, to better understand the state of your environment and how changes affect it.
- Test the custom organization policy Before you begin, you must know the following: Your organization ID Create the deleteProtectionRequired.yaml file as follows: name : organizations/ ORGANIZATION ID /customConstraints/custom.deleteProtectionRequired resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.deleteProtectionState == \"DELETE PROTECTION ENABLED\"" actionType : ALLOW displayName : Firestore Delete Protection Required description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.
- Databases must use the specified CMEK (Customer Managed Encryption Key) configuration . name : organizations/ ORGANIZATION ID /customConstraints/custom.cmekKeyNotDev resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.cmekConfig.kmsKeyName.matches('dev$')" actionType : DENY displayName : Firestore database CMEK key not dev description : Disallow the creation and updating of databases with CMEK KMS keys ending with "dev".

### "Customer-managed encryption keys (CMEK) \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Organization policy constraints : You can use CMEK organization policy constraints to specify encryption compliance requirements for Firestore databases in your organization.
- If the system detects that the key is unavailable, within 10 minutes any subsequent calls to the Firestore database, including reads, writes, and queries, return a FAILED PRECONDITION error with the The customer-managed encryption key required by the requested resource is not accessible message.
- For more information about CMEK in general, including when and why to enable it, see the following Cloud KMS documentation: Customer-managed encryption keys (CMEK) Best practices for using CMEKs For instructions on performing CMEK-related tasks with Firestore, see Use CMEK .
- Additionally, CMEK organization policy constraints can be used to require that any databases created by restore or clone and any Cloud Storage buckets used for Import are CMEK-protected.

