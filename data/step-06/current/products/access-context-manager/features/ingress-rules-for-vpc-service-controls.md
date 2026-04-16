---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.651Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Ingress rules for VPC Service Controls"
feature_slug: "ingress-rules-for-vpc-service-controls"
latest_feature_date: "2021-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/overview"
  - "https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups"
  - "https://docs.cloud.google.com/access-context-manager/docs/access-control"
keywords:
  - "control"
  - "ingress"
  - "rules"
  - "controls"
---

# Ingress rules for VPC Service Controls

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls now support ingress rules for access control.

## Extended Definition

VPC Service Controls now support ingress rules for access control.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups)
- [https://docs.cloud.google.com/access-context-manager/docs/access-control](https://docs.cloud.google.com/access-context-manager/docs/access-control)

## Supporting Pages

### "Apply policies to user groups using access bindings \_|\_ Access Context\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups)
- Source ID: `site-iam-reference`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Preview — Session controls feature only This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Define configurations for specific applications This method lets you apply different access levels and session controls to different applications.
- If you also define session controls in the YAML file, those session controls override the default settings for those specific applications.
- Working with session controls To set default session controls for all applications, use --session-length and --session-reauth-method .

### Access Context Manager Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can configure and enforce Access Context Manager policies across the following Chrome Enterprise Premium solution components: VPC Service Controls Identity-Aware Proxy Context-Aware Access for Google Workspace Identity and Access Management (IAM) conditions Benefits Many companies rely on a perimeter security model such as a firewall to secure internal resources.
- For example, you can use this scenario to enable a Cloud Function to access data protected by VPC Service Controls.
- Policy is configured and enforced across various points, such as VPC Service Controls .
- This scenario is often used together with Service Accounts and VPC Service Controls .

### "Access control with IAM \_|\_ Access Context Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/access-control](https://docs.cloud.google.com/access-context-manager/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- To grant one of these roles, use the Google Cloud console or use the gcloud command-line tool: Admin allows read-write access gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member = "user:example@customer.org" \ --role = "roles/accesscontextmanager.policyAdmin" Editor allows read-write access gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member = "user:example@customer.org" \ --role = "roles/accesscontextmanager.policyEditor" Reader allows read-only access gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member = "user:example@customer.org" \ --role = "roles/accesscontextmanager.policyReader" Organization Viewer allows access to VPC Service Controls using the Google Cloud console gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member = "user:example@customer.org" \ --role = "roles/resourcemanager.organizationViewer" What's next Access Context Manager overview Create an access policy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Security Access Context Manager Guides Send feedback Access control with IAM Stay organized with collections Save and categorize content based on your preferences.
- The access control for scoped policies is independent of the projects or folders in their scopes.

