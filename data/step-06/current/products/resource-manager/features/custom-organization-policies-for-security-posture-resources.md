---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.051Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Custom organization policies for security posture resources"
feature_slug: "custom-organization-policies-for-security-posture-resources"
latest_feature_date: "2025-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies"
  - "https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization"
keywords:
  - "custom"
  - "organization"
  - "policies"
  - "security"
  - "posture"
  - "resources"
  - "more"
  - "granular"
---

# Custom organization policies for security posture resources

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Security posture resources support custom organization policies for more granular control over specific resources.

## Extended Definition

Security posture resources support custom organization policies for more granular control over specific resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization)

## Supporting Pages

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: cloudresourcemanager.googleapis.com/Project cloudresourcemanager.googleapis.com/Folder To learn more about Organization Policy, see Custom organization policies .
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.
- Benefits For security, compliance, and governance, you can use custom organization policies in the following ways: Govern the project naming patterns: You can create a custom constraint on the project ID.
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-allow-dev-projects.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.allowProjectForDevIdOnly ALLOW CREATE,UPDATE cloudresourcemanager.googleapis.com/Project Allow dev projects ...

### "Create custom constraints for Essential Contacts \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- Source ID: `site-docs-reference-2`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: essentialcontacts.googleapis.com/Contact To learn more about Organization Policy, see Custom organization policies .
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.
- Test the policy Try creating a contact for a different category: gcloud essential-contacts create --email = randomemail@example.com --language = en --notification-categories = security The output is similar to the following: (gcloud.essential-contacts.create) FAILED PRECONDITION: Precondition check failed. - '@type': type.googleapis.com/google.rpc.ErrorInfo domain: iam.googleapis.com metadata: customConstraints: customConstraints/custom.onlyTechnicalNotificationsAllowed reason: CUSTOM ORG POLICY VIOLATION - '@type': type.googleapis.com/google.rpc.DebugInfo detail: '[ORIGINAL ERROR] generic::failed precondition: com.google.apps.framework.auth.IamFailedPreconditionException: Operation denied by custom org policy: ["customConstraints/custom.onlyTechnicalNotificationsAllowed": "The contact can only be subscribed to technical notifications."]. [google.rpc.error details ext] { details { [type.googleapis.com/google.rpc.ErrorInfo] { reason: "CUSTOM ORG POLICY VIOLATION" domain: "iam.googleapis.com" metadata { key: "customConstraints" value: "customConstraints/custom.onlyTechnicalNotificationsAllowed" } } } }' Essential Contacts supported resources The following table lists the Essential Contacts resources that you can reference in custom constraints.
- Apply the constraint: gcloud org-policies set-custom-constraint constraint-technical-notification.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.onlyTechnicalNotificationsAllowed ALLOW CREATE,UPDATE essentialcontacts.googleapis.com/Contact TechnicalNotifications ...

### "Set up a Google Cloud organization resource \_|\_ Resource Manager \_|\_\

- URL: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud security baseline Google Cloud security baseline addresses insecure security postures with a bundle of organization policies that are enforced when an organization resource is created.
- Note that, because allow and deny policies are inherited down the hierarchy, having the Project Creator role assigned to the entire domain ( domain:mycompany.com ) at the organization resource level implies that every user in the domain can create projects anywhere in the hierarchy.
- The Settings page displays your organization resource ID. gcloud To find your organization resource ID, run the following command: gcloud organizations list This command lists all the organization resources to which you belong to, and their corresponding organization resource IDs.
- As the Organization Administrator takes control, they might want to remove these organization-level permissions to start locking down access at a finer granularity (for instance, at the folder or project level).

