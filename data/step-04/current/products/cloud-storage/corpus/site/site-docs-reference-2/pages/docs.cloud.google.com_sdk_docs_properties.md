---
title: "Managing gcloud CLI properties \_|\_ Google Cloud SDK \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sdk/docs/properties
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sdk/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sdk/docs/properties
  title: "Managing gcloud CLI properties \_|\_ Google Cloud SDK \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Google Cloud SDK
Guides
Send feedback
Managing gcloud CLI properties
Stay organized with collections
Save and categorize content based on your preferences.
Properties are settings that govern the behavior of the gcloud CLI.
You can use properties to define a per-product or per-service setting such as
the account used by the gcloud CLI for authorization, the default
region to use when working with Compute Engine resources, or the option to
turn off automatic gcloud CLI component update checks. Properties
can also be used to define gcloud CLI preferences like verbosity
level and prompt configuration for gcloud CLI commands.
Properties and flags
The gcloud CLI supports some
global flags and command flags that have the same
effect as gcloud CLI properties. For example, the gcloud CLI supports both
the --project flag and project property. Properties allow you to maintain
the same settings across command executions while flags affect command behavior
on a per-invocation basis. Note that flags override properties when both
are set.
Configurations
A configuration is a named set of
gcloud CLI properties. The gcloud CLI uses a
configuration named default as the initial active configuration. The default
configuration is suitable for most use cases. However, you can also
create additional configurations and switch between them as required.
Listing properties
To list the properties in the active
configuration , run
gcloud config list :
gcloud config list
The gcloud CLI returns the list of properties:
[compute]
region = us-east1
zone = us-east1-d
[core]
account = user@google.com
disable_usage_reporting = False
project = example-project
[metrics]
command_name = gcloud.config.list
Setting properties
To set a property in the active configuration, run
gcloud config set . The following example
sets the project
property, where PROJECT_ID is the unique ID for your project.
gcloud config set project PROJECT_ID
To set properties that are not in the core
properties section, you must specify the section followed by a forward slash
before the property name. The following example sets the zone name to
us-east1-b .
gcloud config set compute/zone us-east1-b
Setting properties using environment variables
You can also set properties using environment variables. Each property has a
corresponding environment variable that can be used to set it. The name of the
environment variable follows the CLOUDSDK_SECTION_NAME_PROPERTY_NAME pattern.
For example, you can set the core/project and compute/zone properties as
follows:
CLOUDSDK_CORE_PROJECT= PROJECT_NAME
CLOUDSDK_COMPUTE_ZONE= ZONE_NAME
Note: The environment variable values take precedence over property values
set using gcloud config set .
Unsetting properties
To unset a property in the active configuration, use
gcloud config unset :
gcloud config unset disable_usage_reporting
Available Properties
The list of all properties can be found by running
gcloud topic configurations
or gcloud config set --help and looking
for the Available Properties section.
What's next
Read gcloud CLI configurations to
learn more about configurations.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
