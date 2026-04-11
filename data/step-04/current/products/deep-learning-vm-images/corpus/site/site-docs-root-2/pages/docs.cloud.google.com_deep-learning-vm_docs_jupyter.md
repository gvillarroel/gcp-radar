---
title: "Connect to JupyterLab \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deep-learning-vm/docs/jupyter
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/deep-learning-vm/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/deep-learning-vm/docs/jupyter
  title: "Connect to JupyterLab \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Deep Learning VM Images
Guides
Send feedback
Connect to JupyterLab
Stay organized with collections
Save and categorize content based on your preferences.
When you start a Deep Learning VM Images instance, a JupyterLab session is
initialized.
To set up
SSH port forwarding ,
complete the following steps, and then access your JupyterLab session through a
local browser:
Run the following command by using the Google Cloud CLI in
your preferred terminal or in
Cloud Shell :
gcloud compute ssh \
--project PROJECT_ID \
--zone ZONE \
INSTANCE_NAME \
-- -L 8080 :localhost:8080
Replace the following:
PROJECT_ID : your
Google Cloud project ID
ZONE : the zone
where your instance is located
INSTANCE_NAME : the name of your
instance
Note: If using Cloud Shell to run the command, add a -4 to the
SSH flags to use IPv4 to connect. Example:
-- -4 -L LOCAL_PORT :localhost: REMOTE_PORT
Access your JupyterLab session through a local browser:
If you ran the command on your local machine, visit
https://localhost:8080 to access JupyterLab.
If you ran the command using
Cloud Shell ,
access JupyterLab through the
Web
Preview on port 8080.
Troubleshooting
Symptom : When using SSH port forwarding
to connect to JupyterLab ,
you are unable to connect to the instance.
Problem : You are trying to connect to the wrong TCP socket.
Solution :
On some Linux clients, the localhost resolves to
the IPv6 loopback address ( ::1 ).
Check this by using ping -c 1 localhost . If this command returns
the IPv6 address, use -L 8080:127.0.0.1:8080
(rather than -L 8080:localhost:8080 ) in the
gcloud compute ssh command.
Ensure that you connect to http://localhost:8080
(instead of https://localhost:8080 ) on your local client.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
