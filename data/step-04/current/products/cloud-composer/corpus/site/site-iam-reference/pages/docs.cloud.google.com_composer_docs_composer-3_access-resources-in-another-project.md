---
title: "Access resources in another project \_|\_ Cloud Composer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-3/access-resources-in-another-project
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-3/access-control
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-3/access-resources-in-another-project
  title: "Access resources in another project \_|\_ Cloud Composer \_|\_ Google Cloud\
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
Access resources in another project
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes how to access resources that are located in a different
Google Cloud project than your Cloud Composer environment.
If you want to use a service account from one project to run environments in
another project, see
Using a service account from another project .
If you want to use Airflow operators to interact with Cloud Composer
environments, including environments in other projects, see
Trigger DAGs in other environments and projects .
We recommend to access resources in other Google Cloud projects in the
following way:
In your DAGs, use the default connections that are preconfigured in your
environment.
For example, the google_cloud_default connection is used by many
Google Cloud operators and is automatically configured when you
create an environment.
Grant extra IAM permissions and roles to the
service account of your environment , so that it can
access resources in a different project.
Determine the service account of your environment
To determine the service account of your environment:
Console
In Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Go to the Environment configuration tab.
The service account of your environment is listed in
the Service account field.
The value is an email address, such as
service-account-name@example-project.iam.gserviceaccount.com .
gcloud
gcloud composer environments describe ENVIRONMENT_NAME \
--location LOCATION \
--format = "get(config.nodeConfig.serviceAccount)"
The value is an email address, such as
service-account-name@example-project.iam.gserviceaccount.com .
Grant IAM roles and permissions to access resources in another project
The service account of your environment requires permissions to access
resources in another project. These roles and permissions can be different
based on the resource that you want to access.
Access a specific resource
We recommend to grant roles and permissions for specific resources, such as a
single Cloud Storage bucket located in a different project. In this
approach, you use resource-based access with conditional role bindings.
To access a specific resource:
Follow the
Configure resource-based access guide.
When granting roles and permissions, specify the
service account of your environment as a
principal.
Access a resource type
As an alternative, you can grant roles and permissions based on the resource
type, such as all Cloud Storage buckets located in a different
project.
To access a resource type:
Follow the
Manage access to other resources guide.
When granting roles and permissions, specify the
service account of your environment as a
principal.
After you grant the required permissions and roles, you can access resources in
a different project with the same default Airflow connections
that you use to access resources in the project where your environment is
located.
What's next
Access control with IAM
Manage Airflow connections
Configure resource location restrictions
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
