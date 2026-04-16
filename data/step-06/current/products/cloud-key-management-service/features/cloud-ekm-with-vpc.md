---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.021Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud EKM with VPC"
feature_slug: "cloud-ekm-with-vpc"
latest_feature_date: "2022-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/create-ekm-connection"
  - "https://docs.cloud.google.com/kms/docs/create-external-key"
  - "https://docs.cloud.google.com/kms/docs/reference/ekm_errors"
keywords:
  - "ekm"
  - "with"
  - "vpc"
  - "lets"
  - "you"
  - "access"
  - "your"
  - "external"
---

# Cloud EKM with VPC

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud EKM with VPC lets you access your external key manager through a private endpoint over a virtual private network; Cloud EKM with VPC lets you access your external key manager through a private endpoint over a virtual private network.

## Extended Definition

Cloud EKM with VPC lets you access your external key manager through a private endpoint over a virtual private network; Cloud EKM with VPC lets you access your external key manager through a private endpoint over a virtual private network.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key)
- [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors)

## Supporting Pages

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- EKM key management from Cloud KMS When using Cloud EKM through a VPC with an external key management partner that supports the Cloud EKM control plane, you can use the Cloud KMS EKM management mode to simplify the process of maintaining external keys in your external key management partner and in Cloud EKM.
- Key Access Justifications When you use Cloud EKM with Key Access Justifications, each request to your external key management partner includes a field that identifies the reason for each request.
- Cloud EKM through a VPC A version of Cloud EKM where Google Cloud communicates with your external key manager over a Virtual Private Cloud (VPC).
- With EKM key management from Cloud KMS enabled, Cloud EKM can request the following changes in your EKM: Create a key: When you create an externally managed key in Cloud KMS using a compatible EKM connection, Cloud EKM sends your key creation request to your EKM.

### "Create an EKM connection \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- Source ID: `site-iam-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ensure a Cloud EKM service account exists for the project. gcloud CLI gcloud beta services identity create \ --service=cloudkms.googleapis.com \ --project= KEY PROJECT ID Grant the servicedirectory.viewer and servicedirectory.pscAuthorizedService in your VPC project to service- KEY PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com For help with getting your project ID and number, see Creating and managing projects . gcloud CLI gcloud projects add-iam-policy-binding VPC PROJECT ID \ --member=serviceAccount:service- KEY PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com \ --role=roles/servicedirectory.viewer gcloud projects add-iam-policy-binding VPC PROJECT ID \ --member=serviceAccount:service- KEY PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com \ --role=roles/servicedirectory.pscAuthorizedService Create an EKM connection To connect your external key manager to Cloud EKM, create an EKM connection in your key project .
- Authorize Cloud EKM to access your VPC For each key project, you must authorize Cloud EKM to access your VPC on that project's behalf, even if the key project and the VPC project are the same.
- This page shows you how to set up Cloud External Key Manager (Cloud EKM) to connect to your external key management (EKM) provider over a Virtual Private Cloud (VPC) network .
- Set up hybrid connectivity If the external key manager is running on-premise, use a hybrid connectivity solution to connect the VPC with your on-premise network.

### "Create an external key \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The key shows as Pending generation until the key path is returned by your EKM and the Cloud EKM key is available. gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . gcloud kms keys create KEY NAME \ --keyring KEY RING \ --location LOCATION \ --purpose PURPOSE \ --default-algorithm ALGORITHM \ --protection-level "external-vpc" \ --crypto-key-backend VPC CONNECTION RESOURCE ID Replace the following: KEY NAME : the name of the key.
- Home Documentation Security Cloud KMS Guides Send feedback Create an external key Stay organized with collections Save and categorize content based on your preferences.
- If you see the Key path field, the EKM via VPC connection that you selected isn't configured for coordinated external keys.
- In the external key management partner system, grant the Google Cloud service account access to use your external keys.

### "Cloud EKM error reference \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you observe frequent timeouts or network errors, ensure that the geographic location of your Cloud EKM keys as near as possible to the region you use for the external keys.
- Home Documentation Security Cloud KMS Reference Send feedback Cloud EKM error reference Stay organized with collections Save and categorize content based on your preferences.
- Grant the appropriate permissions in your external key manager, and then try again by rotating the Cloud EKM key.
- If your error isn't listed in the tables below, see Troubleshoot EKM via VPC errors .

