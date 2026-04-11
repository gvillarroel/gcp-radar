---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.885Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Compute flexible committed use discounts for Cloud Run"
feature_slug: "compute-flexible-committed-use-discounts-for-cloud-run"
latest_feature_date: "2026-02-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
keywords:
  - "compute"
  - "flexible"
  - "committed"
  - "use"
  - "discounts"
  - "for"
  - "run"
  - "usage"
---

# Compute flexible committed use discounts for Cloud Run

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run usage is covered by expanded compute flexible committed use discounts under the spend-based CUD model.

## Extended Definition

Cloud Run usage is covered by expanded compute flexible committed use discounts under the spend-based CUD model.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- July 15, 2024 Feature Compute flexible committed use discounts are now available for Cloud Run services with CPU always allocated , and Cloud Run jobs.
- Feature Compute flexible committed use discounts (CUDs) have expanded to also cover your Cloud Billing account's spend across Cloud Run services with request-based billing and Cloud Run functions.
- February 06, 2026 Feature Expanded coverage for compute flexible committed use discounts (CUDs) is available to all Cloud Billing accounts.
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Cloud SQL Admin ( roles/cloudsql.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Identity Platform Admin ( roles/identityplatform.admin ) OAuth Config Editor ( roles/oauthconfig.editor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Secret Manager Admin ( roles/secretmanager.admin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Costs In this document, you use the following billable components of Google Cloud: Cloud Build Artifact Registry Secret Manager Cloud SQL Identity Platform Cloud Run To generate a cost estimate based on your projected usage, use the pricing calculator .
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the service container image from Artifact Registry Delete the service account vote-identity@PROJECT ID.iam.gserviceaccount.com Delete the Cloud SQL instance Delete the secret in Secret Manager What's next Dive deeper into Connecting from Cloud Run to Cloud SQL Learn more about sign in methods and managing users with Identity Platform Review other ways to authenticate developers, services, and users of services deployed to Cloud Run Explore other Cloud Run demos, tutorials, and samples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Change to the directory that contains the Cloud Run sample code: Node.js cd nodejs-docs-samples/run/idp-sql/ Python cd python-docs-samples/run/idp-sql/ Java cd java-docs-samples/run/idp-sql/ Visualizing the architecture Diagram shows an end-user logging-in through a Google sign-in dialog provided by Identity Platform, and then being redirected back to Cloud Run with the user's identity.

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs Make sure that you have the following role or roles on the project: Cloud Run > Cloud Run Admin, Cloud Storage > Storage Admin, Cloud SQL > Cloud SQL Admin, Compute Engine > Compute Network Admin, Resource Manager > Project IAM Admin, Cloud Build > Cloud Build Editor, Serverless VPC Access > Serverless VPC Access Admin, Logging > Logs Viewer, Service Accounts > Service Account Admin, Service Accounts > Service Account User, and Service Usage > Service Usage Consumer Check for the roles In the Google Cloud console, go to the IAM page.
- Enable the APIs Make sure that you have the following role or roles on the project: Cloud Run > Cloud Run Admin, Cloud Storage > Storage Admin, Cloud SQL > Cloud SQL Admin, Compute Engine > Compute Network Admin, Resource Manager > Project IAM Admin, Cloud Build > Cloud Build Editor, Serverless VPC Access > Serverless VPC Access Admin, Logging > Logs Viewer, Service Accounts > Service Account Admin, Service Accounts > Service Account User, and Service Usage > Service Usage Consumer Check for the roles In the Google Cloud console, go to the IAM page.
- Deploy the sample app to Cloud Run In Cloud Shell, configure serverless vpc access to allow private traffic from Cloud Run to Cloud SQL: gcloud compute networks subnets create serverless-connector-subnet \ --network=default \ --range=10.0.0.0/28 \ --region=us-central1 gcloud compute networks vpc-access connectors create serverless-connector \ --region=us-central1 \ --subnet=serverless-connector-subnet In Cloud Shell, create an environment variable that holds the connection name of the Cloud SQL instance that you created: export DB CONN NAME=$(gcloud sql instances describe $CLOUDSQL DB NAME --format='value(connectionName)') Create an environment variable called DATABASE URL to hold the connection string to connect to the Cloud SQL Proxy over a UNIX port. export DATABASE URL="socket:/cloudsql/${DB CONN NAME}?db=postgres&user=postgres&password= POSTGRES PASSWORD " Create a service account for Cloud Run with an IAM role to connect to the database: gcloud iam service-accounts create sa-run-db-client gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --role=roles/cloudsql.client Deploy the web app to Cloud Run: gcloud run deploy tasksapp- PROJECT ID \ --image=$IMAGE NAME \ --service-account=sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --set-env-vars=DATABASE URL=$DATABASE URL \ --add-cloudsql-instances $DB CONN NAME \ --vpc-connector serverless-connector \ --allow-unauthenticated The preceding command also links your Cloud Run container to the Cloud SQL database instance that you created.
- Costs In this document, you use the following billable components of Google Cloud: Cloud Run Cloud Storage Cloud SQL for PostgreSQL Container Registry To generate a cost estimate based on your projected usage, use the pricing calculator .

