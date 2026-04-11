---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.280Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ComputeRouterPeer router appliance instance reference"
feature_slug: "computerouterpeer-router-appliance-instance-reference"
latest_feature_date: "2023-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool"
keywords:
  - "computerouterpeer"
  - "router"
  - "appliance"
  - "instance"
  - "reference"
  - "supports"
  - "referencing"
  - "through"
---

# ComputeRouterPeer router appliance instance reference

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

ComputeRouterPeer supports referencing a router appliance instance through spec.routerApplianceInstanceRef.

## Extended Definition

ComputeRouterPeer supports referencing a router appliance instance through spec.routerApplianceInstanceRef.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool)

## Supporting Pages

### Creating resource references | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Creating resource references Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references You can find out what format the ... documentation.
- You can also go to an individual resource&#x27;s reference page (for example, PubSubTopic) and look at the value listed in the &quot;IAM External Reference Format&quot; row of the resource&#x27;s summary table.
- The formats are listed in the &quot;External Reference Formats&quot; column of the Supported Resources table.

### IAMPartialPolicy | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- Source ID: `site-iam-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- IAMPartialPolicy Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy You cannot reference BigQueryDataset resources using IAMPolicy, IAMPartialPolicy, and IAMPolicyMember since BigQueryDataset does not support IAM. bindings: - condition: description: string expression: string title: string members: - member: string memberFrom: bigQueryConnectionConnectionRef: name: string namespace: string type: string logSinkRef: name: string namespace: string serviceAccountRef: name: string namespace: string serviceIdentityRef: name: string namespace: string sqlInstanceRef: name: string namespace: string role: string resourceRef: apiVersion: string external: string kind: string name: string namespace: string

### EdgeContainerNodePool | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- EdgeContainerNodePool Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool Documentation · Access and resource management · Config Connector · API and reference · Send feedback · Stay organized with collections Save and categorize content based on your preferences.

