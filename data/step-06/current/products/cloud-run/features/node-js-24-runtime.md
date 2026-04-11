---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.890Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Node.js 24 runtime"
feature_slug: "node-js-24-runtime"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
  - "https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs"
keywords:
  - "node"
  - "js"
  - "24"
  - "runtime"
  - "run"
  - "supports"
  - "the"
  - "for"
---

# Node.js 24 runtime

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports the Node.js 24 runtime for services; Cloud Run supports the Node.js 24 runtime for deployed workloads.

## Extended Definition

Cloud Run supports the Node.js 24 runtime for services; Cloud Run supports the Node.js 24 runtime for deployed workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- November 18, 2024 Feature Support for the Node.js 22 runtime is now in general availability (GA).
- November 20, 2025 Feature Support for Node.js 24 runtime is in General Availability .
- Feature Support for Node.js 24 runtime is in Preview .
- For details about how to configure the package.json file, including the option to set environment variables or prevent the default script from running, see the Node.js buildpack configuration in the Google Cloud's buildpacks documentation.

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When prompted for your password, enter the value of your API key that you copied from the Heroku console, not the password you use to sign in to the console. heroku login --interactive Clone the source repository In Cloud Shell, clone the sample Tasks app GitHub repository: git clone https://github.com/GoogleCloudPlatform/migrate-webapp-heroku-to-cloudrun-node.git Change directories to the directory created by cloning the repository: cd migrate-webapp-heroku-to-cloudrun-node The directory contains the following files: A Node.js script called index.js with the code for the routes served by the web app. package.json and package-lock.json files that outline the web app's dependencies.
- Review the Node.js code to understand how Cloud Run connects to Cloud SQL and to see the code changes (if any) that are required in order to migrate to Cloud Run from Heroku.
- The app serves an index page that displays tasks stored in a Postgres database, using the Mustache templating library for Node.js.
- Deploy the sample app to Cloud Run In Cloud Shell, configure serverless vpc access to allow private traffic from Cloud Run to Cloud SQL: gcloud compute networks subnets create serverless-connector-subnet \ --network=default \ --range=10.0.0.0/28 \ --region=us-central1 gcloud compute networks vpc-access connectors create serverless-connector \ --region=us-central1 \ --subnet=serverless-connector-subnet In Cloud Shell, create an environment variable that holds the connection name of the Cloud SQL instance that you created: export DB CONN NAME=$(gcloud sql instances describe $CLOUDSQL DB NAME --format='value(connectionName)') Create an environment variable called DATABASE URL to hold the connection string to connect to the Cloud SQL Proxy over a UNIX port. export DATABASE URL="socket:/cloudsql/${DB CONN NAME}?db=postgres&user=postgres&password= POSTGRES PASSWORD " Create a service account for Cloud Run with an IAM role to connect to the database: gcloud iam service-accounts create sa-run-db-client gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --role=roles/cloudsql.client Deploy the web app to Cloud Run: gcloud run deploy tasksapp- PROJECT ID \ --image=$IMAGE NAME \ --service-account=sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --set-env-vars=DATABASE URL=$DATABASE URL \ --add-cloudsql-instances $DB CONN NAME \ --vpc-connector serverless-connector \ --allow-unauthenticated The preceding command also links your Cloud Run container to the Cloud SQL database instance that you created.

### "Quickstart: build and create a Node.js job in Cloud Run \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Writing the sample job To write a job in Node.js: Create a new directory named jobs and change directory into it: mkdir jobs cd jobs Create a package.json file with the following contents: { "name" : "jobs" , "version" : "1.0.0" , "description" : "Node.js sample for Cloud Run jobs" , "main" : "index.js" , "scripts" : { "start" : "node index.js" }, "engines" : { "node" : ">=16.0.0" }, "author" : "Google LLC" , "license" : "Apache-2.0" } In the same directory, create a index.js file for the actual job code.
- Success: You created and executed a job using the Node.js runtime in Cloud Run.
- Create a Procfile with the following contents: Define the application ' s entrypoint to override default , npm start https : //github.com/GoogleCloudPlatform/buildpacks/issues/160 web : node index . js Your code is complete and ready to be packaged in a container.
- Build and create a Node.js job in Cloud Run Learn how to create a simple Cloud Run job, then deploy from source, which automatically packages your code into a container image, uploads the container image to Artifact Registry, and then deploys to Cloud Run.

