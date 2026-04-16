---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.207Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Redis memory scaling"
feature_slug: "redis-memory-scaling"
latest_feature_date: "2024-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling"
keywords:
  - "redis"
  - "memory"
  - "scaling"
  - "composer"
  - "increased"
  - "medium"
  - "large"
  - "environment"
---

# Redis memory scaling

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer increased Redis memory for Medium and Large environment sizes to improve performance.

## Extended Definition

Cloud Composer increased Redis memory for Medium and Large environment sizes to improve performance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling](https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Your environment's cluster runs at most this number of workers. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --environment-size ENVIRONMENT SIZE \ --scheduler-count SCHEDULER COUNT \ --scheduler-cpu SCHEDULER CPU \ --scheduler-memory SCHEDULER MEMORY \ --scheduler-storage SCHEDULER STORAGE \ --triggerer-count TRIGGERER COUNT \ --triggerer-cpu TRIGGERER CPU \ --triggerer-memory TRIGGERER MEMORY \ --dag-processor-count DAG PROCESSOR COUNT \ --dag-processor-cpu DAG PROCESSOR CPU \ --dag-processor-memory DAG PROCESSOR MEMORY \ --dag-processor-storage DAG PROCESSOR STORAGE \ --web-server-cpu WEB SERVER CPU \ --web-server-memory WEB SERVER MEMORY \ --web-server-storage WEB SERVER STORAGE \ --worker-cpu WORKER CPU \ --worker-memory WORKER MEMORY \ --worker-storage WORKER STORAGE \ --min-workers WORKERS MIN \ --max-workers WORKERS MAX Replace: ENVIRONMENT SIZE with small , medium , large , extra-large .
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --environment-size small \ --scheduler-count 1 \ --scheduler-cpu 0 .5 \ --scheduler-memory 2 .5GB \ --scheduler-storage 2GB \ --triggerer-count 1 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5GB \ --dag-processor-count 1 \ --dag-processor-cpu 0 .5 \ --dag-processor-memory 2GB \ --dag-processor-storage 1GB \ --web-server-cpu 1 \ --web-server-memory 2 .5GB \ --web-server-storage 2GB \ --worker-cpu 1 \ --worker-memory 2GB \ --worker-storage 2GB \ --min-workers 2 \ --max-workers 4 API When you create an environment, in the Environment > EnvironmentConfig > WorkloadsConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "workloadsConfig" : { "scheduler" : { "cpu" : SCHEDULER CPU , "memoryGb" : SCHEDULER MEMORY , "storageGb" : SCHEDULER STORAGE , "count" : SCHEDULER COUNT }, "triggerer" : { "count" : TRIGGERER COUNT , "cpu" : TRIGGERER CPU , "memoryGb" : TRIGGERER MEMORY }, "dagProcessor" : { "count" : DAG PROCESSOR COUNT , "cpu" : DAG PROCESSOR CPU , "memoryGb" : DAG PROCESSOR MEMORY , "storageGb" : DAG PROCESSOR STORAGE }, "webServer" : { "cpu" : WEB SERVER CPU , "memoryGb" : WEB SERVER MEMORY , "storageGb" : WEB SERVER STORAGE }, "worker" : { "cpu" : WORKER CPU , "memoryGb" : WORKER MEMORY , "storageGb" : WORKER STORAGE , "minCount" : WORKERS MIN , "maxCount" : WORKERS MAX } }, "environmentSize" : " ENVIRONMENT SIZE " , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SCHEDULER CPU with the number of CPUs for a scheduler, in vCPU units.
- For more information about --triggerer-count , --triggerer-cpu , and --triggerer-memory flags, see Configure environment scale and performance parameters . --min-workers to 2 or more gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --enable-high-resilience \ --enable-private-environment \ --scheduler-count 2 \ --triggerer-count 2 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5 \ --min-workers 2 API When you create an environment, in the Environment > EnvironmentConfig resource, enable the high resilience mode. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform Note: An update to the resilience mode field causes a failure instead of leading to recreating the Cloud Composer environment.
- The worker.max count field specifies the maximum number of workers in your environment. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { workloads config { scheduler { cpu = SCHEDULER CPU memory gb = SCHEDULER MEMORY storage gb = SCHEDULER STORAGE count = SCHEDULER COUNT } triggerer { count = TRIGGERER COUNT cpu = TRIGGERER CPU memory gb = TRIGGERER MEMORY } dag processor { cpu = DAG PROCESSOR CPU memory gb = DAG PROCESSOR MEMORY storage gb = DAG PROCESSOR STORAGE count = DAG PROCESSOR COUNT } web server { cpu = WEB SERVER CPU memory gb = WEB SERVER MEMORY storage gb = WEB SERVER STORAGE } worker { cpu = WORKER CPU memory gb = WORKER MEMORY storage gb = WORKER STORAGE min count = WORKERS MIN max count = WORKERS MAX } } environment size = " ENVIRONMENT SIZE " node config { service account = " SERVICE ACCOUNT " } } } Replace: ENVIRONMENT NAME with the name of the environment.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- JSON representation { "networkingType" : enum ( NetworkingType ) , "enablePrivateEnvironment" : boolean , "enablePrivateBuildsOnly" : boolean , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "webServerIpv4CidrBlock" : string , "cloudSqlIpv4CidrBlock" : string , "webServerIpv4ReservedRange" : string , "cloudComposerNetworkIpv4CidrBlock" : string , "cloudComposerNetworkIpv4ReservedRange" : string , "enablePrivatelyUsedPublicIps" : boolean , "cloudComposerConnectionSubnetwork" : string , "networkingConfig" : { object ( NetworkingConfig ) } } Fields networkingType enum ( NetworkingType ) Optional.
- Home Documentation Data analytics Cloud Composer Reference Send feedback REST Resource: projects.locations.environments Stay organized with collections Save and categorize content based on your preferences.
- ConnectionType Represents connection type between Composer environment in Customer Project and the corresponding Tenant project, from a predefined list of available connection modes.

### About environment scaling \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling](https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback About environment scaling Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how environment scaling works.
- What's next Scale environments Cloud Composer pricing Create environments Environment architecture Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- By doing so you can scale your environment vertically, in addition to the horizontal scaling provided by the number of nodes setting.

