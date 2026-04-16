---
title: "Launch policies \_|\_ Confidential Space \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/launch-policies
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/launch-policies
  title: "Launch policies \_|\_ Confidential Space \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Confidential Space
Reference
Send feedback
Launch policies
Stay organized with collections
Save and categorize content based on your preferences.
Workload author
Launch policies override the VM metadata variables
set by workload operators to restrict malicious actions. A workload author can
set policies with a label
as part of building their container image.
For example, in a Dockerfile :
LABEL "tee.launch_policy.allow_cmd_override"="true"
In a Bazel BUILD file:
container_image(
...
labels={"tee.launch_policy.allow_cmd_override":"true"}
...
)
The available launch policies are in the following table:
Policy
Type
Description
tee.launch_policy.allow_capabilities
Interacts with:
Workload operator : The
tee-added-capabilities
metadata variable.
Boolean (default is false )
Determines if the workload operator can add additional Linux capabilities
to the workload container.
tee.launch_policy.allow_cgroups
Interacts with:
Workload operator : The
tee-cgroup-ns
metadata variable.
Boolean (default is false )
Determines if workload container is allowed to include a namespaced cgroup mount at
/sys/fs/cgroup .
tee.launch_policy.allow_cmd_override
Interacts with:
Workload operator : The
tee-cmd
metadata variable.
Data collaborators : The
container.cmd_override
assertion.
Boolean (default is false )
Determines if the
CMD
specified in the workload container's Dockerfile can be
overridden by a workload operator with the
tee-cmd
metadata value.
tee.launch_policy.allow_env_override
Interacts with:
Workload operator : The
tee-env- ENVIRONMENT_VARIABLE_NAME
metadata variable.
Data collaborators : The
container.env
and
container.env_override
assertions.
Comma-separated string
A comma-separated string of permitted environment variable names that
are allowed to be set by a workload operator with
tee-env- ENVIRONMENT_VARIABLE_NAME
metadata values.
tee.launch_policy.allow_mount_destinations
Interacts with:
Workload operator : The
tee-mount
metadata variable.
Colon-separated string
A colon-separated string of permitted mount directories the workload
operator is allowed to mount to using tee-mount .
For example: /run/tmp:/var/tmp:/tmp
tee.launch_policy.log_redirect
Interacts with:
Workload operator : The
tee-container-log-redirect
metadata variable.
Defined string
Determines how logging works if
tee-container-log-redirect
is set to true by a workload operator.
The valid values are the following:
debugonly (default): Only allow stdout and
stderr redirects when using a debug image.
always : Always allow stdout and
stderr redirects.
never : Never allow stdout and
stderr redirects.
tee.launch_policy.monitoring_memory_allow
Interacts with:
Data collaborators : The
monitoring_enabled.memory
assertion.
Workload operator : The
tee-monitoring-memory-enable
metadata variable.
Defined string
Determines how workload memory usage monitoring works if
tee-monitoring-memory-enable
is set to true by a workload operator.
The valid values are the following:
debugonly (default): Only allow memory usage monitoring
when using a debug image.
always : Always allow memory usage monitoring.
never : Never allow memory usage monitoring.
Caution : If you allow memory usage monitoring, the workload
operator can see workload memory usage metrics in
Cloud Logging and
Metrics Explorer . If your workload isn't written in a way
that prevents total memory usage from leaking sensitive information,
block this feature on production workloads.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
