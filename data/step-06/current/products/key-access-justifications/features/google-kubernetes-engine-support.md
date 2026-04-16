---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.285Z"
product_name: "Key Access Justifications"
product_slug: "key-access-justifications"
feature_name: "Google Kubernetes Engine support"
feature_slug: "google-kubernetes-engine-support"
latest_feature_date: "2021-07-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/overview"
  - "https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs"
  - "https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/configure-kaj"
  - "https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/configure-hsm"
keywords:
  - "kubernetes"
  - "engine"
  - "lets"
  - "key"
  - "access"
  - "justifications"
  - "work"
  - "with"
---

# Google Kubernetes Engine support

Product: Key Access Justifications
Coverage: MEDIUM

## Step 02 Summary

Google Kubernetes Engine support lets Key Access Justifications work with Google Kubernetes Engine in GA.

## Extended Definition

Google Kubernetes Engine support lets Key Access Justifications work with Google Kubernetes Engine in GA.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/overview](https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/overview)
- [https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs](https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs)
- [https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/configure-kaj](https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/configure-kaj)
- [https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/configure-hsm](https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/configure-hsm)

## Supporting Pages

### Overview of Key Access Justifications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/overview](https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key Access Justifications works alongside Access Approval and Access Transparency in the following way: Access Approval lets you authorize requests from Google personnel to access Customer Data , Access Transparency helps you discover information about when Customer Data is accessed, and Key Access Justifications provides key access control for all interactions with at-rest Customer Data that is encrypted by a customer-managed key.
- The following Compute Engine and Persistent Disk features are exempted when used with CMEK: Local SSDs Automatic restart Machine image operations Key Access Justifications with Access Approval For workloads with Access Approval enabled with a custom signing key, Key Access Justifications will also apply to processing signed access approval requests.
- Enabling Key Access Justifications Key Access Justifications can only be used with Assured Workloads, and is enabled by default when you create a new Assured Workloads folder configured for a control package that includes Key Access Justifications.
- Note: It can take up to 24 hours to enable Key Access Justifications with external key managers after you've created your Assured Workloads folder.

### Overview of Key Access Justifications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs](https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key Access Justifications works alongside Access Approval and Access Transparency in the following way: Access Approval lets you authorize requests from Google personnel to access Customer Data , Access Transparency helps you discover information about when Customer Data is accessed, and Key Access Justifications provides key access control for all interactions with at-rest Customer Data that is encrypted by a customer-managed key.
- The following Compute Engine and Persistent Disk features are exempted when used with CMEK: Local SSDs Automatic restart Machine image operations Key Access Justifications with Access Approval For workloads with Access Approval enabled with a custom signing key, Key Access Justifications will also apply to processing signed access approval requests.
- Enabling Key Access Justifications Key Access Justifications can only be used with Assured Workloads, and is enabled by default when you create a new Assured Workloads folder configured for a control package that includes Key Access Justifications.
- Note: It can take up to 24 hours to enable Key Access Justifications with external key managers after you've created your Assured Workloads folder.

### "Configure Key Access Justifications with Cloud KMS and Cloud HSM \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/configure-kaj](https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/configure-kaj)
- Source ID: `site-docs-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Assured Workloads Cloud provider access management Key Access Justifications Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Configure Key Access Justifications with Cloud KMS and Cloud HSM This page describes how to configure Key Access Justifications with Cloud KMS or Cloud HSM for Assured Workloads' Japan Data Boundary .
- Before you begin The ability to use Key Access Justifications with Cloud KMS and Cloud HSM keys is only available for the Japan Data Boundary in Assured Workloads.
- The following example request and request body only allows access justifications for a few reasons: PATCH https://cloudkms.googleapis.com/v1/projects/919698201234/locations/asia-northeast1/keyRings/my-key-ring/cryptoKeys/my-hsm-key?keyAccessJustificationsPolicy { "purpose" : "ENCRYPT DECRYPT" , "versionTemplate" : { "protectionLevel" : "HSM" , "algorithm" : "GOOGLE SYMMETRIC ENCRYPTION" }, "keyAccessJustificationsPolicy" : { "allowedAccessReasons" : [ "CUSTOMER INITIATED ACCESS" , "GOOGLE INITIATED SYSTEM OPERATION" ] } } Get the Key Access Justifications policy for a key REST Get metadata about an existing key in Cloud KMS using the cryptoKeys.get method: GET https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME In the request parameters, replace the following placeholder values with your own: PROJECT ID : The project ID that contains the key ring for the key—for example, 919698201234 .

### Configure Key Access Justifications with Cloud HSM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/configure-hsm](https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/configure-hsm)
- Source ID: `site-iam-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure Key Access Justifications with Cloud HSM This page describes how to configure Key Access Justifications with Cloud HSM for Assured Workloads' Japan Regions control package .
- Home Assured Workloads Cloud provider access management Key Access Justifications Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Before you begin The ability to use Key Access Justifications with Cloud HSM keys is only available for the Japan Regions control package in Assured Workloads.
- The following example request and request body only allows access justifications for a few reasons: PATCH https://cloudkms.googleapis.com/v1/projects/919698201234/locations/us-west1/keyRings/my-key-ring/cryptoKeys/my-hsm-key?keyAccessJustificationsPolicy { "purpose" : "ENCRYPT DECRYPT" , "versionTemplate" : { "protectionLevel" : "HSM" , "algorithm" : "GOOGLE SYMMETRIC ENCRYPTION" }, "keyAccessJustificationsPolicy" : { "allowedAccessReasons" : [ "CUSTOMER INITIATED ACCESS" , "GOOGLE INITIATED SYSTEM OPERATION" ] } } Get the Key Access Justifications policy for a key REST Get metadata about an existing key in Cloud KMS using the cryptoKeys.get method: GET https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME In the request parameters, replace the following placeholder values with your own: PROJECT ID : The project ID that contains the key ring for the key—for example, 919698201234 .

