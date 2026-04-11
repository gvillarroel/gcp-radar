---
title: "Step 6: Execute deployment \_|\_ Google Cloud Cortex Framework \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/cortex/docs/deployment-step-six
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cortex/docs/deployment-step-four
source_metadata:
  url: https://docs.cloud.google.com/cortex/docs/deployment-step-six
  title: "Step 6: Execute deployment \_|\_ Google Cloud Cortex Framework \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Cortex Framework
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Step 6: Execute deployment
This page describes the sixth step to deploy Cortex Framework Data Foundation, the core
of Cortex Framework. In this step, you execute the deployment of
Cortex Framework Data Foundation.
Note: The steps outlined in this page are specifically designed for
deploying Cortex Framework Data Foundation from the official GitHub repository .
Build process
After configuring the config.json
file as described in Step 5: Configure deployment ,
follow these instructions to build your process.
Run the following command to locate yourself in the cloned repository:
cd cortex-data-foundation
Run the build command with the target log bucket:
gcloud builds submit \
--substitutions = _GCS_BUCKET = LOGS_BUCKET_NAME ,_BUILD_ACCOUNT = 'projects/ SOURCE_PROJECT /serviceAccounts/ CLOUD_BUILD_SA @ SOURCE_PROJECT .iam.gserviceaccount.com'
Replace the following:
LOGS_BUCKET_NAME with the bucket name for logs storage.
Cloud Build Service Account needs access to write them here.
SOURCE_PROJECT with the source project.
CLOUD_BUILD_SA with the cloud build service account ID created in deplyoment step 4.
Follow the main build process from looking at the logs in the terminal
or in the Cloud Build console ,
if you have enough permissions. See the following images for more reference.
Figure 1 . Example of viewing logs progress in the terminal.
Figure 2 . Example of viewing logs progress in the console.
Track the child build steps triggered from the Cloud Build
console or within the logs created from the steps. See the following images for
more reference.
Figure 3 . Example of tracking child build steps in the console.
Figure 4 . Example of tracking child build steps within the logs.
Identify any issues with individual builds. Correct errors, if any. It's
recommended to paste the generated SQL into BigQuery to identify and
correct the errors. Most errors are related to fields that are selected,
but not present in the replicated source. The BigQuery UI helps to
identify and comment those out.
Figure 5 . Example of identifying issues through Cloud Build logs.
Move files to the Cloud Composer (Airflow) DAG bucket
If you opted to generate integration or CDC files and have an instance of
Cloud Composer (Airflow), you can move them into their final bucket
with the following command:
gcloud storage -m cp -r gs:// OUTPUT_BUCKET /dags/ gs:// COMPOSER_DAG_BUCKET /
gcloud storage -m cp -r gs:// OUTPUT_BUCKET /data/ gs:// COMPOSER_DAG_BUCKET /
Replace the following:
OUTPUT_BUCKET with the output bucket.
COMPOSER_DAG_BUCKET with the
Cloud Composer (Airflow) DAG bucket.
Note: This step is only applicable if you have an instance of Airflow running,
as Airflow is commonly used to manage and orchestrate data pipelines.
Customize and prepare for upgrade
Many enterprise customers have specific customizations of their systems, such as
additional documents in a flow or specific types of a record. These are specific
to each customer and configured by functional analysts as the business needs arise.
Cortex utilizes ## CORTEX-CUSTOMER tags in code to denote places where such
customizations are likely required. Use the command grep -R CORTEX-CUSTOMER to
check all ## CORTEX-CUSTOMER comments that you should customize.
In addition to the CORTEX-CUSTOMER tags, you might need to further
customize the following by committing all of these changes with a clear
tag in the code to your own forked or cloned repository:
Adding business rules.
Adding other datasets and joining them with existing views or tables
Reusing the provided templates to call additional APIs.
Modifying deployment scripts.
Adapting some tables or landed APIs to include additional fields
not included in the standard.
Adopt a CI/CD pipeline that works for your organization to keep
these enhancements tested and your overall solution in a reliable
and robust state. A pipeline can reuse the cloudbuild.yaml
scripts to trigger end-to-end deployment periodically, or based on
git operations depending on your repository of choice by
automating builds .
Use the config.json file to define different sets of projects and
datasets for development, staging, and production environments. Use
automated testing with your own sample data to ensure the models
always produce what you expect.
Tagging your own changes visibly in your fork or clone of a
repository together with some deployment and testing automation helps
perform upgrades .
Support
If you encounter any issues or have feature requests related to these models
or deployers, create an issue in the Cortex Framework Data Foundation repository. To assist with gathering the necessary
information, execute support.sh from the cloned directory. This script
guides you through a series of steps to help troubleshoot.
For any Cortex Framework requests or issues, go to the
support section in the overview page.
Looker Blocks and Dashboards
Take advantage of the available Looker Blocks and Dashboards. These
are essentially reusable data models for common analytical patterns and data
sources for Cortex Framework. For more information, see
Looker Blocks and Dashboards overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
