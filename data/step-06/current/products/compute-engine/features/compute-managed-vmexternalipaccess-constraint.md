---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.123Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "compute.managed.vmExternalIpAccess constraint"
feature_slug: "compute-managed-vmexternalipaccess-constraint"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/access/managed-constraints"
  - "https://docs.cloud.google.com/compute/docs/access/organization-policies"
keywords:
  - "compute"
  - "managed"
  - "vmexternalipaccess"
  - "constraint"
  - "organization"
  - "policy"
  - "enforces"
  - "governance"
---

# compute.managed.vmExternalIpAccess constraint

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

This managed organization policy constraint enforces governance for external IP access on Compute Engine VMs.

## Extended Definition

This managed organization policy constraint enforces governance for external IP access on Compute Engine VMs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies)

## Supporting Pages

### Managed constraints \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- Source ID: `site-docs-reference-required-6`
- Final score: 343
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metadata-based constraints and levels Constraint Metadata key Metadata hierarchy levels compute.managed.disableSerialPortAccess serial-port-enable Project, Zonal, Instance compute.managed.requireOsLogin enable-oslogin Project, Zonal, Instance compute.managed.disableGuestAttributesAccess enable-guest-attributes Project, Zonal, Instance compute.managed.requireOsConfig enable-osconfig Project, Zonal, Instance compute.managed.disallowGlobalDns VmDnsSetting Project, Instance Safe rollout: The policy lifecycle To prevent service disruptions when you gradually implement new constraints, Google recommends that you implement managed constraints by following these steps: Analyze with Policy Simulator Before enforcing a policy, use Policy Simulator to see which existing resources violate the policy.
- To exempt a project from the compute.managed.requireOsLogin constraint, bind the osLoginOptional=true tag to the project using the gcloud resource-manager tags bindings create command : gcloud resource-manager tags bindings create \ --tag-value = ORGANIZATION ID /osLoginOptional/true \ --parent = //cloudresourcemanager.googleapis.com/projects/ PROJECT ID \ --location = global Replace ORGANIZATION ID with your organization ID, and PROJECT ID with the ID of the project that you want to exempt.
- First apply tags to mark the instances, and then use conditional rules based on tag values to properly scope those instances out of enforcement. constraints/compute.managed.disableGuestAttributesAccess Disable VM Nested Virtualization This boolean constraint disables hardware-accelerated nestedvirtualization for all Compute Engine VMs belonging to the organization, project, or folder where this constraint is set to True .
- You can apply/exempt this constraint by using tags to mark VM Instances and then enforcing the constraint with conditional rules based on the applied tags. constraints/compute.managed.restrictNonConfidentialComputing Restricts the use of protocol forwarding This constraint lets you restrict the types of protocol forwarding deployments (internal or external) that can be created in your organization.

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
- You can use organization policies to enforce constraints on how Compute Engine resources, such as virtual machine (VM) instances, disks, and networks, are configured.

### "Organization policy control of MCP servers deprecation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation)
- Source ID: `site-docs-reference-required-4`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The custom constraint gcp.managed.allowedMCPServices and organization policy control of MCP use were deprecated on February 17, 2026 and shut down on March 17, 2026.
- Home Documentation Developer tools Google Cloud MCP servers Resources Send feedback Organization policy control of MCP servers deprecation Stay organized with collections Save and categorize content based on your preferences.

