---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:22.601Z"
product_name: "Confidential Space"
product_slug: "confidential-space"
feature_name: "Automatic boot disk stateful partition resizing"
feature_slug: "automatic-boot-disk-stateful-partition-resizing"
latest_feature_date: "2024-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-images"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources"
keywords:
  - "automatic"
  - "boot"
  - "disk"
  - "stateful"
  - "partition"
  - "resizing"
  - "confidential"
  - "space"
---

# Automatic boot disk stateful partition resizing

Product: Confidential Space
Coverage: LOW

## Step 02 Summary

Confidential Space supports automatic resizing of the boot disk stateful partition.

## Extended Definition

Confidential Space supports automatic resizing of the boot disk stateful partition.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-images](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-images)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources)

## Supporting Pages

### "Create and customize workloads \_|\_ Confidential Space \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Disk and memory limits Confidential Space automatically resizes the boot disk stateful partition when using larger boot disk sizes .
- When building your Docker image, take the following things into account: Additional Linux capabilities Disk and memory limits Expired OIDC tokens Resources not managed by Google Cloud IAM Inbound ports Launch policies Multiple workload runs Namespaced cgroups Reproducible container images Signed container images Additional Linux capabilities The Confidential Space workload runs in a Linux container using containerd.
- As part of Confidential Space integrity file system protections, Confidential Space stores disk integrity tags in memory.
- The partition size is roughly the boot disk size minus 5 GB.

### "Create and grant access to confidential resources \_|\_ Confidential Space\

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples The following code verifies that the debug version of the Confidential Space image is being used: assertion.dbgstat == "enable" The following code verifies that the production version of the Confidential Space image is being used: assertion.dbgstat == "disabled-since-boot" assertion.submods.confidential space.support attributes String array Verifies the security version of the production Confidential Space image that's running on the Confidential VM instance, using its support attributes.
- For example, you might encrypt confidential files in Cloud Storage with Cloud KMS, so you need to grant the service account permission to decrypt that data: gcloud kms keys add-iam-policy-binding \ projects/ DATA COLLABORATOR PROJECT ID /locations/global/keyRings/ DATA COLLABORATOR KEYRING NAME /cryptoKeys/ DATA COLLABORATOR KEY NAME \ --member = serviceAccount: DATA COLLABORATOR SERVICE ACCOUNT NAME @ DATA COLLABORATOR PROJECT ID .iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyDecrypter Set up a WIP and provider To set up a WIP and provider, complete the following instructions in each data collaborator project: Create the WIP: gcloud iam workload-identity-pools create DATA COLLABORATOR POOL NAME \ --location = global Attach the service account that is going to be impersonated to the WIP, with the roles/iam.workloadIdentityUser role: gcloud iam service-accounts add-iam-policy-binding \ DATA COLLABORATOR SERVICE ACCOUNT NAME @ DATA COLLABORATOR PROJECT ID .iam.gserviceaccount.com \ --member = "principalSet://iam.googleapis.com/projects/ DATA COLLABORATOR PROJECT NUMBER /locations/global/workloadIdentityPools/ DATA COLLABORATOR POOL NAME / " \ --role = roles/iam.workloadIdentityUser Create an OIDC provider in the WIP, and define the workload service account in it so it can impersonate the data collaborator service account: gcloud iam workload-identity-pools providers create-oidc attestation-verifier \ --location = global \ --workload-identity-pool = DATA COLLABORATOR POOL NAME \ --issuer-uri = "https://confidentialcomputing.googleapis.com/" \ --allowed-audiences = "https://sts.googleapis.com" \ --attribute-mapping = "google.subject=assertion.sub" \ --attribute-condition = "assertion.submods.container.image digest == ' WORKLOAD CONTAINER IMAGE DIGEST ' \ && ' WORKLOAD SERVICE ACCOUNT NAME @ WORKLOAD OPERATOR PROJECT ID .iam.gserviceaccount.com' in assertion.google service accounts \ && assertion.swname == 'CONFIDENTIAL SPACE' \ && 'STABLE' in assertion.submods.confidential space.support attributes" This example uses the following values: An issuer-uri of https://confidentialcomputing.googleapis.com/ , which means Google Cloud Attestation is used as the attestation service.
- Set up a WIP and provider To set up a WIP and provider, complete the following instructions: Create the WIP: gcloud iam workload-identity-pools create DATA COLLABORATOR POOL NAME \ --location = global Create an OIDC provider in the WIP: gcloud iam workload-identity-pools providers create-oidc attestation-verifier \ --location = global \ --workload-identity-pool = DATA COLLABORATOR POOL NAME \ --issuer-uri = "https://confidentialcomputing.googleapis.com/" \ --allowed-audiences = "https://sts.googleapis.com" \ --attribute-mapping = "google.subject=\"gcpcs::\"+assertion.submods.container.image digest+\"::\"+assertion.submods.gce.project number+\"::\"+assertion.submods.gce.instance id,attribute.image digest=assertion.submods.container.image digest" \ --attribute-condition = "assertion.swname == 'CONFIDENTIAL SPACE' \ && 'STABLE' in assertion.submods.confidential space.support attributes" This example uses the following values: An issuer-uri of https://confidentialcomputing.googleapis.com/ , which means Google Cloud Attestation is used as the attestation service.
- If these conditions match the assertions of the workload, then the workload is allowed to access resources as a federated identity: assertion.submods.container.image digest == ' WORKLOAD CONTAINER IMAGE DIGEST ' : Verifies that the workload container image digest matches the expected value. ' WORKLOAD SERVICE ACCOUNT NAME @ WORKLOAD PROJECT ID .iam.gserviceaccount.com' in assertion.google service accounts : Verifies that the service account attached to the workload matches the expected service account, and then uses it to impersonate the data collaborator service account. assertion.swname == 'CONFIDENTIAL SPACE' : Verifies that Confidential Space is the software running on the VM, with all of its built-in security guarantees . 'STABLE' in assertion.submods.confidential space.support attributes : Verifies that the production Confidential Space image is being used, and has the STABLE support attribute .

### Confidential Space images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-images](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-images)
- Source ID: `site-docs-reference-required-2`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Confidential Space images are built on the existing security enhancements of Container-Optimized OS and add the following benefits: Encrypted disk partitions with integrity protection Authenticated, encrypted network connections Various boot measurements Disabled remote access and cloud-specific tooling Types of images Confidential Space images are available in two variants: Production: The production image is used for running real production workloads with real production data.
- Image name Container-Optimized OS version Released confidential-space-debug-260300 cos-125-19216-220-57 2026-03-24 confidential-space-debug-260200 cos-125-19216-104-149 2026-02-20 confidential-space-debug-260100 cos-tdx-113-18244-521-56 2026-01-20 confidential-space-debug-251200 cos-tdx-113-18244-521-41 2025-12-16 confidential-space-debug-251001 cos-tdx-113-18244-448-63 2025-10-13 confidential-space-debug-251000 cos-tdx-113-18244-448-63 2025-10-03 confidential-space-debug-250800 cos-tdx-113-18244-382-54 2025-09-02 confidential-space-debug-250301 cos-tdx-113-18244-291-63 2025-03-31 confidential-space-debug-250300 cos-tdx-113-18244-291-46 2025-03-31 confidential-space-debug-250100 cos-113-18244-236-88 2025-01-14 confidential-space-debug-241000 cos-113-18244-151-96 2024-10-01 confidential-space-debug-240900 cos-113-18244-151-80 2024-10-01 confidential-space-debug-240800 cos-113-18244-151-14 2024-09-03 confidential-space-debug-240700 cos-113-18244-85-54 2024-07-31 confidential-space-debug-240500 cos-dev-117-18374-0-0 2024-05-30 confidential-space-debug-240402 cos-dev-117-18342-0-0 2024-04-22 confidential-space-debug-240200 cos-dev-113-18146-0-0 2024-02-28 confidential-space-debug-231201 cos-dev-113-18059-0-0 2023-12-14 confidential-space-debug-231200 cos-dev-113-18054-0-0 2023-12-05 confidential-space-debug-231001 cos-dev-113-17965-0-0 2023-11-03 confidential-space-debug-230901 cos-dev-113-17877-0-0 2023-10-02 confidential-space-debug-230600 cos-dev-109-17637-0-0 2023-06-09 confidential-space-debug-2302-0 cos-dev-105-17234-0-0 2023-03-02 confidential-space-debug-2212-0 cos-dev-105-17234-0-0 2022-12-01 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Image name Container-Optimized OS version Released LATEST image confidential-space-260300 cos-125-19216-220-57 2026-03-24 STABLE images confidential-space-260200 cos-125-19216-104-149 2026-02-20 confidential-space-260100 cos-tdx-113-18244-521-56 2026-01-20 confidential-space-251200 cos-tdx-113-18244-521-41 2025-12-16 confidential-space-251001 cos-tdx-113-18244-448-63 2025-10-13 confidential-space-251000 cos-tdx-113-18244-448-63 2025-10-03 confidential-space-250800 cos-tdx-113-18244-382-54 2025-09-02 confidential-space-250301 cos-tdx-113-18244-291-63 2025-03-31 confidential-space-250300 cos-tdx-113-18244-291-46 2025-03-31 confidential-space-250100 cos-113-18244-236-88 2025-01-14 confidential-space-241000 cos-113-18244-151-96 2024-10-18 confidential-space-240900 cos-113-18244-151-80 2024-10-01 confidential-space-240800 cos-113-18244-151-14 2024-09-03 confidential-space-240700 cos-113-18244-85-54 2024-07-31 confidential-space-240500 cos-dev-117-18374-0-0 2024-05-30 confidential-space-240402 cos-dev-117-18342-0-0 2024-04-22 confidential-space-240200 cos-dev-113-18146-0-0 2024-02-28 confidential-space-231201 cos-dev-113-18059-0-0 2023-12-14 confidential-space-231200 cos-dev-113-18054-0-0 2023-12-05 confidential-space-231001 cos-dev-113-17965-0-0 2023-11-03 confidential-space-230901 cos-dev-113-17877-0-0 2023-10-02 confidential-space-230600 cos-dev-109-17637-0-0 2023-06-09 confidential-space-2302-0 cos-dev-105-17234-0-0 2023-03-02 confidential-space-2212-0 cos-dev-105-17234-0-0 2022-12-01 Debug images The following table contains Confidential Space image debug versions.
- Image versions You can view the latest Confidential Space images with the following gcloud command: gcloud compute images list \ --project = confidential-space-images \ --no-standard-images The following flags can change the returned images in the results: Add the --show-deprecated flag to show older images.

