---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.394Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Local development server support for Java 8 alpha web.xml-less apps"
feature_slug: "local-development-server-support-for-java-8-alpha-web-xml-less-apps"
latest_feature_date: "2017-03-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "web.xml-less local testing"
  - "web.xml-less apps"
  - "Java 8 alpha local server"
  - "Java 8 local dev"
  - "web.xml-less"
  - "local development server"
  - "no web.xml app"
  - "Java 8 alpha"
---

# Local development server support for Java 8 alpha web.xml-less apps

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

Enabled Java 8 alpha applications without a web.xml file to run in the local development server.

## Extended Definition

Enabled Java 8 alpha applications without a web.xml file to run in the local development server.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: if (SystemProperty.environment.value() == SystemProperty.Environment.Value.Production) { // Production } else { // Local development server // which is: SystemProperty.Environment.Value.Development } Using the local Datastore emulator The development web server simulates Datastore using a local file-backed Datastore on your computer.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Using the local development server Stay organized with collections Save and categorize content based on your preferences.
- Detecting the application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the SystemProperty.environment.value() method.
- To access the console, visit the URL / ah/admin on your server: http://localhost:8080/ ah/admin Command-Line Arguments For the local development server command options, see here .

### "App Engine standard environment for Java gen2 release notes \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- March 29, 2017 Feature Java 8 alpha applications without a web.xml file can now run in the local development server .
- September 18, 2017 Feature Release 1.3.3 for com.google.cloud.tools:appengine-gradle-plugin Feature Java runtime notes Feature datastore-indexes-auto.xml is no longer removed during non-clean rebuilds. ( #165 ) Feature The local development server now logs output to dev appserver.out . ( #156 ) Feature Switched to use sync instead of copy on the explodeWar task. ( #162 ) September 13, 2017 Feature The gcloud commands and Admin API methods used to map custom domains are now generally available.
- Fixed Fixed the NoClassDefFoundError error that occurs when using the local development server with the Java 8 runtime and Endpoints Framework Gradle Plugin.
- Feature Updated Java SDK to version 1.9.57 Deprecated The local development server no longer supports -Xbootclasspath/p and google sql.jar in the path.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- However, these files and directories will still be accessible to your application when running on the local Development Server.
- However, these files and directories will still be accessible to your application when running on the local Development Server.
- However, these files and directories will still be accessible to your application when running on the local Development Server.

