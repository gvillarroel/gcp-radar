---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.089Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Cloud Interconnect usage restriction organization policy constraint"
feature_slug: "cloud-interconnect-usage-restriction-organization-policy-constraint"
latest_feature_date: "2020-08-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/handle-special-cases"
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview"
keywords:
  - "interconnect"
  - "usage"
  - "restriction"
  - "organization"
  - "policy"
  - "constraint"
  - "restricts"
  - "through"
---

# Cloud Interconnect usage restriction organization policy constraint

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Restricts Cloud Interconnect usage through an organization policy constraint.

## Extended Definition

Restricts Cloud Interconnect usage through an organization policy constraint.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/handle-special-cases](https://docs.cloud.google.com/resource-manager/docs/handle-special-cases)
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview](https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview)

## Supporting Pages

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- Apply the policy: gcloud org-policies set-policy /policy-enable-dev-projects.yaml Verify that the policy exists: gcloud org-policies list --organization = ORGANIZATION ID The output is similar to the following: CONSTRAINT LIST POLICY BOOLEAN POLICY ETAG custom.allowProjectForDevIdOnly - SET COCsm5QGENiXi2E= After you apply the policy, Google Cloud takes about two minutes to start enforcing the policy.
- Test the policy Create a project with project ID sampleDemoProject in the organization: gcloud projects create sampleDemoProject \ --organization = ORGANIZATION ID The output is the following: PERMISSION DENIED: The caller does not have permission Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.

### Handle special cases \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/handle-special-cases](https://docs.cloud.google.com/resource-manager/docs/handle-special-cases)
- Source ID: `site-iam-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- However, you will not be able to use that service account on any resources that have a domain restriction organization policy applied to them that restricts them to the source organization resource's domain.
- You have applied an organization policy with the domain restriction constraint to project-C , which only allows it to access the domain of organizations/12345678901.
- Repeat steps 3 and 4 for each of the following organization policy constraints: appengine.enforceServiceAccountActAsCheck dataflow.enforceComputeDefaultServiceAccountCheck dataproc.enforceComputeDefaultServiceAccountCheck composer.enforceServiceAccountActAsCheck If any of these organization policy constraints appear, your organization resource uses the legacy behavior.
- First, a user with the roles/orgpolicy.policyAdmin role in the source organization resource must set an organization policy containing the constraints/resourcemanager.allowEnabledServicesForExport constraint on the parent of the project to be exported.

### "Introduction to organization restrictions \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview](https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For managed devices in an organization, the organization restrictions feature restricts access only to resources in authorized Google Cloud organizations.
- The organization restrictions feature lets you prevent data exfiltration through phishing or insider attacks.
- The following diagram illustrates how the different components work to enforce organization restrictions: The architecture diagram shows the following components: Managed device : A device that is governed by the organization policies of a company.
- Common use cases Here are some common organization restrictions use cases: Restrict access to employees in your organization so that employees can access resources only in your Google Cloud organization and not other organizations.

