---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:37:27.538Z"
product_name: "Binary Authorization"
product_slug: "binary-authorization"
feature_name: "Binary Authorization legacy continuous validation"
feature_slug: "binary-authorization-legacy-continuous-validation"
latest_feature_date: "2024-04-15"
deprecation_date: "2025-05-01"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/binary-authorization/docs/quickstart-cv"
  - "https://docs.cloud.google.com/binary-authorization/docs/cv-attestation-check"
  - "https://docs.cloud.google.com/binary-authorization/docs/release-notes"
keywords:
  - "continuous"
  - "validation"
  - "capability"
  - "legacy"
  - "cv"
  - "authorization"
  - "the"
  - "binary"
---

# Binary Authorization legacy continuous validation

Product: Binary Authorization
Coverage: LOW

## Step 02 Summary

The legacy continuous validation (CV) capability in Binary Authorization is deprecated and replaced by continuous validation with check-based platform policies; deprecated on 2025-05-01.

## Extended Definition

The legacy continuous validation (CV) capability in Binary Authorization is deprecated and replaced by continuous validation with check-based platform policies; deprecated on 2025-05-01.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/binary-authorization/docs/quickstart-cv](https://docs.cloud.google.com/binary-authorization/docs/quickstart-cv)
- [https://docs.cloud.google.com/binary-authorization/docs/cv-attestation-check](https://docs.cloud.google.com/binary-authorization/docs/cv-attestation-check)
- [https://docs.cloud.google.com/binary-authorization/docs/release-notes](https://docs.cloud.google.com/binary-authorization/docs/release-notes)

## Supporting Pages

### "Monitor Pod security with continuous validation \_|\_ Binary Authorization\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/quickstart-cv](https://docs.cloud.google.com/binary-authorization/docs/quickstart-cv)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Image is not in a trusted directory" , "checkSetName" : "Default check set" , "checkSetIndex" : "0" , "checkName" : "My trusted directory check" , "verdict" : "NON CONFORMANT" , "checkType" : "TrustedDirectoryCheck" , "checkIndex" : "0" } ], "image" : "us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0" } ], "verdict" : "VIOLATES POLICY" , "podNamespace" : "default" , "deployTime" : "2022-11-22T01:06:53Z" , "pod" : "hello-app" }, "@type" : "type.googleapis.com/google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent" }, "resource" : { "type" : "k8s cluster" , "labels" : { "project id" : "my-project" , "location" : "us-central1-a" , "cluster name" : "my-cluster" } }, "timestamp" : "2022-11-22T01:44:28.729881832Z" , "severity" : "WARNING" , "logName" : "projects/my-project/logs/binaryauthorization.googleapis.com%2Fcontinuous validation" , "receiveTimestamp" : "2022-11-22T03:35:47.171905337Z" } The log entry shows information about the policy violation, including the following fields: policyName : a platform policy that CV was using when it identified the violation checkResults : a block of results that includes the following fields: explanation : an error message checkSetName : the displayName value for the check set checkSetIndex : the index of the check set in the policy checkName : the name of the check checkIndex : the index of the check in the check set verdict : the verdict that resulted in the log entry, in this case NOT CONFORMANT because the check wasn't satisfied.
- To view the log in Cloud Logging, use the following filter: logName:"binaryauthorization.googleapis.com%2Fcontinuous validation" "policyName" The log for the hello-app Pod is similar to the one below.
- Quickstart: Monitor Pod security with continuous validation Learn how to get started with Binary Authorization continuous validation (CV) with check-based policies .
- Disable Binary Authorization in a cluster To disable both CV and Binary Authorization enforcement in your cluster, run the following command: gcloud beta container clusters update CLUSTER NAME \ --binauthz-evaluation-mode = DISABLED \ --location = LOCATION \ --project = CLUSTER PROJECT ID Replace the following: CLUSTER NAME : the name of the cluster LOCATION : the cluster location CLUSTER PROJECT ID : the cluster project ID Disable check-based policy monitoring in a cluster To disable CV with check-based policies in the cluster, and re-enable enforcement using the Binary Authorization enforcement policy, run the following command: gcloud beta container clusters update CLUSTER NAME \ --binauthz-evaluation-mode = PROJECT SINGLETON POLICY ENFORCE \ --location = LOCATION \ --project = " CLUSTER PROJECT ID " Replace the following: CLUSTER NAME : the name of the cluster LOCATION : the cluster location CLUSTER PROJECT ID : the cluster project ID Note that --binauthz-evaluation-mode=PROJECT SINGLETON POLICY ENFORCE is equivalent to the older flag --enable-binauthz .

### "Use the simple signing attestation check \_|\_ Binary Authorization \_|\_\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/cv-attestation-check](https://docs.cloud.google.com/binary-authorization/docs/cv-attestation-check)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View CV configuration error logs To view CV configuration error logs, run the following command: gcloud logging read \ --order = "desc" \ --freshness = 7d \ --project = CLUSTER PROJECT ID \ 'logName:"binaryauthorization.googleapis.com%2Fcontinuous validation" "configErrorEvent"' The following output shows a configuration error in which a CV platform policy isn't found: { "insertId": "141d4f10-72ea-4a43-b3ec-a03da623de42", "jsonPayload": { "@type": "type.googleapis.com/google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent", "configErrorEvent": { "description": "Cannot monitor cluster 'us-central1-c.my-cluster': Resource projects/123456789/platforms/gke/policies/my-policy does not exist." } }, "resource": { "type": "k8s cluster", "labels": { "cluster name": "my-cluster", "location": "us-central1-c", "project id": "my-project" } }, "timestamp": "2024-05-28T15:31:03.999566Z", "severity": "WARNING", "logName": "projects/my-project/logs/binaryauthorization.googleapis.com%2Fcontinuous validation", "receiveTimestamp": "2024-05-28T16:30:56.304108670Z" } View CV platform policy validation violations If no images violate the platform policies that you have enabled, no entries appear in the logs.
- Image is not in a trusted directory" , "checkSetName" : "My check set" , "checkSetIndex" : "0" , "checkName" : "My trusted directory check" , "verdict" : "NON CONFORMANT" , "checkType" : "TrustedDirectoryCheck" , "checkIndex" : "0" } ], "image" : "gcr.io/my-project/hello-app:latest" } ], "verdict" : "VIOLATES POLICY" , "podNamespace" : "default" , "deployTime" : "2022-11-22T01:06:53Z" , "pod" : "hello-app" }, "@type" : "type.googleapis.com/google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent" }, "resource" : { "type" : "k8s cluster" , "labels" : { "project id" : "my-project" , "location" : "us-central1-a" , "cluster name" : "my-test-cluster" } }, "timestamp" : "2022-11-22T01:44:28.729881832Z" , "severity" : "WARNING" , "logName" : "projects/my-project/logs/binaryauthorization.googleapis.com%2Fcontinuous validation" , "receiveTimestamp" : "2022-11-22T03:35:47.171905337Z" } Clean up This section describes how to clean up the CV monitoring you configured earlier in this guide.
- To view CV log entries for the last seven days, run the following command: gcloud logging read \ --order = "desc" \ --freshness = 7d \ --project = CLUSTER PROJECT ID \ 'logName:"binaryauthorization.googleapis.com%2Fcontinuous validation" "policyName"' Replace CLUSTER PROJECT ID with the cluster project ID.
- This page shows you how to use the Binary Authorization continuous validation (CV) simple signing attestation check .

### Binary Authorization release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/binary-authorization/docs/release-notes](https://docs.cloud.google.com/binary-authorization/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- April 15, 2024 Deprecated Binary Authorization legacy continuous validation (CV) is deprecated and will no longer be available on Google Cloud after May 1, 2025.
- April 29, 2021 Change Binary Authorization now supports Continuous Validation.
- To prevent service interruption, you must take actions outlined in the Binary Authorization GA Migration Guide prior to that date.
- September 16, 2019 Feature The General Availability (GA) version of Binary Authorization is a feature of the Anthos platform .

