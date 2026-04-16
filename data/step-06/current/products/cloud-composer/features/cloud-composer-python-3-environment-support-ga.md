---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.370Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Python 3 environment support GA"
feature_slug: "cloud-composer-python-3-environment-support-ga"
latest_feature_date: "2018-11-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient"
keywords:
  - "composer"
  - "python"
  - "environment"
  - "ga"
  - "made"
  - "generally"
  - "available"
  - "for"
---

# Cloud Composer Python 3 environment support GA

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer made Python 3 support generally available for environment creation via the v1 API and Google Cloud Console.

## Extended Definition

Cloud Composer made Python 3 support generally available for environment creation via the v1 API and Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest](https://docs.cloud.google.com/python/docs/reference/composer/latest)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)

## Supporting Pages

### "Python Client for Cloud Composer \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest](https://docs.cloud.google.com/python/docs/reference/composer/latest)
- Source ID: `site-python-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-orchestration-airflow Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-orchestration-airflow Next Steps Read the Client Library Documentation for Cloud Composer to see other available methods on the client.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Cloud Composer Stay organized with collections Save and categorize content based on your preferences.
- The Google-specific logging configurations (default handlers for environment-based configuration; not propagating logging events to the root logger) get executed the first time any client library is instantiated in your application, and only if the affected loggers have not been previously configured. (This is the reason for 2.i. above.) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Environment-Based Examples Enabling the default handler for all Google-based loggers export GOOGLE SDK PYTHON LOGGING SCOPE=google Enabling the default handler for a specific Google module (for a client library called library v1 ): export GOOGLE SDK PYTHON LOGGING SCOPE=google.cloud.library v1 Advanced, code-based configuration You can also configure a valid logging scope using Python’s standard logging mechanism.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Example: resource "google composer environment" "example" { name = "example-environment" region = "us-central1" config { node config { zone = "us-central1-a" oauth scopes = "[https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/bigquery]" service account = " example-account@example-project . iam.gserviceaccount.com " } software config { python version = "3" } } } Step 12. (Optional) Enforce Beta API usage Preview — Enforcing beta API usage This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "location" : "projects/example-project/zones/us-central1-a" , "oauthScopes" : [ "https://www.googleapis.com/auth/cloud-platform" , "https://www.googleapis.com/auth/bigquery" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " }, "softwareConfig" : { "pythonVersion" : "3" } } } Terraform When you create an environment, following fields control miscellaneous parameters of your environment: zone field in the node config block specifies a Compute Engine zone for your environment VMs. oauth scopes field in the node config block specifies a comma-separated list of OAuth scopes. python version field in the software config block specifies the version of Python. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { zone = " ZONE " oauth scopes = "[ OAUTH SCOPES ]" service account = " SERVICE ACCOUNT " } software config { python version = " PYTHON VERSION " } } } Replace: ZONE with the name of the Compute Engine zone.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --zone us-central1-a \ --oauth-scopes https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/bigquery \ --python-version 3 API When you create an environment, in the Environment > EnvironmentConfig resource, specify miscellaneous parameters of your environment. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "nodeConfig" : { "location" : "projects/ PROJECT ID /zones/ ZONE " , "oauthScopes" : [ " OAUTH SCOPE " ], "serviceAccount" : " SERVICE ACCOUNT " }, "softwareConfig" : { "pythonVersion" : " PYTHON VERSION " } } } Replace: ZONE with the name of the Compute Engine zone.
- Include https://www.googleapis.com/auth/cloud-platform in the list of specified scopes. --python-version specifies the version of Python. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --zone ZONE \ --oauth-scopes OAUTH SCOPES \ --python-version PYTHON VERSION Replace: ZONE with the name of the Compute Engine zone.

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- The result type for the operation will be CheckUpgradeResponse Message containing information about the result of an upgrade check operation. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create environment create environment ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample create environment(): Create a client client = service v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample delete environment(): Create a client client = service v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample update environment(): Create a client client = service v1.

### "Class EnvironmentsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- Source ID: `site-python-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- The result type for the operation will be CheckUpgradeResponse Message containing information about the result of an upgrade check operation. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create environment create environment ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 def sample create environment(): Create a client client = service v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 def sample delete environment(): Create a client client = service v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 def sample update environment(): Create a client client = service v1.

