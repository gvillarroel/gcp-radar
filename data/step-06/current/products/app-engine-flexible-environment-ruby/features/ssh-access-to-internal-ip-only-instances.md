---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:03.997Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "SSH access to internal-IP-only instances"
feature_slug: "ssh-access-to-internal-ip-only-instances"
latest_feature_date: "2023-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/access-control"
keywords:
  - "ssh"
  - "access"
  - "internal"
  - "ip"
  - "only"
  - "instances"
  - "app"
  - "engine"
---

# SSH access to internal-IP-only instances

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment instances that use only internal IP addresses can be accessed with SSH.

## Extended Definition

App Engine flexible environment instances that use only internal IP addresses can be accessed with SSH.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)

## Supporting Pages

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configure private internal-only services Stay organized with collections Save and categorize content based on your preferences.
- This page shows the required configuration for exposing an App Engine flexible environment service only on its internal IP address.
- Private Google Access dependency: Instances with IP mode set to internal require Private Google Access on the target subnetwork.
- If your service does not require an external IP address, you can prevent your service from sending requests to resources on the internet and reduce costs by limiting your service to using only its internal IP address.

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configure private internal-only services Stay organized with collections Save and categorize content based on your preferences.
- This page shows the required configuration for exposing an App Engine flexible environment service only on its internal IP address.
- Private Google Access dependency: Instances with IP mode set to internal require Private Google Access on the target subnetwork.
- If your service does not require an external IP address, you can prevent your service from sending requests to resources on the internet and reduce costs by limiting your service to using only its internal IP address.

### "Roles that grant access to App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Capability App Engine Admin App Engine Service Admin App Engine Deployer App Engine Viewer App Engine Code Viewer List all services, versions and instances Yes Yes Yes Yes Yes View all application, service, version, and instance settings Yes Yes Yes Yes Yes View runtime metrics such as resource usage, load information, and error information Yes Yes Yes Yes Yes View app source code No No No No Yes Deploy a new version of an app Yes, if you also grant the Service Account User role No Yes, if you also grant the Service Account User role No No Split or migrate traffic Yes Yes No No No Start and stop a version Yes Yes No No No Delete a version Yes Yes Yes No No Delete an entire service Yes Yes No No No Use SSH to connect to a VM instance in the flexible environment Yes No No No No Shut down an instance Yes No No No No Disable and re-enable the App Engine application Yes No No No No Access handlers that have a login:admin restriction ( first generation runtimes only) Yes No No No No Update dispatch rules Yes No No No No Update DoS settings Yes No No No No Update cron schedules No No No No No Update default cookie expiration Yes No No No No Update referrers Yes No No No No Update Email API Authorized Senders Yes No No No No Note: The predefined roles are enforced in the Google Cloud console , the Admin API , and other tooling that requires access, including the deployment commands .
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.create appengine.versions.delete appengine.versions.get appengine.versions.list artifactregistry. projectsettings. get artifactregistry. repositories. deleteArtifacts artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. uploadArtifacts recommender.locations. recommender.locations.get recommender.locations.list resourcemanager.projects.get resourcemanager.projects.list App Engine Memcache Data Admin ( roles/ appengine.memcacheDataAdmin ) Can get, set, delete, and flush App Engine Memcache items. appengine.applications.get appengine.memcache.addKey appengine.memcache.flush appengine.memcache.get appengine.memcache.update resourcemanager.projects.get resourcemanager.projects.list App Engine Service Admin ( roles/ appengine.serviceAdmin ) Read-only access to all application configuration and settings.
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine. versions. getFileContents appengine.versions.list artifactregistry. projectsettings. get resourcemanager.projects.get resourcemanager.projects.list App Engine Managed VM Debug Access ( roles/ appengine.debugger ) Ability to read or manage v2 instances. appengine.applications.get appengine. applications. listRuntimes appengine.instances. appengine.instances.delete appengine. instances. enableDebug appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine.versions.list resourcemanager.projects.get resourcemanager.projects.list App Engine Deployer ( roles/ appengine.deployer ) Read-only access to all application configuration and settings.
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine.versions.list artifactregistry. projectsettings. get recommender.locations. recommender.locations.get recommender.locations.list resourcemanager.projects.get resourcemanager.projects.list App Engine Code Viewer ( roles/ appengine.codeViewer ) Read-only access to all application configuration, settings, and deployed source code.

