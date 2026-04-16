---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.121Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "compute.managed.disallowGlobalDns constraint"
feature_slug: "compute-managed-disallowglobaldns-constraint"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints"
  - "https://docs.cloud.google.com/compute/docs/access/managed-constraints"
  - "https://docs.cloud.google.com/compute/docs/access/organization-policies"
keywords:
  - "compute"
  - "managed"
  - "disallowglobaldns"
  - "constraint"
  - "organization"
  - "policy"
  - "enforces"
  - "security"
---

# compute.managed.disallowGlobalDns constraint

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

This managed organization policy constraint enforces a security control that disallows global DNS settings for Compute Engine VMs.

## Extended Definition

This managed organization policy constraint enforces a security control that disallows global DNS settings for Compute Engine VMs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints)
- [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies)

## Supporting Pages

### Organization policy constraints | Organization Policy | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints)
- Source ID: `feature-recovery-http`
- Final score: 399
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following organization policy constraints have a Google-managed default behavior that restricts operations: Organization policy constraint Constraint type constraints/appengine.runtimeDeploymentExemption Managed (legacy) constraints/cloudbuild.disableCreateDefaultServiceAccount Managed (legacy) constraints/cloudbuild.useBuildServiceAccount Managed (legacy) constraints/cloudbuild.useComputeServiceAccount Managed (legacy) constraints/commerceorggovernance.marketplaceServices Managed (legacy) constraints/compute.managed.blockPreviewFeatures Managed constraints/compute.sharedReservationsOwnerProjects Managed (legacy) constraints/container.managed.autopilotPrivilegedAdmission Managed constraints/iam.allowServiceAccountCredentialLifetimeExtension Managed (legacy) constraints/iam.disableCrossProjectServiceAccountUsage Managed (legacy) constraints/iam.managed.disableServiceAccountApiKeyCreation Managed constraints/iam.serviceAccountKeyExposureResponse Managed (legacy) constraints/resourcemanager.allowedExportDestinations Managed (legacy) constraints/resourcemanager.allowedImportSources Managed (legacy) constraints/resourcemanager.allowEnabledServicesForExport Managed (legacy) constraints/vertexai.allowedPartnerModelFeatures Managed (legacy) Available constraints You can create organization policies using the following constraints.
- Reverting a zDNS project to gDNS won't be blocked, but lead to policy violation enforcement during subsequent Instance API invocations. constraints/compute.managed.disallowGlobalDns Compute Engine Require OS Config This constraint, when enforced, requires enablement of VM Manager (OS Config) on all new projects.
- First apply tags to mark the instances, and then use conditional rules based on tag values to properly scope those instances out of enforcement. constraints/compute.managed.disableGuestAttributesAccess Compute Engine Disable VM Nested Virtualization This boolean constraint disables hardware-accelerated nestedvirtualization for all Compute Engine VMs belonging to the organization, project, or folder where this constraint is set to True .
- You can apply/exempt this constraint by using tags to mark VM Instances and then enforcing the constraint with conditional rules based on the applied tags. constraints/compute.managed.restrictNonConfidentialComputing Compute Engine Restricts the use of protocol forwarding This constraint lets you restrict the types of protocol forwarding deployments (internal or external) that can be created in your organization.

### Managed constraints \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- Source ID: `site-docs-reference-required-6`
- Final score: 347
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metadata-based constraints and levels Constraint Metadata key Metadata hierarchy levels compute.managed.disableSerialPortAccess serial-port-enable Project, Zonal, Instance compute.managed.requireOsLogin enable-oslogin Project, Zonal, Instance compute.managed.disableGuestAttributesAccess enable-guest-attributes Project, Zonal, Instance compute.managed.requireOsConfig enable-osconfig Project, Zonal, Instance compute.managed.disallowGlobalDns VmDnsSetting Project, Instance Safe rollout: The policy lifecycle To prevent service disruptions when you gradually implement new constraints, Google recommends that you implement managed constraints by following these steps: Analyze with Policy Simulator Before enforcing a policy, use Policy Simulator to see which existing resources violate the policy.
- Reverting a zDNS project to gDNS won't be blocked, but lead to policy violation enforcement during subsequent Instance API invocations. constraints/compute.managed.disallowGlobalDns Require OS Config This constraint, when enforced, requires enablement of VM Manager (OS Config) on all new projects.
- To exempt a project from the compute.managed.requireOsLogin constraint, bind the osLoginOptional=true tag to the project using the gcloud resource-manager tags bindings create command : gcloud resource-manager tags bindings create \ --tag-value = ORGANIZATION ID /osLoginOptional/true \ --parent = //cloudresourcemanager.googleapis.com/projects/ PROJECT ID \ --location = global Replace ORGANIZATION ID with your organization ID, and PROJECT ID with the ID of the project that you want to exempt.
- First apply tags to mark the instances, and then use conditional rules based on tag values to properly scope those instances out of enforcement. constraints/compute.managed.disableGuestAttributesAccess Disable VM Nested Virtualization This boolean constraint disables hardware-accelerated nestedvirtualization for all Compute Engine VMs belonging to the organization, project, or folder where this constraint is set to True .

### Organization policies for Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies)
- Source ID: `site-docs-reference-required-6`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Constraint types When you use the Organization Policy, you can apply the following types of constraints: Managed constraints : Google-provided, predefined constraints that are built on a modern platform, identifiable by the compute.managed. prefix.
- Managed constraints Managed constraints for Compute Engine simplify governance for common security scenarios and integrate with safe rollout tools, such as dry-run and Policy Simulator, which let you test their impact before enforcement.
- Compute Engine constraints The following sections list the Compute Engine constraints that Organization Policy supports.
- You can use organization policies to enforce constraints on how Compute Engine resources, such as virtual machine (VM) instances, disks, and networks, are configured.

