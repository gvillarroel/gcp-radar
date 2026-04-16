---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.738Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Default CMEK key"
feature_slug: "default-cmek-key"
latest_feature_date: "2024-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/cmek"
  - "https://docs.cloud.google.com/dataform/docs/create-repository"
  - "https://docs.cloud.google.com/dataform/docs/repositories"
  - "https://docs.cloud.google.com/dataform/docs/create-tables"
keywords:
  - "default"
  - "cmek"
  - "key"
  - "lets"
  - "project"
  - "encrypt"
  - "multiple"
  - "dataform"
---

# Default CMEK key

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

A default CMEK key lets a project encrypt multiple Dataform repositories with the same customer-managed encryption key.

## Extended Definition

A default CMEK key lets a project encrypt multiple Dataform repositories with the same customer-managed encryption key.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/cmek](https://docs.cloud.google.com/dataform/docs/cmek)
- [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories)
- [https://docs.cloud.google.com/dataform/docs/create-tables](https://docs.cloud.google.com/dataform/docs/create-tables)

## Supporting Pages

### Use customer-managed encryption keys \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/cmek](https://docs.cloud.google.com/dataform/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set a default Dataform CMEK key Setting a default Dataform CMEK key for your Google Cloud project lets you encrypt multiple repositories with the same CMEK key.
- Use Dataform default CMEK keys To encrypt multiple Dataform repositories with the same CMEK key, you can set a default Dataform CMEK key for your Google Cloud project.
- Click Save to apply the role to the service account. gcloud You can use the Google Cloud CLI to assign the role: gcloud kms keys add-iam-policy-binding \ --project= KMS PROJECT ID \ --member serviceAccount: SERVICE AGENT \ --role roles/cloudkms.cryptoKeyEncrypterDecrypter \ --location= KMS KEY LOCATION \ --keyring= KMS KEY RING \ KMS KEY Replace the following: KMS PROJECT ID : the ID of your Google Cloud project that is running Cloud KMS SERVICE AGENT : the email address of your default Dataform service agent KMS KEY LOCATION : the location name of your Cloud KMS key KMS KEY RING : the key ring name of your Cloud KMS key KMS KEY : the key name of your Cloud KMS key Apply a CMEK organization policy Dataform is integrated with two organization policy constraints to help ensure CMEK usage across an organization: constraints/gcp.restrictNonCmekServices is used to require CMEK protection. constraints/gcp.restrictCmekCryptoKeyProjects is used to limit which Cloud KMS keys are used for CMEK protection.
- This integration lets you specify the following encryption compliance requirements for Dataform repositories in your organization: Require CMEKs for all new Dataform repositories Restrict Cloud KMS keys for a Dataform project Considerations when applying organization policies Before applying any CMEK organization policies, you should be aware of the following.

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Caution: If you select the Use the default KMS key checkbox but no default Dataform CMEK key is set for your project, Dataform applies encryption at rest to the repository.
- You can use the default encryption , a unique customer-managed Cloud KMS encryption key, or a default Dataform CMEK key.
- To encrypt the repository with the default Dataform CMEK key, leave the Use the default KMS key checkbox selected.
- Caution: If a default Dataform CMEK key is set for the region of your repository, you must use CMEK encryption.

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories)
- Source ID: `site-docs-root-2`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Caution: If you select the Use the default KMS key checkbox but no default Dataform CMEK key is set for your project, Dataform applies encryption at rest to the repository.
- You can use the default encryption , a unique customer-managed Cloud KMS encryption key, or a default Dataform CMEK key.
- To encrypt the repository with the default Dataform CMEK key, leave the Use the default KMS key checkbox selected.
- Caution: If a default Dataform CMEK key is set for the region of your repository, you must use CMEK encryption.

### Create tables \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-tables](https://docs.cloud.google.com/dataform/docs/create-tables)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code sample shows an incremental table with the transaction id column set as uniqueKey to verify it always contains one row: config { type: "incremental", uniqueKey: ["transaction id"] } SELECT timestamp, action FROM weblogs.user actions ${ when(incremental(), WHERE timestamp > (SELECT MAX(timestamp) FROM ${self()})) } Filter rows in an incremental table In an incremental partitioned table, to avoid Dataform scanning the whole table to find matching rows, set updatePartitionFilter to only consider a subset of records.
- The ref function lets you reference and automatically depend on the following objects defined in your Dataform workflow, instead of hard coding the schema and table names: Tables of all supported table types .
- If you configure the updatePartitionFilter property without the uniqueKey property, Dataform uses an insert strategy instead of a merge strategy.
- When updating the table, Dataform merges rows with the same uniqueKey value instead of appending them.

