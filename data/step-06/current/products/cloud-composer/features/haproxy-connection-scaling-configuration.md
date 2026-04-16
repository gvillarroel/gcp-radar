---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.810Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "HAProxy connection scaling configuration"
feature_slug: "haproxy-connection-scaling-configuration"
latest_feature_date: "2020-06-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager"
keywords:
  - "haproxy"
  - "connection"
  - "scaling"
  - "configuration"
  - "composer"
  - "includes"
  - "updated"
  - "2000"
---

# HAProxy connection scaling configuration

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Composer includes an updated HAProxy configuration with a 2000-connection limit and connection-based load balancing that can be tuned with environment variables.

## Extended Definition

Composer includes an updated HAProxy configuration with a 2000-connection limit and connection-based load balancing that can be tuned with environment variables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager](https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager)

## Supporting Pages

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- NetworkingConfig Configuration options for networking connections in the Composer 2 environment.
- JSON representation { "networkingType" : enum ( NetworkingType ) , "enablePrivateEnvironment" : boolean , "enablePrivateBuildsOnly" : boolean , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "webServerIpv4CidrBlock" : string , "cloudSqlIpv4CidrBlock" : string , "webServerIpv4ReservedRange" : string , "cloudComposerNetworkIpv4CidrBlock" : string , "cloudComposerNetworkIpv4ReservedRange" : string , "enablePrivatelyUsedPublicIps" : boolean , "cloudComposerConnectionSubnetwork" : string , "networkingConfig" : { object ( NetworkingConfig ) } } Fields networkingType enum ( NetworkingType ) Optional.
- When enabled, IPs from public (non-RFC1918) ranges can be used for IPAllocationPolicy.cluster ipv4 cidr block and IPAllocationPolicy.service ipv4 cidr block . cloudComposerConnectionSubnetwork string Optional.
- ConnectionType Represents connection type between Composer environment in Customer Project and the corresponding Tenant project, from a predefined list of available connection modes.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Add the cloud-airflow-prod@system.gserviceaccount.com service account as the member of your security perimeter by using the following configuration in the YAML conditions file: - members : - serviceAccount:cloud-airflow-prod@ system.gserviceaccount.com Cloud Composer 1 environment creation fails when the compute.requireOsLogin policy is enabled If compute.requireOsLogin policy is set to true in your project, then Cloud Composer 1 v1 environment creation operations fails.
- The command-line interface is the recommended approach for deleting the connection: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ connections delete -- \ CONNECTION ID After deleting the connection, recreate it using the Airflow UI , ensuring that the fields you intend to leave empty are indeed left blank.
- If you encounter this issue in Airflow 1 in a long-running task, increase the value of the [celery broker transport options]visibility timeout Airflow configuration option (the default value is 604800 for Composer 1.17.0, 21600 for older environments).
- Logs for Airflow tasks aren't collected if [core]execute tasks new python interpreter is set to True Cloud Composer doesn't collect logs for Airflow tasks if the [core]execute tasks new python interpreter Airflow configuration option is set to True .

### "Configure Secret Manager for your environment \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager](https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager)
- Source ID: `site-iam-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It is possible to get the URI string representation of a connection like this: exampleConnectionUri = BaseHook . get connection ( 'exampleConnection' ) . get uri () What's next Override Airflow configuration options Access the Airflow REST API Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Note: The Keyfile Secret Name (in GCP Secret Manager) option in Airflow connection is supported only when Secret Manager and Cloud Composer are in the same Google Cloud project.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page shows how to use Secret Manager to securely store Airflow connections and secrets.
- If the requested variable or connection is not found, Cloud Composer then checks the environment variables and the Airflow database.

