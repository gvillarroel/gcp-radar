---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.893Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Service-level maximum instance configuration"
feature_slug: "service-level-maximum-instance-configuration"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/configuring"
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
keywords:
  - "level"
  - "maximum"
  - "instance"
  - "configuration"
  - "run"
  - "supports"
  - "applying"
  - "at"
---

# Service-level maximum instance configuration

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports applying maximum instance configuration at the service level.

## Extended Definition

Cloud Run supports applying maximum instance configuration at the service level.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- October 06, 2025 Feature Support for applying maximum instance configuration at the service level is in General Availability (GA).
- June 30, 2025 Feature You can apply maximum instance configuration at the service level (in Preview).
- May 20, 2020 Feature The Cloud Run container instance metadata server now exposes the unique identifier of the container instance and the region of the Cloud Run service May 13, 2020 Feature Cloud Run (fully managed) now supports connecting to a VPC network with Serverless VPC Access , in beta.
- September 20, 2022 Feature Cloud Run now supports workforce identity federation September 14, 2022 Feature Startup CPU boost for revisions is now available to provide additional CPU during container instance startup time.

### Configure Cloud Run services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need to change the default number of container instances that are kept warm, ready to receive requests, you can set revision-level maximum instances and minimum instances .
- You can control how many instances your Cloud Run service creates to serve requests by setting maximum instances and minimum instances .
- By default, Cloud Run automatically scales out to a specified or default maximum number of instances.
- The following table explains the features for this section: Section Feature Description A Service account The Cloud Run service identity is the service account that is used as the authenticated account for accessing Google Cloud APIs from your Cloud Run instance container.

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Create a SQL format backup of your Heroku Postgres database: docker run \ -it --rm \ -e PGPASSWORD=$HEROKU PG PASSWORD \ -v $(pwd):/tmp \ --entrypoint "pg dump" \ postgres \ -Fp \ --no-acl \ --no-owner \ -h $HEROKU PG HOST \ -U $HEROKU PG USER \ $HEROKU PG DBNAME > herokudump.sql Create an environment variable to hold the name of your Cloud Storage bucket: export PG BACKUP BUCKET=gs:// PROJECT ID -pg-backup-bucket Create a Cloud Storage bucket: gcloud storage buckets create $PG BACKUP BUCKET \ --location=us-central1 \ --public-access-prevention \ --uniform-bucket-level-access Upload the SQL file to this bucket: gcloud storage cp herokudump.sql $PG BACKUP BUCKET/herokudump.sql Authorize your Cloud SQL instance with the necessary roles to import the SQL file from the Cloud Storage bucket: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud sql instances describe $CLOUDSQL DB NAME --format='get("serviceAccountEmailAddress")') \ --role=roles/storage.objectAdmin gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud sql instances describe $CLOUDSQL DB NAME --format='get("serviceAccountEmailAddress")') \ --role=roles/cloudsql.editor Import the SQL file to the Cloud SQL instance: gcloud sql import sql $CLOUDSQL DB NAME $PG BACKUP BUCKET/herokudump.sql \ --database=postgres \ --user=postgres When prompted do you want to continue (y/n) , enter "y".
- Deploy the sample app to Cloud Run In Cloud Shell, configure serverless vpc access to allow private traffic from Cloud Run to Cloud SQL: gcloud compute networks subnets create serverless-connector-subnet \ --network=default \ --range=10.0.0.0/28 \ --region=us-central1 gcloud compute networks vpc-access connectors create serverless-connector \ --region=us-central1 \ --subnet=serverless-connector-subnet In Cloud Shell, create an environment variable that holds the connection name of the Cloud SQL instance that you created: export DB CONN NAME=$(gcloud sql instances describe $CLOUDSQL DB NAME --format='value(connectionName)') Create an environment variable called DATABASE URL to hold the connection string to connect to the Cloud SQL Proxy over a UNIX port. export DATABASE URL="socket:/cloudsql/${DB CONN NAME}?db=postgres&user=postgres&password= POSTGRES PASSWORD " Create a service account for Cloud Run with an IAM role to connect to the database: gcloud iam service-accounts create sa-run-db-client gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --role=roles/cloudsql.client Deploy the web app to Cloud Run: gcloud run deploy tasksapp- PROJECT ID \ --image=$IMAGE NAME \ --service-account=sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --set-env-vars=DATABASE URL=$DATABASE URL \ --add-cloudsql-instances $DB CONN NAME \ --vpc-connector serverless-connector \ --allow-unauthenticated The preceding command also links your Cloud Run container to the Cloud SQL database instance that you created.
- How Cloud Run accesses the Cloud SQL database Just as the web app deployed to Heroku needs to connect to the managed instance of Heroku Postgres, Cloud Run requires access to Cloud SQL in order to be able to read and write data.
- Cloud Run containers: Google Cloud supports running containerized workloads in stateless containers that can be run in a fully managed environment or in Google Kubernetes Engine (GKE) clusters.

