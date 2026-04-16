---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.069Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Secure-by-default organization policy enforcement"
feature_slug: "secure-by-default-organization-policy-enforcement"
latest_feature_date: "2024-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview"
  - "https://docs.cloud.google.com/resource-manager/reference/rest/v1/Policy"
keywords:
  - "secure"
  - "default"
  - "organization"
  - "policy"
  - "enforcement"
  - "bundle"
  - "policies"
  - "enforced"
---

# Secure-by-default organization policy enforcement

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

A bundle of organization policies is enforced when an organization resource is created to improve its default security posture.

## Extended Definition

A bundle of organization policies is enforced when an organization resource is created to improve its default security posture.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- [https://docs.cloud.google.com/resource-manager/reference/rest/v1/Policy](https://docs.cloud.google.com/resource-manager/reference/rest/v1/Policy)

## Supporting Pages

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud security baseline addresses insecure security postures with a bundle of organization policies that are enforced when an organization resource is created.
- Manage enforcement of organization policies You can manage the enforcement of organization policies in the following ways: List organization policies To check whether the Google Cloud security baseline constraints are enforced on your organization, use the following command: gcloud resource-manager org-policies list --organization = ORGANIZATION ID Replace ORGANIZATION ID with the unique identifier of your organization.
- Organization policies enforced on organization resources The following table lists the organization policy constraints that are automatically enforced when you create an organization resource.
- Some organizations created between February 2024 and April 2024 might also have these default policy enforcements set.

### Tags overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you enforce mandatory tags, you can only create resources that comply with your organization's tagging policies; that is, resources are bound with the tag values for the mandatory tag keys specified in the policy.
- Enforcement of mandatory tags using organization policies Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- You can then write policies that address the enforcement tag key, with conditions that affect a resource if it is enforcement: on or enforcement: off , and a safe case if it is enforcement: default .
- Bind the tag value enforcement: off to the organization to create a safe default that's inherited by all resources within the organization.

### Policy \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/reference/rest/v1/Policy](https://docs.cloud.google.com/resource-manager/reference/rest/v1/Policy)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example 2 (enforcement gets replaced): organizations/foo has a Policy with: {enforced: false} projects/bar has a Policy with: {enforced: true} The constraint at organizations/foo is not enforced.
- Example 3 (RestoreDefault): organizations/foo has a Policy with: {enforced: true} projects/bar has a Policy with: {RestoreDefault: {}} The constraint at organizations/foo is enforced.
- A Policy for that Constraint exhibits the following behavior: - If the Policy at this resource has enforced set to false , serial port connection attempts will be allowed. - If the Policy at this resource has enforced set to true , serial port connection attempts will be refused. - If the Policy at this resource is RestoreDefault , serial port connection attempts will be allowed. - If no Policy is set at this resource or anywhere higher in the resource hierarchy, serial port connection attempts will be allowed. - If no Policy is set at this resource, but one exists higher in the resource hierarchy, the behavior is as if the Policy were set at this resource.
- They could then set a Policy with the policyType restoreDefault on several experimental projects, restoring the constraintDefault enforcement of the Constraint for only those projects, allowing those projects to have all services activated.

