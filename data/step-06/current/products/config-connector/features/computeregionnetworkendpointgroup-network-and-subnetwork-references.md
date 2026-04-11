---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.345Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ComputeRegionNetworkEndpointGroup network and subnetwork references"
feature_slug: "computeregionnetworkendpointgroup-network-and-subnetwork-references"
latest_feature_date: "2022-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions"
  - "https://docs.cloud.google.com/config-connector/docs/overview"
keywords:
  - "computeregionnetworkendpointgroup"
  - "network"
  - "and"
  - "subnetwork"
  - "references"
  - "config"
  - "connector"
  - "supports"
---

# ComputeRegionNetworkEndpointGroup network and subnetwork references

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector supports networkRef and subnetworkRef fields for ComputeRegionNetworkEndpointGroup resources.

## Extended Definition

Config Connector supports networkRef and subnetworkRef fields for ComputeRegionNetworkEndpointGroup resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview)

## Supporting Pages

### Creating resource references | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Creating resource references Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references You can find out what format the ... documentation.
- Config Connector allows resources ...
- You can also go to an individual resource&#x27;s reference page (for example, PubSubTopic) and look at the value listed in the &quot;IAM External Reference Format&quot; row of the resource&#x27;s summary table.
- The IAMPolicy, IAMPartialPolicy and IAMPolicyMember pages list the accepted format for all supported resources.

### Access control with IAM | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Access control with IAM Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions To install Config Connector, you authenticate by creating an IAM service account and then using Workload Identity Federation for GKE for GKE to bind the IAM service accounts with the Kubernetes service accounts.
- By limiting the permissions assigned to your service accounts, you have greater control over what kinds of resources Config Connector can create.
- IAM lets Config Connector take action on specific resources.

### Config Connector overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Config Connector overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/overview Config Connector provides a collection of Kubernetes Custom Resource Definitions (CRDs) and controllers.
- The Config Connector CRDs allow Kubernetes to create and manage Google Cloud resources when you configure and apply Objects to your cluster.

