---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.382Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Default CMEK key"
feature_slug: "default-cmek-key"
latest_feature_date: "2024-09-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/cmek"
  - "https://docs.cloud.google.com/dataform/docs/release-notes"
  - "https://docs.cloud.google.com/dataform/docs/create-repository"
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
Coverage: LOW

## Step 02 Summary

A default CMEK key lets a project encrypt multiple Dataform repositories with the same customer-managed encryption key.

## Extended Definition

A default CMEK key lets a project encrypt multiple Dataform repositories with the same customer-managed encryption key.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/cmek](https://docs.cloud.google.com/dataform/docs/cmek)
- [https://docs.cloud.google.com/dataform/docs/release-notes](https://docs.cloud.google.com/dataform/docs/release-notes)
- [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)

## Supporting Pages

### Use customer-managed encryption keys \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/cmek](https://docs.cloud.google.com/dataform/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Set a default Dataform CMEK key Setting a default Dataform CMEK key for your Google Cloud project lets you encrypt multiple repositories with the same CMEK key.
- Use Dataform default CMEK keys To encrypt multiple Dataform repositories with the same CMEK key, you can set a default Dataform CMEK key for your Google Cloud project.
- Click Save to apply the role to the service account. gcloud You can use the Google Cloud CLI to assign the role: gcloud kms keys add-iam-policy-binding \ --project= KMS PROJECT ID \ --member serviceAccount: SERVICE AGENT \ --role roles/cloudkms.cryptoKeyEncrypterDecrypter \ --location= KMS KEY LOCATION \ --keyring= KMS KEY RING \ KMS KEY Replace the following: KMS PROJECT ID : the ID of your Google Cloud project that is running Cloud KMS SERVICE AGENT : the email address of your default Dataform service agent KMS KEY LOCATION : the location name of your Cloud KMS key KMS KEY RING : the key ring name of your Cloud KMS key KMS KEY : the key name of your Cloud KMS key Apply a CMEK organization policy Dataform is integrated with two organization policy constraints to help ensure CMEK usage across an organization: constraints/gcp.restrictNonCmekServices is used to require CMEK protection. constraints/gcp.restrictCmekCryptoKeyProjects is used to limit which Cloud KMS keys are used for CMEK protection.
- This integration lets you specify the following encryption compliance requirements for Dataform repositories in your organization: Require CMEKs for all new Dataform repositories Restrict Cloud KMS keys for a Dataform project Considerations when applying organization policies Before applying any CMEK organization policies, you should be aware of the following.

### Dataform release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/release-notes](https://docs.cloud.google.com/dataform/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- September 09, 2024 Feature You can now set a default Dataform customer-managed encryption keys (CMEK) key for your project to encrypt multiple Dataform repositories with the same CMEK key.
- April 02, 2024 Feature You can now use Customer-Managed Encryption Keys (CMEK) to protect repositories in Dataform.
- For more information about encrypting Dataform repositories with CMEK, see Use customer-managed encryption keys .
- For more information about encrypting Dataform repositories with CMEK, see Use customer-managed encryption keys .

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Caution: If you select the Use the default KMS key checkbox but no default Dataform CMEK key is set for your project, Dataform applies encryption at rest to the repository.
- You can use the default encryption , a unique customer-managed Cloud KMS encryption key, or a default Dataform CMEK key.
- To encrypt the repository with the default Dataform CMEK key, leave the Use the default KMS key checkbox selected.
- Caution: If a default Dataform CMEK key is set for the region of your repository, you must use CMEK encryption.

