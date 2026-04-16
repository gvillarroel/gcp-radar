---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.088Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Tags"
feature_slug: "tags"
latest_feature_date: "2021-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services"
keywords:
  - "tags"
  - "let"
  - "you"
  - "conditionally"
  - "allow"
  - "deny"
  - "policies"
  - "based"
---

# Tags

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Tags let you conditionally allow or deny policies based on whether a resource has a specific tag; Tags let you conditionally allow or deny policies based on whether a resource has a specific tag.

## Extended Definition

Tags let you conditionally allow or deny policies based on whether a resource has a specific tag; Tags let you conditionally allow or deny policies based on whether a resource has a specific tag.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services](https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services)

## Supporting Pages

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use tags to conditionally allow or deny policies based on whether a supported resource has a specific tag.
- Policies and tags You can use tags with policies that support them to conditionally enforce those policies.
- When you grant roles to users on the project, the roles should always be conditionally granted to require the attachment of the costCenter tag. resource.hasTagKey('123456789012/costCenter') Important: Ensure that any roles you grant to your developers don't include any setIamPolicy permissions, as these allow your developers to modify the project's allow policy, where they could remove any conditional restrictions you may have put into place.
- You should get a response similar to the following: name: tagKeys/123456789012 short name: environment namespaced name: 123456789012/environment parent: organizations/123456789012 For tags with dynamic values, the response also contains the allowedValuesRegex field that displays the RE2 regular expression used to validate any dynamic tag values entered when the tag is applied to a resource.

### Tags overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- Source ID: `site-docs-reference-2`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tags provide a way to create annotations for resources, and in some cases conditionally allow or deny policies based on whether a resource has a specific tag.
- The following table lists some of the differences between tags and labels: Tags Labels Resource structure Tag keys, tag values, and tag bindings are all discrete resources Not a resource in itself, but metadata for resources Definition Defined at the organization or project level Defined by each resource Access control Management and attachment of tags requires Identity and Access Management (IAM) roles Attachment of labels requires IAM roles , which vary based on the service resource Prerequisite for attachment The tag key and tag value must be defined before a tag can be attached to a resource No prerequisites for attachment Inheritance Tag bindings are inherited by children of the resource in the Google Cloud hierarchy Not inherited by children of the resource Deletion requirements Tags can't be deleted unless no tag bindings for that tag exist Can be removed from a resource at any time Naming requirements Requirements for tag values and tag keys Requirements for labels Key-value name length 256 characters maximum 63 characters maximum Allow and deny policy support Tags can be referenced by allow policy conditions and deny policy conditions No allow and deny policy support Organization policy support Tags on some resources can be referenced by organization policy conditional constraints No organization policy support Cloud Billing integration Perform chargebacks, audits, and other cost allocation analysis, export Cloud Billing cost data to BigQuery Filter resources by label in Cloud Billing, export Cloud Billing data to BigQuery For more information about labels, see Creating and managing labels .
- Policies and tags You can use tags and IAM conditions together to: Conditionally grant IAM roles Conditionally deny IAM permissions After you create a tag value, you can bind the tag value to resources.
- When you enforce mandatory tags, you can only create resources that comply with your organization's tagging policies; that is, resources are bound with the tag values for the mandatory tag keys specified in the policy.

### Services that support tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services](https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services)
- Source ID: `site-docs-reference-2`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tags let you create annotations for resources, and in some cases conditionally allow or deny policies based on whether a resource has a specific tag.
- Google Cloud service Resource types Identity and Access Management (IAM) Allow and deny policies Organization Policy Service Organization policies Resources that support tags Virtual Private Cloud (VPC) Network firewall policies VM instances Secure Web Proxy instances The following sections describe how you can use tags with policy engine services.
- Identity and Access Management You can conditionally grant IAM roles or conditionally deny IAM permissions based on whether a resource has a specific tag.
- Referencing tags in these policies allows you to finely tune the way they operate on supported resources in your Google Cloud resource hierarchy.

