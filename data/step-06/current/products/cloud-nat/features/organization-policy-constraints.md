---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.330Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Organization policy constraints"
feature_slug: "organization-policy-constraints"
latest_feature_date: "2020-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/nat/docs/org-policy-constraints"
  - "https://docs.cloud.google.com/nat/docs"
  - "https://docs.cloud.google.com/nat/docs/overview"
  - "https://docs.cloud.google.com/nat/docs/audit-logging"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud NAT supports organization policy constraints for governance control; Cloud NAT supports organization policy constraints for governance control.

## Extended Definition

Cloud NAT supports organization policy constraints for governance control; Cloud NAT supports organization policy constraints for governance control.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/nat/docs/org-policy-constraints](https://docs.cloud.google.com/nat/docs/org-policy-constraints)
- [https://docs.cloud.google.com/nat/docs](https://docs.cloud.google.com/nat/docs)
- [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- [https://docs.cloud.google.com/nat/docs/audit-logging](https://docs.cloud.google.com/nat/docs/audit-logging)

## Supporting Pages

### Organization policy constraints \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/org-policy-constraints](https://docs.cloud.google.com/nat/docs/org-policy-constraints)
- Source ID: `site-docs-root`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Organization policy constraints This page provides information about the organization policy constraints that you can configure for Cloud NAT.
- Organization policy background If you have not worked with organization policy constraints before, first review the following documentation: Understanding constraints Understanding hierarchy evaluation Planning your constraints You can create allow or deny constraints at the following levels of the resource hierarchy: Organization Folder Project Subnetwork By default, a constraint created at a node is inherited by all child nodes.
- An Organization Policy Administrator ( roles/orgpolicy.policyAdmin ) can use the constraints/compute.restrictCloudNATUsage constraint to limit which subnets can use Cloud NAT.
- You create and enforce organizational constraints in an organization policy.

### Cloud NAT documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs](https://docs.cloud.google.com/nat/docs)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Cloud NAT overview Quickstart: Set up network address translation with Cloud NAT Example GKE setup Example Compute Engine setup Using logging and monitoring Organization policy constraints for Cloud NAT Cloud NAT audit logging information group work References and resources REST API Cloud NAT pricing Troubleshooting Quotas Getting support Release notes Billing questions Related resources Explore self-paced training, use cases, reference architectures, and code samples with examples of how to use and connect Google Cloud services.
- Home Documentation Networking Cloud NAT Cloud NAT documentation Read product documentation Cloud NAT provides fully managed, software-defined network address translation support for Google Cloud.
- Go to the Cloud NAT product page for more.
- Last updated 2026-04-08 UTC. [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### Cloud NAT overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- From a VPC network to a network outside of Google Cloud Private NAT supports the following options for traffic between VPC networks and on-premises or other cloud provider networks: Private-to-private NAT for networks connected through NCC hybrid spokes.
- Traffic Description From a VPC network to another VPC network Private NAT supports private-to-private NAT for VPC networks attached as VPC spokes to a Network Connectivity Center hub.
- You configure a NAT gateway on a Cloud Router, which provides the control plane for NAT, holding configuration parameters that you specify.
- Cloud NAT supports address translation for established inbound response packets only.

### Cloud NAT audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/audit-logging](https://docs.cloud.google.com/nat/docs/audit-logging)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ v1.compute.routers.aggregatedList v1.compute.routers.get v1.compute.routers.getNatIpInfo v1.compute.routers.getNatMappingInfo v1.compute.routers.getRoutePolicy v1.compute.routers.getRouterStatus v1.compute.routers.list v1.compute.routers.listBgpRoutes v1.compute.routers.listRoutePolicies v1.compute.routers.preview ADMIN WRITE v1.compute.routers.delete v1.compute.routers.deleteRoutePolicy v1.compute.routers.insert v1.compute.routers.patch v1.compute.routers.patchRoutePolicy v1.compute.routers.update v1.compute.routers.updateRoutePolicy API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud NAT. compute.v1.RegionRoutersService The following audit logs are associated with methods belonging to compute.v1.RegionRoutersService . aggregatedList Method : v1.compute.routers.aggregatedList Audit log type : Data access Permissions : compute.routers.list - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="v1.compute.routers.getNatMappingInfo" getRoutePolicy Method : v1.compute.routers.getRoutePolicy Audit log type : Data access Permissions : compute.routers.getRoutePolicy - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="v1.compute.routers.preview" update Method : v1.compute.routers.update Audit log type : Admin activity Permissions : compute.networks.updatePolicy - ADMIN WRITE compute.routers.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.routers.update" updateRoutePolicy Method : v1.compute.routers.updateRoutePolicy Audit log type : Admin activity Permissions : compute.routers.updateRoutePolicy - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.routers.updateRoutePolicy" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Filter for this method : protoPayload.methodName="v1.compute.routers.listRoutePolicies" patch Method : v1.compute.routers.patch Audit log type : Admin activity Permissions : compute.networks.updatePolicy - ADMIN WRITE compute.routers.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.routers.patch" patchRoutePolicy Method : v1.compute.routers.patchRoutePolicy Audit log type : Admin activity Permissions : compute.routers.updateRoutePolicy - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v1.compute.routers.patchRoutePolicy" preview Method : v1.compute.routers.preview Audit log type : Data access Permissions : compute.routers.get - ADMIN READ Method is a long-running or streaming operation : No.

