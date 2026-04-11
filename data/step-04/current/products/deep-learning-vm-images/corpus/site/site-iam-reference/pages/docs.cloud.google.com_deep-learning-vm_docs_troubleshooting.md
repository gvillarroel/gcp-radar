---
title: "Troubleshooting \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deep-learning-vm/docs/troubleshooting
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility
source_metadata:
  url: https://docs.cloud.google.com/deep-learning-vm/docs/troubleshooting
  title: "Troubleshooting \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation"
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
Support
Send feedback
Troubleshooting
Stay organized with collections
Save and categorize content based on your preferences.
This page describes problems that can come up when creating Deep Learning VM Images
instances, and tells you how to address the problems.
Quota exceeded
Symptom : - Quota 'NVIDIA_P4_GPUS' exceeded. Limit: 0.0 in region
us-east1.
Problem : You do not have enough quota.
Solution : You must have GPU quota before you can create instances with GPUs.
Check the quotas page to
ensure that you have enough GPUs available in your project. If GPUs are not
listed on the quotas page or you require additional GPU quota, request a quota
increase . If your project has an
established billing history, it will receive quota automatically after you
submit the request. Free Trial accounts do not receive GPU quota by default.
Keep in mind that preemptible GPUs and normal GPUs require separate quota
requests. You can't use preemptible GPU quota for normal GPUs. Also, quota is
per region, so be sure that you are creating the instance in the region where
you have quota.
Resource not found
Symptom : - The resource 'projects/deeplearning-platform/zones/europe-west4-c/acceleratorTypes/nvidia-tesla-p4'
was not found
Problem : You are trying to create an instance with one or more GPUs in a
region where GPUs are not available (for example, an instance with a P4 GPU in
europe-west4-c ).
Solution : To determine which region has the required GPU, see
GPUs on Compute Engine .
Preemptible instances
Symptom : I can't create preemptible instance from the UI, even though I
have quota.
Solution : At this time, a preemptible instance can't be created from
Google Cloud Marketplace. You must use the CLI. Be sure to add --preemptible
when setting up your new instance.
Unable to use SSH port forwarding to connect to JupyterLab
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
Community support
Ask a question about Deep Learning VM on Stack
Overflow
or join the
google-dl-platform
Google group to discuss Deep Learning VM.
Learn more about getting support from the
community .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
