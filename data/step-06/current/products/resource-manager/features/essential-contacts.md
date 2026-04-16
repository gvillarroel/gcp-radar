---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.088Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Essential Contacts"
feature_slug: "essential-contacts"
latest_feature_date: "2020-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts"
  - "https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts"
  - "https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies"
keywords:
  - "essential"
  - "contacts"
  - "lets"
  - "you"
  - "customize"
  - "who"
  - "receives"
  - "notifications"
---

# Essential Contacts

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Essential Contacts lets you customize who receives Google Cloud notifications.

## Extended Definition

Essential Contacts lets you customize who receives Google Cloud notifications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts)
- [https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts](https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts)
- [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)

## Supporting Pages

### Manage Essential Contacts \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The resource selector lets you select the project, folder, or organization from which you want to manage Essential Contacts.
- The resource selector lets you select the project, folder, or organization from which you want to delete Essential Contacts.
- The resource selector lets you select the project, folder, or organization from which you want to manage Essential Contacts.
- The resource selector lets you select the project, folder, or organization from which you want to manage Essential Contacts.

### Essential Contacts overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts](https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts)
- Source ID: `site-docs-reference-2`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- N/A (It is recommended for broad oversight if specific categories aren't granularly assigned.) N/A Best practices for Essential Contacts Follow these best practices to configure and manage your Essential Contacts effectively: Use group aliases, mailing lists, or shared email addresses : Configure distribution lists or group email addresses like security-team@yourcompany.com or gcp-billing@yourcompany.com instead of individual email addresses to receive notifications.
- Some notifications for Essential Contacts might include a footer similar to the following to help you identify why you received the message: "You are receiving this message because your administrator has designated you as an essential contact for the CATEGORY NAME category." Notification categories You can assign custom contacts to several notification categories.
- The following are some key benefits of configuring Essential Contacts: Receive targeted notifications : Make sure that designated teams or individuals receive specific messages directly, such as security alerts or billing updates.
- For example, Advisory Notifications retrieves details from Essential Contacts to display sensitive data from critical notifications within the Google Cloud console, including security and privacy information.

### "Create custom constraints for Essential Contacts \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- Source ID: `site-docs-reference-2`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Test the policy Try creating a contact for a different category: gcloud essential-contacts create --email = randomemail@example.com --language = en --notification-categories = security The output is similar to the following: (gcloud.essential-contacts.create) FAILED PRECONDITION: Precondition check failed. - '@type': type.googleapis.com/google.rpc.ErrorInfo domain: iam.googleapis.com metadata: customConstraints: customConstraints/custom.onlyTechnicalNotificationsAllowed reason: CUSTOM ORG POLICY VIOLATION - '@type': type.googleapis.com/google.rpc.DebugInfo detail: '[ORIGINAL ERROR] generic::failed precondition: com.google.apps.framework.auth.IamFailedPreconditionException: Operation denied by custom org policy: ["customConstraints/custom.onlyTechnicalNotificationsAllowed": "The contact can only be subscribed to technical notifications."]. [google.rpc.error details ext] { details { [type.googleapis.com/google.rpc.ErrorInfo] { reason: "CUSTOM ORG POLICY VIOLATION" domain: "iam.googleapis.com" metadata { key: "customConstraints" value: "customConstraints/custom.onlyTechnicalNotificationsAllowed" } } } }' Essential Contacts supported resources The following table lists the Essential Contacts resources that you can reference in custom constraints.
- Before you begin, you need to know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-technical-notification.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.onlyTechnicalNotificationsAllowed resourceTypes : - essentialcontacts.googleapis.com/TechnicalNotifications methodTypes : - CREATE - UPDATE condition : "resource.notificationCategorySubscriptions \ [0 \ ] == 'TECHNICAL' && resource.notificationCategorySubscriptions.size()==1" actionType : ALLOW displayName : TechnicalNotifications description : The contact can only be subscribed to technical notifications.
- Apply the constraint: gcloud org-policies set-custom-constraint constraint-technical-notification.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.onlyTechnicalNotificationsAllowed ALLOW CREATE,UPDATE essentialcontacts.googleapis.com/Contact TechnicalNotifications ...
- For example, essentialcontacts.googleapis.com/TechnicalNotifications .

