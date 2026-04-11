---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.854Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee AppGroups"
feature_slug: "apigee-appgroups"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership"
  - "https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups"
  - "https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps"
  - "https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps.keys"
  - "https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions"
keywords:
  - "developer app groups"
  - "organization app groups"
  - "AppGroups feature"
  - "AppGroup entity"
  - "app groups"
  - "group-managed apps"
  - "AppGroup management"
  - "appgroup"
---

# Apigee AppGroups

Product: Apigee X
Coverage: HIGH

## Step 02 Summary

AppGroups were introduced to represent and organize multiple apps managed by the same group of people.

## Extended Definition

Apigee AppGroups is a feature for organizing and managing multiple client apps as a grouped entity under shared ownership and administration. It supports defining and enforcing management actions for the group itself and its related resources—apps, app keys, and API product subscriptions—through documented IAM permissions and Apigee REST APIs (for example, `organizations.appgroups`, `organizations.appgroups.apps`, `organizations.appgroups.apps.keys`, and `organizations.appgroups.subscriptions`). The documentation notes that AppGroup management in the Apigee UI is planned for a future release, so operational management is described via API-based workflows.

## Evidence Summary

The cited Apigee documentation defines what AppGroups can do, the required permissions/roles for managing them, and the specific REST resources used to manage groups, group apps, keys, and subscriptions.

## Source Links

- [https://cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)
- [https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups)
- [https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps)
- [https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps.keys](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps.keys)
- [https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions)

## Supporting Pages

### Organizing client app ownership \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)
- Source ID: `site-iam-reference`
- Final score: 50
- Re-rank relevance: STRONG
- Re-rank rationale: It directly explains what AppGroups are, how they represent and organize multiple Apigee apps managed by the same people, and how they are managed.

Evidence snippets:
- IAM roles and permissions To control permissions required for AppGroup management, you can view and grant permissions or roles using the permissions panel on the IAM & Admin > IAM page in your Google Cloud project.
- Note: AppGroup management in Apigee UI in Cloud console will be considered in a future release.
- Description Permissions Manage AppGroups and associated apps and keys. apigee.appgroups.list apigee.appgroups.get apigee.appgroups.create apigee.appgroups.update apigee.appgroups.delete Manage AppGroup apps. apigee.appgroupapps.list apigee.appgroupapps.get apigee.appgroupapps.create apigee.appgroupapps.manage apigee.appgroupapps.delete Manage app keys for AppGroups: apigee.appkeys.get apigee.appkeys.create apigee.appkeys.manage apigee.appkeys.delete Manage AppGroup subscriptions and monetization configurations. apigee.appgroupbalances.adjust apigee.appgroupbalances.get apigee.appgroupbalances.update apigee.appgroupmonetizationconfigs.get apigee.appgroupmonetizationconfigs.update apigee.appgroupsubscriptions.create apigee.appgroupsubscriptions.get apigee.appgroupsubscriptions.list apigee.appgroupsubscriptions.update Viewing and managing AppGroups This section shows how to view and manage AppGroups.
- Managing AppGroups using the Apigee APIs Use these APIs to manage AppGroups in your orgs: Activities Link View and manage AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups View and manage the apps that belong to AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps View and manage the app keys associated to AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps.keys View and manage AppGroup subscriptions to API products https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions See also AppGroup subscription management .

