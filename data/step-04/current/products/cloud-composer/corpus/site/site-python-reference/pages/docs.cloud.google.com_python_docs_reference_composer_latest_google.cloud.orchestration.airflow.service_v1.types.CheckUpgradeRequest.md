---
title: "Class CheckUpgradeRequest (1.19.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/composer/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeRequest
  title: "Class CheckUpgradeRequest (1.19.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class CheckUpgradeRequest (1.19.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.19.0 (latest)
1.18.0
1.17.5
1.16.1
1.15.1
1.14.0
1.13.1
1.12.2
1.11.1
1.10.0
1.9.1
1.8.0
1.7.1
1.6.1
1.5.0
1.4.4
1.3.2
1.2.1
1.1.0
1.0.0
0.1.3
CheckUpgradeRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request to check whether image upgrade will succeed.
Attributes
Name
Description
environment
str
Required. The resource name of the
environment to check upgrade for, in the form:
"projects/{projectId}/locations/{locationId}/environments/{environmentId}".
image_version
str
Optional. The version of the software running in the
environment. This encapsulates both the version of Cloud
Composer functionality and the version of Apache Airflow. It
must match the regular expression
composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?) .
When used as input, the server also checks if the provided
version is supported and denies the request for an
unsupported version.
The Cloud Composer portion of the image version is a full
semantic version __, or an alias in
the form of major version number or latest . When an
alias is provided, the server replaces it with the current
Cloud Composer version that satisfies the alias.
The Apache Airflow portion of the image version is a full
semantic version that points to one of the supported Apache
Airflow versions, or an alias in the form of only major or
major.minor versions specified. When an alias is provided,
the server replaces it with the latest Apache Airflow
version that satisfies the alias and is supported in the
given Cloud Composer version.
In all cases, the resolved image version is stored in the
same field.
See also `version
list `__
and `versioning
overview `__.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
