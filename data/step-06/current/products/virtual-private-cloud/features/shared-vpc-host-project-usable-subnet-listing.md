---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.502Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Shared VPC host project usable subnet listing"
feature_slug: "shared-vpc-host-project-usable-subnet-listing"
latest_feature_date: "2018-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations.connectors"
keywords:
  - "shared"
  - "vpc"
  - "host"
  - "project"
  - "usable"
  - "subnet"
  - "listing"
  - "projects"
---

# Shared VPC host project usable subnet listing

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Shared VPC service projects can now list usable subnets from the host project in General Availability.

## Extended Definition

Shared VPC service projects can now list usable subnets from the host project in General Availability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations.connectors](https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations.connectors)

## Supporting Pages

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- They perform various tasks necessary to set up Shared VPC , such as enabling host projects, attaching service projects to host projects, and delegating access to some or all of the subnets in Shared VPC networks to Service Project Admins.
- A Shared VPC Admin for the organization has created a host project and attached two service projects to it: Service Project Admins in Service project A can be configured to access all or some of the subnets in the Shared VPC network.
- Both host projects have one Shared VPC network with subnets configured to use the same CIDR ranges.
- Service Project Admins When defining each Service Project Admin, a Shared VPC Admin can grant permission to use the whole host project or just some subnets: Project-level permissions : A Service Project Admin can be defined to have permission to use all subnets in the host project if the Shared VPC Admin grants the role of compute.networkUser for the whole host project to the Service Project Admin.

### "About published services \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services](https://docs.cloud.google.com/vpc/docs/about-vpc-hosted-services)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Original target service New target service Internal passthrough Network Load Balancer Internal protocol forwarding (target instance) Port mapping services Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Cross-region internal Application Load Balancer Secure Web Proxy Internal passthrough Network Load Balancer Internal protocol forwarding (target instance) Port mapping services Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Cross-region internal Application Load Balancer Secure Web Proxy Shared VPC Service Project Admins can create service attachments in Shared VPC service projects that connect to resources in Shared VPC networks .
- Establishing a Private Service Connect connection between consumer and producer projects that are not in the same VPC Service Controls perimeter does not require explicit authorization with egress policies.
- The service attachment uses a Private Service Connect subnet from the Shared VPC network.
- The forwarding rule's subnet must be shared with the service project.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Authorized IAM principals from other projects in the same organization can create resources that use subnets of the Shared VPC network.
- Unless you create an organizational policy that prohibits it, new projects start with a default network (an auto mode VPC network) that has one subnetwork (subnet) in each region.
- An organization can use Shared VPC to keep a VPC network in a common host project.
- VPC networks can be connected to other VPC networks in different projects or organizations by using VPC Network Peering .

### "REST Resource: projects.locations.connectors \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations.connectors](https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1/projects.locations.connectors)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "network" : string , "ipCidrRange" : string , "state" : enum ( State ) , "minThroughput" : integer , "maxThroughput" : integer , "connectedProjects" : [ string ] , "subnet" : { object ( Subnet ) } , "machineType" : string , "minInstances" : integer , "maxInstances" : integer } Fields name string The resource name in the format projects/ /locations/ /connectors/ . network string Name of a VPC network. ipCidrRange string The range of internal addresses that follows RFC 4632 notation.
- List of projects using the connector. subnet object ( Subnet ) The subnet in which to house the VPC Access Connector. machineType string Machine type of VM Instance underlying connector.
- E.g. if the full subnet selfLink is https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName } the correct input for this field would be {subnetName} projectId string Project in which the subnet exists.
- Home Documentation Networking Virtual Private Cloud Send feedback REST Resource: projects.locations.connectors Stay organized with collections Save and categorize content based on your preferences.

