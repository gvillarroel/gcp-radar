---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.573Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access Context Manager custom organization policies"
feature_slug: "access-context-manager-custom-organization-policies"
latest_feature_date: "2025-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/custom-constraints"
keywords:
  - "organization-wide access constraints"
  - "custom organization policy constraints"
  - "custom org constraints"
  - "Access Context Manager custom constraints"
  - "access policy custom conditions"
  - "custom org policies"
  - "custom organization policies"
---

# Access Context Manager custom organization policies

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

Access Context Manager now supports custom organization policies for defining access constraints.

## Extended Definition

Access Context Manager custom organization policies are implemented using Organization Policy Service custom constraints to define restrictions on specific operations for Access Context Manager resources such as AccessPolicy, AccessLevel, AuthorizedOrgsDesc, and ServicePerimeter. The feature is used to enforce these constraints through custom organization policy constraints, and managing them requires the Organization Policy Administrator (roles/orgpolicy.policyAdmin) IAM role on the organization.

## Evidence Summary

The cited documentation page confirms that Access Context Manager supports Organization Policy custom constraints on its key resources and identifies the exact IAM role needed to manage those custom policies.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/custom-constraints](https://docs.cloud.google.com/access-context-manager/docs/custom-constraints)

## Supporting Pages

### "Create custom constraints for Access Context Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/custom-constraints](https://docs.cloud.google.com/access-context-manager/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: STRONG
- Re-rank rationale: The document is explicitly about creating custom constraints for Access Context Manager using Organization Policy Service, which directly defines how custom organization policies are applied to its resources.

Evidence snippets:
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: accesscontextmanager.googleapis.com/AccessPolicy accesscontextmanager.googleapis.com/AccessLevel accesscontextmanager.googleapis.com/AuthorizedOrgsDesc accesscontextmanager.googleapis.com/ServicePerimeter To learn more about Organization Policy, see Custom organization policies .
- This command is authenticated as USER which is the active account specified by the [core/account] property '@type': type.googleapis.com/google.rpc.DebugInfo detail: '[ORIGINAL ERROR] generic::permission denied: com.google.apps.framework.request.ForbiddenException: The user is not authorized!' Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Required roles To get the permissions that you need to manage custom organization policies, ask your administrator to grant you the Organization Policy Administrator ( roles/orgpolicy.policyAdmin ) IAM role on the organization resource.

