---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.760Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee AppGroups"
feature_slug: "apigee-appgroups"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure"
  - "https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway"
keywords:
  - "represent"
  - "organize"
  - "multiple"
  - "appgroups"
  - "were"
  - "introduced"
  - "apps"
---

# Apigee AppGroups

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

AppGroups were introduced to represent and organize multiple apps managed by the same group of people.

## Extended Definition

AppGroups were introduced to represent and organize multiple apps managed by the same group of people.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)
- [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)

## Supporting Pages

### Organizing client app ownership \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)
- Source ID: `site-iam-reference`
- Final score: 89
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The expected syntax to store this is: [{ "developer":"<developer email>", "roles":[ "<role(s)>" ] }, ... ] Using developer-app association to organize app ownership A less comprehensive and flexible method of tracking app ownership than AppGroups is tracking apps by developer association.
- Description Permissions Manage AppGroups and associated apps and keys. apigee.appgroups.list apigee.appgroups.get apigee.appgroups.create apigee.appgroups.update apigee.appgroups.delete Manage AppGroup apps. apigee.appgroupapps.list apigee.appgroupapps.get apigee.appgroupapps.create apigee.appgroupapps.manage apigee.appgroupapps.delete Manage app keys for AppGroups: apigee.appkeys.get apigee.appkeys.create apigee.appkeys.manage apigee.appkeys.delete Manage AppGroup subscriptions and monetization configurations. apigee.appgroupbalances.adjust apigee.appgroupbalances.get apigee.appgroupbalances.update apigee.appgroupmonetizationconfigs.get apigee.appgroupmonetizationconfigs.update apigee.appgroupsubscriptions.create apigee.appgroupsubscriptions.get apigee.appgroupsubscriptions.list apigee.appgroupsubscriptions.update Viewing and managing AppGroups This section shows how to view and manage AppGroups.
- Managing AppGroups using the Apigee APIs Use these APIs to manage AppGroups in your orgs: Activities Link View and manage AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups View and manage the apps that belong to AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps View and manage the app keys associated to AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps.keys View and manage AppGroup subscriptions to API products https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions See also AppGroup subscription management .
- Note: To manage the Display Name and Notes of an App associated with an AppGroup, you should use the DisplayName and Notes attribute in the organizations.appgroups.apps.update method .

### Understanding organizations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)
- Source ID: `site-docs-reference-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- For example, your company might define multiple organizations on Apigee to support different developer communities, even though internally, the same people build all of the API proxies and API products and are therefore members of all of your organizations.
- At any time, you can revoke the key so that the developer's app no longer has access to your APIs (even though the registered representation of the developer's app still exists in your organization).
- Home Documentation Application development Apigee Guides Send feedback Understanding organizations Stay organized with collections Save and categorize content based on your preferences.
- App Developer An organization contains one or more developers who build the apps that consume the APIs (published as API products) defined by your organization.

### "Advanced API Security for multiple Apigee organizations and gateways \_\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback Advanced API Security for multiple Apigee organizations and gateways Stay organized with collections Save and categorize content based on your preferences.
- To configure and use security monitoring conditions and alerts in Cloud Monitoring: Action(s) Required roles or steps List and view security monitoring condition metrics Monitoring Admin ( roles/monitoring.admin ) Monitoring Editor ( roles/monitoring.editor ) Create, update, or delete monitoring alerts See Required roles (for security alerts) View monitoring alerts See Incidents for metric-based alerting policies: Before you begin For information about granting IAM roles, see Grant or revoke multiple IAM roles using the Google Cloud console .
- Key capabilities Advanced API Security offers the following capabilities when you enable it for your API hub instance: Risk assessment across multiple Apigee organizations, environments, and gateways: assess the security scores for a specific API or for all APIs across all of its deployments in multiple Apigee organizations, environments, and gateways to get a comprehensive understanding of its risk profile.
- Apigee Advanced API Security is available as an additional add-on for your API hub instance to help you manage and govern the security posture of your APIs across multiple Apigee organizations, environments, and gateways.

