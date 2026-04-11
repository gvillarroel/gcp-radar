---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.919Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Committed use discounts"
feature_slug: "committed-use-discounts"
latest_feature_date: "2021-07-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/tutorials/eventarc"
  - "https://docs.cloud.google.com/run/docs/container-contract"
keywords:
  - "committed"
  - "use"
  - "discounts"
  - "let"
  - "run"
  - "workloads"
  - "receive"
  - "discounted"
---

# Committed use discounts

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Committed use discounts let Cloud Run workloads receive discounted pricing through committed usage.

## Extended Definition

Committed use discounts let Cloud Run workloads receive discounted pricing through committed usage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.
- The set of packages and features provided by Sovereign Controls by Partners lets you use Cloud Run while meeting digital sovereignty requirements and managing your workloads with data sovereignty guarantees.
- Feature Compute flexible committed use discounts (CUDs) have expanded to also cover your Cloud Billing account's spend across Cloud Run services with request-based billing and Cloud Run functions.
- November 01, 2021 Feature Committed use discount recommender now automatically generates recommendations to purchase Cloud Run committed use discounts based on historical usage.

### "Use Eventarc to receive events from Cloud Storage \_|\_ Cloud Run \_|\_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To get the permissions that you need to complete this tutorial, ask your administrator to grant you the following IAM roles on your project: Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Cloud Run Source Developer ( roles/run.sourceDeveloper ) Eventarc Admin ( roles/eventarc.admin ) Logs View Accessor ( roles/logging.viewAccessor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Service Account Admin ( roles/iam.serviceAccountAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Home Documentation Application hosting Cloud Run Guides Send feedback Use Eventarc to receive events from Cloud Storage Stay organized with collections Save and categorize content based on your preferences.
- If you are not using Cloud Shell, update the Google Cloud CLI components and log in using your account: gcloud components update gcloud auth login Enable the APIs: gcloud services enable artifactregistry.googleapis.com \ cloudbuild.googleapis.com \ eventarc.googleapis.com \ run.googleapis.com \ storage.googleapis.com Set the configuration variables used in this tutorial: export REGION = us-central1 gcloud config set run/region ${ REGION } gcloud config set run/platform managed gcloud config set eventarc/location ${ REGION } You or your administrator must grant the deployer account, the trigger identity, and optionally, the Pub/Sub service agent the following IAM roles.
- Delete your container image What's next Create Eventarc triggers for other event types Build containers Develop Cloud Run services Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- In services that use the second generation execution environment, we recommend installing a SIGTERM handler on your container to receive a warning when Cloud Run is about to shut down an instance.
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.
- If a workload-processing instance must be shut down, Cloud Run gives tasks in-process tasks time to complete and routes new workloads to other instances.
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.

