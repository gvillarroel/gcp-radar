---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:38:45.370Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "IAM-based deployment role documentation for App Engine"
feature_slug: "iam-based-deployment-role-documentation-for-app-engine"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/roles"
keywords:
  - "service account deployment permissions"
  - "roles/appengine.deployer"
  - "deployment permissions"
  - "App Engine deploy IAM roles"
  - "predefined App Engine roles"
  - "app deployment role"
  - "gcloud app deploy IAM"
  - "App Engine Admin API IAM"
---

# IAM-based deployment role documentation for App Engine

Product: App Engine Admin API
Coverage: HIGH

## Step 02 Summary

Access control documentation for deploying apps with IAM roles and service accounts was improved, including predefined App Engine deploy roles and required permissions.

## Extended Definition

The feature defines the IAM roles required to deploy App Engine applications in a least-privilege way in Google Cloud. It recommends granting deployment-only accounts the App Engine Deployer role (roles/appengine.deployer) and Service Account User (roles/iam.serviceAccountUser), where Service Account User allows the deployer to impersonate the default App Engine service account during deployment. App Engine also provides predefined roles (for example, roles/appengine.appAdmin) that grant broader application configuration and settings access, including read/write/modify permissions.

## Evidence Summary

This page documents App Engine IAM role guidance, including the recommended deployment role combination and example predefined App Engine roles with corresponding permission scope.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/roles](https://docs.cloud.google.com/appengine/docs/standard/roles)

## Supporting Pages

### "Roles that grant access to App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/roles](https://docs.cloud.google.com/appengine/docs/standard/roles)
- Source ID: `site-iam-reference`
- Final score: 40
- Re-rank relevance: STRONG
- Re-rank rationale: It directly defines deployment-related App Engine roles and required IAM/service account permissions, including App Engine Deployer/Admin and supporting roles needed to deploy.

Evidence snippets:
- Recommended role for application deployment For an account that is responsible only for deploying new versions of an app, we recommend that you grant the following roles: App Engine Deployer role ( roles/appengine.deployer ) Service Account User role ( roles/iam.serviceAccountUser ) The Service Account User role enables the account to impersonate the default App Engine service account during the deployment process.
- Request logs Predefined App Engine roles Role Permissions App Engine Admin ( roles/ appengine.appAdmin ) Read/Write/Modify access to all application configuration and settings.
- Predefined App Engine roles , which provide granular access to App Engine.

