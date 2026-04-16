---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.003Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Google-managed Artifact Registry"
feature_slug: "google-managed-artifact-registry"
latest_feature_date: "2022-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/securing/cmek"
  - "https://docs.cloud.google.com/functions/docs/concepts/iam"
  - "https://docs.cloud.google.com/functions/docs/building"
keywords:
  - "managed"
  - "artifact"
  - "registry"
  - "run"
  - "functions"
  - "1st"
  - "gen"
  - "supports"
---

# Google-managed Artifact Registry

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

Cloud Run functions 1st gen supports Google-managed Artifact Registry.

## Extended Definition

Cloud Run functions 1st gen supports Google-managed Artifact Registry.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)
- [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)

## Supporting Pages

### "Protect your data with CMEK \_|\_ Cloud Run functions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)
- Source ID: `site-iam-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Granting service accounts access to the key For all functions, you must grant the following service accounts access to the key: Cloud Run functions service agent ( service- PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com ) Artifact Registry service agent ( service- PROJECT NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com ) Cloud Storage service agent ( service- PROJECT NUMBER @gs-project-accounts.iam.gserviceaccount.com ) Cloud Run service agent ( service- PROJECT NUMBER @serverless-robot-prod.iam.gserviceaccount.com ) Eventarc service agent ( service- PROJECT NUMBER @gcp-sa-eventarc.iam.gserviceaccount.com ) To grant these service accounts access to the key, add each service account as a principal of the key and then grant the service account the Cloud KMS CryptoKey Encrypter/Decrypter role: Console Go to the Cloud Key Management Service page in the Google Cloud console: Go to the Cloud KMS page Click the name of the key ring that contains the chosen key.
- Enabling CMEK for a function After setting up an Artifact Registry repository with CMEK enabled and granting Cloud Run functions access to your key, you're ready to enable CMEK for your function.
- Cloud Run functions CMEK protection only applies to Google-managed Cloud Run functions resources; you are responsible for protecting data and resources managed by you, such as your source code repositories, event channels that live in the customer project, or any services used by your functions.
- Protect your data with CMEK This page provides supplemental information for protecting your data with customer-managed encryption keys (CMEKs) for functions created using gcloud functions commands or the Cloud Functions v2 API .

### Access control with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- Source ID: `site-iam-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following service accounts are used for Cloud Run functions: Name Member ID Role Compute Engine default service account PROJECT NUMBER-compute@developer.gserviceaccount.com Editor Google Cloud Functions Service Agent service-PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com Google Cloud Functions Service Agent Legacy Cloud Build service account 1 PROJECT NUMBER@cloudbuild.gserviceaccount.com Cloud Build Service Account Cloud Build Service Account service-PROJECT NUMBER@gcp-sa-cloudbuild.iam.gserviceaccount.com Cloud Build Service Agent Google Container Registry Service Agent service-PROJECT NUMBER@containerregistry.iam.gserviceaccount.com Container Registry Service Agent Artifact Registry Service Agent service-PROJECT NUMBER@gcp-sa-artifactregistry.iam.gserviceaccount.com Artifact Registry Service Agent Note: The iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint prevents the Editor role from being automatically granted to default service accounts.
- Here's a few of the notable permissions that the cloudfunctions.serviceAgent uses: Permission Description roles/artifactregistry.admin Manage repositories and store build images in Artifact Registry. roles/cloudbuild.builds.editor Required to use Cloud Build to perform builds in user project. roles/cloudbuild.customworkers.builder Create builds in Cloud Build custom workers. compute.globalOperations.get , compute.networks.access , vpcaccess.connectors.{get, use} Provision functions with access to the consumer projects VPC. roles/eventarc.developer Manage Eventarc triggers for functions. firebasedatabase.instances.{get, update} Create functions triggered by the Firebase Realtime Database. iam.serviceAccounts.{actAs, getAccessToken, signBlob} Ability to get runtime service account credentials. iam.serviceAccounts.getOpenIdToken Needed for the agent to get an OpenID token on a user-specified authority.
- Cloud Run functions supports the following roles: Cloud Run predefined roles (recommended) Cloud Functions predefined roles Basic roles of Editor , Owner , and Viewer .
- You can see the entire set of permissions under the predefined IAM roles or by running this command: gcloud iam roles describe roles/cloudfunctions.serviceAgent Reset this service account to the default role by removing whatever role it has and adding the Cloud Functions Service Agent role: gcloud projects add-iam-policy-binding PROJECT ID \ --member serviceAccount:service- PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com \ --role roles/cloudfunctions.serviceAgent Troubleshooting permission errors If you get permission errors when you deploy, update, delete, or execute functions in your project, perform the following steps: Make sure that you have the Editor or Owner role on your project, or that you are using the Cloud Functions Developer role.

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To specify a self-managed Artifact Registry repository, run the following command: gcloud functions deploy FUNCTION NAME \ --docker-repository = REPOSITORY \ [ FLAGS... ] Replace the following: FUNCTION NAME : The name of the function.
- This can be accomplished by adding an IAM condition to the role grant such as (resource.type == "storage.googleapis.com/Object" && (resource.name.startsWith("projects/ /buckets/gcf-v2-sources-") resource.name.startsWith("projects/ /buckets/gcf-v2-uploads-") resource.name.startsWith("projects/ /buckets/run-sources-"))) Grant the following roles using the Google Cloud CLI , or use Google Cloud console . gcloud projects add - iam - policy - binding PROJECT ID \ -- member = serviceAccount: SA EMAIL \ -- role = roles / logging . logWriter gcloud projects add - iam - policy - binding PROJECT ID \ -- member = serviceAccount: SA EMAIL \ -- role = roles / artifactregistry . writer gcloud projects add - iam - policy - binding PROJECT ID \ -- member = serviceAccount: SA EMAIL \ -- role = roles / storage . objectViewer Replace the following: PROJECT ID : Your Google Cloud project ID .
- When specifying a Artifact Registry repository located in a different project or region you may need to consider additional configurations: IAM configurations: IAM configurations: Ensure that the build service account has authorized access to read and write to the REPOSITORY .
- You can alternatively provide your own artifact repository through dockerRepository field. roles/storage.objectViewer — Required to retrieve the function source from the Cloud Storage bucket, and to store build images in Container Registry.

