---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.756Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine Users API IAM role and group admin recognition"
feature_slug: "app-engine-users-api-iam-role-and-group-admin-recognition"
latest_feature_date: "2016-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
keywords:
  - "app"
  - "engine"
  - "users"
  - "iam"
  - "role"
  - "group"
  - "admin"
  - "recognition"
---

# App Engine Users API IAM role and group admin recognition

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The App Engine Users API now treats users with Owner, Editor, Viewer, or App Engine Admin privileges and group membership as admins.

## Extended Definition

The App Engine Users API now treats users with Owner, Editor, Viewer, or App Engine Admin privileges and group membership as admins.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)

## Supporting Pages

### "Roles that grant access to App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Warning: Do not grant service agent roles to any principals except service agents . appengine.versions.delete appengine.versions.get appengine.versions.list appengine.versions.update artifactregistry. aptartifacts. create artifactregistry. dockerimages. artifactregistry. dockerimages. get artifactregistry. dockerimages. list artifactregistry. files. download artifactregistry.files.get artifactregistry.files.list artifactregistry. kfpartifacts. create artifactregistry.locations. artifactregistry.locations.get artifactregistry. locations. list artifactregistry. mavenartifacts. artifactregistry. mavenartifacts. get artifactregistry. mavenartifacts. list artifactregistry.npmpackages. artifactregistry. npmpackages. get artifactregistry. npmpackages. list artifactregistry.packages.get artifactregistry.packages.list artifactregistry. projectsettings. get artifactregistry. pythonpackages. artifactregistry. pythonpackages. get artifactregistry. pythonpackages. list artifactregistry. repositories. create artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. get artifactregistry. repositories. list artifactregistry. repositories. listEffectiveTags artifactregistry. repositories. listTagBindings artifactregistry. repositories. readViaVirtualRepository artifactregistry. repositories. uploadArtifacts artifactregistry.tags.create artifactregistry.tags.get artifactregistry.tags.list artifactregistry.tags.update artifactregistry.versions.get artifactregistry.versions.list artifactregistry. yumartifacts. create compute.addresses.create compute. addresses. createInternal compute.addresses.delete compute. addresses. deleteInternal compute.addresses.get compute.addresses.list compute.globalOperations.get compute.networks.get compute.regionOperations.get compute.subnetworks.get compute.subnetworks.use compute.zoneOperations.get datastore.databases.get datastore.entities.create datastore.entities.delete datastore.entities.get datastore.entities.list datastore.entities.update datastore.namespaces. datastore.namespaces.get datastore.namespaces.list datastore.schemas.list datastore.statistics. datastore.statistics.get datastore.statistics.list iam. serviceAccounts. getAccessToken iam. serviceAccounts. getOpenIdToken iam.serviceAccounts.signBlob serviceusage.consumerpolicy. serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. consumerpolicy. update serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.services.enable serviceusage.services.get serviceusage.values.test storage.buckets.create storage.buckets.get The predefined roles for App Engine provide you with finer grained options for access control.
- Capability App Engine Admin App Engine Service Admin App Engine Deployer App Engine Viewer App Engine Code Viewer List all services, versions and instances Yes Yes Yes Yes Yes View all application, service, version, and instance settings Yes Yes Yes Yes Yes View runtime metrics such as resource usage, load information, and error information Yes Yes Yes Yes Yes View app source code No No No No Yes Deploy a new version of an app Yes, if you also grant the Service Account User role No Yes, if you also grant the Service Account User role No No Split or migrate traffic Yes Yes No No No Start and stop a version Yes Yes No No No Delete a version Yes Yes Yes No No Delete an entire service Yes Yes No No No Use SSH to connect to a VM instance in the flexible environment Yes No No No No Shut down an instance Yes No No No No Disable and re-enable the App Engine application Yes No No No No Access handlers that have a login:admin restriction ( first generation runtimes only) Yes No No No No Update dispatch rules Yes No No No No Update DoS settings Yes No No No No Update cron schedules No No No No No Update default cookie expiration Yes No No No No Update referrers Yes No No No No Update Email API Authorized Senders Yes No No No No Note: The predefined roles are enforced in the Google Cloud console , the Admin API , and other tooling that requires access, including the deployment commands .
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.applications.update appengine.instances. appengine.instances.delete appengine. instances. enableDebug appengine.instances.get appengine.instances.list appengine.memcache.addKey appengine.memcache.flush appengine.memcache.get appengine.memcache.update appengine.operations. appengine.operations.get appengine.operations.list appengine.runtimes.actAsAdmin appengine.services. appengine.services.delete appengine.services.get appengine.services.list appengine.services.update appengine.versions.create appengine.versions.delete appengine. versions. exportAppImage appengine.versions.get appengine.versions.list appengine.versions.update artifactregistry. projectsettings. get artifactregistry. repositories. deleteArtifacts artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. uploadArtifacts recommender.locations. recommender.locations.get recommender.locations.list resourcemanager.projects.get resourcemanager.projects.list App Engine Creator ( roles/ appengine.appCreator ) Ability to create the App Engine resource for the project.
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.create appengine.versions.delete appengine.versions.get appengine.versions.list artifactregistry. projectsettings. get artifactregistry. repositories. deleteArtifacts artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. uploadArtifacts recommender.locations. recommender.locations.get recommender.locations.list resourcemanager.projects.get resourcemanager.projects.list App Engine Memcache Data Admin ( roles/ appengine.memcacheDataAdmin ) Can get, set, delete, and flush App Engine Memcache items. appengine.applications.get appengine.memcache.addKey appengine.memcache.flush appengine.memcache.get appengine.memcache.update resourcemanager.projects.get resourcemanager.projects.list App Engine Service Admin ( roles/ appengine.serviceAdmin ) Read-only access to all application configuration and settings.

### "Mapping custom domains \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- In order to add or edit a custom domain mapping, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.get permission.
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Otherwise, users can use your app's App Engine URL to bypass the load balancer, Cloud Armor security policies, SSL certificates, and private keys that are passed through the load balancer.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- This solution is best if you want to authenticate users based on their Google Account, or if you are using Google Admin console for your domain.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.
- To learn about integrating Identity Platform with App Engine, try the how-to guide for signing in users on App Engine .

