---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.845Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "AppGroups for Apigee"
feature_slug: "appgroups-for-apigee"
latest_feature_date: "2024-05-08"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership"
  - "https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups"
  - "https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps"
  - "https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps.keys"
  - "https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions"
  - "https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.balance"
keywords:
  - "shared app ownership"
  - "team-managed apps"
  - "App Groups"
  - "app grouping"
  - "AppGroup management"
  - "app group"
  - "AppGroups"
  - "AppGroup"
---

# AppGroups for Apigee

Product: Apigee X
Coverage: HIGH

## Step 02 Summary

AppGroups reached general availability for Apigee and Apigee hybrid, enabling grouping of apps managed by the same people.

## Extended Definition

AppGroups in Apigee are a mechanism for managing client apps as collections, including operations to create, update, list, get, and delete AppGroups and their member apps. The feature also covers AppGroup-specific app keys, API product subscriptions, and monetization elements (such as balances and monetization configurations), each with dedicated Apigee permissions and REST APIs for management. It is used as the replacement approach for organizing app ownership more comprehensively than simple developer-to-app association.

## Evidence Summary

The cited Google Cloud documentation pages define AppGroup management workflows and list the permissions and REST endpoints for handling AppGroups, their apps and keys, subscriptions, and monetization-related settings.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)
- [https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups)
- [https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps)
- [https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps.keys](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps.keys)
- [https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions)
- [https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.balance](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.balance)

## Supporting Pages

### Organizing client app ownership \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)
- Source ID: `site-iam-reference`
- Final score: 74
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a dedicated Apigee documentation article describing AppGroups, their purpose for organizing app ownership, management capabilities, and required IAM permissions, which directly defines this feature.

Evidence snippets:
- Description Permissions Manage AppGroups and associated apps and keys. apigee.appgroups.list apigee.appgroups.get apigee.appgroups.create apigee.appgroups.update apigee.appgroups.delete Manage AppGroup apps. apigee.appgroupapps.list apigee.appgroupapps.get apigee.appgroupapps.create apigee.appgroupapps.manage apigee.appgroupapps.delete Manage app keys for AppGroups: apigee.appkeys.get apigee.appkeys.create apigee.appkeys.manage apigee.appkeys.delete Manage AppGroup subscriptions and monetization configurations. apigee.appgroupbalances.adjust apigee.appgroupbalances.get apigee.appgroupbalances.update apigee.appgroupmonetizationconfigs.get apigee.appgroupmonetizationconfigs.update apigee.appgroupsubscriptions.create apigee.appgroupsubscriptions.get apigee.appgroupsubscriptions.list apigee.appgroupsubscriptions.update Viewing and managing AppGroups This section shows how to view and manage AppGroups.
- Managing AppGroups using the Apigee APIs Use these APIs to manage AppGroups in your orgs: Activities Link View and manage AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups View and manage the apps that belong to AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps View and manage the app keys associated to AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps.keys View and manage AppGroup subscriptions to API products https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions See also AppGroup subscription management .
- View and manage AppGroup monetization configurations and balances (if enabled) https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.balance See also Use AppGroups to manage API product subscriptions and Manage prepaid balances .
- The expected syntax to store this is: [{ "developer":"<developer email>", "roles":[ "<role(s)>" ] }, ... ] Using developer-app association to organize app ownership A less comprehensive and flexible method of tracking app ownership than AppGroups is tracking apps by developer association.

