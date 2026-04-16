---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:04.018Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Cloud Build deployment builds"
feature_slug: "cloud-build-deployment-builds"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/access-control"
  - "https://docs.cloud.google.com/appengine/docs/flexible/roles"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build"
keywords:
  - "build"
  - "deployment"
  - "builds"
  - "managed"
  - "vms"
  - "deployments"
  - "can"
  - "use"
---

# Cloud Build deployment builds

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Managed VMs deployments can use the Cloud Build service to build container images remotely.

## Extended Definition

Managed VMs deployments can use the Cloud Build service to build container images remotely.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)

## Supporting Pages

### "Roles that grant access to App Engine \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the account uses gcloud commands to deploy, add these roles as well: Storage Object Admin ( roles/storage.objectAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) To access data stored in Datastore, or update indexes, enable the Cloud Datastore Index Admin role ( roles/datastore.indexAdmin ).
- To deploy new versions, a principal must have the Service Account User ( roles/iam.serviceAccountUser ) role on the assigned App Engine service account , and the Cloud Build Editor ( roles/cloudbuild.builds.editor ), and Cloud Storage Object Admin ( roles/storage.objectAdmin ) roles on the project.
- To deploy new versions, you must also have the Service Account User ( roles/iam.serviceAccountUser ) role on the assigned App Engine service account , and the Cloud Build Editor ( roles/cloudbuild.builds.editor ), and Cloud Storage Object Admin ( roles/storage.objectAdmin ) roles on the project.
- Capability App Engine Admin App Engine Service Admin App Engine Deployer App Engine Viewer App Engine Code Viewer List all services, versions and instances Yes Yes Yes Yes Yes View all application, service, version, and instance settings Yes Yes Yes Yes Yes View runtime metrics such as resource usage, load information, and error information Yes Yes Yes Yes Yes View app source code No No No No Yes Deploy a new version of an app Yes, if you also grant the Service Account User role No Yes, if you also grant the Service Account User role No No Split or migrate traffic Yes Yes No No No Start and stop a version Yes Yes No No No Delete a version Yes Yes Yes No No Delete an entire service Yes Yes No No No Use SSH to connect to a VM instance in the flexible environment Yes No No No No Shut down an instance Yes No No No No Disable and re-enable the App Engine application Yes No No No No Access handlers that have a login:admin restriction ( first generation runtimes only) Yes No No No No Update dispatch rules Yes No No No No Update DoS settings Yes No No No No Update cron schedules No No No No No Update default cookie expiration Yes No No No No Update referrers Yes No No No No Update Email API Authorized Senders Yes No No No No Note: The predefined roles are enforced in the Google Cloud console , the Admin API , and other tooling that requires access, including the deployment commands .

### "Roles that grant access to App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the account uses gcloud commands to deploy, add these roles as well: Storage Object Admin ( roles/storage.objectAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) To access data stored in Datastore, or update indexes, enable the Cloud Datastore Index Admin role ( roles/datastore.indexAdmin ).
- To deploy new versions, a principal must have the Service Account User ( roles/iam.serviceAccountUser ) role on the assigned App Engine service account , and the Cloud Build Editor ( roles/cloudbuild.builds.editor ), and Cloud Storage Object Admin ( roles/storage.objectAdmin ) roles on the project.
- To deploy new versions, you must also have the Service Account User ( roles/iam.serviceAccountUser ) role on the assigned App Engine service account , and the Cloud Build Editor ( roles/cloudbuild.builds.editor ), and Cloud Storage Object Admin ( roles/storage.objectAdmin ) roles on the project.
- Capability App Engine Admin App Engine Service Admin App Engine Deployer App Engine Viewer App Engine Code Viewer List all services, versions and instances Yes Yes Yes Yes Yes View all application, service, version, and instance settings Yes Yes Yes Yes Yes View runtime metrics such as resource usage, load information, and error information Yes Yes Yes Yes Yes View app source code No No No No Yes Deploy a new version of an app Yes, if you also grant the Service Account User role No Yes, if you also grant the Service Account User role No No Split or migrate traffic Yes Yes No No No Start and stop a version Yes Yes No No No Delete a version Yes Yes Yes No No Delete an entire service Yes Yes No No No Use SSH to connect to a VM instance in the flexible environment Yes No No No No Shut down an instance Yes No No No No Disable and re-enable the App Engine application Yes No No No No Access handlers that have a login:admin restriction ( first generation runtimes only) Yes No No No No Update dispatch rules Yes No No No No Update DoS settings Yes No No No No Update cron schedules No No No No No Update default cookie expiration Yes No No No No Update referrers Yes No No No No Update Email API Authorized Senders Yes No No No No Note: The predefined roles are enforced in the Google Cloud console , the Admin API , and other tooling that requires access, including the deployment commands .

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- If your application uses Cloud Build for compiling Docker images, the cloudbuild network hosts the Application Default Credentials enabling the associated Google Cloud services to automatically find your credentials.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Build custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- With a custom runtime, the flexible environment provides and manages your scaling, monitoring, and load balancing infrastructure for you, so you can focus on building your application.
- Build and deploy your custom runtime After you configure your app.yaml and DOCKER file, you can build and deploy that container image to App Engine.

