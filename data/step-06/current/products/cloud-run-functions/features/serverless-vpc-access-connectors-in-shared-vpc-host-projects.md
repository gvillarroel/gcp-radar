---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.004Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Serverless VPC Access connectors in Shared VPC host projects"
feature_slug: "serverless-vpc-access-connectors-in-shared-vpc-host-projects"
latest_feature_date: "2022-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions"
keywords:
  - "serverless"
  - "vpc"
  - "access"
  - "connectors"
  - "shared"
  - "host"
  - "projects"
  - "run"
---

# Serverless VPC Access connectors in Shared VPC host projects

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports Serverless VPC Access connectors in Shared VPC host projects.

## Extended Definition

Cloud Run functions supports Serverless VPC Access connectors in Shared VPC host projects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)

## Supporting Pages

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- You can't use Direct VPC egress and Serverless VPC Access connectors at the same time.
- For example, to grant the Compute Network User role, run the following command: gcloud projects add-iam-policy-binding PROJECT ID \ --member "serviceAccount:service- PROJECT NUMBER @serverless-robot-prod.iam.gserviceaccount.com" \ --role "roles/compute.networkUser" Replace the following: PROJECT ID : the ID of your project.
- Ensure that Cloud Run has access to the VPC network by using one of the following methods: Cloud Run Service Agent role : By default, the Cloud Run service agent has the Cloud Run Service Agent role ( roles/run.serviceAgent ) that contains the necessary permissions.
- Optional: If your function needs to access Google APIs and services using their internal IP addresses, enable Private Google Access on the subnet that you use for Direct VPC egress.

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- The error message Problem connecting to VPC Connector projects/xxxxx/locations/ REGION /connectors/xxxx: Serverless VPC Access is not found.
- If the connector is created in the host project, ensure that the Serverless VPC Access User role is granted on Cloud Run Service Agent in your host project.
- Step #2 - "build": ERROR: failed to create image cache: accessing cache image " LOCATION -docker.pkg.dev/ PROJECT /gcf-artifacts/ FUNCTION NAME /cache:latest": connect to repo store " LOCATION -docker.pkg.dev/ PROJECT /gcf-artifacts/ FUNCTION NAME /cache:latest": GET https:// LOCATION -docker.pkg.dev/v2/token?scope=repository%3A PROJECT %2Fgcf-artifacts%2F FUNCTION NAME %2Fcache%3Apull&service=: DENIED: Permission "artifactregistry.repositories.downloadArtifacts" denied on resource "projects/ PROJECT /locations/ LOCATION /repositories/gcf-artifacts" (or it may not exist) Could not build the function due to a missing permission on the build service account.
- For the Shared VPC configuration: Ensure that the service accounts SERVICE PROJECT NUMBER @cloudservices.gserviceaccount.com and service-SERVICE PROJECT NUMBER @gcp-sa-vpcaccess.iam.gserviceaccount.com used by VPC Connector to provision resources in the project are not missing permissions.

### "REST Resource: projects.locations.functions \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- Source ID: `site-docs-root`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud Functions delegates access to service agents to protect function resources in internal projects that are not accessible by the end user. buildWorkerPool string Name of the Cloud Build Custom Worker Pool that should be used to build the function.
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback REST Resource: projects.locations.functions Stay organized with collections Save and categorize content based on your preferences.
- The format of this field is projects/ /locations/ /connectors/ This field is mutually exclusive with network field and will eventually replace it.
- Methods call Synchronously invokes a deployed Cloud Function. create Creates a new function. delete Deletes a function with the given name from the specified project. generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl Returns a signed URL for uploading a function source code. get Returns a function with the given name from the requested project. getIamPolicy Gets the IAM access control policy for a function. list Returns a list of functions that belong to the requested project. patch Updates existing function. setIamPolicy Sets the IAM access control policy on the specified function. testIamPermissions Tests the specified permissions against the IAM access control policy for a function.

