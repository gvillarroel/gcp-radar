---
title: "REST Resource: projects.locations.environments.userWorkloadsConfigMaps \_\
  |\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps
  title: "REST Resource: projects.locations.environments.userWorkloadsConfigMaps \_\
    |\_ Cloud Composer \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Reference
Send feedback
REST Resource: projects.locations.environments.userWorkloadsConfigMaps
Stay organized with collections
Save and categorize content based on your preferences.
Resource: UserWorkloadsConfigMap
JSON representation
Methods
Resource: UserWorkloadsConfigMap
User workloads ConfigMap used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator.
JSON representation
{
"name" : string ,
"data" : {
string : string ,
...
}
}
Fields
name
string
Identifier. The resource name of the ConfigMap, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}"
data
map (key: string, value: string)
Optional. The "data" field of Kubernetes ConfigMap, organized in key-value pairs. For details see: https://kubernetes.io/docs/concepts/configuration/configmap/
Example:
{ "example_key": "example_value", "another_key": "another_value" }
Methods
create
Creates a user workloads ConfigMap.
delete
Deletes a user workloads ConfigMap.
get
Gets an existing user workloads ConfigMap.
list
Lists user workloads ConfigMaps.
update
Updates a user workloads ConfigMap.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
