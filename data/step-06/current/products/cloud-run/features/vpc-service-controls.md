---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.920Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "VPC Service Controls"
feature_slug: "vpc-service-controls"
latest_feature_date: "2021-07-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/tutorials/secure-services"
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
keywords:
  - "vpc"
  - "controls"
  - "let"
  - "run"
  - "enforce"
  - "secure"
  - "perimeter"
  - "to"
---

# VPC Service Controls

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

VPC Service Controls let Cloud Run enforce a secure service perimeter to help prevent data exfiltration; VPC Service Controls let Cloud Run enforce a secure service perimeter to help prevent data exfiltration.

## Extended Definition

VPC Service Controls let Cloud Run enforce a secure service perimeter to help prevent data exfiltration; VPC Service Controls let Cloud Run enforce a secure service perimeter to help prevent data exfiltration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services)
- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- March 05, 2021 Feature You can now use VPC Service Controls with Cloud Run to set up a secure perimeter to guard against data exfiltration. (Available in public preview.) March 03, 2021 Feature Cloud Run reports a new Cloud Monitoring metric: Instance count , which counts the number of container instances that exist, broken down by state (active or idle).
- November 11, 2025 Feature You can set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (GA) November 06, 2025 Feature Use dual-stack subnets with IPv6 to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress, and send external IPv6 traffic to the public internet. (GA) October 31, 2025 Feature Support for Java 25 runtime is in Preview .
- January 24, 2025 Feature You can now use dual-stack subnets with internal IPv6 to let your Cloud Run services and jobs send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress. (Preview) January 22, 2025 Feature The Cloud Run Builder ( roles/run.builder ) IAM role is now available in preview.
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.

### Secure Cloud Run services tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Remove the gcloud default configurations you added during tutorial setup. gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the editor container image named REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /editor from Artifact Registry Delete the render container image named REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /renderer from Artifact Registry Delete the editor service account editor-identity@PROJECT ID.iam.gserviceaccount.com Delete the render service account renderer-identity@PROJECT ID.iam.gserviceaccount.com What's next Further secure your project by walking through the using IAM securely checklist Extend this sample application to track Markdown usage with Cloud Monitoring custom metrics Review the Pub/Sub tutorial for an approach to secure, asynchronous microservices Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Deploy the editor service: resource "google cloud run v2 service" "editor" { name = "editor" location = "us-central1" deletion protection = false # set to "true" in production template { containers { Replace with the URL of your Secure Services > Editor image. gcr.io/<PROJECT ID>/editor image = "us-docker.pkg.dev/cloudrun/container/hello" env { name = "EDITOR UPSTREAM RENDER URL" value = google cloud run v2 service.renderer.uri } } service account = google service account.editor.email } } Grant allUsers permission to invoke the service: data "google iam policy" "noauth" { binding { role = "roles/run.invoker" members = [ "allUsers" , ] } } resource "google cloud run service iam policy" "noauth" { location = google cloud run v2 service.editor.location project = google cloud run v2 service.editor.project service = google cloud run v2 service.editor.name policy data = data.google iam policy.noauth.policy data } Understand the HTTPS traffic There are three HTTP requests involved in rendering markdown using these services.
- Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands . resource "google cloud run v2 service" "renderer" { name = "renderer" location = "us-central1" deletion protection = false # set to "true" in production template { containers { Replace with the URL of your Secure Services > Renderer image. gcr.io/<PROJECT ID>/renderer image = "us-docker.pkg.dev/cloudrun/container/hello" } service account = google service account.renderer.email } } Try out the private Markdown rendering service Private services cannot be directly loaded by a web browser.
- Install curl to try out the service Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Deploy the sample app to Cloud Run In Cloud Shell, configure serverless vpc access to allow private traffic from Cloud Run to Cloud SQL: gcloud compute networks subnets create serverless-connector-subnet \ --network=default \ --range=10.0.0.0/28 \ --region=us-central1 gcloud compute networks vpc-access connectors create serverless-connector \ --region=us-central1 \ --subnet=serverless-connector-subnet In Cloud Shell, create an environment variable that holds the connection name of the Cloud SQL instance that you created: export DB CONN NAME=$(gcloud sql instances describe $CLOUDSQL DB NAME --format='value(connectionName)') Create an environment variable called DATABASE URL to hold the connection string to connect to the Cloud SQL Proxy over a UNIX port. export DATABASE URL="socket:/cloudsql/${DB CONN NAME}?db=postgres&user=postgres&password= POSTGRES PASSWORD " Create a service account for Cloud Run with an IAM role to connect to the database: gcloud iam service-accounts create sa-run-db-client gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --role=roles/cloudsql.client Deploy the web app to Cloud Run: gcloud run deploy tasksapp- PROJECT ID \ --image=$IMAGE NAME \ --service-account=sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --set-env-vars=DATABASE URL=$DATABASE URL \ --add-cloudsql-instances $DB CONN NAME \ --vpc-connector serverless-connector \ --allow-unauthenticated The preceding command also links your Cloud Run container to the Cloud SQL database instance that you created.
- Enable the APIs Make sure that you have the following role or roles on the project: Cloud Run > Cloud Run Admin, Cloud Storage > Storage Admin, Cloud SQL > Cloud SQL Admin, Compute Engine > Compute Network Admin, Resource Manager > Project IAM Admin, Cloud Build > Cloud Build Editor, Serverless VPC Access > Serverless VPC Access Admin, Logging > Logs Viewer, Service Accounts > Service Account Admin, Service Accounts > Service Account User, and Service Usage > Service Usage Consumer Check for the roles In the Google Cloud console, go to the IAM page.
- Enable the APIs Make sure that you have the following role or roles on the project: Cloud Run > Cloud Run Admin, Cloud Storage > Storage Admin, Cloud SQL > Cloud SQL Admin, Compute Engine > Compute Network Admin, Resource Manager > Project IAM Admin, Cloud Build > Cloud Build Editor, Serverless VPC Access > Serverless VPC Access Admin, Logging > Logs Viewer, Service Accounts > Service Account Admin, Service Accounts > Service Account User, and Service Usage > Service Usage Consumer Check for the roles In the Google Cloud console, go to the IAM page.
- Delete the Heroku App To delete the sample app you deployed to Heroku and the associated PostgreSQL add-on, run the following command: heroku apps:destroy -a APP NAME What's next Learn about importing data into Cloud SQL .

