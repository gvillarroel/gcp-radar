---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.777Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "CMEK organization policy constraint: restrictNonCmekServices"
feature_slug: "cmek-organization-policy-constraint-restrictnoncmekservices"
latest_feature_date: "2022-08-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy"
keywords:
  - "cmek"
  - "organization"
  - "policy"
  - "constraint"
  - "restrictnoncmekservices"
  - "this"
  - "controls"
  - "which"
---

# CMEK organization policy constraint: restrictNonCmekServices

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

This organization policy constraint controls which Cloud Storage resources must use customer-managed encryption keys.

## Extended Definition

This organization policy constraint controls which Cloud Storage resources must use customer-managed encryption keys.

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
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- August 02, 2022 Feature Customer-managed encryption key (CMEK) organization policy constraints are now generally available ( GA ). constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- March 25, 2022 Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- This permission allows principals to know the organizational policy constraints that a project is subject to.
- December 04, 2023 Feature The restrict unencrypted HTTP requests organization policy constraint is now generally available ( GA ).

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Solution : Check with your security administrator team to see if the bucket to which you're sending requests is being affected by an organization policy that uses a custom constraint.
- For example, the Domain Restricted Sharing constraint ( constraints/iam.allowedPolicyMemberDomains ) restricts resource sharing based on the organization's domain.
- If you continue to see this error after overriding the organization policy, then you might need to wait a few minutes for the change to take effect.
- Solution : Some organization policy constraints can prevent you from making your data public.

### "Class SoftDeletePolicy (3.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy)
- Source ID: `site-python-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- See https://cloud.google.com/storage/docs/soft-delete Parameters Name Description bucket Bucket Bucket for which this instance is the policy. retention duration seconds int (Optional) The period of time in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. effective time datetime.datetime (Optional) When the bucket's soft delete policy is effective.
- Properties bucket Bucket for which this instance is the policy.
- Return the value for key if key is in the dictionary, else default. update update ([ E , ] F ) If E is present and has a .keys() method, then does: for k in E: D[k] = E[k] If E is present and lacks a .keys() method, then does: for k, v in E: D[k] = v In either case, this is followed by: for k in F: D[k] = F[k] values values () API documentation for storage.bucket.SoftDeletePolicy.values method.
- Returns Type Description datetime.datetime or NoneType point-in time at which the bucket's soft delte policy is effective, or None if the property is not set. retention duration seconds Get the retention duration of the bucket's soft delete policy.

