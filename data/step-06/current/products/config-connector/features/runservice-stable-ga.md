---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.193Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "RunService stable GA"
feature_slug: "runservice-stable-ga"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagenotification"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole"
keywords:
  - "runservice"
  - "stable"
  - "ga"
  - "was"
  - "promoted"
  - "from"
  - "alpha"
  - "to"
---

# RunService stable GA

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

RunService was promoted from alpha to stable in Config Connector.

## Extended Definition

RunService was promoted from alpha to stable in Config Connector.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagenotification](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagenotification)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole)

## Supporting Pages

### Organizing your resources | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Organizing your resources Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview Config Connector · Start free ... on your preferences.
- Config Connector can create and manage Google Cloud resources at the project-level, folder-level, or organization-level scope....

### StorageNotification | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagenotification](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagenotification)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- StorageNotification Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagenotification Documentation · Access and resource management · Config Connector · API and reference · Send feedback · Stay organized with collections Save and categorize content based on your preferences.

### IAMCustomRole | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole)
- Source ID: `site-iam-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- IAMCustomRole Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicyMember metadata: name: iampolicymember-sample-projectrole spec: member: serviceAccount:iamcustomrole-dep-project@${PROJECT ID?}.iam.gserviceaccount.com role: projects/${PROJECT ID?}/roles/iamcustomrolesampleproject resourceRef: kind: PubSubTopic name: iamcustomrole-dep-project --- # Replace ${PROJECT ID?} below with your desired project ID. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMServiceAccount metadata: annotations: cnrm.cloud.google.com/project-id: ${PROJECT ID?} name: iamcustomrole-dep-project --- apiVersion: pubsub.cnrm.cloud.google.com/v1beta1 kind: PubSubTopic metadata: name: iamcustomrole-dep-project · Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector.

