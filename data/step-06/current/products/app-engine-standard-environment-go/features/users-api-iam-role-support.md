---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.315Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Users API IAM role support"
feature_slug: "users-api-iam-role-support"
latest_feature_date: "2016-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/access-control"
keywords:
  - "recognizes"
  - "users"
  - "roles"
  - "group"
  - "role"
---

# Users API IAM role support

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The App Engine Users API recognizes IAM roles and Google Group membership when determining admin access.

## Extended Definition

The App Engine Users API recognizes IAM roles and Google Group membership when determining admin access.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control)

## Supporting Pages

### "Roles that grant access to App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- Source ID: `site-docs-reference-4`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Warning: Do not grant service agent roles to any principals except service agents . appengine.versions.delete appengine.versions.get appengine.versions.list appengine.versions.update artifactregistry. aptartifacts. create artifactregistry. dockerimages. artifactregistry. dockerimages. get artifactregistry. dockerimages. list artifactregistry. files. download artifactregistry.files.get artifactregistry.files.list artifactregistry. kfpartifacts. create artifactregistry.locations. artifactregistry.locations.get artifactregistry. locations. list artifactregistry. mavenartifacts. artifactregistry. mavenartifacts. get artifactregistry. mavenartifacts. list artifactregistry.npmpackages. artifactregistry. npmpackages. get artifactregistry. npmpackages. list artifactregistry.packages.get artifactregistry.packages.list artifactregistry. projectsettings. get artifactregistry. pythonpackages. artifactregistry. pythonpackages. get artifactregistry. pythonpackages. list artifactregistry. repositories. create artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. get artifactregistry. repositories. list artifactregistry. repositories. listEffectiveTags artifactregistry. repositories. listTagBindings artifactregistry. repositories. readViaVirtualRepository artifactregistry. repositories. uploadArtifacts artifactregistry.tags.create artifactregistry.tags.get artifactregistry.tags.list artifactregistry.tags.update artifactregistry.versions.get artifactregistry.versions.list artifactregistry. yumartifacts. create compute.addresses.create compute. addresses. createInternal compute.addresses.delete compute. addresses. deleteInternal compute.addresses.get compute.addresses.list compute.globalOperations.get compute.networks.get compute.regionOperations.get compute.subnetworks.get compute.subnetworks.use compute.zoneOperations.get datastore.databases.get datastore.entities.create datastore.entities.delete datastore.entities.get datastore.entities.list datastore.entities.update datastore.namespaces. datastore.namespaces.get datastore.namespaces.list datastore.schemas.list datastore.statistics. datastore.statistics.get datastore.statistics.list iam. serviceAccounts. getAccessToken iam. serviceAccounts. getOpenIdToken iam.serviceAccounts.signBlob serviceusage.consumerpolicy. serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. consumerpolicy. update serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.services.enable serviceusage.services.get serviceusage.values.test storage.buckets.create storage.buckets.get The predefined roles for App Engine provide you with finer grained options for access control.
- All viewer and editor privileges, plus the ability to view deployed source code, invite users, change user roles, and delete an application.
- Capability App Engine Admin App Engine Service Admin App Engine Deployer App Engine Viewer App Engine Code Viewer List all services, versions and instances Yes Yes Yes Yes Yes View all application, service, version, and instance settings Yes Yes Yes Yes Yes View runtime metrics such as resource usage, load information, and error information Yes Yes Yes Yes Yes View app source code No No No No Yes Deploy a new version of an app Yes, if you also grant the Service Account User role No Yes, if you also grant the Service Account User role No No Split or migrate traffic Yes Yes No No No Start and stop a version Yes Yes No No No Delete a version Yes Yes Yes No No Delete an entire service Yes Yes No No No Use SSH to connect to a VM instance in the flexible environment Yes No No No No Shut down an instance Yes No No No No Disable and re-enable the App Engine application Yes No No No No Access handlers that have a login:admin restriction ( first generation runtimes only) Yes No No No No Update dispatch rules Yes No No No No Update DoS settings Yes No No No No Update cron schedules No No No No No Update default cookie expiration Yes No No No No Update referrers Yes No No No No Update Email API Authorized Senders Yes No No No No Note: The predefined roles are enforced in the Google Cloud console , the Admin API , and other tooling that requires access, including the deployment commands .
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.applications.update appengine.instances. appengine.instances.delete appengine. instances. enableDebug appengine.instances.get appengine.instances.list appengine.memcache.addKey appengine.memcache.flush appengine.memcache.get appengine.memcache.update appengine.operations. appengine.operations.get appengine.operations.list appengine.runtimes.actAsAdmin appengine.services. appengine.services.delete appengine.services.get appengine.services.list appengine.services.update appengine.versions.create appengine.versions.delete appengine. versions. exportAppImage appengine.versions.get appengine.versions.list appengine.versions.update artifactregistry. projectsettings. get artifactregistry. repositories. deleteArtifacts artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. uploadArtifacts recommender.locations. recommender.locations.get recommender.locations.list resourcemanager.projects.get resourcemanager.projects.list App Engine Creator ( roles/ appengine.appCreator ) Ability to create the App Engine resource for the project.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the default service account already has the Editor role, we recommend that you replace the Editor role with less permissive roles.To safely modify the service account's roles, use Policy Simulator to see the impact of the change, and then grant and revoke the appropriate roles .
- If you disable the automatic role grant, you must decide which roles to grant to the default service accounts, and then grant these roles yourself.
- If the service account also needs access to other Cloud services, select roles that grant access to other Cloud services .
- If the user also needs access to other Cloud services, select roles that grant access to other Cloud services .

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control)
- Source ID: `site-docs-reference-4`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the default service account already has the Editor role, we recommend that you replace the Editor role with less permissive roles.To safely modify the service account's roles, use Policy Simulator to see the impact of the change, and then grant and revoke the appropriate roles .
- If you disable the automatic role grant, you must decide which roles to grant to the default service accounts, and then grant these roles yourself.
- If the service account also needs access to other Cloud services, select roles that grant access to other Cloud services .
- If the user also needs access to other Cloud services, select roles that grant access to other Cloud services .

