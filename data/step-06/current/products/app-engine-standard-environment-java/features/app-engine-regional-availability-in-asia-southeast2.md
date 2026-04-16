---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.875Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine regional availability in asia-southeast2"
feature_slug: "app-engine-regional-availability-in-asia-southeast2"
latest_feature_date: "2020-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search"
keywords:
  - "app"
  - "engine"
  - "regional"
  - "availability"
  - "asia"
  - "southeast2"
  - "available"
  - "jakarta"
---

# App Engine regional availability in asia-southeast2

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine is available in the asia-southeast2 (Jakarta) region.

## Extended Definition

App Engine is available in the asia-southeast2 (Jakarta) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- In the Go API, the appengine.IsOverQuota function reports whether an error represents an API call failure due to insufficient available quota.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- US/Europe Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.026/GB/month Asia (Japan) Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.023/GB/month"> Firestore in Datastore mode (Datastore) The Stored Data (billable) quota refers to all data stored for the application in Datastore and Blobstore.
- Resource or API call Description System Limit Shared Centi Memcache Compute Units Per Region Per Minute For each project per region and minute, the available centi-MCUs, which are 1/100ths of an Memcache Compute Unit .

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- As an example, your application might, in a JSP file, have code like this: < % UserService userService = UserServiceFactory . getUserService (); if ( ! userService . isUserLoggedIn ()) { % > Please { @code ">log in >} <% } else { %> Welcome, <%= userService.getCurrentUser().getNickname(); %>! {@code ( " > log out > )} < % } % >> See Also: com.google.appengine.api.users.UserService , The Users Java API in the Google App Engine Developer's Guide . com.google.appengine.api.utils Provides common utility classes. com.google.appengine.api.utils.jakarta com.google.appengine.setup com.google.appengine.setup.timer com.google.appengine.setup.utils.http com.google.appengine.spi Support for alternate implementations of Google App Engine services.
- See Also: JavaMail API , com.google.appengine.api.mail.MailService , The Mail Java API in the Google App Engine Developer's Guide com.google.appengine.api.mail.jakarta Provides a service to send email messages on behalf of administrators or authenticated users, also accessible via a JavaMail interface.
- See Also: com.google.appengine.api.taskqueue.Queue , The Task Queue Java API in the Google App Engine Developer's Guide . com.google.appengine.api.taskqueue.jakarta Provides a mechanism to perform work initiated by a user request, outside of that request.
- See Also: com.google.appengine.api.blobstore.BlobstoreService , The Blobstore Java API in the Google App Engine Developer's Guide . com.google.appengine.api.blobstore.jakarta Provides management and persistent storage of large, immutable byte arrays.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- As an example, your application might, in a JSP file, have code like this: < % UserService userService = UserServiceFactory . getUserService (); if ( ! userService . isUserLoggedIn ()) { % > Please { @code ">log in >} <% } else { %> Welcome, <%= userService.getCurrentUser().getNickname(); %>! {@code ( " > log out > )} < % } % >> See Also: com.google.appengine.api.users.UserService , The Users Java API in the Google App Engine Developer's Guide . com.google.appengine.api.utils Provides common utility classes. com.google.appengine.api.utils.jakarta com.google.appengine.setup com.google.appengine.setup.timer com.google.appengine.setup.utils.http com.google.appengine.spi Support for alternate implementations of Google App Engine services.
- See Also: JavaMail API , com.google.appengine.api.mail.MailService , The Mail Java API in the Google App Engine Developer's Guide com.google.appengine.api.mail.jakarta Provides a service to send email messages on behalf of administrators or authenticated users, also accessible via a JavaMail interface.
- See Also: com.google.appengine.api.taskqueue.Queue , The Task Queue Java API in the Google App Engine Developer's Guide . com.google.appengine.api.taskqueue.jakarta Provides a mechanism to perform work initiated by a user request, outside of that request.
- See Also: com.google.appengine.api.blobstore.BlobstoreService , The Blobstore Java API in the Google App Engine Developer's Guide . com.google.appengine.api.blobstore.jakarta Provides management and persistent storage of large, immutable byte arrays.

