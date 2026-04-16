---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.465Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "compute.restrictPrivateServiceConnectProducer organization policy constraint"
feature_slug: "compute-restrictprivateserviceconnectproducer-organization-policy-constraint"
latest_feature_date: "2023-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
keywords:
  - "compute"
  - "restrictprivateserviceconnectproducer"
  - "organization"
  - "policy"
  - "constraint"
  - "introduces"
  - "the"
  - "private"
---

# compute.restrictPrivateServiceConnectProducer organization policy constraint

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Introduces the Private Service Connect organization policy constraint compute.restrictPrivateServiceConnectProducer for service consumers to block endpoints and backends from connecting to service attachments in other organizations.

## Extended Definition

Introduces the Private Service Connect organization policy constraint compute.restrictPrivateServiceConnectProducer for service consumers to block endpoints and backends from connecting to service attachments in other organizations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)

## Supporting Pages

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- If you are an organization policy administrator , you can specify the following Shared VPC constraints in an organization policy: You can limit the set of host projects to which a non-host project or non-host projects in a folder or organization can be attached.
- Organization policy constraints Organization policies and IAM permissions work together to provide different levels of access control.
- Service Project Admin ( compute.networkUser ) • IAM principal in the organization, or • IAM principal in a host project, or • IAM principal in some subnets in the host project A Shared VPC Admin defines a Service Project Admin by granting an IAM principal the Network User ( compute.networkUser ) role to either the whole host project or select subnets of its Shared VPC networks .
- They can optionally delegate certain network administrative tasks to other IAM principals: Administrator Purpose Network Admin • IAM principal in the host project, or • IAM principal in the organization Shared VPC Admin defines a Network Admin by granting an IAM principal the Network Admin ( compute.networkAdmin ) role to the host project.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- You can disable the creation of default networks by creating an organization policy with the compute.skipDefaultNetworkCreation constraint.
- You can control the following IPv6 configurations using organization policies : Disable VPC External IPv6 usage : If set to true, the constraints/compute.disableVpcExternalIpv6 constraint prevents you from configuring subnets with external IPv6 ranges.
- Disable All IPv6 usage : If set to true, the constraints/compute.disableAllIpv6 constraint disables the creation of, or update to, any subnets or other networking resources involved in IPv6 usage.
- Disable VPC Internal IPv6 usage : If set to true, the constraints/compute.disableVpcInternalIpv6 constraint prevents you from configuring subnets with internal IPv6 ranges.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Error: Constraint constraints/compute.requireVpcFlowLogs violated This error occurs if both of these conditions apply: An organization policy constraint has been set that requires that VPC Flow Logs is configured.
- For more information about this constraint and its effects on subnet creation and updates, see Organization policy constraints for VPC Flow Logs .
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-custom-mode-network" mtu = 1460 subnets = [ { subnet name = "subnet-01" subnet ip = "10.10.10.0/24" subnet region = "us-west1" }, { subnet name = "subnet-02" subnet ip = "10.10.20.0/24" subnet region = "us-west1" subnet private access = "true" subnet flow logs = "true" }, { subnet name = "subnet-03" subnet ip = "10.10.30.0/24" subnet region = "us-west1" subnet flow logs = "true" subnet flow logs interval = "INTERVAL 10 MIN" subnet flow logs sampling = 0.7 subnet flow logs metadata = "INCLUDE ALL METADATA" subnet flow logs filter = "false" } ] } Next, create firewall rules .
- To describe the subnet, use the following command: gcloud compute networks subnets describe SUBNET \ --region= REGION Replace the following: SUBNET : the subnet to describe REGION : the region of the subnet to describe To describe the subnet and view its IP address utilization, use the following command: gcloud compute networks subnets describe SUBNET \ --region= REGION \ --view=WITH UTILIZATION API To list subnets in a particular region and find a subnet's name, make a GET request to the subnetworks.list method .

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Organization policy constraints An Organization Policy Administrator can use the constraints/compute.disablePrivateServiceConnectCreationForConsumers constraint to define the set of endpoint types for which users cannot create forwarding rules.
- For information about creating an organization policy that uses this constraint, see Block consumers from deploying endpoints by connection type .
- A connection might have this status for the following reasons: A producer organization policy rejected the connection.
- Advanced traffic management and security : When you access a published service through a consumer load balancer, the load balancer can act as a centralized policy enforcement point where security policies (such as Google Cloud Armor policies and SSL policies ) or routing policies (such as Google Cloud URL maps ) are enforced.

