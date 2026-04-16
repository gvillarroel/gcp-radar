---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.225Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Java SDK 1.9.77"
feature_slug: "java-sdk-1-9-77"
latest_feature_date: "2019-12-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/audit-logging"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "includes"
---

# Java SDK 1.9.77

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine standard environment Java includes Java SDK version 1.9.77.

## Extended Definition

App Engine standard environment Java includes Java SDK version 1.9.77.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "App Engine audit logging information \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Available audit logs The following types of audit logs are available for App Engine: Admin Activity audit logs Includes "admin write" operations that write metadata or configuration information.
- The Private Logs Viewer role (roles/logging.privateLogViewer ) includes the permissions contained in roles/logging.viewer , plus the ability to read Data Access audit logs in the Default bucket.
- The audit log name includes the resource identifier of the Google Cloud project, folder, billing account, or organization for which you want to view audit logging information.
- For example, if your query includes a PROJECT ID , then the project identifier you supply must refer to the currently selected Google Cloud project.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- This includes: data received by the application in secure requests and non-secure requests uploads to the Blobstore data received in response to HTTP requests by the URL fetch service Secure outgoing bandwidth The amount of data sent by the application over a secure connection in response to requests.
- This includes: data served in response to both secure requests and non-secure requests by application servers, static file servers, or the Blobstore data sent in email messages data in outgoing HTTP requests sent by the URL fetch service.
- This includes indexes that were created in the past and no longer appear in the application's configuration but have not been deleted.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Response compression For responses that are returned by your code, App Engine compresses data in the response if both of the following conditions are true: The request contains the Accept-Encoding header that includes gzip as a value.
- For responses that are returned by an App Engine static file or directory handler , response data is compressed if all of the following conditions are true: The request includes Accept-Encoding with gzip as one of its values.
- For example: Strict-Transport-Security : max-age = 31536000 ; includeSubDomains To set this header for any static content that is served by your app, add the header to your app's static file and directory handlers .
- Request headers An incoming HTTP request includes the HTTP headers sent by the client.

