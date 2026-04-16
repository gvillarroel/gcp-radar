---
title: "Configure large message payload support in Apigee hybrid \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/configure-large-payload-support
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/configure-large-payload-support
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/configure-large-payload-support
  title: "Configure large message payload support in Apigee hybrid \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Configure large message payload support in Apigee hybrid
Stay organized with collections
Save and categorize content based on your preferences.
Version 1.16 (latest) keyboard_arrow_down
Supported versions:
v1.16 (latest)
v1.15
v1.14
List of supported versions
Unsupported versions:
v1.13
v1.12
v1.11
v1.10
v1.9
v1.8
v1.7
v1.6
v1.5
v1.4
v1.3
v1.2
v1.1
Overview
Apigee hybrid supports large message payloads up to 30MB with a theoretical maximum of 75MB. The default message payload size is 10MB. See Message payload size .
Configure support for message payloads up to 30MB
To enable environments in your hybrid installation to support large message payloads, you need to make the following changes to your runtime configuration:
Increase the heap size to at least 4Gi.
Increase memory limits to at least 6Gi.
Increase memory resource requests to at least 4Gi.
Note: Resources for memory depend on how much head room exists on your nodes.
You can configure these settings for individual environments or for all environments in your installation.
Configure individual environments to support large message payloads
If the proxies configured to support large message payloads have endpoints in only one or a few environments in your installation, you can configure the environments to support large payloads. This avoids adding additional memory to environments that will not need to support large payloads.
To configure individual environments to support large message payloads, you can use the envs.components.runtime properties. Make the following changes to your overrides.yaml file:
Add the following stanza to your overrides.yaml file:
envs:
- name: ENV_NAME
components.
runtime:
cwcAppend:
bin_setenv_max_mem: 4096Mi # Increase max heap size to 4 gigs
resources:
requests:
memory: 4Gi
limits:
memory: 6Gi
Important: You must set values for both envs.components.runtime.resources.limits.memory and envs[].components.runtime.resources.requests.memory for this environment. Setting either of the properties for this environment causes Apigee not to use the values of:
runtime.resources.limits.memory
runtime.resources.requests.memory
See:
envs.components.runtime.resources.limits.memory
envs.components.runtime.resources.requests.memory
Upgrade the apigee-env chart for each environment you are updating:
Dry run:
helm upgrade ENV_RELEASE_NAME apigee-env/ \
--install \
--namespace APIGEE_NAMESPACE \
--set env= ENV_NAME \
-f OVERRIDES_FILE \
--dry-run=server
ENV_RELEASE_NAME is a name used to keep track of installation and upgrades of the
apigee-env chart. This name must be unique from the other Helm release names in your installation.
Usually this is the same as ENV_NAME . However, if your environment has the same name
as your environment group, you must use different release names for the environment and environment group,
for example dev-env-release and dev-envgroup-release . For more information on releases
in Helm, see Three big concepts in the
Helm documentation.
ENV_NAME is the name of the environment you are upgrading.
OVERRIDES_FILE is your edited overrides.yaml file.
Upgrade the chart:
Dry run:
helm upgrade ENV_RELEASE_NAME apigee-env/ \
--install \
--namespace APIGEE_NAMESPACE \
--set env= ENV_NAME \
-f OVERRIDES_FILE
Configure all environments to support large message payloads
Changes to your runtime stanza will set the heap and memory limits for all environments in your installation. You can override these settings for individual environments with the envs.components.runtime properties.
Add the following stanza to your overrides.yaml file:
runtime:
cwcAppend:
bin_setenv_max_mem: 4096Mi # Increase max heap size to 4 gigs
resources:
requests:
memory: 4Gi
limits:
memory: 6Gi
See:
runtime.resources.limits.memory
runtime.resources.requests.memory
Upgrade the apigee-env chart for each environment in your installation:
Dry run:
helm upgrade ENV_RELEASE_NAME apigee-env/ \
--install \
--namespace APIGEE_NAMESPACE \
--set env= ENV_NAME \
-f OVERRIDES_FILE \
--dry-run=server
Upgrade the chart:
helm upgrade ENV_RELEASE_NAME apigee-env/ \
--install \
--namespace APIGEE_NAMESPACE \
--set env= ENV_NAME \
-f OVERRIDES_FILE
Guidelines for message payloads between 30MB and 75MB
Determining the optimal heap size for a Message Processor for large payload scenarios depends on
your specific use case; however, Apigee offers general guidelines to assist in this process.
Note: These recommendations are intended for large payload requests
between 30MB and 75MB for Apigee hybrid.
To calculate heap size per Message Processor (MP), use the following values:
Q - Max QPS per MP pod
L - Round Trip latency per request (95th percentile of expected latency)
C - Total concurrency per MP, the maximum number of requests that can
simultaneously persist in the MP at any given time. This is calculated as C = Q * L .
P_req - Payload size (in MB) of request sent by Client to Apigee
P_resp - Payload size (in MB) of response received from Target
S - Safety Factor (Apigee recommends a range of 1.5 - 2)
BASE_HEAP - Base heap size to account for non-request related resources
such as proxy configurations. (Apigee recommends 3072Mi )
Accounting for the safety factor S , along with a base heap size, the total heap per
MP is calculated as follows:
Heap size per MP = BASE_HEAP + C * (P_req + P_resp) * S
The base overrides configuration for Large Payload scenario is:
envs:
components:
runtime:
resources:
requests:
cpu: 2000m
memory: 2Gi
limits:
cpu: 4000m
memory: 4Gi
cwcAppend:
bin_setenv_max_mem: 3072Mi # base heap size
Example calculation
The following is an example calculation with the following values:
Max QPS, Q : 2
Latency, L : 7s
Request payload size, P_req : 40MB
Response payload size, P_resp : 40MB
Safety factor, S : 1.5
Base heap size, BASE_HEAP : 3072Mi
Heap size = 3072 + (2 * 7) * (40+40) * 1.5 = 4752Mi
limits.memory is expected to be 1Gi over the recommended heap.
In this example, you would add the following to your overrides.yaml :
envs:
components:
runtime:
resources:
requests:
memory: 4Gi
limits:
memory: 5.75Gi # approximately 1Gi over 4.75Gi
cwcAppend:
bin_setenv_max_mem: 4752Mi
Considerations
Traffic Bursts
HPA ensures that MPs scale as QPS goes up. However, you can expect HPA to take about 60 seconds
to trigger scaling up. An unreasonably high burst of traffic can lead to Out of Memory (OOM) errors on your MP.
If you anticipate such bursts of traffic, please scale up heap usage by using a safety factor that
seems appropriate. For example, S = 2 .
Heap = BASE_HEAP + (Q * L) * (P_req + P_resp) * 2
Policy Usage
The calculation above does not include Policy usage. Apigee allows customers to make copies of
their request / response payloads and this can significantly alter the heap usage.
For example, if you have a JavaScript policy that makes 3 copies of your entire target response,
the equation to use would be:
Heap per MP = Base Heap + (Q * L) * (P_req + P_resp * 4) * S
Example policies that could potentially increase memory usage are:
AssignMessage
JavaScript Callout
JavaCallout
Monitoring
The guidelines provided here are intended to serve as a starting point. Monitoring and alerting
of memory usage is highly encouraged. Use an increased Safety Factor if Heap usage is consistently high.
See also:
Message payload size
envs[].components.runtime.resources.limits.memory
envs[].components.runtime.resources.requests.memory
runtime.resources.limits.memory
runtime.resources.requests.memory
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
