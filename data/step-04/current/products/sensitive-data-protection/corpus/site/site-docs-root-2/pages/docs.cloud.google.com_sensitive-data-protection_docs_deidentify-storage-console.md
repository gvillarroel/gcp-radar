---
title: "Create de-identified copies of data stored in Cloud Storage using the Google\
  \ Cloud console \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-storage-console
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-storage-console
  title: "Create de-identified copies of data stored in Cloud Storage using the Google\
    \ Cloud console \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Create de-identified copies of data stored in Cloud Storage using the Google Cloud console
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to inspect a Cloud Storage directory
and create de-identified copies of the supported
files, using Sensitive Data Protection in the Google Cloud console.
This operation helps to ensure that the files that you use in your business
processes don't contain sensitive data, such as personally identifiable
information (PII). Sensitive Data Protection can inspect files in a
Cloud Storage bucket for sensitive data, and create de-identified copies of
those files in a separate bucket. You can then use the de-identified copies in
your business processes.
For more information about what happens when you de-identify data in storage,
see De-identification of sensitive data in storage .
Before you begin
This page assumes the following:
You have enabled billing.
Learn how to enable billing
You have enabled Sensitive Data Protection.
Enable Sensitive Data Protection
You have a Cloud Storage bucket with data that you want to de-identify.
Learn about the limitations and points of consideration for this
operation.
Storage inspection requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform . For more information, see
Authenticating to the DLP API .
Required IAM roles
If all resources for this operation are in the same project, the
DLP API Service Agent role ( roles/dlp.serviceAgent ) on the
service agent is sufficient. With that role, you can do the following:
Create the inspection job
Read the files in the input directory
Write the de-identified files in the output directory
Write the transformation details in a BigQuery table
The relevant resources include
the inspection job, de-identification templates, input bucket, output bucket,
and transformation details table.
If you must have the resources in separate projects, make sure that the
service agent of your project also has the following roles:
The Storage Object Viewer role ( roles/storage.objectViewer ) on the input
bucket or the project that contains it.
The Storage Object Creator role
( roles/storage.objectCreator ) on the output bucket or the project that
contains it.
The BigQuery Data Editor role ( roles/bigquery.dataEditor ) on the
transformation details table or the project that contains it.
To grant a role to the service agent, see Grant a single role . You can
also control access at the following levels:
Cloud Storage bucket
BigQuery dataset
BigQuery table
Overview
To create de-identified copies of your Cloud Storage files, you configure
an inspection job that looks for sensitive data according to the criteria that
you specify. Then, within the inspection job, you enable the Make a
de-identified copy action. You can set de-identify templates that dictate how
Sensitive Data Protection must transform the findings. If you don't provide any
de-identify template, Sensitive Data Protection transforms the findings as
described in Default de-identification behavior .
Note: In Sensitive Data Protection, an
action is something that occurs after a Sensitive Data Protection job
completes successfully. For more information about actions, see the following:
Actions conceptual
topic
Action reference documentation
Retrieving inspection results
If you enable the Make a de-identified copy action, by default,
Sensitive Data Protection transforms all supported file types included in the
scan. However, you can configure the job to transform only a subset of the
supported file types.
Optional: Create de-identify templates
If you want to control how the findings are transformed ,
create the following templates. These templates provide instructions
about transforming findings in structured files, unstructured files, and
images.
Note: If you choose a cryptographic method , you
must first create a wrapped key using Cloud Key Management Service , and provide that key
in your de-identification template. Transient (raw) keys aren't supported.
De-identify template: a default de-identify template to be
used for unstructured files, such as freeform text files.
This type of de-identify template can't contain
record transformations , which are only supported for structured content.
If this template isn't present, Sensitive Data Protection uses the
infoType replacement method to transform unstructured files.
Structured de-identify template: a de-identify template to be used for
structured files, such as CSV files. This de-identify template
can contain record transformations. If this template isn't present,
Sensitive Data Protection uses the default de-identify template that you created.
If that is also not present, Sensitive Data Protection uses
the infoType replacement method to transform structured files.
Image redaction template: a de-identify template to be used for images.
If this template isn't present, Sensitive Data Protection redacts all findings in
images with a black box.
Learn how to create a de-identify template .
Create an inspection job that has a de-identification action
In the Google Cloud console go to the Create job or job trigger page.
Go to Create job or job trigger
Enter the Sensitive Data Protection job information, and click Continue to
complete each step.
The following sections describe how to fill in the relevant sections of the
page.
Choose input data
In the Choose input data section, do the following:
Optional: For Name , enter an identifier for the inspection job.
For Resource location , select Global or the region where you want to
store the inspection job.
For Location , select Google Cloud Storage .
For URL , enter the path to the input directory. The input directory
contains the data that you want to scan—for
example, gs://input-bucket/folder1/folder1a . If you want to scan the
input directory recursively, add a trailing slash to the URL, and then select
Scan recursively .
In the Sampling section, in the Sampling method list, select
No sampling .
Sampling isn't supported on jobs and job triggers configured with
de-identification.
Configure detection
In the Configure detection section, choose the types of sensitive data to
inspect for. These are called infoTypes . You
can select from the
list of predefined infoTypes , or you can
select a template if one exists. For more details, see
Configure detection .
Add actions
In the Add actions section, do the following:
Turn on Make a de-identified copy .
Optional: For De-identification template enter the full resource name of
the default de-identify template if you created one .
Optional: For Structured de-identification template enter the full
resource name of the de-identify template for structured files if you created
one. If you did not, Sensitive Data Protection uses the default
template if you created one.
Optional: For Image redaction template enter the full resource name of
the image redaction template for images if you created one.
Optional: If you want Sensitive Data Protection to store the transformation
details in a BigQuery table, select
Export transformation details to BigQuery , then fill in the following:
Project ID : the project that contains the BigQuery table.
Dataset ID : the dataset that contains the BigQuery table.
Table ID : the table where Sensitive Data Protection must
store details about each transformation. Sensitive Data Protection creates this
table with the table ID that you provide. If you don't provide a table
ID, the system automatically creates one.
This table does not store the actual de-identified content.
When data is written
to a BigQuery table , the billing and quota usage are applied to
the project that contains the destination table.
For Cloud Storage output location , enter the URL of the
Cloud Storage directory where you want to store the de-identified files.
This directory must not be in the same Cloud Storage bucket as the
input directory.
Optional: For File types , select the types of files that you want to
transform.
For more information about other actions you can add, see Add actions .
Schedule
In the Schedule section, specify whether you want to make this job a
recurring job:
To run the scan only once, keep the field set to None .
To schedule scans to run periodically, click
Create a trigger to run the job on a periodic schedule .
For more information, see Schedule .
Review
In the Schedule section, review the job configuration, and if needed,
edit the job.
Click Create .
If you opted not to schedule the job, Sensitive Data Protection immediately starts
running it. After the job completes, the system redirects
you to the Job details page, where you can view the results of the
inspection and de-identification operations.
If you opted to export the transformation details to a BigQuery
table, the table is populated. It contains one row for each transformation
that Sensitive Data Protection made. For each transformation, details
include a description, a success or error code, any error details, the
number of bytes transformed, the location of the transformed content, and
the name of the inspection job in which Sensitive Data Protection made the
transformation. This table does not contain the actual de-identified content.
Confirm that the files were de-identified
On the Job details page, click the Configuration tab.
To view the de-identified files in the output directory, click the link in the
Output bucket for de-identified Cloud Storage data field.
To view the BigQuery table that contains the transformation
details, click the link in the Transformation Details field.
For information about how to query a BigQuery table, see
Running interactive queries .
What's next
Learn more about the process of de-identifying data in storage .
Learn how to de-identify sensitive data stored in Cloud Storage using
the DLP API .
Work through the Creating a De-identified Copy of Data in
Cloud Storage
codelab.
Learn more about de-identification transformations .
Learn how to create and schedule inspection jobs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
