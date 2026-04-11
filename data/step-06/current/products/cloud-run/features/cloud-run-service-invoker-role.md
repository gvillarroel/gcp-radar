---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.907Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud Run Service Invoker role"
feature_slug: "cloud-run-service-invoker-role"
latest_feature_date: "2024-12-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/reference/iam/roles"
  - "https://docs.cloud.google.com/run/docs/securing/managing-access"
  - "https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api"
keywords:
  - "run"
  - "invoker"
  - "role"
  - "the"
  - "predefined"
  - "iam"
  - "grants"
  - "least"
---

# Cloud Run Service Invoker role

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

The Cloud Run Service Invoker predefined IAM role grants least-privilege access for invoking Cloud Run services.

## Extended Definition

The Cloud Run Service Invoker predefined IAM role grants least-privilege access for invoking Cloud Run services.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles)
- [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)

## Supporting Pages

### Cloud Run IAM roles \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click to view the required roles for executing jobs To get the permissions that you need to execute jobs, you or your administrator must grant IAM roles to the deployer account on the following resources: To create or update a job: Cloud Run Developer ( roles/run.developer ) on the Cloud Run job To execute jobs or cancel job executions: Cloud Run Invoker ( roles/run.invoker ) on the Cloud Run job Artifact Registry Reader ( roles/artifactregistry.reader ) on the Artifact Registry repository of the container images of the job Service Account User ( roles/iam.serviceAccountUser ) on the Cloud Run service identity The following permissions are required to execute jobs: run.jobs.create to create jobs and run.jobs.update to update jobs run.jobs.run to execute jobs run.jobs.get and run.operations.get to read the status of the job artifactregistry.repositories.downloadArtifacts on the repository container the container images of the job iam.serviceAccounts.actAs on the service identity You might also be able to get these permissions with custom roles or other predefined roles .
- Click to view the required roles for deploying services or revisions To get the permissions that you need to deploy services or revisions, you or your administrator must grant IAM roles to the deployer account on the following resources: Cloud Run Developer ( roles/run.developer ) on the Cloud Run service Artifact Registry Reader ( roles/artifactregistry.reader ) on the Artifact Registry repository of the container images of the service Service Account User ( roles/iam.serviceAccountUser ) on the Cloud Run service identity The following permissions are required to deploy services or revisions: run.services.create to create services and run.services.update to update services run.services.get and run.operations.get to read the status of the service artifactregistry.repositories.downloadArtifacts on the repository container the container images of the service iam.serviceAccounts.actAs on the service identity You might also be able to get these permissions with custom roles or other predefined roles .
- Predefined roles The following table describes IAM roles that are associated with Cloud Run, and lists the permissions that are contained in each role.
- This page lists the Identity and Access Management (IAM) predefined roles for accessing Cloud Run resources.

### Access control with IAM \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To make a service private, select Require authentication . gcloud To make a service publicly accessible, use the gcloud run services command to add the special allUsers member type to a service and grant it the roles/run.invoker role: gcloud run services add-iam-policy-binding [ SERVICE NAME ] \ --member = "allUsers" \ --role = "roles/run.invoker" Run the gcloud run deploy command to make your service publicly accessible when you deploy your service: gcloud run deploy [ SERVICE NAME ] ... --allow-unauthenticated YAML Create a file named policy.yaml with the following content: bindings: - members: - allUsers role: roles/run.invoker Allow public access for the existing SERVICE using: gcloud run services set-iam-policy SERVICE policy.yaml Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Add the following to a google cloud run v2 service resource in your Terraform configuration: resource "google cloud run v2 service" "default" { name = "public-service" location = "us-central1" deletion protection = false # set to "true" in production template { containers { image = "us-docker.pkg.dev/cloudrun/container/hello" } } } To update the service IAM binding for roles/run.invoker , add the following resource referencing your Cloud Run service: resource "google cloud run service iam binding" "default" { location = google cloud run v2 service.default.location service = google cloud run v2 service.default.name role = "roles/run.invoker" members = [ "allUsers" ] } This binding is only authoritative for the given role.
- Assign the Cloud Run IAM Invoker role to the allUsers member type Important: These instructions won't succeed if your project is under a domain restricted sharing organization policy that restricts granting IAM roles to the allUsers member type as described in this page.
- Required roles To disable or re-enable the Invoker IAM check on a service, you must have the following permissions: run.services.create run.services.update run.services.setIamPolicy These permissions are included in the Cloud Run Admin ( roles/run.admin ) role.

### Authenticate to Cloud Run Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Grant your account a role that lets you use the service account roles and attach the service account to other resources: gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT NAME@PROJECT ID . iam.gserviceaccount.com --member="user: USER EMAIL " --role=roles/iam.serviceAccountUser Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account USER EMAIL : the email address for your account Create the resource that will run your code, and attach the service account to that resource.
- Click a tab for instructions for your use case: Google Cloud CLI To authenticate a workload running on Google Cloud, use the credentials of the service identity attached to the Cloud Run service by following these steps: Install the Google Cloud CLI, then initialize it using the following command: gcloud init Set up authentication: Create the service account: gcloud iam service-accounts create SERVICE ACCOUNT NAME Replace SERVICE ACCOUNT NAME with a name for the service account.
- Provide access to your project and your resources by granting a role to the service account: gcloud projects add-iam-policy-binding PROJECT ID --member="serviceAccount: SERVICE ACCOUNT NAME@PROJECT ID .iam.gserviceaccount.com" --role= ROLE Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account ROLE : the role required to access the Cloud Client Libraries.
- To grant another role to the service account, run the command as you did in the previous step.

