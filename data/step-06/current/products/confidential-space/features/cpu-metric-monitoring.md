---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:22.599Z"
product_name: "Confidential Space"
product_slug: "confidential-space"
feature_name: "CPU metric monitoring"
feature_slug: "cpu-metric-monitoring"
latest_feature_date: "2025-01-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources"
keywords:
  - "cpu"
  - "metric"
  - "monitoring"
  - "confidential"
  - "space"
  - "images"
  - "provide"
---

# CPU metric monitoring

Product: Confidential Space
Coverage: MEDIUM

## Step 02 Summary

Confidential Space images provide CPU metric monitoring.

## Extended Definition

Confidential Space images provide CPU metric monitoring.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources)

## Supporting Pages

### Deploy workloads \_|\_ Confidential Space \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create an instance template: gcloud beta compute instance-templates create INSTANCE TEMPLATE NAME \ --provisioning-model = FLEX START \ --confidential-compute-type = TDX \ --machine-type = a3-highgpu-1g \ --maintenance-policy = TERMINATE \ --shielded-secure-boot \ --image-project = confidential-space-images \ --image-family = IMAGE FAMILY NAME \ --metadata = "^ ^tee-image-reference=us-docker.pkg.dev/ WORKLOAD AUTHOR PROJECT ID / REPOSITORY NAME / WORKLOAD CONTAINER NAME :latest tee-install-gpu-driver=true" \ --service-account = WORKLOAD SERVICE ACCOUNT NAME @ WORKLOAD OPERATOR PROJECT ID .iam.gserviceaccount.com \ --scopes = cloud-platform \ --boot-disk-size = 30G \ --reservation-affinity = none \ --max-run-duration = RUN DURATION \ --instance-termination-action = DELETE \ --project = PROJECT ID Provide the following values: INSTANCE TEMPLATE NAME : The name of the new VM instance template.
- Here's an example that creates a Confidential VM, and runs a Docker container called WORKLOAD CONTAINER NAME : CPU-based workloads gcloud compute instances create INSTANCE NAME \ --confidential-compute-type = CONFIDENTIAL COMPUTING TECHNOLOGY \ --machine-type = MACHINE TYPE NAME \ --maintenance-policy = MAINTENANCE POLICY \ --shielded-secure-boot \ --image-project = confidential-space-images \ --image-family = IMAGE FAMILY \ --metadata = "^ ^tee-image-reference=us-docker.pkg.dev/ WORKLOAD AUTHOR PROJECT ID / REPOSITORY NAME / WORKLOAD CONTAINER NAME :latest" \ --service-account = WORKLOAD SERVICE ACCOUNT NAME @ WORKLOAD OPERATOR PROJECT ID .iam.gserviceaccount.com \ --scopes = cloud-platform \ --zone = ZONE NAME \ --project = PROJECT ID Provide the following values: INSTANCE NAME : The name of the new VM instance.
- Spot To use the spot provisioning model, create an accelerator-optimized VM instance. gcloud compute instances create INSTANCE NAME \ --provisioning-model = SPOT \ --confidential-compute-type = TDX \ --machine-type = a3-highgpu-1g \ --maintenance-policy = TERMINATE \ --shielded-secure-boot \ --image-project = confidential-space-images \ --image-family = IMAGE FAMILY NAME \ --metadata = "^ ^tee-image-reference=us-docker.pkg.dev/ WORKLOAD AUTHOR PROJECT ID / REPOSITORY NAME / WORKLOAD CONTAINER NAME :latest tee-install-gpu-driver=true" \ --service-account = WORKLOAD SERVICE ACCOUNT NAME @ WORKLOAD OPERATOR PROJECT ID .iam.gserviceaccount.com \ --scopes = cloud-platform \ --boot-disk-size = 30G \ --zone = ZONE NAME \ --project = PROJECT ID Provide the following values: INSTANCE NAME : The name of the new VM instance.
- IMAGE FAMILY NAME : The family for the Confidential Space images .

### "Create and customize workloads \_|\_ Confidential Space \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When building your Docker image, take the following things into account: Additional Linux capabilities Disk and memory limits Expired OIDC tokens Resources not managed by Google Cloud IAM Inbound ports Launch policies Multiple workload runs Namespaced cgroups Reproducible container images Signed container images Additional Linux capabilities The Confidential Space workload runs in a Linux container using containerd.
- Here's an example signature claim: "image signatures" : [ { "key id" : "hexadecimal-sha256-fingerprint-public-key1" , "signature" : "base64-encoded-signature" , "signature algorithm" : "RSASSA PSS SHA256" }, { "key id" : "hexadecimal-sha256-fingerprint-public-key2" , "signature" : "base64-encoded-signature" , "signature algorithm" : "RSASSA PSS SHA256" , }, { "key id" : "hexadecimal-sha256-fingerprint-public-key3" , "signature" : "base64-encoded-signature" , "signature algorithm" : "RSASSA PSS SHA256" , } ] Note: If a workload author updates a container signature for a running workload, Confidential Space can take up to 1 hour to detect the updated signatures.
- As your application matures and its state becomes more predictable, you can increasingly lock down your solution with attestation validation and launch policies , and switch to the production Confidential Space image.
- When a workload is deployed, the Docker image is pulled from the Artifact Registry repository by the Confidential Space image, run, and the application can start working on the appropriate project resources.

### "Create and grant access to confidential resources \_|\_ Confidential Space\

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you might encrypt confidential files in Cloud Storage with Cloud KMS, so you need to grant the service account permission to decrypt that data: gcloud kms keys add-iam-policy-binding \ projects/ DATA COLLABORATOR PROJECT ID /locations/global/keyRings/ DATA COLLABORATOR KEYRING NAME /cryptoKeys/ DATA COLLABORATOR KEY NAME \ --member = serviceAccount: DATA COLLABORATOR SERVICE ACCOUNT NAME @ DATA COLLABORATOR PROJECT ID .iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyDecrypter Set up a WIP and provider To set up a WIP and provider, complete the following instructions in each data collaborator project: Create the WIP: gcloud iam workload-identity-pools create DATA COLLABORATOR POOL NAME \ --location = global Attach the service account that is going to be impersonated to the WIP, with the roles/iam.workloadIdentityUser role: gcloud iam service-accounts add-iam-policy-binding \ DATA COLLABORATOR SERVICE ACCOUNT NAME @ DATA COLLABORATOR PROJECT ID .iam.gserviceaccount.com \ --member = "principalSet://iam.googleapis.com/projects/ DATA COLLABORATOR PROJECT NUMBER /locations/global/workloadIdentityPools/ DATA COLLABORATOR POOL NAME / " \ --role = roles/iam.workloadIdentityUser Create an OIDC provider in the WIP, and define the workload service account in it so it can impersonate the data collaborator service account: gcloud iam workload-identity-pools providers create-oidc attestation-verifier \ --location = global \ --workload-identity-pool = DATA COLLABORATOR POOL NAME \ --issuer-uri = "https://confidentialcomputing.googleapis.com/" \ --allowed-audiences = "https://sts.googleapis.com" \ --attribute-mapping = "google.subject=assertion.sub" \ --attribute-condition = "assertion.submods.container.image digest == ' WORKLOAD CONTAINER IMAGE DIGEST ' \ && ' WORKLOAD SERVICE ACCOUNT NAME @ WORKLOAD OPERATOR PROJECT ID .iam.gserviceaccount.com' in assertion.google service accounts \ && assertion.swname == 'CONFIDENTIAL SPACE' \ && 'STABLE' in assertion.submods.confidential space.support attributes" This example uses the following values: An issuer-uri of https://confidentialcomputing.googleapis.com/ , which means Google Cloud Attestation is used as the attestation service.
- Set up a WIP and provider To set up a WIP and provider, complete the following instructions: Create the WIP: gcloud iam workload-identity-pools create DATA COLLABORATOR POOL NAME \ --location = global Create an OIDC provider in the WIP: gcloud iam workload-identity-pools providers create-oidc attestation-verifier \ --location = global \ --workload-identity-pool = DATA COLLABORATOR POOL NAME \ --issuer-uri = "https://confidentialcomputing.googleapis.com/" \ --allowed-audiences = "https://sts.googleapis.com" \ --attribute-mapping = "google.subject=\"gcpcs::\"+assertion.submods.container.image digest+\"::\"+assertion.submods.gce.project number+\"::\"+assertion.submods.gce.instance id,attribute.image digest=assertion.submods.container.image digest" \ --attribute-condition = "assertion.swname == 'CONFIDENTIAL SPACE' \ && 'STABLE' in assertion.submods.confidential space.support attributes" This example uses the following values: An issuer-uri of https://confidentialcomputing.googleapis.com/ , which means Google Cloud Attestation is used as the attestation service.
- For Confidential Space, you must define the following in a provider: An attestation service : This service verifies that the workload is a Confidential VM instance, and ultimately returns an OpenID Connect (OIDC) attestation token to the WIP provider.
- The supported platforms are as follows: GCP AMD SEV INTEL TDX Example assertion.hwmodel == "GCP AMD SEV" assertion.submods.confidential space.monitoring enabled Interacts with: Workload author : The monitoring memory allow launch policy.

