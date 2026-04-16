---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.431Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Permissions Pre-check"
feature_slug: "permissions-pre-check"
latest_feature_date: "2023-05-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
keywords:
  - "permissions"
  - "alerts"
  - "during"
  - "check"
  - "users"
---

# Permissions Pre-check

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

Permissions Pre-check alerts users during Apigee pay-as-you-go provisioning when required permissions are missing and explains how to resolve them.

## Extended Definition

Permissions Pre-check alerts users during Apigee pay-as-you-go provisioning when required permissions are missing and explains how to resolve them.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users)
- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)

## Supporting Pages

### Manage users in the Apigee UI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you first configure Apigee and create the Google Cloud project to which the Apigee organization is bound, you typically add a few users with different roles like API Admin and Environment Admin .
- Home Documentation Application development Apigee Guides Send feedback Manage users in the Apigee UI Stay organized with collections Save and categorize content based on your preferences.
- Add user accounts in the Apigee UI To specify user permissions for an environment: Ensure that you have already added the user to your Google Cloud project.
- This topic describes how to add users to an environment, remove users from an environment, and update user roles in an environment, using the Apigee UI.

### "Manage users, roles, and permissions using the API \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles)
- Source ID: `site-iam-reference`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- More Information For more information, see: Users and roles Manage users, roles, and permissions using the Apigee APIs described in the following table: API method Description Organizations list API List all Apigee organizations, and the related projects for which a user has permissions.
- Home Documentation Application development Apigee Guides Send feedback Manage users, roles, and permissions using the API Stay organized with collections Save and categorize content based on your preferences.
- Environments Test IAM Permissions API Tests the permissions of a user on an environment.
- Returns a subset of permissions that the user has on the environment.

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Add checks if it might not. if (!curatedAPIMetadata.versions curatedAPIMetadata.versions.length === 0) { curatedAPIMetadata.versions = [{ specs: [] }]; } else if (!curatedAPIMetadata.versions[0].specs) { curatedAPIMetadata.versions[0].specs = []; } curatedAPIMetadata.versions[0].specs.push(specMetadata); // Set the modified apiData parameter event.setParameter('curatedAPIMetadata', curatedAPIMetadata); } The script demonstrates how the API metadata is enriched using the parsed specContent output from the Data Mapping task.
- Create API proxies in Apigee To get started, you'll first need to register the following sample API proxies in your Apigee project: API proxy name Configuration details Base config Revision config Orders API Proxy template: Reverse proxy Target: https://mocktarget.apigee.net Change target endpoint to: https://mocktarget.apigee.net/xml Products API Users API Note: Ensure that each proxy has at least one revision deployed to an environment, and the environment must be part of an environment group.
- Step 4: Verify enriched API data As the final step, lets verify that the custom curation is working as expected by checking API hub to see the newly enriched API data.
- Edge condition (Failed to fetch spec) Condition: $ErrorInfo.code$ != 0 Checks the connectorOutputPayload for empty payload; if yes, skips the curation logic.

