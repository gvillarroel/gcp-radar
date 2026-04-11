---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:57:06.737Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Organization policy constraints"
feature_slug: "organization-policy-constraints"
latest_feature_date: "2020-10-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/nat/docs/org-policy-constraints"
  - "https://docs.cloud.google.com/nat/docs/release-notes"
  - "https://docs.cloud.google.com/nat/docs/overview"
keywords:
  - "organization"
  - "policy"
  - "constraints"
  - "nat"
  - "supports"
  - "for"
  - "governance"
  - "control"
---

# Organization policy constraints

Product: Cloud NAT
Coverage: LOW

## Step 02 Summary

Cloud NAT supports organization policy constraints for governance control; Cloud NAT supports organization policy constraints for governance control.

## Extended Definition

Cloud NAT supports organization policy constraints for governance control; Cloud NAT supports organization policy constraints for governance control.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/nat/docs/org-policy-constraints](https://docs.cloud.google.com/nat/docs/org-policy-constraints)
- [https://docs.cloud.google.com/nat/docs/release-notes](https://docs.cloud.google.com/nat/docs/release-notes)
- [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)

## Supporting Pages

### Organization policy constraints \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/org-policy-constraints](https://docs.cloud.google.com/nat/docs/org-policy-constraints)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Organization policy constraints This page provides information about the organization policy constraints that you can configure for Cloud NAT.
- Organization policy background If you have not worked with organization policy constraints before, first review the following documentation: Understanding constraints Understanding hierarchy evaluation Planning your constraints You can create allow or deny constraints at the following levels of the resource hierarchy: Organization Folder Project Subnetwork By default, a constraint created at a node is inherited by all child nodes.
- An Organization Policy Administrator ( roles/orgpolicy.policyAdmin ) can use the constraints/compute.restrictCloudNATUsage constraint to limit which subnets can use Cloud NAT.
- You create and enforce organizational constraints in an organization policy.

### Cloud NAT release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/release-notes](https://docs.cloud.google.com/nat/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- October 28, 2020 Feature Organization policy constraints for Cloud NAT are in General Availability .
- August 19, 2020 Feature Organization policy constraints for Cloud NAT are available in Beta .
- Gateway type Default timeout (before June 30) Default timeout (June 30—September 29) Default timeout (on or after September 30) New 120 seconds 30 or 120 seconds 30 seconds October 21, 2025 Feature General Availability : Private NAT supports Cloud Run.
- March 31, 2026 Announcement The default TCP TIME WAIT timeout for Cloud NAT is scheduled to decrease from 120 seconds to 30 seconds, across all regions, as follows: From June 30 to September 29, 2026 : new Cloud NAT gateways will use either the 120-second or 30-second default, depending on when the update is deployed in a specific region.

### Cloud NAT overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- From a VPC network to a network outside of Google Cloud Private NAT supports the following options for traffic between VPC networks and on-premises or other cloud provider networks: Private-to-private NAT for networks connected through NCC hybrid spokes.
- Traffic Description From a VPC network to another VPC network Private NAT supports private-to-private NAT for VPC networks attached as VPC spokes to a Network Connectivity Center hub.
- You configure a NAT gateway on a Cloud Router, which provides the control plane for NAT, holding configuration parameters that you specify.
- Cloud NAT supports address translation for established inbound response packets only.

