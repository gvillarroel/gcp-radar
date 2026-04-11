---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.928Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Revision rollback"
feature_slug: "revision-rollback"
latest_feature_date: "2020-02-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
  - "https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run"
keywords:
  - "revision"
  - "rollback"
  - "run"
  - "supports"
  - "rolling"
  - "back"
  - "traffic"
  - "to"
---

# Revision rollback

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports rolling back service traffic to earlier revisions.

## Extended Definition

Cloud Run supports rolling back service traffic to earlier revisions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- [https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- March 16, 2020 Feature Cloud Run (fully managed) now supports deploying container images from Cloud Artifact Registry February 12, 2020 Feature Cloud Run (fully managed) now supports rollbacks, gradual rollouts (blue/green deployments), and other traffic migration manipulations between revisions.
- May 03, 2023 Feature CPU allocation recommender now automatically recommends CPU allocation changes based on traffic received by your Cloud Run service over the past month. (In Preview) April 26, 2023 Announcement Cloud Run source deployment now supports Ubuntu 22 LTS base images.
- September 01, 2022 Change Terraform samples are now available in many of the Cloud Run tutorials and guides, such as: Static outbound IP address , Pub/Sub with Cloud Run Authenticating service to service Rollbacks & Rollouts Request Timeouts and many other pages.
- September 20, 2022 Feature Cloud Run now supports workforce identity federation September 14, 2022 Feature Startup CPU boost for revisions is now available to provide additional CPU during container instance startup time.

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Deploy the sample app to Cloud Run In Cloud Shell, configure serverless vpc access to allow private traffic from Cloud Run to Cloud SQL: gcloud compute networks subnets create serverless-connector-subnet \ --network=default \ --range=10.0.0.0/28 \ --region=us-central1 gcloud compute networks vpc-access connectors create serverless-connector \ --region=us-central1 \ --subnet=serverless-connector-subnet In Cloud Shell, create an environment variable that holds the connection name of the Cloud SQL instance that you created: export DB CONN NAME=$(gcloud sql instances describe $CLOUDSQL DB NAME --format='value(connectionName)') Create an environment variable called DATABASE URL to hold the connection string to connect to the Cloud SQL Proxy over a UNIX port. export DATABASE URL="socket:/cloudsql/${DB CONN NAME}?db=postgres&user=postgres&password= POSTGRES PASSWORD " Create a service account for Cloud Run with an IAM role to connect to the database: gcloud iam service-accounts create sa-run-db-client gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --role=roles/cloudsql.client Deploy the web app to Cloud Run: gcloud run deploy tasksapp- PROJECT ID \ --image=$IMAGE NAME \ --service-account=sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --set-env-vars=DATABASE URL=$DATABASE URL \ --add-cloudsql-instances $DB CONN NAME \ --vpc-connector serverless-connector \ --allow-unauthenticated The preceding command also links your Cloud Run container to the Cloud SQL database instance that you created.
- Create a SQL format backup of your Heroku Postgres database: docker run \ -it --rm \ -e PGPASSWORD=$HEROKU PG PASSWORD \ -v $(pwd):/tmp \ --entrypoint "pg dump" \ postgres \ -Fp \ --no-acl \ --no-owner \ -h $HEROKU PG HOST \ -U $HEROKU PG USER \ $HEROKU PG DBNAME > herokudump.sql Create an environment variable to hold the name of your Cloud Storage bucket: export PG BACKUP BUCKET=gs:// PROJECT ID -pg-backup-bucket Create a Cloud Storage bucket: gcloud storage buckets create $PG BACKUP BUCKET \ --location=us-central1 \ --public-access-prevention \ --uniform-bucket-level-access Upload the SQL file to this bucket: gcloud storage cp herokudump.sql $PG BACKUP BUCKET/herokudump.sql Authorize your Cloud SQL instance with the necessary roles to import the SQL file from the Cloud Storage bucket: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud sql instances describe $CLOUDSQL DB NAME --format='get("serviceAccountEmailAddress")') \ --role=roles/storage.objectAdmin gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud sql instances describe $CLOUDSQL DB NAME --format='get("serviceAccountEmailAddress")') \ --role=roles/cloudsql.editor Import the SQL file to the Cloud SQL instance: gcloud sql import sql $CLOUDSQL DB NAME $PG BACKUP BUCKET/herokudump.sql \ --database=postgres \ --user=postgres When prompted do you want to continue (y/n) , enter "y".
- Home Documentation Application hosting Cloud Run Guides Send feedback Migrate Node.js apps from Heroku to Cloud Run Stay organized with collections Save and categorize content based on your preferences.
- Web dynos are able to receive and respond to HTTP traffic, unlike worker dynos, which are better suited for background jobs and timed tasks.

### What is Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Built-in traffic management To reduce the risk of deploying a new revision, Cloud Run supports performing a gradual rollout , including routing incoming traffic to the latest revision, rolling back to a previous revision, and splitting traffic to multiple revisions at the same time.
- What's next Deploy a Cloud Run service Create and execute a Cloud Run job Learn how to execute jobs on a schedule Deploy a worker pool Explore the resource model Read more about the container runtime contract Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Optional manual scaling By default, Cloud Run automatically scales to more instances to handle more traffic, but you can override this behavior by using manual scaling to control scaling behavior.
- Service identity Every Cloud Run revision is linked to a service account , and the Google Cloud client libraries transparently use this service account to authenticate with Google Cloud APIs.

