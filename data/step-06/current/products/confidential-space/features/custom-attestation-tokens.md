---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:22.604Z"
product_name: "Confidential Space"
product_slug: "confidential-space"
feature_name: "Custom attestation tokens"
feature_slug: "custom-attestation-tokens"
latest_feature_date: "2023-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources"
keywords:
  - "custom"
  - "attestation"
  - "tokens"
  - "confidential"
  - "space"
  - "supports"
  - "authenticating"
  - "workloads"
---

# Custom attestation tokens

Product: Confidential Space
Coverage: LOW

## Step 02 Summary

Confidential Space supports custom attestation tokens for authenticating workloads to relying parties outside Google Cloud.

## Extended Definition

Confidential Space supports custom attestation tokens for authenticating workloads to relying parties outside Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources)

## Supporting Pages

### Attestation token claims \_|\_ Confidential Space \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims)
- Source ID: `site-api-reference-required-1`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the hwmodel claim "GCP INTEL TDX" on Confidential Space, the value is set to ["INTEL"] , indicating that the attestation root of trust originates from Intel-specific hardware technology. aud String The audience.
- Home Documentation Security Confidential Space Reference Send feedback Attestation token claims Stay organized with collections Save and categorize content based on your preferences.
- This claim includes the container's entrypoint path and any additional command-line arguments. cmd override String array The CMD commands and parameters used in the workload image. env Object The environment variables and their values that have been explicitly passed to the container. env override Object The overwritten environment variables in the container. image digest String The image digest of the workload container. image id String The image ID of the workload container. image reference String The location of the workload container running in Confidential Space. image signatures Object array See Container image signature claims . restart policy String The restart policy of the container launcher when the workload stops.
- The value is a JSON number that represents the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the expiry time. google service accounts String array The validated service accounts that are running the Confidential Space workload. hwmodel String The unique identifier for the hardware token.

### "Create and grant access to confidential resources \_|\_ Confidential Space\

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you might encrypt confidential files in Cloud Storage with Cloud KMS, so you need to grant the service account permission to decrypt that data: gcloud kms keys add-iam-policy-binding \ projects/ DATA COLLABORATOR PROJECT ID /locations/global/keyRings/ DATA COLLABORATOR KEYRING NAME /cryptoKeys/ DATA COLLABORATOR KEY NAME \ --member = serviceAccount: DATA COLLABORATOR SERVICE ACCOUNT NAME @ DATA COLLABORATOR PROJECT ID .iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyDecrypter Set up a WIP and provider To set up a WIP and provider, complete the following instructions in each data collaborator project: Create the WIP: gcloud iam workload-identity-pools create DATA COLLABORATOR POOL NAME \ --location = global Attach the service account that is going to be impersonated to the WIP, with the roles/iam.workloadIdentityUser role: gcloud iam service-accounts add-iam-policy-binding \ DATA COLLABORATOR SERVICE ACCOUNT NAME @ DATA COLLABORATOR PROJECT ID .iam.gserviceaccount.com \ --member = "principalSet://iam.googleapis.com/projects/ DATA COLLABORATOR PROJECT NUMBER /locations/global/workloadIdentityPools/ DATA COLLABORATOR POOL NAME / " \ --role = roles/iam.workloadIdentityUser Create an OIDC provider in the WIP, and define the workload service account in it so it can impersonate the data collaborator service account: gcloud iam workload-identity-pools providers create-oidc attestation-verifier \ --location = global \ --workload-identity-pool = DATA COLLABORATOR POOL NAME \ --issuer-uri = "https://confidentialcomputing.googleapis.com/" \ --allowed-audiences = "https://sts.googleapis.com" \ --attribute-mapping = "google.subject=assertion.sub" \ --attribute-condition = "assertion.submods.container.image digest == ' WORKLOAD CONTAINER IMAGE DIGEST ' \ && ' WORKLOAD SERVICE ACCOUNT NAME @ WORKLOAD OPERATOR PROJECT ID .iam.gserviceaccount.com' in assertion.google service accounts \ && assertion.swname == 'CONFIDENTIAL SPACE' \ && 'STABLE' in assertion.submods.confidential space.support attributes" This example uses the following values: An issuer-uri of https://confidentialcomputing.googleapis.com/ , which means Google Cloud Attestation is used as the attestation service.
- Set up a WIP and provider To set up a WIP and provider, complete the following instructions: Create the WIP: gcloud iam workload-identity-pools create DATA COLLABORATOR POOL NAME \ --location = global Create an OIDC provider in the WIP: gcloud iam workload-identity-pools providers create-oidc attestation-verifier \ --location = global \ --workload-identity-pool = DATA COLLABORATOR POOL NAME \ --issuer-uri = "https://confidentialcomputing.googleapis.com/" \ --allowed-audiences = "https://sts.googleapis.com" \ --attribute-mapping = "google.subject=\"gcpcs::\"+assertion.submods.container.image digest+\"::\"+assertion.submods.gce.project number+\"::\"+assertion.submods.gce.instance id,attribute.image digest=assertion.submods.container.image digest" \ --attribute-condition = "assertion.swname == 'CONFIDENTIAL SPACE' \ && 'STABLE' in assertion.submods.confidential space.support attributes" This example uses the following values: An issuer-uri of https://confidentialcomputing.googleapis.com/ , which means Google Cloud Attestation is used as the attestation service.
- For example, here's a policy that enforces that the workload is using Confidential Space, must use a STABLE Confidential Space image , and that the zone the workload VM instance is running in must be us-central1-a : assertion.swname == 'CONFIDENTIAL SPACE' \ && 'STABLE' in assertion.submods.confidential space.support attributes" \ && assertion.submods.gce.zone == "us-central1-a" See attestation assertions for more.
- For Confidential Space, you must define the following in a provider: An attestation service : This service verifies that the workload is a Confidential VM instance, and ultimately returns an OpenID Connect (OIDC) attestation token to the WIP provider.

### Confidential Space overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Alternatively, you could use it to offer end customers stronger data privacy, as the operator or owner of a Confidential Space environment can't access the data that is being processed.
- For the highest security, Confidential Space supports a trust model where data collaborators, workload authors, and workload operators are separate, mutually distrusting parties.
- Confidential Space is a trusted execution environment (TEE) that can be used to release your secrets only to authorized workloads.
- Confidential Space roles The components in a Confidential Space system are managed by people with three distinct roles: Data collaborators : The people or organizations who own the protected resources being operated on by the workload.

