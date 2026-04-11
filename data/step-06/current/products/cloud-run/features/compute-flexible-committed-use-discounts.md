---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.913Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Compute flexible committed use discounts"
feature_slug: "compute-flexible-committed-use-discounts"
latest_feature_date: "2024-07-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/tutorials/eventarc"
  - "https://docs.cloud.google.com/run/docs/container-contract"
keywords:
  - "compute"
  - "flexible"
  - "committed"
  - "use"
  - "discounts"
  - "let"
  - "eligible"
  - "run"
---

# Compute flexible committed use discounts

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Compute flexible committed use discounts let eligible Cloud Run services and jobs share flexible commitments across Compute Engine, GKE, and Cloud Run.

## Extended Definition

Compute flexible committed use discounts let eligible Cloud Run services and jobs share flexible commitments across Compute Engine, GKE, and Cloud Run.

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
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Feature Compute flexible committed use discounts (CUDs) have expanded to also cover your Cloud Billing account's spend across Cloud Run services with request-based billing and Cloud Run functions.
- July 15, 2024 Feature Compute flexible committed use discounts are now available for Cloud Run services with CPU always allocated , and Cloud Run jobs.
- February 06, 2026 Feature Expanded coverage for compute flexible committed use discounts (CUDs) is available to all Cloud Billing accounts.
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.

### "Use Eventarc to receive events from Cloud Storage \_|\_ Cloud Run \_|\_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To get the permissions that you need to complete this tutorial, ask your administrator to grant you the following IAM roles on your project: Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Cloud Run Source Developer ( roles/run.sourceDeveloper ) Eventarc Admin ( roles/eventarc.admin ) Logs View Accessor ( roles/logging.viewAccessor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Service Account Admin ( roles/iam.serviceAccountAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- If you are not using Cloud Shell, update the Google Cloud CLI components and log in using your account: gcloud components update gcloud auth login Enable the APIs: gcloud services enable artifactregistry.googleapis.com \ cloudbuild.googleapis.com \ eventarc.googleapis.com \ run.googleapis.com \ storage.googleapis.com Set the configuration variables used in this tutorial: export REGION = us-central1 gcloud config set run/region ${ REGION } gcloud config set run/platform managed gcloud config set eventarc/location ${ REGION } You or your administrator must grant the deployer account, the trigger identity, and optionally, the Pub/Sub service agent the following IAM roles.
- Create a trigger that filters Cloud Storage events: gcloud eventarc triggers create ${ SERVICE NAME } \ --destination-run-service = ${ SERVICE NAME } \ --destination-run-region = ${ REGION } \ --location = ${ REGION } \ --event-filters = "type=google.cloud.storage.object.v1.finalized" \ --event-filters = "bucket= PROJECT ID -bucket" \ --service-account = PROJECT NUMBER -compute@developer.gserviceaccount.com This creates a trigger called helloworld-events .
- This grants the role on all Cloud Run services and jobs in a project. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/run.invoker Note that if you create a trigger for an authenticated Cloud Run service without granting the Cloud Run Invoker role, the trigger is created successfully and is active.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists some of the available metadata server information: Path Description /computeMetadata/v1/project/project-id Project ID of the project the Cloud Run resource belongs to. /computeMetadata/v1/project/numeric-project-id Project number of the project the Cloud Run resource belongs to. /computeMetadata/v1/instance/region Region of this Cloud Run resource, returns projects/ PROJECT-NUMBER /regions/ REGION /computeMetadata/v1/instance/id Unique identifier of the instance (also available in logs ). /computeMetadata/v1/instance/service-accounts/default/email Email for the service identity of this Cloud Run resource. /computeMetadata/v1/instance/service-accounts/default/token Generates an OAuth2 access token for the service account of this Cloud Run resource .
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.
- For example, in your Dockerfile, remove the USER instruction, and in your entrypoint script, use the following sequence: gcsfuse ... # Run gcsfuse as root su myuser -c "/yourapp.sh" # Switch to 'myuser' and run 'yourapp.sh' Executing user If the user name doesn't exist, Cloud Run runs the container as the root user ( uid=0 ).
- Read more about how to extract and use this access token. /computeMetadata/v1/instance/network-interfaces/0/ip IPv4 address of a worker pool instance on a VPC network. /computeMetadata/v1/instance/network-interfaces/0/ipv6 IPv6 address of a worker pool instance.

