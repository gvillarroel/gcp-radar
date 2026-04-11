---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.314Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ComputeSecurityPolicy JSON custom configuration support"
feature_slug: "computesecuritypolicy-json-custom-configuration-support"
latest_feature_date: "2022-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy"
keywords:
  - "computesecuritypolicy"
  - "json"
  - "custom"
  - "configuration"
  - "config"
  - "connector"
  - "supports"
  - "the"
---

# ComputeSecurityPolicy JSON custom configuration support

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector supports the spec.advancedOptionsConfig.jsonCustomConfig field for ComputeSecurityPolicy resources.

## Extended Definition

Config Connector supports the spec.advancedOptionsConfig.jsonCustomConfig field for ComputeSecurityPolicy resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole)
- [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)

## Supporting Pages

### IAMCustomRole | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- IAMCustomRole Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicyMember metadata: name: iampolicymember-sample-projectrole spec: member: serviceAccount:iamcustomrole-dep-project@${PROJECT ID?}.iam.gserviceaccount.com role: projects/${PROJECT ID?}/roles/iamcustomrolesampleproject resourceRef: kind: PubSubTopic name: iamcustomrole-dep-project --- # Replace ${PROJECT ID?} below with your desired project ID. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMServiceAccount metadata: annotations: cnrm.cloud.google.com/project-id: ${PROJECT ID?} name: iamcustomrole-dep-project --- apiVersion: pubsub.cnrm.cloud.google.com/v1beta1 kind: PubSubTopic metadata: name: iamcustomrole-dep-project · Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector.

### Access control with IAM | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Access control with IAM Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions To install Config Connector, you authenticate by creating an IAM service account and then using Workload Identity Federation for GKE for GKE to bind the IAM service accounts with the Kubernetes service accounts.
- By limiting the permissions assigned to your service accounts, you have greater control over what kinds of resources Config Connector can create.
- IAM lets Config Connector take action on specific resources.

### IAMPolicy | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- Source ID: `site-iam-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- IAMPolicy Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy If you want finer-grained control over audit configs, use # IAMAuditConfig. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicy metadata: name: iampolicy-sample-project spec: resourceRef: kind: Project name: iampolicy-dep-project bindings: - members: # Replace ${GSA EMAIL?} with the Config Connector service account&#x27;s # email address.
- This ensures that the Config Connector service account # can continue to manage the referenced project. - &quot;serviceAccount:${GSA EMAIL?}&quot; role: roles/owner - members: - serviceAccount:iampolicy-dep-project@iampolicy-dep-project.iam.gserviceaccount.com rol

