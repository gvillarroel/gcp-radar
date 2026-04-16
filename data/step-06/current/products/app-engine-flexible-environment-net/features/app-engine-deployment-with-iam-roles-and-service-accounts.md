---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.679Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "App Engine deployment with IAM roles and service accounts"
feature_slug: "app-engine-deployment-with-iam-roles-and-service-accounts"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/access-control"
  - "https://docs.cloud.google.com/appengine/docs/flexible/access-control"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control"
keywords:
  - "app"
  - "engine"
  - "deployment"
  - "iam"
  - "roles"
  - "accounts"
  - "access"
  - "control"
---

# App Engine deployment with IAM roles and service accounts

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

Access control documentation was updated for deploying App Engine apps using predefined IAM roles and service accounts.

## Extended Definition

Access control documentation was updated for deploying App Engine apps using predefined IAM roles and service accounts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control)

## Supporting Pages

### "Roles that grant access to App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Warning: Do not grant service agent roles to any principals except service agents . appengine.versions.delete appengine.versions.get appengine.versions.list appengine.versions.update artifactregistry. aptartifacts. create artifactregistry. dockerimages. artifactregistry. dockerimages. get artifactregistry. dockerimages. list artifactregistry. files. download artifactregistry.files.get artifactregistry.files.list artifactregistry. kfpartifacts. create artifactregistry.locations. artifactregistry.locations.get artifactregistry. locations. list artifactregistry. mavenartifacts. artifactregistry. mavenartifacts. get artifactregistry. mavenartifacts. list artifactregistry.npmpackages. artifactregistry. npmpackages. get artifactregistry. npmpackages. list artifactregistry.packages.get artifactregistry.packages.list artifactregistry. projectsettings. get artifactregistry. pythonpackages. artifactregistry. pythonpackages. get artifactregistry. pythonpackages. list artifactregistry. repositories. create artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. get artifactregistry. repositories. list artifactregistry. repositories. listEffectiveTags artifactregistry. repositories. listTagBindings artifactregistry. repositories. readViaVirtualRepository artifactregistry. repositories. uploadArtifacts artifactregistry.tags.create artifactregistry.tags.get artifactregistry.tags.list artifactregistry.tags.update artifactregistry.versions.get artifactregistry.versions.list artifactregistry. yumartifacts. create compute.addresses.create compute. addresses. createInternal compute.addresses.delete compute. addresses. deleteInternal compute.addresses.get compute.addresses.list compute.globalOperations.get compute.networks.get compute.regionOperations.get compute.subnetworks.get compute.subnetworks.use compute.zoneOperations.get datastore.databases.get datastore.entities.create datastore.entities.delete datastore.entities.get datastore.entities.list datastore.entities.update datastore.namespaces. datastore.namespaces.get datastore.namespaces.list datastore.schemas.list datastore.statistics. datastore.statistics.get datastore.statistics.list iam. serviceAccounts. getAccessToken iam. serviceAccounts. getOpenIdToken iam.serviceAccounts.signBlob serviceusage.consumerpolicy. serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. consumerpolicy. update serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.services.enable serviceusage.services.get serviceusage.values.test storage.buckets.create storage.buckets.get The predefined roles for App Engine provide you with finer grained options for access control.
- Capability App Engine Admin App Engine Service Admin App Engine Deployer App Engine Viewer App Engine Code Viewer List all services, versions and instances Yes Yes Yes Yes Yes View all application, service, version, and instance settings Yes Yes Yes Yes Yes View runtime metrics such as resource usage, load information, and error information Yes Yes Yes Yes Yes View app source code No No No No Yes Deploy a new version of an app Yes, if you also grant the Service Account User role No Yes, if you also grant the Service Account User role No No Split or migrate traffic Yes Yes No No No Start and stop a version Yes Yes No No No Delete a version Yes Yes Yes No No Delete an entire service Yes Yes No No No Use SSH to connect to a VM instance in the flexible environment Yes No No No No Shut down an instance Yes No No No No Disable and re-enable the App Engine application Yes No No No No Access handlers that have a login:admin restriction ( first generation runtimes only) Yes No No No No Update dispatch rules Yes No No No No Update DoS settings Yes No No No No Update cron schedules No No No No No Update default cookie expiration Yes No No No No Update referrers Yes No No No No Update Email API Authorized Senders Yes No No No No Note: The predefined roles are enforced in the Google Cloud console , the Admin API , and other tooling that requires access, including the deployment commands .
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.create appengine.versions.delete appengine.versions.get appengine.versions.list artifactregistry. projectsettings. get artifactregistry. repositories. deleteArtifacts artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. uploadArtifacts recommender.locations. recommender.locations.get recommender.locations.list resourcemanager.projects.get resourcemanager.projects.list App Engine Memcache Data Admin ( roles/ appengine.memcacheDataAdmin ) Can get, set, delete, and flush App Engine Memcache items. appengine.applications.get appengine.memcache.addKey appengine.memcache.flush appengine.memcache.get appengine.memcache.update resourcemanager.projects.get resourcemanager.projects.list App Engine Service Admin ( roles/ appengine.serviceAdmin ) Read-only access to all application configuration and settings.
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine. versions. getFileContents appengine.versions.list artifactregistry. projectsettings. get resourcemanager.projects.get resourcemanager.projects.list App Engine Managed VM Debug Access ( roles/ appengine.debugger ) Ability to read or manage v2 instances. appengine.applications.get appengine. applications. listRuntimes appengine.instances. appengine.instances.delete appengine. instances. enableDebug appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine.versions.list resourcemanager.projects.get resourcemanager.projects.list App Engine Deployer ( roles/ appengine.deployer ) Read-only access to all application configuration and settings.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Setting up access control Stay organized with collections Save and categorize content based on your preferences.
- In App Engine, there are a few separate use cases for setting up access control: Granting team members access to your Google Cloud project so they can set up services and deploy apps.
- Note: App Engine is not a supported service for workforce identity federation , and can only be accessed using Cloud Identity or Google Workspace accounts .
- Select roles that grant access to App Engine features .

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Setting up access control Stay organized with collections Save and categorize content based on your preferences.
- In App Engine, there are a few separate use cases for setting up access control: Granting team members access to your Google Cloud project so they can set up services and deploy apps.
- Note: App Engine is not a supported service for workforce identity federation , and can only be accessed using Cloud Identity or Google Workspace accounts .
- Select roles that grant access to App Engine features .

