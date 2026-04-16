---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.896Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Removal of Java security manager in App Engine Java 8 runtime"
feature_slug: "removal-of-java-security-manager-in-app-engine-java-8-runtime"
latest_feature_date: "2017-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/application-security"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
keywords:
  - "removal"
  - "java"
  - "security"
  - "manager"
  - "app"
  - "engine"
  - "runtime"
  - "removed"
---

# Removal of Java security manager in App Engine Java 8 runtime

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The Java 8 runtime removed the Java security manager.

## Extended Definition

The Java 8 runtime removed the Java security manager.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/application-security](https://docs.cloud.google.com/appengine/docs/standard/java11/application-security)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)

## Supporting Pages

### "Roles that grant access to App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.applications.update appengine.instances. appengine.instances.delete appengine. instances. enableDebug appengine.instances.get appengine.instances.list appengine.memcache.addKey appengine.memcache.flush appengine.memcache.get appengine.memcache.update appengine.operations. appengine.operations.get appengine.operations.list appengine.runtimes.actAsAdmin appengine.services. appengine.services.delete appengine.services.get appengine.services.list appengine.services.update appengine.versions.create appengine.versions.delete appengine. versions. exportAppImage appengine.versions.get appengine.versions.list appengine.versions.update artifactregistry. projectsettings. get artifactregistry. repositories. deleteArtifacts artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. uploadArtifacts recommender.locations. recommender.locations.get recommender.locations.list resourcemanager.projects.get resourcemanager.projects.list App Engine Creator ( roles/ appengine.appCreator ) Ability to create the App Engine resource for the project.
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.create appengine.versions.delete appengine.versions.get appengine.versions.list artifactregistry. projectsettings. get artifactregistry. repositories. deleteArtifacts artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. uploadArtifacts recommender.locations. recommender.locations.get recommender.locations.list resourcemanager.projects.get resourcemanager.projects.list App Engine Memcache Data Admin ( roles/ appengine.memcacheDataAdmin ) Can get, set, delete, and flush App Engine Memcache items. appengine.applications.get appengine.memcache.addKey appengine.memcache.flush appengine.memcache.get appengine.memcache.update resourcemanager.projects.get resourcemanager.projects.list App Engine Service Admin ( roles/ appengine.serviceAdmin ) Read-only access to all application configuration and settings.
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine. versions. getFileContents appengine.versions.list artifactregistry. projectsettings. get resourcemanager.projects.get resourcemanager.projects.list App Engine Managed VM Debug Access ( roles/ appengine.debugger ) Ability to read or manage v2 instances. appengine.applications.get appengine. applications. listRuntimes appengine.instances. appengine.instances.delete appengine. instances. enableDebug appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine.versions.list resourcemanager.projects.get resourcemanager.projects.list App Engine Deployer ( roles/ appengine.deployer ) Read-only access to all application configuration and settings.
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.delete appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services. appengine.services.delete appengine.services.get appengine.services.list appengine.services.update appengine.versions.delete appengine.versions.get appengine.versions.list appengine.versions.update artifactregistry. projectsettings. get recommender.locations. recommender.locations.get recommender.locations.list resourcemanager.projects.get resourcemanager.projects.list Service agent roles Service agent roles should only be granted to service agents .

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/application-security](https://docs.cloud.google.com/appengine/docs/standard/java11/application-security)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security scanner The Google Cloud Web Security Scanner discovers vulnerabilities by crawling your App Engine app, following all that links within the scope of your starting URLs, and attempting to exercise as many user inputs and event handlers as possible.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Overview of app security Stay organized with collections Save and categorize content based on your preferences.
- OK Security is a core feature of the Google Cloud, but there are still steps you should take to protect your App Engine app and identify vulnerabilities.
- You can run security scans from the Google Cloud console to identify security vulnerabilities in your App Engine app.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference-2`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security scanner The Google Cloud Web Security Scanner discovers vulnerabilities by crawling your App Engine app, following all that links within the scope of your starting URLs, and attempting to exercise as many user inputs and event handlers as possible.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Overview of app security Stay organized with collections Save and categorize content based on your preferences.
- OK Security is a core feature of the Google Cloud, but there are still steps you should take to protect your App Engine app and identify vulnerabilities.
- You can run security scans from the Google Cloud console to identify security vulnerabilities in your App Engine app.

