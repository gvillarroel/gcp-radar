---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.314Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Java 17 runtime for Airflow components"
feature_slug: "java-17-runtime-for-airflow-components"
latest_feature_date: "2023-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
  - "https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture"
keywords:
  - "components"
  - "schedulers"
  - "java"
  - "runtime"
  - "workers"
  - "airflow"
---

# Java 17 runtime for Airflow components

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Airflow workers and schedulers use Java 17 instead of Java 11.

## Extended Definition

Airflow workers and schedulers use Java 17 instead of Java 11.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- [https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture](https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture)

## Supporting Pages

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- For each component, the following information is available: Field Description Component Category of Airflow components, such as Airflow workers or schedulers.
- Access the monitoring dashboard The monitoring dashboard contains metrics and charts for monitoring trends in the DAG runs in your environment, and identifing issues with Airflow components and Cloud Composer resources.
- Worker statistics Environment metric Description Total worker CPU usage The total usage of vCPU cores by containers running in all Airflow worker pods, and the combined vCPU limit for all workers.
- Metrics displayed on a monitoring dashboard for a particular environment only track the DAG runs, Airflow components, and environment details for this environment only.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- The following components run in separate zones: Exactly two Airflow schedulers At least two triggerers ( if the number of triggerers isn't set to 0 ) At least two DAG processors Two web servers The minimum number of workers is set to two, and your environment's cluster distributes worker instances between zones.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --environment-size small \ --scheduler-count 1 \ --scheduler-cpu 0 .5 \ --scheduler-memory 2 .5GB \ --scheduler-storage 2GB \ --triggerer-count 1 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5GB \ --dag-processor-count 1 \ --dag-processor-cpu 0 .5 \ --dag-processor-memory 2GB \ --dag-processor-storage 1GB \ --web-server-cpu 1 \ --web-server-memory 2 .5GB \ --web-server-storage 2GB \ --worker-cpu 1 \ --worker-memory 2GB \ --worker-storage 2GB \ --min-workers 2 \ --max-workers 4 API When you create an environment, in the Environment > EnvironmentConfig > WorkloadsConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "workloadsConfig" : { "scheduler" : { "cpu" : SCHEDULER CPU , "memoryGb" : SCHEDULER MEMORY , "storageGb" : SCHEDULER STORAGE , "count" : SCHEDULER COUNT }, "triggerer" : { "count" : TRIGGERER COUNT , "cpu" : TRIGGERER CPU , "memoryGb" : TRIGGERER MEMORY }, "dagProcessor" : { "count" : DAG PROCESSOR COUNT , "cpu" : DAG PROCESSOR CPU , "memoryGb" : DAG PROCESSOR MEMORY , "storageGb" : DAG PROCESSOR STORAGE }, "webServer" : { "cpu" : WEB SERVER CPU , "memoryGb" : WEB SERVER MEMORY , "storageGb" : WEB SERVER STORAGE }, "worker" : { "cpu" : WORKER CPU , "memoryGb" : WORKER MEMORY , "storageGb" : WORKER STORAGE , "minCount" : WORKERS MIN , "maxCount" : WORKERS MAX } }, "environmentSize" : " ENVIRONMENT SIZE " , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SCHEDULER CPU with the number of CPUs for a scheduler, in vCPU units.
- For more information about --triggerer-count , --triggerer-cpu , and --triggerer-memory flags, see Configure environment scale and performance parameters . --min-workers to 2 or more gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --enable-high-resilience \ --enable-private-environment \ --scheduler-count 2 \ --triggerer-count 2 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5 \ --min-workers 2 API When you create an environment, in the Environment > EnvironmentConfig resource, enable the high resilience mode. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform Note: An update to the resilience mode field causes a failure instead of leading to recreating the Cloud Composer environment.
- Your environment's cluster runs at most this number of workers. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --environment-size ENVIRONMENT SIZE \ --scheduler-count SCHEDULER COUNT \ --scheduler-cpu SCHEDULER CPU \ --scheduler-memory SCHEDULER MEMORY \ --scheduler-storage SCHEDULER STORAGE \ --triggerer-count TRIGGERER COUNT \ --triggerer-cpu TRIGGERER CPU \ --triggerer-memory TRIGGERER MEMORY \ --dag-processor-count DAG PROCESSOR COUNT \ --dag-processor-cpu DAG PROCESSOR CPU \ --dag-processor-memory DAG PROCESSOR MEMORY \ --dag-processor-storage DAG PROCESSOR STORAGE \ --web-server-cpu WEB SERVER CPU \ --web-server-memory WEB SERVER MEMORY \ --web-server-storage WEB SERVER STORAGE \ --worker-cpu WORKER CPU \ --worker-memory WORKER MEMORY \ --worker-storage WORKER STORAGE \ --min-workers WORKERS MIN \ --max-workers WORKERS MAX Replace: ENVIRONMENT SIZE with small , medium , large , extra-large .

### Environment architecture \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture](https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Other airflow components Other Airflow components that run in your environment are: Airflow schedulers parse DAG definition files, schedule DAG runs based on the schedule interval, and queues tasks for execution by Airflow workers.
- Airflow schedulers and workers in the customer project communicate with the Airflow database through a Cloud SQL proxy instances located in the customer project.
- In Cloud Composer 1, the Airflow web server run on a different service account than Airflow workers and Airflow schedulers.
- Airflow schedulers and workers connect to the Airflow database through the HAProxy process in the environment's cluster.

