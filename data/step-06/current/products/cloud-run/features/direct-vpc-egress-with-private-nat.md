---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.446Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Direct VPC egress with Private NAT"
feature_slug: "direct-vpc-egress-with-private-nat"
latest_feature_date: "2025-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
keywords:
  - "networking"
  - "private"
  - "direct"
  - "egress"
  - "supports"
---

# Direct VPC egress with Private NAT

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Direct VPC egress supports Private NAT for Cloud Run networking.

## Extended Definition

Direct VPC egress supports Private NAT for Cloud Run networking.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- When you configure Direct VPC for your Cloud Run worker pool deployment, each worker instance receives a private IP address on the configured network and subnet.
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Cloud Run services and jobs support Direct VPC egress .
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- When you configure Direct VPC for your Cloud Run worker pool deployment, each worker instance receives a private IP address on the configured network and subnet.
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Cloud Run services and jobs support Direct VPC egress .
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Prepare your network for Cloud SQL with a private IP address. gcloud compute addresses create google-managed-services-default \ --global \ --purpose=VPC PEERING \ --prefix-length=16 \ --description="peering range for CloudSQL Private Service Access" \ --network=default gcloud services vpc-peerings connect \ --service=servicenetworking.googleapis.com \ --ranges=google-managed-services-default \ --network=default \ --project= PROJECT ID Create an environment variable called CLOUDSQL DB NAME to hold the name of the database instance that you create in the next step: export CLOUDSQL DB NAME=tasks-db Create the database: gcloud sql instances create $CLOUDSQL DB NAME \ --cpu=1 \ --memory=4352Mib \ --database-version=POSTGRES 15 \ --region=us-central1 \ --network default \ --no-assign-ip The instance might take a few minutes to initialize.
- Deploy the sample app to Cloud Run In Cloud Shell, configure serverless vpc access to allow private traffic from Cloud Run to Cloud SQL: gcloud compute networks subnets create serverless-connector-subnet \ --network=default \ --range=10.0.0.0/28 \ --region=us-central1 gcloud compute networks vpc-access connectors create serverless-connector \ --region=us-central1 \ --subnet=serverless-connector-subnet In Cloud Shell, create an environment variable that holds the connection name of the Cloud SQL instance that you created: export DB CONN NAME=$(gcloud sql instances describe $CLOUDSQL DB NAME --format='value(connectionName)') Create an environment variable called DATABASE URL to hold the connection string to connect to the Cloud SQL Proxy over a UNIX port. export DATABASE URL="socket:/cloudsql/${DB CONN NAME}?db=postgres&user=postgres&password= POSTGRES PASSWORD " Create a service account for Cloud Run with an IAM role to connect to the database: gcloud iam service-accounts create sa-run-db-client gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --role=roles/cloudsql.client Deploy the web app to Cloud Run: gcloud run deploy tasksapp- PROJECT ID \ --image=$IMAGE NAME \ --service-account=sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --set-env-vars=DATABASE URL=$DATABASE URL \ --add-cloudsql-instances $DB CONN NAME \ --vpc-connector serverless-connector \ --allow-unauthenticated The preceding command also links your Cloud Run container to the Cloud SQL database instance that you created.
- When prompted for your password, enter the value of your API key that you copied from the Heroku console, not the password you use to sign in to the console. heroku login --interactive Clone the source repository In Cloud Shell, clone the sample Tasks app GitHub repository: git clone https://github.com/GoogleCloudPlatform/migrate-webapp-heroku-to-cloudrun-node.git Change directories to the directory created by cloning the repository: cd migrate-webapp-heroku-to-cloudrun-node The directory contains the following files: A Node.js script called index.js with the code for the routes served by the web app. package.json and package-lock.json files that outline the web app's dependencies.
- Build container manually In Cloud Shell, create a Dockerfile in the directory created by cloning the repository for this tutorial: cat Dockerfile Use the official Node image. https://hub.docker.com/ /node FROM node:10-alpine Create and change to the app directory.

