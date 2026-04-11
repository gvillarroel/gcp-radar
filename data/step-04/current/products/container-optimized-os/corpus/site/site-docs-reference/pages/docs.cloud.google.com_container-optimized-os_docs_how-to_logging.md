---
title: "Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/container-optimized-os/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging
  title: "Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Container-Optimized OS
Guides
Send feedback
Using Cloud Logging with Container-Optimized OS
Stay organized with collections
Save and categorize content based on your preferences.
Container-Optimized OS includes a logging agent which exports some
system and container logs to Cloud Logging. Up until
Container-Optimized OS 101, x86-based Container-Optimized OS images used
a containerized logging agent based on fluentd. Container-Optimized OS 105
started shipping an alternative logging agent implementation, fluent-bit.
As of Container-Optimized OS 109, the fluent-bit logging agent is the default.
The legacy logging agent, fluentd, will be removed in
Container-Optimized OS 113.
All versions of Arm-based Container-Optimized OS images ship the fluent-bit
logging agent.
Note: Logging is automatically available when you choose Container-Optimized OS
as the node image for running your Google Kubernetes Engine clusters. These instructions
are for when you are using Container-Optimized OS outside of GKE,
such as in Compute Engine.
Enable the logging agent
The logging agent is disabled by default. You can enable this feature when
creating a new instance or by updating an existing instance.
Access Requirements
Cloud Logging provides IAM
roles
that you can use to grant appropriate access. In order to view your logs in a project,
you must have the roles/logging.viewer role and applications must have permission
to write logs. You can grant this permission by assigning the
IAM role roles/logging.logWriter to the service account for an
application.
For more information about permissions and roles, see
Predefined roles .
Create an instance with a logging agent enabled
Console
To run a Compute Engine instance on Container-Optimized OS with the fluent-bit logging
agent enabled, perform the following:
Open the Compute Engine instance creation page on Google Cloud console.
Create a new Compute Engine instance
Specify a Name for your instance.
In the Boot disk section, select a Container-Optimized OS image.
Click on Management, security, disks, networking, sole tenancy to
expand additional options.
Under the Management tab, scroll to the Metadata section. Add a
new metadata entry, with Key as google-logging-enabled and Value
as true .
Optionally, specify any other options for your use case. See
Creating and configuring instances
for more details.
Click Create to create and boot the instance.
gcloud
To run a Compute Engine instance on Container-Optimized OS with the logging
agent enabled, use the gcloud compute instances create command, and include
google-logging-enabled=true in the metadata. For example:
gcloud compute instances create instance-name \
--image image-name \
--image-project cos-cloud \
--zone compute-zone \
--metadata google-logging-enabled=true
Replace the following:
instance-name : the name of your VM instance.
image-name : the name of the Container-Optimized OS image for
the instance. For example, --image=cos-113-18244-85-29 .
compute-zone : the compute zone
for your instance.
For more information on the gcloud command, see the
gcloud compute instances create
reference documentation.
For more details on creating Container-Optimized OS instances, see
Creating and configuring instances .
Selecting the logging agent
x86-based Container-Optimized OS 105 and 109 images ship two implementations
of the logging agent: fluentd (legacy) and fluent-bit.
Container-Optimized OS 105 uses fluentd by default and
Container-Optimized OS 109 uses fluent-bit by default. You can use the google-logging-use-fluentbit
metadata entry to change the default behavior.
To use fluent-bit logging agent on Container-Optimized OS 105 set
google-logging-use-fluentbit value to true .
To use fluentd logging agent on Container-Optimized OS 109 set
google-logging-use-fluentbit value to false .
Enable the logging agent in project metadata
Starting in milestone 97 ,
logging can be enabled in project metadata:
gcloud compute project-info add-metadata \
--metadata google-logging-enabled = true
Note: Metadata flags defined at instance level takes precedence over metadata
flags defined at project level.
Access logs
Console
Go to the VM instances page.
Go to the VM instances page
Click on the name of the Container-Optimized OS instance you want to access
logs from.
Under the Logs section, click Cloud Logging.
This opens the Logs Explorer for the given instance. For more information,
see Using the Logs Explorer .
Note: In the query builder, you can filter by log name. Click on Log name ,
and select the given log name. For example, cos_audit for Audit logs
or cos_containers for docker container logs.
gcloud
To access logs, use the gcloud logging read command. For example:
gcloud logging read \
"resource.type=gce_instance AND resource.labels.instance_id= instance-id " \
--limit 10 \
--format json \
--freshness 30d
Replace the following:
instance-id : the id of your VM instance.
This command attempts to read logs from the VM instance with
instance-id , limiting to 10 logs, in JSON format, from the last 30
days.
For more information on the gcloud command, see the
gcloud logging read reference
documentation.
How does it work?
The logging agent is configured by default to send logs from certain system
critical services and user application containers to the Cloud Logging
backend. For example, logs from docker containers, selected systemd services,
audit logs, journal log errors, etc. See Container-Optimized OS specific
configuration source ( x86 images and Arm images )
for complete default logging configuration.
For x86 images of Container-Optimized OS 105 and older, the logging agent is
Google Cloud Observability's containerized legacy Logging agent. The docker command that
starts the logging agent is defined in the Container-Optimized OS
source for stackdriver-logging systemd service .
The version of the containerized agent being run is defined in the Container-Optimized OS
source app-admin/stackdriver directory .
For Arm images of all versions and x86 images for Container-Optimized OS 109 and
later, the logging agent is a built-in OS package called
fluent-bit .
The agent is built into the OS and updated along with the OS images.
Known Limitations
Compatibility with gcplogs driver
Starting with
milestone 89 ,
if the logging agent included with Container-Optimized OS is enabled and Docker
gcplogs logging driver is enabled for one or more containers, excessive
warning logs may be output by the included logging agent. This may create log
noise and/or increase Cloud Logging related charges.
A workaround is to not use gcplogs as a Docker logging driver, and to
instead use the default driver as configured by Container-Optimized OS. Note
that the logging agent included with Container-Optimized OS will export
container logs to Cloud Logging, so using both solutions simultaneously is
not necessary.
Logging agent configuration compatibility
The logging agent is a fluentd-based container on x86-based
Container-Optimized OS images and a fluent-bit binary on Arm-based
Container-Optimized OS images. The configurations of the two agents are not
compatible. This is not a problem if you only rely on the default logging
configuration built into the OS images. However, if you have a
custom logging configuration, you might experience breakage when migrating
workloads to images that are based on a different architecture or to a
newer version of Container-Optimized OS.
References
Google Cloud Observability's legacy Logging agent
documentation . The containerized logging agent
included with Container-Optimized OS is a subset of the legacy Logging agent,
so this documentation may provide context on the agent more generally,
outside of the scope of Container-Optimized OS.
Google Cloud Observability documentation . Homepage for Google Cloud Observability
documentation; may be useful for context.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
