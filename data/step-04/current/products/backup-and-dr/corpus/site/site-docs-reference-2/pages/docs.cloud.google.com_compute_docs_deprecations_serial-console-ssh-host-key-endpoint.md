---
title: "Serial console SSH host key endpoint deprecation \_|\_ Compute Engine \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/deprecations/serial-console-ssh-host-key-endpoint
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/deprecations/serial-console-ssh-host-key-endpoint
  title: "Serial console SSH host key endpoint deprecation \_|\_ Compute Engine \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Resources
Send feedback
Serial console SSH host key endpoint deprecation
Stay organized with collections
Save and categorize content based on your preferences.
Compute Engine provides the interactive serial console
for troubleshooting malfunctioning instances. When you connect to the serial
console using an SSH client, Compute Engine provides an SSH key so that
you can authenticate the connection.
As of March 31, 2025, the serial console SSH key endpoint is deprecated and a
new serial SSH key endpoint is available.
Deprecated endpoint :
https://www.gstatic.com/vm_serial_port/ REGION / REGION .pub
New endpoint :
https://www.gstatic.com/vm_serial_port_public_keys/ REGION / REGION .pub
To use the new endpoint, do one of the following, depending on how you connect
to the serial console:
Connect using the Google Cloud console : no action is required. Connections
from Google Cloud console don't use the endpoint.
Connect using the Google Cloud CLI :
update gcloud CLI to
version 515.0.0 or later.
Connect using third-party SSH clients : use the new endpoint, as described
in Validate third-party SSH client connections .
You cannot use the deprecated endpoint after March 31, 2026.
Shutdown schedule
The following table lists the shutdown schedule for the
https://www.gstatic.com/vm_serial_port/ REGION / REGION .pub
server SSH key endpoint.
Date
Event
March 31, 2025
The https://www.gstatic.com/vm_serial_port/ REGION / REGION .pub server SSH key endpoint was deprecated.
March 31, 2026
The https://www.gstatic.com/vm_serial_port/ REGION / REGION .pub server SSH key endpoint shutdown.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
