---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.020Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Minimum instances"
feature_slug: "minimum-instances"
latest_feature_date: "2021-08-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
  - "https://docs.cloud.google.com/functions/docs/building"
keywords:
  - "minimum"
  - "instances"
  - "run"
  - "functions"
  - "supports"
  - "setting"
  - "number"
---

# Minimum instances

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports setting a minimum number of instances.

## Extended Definition

Cloud Run functions supports setting a minimum number of instances.

## Evidence Summary

Fast-mode lexical matching selected 2 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)

## Supporting Pages

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- If your private worker pool is in a different project than your function, you need to grant the Cloud Functions Service Agent Service Account ( service-FUNCTION PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com ) the cloudbuild.workerPoolUser role so that the Cloud Build service can access the worker pool. gcloud projects add-iam-policy-binding PRIVATE POOL PROJECT ID \ --member serviceAccount:service- FUNCTION PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com --role roles/cloudbuild.workerPoolUser Replace FUNCTION PROJECT NUMBER with the number of the project where the function runs and PRIVATE POOL PROJECT ID with the ID of the project in which the worker pool is located.
- This upload bucket is named gcf-v2-uploads- PROJECT NUMBER - REGION .cloudfunctions.appspot.com .
- If you want to move your existing projects away from this service account, you can take the following steps to further secure your functions build environment: Prevent the legacy Cloud Build service account from being used for the build Prevent the default Compute service account from being used for the build Configure a new service account with appropriately scoped permissions to be used for the build Prevent the legacy Cloud Build service account from being used for build Warning: This will temporarily break all deployments until you assign a new service account.
- VPC Service Controls considerations If you have a VPC Service Controls perimeter protecting both your project and the Cloud Run functions API, and if you're using the Compute Engine default service account as the Cloud Build Service Account role for Cloud Run functions, you must create the following ingress rules: Allow Compute Engine default service account ingress to all methods on both Cloud Storage and Cloud Logging APIs.

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- To obtain this permission, you can grant a role that includes it like the Service Account User role, on the project. gcloud Default service account: ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Caller is missing permission 'iam.serviceaccounts.actAs' on service account projects/-/serviceAccounts/ PROJECT NUMBER -compute@developer.gserviceaccount.com.Grant the role 'roles/iam.serviceAccountUser' to the caller on the service account projects/-/serviceAccounts/ PROJECT NUMBER -compute@developer.gserviceaccount.com.You can do that by running 'gcloud iam service-accounts add-iam-policy-binding projects/-/serviceAccounts/ PROJECT NUMBER -compute@developer.gserviceaccount.com --member MEMBER --role roles/iam.serviceAccountUser'where MEMBER has a prefix like 'user:' or 'serviceAccount:' Non-default service account: ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Caller is missing permission 'iam.serviceaccounts.actAs' on service account projects/-/serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com.Grant the role 'roles/iam.serviceAccountUser' to the caller on the service account projects/-/serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com.You can do that by running 'gcloud iam service-accounts add-iam-policy-binding projects/-/serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com --member MEMBER --role roles/iam.serviceAccountUser'where MEMBER has a prefix like 'user:' or 'serviceAccount:' Note: PROJECT NUMBER -compute@developer.gserviceaccount.com is the default service account for Cloud Functions.
- The error message Console ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/ PROJECT ID /locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com"] gcloud ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/<project-id>/locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com"] The solution To resolve this issue, reset this service account to the default role.
- The error message Console Validation failed for trigger projects/ PROJECT ID /locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com" gcloud ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/test-project-356312/locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com"] The solution You can reset your service account to the default cloudfunctions.serviceAgent role.
- The error message gcloud ERROR: (gcloud.functions.deploy) ResponseError: status=[404], code=[Ok], message=[Service account projects/-/serviceAccounts/ PROJECT NUMBER -compute@developer.gserviceaccount.com was not found.] The solution To resolve this issue, follow any of these solutions: Specify a user managed runtime service account before deploying your function.

