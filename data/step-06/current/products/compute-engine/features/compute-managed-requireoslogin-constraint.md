---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.122Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "compute.managed.requireOsLogin constraint"
feature_slug: "compute-managed-requireoslogin-constraint"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/access/managed-constraints"
  - "https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints"
  - "https://docs.cloud.google.com/compute/docs/access/organization-policies"
keywords:
  - "compute"
  - "managed"
  - "requireoslogin"
  - "constraint"
  - "organization"
  - "policy"
  - "enforces"
  - "security"
---

# compute.managed.requireOsLogin constraint

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

This managed organization policy constraint enforces a security control that requires OS Login on Compute Engine VMs.

## Extended Definition

This managed organization policy constraint enforces a security control that requires OS Login on Compute Engine VMs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints)
- [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies)

## Supporting Pages

### Managed constraints \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- Source ID: `site-docs-reference-required-6`
- Final score: 411
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metadata-based constraints and levels Constraint Metadata key Metadata hierarchy levels compute.managed.disableSerialPortAccess serial-port-enable Project, Zonal, Instance compute.managed.requireOsLogin enable-oslogin Project, Zonal, Instance compute.managed.disableGuestAttributesAccess enable-guest-attributes Project, Zonal, Instance compute.managed.requireOsConfig enable-osconfig Project, Zonal, Instance compute.managed.disallowGlobalDns VmDnsSetting Project, Instance Safe rollout: The policy lifecycle To prevent service disruptions when you gradually implement new constraints, Google recommends that you implement managed constraints by following these steps: Analyze with Policy Simulator Before enforcing a policy, use Policy Simulator to see which existing resources violate the policy.
- To exempt a project from the compute.managed.requireOsLogin constraint, bind the osLoginOptional=true tag to the project using the gcloud resource-manager tags bindings create command : gcloud resource-manager tags bindings create \ --tag-value = ORGANIZATION ID /osLoginOptional/true \ --parent = //cloudresourcemanager.googleapis.com/projects/ PROJECT ID \ --location = global Replace ORGANIZATION ID with your organization ID, and PROJECT ID with the ID of the project that you want to exempt.
- Update the policy: Create or update your policy YAML file (for example, policy.yaml ) to include the conditional rule. name : projects/ PROJECT ID /policies/compute.managed.requireOsLogin spec : rules : - condition : expression : "resource.matchTag(' ORGANIZATION ID /osLoginOptional', 'true')" enforce : false - enforce : true Replace the following: PROJECT ID : your project ID.
- For example, to test the compute.managed.requireOsLogin constraint, follow these steps: List existing policies to confirm your configuration: gcloud org-policies list --project = PROJECT ID Apply the enforcement policy using a YAML file: gcloud org-policies set-policy enforce managed constraint.yaml Verify enforcement by calling a mutation API.

### Organization policy constraints | Organization Policy | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints)
- Source ID: `feature-recovery-http`
- Final score: 403
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following organization policy constraints have a Google-managed default behavior that restricts operations: Organization policy constraint Constraint type constraints/appengine.runtimeDeploymentExemption Managed (legacy) constraints/cloudbuild.disableCreateDefaultServiceAccount Managed (legacy) constraints/cloudbuild.useBuildServiceAccount Managed (legacy) constraints/cloudbuild.useComputeServiceAccount Managed (legacy) constraints/commerceorggovernance.marketplaceServices Managed (legacy) constraints/compute.managed.blockPreviewFeatures Managed constraints/compute.sharedReservationsOwnerProjects Managed (legacy) constraints/container.managed.autopilotPrivilegedAdmission Managed constraints/iam.allowServiceAccountCredentialLifetimeExtension Managed (legacy) constraints/iam.disableCrossProjectServiceAccountUsage Managed (legacy) constraints/iam.managed.disableServiceAccountApiKeyCreation Managed constraints/iam.serviceAccountKeyExposureResponse Managed (legacy) constraints/resourcemanager.allowedExportDestinations Managed (legacy) constraints/resourcemanager.allowedImportSources Managed (legacy) constraints/resourcemanager.allowEnabledServicesForExport Managed (legacy) constraints/vertexai.allowedPartnerModelFeatures Managed (legacy) Available constraints You can create organization policies using the following constraints.
- First apply tags to mark the instances, and then use conditional rules based on tag values to properly scope those instances out of enforcement. constraints/compute.managed.disableGuestAttributesAccess Compute Engine Disable VM Nested Virtualization This boolean constraint disables hardware-accelerated nestedvirtualization for all Compute Engine VMs belonging to the organization, project, or folder where this constraint is set to True .
- You can apply/exempt this constraint by using tags to mark VM Instances and then enforcing the constraint with conditional rules based on the applied tags. constraints/compute.managed.restrictNonConfidentialComputing Compute Engine Restricts the use of protocol forwarding This constraint lets you restrict the types of protocol forwarding deployments (internal or external) that can be created in your organization.
- This constraint only applies to Compute Alpha API features. constraints/compute.managed.blockPreviewFeatures Compute Engine Block Project-wide SSH Keys Preview: This constraint prevents the block-project-ssh-keys metadata key from being set to false at the project, project-zonal, or instance level for Compute Engine VMs within the organization, project, or folder where this constraint is enforced.

### Organization policies for Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies)
- Source ID: `site-docs-reference-required-6`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Constraint types When you use the Organization Policy, you can apply the following types of constraints: Managed constraints : Google-provided, predefined constraints that are built on a modern platform, identifiable by the compute.managed. prefix.
- Managed constraints Managed constraints for Compute Engine simplify governance for common security scenarios and integrate with safe rollout tools, such as dry-run and Policy Simulator, which let you test their impact before enforcement.
- Compute Engine constraints The following sections list the Compute Engine constraints that Organization Policy supports.
- This constraint does not affect internal IPv6 addresses in VPC networks. compute.enableComplianceMemoryProtection Enables memory protection features on Compute Engine virtual machines. compute.requireConfidentialVm Requires that all new Compute Engine VM instances use Confidential VM. compute.requireGuestAttributes Requires Compute Engine guest attributes, which can be used to publish hostnames, IP addresses, and other instance-related information from within a virtual machine instance. compute.requireOsLogin Requires all new Compute Engine VM instances to enable OS Login. compute.requireShieldedVm Requires that all new VM instances are Shielded VMs. compute.restrictCloudNATUsage Restricts Cloud NAT usage to only specified VPC networks. compute.restrictDedicatedInterconnectUsage Restricts Dedicated Interconnect usage to only specified VPC networks. compute.restrictLoadBalancerCreationForTypes Restricts creation of load balancers to only allowed types. compute.restrictPartnerInterconnectUsage Restricts Partner Interconnect usage to only specified VPC networks. compute.restrictProtocolForwardingCreationForTypes Restricts creation of protocol forwarding to internal or external target instances. compute.restrictSharedVpcHostProjects Restricts the set of host projects that projects in scope can attach to. compute.restrictSharedVpcSubnetworks Restricts the set of Shared VPC subnetworks that projects in scope can use. compute.restrictVpcPeering Restricts VPC Network Peering to only allowed VPC networks. compute.restrictVpnPeerIPs Restricts VPN peer IPs to only allowed IPs. compute.setNewProjectDefaultToZonalDnsOnly When set to true , new projects default to Zonal DNS only; VMs created in these projects have zonal DNS names ( .zone.c.project-id.internal ).

