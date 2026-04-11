---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.800Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Restrict authentication types organizational constraint"
feature_slug: "restrict-authentication-types-organizational-constraint"
latest_feature_date: "2022-02-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/authentication/hmackeys"
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
keywords:
  - "restrict"
  - "authentication"
  - "types"
  - "organizational"
  - "constraint"
  - "this"
  - "restricts"
  - "which"
---

# Restrict authentication types organizational constraint

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

This organizational constraint restricts which authentication types can be used in requests for Cloud Storage resources.

## Extended Definition

This organizational constraint restricts which authentication types can be used in requests for Cloud Storage resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/authentication/hmackeys](https://docs.cloud.google.com/storage/docs/authentication/hmackeys)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)

## Supporting Pages

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- This constraint allows you to restrict the authentication types that can be used in requests for Cloud Storage resources.
- February 24, 2022 Feature The restrict authentication types organizational constraint is now in Preview.
- August 24, 2022 Feature The restrict authentication types organization policy constraint is now generally available ( GA ).
- The constraint allows you to restrict the authentication types that can be used in requests for Cloud Storage resources.

### HMAC keys \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/authentication/hmackeys](https://docs.cloud.google.com/storage/docs/authentication/hmackeys)
- Source ID: `site-iam-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can optionally enable the restrictAuthTypes constraint on a resource, which restricts access for requests signed by HMAC keys.
- If you enable the restrictAuthTypes constraint on a resource, you can no longer create or activate HMAC keys for the specified account type in that resource.
- Setup This page discusses hash-based message authentication code (HMAC) keys, which you can use to authenticate requests to the Cloud Storage XML API .
- You can optionally enable the restrictAuthTypes constraint on user account HMAC keys for an extra layer of security.

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- For example, the Domain Restricted Sharing constraint ( constraints/iam.allowedPolicyMemberDomains ) restricts resource sharing based on the organization's domain.
- This portion of the bulk delete action requires the storage.objects.list permission, which might be surprising, given that the goal is object deletion, which normally requires only the storage.objects.delete permission.
- Solution : Check with your security administrator team to see if the bucket to which you're sending requests is being affected by an organization policy that uses a custom constraint.
- This performs a new preflight request, which fetches the new CORS configuration and purges the cache entries.

