---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.168Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Require OS Config organization policy constraint"
feature_slug: "require-os-config-organization-policy-constraint"
latest_feature_date: "2024-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/access/custom-constraints"
  - "https://docs.cloud.google.com/compute/docs/access/managed-constraints"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
keywords:
  - "require"
  - "os"
  - "config"
  - "organization"
  - "policy"
  - "constraint"
  - "can"
  - "automatically"
---

# Require OS Config organization policy constraint

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

The Require OS Config organization policy constraint can automatically enable VM Manager for new VMs in an organization, folder, or project; This organization policy constraint can automatically enable VM Manager for new VMs at the organization, folder, or project level.

## Extended Definition

The Require OS Config organization policy constraint can automatically enable VM Manager for new VMs in an organization, folder, or project; This organization policy constraint can automatically enable VM Manager for new VMs at the organization, folder, or project level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/access/custom-constraints](https://docs.cloud.google.com/compute/docs/access/custom-constraints)
- [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)

## Supporting Pages

### Custom constraints \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/custom-constraints](https://docs.cloud.google.com/compute/docs/access/custom-constraints)
- Source ID: `site-docs-reference-required-6`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies for Compute Engine resources: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set To test the constraints: compute.instances.create on the project To use a custom image to create the VM: compute.images.useReadOnly on the image To use a snapshot to create the VM: compute.snapshots.useReadOnly on the snapshot To use an instance template to create the VM: compute.instanceTemplates.useReadOnly on the instance template To assign a legacy network to the VM: compute.networks.use on the project To specify a static IP address for the VM: compute.addresses.use on the project To assign an external IP address to the VM when using a legacy network: compute.networks.useExternalIp on the project To specify a subnet for the VM: compute.subnetworks.use on the project or on the chosen subnet To assign an external IP address to the VM when using a VPC network: compute.subnetworks.useExternalIp on the project or on the chosen subnet To set VM instance metadata for the VM: compute.instances.setMetadata on the project To set tags for the VM: compute.instances.setTags on the VM To set labels for the VM: compute.instances.setLabels on the VM To set a service account for the VM to use: compute.instances.setServiceAccount on the VM To create a new disk for the VM: compute.disks.create on the project To attach an existing disk in read-only or read-write mode: compute.disks.use on the disk To attach an existing disk in read-only mode: compute.disks.useReadOnly on the disk You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to manage organization policies for Compute Engine resources, ask your administrator to grant you the following IAM roles: Organization policy administrator ( roles/orgpolicy.policyAdmin ) on the organization resource To test the constraints: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint using the gcloud CLI, create a YAML file for the custom constraint: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resource types : compute.googleapis.com/ RESOURCE NAME method types : CREATE condition : CONDITION action type : ACTION display name : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference-3`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Stack type Supported gateway external IP addresses IPV4 ONLY IPv4 IPV4 IPV6 IPv4, IPv6 IPV6 ONLY IPv6 Organization policy constraints for IPv6 You can disable the creation of all IPv6 hybrid resources in your project by setting the following organization policy to true: constraints/compute.disableHybridCloudIpv6 For HA VPN, this organization policy constraint prevents the creation of any dual-stack HA VPN gateways and IPv6-only HA VPN gateways in the project.
- Restricting peer IP addresses through a Cloud VPN tunnel If you're an Organization Policy Administrator ( roles/orgpolicy.policyAdmin ) , you can create a policy constraint that restricts the IP addresses that users can specify for peer VPN gateways.
- This applies to Cloud VPN addresses configured by you for Classic VPN or to automatically assigned IP addresses for HA VPN.
- Cloud VPN requires that the peer VPN gateway be configured to support prefragmentation.

### Managed constraints \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- Source ID: `site-docs-reference-required-6`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies with managed constraints: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set To test the constraints: compute.instances.create on the project To use a custom image to create the VM: compute.images.useReadOnly on the image To use a snapshot to create the VM: compute.snapshots.useReadOnly on the snapshot To use an instance template to create the VM: compute.instanceTemplates.useReadOnly on the instance template To assign a legacy network to the VM: compute.networks.use on the project To specify a static IP address for the VM: compute.addresses.use on the project To assign an external IP address to the VM when using a legacy network: compute.networks.useExternalIp on the project To specify a subnet for the VM: compute.subnetworks.use on the project or on the chosen subnet To assign an external IP address to the VM when using a VPC network: compute.subnetworks.useExternalIp on the project or on the chosen subnet To set VM instance metadata for the VM: compute.instances.setMetadata on the project To set tags for the VM: compute.instances.setTags on the VM To set labels for the VM: compute.instances.setLabels on the VM To set a service account for the VM to use: compute.instances.setServiceAccount on the VM To create a new disk for the VM: compute.disks.create on the project To attach an existing disk in read-only or read-write mode: compute.disks.use on the disk To attach an existing disk in read-only mode: compute.disks.useReadOnly on the disk You might also be able to get these permissions with custom roles or other predefined roles .
- Metadata-based constraints and levels Constraint Metadata key Metadata hierarchy levels compute.managed.disableSerialPortAccess serial-port-enable Project, Zonal, Instance compute.managed.requireOsLogin enable-oslogin Project, Zonal, Instance compute.managed.disableGuestAttributesAccess enable-guest-attributes Project, Zonal, Instance compute.managed.requireOsConfig enable-osconfig Project, Zonal, Instance compute.managed.disallowGlobalDns VmDnsSetting Project, Instance Safe rollout: The policy lifecycle To prevent service disruptions when you gradually implement new constraints, Google recommends that you implement managed constraints by following these steps: Analyze with Policy Simulator Before enforcing a policy, use Policy Simulator to see which existing resources violate the policy.
- Required roles To get the permissions that you need to manage organization policies with managed constraints, ask your administrator to grant you the following IAM roles: Organization policy administrator ( roles/orgpolicy.policyAdmin ) on the organization resource To test the constraints: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- For example, to test the compute.managed.requireOsLogin constraint, follow these steps: List existing policies to confirm your configuration: gcloud org-policies list --project = PROJECT ID Apply the enforcement policy using a YAML file: gcloud org-policies set-policy enforce managed constraint.yaml Verify enforcement by calling a mutation API.

