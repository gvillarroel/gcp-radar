---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.046Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Shared VPC support for Serverless VPC Access"
feature_slug: "shared-vpc-support-for-serverless-vpc-access"
latest_feature_date: "2020-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
  - "https://docs.cloud.google.com/functions/docs/concepts/iam"
  - "https://docs.cloud.google.com/functions/docs/securing/managing-access-iam"
keywords:
  - "shared"
  - "vpc"
  - "serverless"
  - "access"
  - "can"
  - "used"
  - "functions"
---

# Shared VPC support for Serverless VPC Access

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

Serverless VPC Access can be used with Shared VPC for functions.

## Extended Definition

Serverless VPC Access can be used with Shared VPC for functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)

## Supporting Pages

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- For the Shared VPC configuration: Ensure that the service accounts SERVICE PROJECT NUMBER @cloudservices.gserviceaccount.com and service-SERVICE PROJECT NUMBER @gcp-sa-vpcaccess.iam.gserviceaccount.com used by VPC Connector to provision resources in the project are not missing permissions.
- In environments where multiple functions are accessing different resources, it's a common practice to use per-function identities with named runtime service accounts rather than the default runtime service account ( PROJECT NUMBER -compute@developer.gserviceaccount.com ).
- Longer timeout limits in Cloud Run functions provides more breathing room for initialization and it offers more scalable resource allocation in a Cloud Run environment, potentially mitigating this issue if caused by resource exhaustion.
- If your functions are not inside a VPC Service Controls perimeter, this might cause them to receive HTTP 403 responses when attempting to access Google Cloud services protected by VPC Service Controls, due to service perimeter denials.

### Access control with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- Source ID: `site-iam-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following service accounts are used for Cloud Run functions: Name Member ID Role Compute Engine default service account PROJECT NUMBER-compute@developer.gserviceaccount.com Editor Google Cloud Functions Service Agent service-PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com Google Cloud Functions Service Agent Legacy Cloud Build service account 1 PROJECT NUMBER@cloudbuild.gserviceaccount.com Cloud Build Service Account Cloud Build Service Account service-PROJECT NUMBER@gcp-sa-cloudbuild.iam.gserviceaccount.com Cloud Build Service Agent Google Container Registry Service Agent service-PROJECT NUMBER@containerregistry.iam.gserviceaccount.com Container Registry Service Agent Artifact Registry Service Agent service-PROJECT NUMBER@gcp-sa-artifactregistry.iam.gserviceaccount.com Artifact Registry Service Agent Note: The iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint prevents the Editor role from being automatically granted to default service accounts.
- Here's a few of the notable permissions that the cloudfunctions.serviceAgent uses: Permission Description roles/artifactregistry.admin Manage repositories and store build images in Artifact Registry. roles/cloudbuild.builds.editor Required to use Cloud Build to perform builds in user project. roles/cloudbuild.customworkers.builder Create builds in Cloud Build custom workers. compute.globalOperations.get , compute.networks.access , vpcaccess.connectors.{get, use} Provision functions with access to the consumer projects VPC. roles/eventarc.developer Manage Eventarc triggers for functions. firebasedatabase.instances.{get, update} Create functions triggered by the Firebase Realtime Database. iam.serviceAccounts.{actAs, getAccessToken, signBlob} Ability to get runtime service account credentials. iam.serviceAccounts.getOpenIdToken Needed for the agent to get an OpenID token on a user-specified authority.
- OpenID token is used for invoking IAM-enabled functions. pubsub.subscriptions Manage subscriptions in the user's project. pubsub.topics Manage topics in the user's project. roles/run.developer Manage the Cloud Run Service for functions. storage.buckets.create , storage.objects.{delete, get, create, list} Required for storing source code in user project.
- If you've created or deployed functions using Cloud Run, see Access control with IAM and Cloud Run roles for a detailed description of Cloud Run predefined roles, controlling access to individual services, making a service public, or configuring organization policy for the Cloud Run invoker IAM.

### Authorize access with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)
- Source ID: `site-iam-reference`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Viewing principals To view principals, use the gcloud functions get-iam-policy command: gcloud functions get-iam-policy FUNCTION NAME Allowing unauthenticated HTTP function invocation Note: If you created functions using the Cloud Run Admin API, see the Allowing public (unauthenticated) access guide instead.
- Before you begin To get the permission that you need to control access for a specific function or all functions in a project, ask your administrator to grant you the Cloud Functions Admin ( roles/roles/cloudfunctions.admin ) IAM role on the function or the project.
- Authorize access with IAM You use Identity and Access Management (IAM) to authorize identities to perform administrative actions on functions created using the Cloud Functions v2 API —for example, using gcloud functions , the REST API, or Terraform.
- This predefined role contains the cloudfunctions.functions.setIamPolicy permission, which is required to control access for a specific function or all functions in a project.

