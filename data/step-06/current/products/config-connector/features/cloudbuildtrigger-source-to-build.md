---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.392Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "CloudBuildTrigger source to build"
feature_slug: "cloudbuildtrigger-source-to-build"
latest_feature_date: "2022-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole"
keywords:
  - "cloudbuildtrigger"
  - "source"
  - "to"
  - "build"
  - "the"
  - "resource"
  - "supports"
  - "defining"
---

# CloudBuildTrigger source to build

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The CloudBuildTrigger resource supports defining source input for builds through spec.sourceToBuild.

## Extended Definition

The CloudBuildTrigger resource supports defining source input for builds through spec.sourceToBuild.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole)

## Supporting Pages

### Creating resource references | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Creating resource references Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references You can find out what format the ... documentation.
- You can also go to an individual resource&#x27;s reference page (for example, PubSubTopic) and look at the value listed in the &quot;IAM External Reference Format&quot; row of the resource&#x27;s summary table.
- The IAMPolicy, IAMPartialPolicy and IAMPolicyMember pages list the accepted format for all supported resources.
- The formats are listed in the &quot;External Reference Formats&quot; column of the Supported Resources table.

### Organizing your resources | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Config Connector can create and manage Google Cloud resources at the project-level, folder-level, or organization-level scope....
- Organizing your resources Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview Config Connector · Start free ... on your preferences.

### IAMCustomRole | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole)
- Source ID: `site-iam-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- IAMCustomRole Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicyMember metadata: name: iampolicymember-sample-projectrole spec: member: serviceAccount:iamcustomrole-dep-project@${PROJECT ID?}.iam.gserviceaccount.com role: projects/${PROJECT ID?}/roles/iamcustomrolesampleproject resourceRef: kind: PubSubTopic name: iamcustomrole-dep-project --- # Replace ${PROJECT ID?} below with your desired project ID. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMServiceAccount metadata: annotations: cnrm.cloud.google.com/project-id: ${PROJECT ID?} name: iamcustomrole-dep-project --- apiVersion: pubsub.cnrm.cloud.google.com/v1beta1 kind: PubSubTopic metadata: name: iamcustomrole-dep-project · Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector.

