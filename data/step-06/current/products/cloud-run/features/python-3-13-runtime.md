---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.901Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Python 3.13 runtime"
feature_slug: "python-3-13-runtime"
latest_feature_date: "2025-05-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest"
keywords:
  - "python"
  - "13"
  - "runtime"
  - "run"
  - "supports"
  - "the"
  - "for"
  - "deployed"
---

# Python 3.13 runtime

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports the Python 3.13 runtime for deployed workloads; Cloud Run supports the Python 3.13 runtime for deployed workloads.

## Extended Definition

Cloud Run supports the Python 3.13 runtime for deployed workloads; Cloud Run supports the Python 3.13 runtime for deployed workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- April 21, 2025 Feature Support for the Python 3.13 runtime is now in Preview .
- Feature Support for the Python 3.13 runtime is in General Availability (GA) .
- For Python version 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deployments based on the web server or framework configuration in your requirements.txt file.
- August 21, 2024 Feature Cloud Run now provides security updates for services that are deployed from source when you specify the runtime base image (Preview).

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the service container image from Artifact Registry Delete the service account vote-identity@PROJECT ID.iam.gserviceaccount.com Delete the Cloud SQL instance Delete the secret in Secret Manager What's next Dive deeper into Connecting from Cloud Run to Cloud SQL Learn more about sign in methods and managing users with Identity Platform Review other ways to authenticate developers, services, and users of services deployed to Cloud Run Explore other Cloud Run demos, tutorials, and samples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Change to the directory that contains the Cloud Run sample code: Node.js cd nodejs-docs-samples/run/idp-sql/ Python cd python-docs-samples/run/idp-sql/ Java cd java-docs-samples/run/idp-sql/ Visualizing the architecture Diagram shows an end-user logging-in through a Google sign-in dialog provided by Identity Platform, and then being redirected back to Cloud Run with the user's identity.
- It should look like this: Success: You deployed a Cloud Run service that authenticates end-users with Identity Platform and securely manages sensitive data using Secret Manager.
- Deploying the service Follow the steps to complete infrastructure provisioning and deployment: Create a Cloud SQL instance with postgreSQL database using the console or CLI: gcloud sql instances create CLOUD SQL INSTANCE NAME \ --database-version = POSTGRES 16 \ --region = CLOUD SQL REGION \ --cpu = 2 \ --memory = 7680MB \ --root-password = DB PASSWORD Add your Cloud SQL credential values to postgres-secrets.json : Node.js { "CLOUD SQL CONNECTION NAME" : "PROJECT ID:REGION:INSTANCE" , "DB NAME" : "postgres" , "DB USER" : "postgres" , "DB PASSWORD" : "PASSWORD SECRET" } Python { "CLOUD SQL CONNECTION NAME" : "PROJECT ID:REGION:INSTANCE" , "DB NAME" : "postgres" , "DB USER" : "postgres" , "DB PASSWORD" : "PASSWORD SECRET" } Java { "spring.cloud.gcp.sql.instance-connection-name" : "PROJECT ID:REGION:INSTANCE" , "spring.cloud.gcp.sql.database-name" : "postgres" , "spring.datasource.username" : "postgres" , "spring.datasource.password" : "PASSWORD SECRET" } Create a versioned secret using the console or CLI: gcloud secrets create idp-sql-secrets \ --replication-policy = "automatic" \ --data-file = postgres-secrets.json Create a service account for the server using the console or CLI: gcloud iam service-accounts create idp-sql-identity Grant roles for Secret Manager and Cloud SQL access using the console or CLI: Allow the service account associated with the server to access the created secret: gcloud secrets add-iam-policy-binding idp-sql-secrets \ --member serviceAccount:idp-sql-identity@ PROJECT ID .iam.gserviceaccount.com \ --role roles/secretmanager.secretAccessor Allow the service account associated with the server to access Cloud SQL: gcloud projects add-iam-policy-binding PROJECT ID \ --member serviceAccount:idp-sql-identity@ PROJECT ID .iam.gserviceaccount.com \ --role roles/cloudsql.client Create an Artifact Registry: gcloud artifacts repositories create REPOSITORY \ --repository-format docker \ --location REGION REPOSITORY is the name of the repository.

### "Python Client for Cloud Run \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- Source ID: `site-python-reference`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-run Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-run Next Steps Read the Client Library Documentation for Cloud Run to see other available methods on the client.
- Environment-Based Examples Enabling the default handler for all Google-based loggers export GOOGLE SDK PYTHON LOGGING SCOPE=google Enabling the default handler for a specific Google module (for a client library called library v1 ): export GOOGLE SDK PYTHON LOGGING SCOPE=google.cloud.library v1 Advanced, code-based configuration You can also configure a valid logging scope using Python’s standard logging mechanism.
- 0.16.0 (latest) 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.19 0.9.1 0.8.1 0.7.1 0.6.0 0.5.0 0.4.2 0.3.0 0.2.1 0.1.0 Cloud Run : is a managed compute platform that enables you to run containers that are invocable via requests or events.
- Simple, environment-based configuration To enable logging for this library without any changes in your code, set the GOOGLE SDK PYTHON LOGGING SCOPE environment variable to a valid Google logging scope.

