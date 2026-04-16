---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.087Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Compute Engine managed constraints"
feature_slug: "compute-engine-managed-constraints"
latest_feature_date: "2026-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/access/managed-constraints"
  - "https://docs.cloud.google.com/compute/docs/access/organization-policies"
  - "https://docs.cloud.google.com/compute/docs/access/custom-constraints"
keywords:
  - "compute"
  - "engine"
  - "managed"
  - "constraints"
  - "organization"
  - "policy"
  - "provide"
  - "centralized"
---

# Compute Engine managed constraints

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Managed constraints for Organization Policy Service provide centralized control for Compute Engine resources with safe rollout support such as Policy Simulator and dry-run mode.

## Extended Definition

Managed constraints for Organization Policy Service provide centralized control for Compute Engine resources with safe rollout support such as Policy Simulator and dry-run mode.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies)
- [https://docs.cloud.google.com/compute/docs/access/custom-constraints](https://docs.cloud.google.com/compute/docs/access/custom-constraints)

## Supporting Pages

### Managed constraints \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- Source ID: `site-docs-reference-required-6`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed constraints are predefined organization policies, built on a modern platform, that provide centralized, programmatic control over your Compute Engine resources.
- Available managed constraints The following managed organization policy constraints are available for Compute Engine: Constraint Description Allowed VLAN Attachment encryption settings This list constraint defines the allowed encryption settings for new VLAN Attachments.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies with managed constraints: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set To test the constraints: compute.instances.create on the project To use a custom image to create the VM: compute.images.useReadOnly on the image To use a snapshot to create the VM: compute.snapshots.useReadOnly on the snapshot To use an instance template to create the VM: compute.instanceTemplates.useReadOnly on the instance template To assign a legacy network to the VM: compute.networks.use on the project To specify a static IP address for the VM: compute.addresses.use on the project To assign an external IP address to the VM when using a legacy network: compute.networks.useExternalIp on the project To specify a subnet for the VM: compute.subnetworks.use on the project or on the chosen subnet To assign an external IP address to the VM when using a VPC network: compute.subnetworks.useExternalIp on the project or on the chosen subnet To set VM instance metadata for the VM: compute.instances.setMetadata on the project To set tags for the VM: compute.instances.setTags on the VM To set labels for the VM: compute.instances.setLabels on the VM To set a service account for the VM to use: compute.instances.setServiceAccount on the VM To create a new disk for the VM: compute.disks.create on the project To attach an existing disk in read-only or read-write mode: compute.disks.use on the disk To attach an existing disk in read-only mode: compute.disks.useReadOnly on the disk You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to manage organization policies with managed constraints, ask your administrator to grant you the following IAM roles: Organization policy administrator ( roles/orgpolicy.policyAdmin ) on the organization resource To test the constraints: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .

### Organization policies for Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies)
- Source ID: `site-docs-reference-required-6`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Constraint types When you use the Organization Policy, you can apply the following types of constraints: Managed constraints : Google-provided, predefined constraints that are built on a modern platform, identifiable by the compute.managed. prefix.
- Managed constraints Managed constraints for Compute Engine simplify governance for common security scenarios and integrate with safe rollout tools, such as dry-run and Policy Simulator, which let you test their impact before enforcement.
- Compute Engine constraints The following sections list the Compute Engine constraints that Organization Policy supports.
- This document provides an overview of how you can use Organization Policy to manage your Compute Engine resources.

### Custom constraints \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/custom-constraints](https://docs.cloud.google.com/compute/docs/access/custom-constraints)
- Source ID: `site-docs-reference-required-6`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies for Compute Engine resources: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set To test the constraints: compute.instances.create on the project To use a custom image to create the VM: compute.images.useReadOnly on the image To use a snapshot to create the VM: compute.snapshots.useReadOnly on the snapshot To use an instance template to create the VM: compute.instanceTemplates.useReadOnly on the instance template To assign a legacy network to the VM: compute.networks.use on the project To specify a static IP address for the VM: compute.addresses.use on the project To assign an external IP address to the VM when using a legacy network: compute.networks.useExternalIp on the project To specify a subnet for the VM: compute.subnetworks.use on the project or on the chosen subnet To assign an external IP address to the VM when using a VPC network: compute.subnetworks.useExternalIp on the project or on the chosen subnet To set VM instance metadata for the VM: compute.instances.setMetadata on the project To set tags for the VM: compute.instances.setTags on the VM To set labels for the VM: compute.instances.setLabels on the VM To set a service account for the VM to use: compute.instances.setServiceAccount on the VM To create a new disk for the VM: compute.disks.create on the project To attach an existing disk in read-only or read-write mode: compute.disks.use on the disk To attach an existing disk in read-only mode: compute.disks.useReadOnly on the disk You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to manage organization policies for Compute Engine resources, ask your administrator to grant you the following IAM roles: Organization policy administrator ( roles/orgpolicy.policyAdmin ) on the organization resource To test the constraints: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Example custom constraints for common use cases The following sections provide the syntax of some custom constraints that you might find useful: Disk Use case Syntax Persistent Disk type must be "Extreme persistent disk ( pd-extreme )" name : organizations/ ORGANIZATION ID /customConstraints/custom.createDisksPDExtremeOnly resource types : compute.googleapis.com/Disk condition : "resource.type.contains('pd-extreme')" action type : ALLOW method types : CREATE display name : Create pd-extreme disks only description : Only the extreme persistent disk type is allowed to be created.
- Organization Policy provides predefined constraints for various Google Cloud services.

