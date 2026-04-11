---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.430Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ContainerCluster masterAuth field"
feature_slug: "containercluster-masterauth-field"
latest_feature_date: "2021-11-11"
deprecation_date: "2021-11-11"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references"
keywords:
  - "containercluster"
  - "masterauth"
  - "field"
  - "the"
  - "spec"
  - "on"
  - "resources"
  - "is"
---

# ContainerCluster masterAuth field

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The spec.masterAuth field on ContainerCluster resources is deprecated; deprecated on 2021-11-11.

## Extended Definition

The spec.masterAuth field on ContainerCluster resources is deprecated; deprecated on 2021-11-11.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- [https://docs.cloud.google.com/config-connector/docs/concepts/resources](https://docs.cloud.google.com/config-connector/docs/concepts/resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)

## Supporting Pages

### Access control with IAM | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- By limiting the permissions assigned to your service accounts, you have greater control over what kinds of resources Config Connector can create.
- Access control with IAM Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions To install Config Connector, you authenticate by creating an IAM service account and then using Workload Identity Federation for GKE for GKE to bind the IAM service accounts with the Kubernetes service accounts.
- IAM lets Config Connector take action on specific resources.

### About Config Connector CRDs | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/resources](https://docs.cloud.google.com/config-connector/docs/concepts/resources)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- The status field is read-only and contains the current state of your object.
- About Config Connector CRDs Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/concepts/resources ...
- Config Connector periodically reads information on your Google Cloud resource and updates the status.

### Creating resource references | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- The IAMPolicy, IAMPartialPolicy and IAMPolicyMember pages list the accepted format for all supported resources.
- The formats are listed in the &quot;External Reference Formats&quot; column of the Supported Resources table.
- Creating resource references Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references You can find out what format the ... documentation.
- You can also go to an individual resource&#x27;s reference page (for example, PubSubTopic) and look at the value listed in the &quot;IAM External Reference Format&quot; row of the resource&#x27;s summary table.

