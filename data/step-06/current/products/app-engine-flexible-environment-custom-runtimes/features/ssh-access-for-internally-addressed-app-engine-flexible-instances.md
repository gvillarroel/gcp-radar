---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:29.602Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "SSH access for internally addressed App Engine flexible instances"
feature_slug: "ssh-access-for-internally-addressed-app-engine-flexible-instances"
latest_feature_date: "2023-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/access-control"
  - "https://docs.cloud.google.com/appengine/docs/flexible/roles"
  - "https://docs.cloud.google.com/appengine/docs/flexible/access-control"
keywords:
  - "ssh"
  - "access"
  - "internally"
  - "addressed"
  - "app"
  - "engine"
  - "flexible"
  - "instances"
---

# SSH access for internally addressed App Engine flexible instances

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

You can now SSH into App Engine flexible environment instances that use only internal IP addresses.

## Extended Definition

You can now SSH into App Engine flexible environment instances that use only internal IP addresses.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)

## Supporting Pages

### "Roles that grant access to App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Capability App Engine Admin App Engine Service Admin App Engine Deployer App Engine Viewer App Engine Code Viewer List all services, versions and instances Yes Yes Yes Yes Yes View all application, service, version, and instance settings Yes Yes Yes Yes Yes View runtime metrics such as resource usage, load information, and error information Yes Yes Yes Yes Yes View app source code No No No No Yes Deploy a new version of an app Yes, if you also grant the Service Account User role No Yes, if you also grant the Service Account User role No No Split or migrate traffic Yes Yes No No No Start and stop a version Yes Yes No No No Delete a version Yes Yes Yes No No Delete an entire service Yes Yes No No No Use SSH to connect to a VM instance in the flexible environment Yes No No No No Shut down an instance Yes No No No No Disable and re-enable the App Engine application Yes No No No No Access handlers that have a login:admin restriction ( first generation runtimes only) Yes No No No No Update dispatch rules Yes No No No No Update DoS settings Yes No No No No Update cron schedules No No No No No Update default cookie expiration Yes No No No No Update referrers Yes No No No No Update Email API Authorized Senders Yes No No No No Note: The predefined roles are enforced in the Google Cloud console , the Admin API , and other tooling that requires access, including the deployment commands .
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.create appengine.versions.delete appengine.versions.get appengine.versions.list artifactregistry. projectsettings. get artifactregistry. repositories. deleteArtifacts artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. uploadArtifacts recommender.locations. recommender.locations.get recommender.locations.list resourcemanager.projects.get resourcemanager.projects.list App Engine Memcache Data Admin ( roles/ appengine.memcacheDataAdmin ) Can get, set, delete, and flush App Engine Memcache items. appengine.applications.get appengine.memcache.addKey appengine.memcache.flush appengine.memcache.get appengine.memcache.update resourcemanager.projects.get resourcemanager.projects.list App Engine Service Admin ( roles/ appengine.serviceAdmin ) Read-only access to all application configuration and settings.
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine. versions. getFileContents appengine.versions.list artifactregistry. projectsettings. get resourcemanager.projects.get resourcemanager.projects.list App Engine Managed VM Debug Access ( roles/ appengine.debugger ) Ability to read or manage v2 instances. appengine.applications.get appengine. applications. listRuntimes appengine.instances. appengine.instances.delete appengine. instances. enableDebug appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine.versions.list resourcemanager.projects.get resourcemanager.projects.list App Engine Deployer ( roles/ appengine.deployer ) Read-only access to all application configuration and settings.
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine.versions.list artifactregistry. projectsettings. get recommender.locations. recommender.locations.get recommender.locations.list resourcemanager.projects.get resourcemanager.projects.list App Engine Code Viewer ( roles/ appengine.codeViewer ) Read-only access to all application configuration, settings, and deployed source code.

### "Roles that grant access to App Engine \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Capability App Engine Admin App Engine Service Admin App Engine Deployer App Engine Viewer App Engine Code Viewer List all services, versions and instances Yes Yes Yes Yes Yes View all application, service, version, and instance settings Yes Yes Yes Yes Yes View runtime metrics such as resource usage, load information, and error information Yes Yes Yes Yes Yes View app source code No No No No Yes Deploy a new version of an app Yes, if you also grant the Service Account User role No Yes, if you also grant the Service Account User role No No Split or migrate traffic Yes Yes No No No Start and stop a version Yes Yes No No No Delete a version Yes Yes Yes No No Delete an entire service Yes Yes No No No Use SSH to connect to a VM instance in the flexible environment Yes No No No No Shut down an instance Yes No No No No Disable and re-enable the App Engine application Yes No No No No Access handlers that have a login:admin restriction ( first generation runtimes only) Yes No No No No Update dispatch rules Yes No No No No Update DoS settings Yes No No No No Update cron schedules No No No No No Update default cookie expiration Yes No No No No Update referrers Yes No No No No Update Email API Authorized Senders Yes No No No No Note: The predefined roles are enforced in the Google Cloud console , the Admin API , and other tooling that requires access, including the deployment commands .
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.create appengine.versions.delete appengine.versions.get appengine.versions.list artifactregistry. projectsettings. get artifactregistry. repositories. deleteArtifacts artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. uploadArtifacts recommender.locations. recommender.locations.get recommender.locations.list resourcemanager.projects.get resourcemanager.projects.list App Engine Memcache Data Admin ( roles/ appengine.memcacheDataAdmin ) Can get, set, delete, and flush App Engine Memcache items. appengine.applications.get appengine.memcache.addKey appengine.memcache.flush appengine.memcache.get appengine.memcache.update resourcemanager.projects.get resourcemanager.projects.list App Engine Service Admin ( roles/ appengine.serviceAdmin ) Read-only access to all application configuration and settings.
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine. versions. getFileContents appengine.versions.list artifactregistry. projectsettings. get resourcemanager.projects.get resourcemanager.projects.list App Engine Managed VM Debug Access ( roles/ appengine.debugger ) Ability to read or manage v2 instances. appengine.applications.get appengine. applications. listRuntimes appengine.instances. appengine.instances.delete appengine. instances. enableDebug appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine.versions.list resourcemanager.projects.get resourcemanager.projects.list App Engine Deployer ( roles/ appengine.deployer ) Read-only access to all application configuration and settings.
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine.versions.list artifactregistry. projectsettings. get recommender.locations. recommender.locations.get recommender.locations.list resourcemanager.projects.get resourcemanager.projects.list App Engine Code Viewer ( roles/ appengine.codeViewer ) Read-only access to all application configuration, settings, and deployed source code.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Setting up access control Stay organized with collections Save and categorize content based on your preferences.
- Granting your app access to Cloud services Every call to a Cloud service needs to be authenticated and authorized, including calls from an App Engine app to other Cloud services such as Cloud Storage.
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.
- In App Engine, there are a few separate use cases for setting up access control: Granting team members access to your Google Cloud project so they can set up services and deploy apps.

