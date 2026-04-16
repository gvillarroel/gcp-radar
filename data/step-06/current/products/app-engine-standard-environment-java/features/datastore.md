---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.922Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Datastore"
feature_slug: "datastore"
latest_feature_date: "2015-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search"
keywords:
  - "datastore"
  - "was"
  - "identified"
  - "featured"
  - "capability"
  - "app"
  - "engine"
  - "java"
---

# Datastore

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Datastore was identified as a featured capability in this App Engine Java release.

## Extended Definition

Datastore was identified as a featured capability in this App Engine Java release.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)

## Supporting Pages

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference-2`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Configure Datastore indexes with index.yaml Stay organized with collections Save and categorize content based on your preferences.
- Go Java Node.js PHP Python Ruby You can use Firestore in Datastore mode (Datastore) for storing data for your applications that run in the standard environment.
- When you are testing in your local environment, you can use the gcloud emulator command to start a service that emulates Datastore before you run your app: gcloud beta emulators datastore start --data-dir DATA-DIR Use the --data-dir flag to specify the directory where the auto-generated index.yaml file will appear.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- See Also: com.google.appengine.api.capabilities.CapabilitiesService , The Capabilities Java API in the Google App Engine Developer's Guide . com.google.appengine.api.datastore Provides persistent storage, also accessible via JDO or JPA interfaces.
- See Also: com.google.appengine.api.datastore.DatastoreService , JPA API , JDO API , The Datastore Java API in the Google App Engine Developers Guide com.google.appengine.api.images Provides facilities for the creation and manipulation of images.
- If the key is not readily determined, then com.google.appengine.api.datastore.Query objects can be used to retrieve one Entity, multiple as a list, java.lang.Iterable , or java.util.Iterator , or to retrieve the count of matching entities.
- As an example, your application might, in a JSP file, have code like this: < % UserService userService = UserServiceFactory . getUserService (); if ( ! userService . isUserLoggedIn ()) { % > Please { @code ">log in >} <% } else { %> Welcome, <%= userService.getCurrentUser().getNickname(); %>! {@code ( " > log out > )} < % } % >> See Also: com.google.appengine.api.users.UserService , The Users Java API in the Google App Engine Developer's Guide . com.google.appengine.api.utils Provides common utility classes. com.google.appengine.api.utils.jakarta com.google.appengine.setup com.google.appengine.setup.timer com.google.appengine.setup.utils.http com.google.appengine.spi Support for alternate implementations of Google App Engine services.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- See Also: com.google.appengine.api.capabilities.CapabilitiesService , The Capabilities Java API in the Google App Engine Developer's Guide . com.google.appengine.api.datastore Provides persistent storage, also accessible via JDO or JPA interfaces.
- See Also: com.google.appengine.api.datastore.DatastoreService , JPA API , JDO API , The Datastore Java API in the Google App Engine Developers Guide com.google.appengine.api.images Provides facilities for the creation and manipulation of images.
- If the key is not readily determined, then com.google.appengine.api.datastore.Query objects can be used to retrieve one Entity, multiple as a list, java.lang.Iterable , or java.util.Iterator , or to retrieve the count of matching entities.
- As an example, your application might, in a JSP file, have code like this: < % UserService userService = UserServiceFactory . getUserService (); if ( ! userService . isUserLoggedIn ()) { % > Please { @code ">log in >} <% } else { %> Welcome, <%= userService.getCurrentUser().getNickname(); %>! {@code ( " > log out > )} < % } % >> See Also: com.google.appengine.api.users.UserService , The Users Java API in the Google App Engine Developer's Guide . com.google.appengine.api.utils Provides common utility classes. com.google.appengine.api.utils.jakarta com.google.appengine.setup com.google.appengine.setup.timer com.google.appengine.setup.utils.http com.google.appengine.spi Support for alternate implementations of Google App Engine services.

