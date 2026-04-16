---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.020Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "CMEK organization policy constraints"
feature_slug: "cmek-organization-policy-constraints"
latest_feature_date: "2022-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/cmek-org-policy"
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/cmek"
  - "https://docs.cloud.google.com/kms/docs/control-key-destruction"
keywords:
  - "cmek"
  - "organization"
  - "policy"
  - "constraints"
  - "kms"
  - "provides"
  - "to"
  - "require"
---

# CMEK organization policy constraints

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS provides organization policy constraints to require CMEK protection and limit which key projects can be used for CMEK.

## Extended Definition

Cloud KMS provides organization policy constraints to require CMEK protection and limit which key projects can be used for CMEK.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek)
- [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction)

## Supporting Pages

### "CMEK organization policies \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-org-policy](https://docs.cloud.google.com/kms/docs/cmek-org-policy)
- Source ID: `site-iam-reference`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Some notable exceptions are summarized here: Resource type Enforcement exception bigquery.googleapis.com/Dataset Partially enforced on dataset default Cloud KMS key ( gcp.restrictCmekCryptoKeyProjects only) bigquery.googleapis.com/Job Query jobs only: enforced on Cloud KMS key provided with query or default from billing project; see also separate configuration of project default Cloud KMS key bigquerydatatransfer.googleapis.com/TransferConfig Transfer configs use the service name of the Data Transfer Service (bigquerydatatransfer.googleapis.com) for CMEK organization policy constraints. container.googleapis.com/Cluster ( Preview ) Enforced on the Cloud KMS key for node boot disk only; not enforced on secrets at the application layer logging.googleapis.com/LogBucket Enforced on explicitly created log buckets; see also separate configuration required to ensure compliance of built-in log buckets storage.googleapis.com/Bucket Enforced on bucket default Cloud KMS key storage.googleapis.com/Object Enforced independently of bucket; see also separate configuration of bucket default Cloud KMS key Configuration examples In the configuration examples, assume the sample organization has the following resource hierarchy: Note: CMEK organization policies only apply to newly created resources within supported services .
- To require additional CMEK protection for new Cloud SQL and Cloud Storage resources anywhere under folders/3 : Organization policy: constraints/gcp.restrictNonCmekServices Binding at: folders/3 Policy type: Deny Policy values: sqladmin.googleapis.com , storage.googleapis.com To ensure only keys from Cloud KMS projects under folders/2 are used: Organization policy: constraints/gcp.restrictCmekCryptoKeyProjects Binding at: folders/3 Policy type: Allow Policy value: under:folders/2 Require CMEK for an organization To require CMEK everywhere in the organization (in supported services), configure the constraints/gcp.restrictNonCmekServices constraint with the following setting: Organization policy: constraints/gcp.restrictNonCmekServices Binding at: organizations/1 Policy type: Deny Policy values: (all supported services ) Limitations If you use Google Cloud console to create a resource, you might notice that you can't use any encryption options other than CMEK when constraints/gcp.restrictNonCmekServices is configured for a project and service.
- To require CMEK protection for all new Cloud Storage resources, use the following organization policy setting: Organization policy: constraints/gcp.restrictNonCmekServices Binding at: projects/5 Policy type: Deny Policy value: storage.googleapis.com To ensure only keys from projects/4 are used, use the following configuration: Organization policy: constraints/gcp.restrictCmekCryptoKeyProjects Binding at: projects/5 Policy type: Allow Policy value: projects/4 Require CMEK and limit keys to within a folder Alternatively, suppose you're expecting to add additional Cloud KMS projects under folders/2 in the future and want to require CMEK more broadly within folders/3 .
- Google Cloud offers two organization policy constraints to help ensure CMEK usage across an organization: constraints/gcp.restrictNonCmekServices is used to require CMEK protection. constraints/gcp.restrictCmekCryptoKeyProjects is used to limit which Cloud KMS keys are used for CMEK protection.

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To ensure that all keys created adhere to a minimum scheduled for destruction duration, we recommend that you configure the organization policy constraint constraints/cloudkms.minimumDestroyScheduledDuration with a minimum of 30 days, or your preferred duration.
- Enforce allowed protection levels for CMEKs We recommend that you enforce your requirements for key protection levels consistently across your environment using organization policy constraints.
- Require CMEK keys We recommend that you enforce CMEK usage across your environment using organization policy constraints.
- For guidance about how Google Cloud services can help meet the requirements of different compliance frameworks, see the following resources: Protecting healthcare data on Google Cloud Cloud Compliance & Regulations Resources Google Cloud FedRAMP implementation guide PCI Data Security Standard compliance Summary of best practices The following table summarizes the best practices recommended in this document: Topic Task Decide whether to use CMEK Use CMEK if you require any of the capabilities enabled by CMEK .

### "Customer-managed encryption keys (CMEK) \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These constraints provide controls to Organization Administrators to require CMEK usage and to specify limitations and controls on the Cloud KMS keys used for CMEK protection, including the following: Limits on which Cloud KMS keys are used for CMEK protection Limits on the allowed protection levels of keys Limits on the location of CMEKs Controls for key version destruction What's next See the list of services with CMEK integrations .
- For more information about key usage tracking, see View key usage CMEK organization policies Google Cloud offers organization policy constraints to help ensure consistent CMEK usage across an organization resource.
- CMEK-integrated services handle resource access The principal that creates or views resources in the CMEK-integrated service does not require the Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) for the CMEK used to protect the resource.
- This document provides an overview of using Cloud Key Management Service (Cloud KMS) for customer-managed encryption keys (CMEK).

### "Control key version destruction \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/control-key-destruction](https://docs.cloud.google.com/kms/docs/control-key-destruction)
- Source ID: `site-iam-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud offers two organization policy constraints to set key version destruction policy across an organization: constraints/cloudkms.minimumDestroyScheduledDuration is used to set a minimum length for the scheduled for destruction duration for new keys within the organization. constraints/cloudkms.disableBeforeDestroy is used to require that a key version has been disabled before it can be scheduled for destruction.
- This command returns the organization policy as it is evaluated at this point in the resource hierarchy with inheritance included. gcloud org-policies describe \ constraints/cloudkms.minimumDestroyScheduledDuration --effective \ --organization = ORGANIZATION ID The output is similar to the following: name : organizations/ ORGANIZATION ID /policies/cloudkms.minimumDestroyScheduledDuration spec : rules : - values : allowedValues : - 30d - 15d - 90d - 60d - 7d - 120d Because this organization policy was set at the organization level, it is inherited by all child resources that allow inheritance.
- This command returns the organization policy as it is evaluated at this point in the resource hierarchy with inheritance included. gcloud org-policies describe \ constraints/cloudkms.disableBeforeDestroy --effective \ --organization = ORGANIZATION ID The output is similar to the following: name : organizations/ ORGANIZATION ID /policies/cloudkms.minimumDestroyScheduledDuration spec : rules : - enforce : true Because this organization policy was set at the organization level, it is inherited by all child resources that allow inheritance.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .

