---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.397Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Build environment variables"
feature_slug: "build-environment-variables"
latest_feature_date: "2022-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/access-control"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby"
keywords:
  - "variables"
  - "define"
  - "build"
---

# Build environment variables

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Build environment variables let you define environment variables for the App Engine build process; Build environment variables let you define environment variables for the App Engine build process.

## Extended Definition

Build environment variables let you define environment variables for the App Engine build process; Build environment variables let you define environment variables for the App Engine build process.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref](https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref)
- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby](https://docs.cloud.google.com/appengine/docs/flexible/ruby)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref](https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- If you are using a runtime that supports buildpacks , you can define build environment variables in your app.yaml file.
- If you want to use the App Engine legacy bundled services for second-generation runtimes , set this field to true . build env variables Optional.
- You can define environment variables in your app.yaml file to make them available to your app.
- To learn more, see Using build environment variables . default expiration Optional.

### "Roles that grant access to App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- Source ID: `site-docs-reference-4`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Warning: Do not grant service agent roles to any principals except service agents . appengine.versions.delete appengine.versions.get appengine.versions.list appengine.versions.update artifactregistry. aptartifacts. create artifactregistry. dockerimages. artifactregistry. dockerimages. get artifactregistry. dockerimages. list artifactregistry. files. download artifactregistry.files.get artifactregistry.files.list artifactregistry. kfpartifacts. create artifactregistry.locations. artifactregistry.locations.get artifactregistry. locations. list artifactregistry. mavenartifacts. artifactregistry. mavenartifacts. get artifactregistry. mavenartifacts. list artifactregistry.npmpackages. artifactregistry. npmpackages. get artifactregistry. npmpackages. list artifactregistry.packages.get artifactregistry.packages.list artifactregistry. projectsettings. get artifactregistry. pythonpackages. artifactregistry. pythonpackages. get artifactregistry. pythonpackages. list artifactregistry. repositories. create artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. get artifactregistry. repositories. list artifactregistry. repositories. listEffectiveTags artifactregistry. repositories. listTagBindings artifactregistry. repositories. readViaVirtualRepository artifactregistry. repositories. uploadArtifacts artifactregistry.tags.create artifactregistry.tags.get artifactregistry.tags.list artifactregistry.tags.update artifactregistry.versions.get artifactregistry.versions.list artifactregistry. yumartifacts. create compute.addresses.create compute. addresses. createInternal compute.addresses.delete compute. addresses. deleteInternal compute.addresses.get compute.addresses.list compute.globalOperations.get compute.networks.get compute.regionOperations.get compute.subnetworks.get compute.subnetworks.use compute.zoneOperations.get datastore.databases.get datastore.entities.create datastore.entities.delete datastore.entities.get datastore.entities.list datastore.entities.update datastore.namespaces. datastore.namespaces.get datastore.namespaces.list datastore.schemas.list datastore.statistics. datastore.statistics.get datastore.statistics.list iam. serviceAccounts. getAccessToken iam. serviceAccounts. getOpenIdToken iam.serviceAccounts.signBlob serviceusage.consumerpolicy. serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. consumerpolicy. update serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.services.enable serviceusage.services.get serviceusage.values.test storage.buckets.create storage.buckets.get The predefined roles for App Engine provide you with finer grained options for access control.
- Capability App Engine Admin App Engine Service Admin App Engine Deployer App Engine Viewer App Engine Code Viewer List all services, versions and instances Yes Yes Yes Yes Yes View all application, service, version, and instance settings Yes Yes Yes Yes Yes View runtime metrics such as resource usage, load information, and error information Yes Yes Yes Yes Yes View app source code No No No No Yes Deploy a new version of an app Yes, if you also grant the Service Account User role No Yes, if you also grant the Service Account User role No No Split or migrate traffic Yes Yes No No No Start and stop a version Yes Yes No No No Delete a version Yes Yes Yes No No Delete an entire service Yes Yes No No No Use SSH to connect to a VM instance in the flexible environment Yes No No No No Shut down an instance Yes No No No No Disable and re-enable the App Engine application Yes No No No No Access handlers that have a login:admin restriction ( first generation runtimes only) Yes No No No No Update dispatch rules Yes No No No No Update DoS settings Yes No No No No Update cron schedules No No No No No Update default cookie expiration Yes No No No No Update referrers Yes No No No No Update Email API Authorized Senders Yes No No No No Note: The predefined roles are enforced in the Google Cloud console , the Admin API , and other tooling that requires access, including the deployment commands .
- If the account uses gcloud commands to deploy, add these roles as well: Storage Object Admin ( roles/storage.objectAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) To access data stored in Datastore, or update indexes, enable the Cloud Datastore Index Admin role ( roles/datastore.indexAdmin ).
- To deploy new versions, a principal must have the Service Account User ( roles/iam.serviceAccountUser ) role on the assigned App Engine service account , and the Cloud Build Editor ( roles/cloudbuild.builds.editor ), and Cloud Storage Object Admin ( roles/storage.objectAdmin ) roles on the project.

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby](https://docs.cloud.google.com/appengine/docs/flexible/ruby)
- Source ID: `site-docs-reference-4`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using C libraries with Ruby For Ruby libraries that require C extensions, the headers for the current Ruby version and the following Ubuntu packages are pre-installed on the system. autoconf build-essential ca-certificates cmake curl file git imagemagick libcurl3 libcurl3-gnutls libcurl4-openssl-dev libffi-dev libgdbm-dev libgit2-dev libgmp-dev libicu-dev libjemalloc-dev libjemalloc1 libmagickwand-dev libmysqlclient-dev libncurses5-dev libpq-dev libqdbm-dev libreadline6-dev libsqlite3-dev libssl-dev libxml2-dev libxslt-dev libyaml-dev libz-dev systemtap tzdata These packages allow the installation of most popular Ruby libraries.
- Environment variables The following environment variables are set by the runtime environment: Environment Variable Description GAE INSTANCE The name of the current instance.
- Shell variables such as $PORT will be replaced normally, but shell syntax such as if , for and while embedded in the entrypoint command will not function.
- The entrypoint should start a process that responds to HTTP requests on the port defined by the environment variable PORT .

