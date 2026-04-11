---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.798Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Organization policy constraint gcp.restrictNonCmekServices"
feature_slug: "organization-policy-constraint-gcp-restrictnoncmekservices"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy"
keywords:
  - "organization"
  - "policy"
  - "constraint"
  - "gcp"
  - "restrictnoncmekservices"
  - "this"
  - "requires"
  - "selected"
---

# Organization policy constraint gcp.restrictNonCmekServices

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

This organization policy constraint requires selected resources to use customer-managed encryption keys.

## Extended Definition

This organization policy constraint requires selected resources to use customer-managed encryption keys.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy)

## Supporting Pages

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- August 02, 2022 Feature Customer-managed encryption key (CMEK) organization policy constraints are now generally available ( GA ). constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- March 25, 2022 Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- This permission allows principals to know the organizational policy constraints that a project is subject to.
- June 02, 2025 Libraries Go 1.55.0 (2025-05-29) Features storage/control: Add Client Libraries Storage IntelligenceConfig ( 2aaada3 ) storage/internal: Add IpFilter to Bucket ( #12309 ) ( d8ae687 ) storage/internal: Add Object.Retention message ( d8ae687 ) Bug Fixes storage: Add EnableNewAuthLibrary internalOption to HTTP newClient ( #12320 ) ( 0036073 ) storage: Migrate oauth2/google usages to cloud.google.com/go/auth ( #11191 ) ( 3a22349 ) storage: Omit check on MultiRangeDownloader ( #12342 ) ( 774621c ) storage: Retry url.Error and net.OpErrors when they wrap an io.EOF ( #12289 ) ( 080f6b0 ) Documentation storage/internal: Add explicit Optional annotations to fields that have always been treated as optional ( d8ae687 ) storage/internal: Add note that Bucket.project output format is always project number format ( d8ae687 ) storage/internal: Add note that managedFolders are supported for GetIamPolicy and SetIamPolicy ( d8ae687 ) May 26, 2025 Libraries Java 2.52.3 (2025-05-19) Bug Fixes Update grpc client side metrics detection to be graceful when not running on gcp ( #3097 ) ( 10cd32d ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250509-2.0.0 ( #3103 ) ( 1fd1090 ) Update sdk-platform-java dependencies ( #3102 ) ( 3b53b94 ) May 19, 2025 Libraries Go 1.54.0 (2025-05-12) Features storage: Add experimental ZB API option ( #12214 ) ( f669982 ) Bug Fixes storage: Fix append writer hang ( #12201 ) ( 7ce2a2a ) storage: Retry unwrapped EOFs ( #12202 ) ( b2d42bd ) May 12, 2025 Libraries Java 2.52.2 (2025-05-06) Bug Fixes Fix a possible NPE that could happen when shutting down a grpc Storage instance ( #3089 ) ( 56f5d0a ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250424-2.0.0 ( #3084 ) ( c7afbde ) Update sdk-platform-java dependencies ( #3087 ) ( 762ca13 ) May 05, 2025 Libraries Java 2.52.0 (2025-04-28) [!IMPORTANT] This release has a direct memory leak when using a StorageOptions.grpc() instance and performing downloads.

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Solution : Check with your security administrator team to see if the bucket to which you're sending requests is being affected by an organization policy that uses a custom constraint.
- For example, the Domain Restricted Sharing constraint ( constraints/iam.allowedPolicyMemberDomains ) restricts resource sharing based on the organization's domain.
- If you continue to see this error after overriding the organization policy, then you might need to wait a few minutes for the change to take effect.
- Solution : Some organization policy constraints can prevent you from making your data public.

### "Class SoftDeletePolicy (3.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy)
- Source ID: `site-python-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- See https://cloud.google.com/storage/docs/soft-delete Parameters Name Description bucket Bucket Bucket for which this instance is the policy. retention duration seconds int (Optional) The period of time in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. effective time datetime.datetime (Optional) When the bucket's soft delete policy is effective.
- Return the value for key if key is in the dictionary, else default. update update ([ E , ] F ) If E is present and has a .keys() method, then does: for k in E: D[k] = E[k] If E is present and lacks a .keys() method, then does: for k, v in E: D[k] = v In either case, this is followed by: for k in F: D[k] = F[k] values values () API documentation for storage.bucket.SoftDeletePolicy.values method.
- Properties bucket Bucket for which this instance is the policy.
- Returns Type Description SoftDeletePolicy Instance created from resource. fromkeys fromkeys ( value = None , / ) Create a new dictionary with keys from iterable and values set to value. get get ( key , default = None , / ) Return the value for key if key is in the dictionary, else default. items items () API documentation for storage.bucket.SoftDeletePolicy.items method. keys keys () API documentation for storage.bucket.SoftDeletePolicy.keys method. pop pop ( k [, d ]) If the key is not found, return the default if given; otherwise, raise a KeyError. popitem popitem () Remove and return a (key, value) pair as a 2-tuple.

