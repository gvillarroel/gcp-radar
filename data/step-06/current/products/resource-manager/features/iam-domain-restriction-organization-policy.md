---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.093Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "IAM domain restriction organization policy"
feature_slug: "iam-domain-restriction-organization-policy"
latest_feature_date: "2020-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview"
  - "https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs"
  - "https://docs.cloud.google.com/resource-manager/docs/handle-special-cases"
keywords:
  - "iam"
  - "domain"
  - "restriction"
  - "organization"
  - "policy"
  - "restricts"
  - "domains"
  - "through"
---

# IAM domain restriction organization policy

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Restricts IAM domains through an organization policy.

## Extended Definition

Restricts IAM domains through an organization policy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview](https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview)
- [https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs](https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs)
- [https://docs.cloud.google.com/resource-manager/docs/handle-special-cases](https://docs.cloud.google.com/resource-manager/docs/handle-special-cases)

## Supporting Pages

### "Introduction to organization restrictions \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview](https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview)
- Source ID: `site-docs-reference-2`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For managed devices in an organization, the organization restrictions feature restricts access only to resources in authorized Google Cloud organizations.
- The organization restrictions feature lets you prevent data exfiltration through phishing or insider attacks.
- The following diagram illustrates how the different components work to enforce organization restrictions: The architecture diagram shows the following components: Managed device : A device that is governed by the organization policies of a company.
- Common use cases Here are some common organization restrictions use cases: Restrict access to employees in your organization so that employees can access resources only in your Google Cloud organization and not other organizations.

### "Manage multiple organization resources \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs](https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs)
- Source ID: `site-iam-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Each of the two domains have their own Google Workspace accounts, with hypothetical.com being the primary organization resource.
- They can remove the domain from the Project Creator role in the organization resource's allow policy as well.
- Example The following diagram illustrates an organization with a primary domain that is kept isolated from an acquired secondary domain.
- For more information about using multiple domains, see Add a user alias domain or secondary domain .

### Handle special cases \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/handle-special-cases](https://docs.cloud.google.com/resource-manager/docs/handle-special-cases)
- Source ID: `site-iam-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- However, you will not be able to use that service account on any resources that have a domain restriction organization policy applied to them that restricts them to the source organization resource's domain.
- You have applied an organization policy with the domain restriction constraint to project-C , which only allows it to access the domain of organizations/12345678901.
- That project will continue to work with the attached service account even if there is an organization policy that restricts the domain of that project.
- If you migrate project-A to organizations/45678901234 , and then try to add serviceAccount-1 to the IAM binding for project-C , the binding will fail as it violates the domain restriction constraint.

