---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:38:45.395Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "Managed VMs remote container build backend option"
feature_slug: "managed-vms-remote-container-build-backend-option"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/release-notes"
keywords:
  - "remote container build backend"
  - "remote Compute Engine VM builder"
  - "remote VM build backend"
  - "Managed VMs deployment"
  - "Cloud Build backend"
  - "cloud build option"
  - "gcloud preview app deploy"
  - "app/use_cloud_build"
---

# Managed VMs remote container build backend option

Product: App Engine Admin API
Coverage: HIGH

## Step 02 Summary

For App Engine Managed VMs, `gcloud preview app deploy` can build containers using either a default remote Compute Engine VM or Cloud Build, configurable via `app/use_cloud_build`.

## Extended Definition

In the App Engine Admin API release notes, App Engine Managed VM deployment via `gcloud preview app deploy` (and `mvn gcloud:deploy`) is described as using a remote container build step with two supported backends: a default transient Compute Engine VM builder and the Cloud Build service. The behavior is controlled through `gcloud config set app/use_cloud_build True` to force Cloud Build for all deploy invocations, and `... False` to return to the default remote VM backend.

## Evidence Summary

The release notes page provides the feature announcement and exact toggle commands showing that Managed VM container builds can switch between the default Compute Engine VM-based remote build and Cloud Build.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/release-notes](https://docs.cloud.google.com/appengine/docs/admin-api/release-notes)

## Supporting Pages

### App Engine Admin API release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/release-notes](https://docs.cloud.google.com/appengine/docs/admin-api/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- This will cause all invocations of gcloud preview app deploy to use the service. (To return to the default behavior, use the command gcloud config set app/use cloud build False .
- Change Version 1.9.33 February 03, 2016 Change Version 1.9.32 Feature Container construction choices for Managed VMs The gcloud preview app deploy (and mvn gcloud:deploy ) commands upload your artifacts to our servers and build a container to deploy your app to the Managed VM environment.
- Use the command gcloud config set app/use cloud build True .

