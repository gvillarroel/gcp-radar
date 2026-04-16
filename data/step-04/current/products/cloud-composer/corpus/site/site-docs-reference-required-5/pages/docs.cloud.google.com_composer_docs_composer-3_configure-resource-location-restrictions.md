---
title: "Configure resource location restrictions \_|\_ Cloud Composer \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-3/configure-resource-location-restrictions
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-3/configure-resource-location-restrictions
  title: "Configure resource location restrictions \_|\_ Cloud Composer \_|\_ Google\
    \ Cloud Documentation"
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
Configure resource location restrictions
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page shows how to configure
resource location restrictions
so that your data stored by Cloud Composer is kept within
the locations you specify.
How location restrictions work
Location restrictions for Cloud Composer are determined based
on the organizational policy that is applied to the project where
the Cloud Composer environment is created. This policy is assigned
either within the project or is inherited from the organization.
With location restrictions enabled, it is not possible to create
an environment in a region that is prohibited by the policy. If a region
is listed in the Deny list, or is not listed in the Allow list, then you
cannot create environments in this region.
To enable the creation of environments, the policy must allow the whole region
and not a specific zone within this region. For example, the europe-west3
region must be allowed by the policy in order to create
Cloud Composer environments in this region.
Cloud Composer checks location restrictions at:
Environment creation.
Environment upgrade, if any additional resources are created during the
operation.
Environment update, for older environments that do not enforce location
restrictions on Cloud Composer dependencies.
In addition to checking the location restrictions, Cloud Composer
does the following:
Stores user-customized Airflow images in regional Artifact Registry
repositories. As an example, such images are created when you install
custom PyPI images in your environment.
If the US multi-region is explicitly prohibited by the
policy, Cloud Build use is disabled. In this case, user-customized
Airflow images are built in your environment's cluster.
Install a Python dependency to a private IP environment with resource location restrictions
If you set resource location restrictions for your project, then
Cloud Build can't be used to install Python packages. As a consequence,
direct access to repositories on the public internet is disabled.
To install Python dependencies in a Private IP environment when your
location restrictions don't allow the US multi-region , use
one of the following options:
Use a private
PyPI repository hosted in your VPC network .
Use a
proxy server
in your VPC network to connect to a PyPI repository on the public
internet. Specify the proxy address in the /config/pip/pip.conf file in
the Cloud Storage bucket.
If your security policy permits access to your VPC network from external
IP addresses, you can configure Cloud NAT .
Store the Python dependencies in the dags folder in
the Cloud Storage bucket, to
install them as local libraries .
This might not be a good option if the dependency tree is large.
Restrict locations for Cloud Composer logs
If your Cloud Composer logs contain sensitive data, you might want
to redirect Cloud Composer logs to a regional
Cloud Storage bucket. To do so, use
a log sink . After you redirect logs to
a Cloud Storage bucket, your logs are not sent to Cloud Logging.
Caution: To get support from Cloud Customer Care, you might need
to grant Google support engineers access to the Cloud Composer logs
stored in Cloud Storage.
gcloud
Create a new Cloud Storage bucket.
gcloud storage buckets create gs:// BUCKET_NAME --location = LOCATION
Replace:
LOCATION with the region where the environment is located.
BUCKET_NAME with the name of the bucket. For example,
composer-logs-us-central1-example-environment .
Create a new log sink.
gcloud logging sinks create \
composer-log-sink- ENVIRONMENT_NAME \
storage.googleapis.com/ BUCKET_NAME \
--log-filter "resource.type=cloud_composer_environment AND \
resource.labels.environment_name= ENVIRONMENT_NAME AND \
resource.labels.location= LOCATION "
Replace:
ENVIRONMENT_NAME with the name of the environment.
BUCKET_NAME with the name of the bucket.
LOCATION with the region where the environment is located.
The output of the previous command contains the service
account number. Grant the Storage Object Creator role to this
service account:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount: SA_NUMBER @gcp-sa-logging.iam.gserviceaccount.com" \
--role = 'roles/storage.objectCreator' \
--condition = None
Replace:
PROJECT_ID with the
Project ID .
SA_NUMBER with the service account number provided by
the gcloud logging sinks create command on the previous step.
Exclude the logs for your environment from Logging.
Caution: Audit logs cannot be excluded. They are
always sent to the default storage.
gcloud logging sinks update _Default \
--add-exclusion name = ENVIRONMENT_NAME -exclusion,filter = \
"resource.type=cloud_composer_environment AND \
resource.labels.environment_name= ENVIRONMENT_NAME AND \
resource.labels.location= LOCATION "
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
What's next
Cloud Composer security overview
Access control
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
