---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.574Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "DataflowCreateJavaJobOperator"
feature_slug: "dataflowcreatejavajoboperator"
latest_feature_date: "2022-05-10"
deprecation_date: "2022-05-10"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks"
  - "https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service"
keywords:
  - "dataflowcreatejavajoboperator"
  - "composer"
  - "supports"
  - "airflow"
  - "deprecated"
  - "2022"
  - "05"
  - "10"
---

# DataflowCreateJavaJobOperator

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports the DataflowCreateJavaJobOperator for Airflow 2; deprecated on 2022-05-10.

## Extended Definition

Cloud Composer supports the DataflowCreateJavaJobOperator for Airflow 2; deprecated on 2022-05-10.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks)
- [https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service](https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service)

## Supporting Pages

### "Configure large-scale networks for Cloud Composer environments \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks)
- Source ID: `site-iam-reference`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your project has a large-scale network configuration, such as one with hundreds of networks and many VPC peerings configured, then when you try to create new Cloud Composer environments, the operations might fail because of VPC, subnet or forwarding rules quota errors.
- About large-scale networks for Cloud Composer environments To overcome challenges related to these limits, you can organize your Cloud Composer environments into several VPC networks connected to your main/backbone VPC as it is described in the following sections.
- Quotas for VPC, subnet and forwarding rules Cloud Composer and GKE services use VPC peerings to establish connections between the components of Cloud Composer environments (Customer Project and Tenant Project) and between a GKE cluster and a GKE Control Plane.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure large-scale networks for Cloud Composer environments Stay organized with collections Save and categorize content based on your preferences.

### Enable and disable the Cloud Composer service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service](https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service)
- Source ID: `site-iam-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- The following services are required by Cloud Composer: artifactregistry.googleapis.com cloudbuild.googleapis.com composer.googleapis.com compute.googleapis.com container.googleapis.com deploymentmanager.googleapis.com logging.googleapis.com cloudkms.googleapis.com, if you are using Cloud KMS or CMEK keys monitoring.googleapis.com pubsub.googleapis.com storage.googleapis.com secretmanager.googleapis.com, if you are using Secret Manager as a secret backend cloudresourcemanager.googleapis.com servicedirectory.googleapis.com Google services like Cloud DNS or IAM are already allowed by default in most projects.
- Deactivating these APIs won't cause the deactivation of the Cloud Composer API. artifactregistry.googleapis.com cloudbuild.googleapis.com container.googleapis.com pubsub.googleapis.com sqladmin.googleapis.com Starting May 27, 2026 , these APIs will no longer be enabled automatically when you enable the Cloud Composer API.
- Enable Cloud Composer API Console Enable the Cloud Composer API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Enable the API gcloud Enable the composer.googleapis.com API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To ensure that web server remains accessible regardless of DAG load time, you can configure asynchronous DAG loading to parse and load DAGs in the background at a pre-configured interval (available in composer-1.7.1-airflow-1.10.2 and later versions).
- To get the URL for the Airflow UI, run the following command in Google Cloud CLI: gcloud composer environments describe ENVIRONMENT NAME \ --location LOCATION Replace the following: ENVIRONMENT NAME : the name of your environment.

