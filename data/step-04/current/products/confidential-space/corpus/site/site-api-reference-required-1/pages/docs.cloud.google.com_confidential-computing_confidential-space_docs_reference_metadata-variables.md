---
title: "Workload metadata variables \_|\_ Confidential Space \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/metadata-variables
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/metadata-variables
  title: "Workload metadata variables \_|\_ Confidential Space \_|\_ Google Cloud\
    \ Documentation"
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
Workload metadata variables
Stay organized with collections
Save and categorize content based on your preferences.
Workload operator
You can change the Confidential Space workload VM behavior by passing variables
into the --metadata option when you create the VM.
To pass in multiple variables, first set the delimiter by prefixing the
--metadata value with ^~^ . This sets the delimiter to ~ , as , is used in
variable values.
For example:
metadata="^~^tee-restart-policy=Always ~ tee-image-reference=us-docker.pkg.dev/ WORKLOAD_AUTHOR_PROJECT_ID / REPOSITORY_NAME / WORKLOAD_CONTAINER_NAME :latest"
The following table details the metadata variables you can set for your
workload VM.
Note: Some metadata variables can be affected by launch policies set by workload authors.
Metadata key
Type
Description and values
tee-image-reference
Interacts with:
Data collaborators : The
container.image_reference assertion.
String
Required. This points to the location of the workload container.
Example
tee-image-reference=us-docker.pkg.dev/ WORKLOAD_AUTHOR_PROJECT_ID / REPOSITORY_NAME / WORKLOAD_CONTAINER_NAME :latest
tee-added-capabilities
Interacts with:
Workload author : The
allow_capabilities launch policy.
JSON string array
Adds additional
Linux capabilities to the workload container.
Example
tee-added-capabilities="[\"CAP_SYS_ADMIN\", \"CAP_SYS_CHROOT\"]"
tee-cgroup-ns
Interacts with:
Workload author : The
allow_cgroups launch policy.
Boolean
Defaults to false . When set to true ,
enables a namespaced cgroup mount at /sys/fs/cgroup .
Example
tee-cgroup-ns=true
tee-cmd
Interacts with:
Workload author : The
allow_cmd_override launch policy.
Data collaborators : The
container.cmd_override assertion.
JSON string array
Overrides the
CMD instructions specified in the workload container's
Dockerfile .
Example
tee-cmd="[\"params1\", \"params2\"]"
tee-container-log-redirect
Interacts with:
Workload author : The
log_redirect launch policy.
Enumeration
Outputs STDOUT and STDERR from the
workload container to Cloud Logging or serial console, in the
confidential-space-launcher field.
The valid values are:
false : (default) no logging occurs.
true : outputs to the serial console and
Cloud Logging.
cloud_logging : outputs to Cloud Logging only.
serial : outputs to the serial console only.
A high log volume in the serial console might impact workload
performance.
Example
tee-container-log-redirect=true
tee-dev-shm-size-kb
Integer
Sets the size in kB of the /dev/shm shared memory
mount.
Example
tee-dev-shm-size-kb=65536
tee-env- ENVIRONMENT_VARIABLE_NAME
Interacts with:
Data collaborators : The
container.env and
container.env_override assertions.
String
Sets environment variables in the workload container. The workload
author must also add the environment variable names to the
allow_env_override launch policy, or they won't
be set.
Example
tee-env-example-env-1='value-1'~tee-env-example-env-2='value-2'
tee-impersonate-service-accounts
Interacts with:
Data collaborators : The
google_service_accounts assertion.
String
A list of service accounts that can be impersonated by the workload
operator. The workload operator must be
allowed to impersonate the service accounts .
Multiple service accounts can be listed, separated by commas.
Example
tee-impersonate-service-accounts= SERVICE_ACCOUNT_NAME_1 @ WORKLOAD_OPERATOR_PROJECT_ID .iam.gserviceaccount.com, SERVICE_ACCOUNT_NAME_2 @ WORKLOAD_OPERATOR_PROJECT_ID .iam.gserviceaccount.com
tee-install-gpu-driver
Interacts with:
Data collaborators : The
nvidia_gpu.cc_mode assertion.
Boolean
Whether to install NVIDIA's Confidential Computing GPU driver.
Requires a machine type that supports NVIDIA Confidential Computing ( Preview ).
Example
tee-install-gpu-driver=true
tee-monitoring-memory-enable
Interacts with:
Data collaborators : The
instance_memory_monitoring_enabled assertion.
Workload author : The
monitoring_memory_allow launch policy.
Boolean
Defaults to false . When set to true ,
enables memory usage monitoring. The metrics collected by the
Confidential VM are of the
guest/memory/bytes_used type, and can be viewed
in Cloud Logging or
Metrics Explorer .
Example
tee-monitoring-memory-enable=true
tee-mount
Interacts with:
Workload author : The
allow_mount_destinations launch policy.
String
A list of semicolon-separated mount definitions. A mount definition
consists of a comma-separated list of key-value pairs, requiring
type , source , and
destination . destination must be an
absolute path and type / source must be
tmpfs .
Example
type=tmpfs,source=tmpfs,destination=/tmp/tmpfs,size=12345;type=tmpfs,source=tmpfs,destination=/run/workload
tee-restart-policy
Interacts with:
Data collaborators : The
container.restart_policy assertion.
Enumeration
The restart policy of the container launcher when the workload
stops.
The valid values are:
Never (default)
Always
OnFailure
This variable is only supported by the production Confidential Space
image.
Example
tee-restart-policy=OnFailure
tee-signed-image-repos
Interacts with:
Data collaborators : The
container.image_signatures assertion.
String
A list of comma-separated container repositories that store the
signatures that are generated by
Sigstore Cosign .
Example
tee-signed-image-repos=us-docker.pkg.dev/projectA/repo/example,us-docker.pkg.dev/projectB/repo/example,us-docker.pkg.dev/projectC/repo/example
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
