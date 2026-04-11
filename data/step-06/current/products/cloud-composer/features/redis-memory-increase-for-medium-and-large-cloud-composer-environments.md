---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.094Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Redis memory increase for Medium and Large Cloud Composer environments"
feature_slug: "redis-memory-increase-for-medium-and-large-cloud-composer-environments"
latest_feature_date: "2024-01-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks"
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
keywords:
  - "redis"
  - "memory"
  - "increase"
  - "for"
  - "medium"
  - "and"
  - "large"
  - "composer"
---

# Redis memory increase for Medium and Large Cloud Composer environments

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer environments with Medium and Large sizes now have more Redis memory available to improve environment performance.

## Extended Definition

Cloud Composer environments with Medium and Large sizes now have more Redis memory available to improve environment performance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks)
- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Feature Increased the amount of memory available to the Redis component in environments with Medium and Large environment sizes.
- Feature (Cloud Composer 2) Increased the memory limit for the Redis queue and made it scale with the environment's size.
- Feature Composer now uses the Kubernetes v1 API, and is compatible with GKE 1.16 An updated haproxy configuration for Composer increases the maximum number of connections to 2000, and changes load balancing to be based on the number of connections.
- Change New versions of Cloud Composer images: composer-1.5.0-airflow-1.9.0 , composer-1.5.0-airflow-1.10.0 , and composer-1.5.0-airflow-1.10.1 Increased the disk size for the Apache Airflow webserver from 10 to 20 GB.

### "Configure large-scale networks for Cloud Composer environments \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- If your project has a large-scale network configuration, such as one with hundreds of networks and many VPC peerings configured, then when you try to create new Cloud Composer environments, the operations might fail because of VPC, subnet or forwarding rules quota errors.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure large-scale networks for Cloud Composer environments Stay organized with collections Save and categorize content based on your preferences.
- About large-scale networks for Cloud Composer environments To overcome challenges related to these limits, you can organize your Cloud Composer environments into several VPC networks connected to your main/backbone VPC as it is described in the following sections.
- Quotas for VPC, subnet and forwarding rules Cloud Composer and GKE services use VPC peerings to establish connections between the components of Cloud Composer environments (Customer Project and Tenant Project) and between a GKE cluster and a GKE Control Plane.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --environment-size small \ --scheduler-count 1 \ --scheduler-cpu 0 .5 \ --scheduler-memory 2 .5GB \ --scheduler-storage 2GB \ --triggerer-count 1 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5GB \ --dag-processor-count 1 \ --dag-processor-cpu 0 .5 \ --dag-processor-memory 2GB \ --dag-processor-storage 1GB \ --web-server-cpu 1 \ --web-server-memory 2 .5GB \ --web-server-storage 2GB \ --worker-cpu 1 \ --worker-memory 2GB \ --worker-storage 2GB \ --min-workers 2 \ --max-workers 4 API When you create an environment, in the Environment > EnvironmentConfig > WorkloadsConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "workloadsConfig" : { "scheduler" : { "cpu" : SCHEDULER CPU , "memoryGb" : SCHEDULER MEMORY , "storageGb" : SCHEDULER STORAGE , "count" : SCHEDULER COUNT }, "triggerer" : { "count" : TRIGGERER COUNT , "cpu" : TRIGGERER CPU , "memoryGb" : TRIGGERER MEMORY }, "dagProcessor" : { "count" : DAG PROCESSOR COUNT , "cpu" : DAG PROCESSOR CPU , "memoryGb" : DAG PROCESSOR MEMORY , "storageGb" : DAG PROCESSOR STORAGE }, "webServer" : { "cpu" : WEB SERVER CPU , "memoryGb" : WEB SERVER MEMORY , "storageGb" : WEB SERVER STORAGE }, "worker" : { "cpu" : WORKER CPU , "memoryGb" : WORKER MEMORY , "storageGb" : WORKER STORAGE , "minCount" : WORKERS MIN , "maxCount" : WORKERS MAX } }, "environmentSize" : " ENVIRONMENT SIZE " , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SCHEDULER CPU with the number of CPUs for a scheduler, in vCPU units.
- For more information about --triggerer-count , --triggerer-cpu , and --triggerer-memory flags, see Configure environment scale and performance parameters . --min-workers to 2 or more gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --enable-high-resilience \ --enable-private-environment \ --scheduler-count 2 \ --triggerer-count 2 \ --triggerer-cpu 0 .5 \ --triggerer-memory 0 .5 \ --min-workers 2 API When you create an environment, in the Environment > EnvironmentConfig resource, enable the high resilience mode. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "resilience mode" : "HIGH RESILIENCE" , "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform Note: An update to the resilience mode field causes a failure instead of leading to recreating the Cloud Composer environment.
- Your environment's cluster runs at most this number of workers. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " SERVICE ACCOUNT " \ --environment-size ENVIRONMENT SIZE \ --scheduler-count SCHEDULER COUNT \ --scheduler-cpu SCHEDULER CPU \ --scheduler-memory SCHEDULER MEMORY \ --scheduler-storage SCHEDULER STORAGE \ --triggerer-count TRIGGERER COUNT \ --triggerer-cpu TRIGGERER CPU \ --triggerer-memory TRIGGERER MEMORY \ --dag-processor-count DAG PROCESSOR COUNT \ --dag-processor-cpu DAG PROCESSOR CPU \ --dag-processor-memory DAG PROCESSOR MEMORY \ --dag-processor-storage DAG PROCESSOR STORAGE \ --web-server-cpu WEB SERVER CPU \ --web-server-memory WEB SERVER MEMORY \ --web-server-storage WEB SERVER STORAGE \ --worker-cpu WORKER CPU \ --worker-memory WORKER MEMORY \ --worker-storage WORKER STORAGE \ --min-workers WORKERS MIN \ --max-workers WORKERS MAX Replace: ENVIRONMENT SIZE with small , medium , large , extra-large .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "workloadsConfig" : { "scheduler" : { "cpu" : 2.5 , "memoryGb" : 2.5 , "storageGb" : 2 , "count" : 1 }, "triggerer" : { "cpu" : 0.5 , "memoryGb" : 0.5 , "count" : 1 }, "dagProcessor" : { "count" : 1 , "cpu" : 0.5 , "memoryGb" : 2 , "storageGb" : 1 }, "webServer" : { "cpu" : 1 , "memoryGb" : 2.5 , "storageGb" : 2 }, "worker" : { "cpu" : 1 , "memoryGb" : 2 , "storageGb" : 2 , "minCount" : 2 , "maxCount" : 4 } }, "environmentSize" : "ENVIRONMENT SIZE SMALL" , "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following arguments control the scale and performance parameters of your environment.

