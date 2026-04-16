---
title: "Use a custom environment's bucket \_|\_ Cloud Composer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-3/custom-bucket
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-3/custom-bucket
  title: "Use a custom environment's bucket \_|\_ Cloud Composer \_|\_ Google Cloud\
    \ Documentation"
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
Use a custom environment's bucket
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
You can specify a custom Cloud Storage bucket as an environment's bucket
when you create an environment. Your environment uses this
bucket in the same way as the default environment's bucket ,
and the default environment's bucket is not created.
With a custom bucket, you can:
Use a bucket configuration that is compliant with your requirements.
Use a continuously existing bucket for periodic development or testing
purposes.
Reuse an existing bucket from a previous environment and keep CI/CD and data
integrations.
Delete and re-create an environment without the need to transfer data between
buckets.
Pre-populate the custom bucket with required data, such as your DAG files,
and then create an environment.
Before you begin
The custom bucket must be located in the same region as the environment.
Multi-region and dual-region buckets are not supported.
The custom bucket and the environment must be in the same project.
The custom bucket must have the
Standard storage class .
The custom bucket must have no
retention policies or retention policy locks
applied to it.
The custom bucket must not have hierarchical namespace
enabled.
It is not possible to use the same custom bucket with several environments at
the same time. Cloud Composer generates an error if the
specified bucket is already used by another environment. It is possible to
delete an environment and then use the same bucket for another environment.
Cloud Composer doesn't add any missing IAM
permissions to the Cloud Storage bucket when it is used to create an
environment. Make sure that the environment's service account has
permissions from the Composer Worker role on the bucket.
Warning: Cloud Composer does not alter the encryption settings of
a custom bucket and thus does not encrypt it with a CMEK key (even
if the project's policies require encryption). Specifically, the custom
bucket's encryption is not changed if your environment uses CMEK encryption.
Your custom bucket follows policies of the project that it belongs to. You can
manually encrypt the environment's bucket with CMEK keys before
you create an environment.
Create an environment with a custom bucket
Console
To specify a custom Cloud Storage bucket when you create an
environment:
On the Create environment page, in the Advanced configuration
section, click Show advanced configuration .
Select Custom bucket .
In the Bucket name field, specify or select a bucket.
gcloud
When you create an environment, the --storage-bucket argument specifies the
environment's custom bucket.
gcloud composer environments create ENVIRONMENT_NAME \
--location LOCATION \
--storage-bucket CUSTOM_STORAGE_BUCKET
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
CUSTOM_STORAGE_BUCKET : the name of a Cloud Storage bucket. You
can also specify the bucket URI (with the gs:// prefix).
Example:
gcloud composer environments create example-environment \
--location us-cental1 \
--storage-bucket us-central1-example-bucket
API
When you create an environment, in the Environment
> StorageConfig resource, specify
a custom bucket for your environment.
{
"name" : "projects/ PROJECT_ID /locations/ LOCATION /environments/ ENVIRONMENT_NAME " ,
"storageConfig" : {
"bucket" : " CUSTOM_STORAGE_BUCKET "
}
}
Replace the following:
PROJECT_ID : the Project ID .
LOCATION : the region where the environment is located.
ENVIRONMENT_NAME : the name of your environment.
CUSTOM_STORAGE_BUCKET : the name of a Cloud Storage bucket
(without the gs:// prefix).
Example:
// POST https://composer.googleapis.com/v1/{parent=projects/*/locations/*}/environments
{
"name" : "projects/example-project/locations/us-central1/environments/example-environment" ,
"storageConfig" : {
"bucket" : "us-central1-example-bucket"
}
}
Terraform
When you create an environment, the bucket field in the
storage_config block specifies the environment's custom bucket.
Caution: If you change the value of this field for an existing environment,
Terraform deletes the existing environment and creates it again.
resource "google_composer_environment" "example" {
name = " ENVIRONMENT_NAME "
region = " LOCATION "
storage_config {
bucket = CUSTOM_STORAGE_BUCKET
}
}
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
CUSTOM_STORAGE_BUCKET : the name of a Cloud Storage bucket. You
can also specify the bucket URI (with the gs:// prefix).
Example:
resource "google_composer_environment" "example" {
name = "example-environment"
region = "us-central1"
storage_config {
bucket = "gs://us-central1-example-bucket"
}
}
What's next
About the environment's bucket
CMEK in Cloud Composer
Create environments
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
