---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.555Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "MySQLdb utf8mb4 character set support"
feature_slug: "mysqldb-utf8mb4-character-set-support"
latest_feature_date: "2017-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/standard/audit-logging"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api"
keywords:
  - "mysqldb"
  - "utf8mb4"
  - "character"
  - "set"
  - "now"
  - "includes"
  - "utf"
  - "8mb4"
---

# MySQLdb utf8mb4 character set support

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

MySQLdb support now includes the UTF-8MB4 character set.

## Extended Definition

MySQLdb support now includes the UTF-8MB4 character set.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api)

## Supporting Pages

### "App Engine audit logging information \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Available audit logs The following types of audit logs are available for App Engine: Admin Activity audit logs Includes "admin write" operations that write metadata or configuration information.
- The Private Logs Viewer role (roles/logging.privateLogViewer ) includes the permissions contained in roles/logging.viewer , plus the ability to read Data Access audit logs in the Default bucket.
- The audit log name includes the resource identifier of the Google Cloud project, folder, billing account, or organization for which you want to view audit logging information.
- For example, if your query includes a PROJECT ID , then the project identifier you supply must refer to the currently selected Google Cloud project.

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- The sum of the lengths of the domain and path may not exceed 100 characters. service string Resource ID of a service in this application that should serve the matched request.
- Label keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, dashes, and international characters.
- Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
- This count includes domain mappings on applications for which the user does not have VIEWER permissions.

### Accessing the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: N/A

