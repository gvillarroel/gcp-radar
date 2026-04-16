---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.240Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Java SDK"
feature_slug: "java-sdk"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
keywords:
  - "development"
  - "deployment"
  - "provides"
  - "local"
---

# Java SDK

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The App Engine Java SDK provides local development and deployment tooling for Java applications; The App Engine Java SDK provides local development and deployment tooling for Java applications.

## Extended Definition

The App Engine Java SDK provides local development and deployment tooling for Java applications; The App Engine Java SDK provides local development and deployment tooling for Java applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)

## Supporting Pages

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- Source ID: `site-docs-reference-4`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- For example: if (SystemProperty.environment.value() == SystemProperty.Environment.Value.Production) { // Production } else { // Local development server // which is: SystemProperty.Environment.Value.Development } Using the local Datastore emulator The development web server simulates Datastore using a local file-backed Datastore on your computer.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Using the local development server Stay organized with collections Save and categorize content based on your preferences.
- Detecting the application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the SystemProperty.environment.value() method.
- To access the console, visit the URL / ah/admin on your server: http://localhost:8080/ ah/admin Command-Line Arguments For the local development server command options, see here .

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-4`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.
- Example <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <application>simple-app</application> <module>default</module> <version>uno</version> <instance-class>B8</instance-class> <manual-scaling> <instances>5</instances> </manual-scaling> </appengine-web-app> Staging elements Much of the work done during a deployment occurs locally in a preparation step called staging , where JAR files are assembled, JSPs are compiled, and so forth.
- However, these files and directories will still be accessible to your application when running on the local Development Server.
- However, these files and directories will still be accessible to your application when running on the local Development Server.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference-4`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- As an example, your application might, in a JSP file, have code like this: < % UserService userService = UserServiceFactory . getUserService (); if ( ! userService . isUserLoggedIn ()) { % > Please { @code ">log in >} <% } else { %> Welcome, <%= userService.getCurrentUser().getNickname(); %>! {@code ( " > log out > )} < % } % >> See Also: com.google.appengine.api.users.UserService , The Users Java API in the Google App Engine Developer's Guide . com.google.appengine.api.utils Provides common utility classes. com.google.appengine.api.utils.jakarta com.google.appengine.setup com.google.appengine.setup.timer com.google.appengine.setup.utils.http com.google.appengine.spi Support for alternate implementations of Google App Engine services.
- OK ); } Results<ScoredDocument> results = index . search ( Query . newBuilder (). build ( query )); List<ScoredDocument> matched = new ArrayList<ScoredDocument> ( results . getNumberReturned ()); for ( ScoredDocument result : results ) { matched . add ( result ); } return matched ; } See Also: com.google.appengine.api.search.SearchServiceFactory com.google.appengine.api.search.checkers com.google.appengine.api.search.query com.google.appengine.api.taskqueue Provides a mechanism to perform work initiated by a user request, outside of that request.
- ModulesService modules = ModulesServiceFactory.getModulesService(); // Lookup the versions associated with the current service/module. for (String version : modules.getVersions(modules.getCurrentModule())) { // Process version. } See Also: com.google.appengine.api.modules.ModulesService com.google.appengine.api.oauth Provides a method for clients to access server resources on behalf of a resource owner, as well as a process for end-users to authorize third-party access to their server resources without sharing their credentials.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback appengine-apis overview (5.0.0) Stay organized with collections Save and categorize content based on your preferences. com.google.appengine.api Provides facilities for server lifecycle management, threading and namespaces/multitenancy.

