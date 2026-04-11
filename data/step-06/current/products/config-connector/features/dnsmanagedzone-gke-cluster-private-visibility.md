---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.300Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "DNSManagedZone GKE cluster private visibility"
feature_slug: "dnsmanagedzone-gke-cluster-private-visibility"
latest_feature_date: "2023-01-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagenotification"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions"
keywords:
  - "dnsmanagedzone"
  - "gke"
  - "cluster"
  - "private"
  - "visibility"
  - "supports"
  - "restricting"
  - "to"
---

# DNSManagedZone GKE cluster private visibility

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

DNSManagedZone supports restricting private visibility to referenced GKE clusters.

## Extended Definition

DNSManagedZone supports restricting private visibility to referenced GKE clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagenotification](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagenotification)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole)
- [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)

## Supporting Pages

### StorageNotification | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagenotification](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagenotification)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- StorageNotification Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/storage/storagenotification Documentation · Access and resource management · Config Connector · API and reference · Send feedback · Stay organized with collections Save and categorize content based on your preferences.

### IAMCustomRole | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole)
- Source ID: `site-iam-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- IAMCustomRole Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicyMember metadata: name: iampolicymember-sample-projectrole spec: member: serviceAccount:iamcustomrole-dep-project@${PROJECT ID?}.iam.gserviceaccount.com role: projects/${PROJECT ID?}/roles/iamcustomrolesampleproject resourceRef: kind: PubSubTopic name: iamcustomrole-dep-project --- # Replace ${PROJECT ID?} below with your desired project ID. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMServiceAccount metadata: annotations: cnrm.cloud.google.com/project-id: ${PROJECT ID?} name: iamcustomrole-dep-project --- apiVersion: pubsub.cnrm.cloud.google.com/v1beta1 kind: PubSubTopic metadata: name: iamcustomrole-dep-project · Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector.

### Access control with IAM | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Access control with IAM Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions To install Config Connector, you authenticate by creating an IAM service account and then using Workload Identity Federation for GKE for GKE to bind the IAM service accounts with the Kubernetes service accounts.
- By limiting the permissions assigned to your service accounts, you have greater control over what kinds of resources Config Connector can create.
- IAM lets Config Connector take action on specific resources.

