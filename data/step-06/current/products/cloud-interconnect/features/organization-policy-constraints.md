---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.573Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "Organization policy constraints"
feature_slug: "organization-policy-constraints"
latest_feature_date: "2020-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/sla"
keywords:
  - "organization"
  - "policy"
  - "constraints"
  - "let"
  - "you"
  - "control"
  - "which"
  - "vpc"
---

# Organization policy constraints

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Organization policy constraints let you control which VPC networks can use Cloud Interconnect; Organization policy constraints let you control which VPC networks can use Cloud Interconnect.

## Extended Definition

Organization policy constraints let you control which VPC networks can use Cloud Interconnect; Organization policy constraints let you control which VPC networks can use Cloud Interconnect.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/sla](https://docs.cloud.google.com/network-connectivity/docs/interconnect/sla)

## Supporting Pages

### Troubleshooting \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/interconnect/support/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Can't create VLAN attachment If you attempt to create a VLAN attachment for Dedicated Interconnect or Partner Interconnect that violates an organization policy, you see an error message.
- To enter the missing routes, set the following parameters: --set-advertisement-groups = ADVERTISED GROUPS --set-advertisement-ranges = ADVERTISED IP RANGES Replace the following: ADVERTISED GROUPS : a Google-defined group that Cloud Router dynamically advertises; it can have a value of all subnets , which mimics the default behavior of a Cloud Router ADVERTISED IP RANGES : the contents of the new array of IP address ranges; it can have one or more values of your choice For more details and examples, see Advertising custom IP ranges .
- Unable to delete an encrypted VLAN attachment You receive the following error when you try to delete an encrypted VLAN attachment for Dedicated Interconnect or Partner Interconnect: ResourceInUseByAnotherResourceException To fix this issue, make sure that you have first deleted all the HA VPN gateways and tunnels associated with the encrypted VLAN attachment.
- HA VPN over Cloud Interconnect When you deploy HA VPN over Cloud Interconnect, you create two operational tiers: The Cloud Interconnect tier, which includes the VLAN attachments and the Cloud Router for Cloud Interconnect.

### Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- To control which VPC networks can use Cloud Interconnect, you can set an organization policy.
- Application awareness lets you map your outbound traffic to different traffic classes and set either a bandwidth percentage policy or a strict priority policy, which can help ensure that business critical network traffic is prioritized over lower priority network traffic.
- Which VPC subnets are available depends on the dynamic routing mode of your VPC network.
- Cloud Interconnect MTU See the MTU information for your use case: If you are connecting your VPC networks to other networks, Cloud Interconnect VLAN attachments support the following four MTU sizes: 1,440 bytes 1,460 bytes 1,500 bytes 8,896 bytes For information about MTU best practices for VLAN attachments, see Use the same MTU for all VLAN attachments .

### Dedicated Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- To control which VPC networks can use Cloud Interconnect, you can set an organization policy.
- Dedicated Interconnect lets you transfer large amounts of data between networks, which can be more cost-effective than purchasing additional bandwidth over the public internet.
- Balance egress traffic with redundant connections When you have a redundant topology similar to the 99.99% configuration, there are multiple paths for traffic to traverse from the VPC network to your on-premises network.
- Then, you order a Dedicated Interconnect connection so that Google can allocate the necessary resources and send you a Letter of Authorization and Connecting Facility Assignment (LOA-CFA).

### Cloud Dedicated and Partner Interconnect SLA | Google Cloud

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/sla](https://docs.cloud.google.com/network-connectivity/docs/interconnect/sla)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Community forums About Google Privacy Site terms Google Cloud terms Cookies management controls Our third decade of climate action: join us Sign up for the Google Cloud newsletter Subscribe language ‪English‬ ‪English‬ ‪Deutsch‬ ‪Español‬ ‪Español (Latinoamérica)‬ ‪Français‬ ‪Indonesia‬ ‪Italiano‬ ‪Português (Brasil)‬ ‪简体中文‬ ‪繁體中文‬ ‪日本語‬ ‪한국어‬
- See all industry solutions Application Modernization Assess, plan, implement, and measure software practices and capabilities to modernize and simplify your organization’s business application portfolios.
- Virtual Private Cloud Single VPC for an entire organization, isolated within projects.
- Cost Management Tools for monitoring, controlling, and optimizing your costs.

