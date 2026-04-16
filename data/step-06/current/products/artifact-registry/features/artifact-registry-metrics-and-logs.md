---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.483Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry metrics and logs"
feature_slug: "artifact-registry-metrics-and-logs"
latest_feature_date: "2024-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts"
  - "https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
keywords:
  - "metrics"
  - "records"
  - "project"
  - "level"
  - "logs"
---

# Artifact Registry metrics and logs

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry now records project-level metrics and logs that are viewable in Cloud Monitoring and Cloud Logging.

## Extended Definition

Artifact Registry now records project-level metrics and logs that are viewable in Cloud Monitoring and Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts](https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts)
- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)

## Supporting Pages

### "Chart request counts per repository in the Metrics Explorer \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts](https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts)
- Source ID: `site-docs-root-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- To view the metrics for a monitored resource by using the Metrics Explorer, do the following: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Required roles To get the permissions that you need to view monitoring data and configuration information, ask your administrator to grant you the Monitoring Viewer ( roles/monitoring.viewer ) IAM role on the Google Cloud project.
- Home Documentation Application development Artifact Registry Guides Send feedback Chart request counts per repository in the Metrics Explorer Stay organized with collections Save and categorize content based on your preferences.
- This page describes how you can chart Artifact Registry request count metrics in the Metrics Explorer, and manipulate the chart by different parameters such as read requests, write requests, method and repository ID.

### "Python Client for Artifact Registry \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest)
- Source ID: `site-python-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Code-Based Examples Configuring a handler for all Google-based loggers import logging from google.cloud import library v1 base logger = logging.getLogger("google") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Configuring a handler for a specific Google module (for a client library called library v1 ): import logging from google.cloud import library v1 base logger = logging.getLogger("google.cloud.library v1") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Logging details Regardless of which of the mechanisms above you use to configure logging for this library, by default logging events are not propagated up to the root logger from the google-level logger.
- Client Library Documentation Product Documentation Quick Start In order to use this library, you first need to go through the following steps: Select or create a Cloud Platform project.
- These isolated environments can have separate versions of Python packages, which allows you to isolate one project’s dependencies from the dependencies of other projects.
- This configures handling of logging events (at level logging.DEBUG or higher) from this library in a default manner, emitting the logged messages in a structured format.

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- Repository-specific configurations. format config can be only one of the following: mavenConfig object ( MavenRepositoryConfig ) Maven repository config contains repository level configuration for the repositories of maven type. dockerConfig object ( DockerRepositoryConfig ) Docker repository config contains repository level configuration for the repositories of docker type.
- JSON representation { "id" : string , "repository" : string , "priority" : integer } Fields id string The user-provided ID of the upstream policy. repository string A reference to the repository resource, for example: projects/p1/locations/us-central1/repositories/repo1 . priority integer Entries with a greater priority value take precedence in the pull order.
- Home Documentation Application development Artifact Registry Reference Send feedback REST Resource: projects.locations.repositories Stay organized with collections Save and categorize content based on your preferences.

