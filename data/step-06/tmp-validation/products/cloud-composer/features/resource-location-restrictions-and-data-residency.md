---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.746Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Resource location restrictions and data residency"
feature_slug: "resource-location-restrictions-and-data-residency"
latest_feature_date: "2021-03-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project"
keywords:
  - "restrictions"
  - "residency"
  - "resource"
  - "location"
  - "controls"
  - "supports"
---

# Resource location restrictions and data residency

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports resource location restrictions and data residency controls.

## Extended Definition

Cloud Composer supports resource location restrictions and data residency controls.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions](https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project](https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project)

## Supporting Pages

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.
- The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. config object ( EnvironmentConfig ) Optional.
- Home Documentation Data analytics Cloud Composer Reference Send feedback REST Resource: projects.locations.environments Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "useIpAliases" : boolean , // Union field cluster ip allocation can be only one of the following: "clusterSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string // End of list of possible types for union field cluster ip allocation . // Union field services ip allocation can be only one of the following: "servicesSecondaryRangeName" : string , "servicesIpv4CidrBlock" : string // End of list of possible types for union field services ip allocation . } Fields useIpAliases boolean Optional.

### "Configure resource location restrictions \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions](https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions)
- Source ID: `site-iam-reference`
- Final score: 37
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Install a Python dependency to a private IP environment with resource location restrictions If you set resource location restrictions for your project, then Cloud Build can't be used to install Python packages.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure resource location restrictions Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page shows how to configure resource location restrictions so that your data stored by Cloud Composer is kept within the locations you specify.
- They are always sent to the default storage. gcloud logging sinks update Default \ --add-exclusion name = ENVIRONMENT NAME -exclusion,filter = \ "resource.type=cloud composer environment AND \ resource.labels.environment name= ENVIRONMENT NAME AND \ resource.labels.location= LOCATION " Replace: ENVIRONMENT NAME with the name of the environment.

### "Access resources in another project \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project](https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project)
- Source ID: `site-iam-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- What's next Access control with IAM Manage Airflow connections Configure resource location restrictions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The value is an email address, such as service-account-name@example-project.iam.gserviceaccount.com . gcloud gcloud composer environments describe ENVIRONMENT NAME \ --location LOCATION \ --format = "get(config.nodeConfig.serviceAccount)" The value is an email address, such as service-account-name@example-project.iam.gserviceaccount.com .
- After you grant the required permissions and roles, you can access resources in a different project with the same default Airflow connections that you use to access resources in the project where your environment is located.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access resources in another project Stay organized with collections Save and categorize content based on your preferences.

