---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.433Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "IAMPartialPolicy memberFrom support"
feature_slug: "iampartialpolicy-memberfrom-support"
latest_feature_date: "2021-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/getting-started"
keywords:
  - "iampartialpolicy"
  - "memberfrom"
  - "config"
  - "connector"
  - "supports"
  - "the"
  - "field"
  - "in"
---

# IAMPartialPolicy memberFrom support

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector supports the memberFrom field in IAMPartialPolicy resources.

## Extended Definition

Config Connector supports the memberFrom field in IAMPartialPolicy resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started)

## Supporting Pages

### Creating resource references | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Creating resource references Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references You can find out what format the ... documentation.
- You can also go to an individual resource&#x27;s reference page (for example, PubSubTopic) and look at the value listed in the &quot;IAM External Reference Format&quot; row of the resource&#x27;s summary table.
- The IAMPolicy, IAMPartialPolicy and IAMPolicyMember pages list the accepted format for all supported resources.
- The formats are listed in the &quot;External Reference Formats&quot; column of the Supported Resources table.

### Access control with IAM | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Access control with IAM Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions To install Config Connector, you authenticate by creating an IAM service account and then using Workload Identity Federation for GKE for GKE to bind the IAM service accounts with the Kubernetes service accounts.
- By limiting the permissions assigned to your service accounts, you have greater control over what kinds of resources Config Connector can create.
- IAM lets Config Connector take action on specific resources.

### Getting started with Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Getting started with Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/getting-started PROJECT ID: your Google Cloud project ID.
- By default, Config Connector deletes the PubSubTopic resource.
- Run the following command: ...
- For example, to delete the PubSubTopic you created earlier, run kubectl delete with your pubsub-topic.yaml file: ...

