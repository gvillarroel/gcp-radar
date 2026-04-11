---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.382Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Cloud EKM keys"
feature_slug: "cloud-ekm-keys"
latest_feature_date: "2024-08-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/cmek"
  - "https://docs.cloud.google.com/dataform/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
keywords:
  - "ekm"
  - "keys"
  - "let"
  - "dataform"
  - "protect"
  - "using"
  - "externally"
  - "managed"
---

# Cloud EKM keys

Product: Dataform
Coverage: LOW

## Step 02 Summary

Cloud EKM keys let Dataform protect data using externally managed encryption keys.

## Extended Definition

Cloud EKM keys let Dataform protect data using externally managed encryption keys.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/cmek](https://docs.cloud.google.com/dataform/docs/cmek)
- [https://docs.cloud.google.com/dataform/docs/release-notes](https://docs.cloud.google.com/dataform/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)

## Supporting Pages

### Use customer-managed encryption keys \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/cmek](https://docs.cloud.google.com/dataform/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CMEK encryption of repository data When you apply CMEK encryption to a Dataform repository, all Dataform-managed customer data in that repository is encrypted at rest using the CMEK protection key set for the repository.
- Click Save to apply the role to the service account. gcloud You can use the Google Cloud CLI to assign the role: gcloud kms keys add-iam-policy-binding \ --project= KMS PROJECT ID \ --member serviceAccount: SERVICE AGENT \ --role roles/cloudkms.cryptoKeyEncrypterDecrypter \ --location= KMS KEY LOCATION \ --keyring= KMS KEY RING \ KMS KEY Replace the following: KMS PROJECT ID : the ID of your Google Cloud project that is running Cloud KMS SERVICE AGENT : the email address of your default Dataform service agent KMS KEY LOCATION : the location name of your Cloud KMS key KMS KEY RING : the key ring name of your Cloud KMS key KMS KEY : the key name of your Cloud KMS key Apply a CMEK organization policy Dataform is integrated with two organization policy constraints to help ensure CMEK usage across an organization: constraints/gcp.restrictNonCmekServices is used to require CMEK protection. constraints/gcp.restrictCmekCryptoKeyProjects is used to limit which Cloud KMS keys are used for CMEK protection.
- This data includes the following: Git repository content of the Dataform repository and its workspaces Compiled SQL queries and compilation errors Stored SQL queries of workflow actions Error details of executed workflow actions Dataform uses CMEK protection keys in the following scenarios: During every operation that requires decryption of customer data stored at rest.
- This integration lets you specify the following encryption compliance requirements for Dataform repositories in your organization: Require CMEKs for all new Dataform repositories Restrict Cloud KMS keys for a Dataform project Considerations when applying organization policies Before applying any CMEK organization policies, you should be aware of the following.

### Dataform release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/release-notes](https://docs.cloud.google.com/dataform/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- April 02, 2024 Feature You can now use Customer-Managed Encryption Keys (CMEK) to protect repositories in Dataform.
- Feature You can now use Cloud External Key Manager (Cloud EKM) keys to protect Dataform data.
- September 09, 2024 Feature You can now set a default Dataform customer-managed encryption keys (CMEK) key for your project to encrypt multiple Dataform repositories with the same CMEK key.
- For more information about encrypting Dataform repositories with CMEK, see Use customer-managed encryption keys .

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.dataform v1.types.Workspace Represents a Dataform Git workspace. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. crypto key version path crypto key version path ( project : str , location : str , key ring : str , crypto key : str , crypto key version : str ) - > str Returns a fully-qualified crypto key version string. delete folder delete folder ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample delete workflow invocation(): Create a client client = dataform v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample delete team folder tree(): Create a client client = dataform v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample delete workflow config(): Create a client client = dataform v1 .

