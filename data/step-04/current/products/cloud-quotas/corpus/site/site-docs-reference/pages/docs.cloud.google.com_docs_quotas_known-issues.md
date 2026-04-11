---
title: "Known issues \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/quotas/known-issues
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas/api-overview
source_metadata:
  url: https://docs.cloud.google.com/docs/quotas/known-issues
  title: "Known issues \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Cloud Quotas
Guides
Send feedback
Known issues
Stay organized with collections
Save and categorize content based on your preferences.
The following are known issues within Cloud Quotas.
Quota values during rollouts
Google Cloud sometimes increases the default quota values for resources and
APIs. These changes take place gradually, which means that during the rollout,
the quota value that appears in the Google Cloud console or Cloud Quotas API
won't reflect the new, increased quota value until the rollout completes.
If a quota rollout is in progress, an informational message appears at the top
of the Cloud Quotas page and the rolling update indicator appears
next to the quota values impacted by ongoing rollouts.
For details, see
View ongoing rollouts .
For troubleshooting steps, see
Exceeding quota values during a service rollout .
Quota preference contactEmail field is required
To update the QuotaPreference value through the Cloud Quotas API,
the contactEmail field is required. This email address cannot be a group
email.
For examples of using QuotaPreference in the API, see
Implement common use cases .
Cloud Quotas limitations in the Google Cloud console
The following limitations apply when you use Cloud Quotas in the
Google Cloud console.
Requests for adjustments on quotas that have no usage
The Google Cloud console doesn't support quota adjustment requests for quotas that
have no prior usage. However, you can still request a quota adjustment through
the REST API or Google Cloud CLI:
gcloud
Request a quota adjustment by using the gcloud CLI
REST
Request a quota adjustment by using the REST API
For example, you might clone a project and know ahead of time that you need to
increase the value for
compute.googleapis.com/local_ssd_total_storage_per_vm_family . Although you
won't see that quota available in the Google Cloud console, you can still
use the API or gcloud CLI to request a quota adjustment. For more information, see
View ongoing rollouts .
Per-user quota usage doesn't appear
The Google Cloud console doesn't display per-user quota usage.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
