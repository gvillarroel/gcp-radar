---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.119Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Mail)"
feature_slug: "mail"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore"
keywords:
  - "blobstore"
  - "deferred"
  - "handlers"
  - "enables"
  - "mail"
  - "access"
  - "and"
  - "to"
---

# Mail)

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

Enables access to Blobstore, Deferred, and Mail handlers for App Engine bundled services in Python 3 through language-idiomatic libraries.

## Extended Definition

Enables access to Blobstore, Deferred, and Mail handlers for App Engine bundled services in Python 3 through language-idiomatic libraries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.
- To serve custom error pages, add a <static-error-handlers> section to your appengine-web.xml , as ins this example: <static-error-handlers> <handler file="default error.html" /> <handler file="over quota.html" error-code="over quota" /> </static-error-handlers> Warning : Make sure that the path to the error response file does not overlap with static file handler paths.
- If you want to disallow the use of HTTPS for the application, put the following in the appengine-web.xml file: <ssl-enabled>false</ssl-enabled> There is no way to disallow HTTPS for some URL paths and not others in the Java runtime environment. <static-error-handlers> Optional.
- However, these files and directories will still be accessible to your application when running on the local Development Server.

### "The deployment descriptor: web.xml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- For example, if the user accesses the URL path /help/accounts/ , the following <welcome-file-list> element in the deployment descriptor tells the server to check for help/accounts/index.jsp and help/accounts/index.html before reporting that the URL does not exist: <welcome-file-list> <welcome-file>index.jsp</welcome-file> <welcome-file>index.html</welcome-file> </welcome-file-list> Filters A filter is a class that acts on a request like a servlet, but can allow the handling of the request to continue with other filters or servlets.
- It also contains a <location> element containing the URL path of the resource to show when the error occurs. <error-page> <error-code>500</error-code> <location>/errors/servererror.jsp</location> </error-page> You can't configure custom error handlers for the following error conditions: 404 response page when no servlet mapping is defined for a URL.
- When a request accesses a URL using HTTPS, and that URL is configured to use HTTPS in the web.xml file, both the request data and the response data are encrypted by the sender before they are transmitted, and decrypted by the recipient after they are received.
- The app can use the Google Accounts API to detect whether the user is signed in, get the currently signed-in user's email address, and generate sign-in and sign-out URLs.

### "Package google.golang.org/appengine/v2/blobstore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- UploadURLOptions type UploadURLOptions struct { MaxUploadBytes int64 // optional MaxUploadBytesPerBlob int64 // optional // StorageBucket specifies the Google Cloud Storage bucket in which // to store the blob. // This is required if you use Cloud Storage instead of Blobstore. // Your application must have permission to write to the bucket. // You may optionally specify a bucket name and path in the format // "bucket name/path", in which case the included path will be the // prefix of the uploaded object's name.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2/blobstore (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-30 UTC."],[],[]]
- This is more efficient than reading and writing it out manually and isn't subject to normal response size limits. func UploadURL func UploadURL ( c context .

