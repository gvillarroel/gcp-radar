---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.049Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Custom organization policies for Essential Contacts"
feature_slug: "custom-organization-policies-for-essential-contacts"
latest_feature_date: "2025-02-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies"
  - "https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts"
keywords:
  - "custom"
  - "organization"
  - "policies"
  - "essential"
  - "contacts"
  - "supports"
  - "more"
  - "granular"
---

# Custom organization policies for Essential Contacts

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Essential Contacts supports custom organization policies for more granular control over the service.

## Extended Definition

Essential Contacts supports custom organization policies for more granular control over the service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- [https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts](https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts)
- [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts)

## Supporting Pages

### "Create custom constraints for Essential Contacts \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- Source ID: `site-docs-reference-2`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: essentialcontacts.googleapis.com/Contact To learn more about Organization Policy, see Custom organization policies .
- Apply the constraint: gcloud org-policies set-custom-constraint constraint-technical-notification.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.onlyTechnicalNotificationsAllowed ALLOW CREATE,UPDATE essentialcontacts.googleapis.com/Contact TechnicalNotifications ...
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.
- Before you begin, you need to know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-technical-notification.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.onlyTechnicalNotificationsAllowed resourceTypes : - essentialcontacts.googleapis.com/TechnicalNotifications methodTypes : - CREATE - UPDATE condition : "resource.notificationCategorySubscriptions \ [0 \ ] == 'TECHNICAL' && resource.notificationCategorySubscriptions.size()==1" actionType : ALLOW displayName : TechnicalNotifications description : The contact can only be subscribed to technical notifications.

### Essential Contacts overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts](https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts)
- Source ID: `site-docs-reference-2`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security bulletins Vulnerability alerts, including details on detected critical vulnerabilities affecting your resources Data breach incidents Information on detected malicious attacks originating from or targeting your resources Advisories on widespread threats that might require user attention Abuse and security incident notifications Terms of Service violations Notifications related to project deletion IT security teams Security Operations Center (SOC) Operations security personnel Incident response teams Chief Information Security Officer (CISO) Organization Administrator ( roles/resourcemanager.organizationAdmin ) Security is a highly specialized area; direct alerts to security experts that you set as custom contacts help with rapid response and mitigation.
- Enforcement actions related to your services Regulatory compliance updates Government notices or legal requests concerning your account Changes to Terms of Service or other legal agreements Legal counsel Compliance officers Government relations specialists Other relevant legal team members from your organization Billing Account Administrator ( roles/billing.admin ) Legal matters often require specialized legal team review; direct routing to custom contacts is crucial.
- N/A (It is recommended for broad oversight if specific categories aren't granularly assigned.) N/A Best practices for Essential Contacts Follow these best practices to configure and manage your Essential Contacts effectively: Use group aliases, mailing lists, or shared email addresses : Configure distribution lists or group email addresses like security-team@yourcompany.com or gcp-billing@yourcompany.com instead of individual email addresses to receive notifications.
- Some notifications for Essential Contacts might include a footer similar to the following to help you identify why you received the message: "You are receiving this message because your administrator has designated you as an essential contact for the CATEGORY NAME category." Notification categories You can assign custom contacts to several notification categories.

### Manage Essential Contacts \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set advanced configurations and automation This section covers options for further management of your Essential Contacts, including restricting contact domains, using Infrastructure as Code (IaC) with Terraform for automation, and creating custom organization policies.
- Enable the API Required roles To get the permissions that you need to manage contacts, ask your administrator to grant you the following IAM roles on the project, folder, or organization where the contact is assigned: To view contacts: Essential Contacts Viewer ( roles/essentialcontacts.viewer ) To view, edit, delete, and create contacts: Essential Contacts Admin ( roles/essentialcontacts.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Then, make the request: $cred = gcloud auth application-default print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://essentialcontacts.googleapis.com/v1/ RESOURCE TYPE / RESOURCE ID /contacts:compute?notificationCategories= NOTIFICATION CATEGORY &pageSize= PAGE SIZE &pageToken= NEXT PAGE TOKEN " Select-Object -Expand Content After sending the request, you receive a JSON response similar to the following example: { "contacts": [ { "name": "projects/my-projects/contacts/1", "email": "my-project-contact-1@example.com", "notificationCategorySubscriptions": [ "ALL" ], "languageTag": "en-US" }, { "name": "projects/my-projects/contacts/2", "email": "my-project-contact-2@example.com", "notificationCategorySubscriptions": [ "BILLING" ], "languageTag": "en-US" }, { "name": "organizations/my-organization/contacts/1", "email": "my-organization-contact@example.com", "notificationCategorySubscriptions": [ "ALL" ], "languageTag": "en-US" } ] } Add a contact Important: Some Google Cloud services capture the list of recipients for a notification campaign, such as a Mandatory Service Announcement (MSA), in advance.
- The response is similar to the following example: --- email : my-contact-1@example.com languageTag : en-US name : projects/my-projects/contacts/1 notificationCategorySubscriptions : - ALL --- email : my-contact-2@example.com languageTag : en-US name : projects/my-projects/contacts/2 notificationCategorySubscriptions : - BILLING --- email : my-organization-contact@example.com languageTag : en-US name : organizations/my-organization/contacts/1 notificationCategorySubscriptions : - ALL --- REST With the Essential Contacts REST API, you can either list the contacts that are defined on a resource or list all contacts and inherited contacts for a resource.

