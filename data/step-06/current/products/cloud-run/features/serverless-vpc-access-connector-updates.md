---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.916Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Serverless VPC Access connector updates"
feature_slug: "serverless-vpc-access-connector-updates"
latest_feature_date: "2024-01-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
  - "https://docs.cloud.google.com/run/docs/deploy-functions"
keywords:
  - "serverless"
  - "vpc"
  - "access"
  - "connector"
  - "updates"
  - "let"
  - "you"
  - "change"
---

# Serverless VPC Access connector updates

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Serverless VPC Access connector updates let you change the connector machine type and minimum and maximum instance counts.

## Extended Definition

Serverless VPC Access connector updates let you change the connector machine type and minimum and maximum instance counts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- April 24, 2024 Feature Support for Direct VPC egress , which lets you send traffic directly to a VPC network with no Serverless VPC Access connector required, is now at general availability (GA).
- June 09, 2023 Feature You can now create and then configure a Serverless VPC Access connector for your service or job directly from the Create form in the Google Cloud console. (Preview) May 17, 2023 Feature Allocating up to 32 GiB of memory and up to 8 CPU to your Cloud Run services is now at general availability (GA).
- December 09, 2024 Feature You can now create custom organization policies for Serverless VPC Access connectors and apply them to projects, folders, or organizations (GA).
- August 14, 2023 Feature You can now send traffic directly to a VPC network with no Serverless VPC Access connector required (Preview).

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Deploy the sample app to Cloud Run In Cloud Shell, configure serverless vpc access to allow private traffic from Cloud Run to Cloud SQL: gcloud compute networks subnets create serverless-connector-subnet \ --network=default \ --range=10.0.0.0/28 \ --region=us-central1 gcloud compute networks vpc-access connectors create serverless-connector \ --region=us-central1 \ --subnet=serverless-connector-subnet In Cloud Shell, create an environment variable that holds the connection name of the Cloud SQL instance that you created: export DB CONN NAME=$(gcloud sql instances describe $CLOUDSQL DB NAME --format='value(connectionName)') Create an environment variable called DATABASE URL to hold the connection string to connect to the Cloud SQL Proxy over a UNIX port. export DATABASE URL="socket:/cloudsql/${DB CONN NAME}?db=postgres&user=postgres&password= POSTGRES PASSWORD " Create a service account for Cloud Run with an IAM role to connect to the database: gcloud iam service-accounts create sa-run-db-client gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --role=roles/cloudsql.client Deploy the web app to Cloud Run: gcloud run deploy tasksapp- PROJECT ID \ --image=$IMAGE NAME \ --service-account=sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --set-env-vars=DATABASE URL=$DATABASE URL \ --add-cloudsql-instances $DB CONN NAME \ --vpc-connector serverless-connector \ --allow-unauthenticated The preceding command also links your Cloud Run container to the Cloud SQL database instance that you created.
- Enable the APIs Make sure that you have the following role or roles on the project: Cloud Run > Cloud Run Admin, Cloud Storage > Storage Admin, Cloud SQL > Cloud SQL Admin, Compute Engine > Compute Network Admin, Resource Manager > Project IAM Admin, Cloud Build > Cloud Build Editor, Serverless VPC Access > Serverless VPC Access Admin, Logging > Logs Viewer, Service Accounts > Service Account Admin, Service Accounts > Service Account User, and Service Usage > Service Usage Consumer Check for the roles In the Google Cloud console, go to the IAM page.
- Enable the APIs Make sure that you have the following role or roles on the project: Cloud Run > Cloud Run Admin, Cloud Storage > Storage Admin, Cloud SQL > Cloud SQL Admin, Compute Engine > Compute Network Admin, Resource Manager > Project IAM Admin, Cloud Build > Cloud Build Editor, Serverless VPC Access > Serverless VPC Access Admin, Logging > Logs Viewer, Service Accounts > Service Account Admin, Service Accounts > Service Account User, and Service Usage > Service Usage Consumer Check for the roles In the Google Cloud console, go to the IAM page.
- Prepare your network for Cloud SQL with a private IP address. gcloud compute addresses create google-managed-services-default \ --global \ --purpose=VPC PEERING \ --prefix-length=16 \ --description="peering range for CloudSQL Private Service Access" \ --network=default gcloud services vpc-peerings connect \ --service=servicenetworking.googleapis.com \ --ranges=google-managed-services-default \ --network=default \ --project= PROJECT ID Create an environment variable called CLOUDSQL DB NAME to hold the name of the database instance that you create in the next step: export CLOUDSQL DB NAME=tasks-db Create the database: gcloud sql instances create $CLOUDSQL DB NAME \ --cpu=1 \ --memory=4352Mib \ --database-version=POSTGRES 15 \ --region=us-central1 \ --network default \ --no-assign-ip The instance might take a few minutes to initialize.

### Deploy a Cloud Run function \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Create a new main.tf file with this content: provider "google" { project = " PROJECT-ID " } resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " client = "terraform" template { containers { name = " SERVICE " image = " IMAGE URL " # Container image built from your function in the previous step. base image uri = " BASE IMAGE " } } build config { function target = " FUNCTION TARGET " image uri = " IMAGE URL " base image = " BASE IMAGE " enable automatic updates = true } } resource "google cloud run v2 service iam member" "noauth" { location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name role = "roles/run.invoker" member = "allUsers" } Replace: PROJECT-ID with the Google Cloud project ID.
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } Source bucket Your source code must be accessible to the build process and the Google Cloud console source editor.
- Enable the Artifact Registry, Cloud Build, Cloud Run Admin API, and Cloud Logging APIs: gcloud services enable artifactregistry.googleapis.com \ cloudbuild.googleapis.com \ run.googleapis.com \ logging.googleapis.com Optionally, enable the Eventarc API to use event triggers: gcloud services enable eventarc.googleapis.com If you are under a domain restriction organization policy restricting unauthenticated invocations for your project, you will need to access your deployed service as described under Testing private services .
- What's next After you deploy a new Cloud Run function, you can do the following: View or delete functions Manage services View logs Build function containers in your own toolchain and deploy it to Cloud Run Trigger with events Trigger functions from Cloud Storage using Eventarc Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

