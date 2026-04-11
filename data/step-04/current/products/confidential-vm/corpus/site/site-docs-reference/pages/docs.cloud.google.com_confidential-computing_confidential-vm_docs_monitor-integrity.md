---
title: "Monitor Confidential VM integrity \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/monitor-integrity
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/monitor-integrity
  title: "Monitor Confidential VM integrity \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Confidential VM
Guides
Send feedback
Monitor Confidential VM integrity
Stay organized with collections
Save and categorize content based on your preferences.
Integrity monitoring is a feature of both
Shielded VM and Confidential VM
that helps you to understand and make decisions about the state of your VM
instances. It makes use of both Cloud Monitoring and
Cloud Logging .
Integrity monitoring is enabled by default on new Confidential VM instances. To
learn how to change integrity monitoring settings—including toggling
Secure Boot, vTPM, and integrity monitoring itself—see
Modifying Shielded VM options .
View integrity reports
You can use Cloud Monitoring to view integrity validation events and set
alerts for them, and Cloud Logging to review the details of those events.
To learn how to view integrity validation events and set alerts on them, see
Monitoring VM boot integrity by using Monitoring .
View launch attestation report events
Each time an AMD SEV-based Confidential VM instance boots, a launch attestation
report event is generated as part of the integrity validation events for the VM.
The report event contains the following useful information:
integrityEvaluationPassed : The result of an integrity check performed by
the Virtual Machine Monitor on the measurement computed by SEV.
sevPolicy : The SEV policy bits set for this VM. Policy bits are set at
Confidential VM instance launch to enforce constraints, such as whether debug
mode is enabled.
To view a launch attestation report event in an integrity report, complete
the following steps:
In the Google Cloud console, go to the VM instances page.
Go to VM instances
In the VM instances table, find your Confidential VM instance and then click
its name.
In the Logs section, click Cloud Logging .
Cloud Logging opens, and the integrity report populates with integrity
validation events for the given time range. You might need to change the
time range of the log (next to the Search all fields box) to capture the
boot events.
Find a report that has a type of cloud_integrity.IntegrityEvent and a
bootCounter of 0 , and then expand it.
To view the data for a specific field, click the
arrow_right expander arrow. To expand
all fields, click Expand nested fields .
Inside the jsonPayload key, look for the sevLaunchAttestationReportEvent
key to view the report event. Expand following widget for an example of a
typical integrity report.
Integrity report example
{
insertId : "0"
jsonPayload : {
@ type : "type.googleapis.com/cloud_integrity.IntegrityEvent"
bootCounter : "0"
sevLaunchAttestationReportEvent : {
integrityEvaluationPassed : true
sevPolicy : {
debugEnabled : false
domainOnly : false
esRequired : false
keySharingAllowed : false
minApiMajor : 0
minApiMinor : 0
sendAllowed : true
sevOnly : true
}
}
}
logName : "projects/ PROJECT_ID /logs/compute.googleapis.com %2F shielded_vm_integrity"
receiveTimestamp : "2023-08-06T23:43:09.422303036Z"
resource : {
labels : {
instance_id : "7638570949330964203" ( instance_name : VM_INSTANCE_NAME )
project_id : " PROJECT_ID "
zone : " VM_ZONE "
}
type : "gce_instance"
}
severity : "NOTICE"
timestamp : "2023-08-06T23:43:07.407511786Z"
}
Monitor boot integrity with Shielded VM
You can also take advantage of Secure Boot and Measured Boot, features of
Shielded VM , to monitor your
Confidential VM instance's integrity.
Secure Boot
Secure Boot helps ensure that the Confidential VM instance's system only runs
authentic software by verifying the digital signature of all boot components and
ending the boot process if signature verification fails. Firmware that is signed
and verified by Google's Certificate Authority establishes the root of trust for
Secure Boot, which verifies your VM's identity and checks that it is part of
your specified project and region.
Secure Boot is not enabled by default. To learn how to enable this feature and
for more information, see Secure Boot .
Measured Boot
Measured Boot is enabled by a Confidential VM instance's Virtual Trusted Platform
Module (vTPM) and helps guard against malicious modifications to the instance.
Measured Boot monitors the integrity of a Confidential VM instance's bootloader,
kernel, and boot drivers.
During Measured Boot of a Confidential VM instance, PCR[0] (a
platform control register )
is extended with a vendor-specific event, GceNonHostInfo , that encodes that
SEV is in use.
Measured Boot is enabled by default in new Confidential VM instances. Learn more
about Measured Boot .
What's next
Learn how to
set alerts on integrity validation events
and
determine the cause of boot integrity validation failure .
Learn about one approach to automating responses to integrity monitoring events .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
