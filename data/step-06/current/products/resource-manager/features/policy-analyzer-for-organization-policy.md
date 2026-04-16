---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.067Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Policy Analyzer for Organization Policy"
feature_slug: "policy-analyzer-for-organization-policy"
latest_feature_date: "2024-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse"
  - "https://docs.cloud.google.com/resource-manager/reference/rest/v1/folders/listAvailableOrgPolicyConstraints"
  - "https://docs.cloud.google.com/resource-manager/reference/rest/v1/Policy"
keywords:
  - "policy"
  - "analyzer"
  - "organization"
  - "available"
  - "availability"
---

# Policy Analyzer for Organization Policy

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Policy Analyzer for Organization Policy is available in General Availability.

## Extended Definition

Policy Analyzer for Organization Policy is available in General Availability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)
- [https://docs.cloud.google.com/resource-manager/reference/rest/v1/folders/listAvailableOrgPolicyConstraints](https://docs.cloud.google.com/resource-manager/reference/rest/v1/folders/listAvailableOrgPolicyConstraints)
- [https://docs.cloud.google.com/resource-manager/reference/rest/v1/Policy](https://docs.cloud.google.com/resource-manager/reference/rest/v1/Policy)

## Supporting Pages

### "ListAvailableOrgPolicyConstraintsResponse \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Constraints can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for Constraints at different locations in the organization's resource hierarchy.
- JSON representation Constraint JSON representation ConstraintDefault ListConstraint JSON representation BooleanConstraint The response returned from the projects.listAvailableOrgPolicyConstraints method.
- Home Technology areas Resource Manager Reference Send feedback ListAvailableOrgPolicyConstraintsResponse Stay organized with collections Save and categorize content based on your preferences.
- ListConstraint A Constraint that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a Policy .

### "Method: folders.listAvailableOrgPolicyConstraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/reference/rest/v1/folders/listAvailableOrgPolicyConstraints](https://docs.cloud.google.com/resource-manager/reference/rest/v1/folders/listAvailableOrgPolicyConstraints)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Home Technology areas Resource Manager Reference Send feedback Method: folders.listAvailableOrgPolicyConstraints Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://cloudresourcemanager.googleapis.com/v1/{resource=folders/ }:listAvailableOrgPolicyConstraints The URL uses gRPC Transcoding syntax.
- Response body If successful, the response body contains an instance of ListAvailableOrgPolicyConstraintsResponse .
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/cloud-platform.read-only https://www.googleapis.com/auth/cloudplatformorganizations https://www.googleapis.com/auth/cloudplatformorganizations.readonly https://www.googleapis.com/auth/cloudplatformprojects https://www.googleapis.com/auth/cloudplatformprojects.readonly https://www.googleapis.com/auth/cloudplatformfolders https://www.googleapis.com/auth/cloudplatformfolders.readonly For more information, see the Authentication Overview .

### Policy \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/reference/rest/v1/Policy](https://docs.cloud.google.com/resource-manager/reference/rest/v1/Policy)
- Source ID: `site-api-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example 10 (allowed and denied subtrees of Resource Manager hierarchy): Given the following resource hierarchy O1->{F1, F2}; F1->{P1}; F2->{P2, P3}, organizations/foo has a Policy with values: {allowedValues: "under:organizations/O1"} projects/bar has a Policy with: {allowedValues: "under:projects/P3"} {deniedValues: "under:folders/F2"} The accepted values at organizations/foo are organizations/O1 , folders/F1 , folders/F2 , projects/P1 , projects/P2 , projects/P3 .
- The following examples demonstrate different possible layerings for projects/bar parented by organizations/foo : Example 1 (no inherited values): organizations/foo has a Policy with values: {allowedValues: "E1" allowedValues:"E2"} projects/bar has inheritFromParent false and values: {allowedValues: "E3" allowedValues: "E4"} The accepted values at organizations/foo are E1 , E2 .
- Example 2 (inherited values): organizations/foo has a Policy with values: {allowedValues: "E1" allowedValues:"E2"} projects/bar has a Policy with values: {value: "E3" value: "E4" inheritFromParent: true} The accepted values at organizations/foo are E1 , E2 .
- Example 3 (inheriting both allowed and denied values): organizations/foo has a Policy with values: {allowedValues: "E1" allowedValues: "E2"} projects/bar has a Policy with: {deniedValues: "E1"} The accepted values at organizations/foo are E1 , E2 .

