---
title: "Delete Cloud Composer environments \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-3/delete-environments
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-3/delete-environments
  title: "Delete Cloud Composer environments \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 3 Guides
Send feedback
Delete Cloud Composer environments
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page explains how to delete your Cloud Composer environment.
Resources that are not deleted automatically
Deleting your environment does not delete the following data in your project:
Your environment's Cloud Storage bucket.
Cloud Logging logs.
To avoid incurring charges to your Google Cloud account, export your
data and delete the environment's bucket
and Cloud Logging logs, as needed.
Note: As an alternative, you can reuse your environment's bucket by specifying
it as a custom bucket for a new environment. For example,
you can do so to preserve existing policies or CI/CD integrations.
If you use alerting policies to monitor your
environment's metrics, delete these policies before deleting your environment.
Delete a Cloud Composer environment
Console
Delete the Cloud Composer environment:
In the Google Cloud console, go to the Environments page.
Go to Environments
Select your environment and click Delete .
Wait until the environment is deleted.
Delete your environment's bucket. Cloud Composer
does not delete the environment's bucket automatically.
Warning: Deleting your environment's bucket deletes all objects stored
within the bucket, such as DAGs and plugins. You might not be able to
recover these objects, depending on the bucket's settings and the length of time since the bucket was deleted.
In the Google Cloud console, go to the Storage >
Browser page.
Go to Storage > Browser
Select the environment's bucket and click Delete . For example, this
bucket can be named us-central1-example-environ-c1616fe8-bucket .
gcloud
Delete the Cloud Composer environment:
gcloud composer environments delete ENVIRONMENT_NAME \
--location LOCATION
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
Delete your environment's bucket. Cloud Composer
does not delete the environment's bucket automatically.
Warning: Deleting your environment's bucket deletes all objects stored
within the bucket, such as DAGs and plugins. You might not be able to
recover these objects, depending on the bucket's settings and the length of time since the bucket was deleted.
gcloud storage rm gs:// BUCKET_NAME --recursive
Replace:
BUCKET_NAME with the name of your environment's bucket. For example,
this bucket can be named
us-central1-example-environ-c1616fe8-bucket .
API
To delete an environment, construct an environments.delete
API request with the environment ID.
Caution: Cloud Composer doesn't automatically delete the
environment's bucket. If it's no longer needed, delete it manually.
Terraform
To delete an environment using Terraform, remove the
Cloud Composer configuration from your overall resource
configuration and run terraform apply .
Caution: Cloud Composer does not automatically delete
the environment's bucket. If it's no longer needed, delete it manually.
What's next
Create environments
Enable and disable Cloud Composer service
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
