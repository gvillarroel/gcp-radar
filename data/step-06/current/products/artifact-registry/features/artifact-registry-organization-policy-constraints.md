---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.481Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry organization policy constraints"
feature_slug: "artifact-registry-organization-policy-constraints"
latest_feature_date: "2024-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/custom-constraints"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/cmek"
keywords:
  - "organization"
  - "constraints"
  - "governance"
  - "policy"
  - "supports"
---

# Artifact Registry organization policy constraints

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry now supports organization policy constraints for governance configuration.

## Extended Definition

Artifact Registry now supports organization policy constraints for governance configuration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/custom-constraints](https://docs.cloud.google.com/artifact-registry/docs/custom-constraints)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)

## Supporting Pages

### "Use custom organization policies \_|\_ Artifact Registry \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/custom-constraints](https://docs.cloud.google.com/artifact-registry/docs/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- Organization Policy provides predefined constraints for various Google Cloud services.
- See the full list of predefined organization policy constraints .

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Artifact Registry also supports organization policy constraints that can require CMEK to protect resources.
- Restricting repository locations If you need to comply with regulations or policies that require you to store data in specific regions, you can include a resource locations constraint in your Google Cloud organization policy that only allows repository creation in compliant regions.
- However, these default might not be suitable for your software development process or might not comply with security or policy requirements in your organization.
- Artifact Registry only enforces the constraint after you include it in your organization policy.

### "Enabling customer-managed encryption keys \_|\_ Artifact Registry \_|\_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CMEK organization policies Artifact Registry supports organization policy constraints that can require CMEK protection.
- When constraints/gcp.restrictCmekCryptoKeyProjects is configured, Artifact Registry creates CMEK-protected repositories that are protected by a CryptoKey from an allowed project, folder, or organization.
- When Artifact Registry API is in the Deny policy list of services of constraint constraints/gcp.restrictNonCmekServices , Artifact Registry refuses to create new repositories that aren't CMEK-protected.
- However, if the Pub/Sub API is in the Deny policy list for the constraint constraints/gcp.restrictNonCmekServices , then Pub/Sub won't create the topic.

