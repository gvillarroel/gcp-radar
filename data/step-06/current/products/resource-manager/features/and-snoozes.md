---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.056Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "and snoozes"
feature_slug: "and-snoozes"
latest_feature_date: "2025-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies"
  - "https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts"
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
keywords:
  - "snoozes"
  - "monitoring"
  - "alerting"
  - "policies"
  - "notification"
  - "channels"
  - "custom"
  - "organization"
---

# and snoozes

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring alerting policies, notification channels, and snoozes support custom organization policies for more granular control over these resources.

## Extended Definition

Cloud Monitoring alerting policies, notification channels, and snoozes support custom organization policies for more granular control over these resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- [https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts](https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts)
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)

## Supporting Pages

### "Create custom constraints for Essential Contacts \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Apply the constraint: gcloud org-policies set-custom-constraint constraint-technical-notification.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.onlyTechnicalNotificationsAllowed ALLOW CREATE,UPDATE essentialcontacts.googleapis.com/Contact TechnicalNotifications ...
- Before you begin, you need to know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-technical-notification.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.onlyTechnicalNotificationsAllowed resourceTypes : - essentialcontacts.googleapis.com/TechnicalNotifications methodTypes : - CREATE - UPDATE condition : "resource.notificationCategorySubscriptions \ [0 \ ] == 'TECHNICAL' && resource.notificationCategorySubscriptions.size()==1" actionType : ALLOW displayName : TechnicalNotifications description : The contact can only be subscribed to technical notifications.
- Apply the policy: gcloud org-policies set-policy policy-technical-notification.yaml Verify that the policy exists: gcloud org-policies list --project = PROJECT ID The output is similar to the following: CONSTRAINT LIST POLICY BOOLEAN POLICY ETAG custom.onlyTechnicalNotificationsAllowed - SET COCsm5QGENiXi2E= After you apply the policy, wait for about two minutes for Google Cloud to start enforcing the policy.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: essentialcontacts.googleapis.com/Contact To learn more about Organization Policy, see Custom organization policies .

### Essential Contacts overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts](https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts)
- Source ID: `site-docs-reference-2`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security bulletins Vulnerability alerts, including details on detected critical vulnerabilities affecting your resources Data breach incidents Information on detected malicious attacks originating from or targeting your resources Advisories on widespread threats that might require user attention Abuse and security incident notifications Terms of Service violations Notifications related to project deletion IT security teams Security Operations Center (SOC) Operations security personnel Incident response teams Chief Information Security Officer (CISO) Organization Administrator ( roles/resourcemanager.organizationAdmin ) Security is a highly specialized area; direct alerts to security experts that you set as custom contacts help with rapid response and mitigation.
- Assign custom contacts for every relevant category : Verify that proper contacts are assigned for each notification category that is important to your organization to achieve comprehensive coverage.
- Enforcement actions related to your services Regulatory compliance updates Government notices or legal requests concerning your account Changes to Terms of Service or other legal agreements Legal counsel Compliance officers Government relations specialists Other relevant legal team members from your organization Billing Account Administrator ( roles/billing.admin ) Legal matters often require specialized legal team review; direct routing to custom contacts is crucial.
- Logging configuration errors Data loss prevention updates Upcoming maintenance Service disruptions, outages, or degradations Updates regarding SLO breaches Actions on Google status IT operations staff Site Reliability Engineers (SREs) System administrators On-call engineers Technical support teams Project Owner ( roles/owner ) Technical notifications can be high volume and require specific technical expertise; routing to custom operational teams is more effective.

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-allow-dev-projects.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.allowProjectForDevIdOnly ALLOW CREATE,UPDATE cloudresourcemanager.googleapis.com/Project Allow dev projects ...
- Apply the policy: gcloud org-policies set-policy /policy-enable-dev-projects.yaml Verify that the policy exists: gcloud org-policies list --organization = ORGANIZATION ID The output is similar to the following: CONSTRAINT LIST POLICY BOOLEAN POLICY ETAG custom.allowProjectForDevIdOnly - SET COCsm5QGENiXi2E= After you apply the policy, Google Cloud takes about two minutes to start enforcing the policy.
- Test the policy Create a project with project ID sampleDemoProject in the organization: gcloud projects create sampleDemoProject \ --organization = ORGANIZATION ID The output is the following: PERMISSION DENIED: The caller does not have permission Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: cloudresourcemanager.googleapis.com/Project cloudresourcemanager.googleapis.com/Folder To learn more about Organization Policy, see Custom organization policies .

