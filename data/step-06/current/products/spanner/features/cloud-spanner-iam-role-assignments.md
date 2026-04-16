---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.366Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner IAM role assignments"
feature_slug: "cloud-spanner-iam-role-assignments"
latest_feature_date: "2017-05-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
  - "https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview"
keywords:
  - "assignments"
  - "applying"
  - "roles"
  - "role"
  - "databases"
  - "supports"
---

# Cloud Spanner IAM role assignments

Product: Spanner
Coverage: LOW

## Step 02 Summary

Cloud Spanner supports applying IAM roles to databases, instances, and projects.

## Extended Definition

Cloud Spanner supports applying IAM roles to databases, instances, and projects.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- [https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview](https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Spanner is able to access the key on your behalf after you grant the Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) role to a Google-managed Spanner service account .
- Service agents that use the keys for encrypt and decrypt operations are created if they don't already exist and are granted the required Identity and Access Management (IAM) roles.
- Home Documentation Databases Spanner Guides Send feedback Customer-managed encryption keys (CMEK) overview Stay organized with collections Save and categorize content based on your preferences.
- With CMEK Without CMEK Enable CMEK To use CMEK for Spanner databases, you must create a new database and specify the Cloud KMS key at the time of database creation .

### Restore overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview](https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- The following roles also have access to Spanner restore operations: spanner.admin : has full access to restore.
- This role has complete access to all Spanner resources. owner : has full access to restore. editor : has full access to restore. viewer : has access to view restore and restore operations.
- Home Documentation Databases Spanner Guides Send feedback Restore overview Stay organized with collections Save and categorize content based on your preferences.
- You won't be able to restore another backup to the instance until one of the ten restored databases transitions to the READY OPTIMIZING or READY state.

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.

