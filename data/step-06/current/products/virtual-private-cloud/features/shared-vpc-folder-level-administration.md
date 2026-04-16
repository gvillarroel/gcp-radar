---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.470Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Shared VPC folder-level administration"
feature_slug: "shared-vpc-folder-level-administration"
latest_feature_date: "2023-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation"
  - "https://docs.cloud.google.com/vpc/docs/byoip-planning"
  - "https://docs.cloud.google.com/vpc/docs/overview"
keywords:
  - "shared"
  - "vpc"
  - "folder"
  - "level"
  - "administration"
  - "managing"
  - "at"
  - "the"
---

# Shared VPC folder-level administration

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Managing Shared VPC at the folder level is now available in General Availability using the Shared VPC Admin role.

## Extended Definition

Managing Shared VPC at the folder level is now available in General Availability using the Shared VPC Admin role.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation](https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation)
- [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- [https://docs.cloud.google.com/vpc/docs/overview](https://docs.cloud.google.com/vpc/docs/overview)

## Supporting Pages

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 307
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can specify the Shared VPC subnets that a service project can access at the project, folder, or organization level.
- Shared VPC Admin ( compute.xpnAdmin and resourcemanager.projectIamAdmin ) • IAM principal in the organization, or • IAM principal in a folder Shared VPC Admins have the Compute Shared VPC Admin ( compute.xpnAdmin ) and Project IAM Admin ( resourcemanager.projectIamAdmin ) roles for the organization or one or more folders.
- The Shared VPC Admin has granted subnet-level or project-level permissions to the necessary Service Project Admins so they can create instances that use the Shared VPC network: A Service Project Admin for Service project A who has subnet-level permissions to the 10.0.1.0/24 subnet can create Instance A in it.
- After new Shared VPC networks or new subnets are added to the host project, a Shared VPC Admin should review the permission bindings for the compute.networkUser role to ensure that the subnet-level permissions for all Service Project Admins match the intended configuration.

### "About service connectivity automation \_|\_ Virtual Private Cloud \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation](https://docs.cloud.google.com/vpc/docs/about-service-connectivity-automation)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Services with custom service instance scope support By default, service connectivity automation requires that the service instance and the endpoints that connect to the service instance must be in the same project (or in the case of Shared VPC, in connected projects).
- Because the endpoint is configured with an IP address from the Shared VPC network, the endpoint is accessible from the host project and all attached service projects.
- All VMs that are connected to the vm-subnet subnet can access the endpoints because they are connected to the same Shared VPC network as the endpoints.
- For information about other configurations, see Shared VPC and Google services with custom service instance scope .

### "Planning for bring your own IP addresses \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/byoip-planning](https://docs.cloud.google.com/vpc/docs/byoip-planning)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BYOIP addresses administration with Shared VPC In this example of an organization that contains Shared VPC, there is a dedicated project, Public IP project , used to manage BYOIP addresses.
- Project architecture We recommend that you use organizations to benefit from features such as IAM permissions at the organization level and Shared VPC .
- When the Shared VPC host project or the related service projects need public IP addresses, the Public IP Admin for the organization creates the IP addresses in the Shared VPC host project .
- BYOIP address administration in an organization In this example of a project belonging to an organization, there is a dedicated project, Public IP project , used to manage BYOIP addresses.

### Virtual Private Cloud (VPC) overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/overview](https://docs.cloud.google.com/vpc/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- VPC Network Peering lets you configure whether the following types of routes are exchanged: Subnet routes for privately re-used public IP ranges Custom static and dynamic routes Network administration for each peered network is unchanged: IAM policies are never exchanged by VPC Network Peering.
- Shared VPC You can share a VPC network from one project (called a host project) to other projects in your Google Cloud organization.
- VPC Network Peering VPC Network Peering lets you build software as a service (SaaS) ecosystems in Google Cloud, making services available privately across different VPC networks, whether the networks are in the same project, different projects, or projects in different organizations.
- Multiple network interfaces enable use cases such as using a network appliance VM to act as a gateway for securing traffic among different VPC networks or to and from the internet.

