---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.045Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Mandatory tags enforcement with custom organization policies"
feature_slug: "mandatory-tags-enforcement-with-custom-organization-policies"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview"
  - "https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies"
keywords:
  - "mandatory"
  - "tags"
  - "enforcement"
  - "custom"
  - "organization"
  - "policies"
  - "can"
  - "enforce"
---

# Mandatory tags enforcement with custom organization policies

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Custom organization policies can enforce mandatory tags on newly created resources.

## Extended Definition

Custom organization policies can enforce mandatory tags on newly created resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)

## Supporting Pages

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more about tags enforcement, see Enforcement of mandatory tags using organization policies .
- Set up a custom constraint with the following parameters: Enforcement method : Govern tags Resource type : the fully qualified name of the Google Cloud REST resource that you want to enforce mandatory tags on, for example, file.googleapis.com/Instance Condition : a Common Expression Language (CEL) condition specifying the tag keys that you want to enforce on the resource, for example resource.hasDirectTagKey("1234567890/owner") to enforce a tag binding for the tag key 1234567890/owner .
- To enforce mandatory tags on resources, create a custom organization policy and set the policy on an organization, folder, or project resource to enforce the custom constraint.
- Organization policies and tags You can use tags and conditional enforcement of organization policies to provide centralized control of the resources in your hierarchy.

### Tags overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- Source ID: `site-docs-reference-2`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enforcement of mandatory tags using organization policies Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- When you enforce mandatory tags, you can only create resources that comply with your organization's tagging policies; that is, resources are bound with the tag values for the mandatory tag keys specified in the policy.
- You can enforce mandatory tags on resources by using a custom organization policy.
- Enforcement of mandatory tags is supported for the following resource types: Resource Manager projects and folders Filestore instances AlloyDB for PostgreSQL cluster and backup resources Workflows workflow Compute Engine resources: Instances Disks VPC resources: Networks Subnetworks Firewall rules Routes Tag inheritance When a tag value is attached to a resource, by default, all descendants of the resource inherit the same tag value.

### "Create custom constraints for Essential Contacts \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- Source ID: `site-docs-reference-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- Apply the constraint: gcloud org-policies set-custom-constraint constraint-technical-notification.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.onlyTechnicalNotificationsAllowed ALLOW CREATE,UPDATE essentialcontacts.googleapis.com/Contact TechnicalNotifications ...
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: essentialcontacts.googleapis.com/Contact To learn more about Organization Policy, see Custom organization policies .
- To enforce the organization policy in dry-run mode , run the following command with the dryRunSpec flag: gcloud org-policies set-policy POLICY PATH --update-mask = dryRunSpec Replace POLICY PATH with the full path to your organization policy YAML file.

