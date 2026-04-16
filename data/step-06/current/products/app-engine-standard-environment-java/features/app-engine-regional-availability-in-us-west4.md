---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.876Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine regional availability in us-west4"
feature_slug: "app-engine-regional-availability-in-us-west4"
latest_feature_date: "2020-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/developers-console"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
keywords:
  - "app"
  - "engine"
  - "regional"
  - "availability"
  - "us"
  - "west4"
  - "available"
  - "las"
---

# App Engine regional availability in us-west4

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine is available in the us-west4 (Las Vegas) region.

## Extended Definition

App Engine is available in the us-west4 (Las Vegas) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- In the Go API, the appengine.IsOverQuota function reports whether an error represents an API call failure due to insufficient available quota.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Resource or API call Description System Limit Shared Centi Memcache Compute Units Per Region Per Minute For each project per region and minute, the available centi-MCUs, which are 1/100ths of an Memcache Compute Unit .
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.

### "Setting up your Google Cloud project for App Engine \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- Source ID: `site-docs-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- App Engine Locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- Important: Each Google Cloud project can contain only a single App Engine application, and once created you cannot change the location of your App Engine application. gcloud After installing Google Cloud CLI , an account with the Google Cloud project Owner role can run the following gcloud commands to create a Google Cloud project and App Engine application: Run the following command to create a Google Cloud project: gcloud projects create PROJECT ID Replace PROJECT ID with the Google Cloud project ID.
- Before you can deploy your apps to the App Engine standard environment, you typically need to create or set up the following: A Google Cloud project An App Engine application A billing account Creating a project and application You can select or create a new Google Cloud project and App Engine application to create and manage a collection of settings, credentials, and your app's metadata.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- See Also: com.google.appengine.api.blobstore.BlobstoreService , The Blobstore Java API in the Google App Engine Developer's Guide . com.google.appengine.api.capabilities Provides status information about the services available via the GAE APIs.
- As an example, your application might, in a JSP file, have code like this: < % UserService userService = UserServiceFactory . getUserService (); if ( ! userService . isUserLoggedIn ()) { % > Please { @code ">log in >} <% } else { %> Welcome, <%= userService.getCurrentUser().getNickname(); %>! {@code ( " > log out > )} < % } % >> See Also: com.google.appengine.api.users.UserService , The Users Java API in the Google App Engine Developer's Guide . com.google.appengine.api.utils Provides common utility classes. com.google.appengine.api.utils.jakarta com.google.appengine.setup com.google.appengine.setup.timer com.google.appengine.setup.utils.http com.google.appengine.spi Support for alternate implementations of Google App Engine services.
- OK ); } Results<ScoredDocument> results = index . search ( Query . newBuilder (). build ( query )); List<ScoredDocument> matched = new ArrayList<ScoredDocument> ( results . getNumberReturned ()); for ( ScoredDocument result : results ) { matched . add ( result ); } return matched ; } See Also: com.google.appengine.api.search.SearchServiceFactory com.google.appengine.api.search.checkers com.google.appengine.api.search.query com.google.appengine.api.taskqueue Provides a mechanism to perform work initiated by a user request, outside of that request.
- ModulesService modules = ModulesServiceFactory.getModulesService(); // Lookup the versions associated with the current service/module. for (String version : modules.getVersions(modules.getCurrentModule())) { // Process version. } See Also: com.google.appengine.api.modules.ModulesService com.google.appengine.api.oauth Provides a method for clients to access server resources on behalf of a resource owner, as well as a process for end-users to authorize third-party access to their server resources without sharing their credentials.

