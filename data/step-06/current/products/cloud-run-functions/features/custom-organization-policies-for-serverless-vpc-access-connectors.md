---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.915Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Custom organization policies for Serverless VPC Access connectors"
feature_slug: "custom-organization-policies-for-serverless-vpc-access-connectors"
latest_feature_date: "2024-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
  - "https://docs.cloud.google.com/functions/docs/concepts/iam"
  - "https://docs.cloud.google.com/functions/docs/securing/managing-access-iam"
keywords:
  - "custom"
  - "organization"
  - "policies"
  - "serverless"
  - "vpc"
  - "access"
  - "connectors"
  - "run"
---

# Custom organization policies for Serverless VPC Access connectors

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports custom organization policies for Serverless VPC Access connectors.

## Extended Definition

Cloud Run functions supports custom organization policies for Serverless VPC Access connectors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)

## Supporting Pages

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- You can't use Direct VPC egress and Serverless VPC Access connectors at the same time.
- Custom permissions : For more granular control, grant the Cloud Run service agent with the following additional permissions on the project: compute.networks.get compute.subnetworks.get compute.subnetworks.use on the project or the specific subnet compute.addresses.get compute.addresses.list compute.addresses.create (required only for dual-stack subnets with external IPv6 ) compute.addresses.delete (required only for dual-stack subnets with external IPv6) compute.addresses.createInternal compute.addresses.deleteInternal compute.regionOperations.get Compute Network User role : If you don't use the default Cloud Run Service Agent role or the custom permissions, grant the Compute Network User role ( roles/compute.networkUser ) on the Cloud Run Service Agent service account.
- For example, to grant the Compute Network User role, run the following command: gcloud projects add-iam-policy-binding PROJECT ID \ --member "serviceAccount:service- PROJECT NUMBER @serverless-robot-prod.iam.gserviceaccount.com" \ --role "roles/compute.networkUser" Replace the following: PROJECT ID : the ID of your project.
- Ensure that Cloud Run has access to the VPC network by using one of the following methods: Cloud Run Service Agent role : By default, the Cloud Run service agent has the Cloud Run Service Agent role ( roles/run.serviceAgent ) that contains the necessary permissions.

### Authorize access with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)
- Source ID: `site-iam-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about granting roles, see Manage access to projects, folders, and organizations .
- Viewing principals To view principals, use the gcloud functions get-iam-policy command: gcloud functions get-iam-policy FUNCTION NAME Allowing unauthenticated HTTP function invocation Note: If you created functions using the Cloud Run Admin API, see the Allowing public (unauthenticated) access guide instead.
- Before you begin To get the permission that you need to control access for a specific function or all functions in a project, ask your administrator to grant you the Cloud Functions Admin ( roles/roles/cloudfunctions.admin ) IAM role on the function or the project.
- Authorize access with IAM You use Identity and Access Management (IAM) to authorize identities to perform administrative actions on functions created using the Cloud Functions v2 API —for example, using gcloud functions , the REST API, or Terraform.

### Access control with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- Source ID: `site-iam-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Here's a few of the notable permissions that the cloudfunctions.serviceAgent uses: Permission Description roles/artifactregistry.admin Manage repositories and store build images in Artifact Registry. roles/cloudbuild.builds.editor Required to use Cloud Build to perform builds in user project. roles/cloudbuild.customworkers.builder Create builds in Cloud Build custom workers. compute.globalOperations.get , compute.networks.access , vpcaccess.connectors.{get, use} Provision functions with access to the consumer projects VPC. roles/eventarc.developer Manage Eventarc triggers for functions. firebasedatabase.instances.{get, update} Create functions triggered by the Firebase Realtime Database. iam.serviceAccounts.{actAs, getAccessToken, signBlob} Ability to get runtime service account credentials. iam.serviceAccounts.getOpenIdToken Needed for the agent to get an OpenID token on a user-specified authority.
- If you've created or deployed functions using Cloud Run, see Access control with IAM and Cloud Run roles for a detailed description of Cloud Run predefined roles, controlling access to individual services, making a service public, or configuring organization policy for the Cloud Run invoker IAM.
- The following service accounts are used for Cloud Run functions: Name Member ID Role Compute Engine default service account PROJECT NUMBER-compute@developer.gserviceaccount.com Editor Google Cloud Functions Service Agent service-PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com Google Cloud Functions Service Agent Legacy Cloud Build service account 1 PROJECT NUMBER@cloudbuild.gserviceaccount.com Cloud Build Service Account Cloud Build Service Account service-PROJECT NUMBER@gcp-sa-cloudbuild.iam.gserviceaccount.com Cloud Build Service Agent Google Container Registry Service Agent service-PROJECT NUMBER@containerregistry.iam.gserviceaccount.com Container Registry Service Agent Artifact Registry Service Agent service-PROJECT NUMBER@gcp-sa-artifactregistry.iam.gserviceaccount.com Artifact Registry Service Agent Note: The iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint prevents the Editor role from being automatically granted to default service accounts.
- This page provides supplemental information for using Identity and Access Management (IAM) roles to set access controls at a project level, to determine the level of access to your Google Cloud project and functions created using gcloud functions commands or the Cloud Functions v2 API .

