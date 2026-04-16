---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:22.598Z"
product_name: "Confidential Space"
product_slug: "confidential-space"
feature_name: "Namespaced cgroup read/write access"
feature_slug: "namespaced-cgroup-read-write-access"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources"
keywords:
  - "namespaced"
  - "cgroup"
  - "read"
  - "write"
  - "access"
  - "confidential"
  - "space"
  - "provides"
---

# Namespaced cgroup read/write access

Product: Confidential Space
Coverage: MEDIUM

## Step 02 Summary

Confidential Space provides a namespaced cgroup with read or write access.

## Extended Definition

Confidential Space provides a namespaced cgroup with read or write access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources)

## Supporting Pages

### Deploy workloads \_|\_ Confidential Space \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The service account must be set up in the following way: With the following roles: roles/confidentialcomputing.workloadUser to generate an attestation token. roles/artifactregistry.reader to retrieve a workload container image stored in Artifact Registry . roles/logging.logWriter if you want to redirect STDOUT and STDERR to Cloud Logging .
- What service account to attach to the VM to run the workload, and what permissions it needs to access confidential data in other projects and write the results somewhere.
- With read access to where the data collaborators store their confidential data, for example, a Cloud Storage bucket or BigQuery table.
- When set to true , enables a namespaced cgroup mount at /sys/fs/cgroup .

### "Create and customize workloads \_|\_ Confidential Space \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When building your Docker image, take the following things into account: Additional Linux capabilities Disk and memory limits Expired OIDC tokens Resources not managed by Google Cloud IAM Inbound ports Launch policies Multiple workload runs Namespaced cgroups Reproducible container images Signed container images Additional Linux capabilities The Confidential Space workload runs in a Linux container using containerd.
- Namespaced cgroups The Confidential Space workload runs without a cgroup mount by default.
- Boolean (default is false ) Determines if workload container is allowed to include a namespaced cgroup mount at /sys/fs/cgroup . tee.launch policy.allow cmd override Interacts with: Workload operator : The tee-cmd metadata variable.
- Here's an example signature claim: "image signatures" : [ { "key id" : "hexadecimal-sha256-fingerprint-public-key1" , "signature" : "base64-encoded-signature" , "signature algorithm" : "RSASSA PSS SHA256" }, { "key id" : "hexadecimal-sha256-fingerprint-public-key2" , "signature" : "base64-encoded-signature" , "signature algorithm" : "RSASSA PSS SHA256" , }, { "key id" : "hexadecimal-sha256-fingerprint-public-key3" , "signature" : "base64-encoded-signature" , "signature algorithm" : "RSASSA PSS SHA256" , } ] Note: If a workload author updates a container signature for a running workload, Confidential Space can take up to 1 hour to detect the updated signatures.

### "Access resources not managed by Google Cloud IAM \_|\_ Confidential Space\

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Errorf ( "couldn't handle this token or couldn't read a validation error: %v" , err ) } func main () { // Get a token from a workload running in Confidential Space tokenbytes , err := getTokenBytesFromWorkload () // Write a method to return a public key from the well-known endpoint keyFunc := getRSAPublicKeyFromJWKsFile // Verify properties of the original Confidential Space workload that generated the attestation // using the token claims. token , err := decodeAndValidateToken ( tokenbytes , keyFunc ) if err != nil { panic ( err ) } claimsString , err := json .
- Data collaborators Workload author If access to your protected resources isn't managed by Google Cloud's IAM—for example, the resources are stored in another cloud service, on-premises, or on a local device such as a mobile phone—you can still authenticate a Confidential Space workload to the device or system that provides access to those resources, otherwise known as a relying party .
- The following is an example AWS policy that grants access to a workload with a specified digest and audience, CONFIDENTIAL SPACE as the software running on the VM instance, and STABLE as the support attribute: { "Version" : "2012-10-17" , "Statement" : [ { "Effect" : "Allow" , "Principal" : { "Federated" : "arn:aws:iam::232510754029:oidc-provider/confidentialcomputing.googleapis.com" }, "Action" : [ "sts:AssumeRoleWithWebIdentity" , "sts:TagSession" ], "Condition" : { "StringEquals" : { "confidentialcomputing.googleapis.com:aud" : "https://integration.test" , "aws:RequestTag/swname" : "CONFIDENTIAL SPACE" , "aws:RequestTag/container.image digest" : "sha256:ac74cbeca443e36325bad15a7c28f2598b22966aa94681a444553f0b838717cf" }, "StringLike" : { "aws:RequestTag/confidential space.support attributes" : " STABLE " } } } ] } Configure AWS resources After your integration is complete, configure your AWS resources.
- Home Documentation Security Confidential Space Guides Send feedback Access resources not managed by Google Cloud IAM Stay organized with collections Save and categorize content based on your preferences.

