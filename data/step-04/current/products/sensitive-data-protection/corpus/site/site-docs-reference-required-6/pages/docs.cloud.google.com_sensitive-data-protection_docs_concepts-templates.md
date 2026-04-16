---
title: "Templates \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-templates
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-images
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-templates
  title: "Templates \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
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
Templates
Stay organized with collections
Save and categorize content based on your preferences.
You can use templates to create and persist configuration information to use
with Sensitive Data Protection. Templates are useful for decoupling configuration
information such as what you inspect for and how you de-identify it from the
implementation of your requests. Templates provide a robust
way to manage large scale rollouts of Sensitive Data Protection capabilities.
Sensitive Data Protection supports two types of templates:
Inspection templates : Templates for saving
configuration information for inspection scan jobs, including what
predefined or custom detectors to use.
De-identification templates : Templates for
saving configuration information for de-identification jobs, including both
infoType and structured dataset transformations.
Advantages of templates
Templates enable you to use a single source for your job configuration
information. Consider a typical inspection scan request to
Sensitive Data Protection. Whether you're inspecting text, an image, or
structured data in a Google Cloud storage repository, your inspection request
will include two basic pieces of information:
The data to scan: Either the data itself or information about the
location of the data.
What to scan for: The predefined or custom infoTypes to turn on, likelihood
limits, and so on.
Say you scheduled several storage inspection jobs to run, all of which scanned a
Google Cloud storage repository for phone numbers and then created a
report of the findings. The following are conceptual summary descriptions of
these jobs. Note that "inspectJob" represents the data to scan, and
"inspectConfig" represents what to scan for.
Inspection job #1:
"inspectJob" : Q2 2017 marketing database.
"inspectConfig" : PHONE_NUMBER infoType.
Inspection job #2:
"inspectJob" : Customer alert contact
database.
"inspectConfig" : PHONE_NUMBER infoType.
Inspection job #3:
"inspectJob" : Top secret VIP partner strategy
database.
"inspectConfig" : PHONE_NUMBER infoType.
Inspection job #4:
"inspectJob" : Government contract database.
"inspectConfig" : PHONE_NUMBER infoType.
Each job's data source is different, but its instructions for what to scan for
is identical. Now suppose that we want to also scan for email addresses. In this
case, you would have to edit each job's configuration and add email addresses to
"inspectConfig" . If instead you had used a template to configure what to scan
for, you would only have to edit one configuration—that of the template. The
next time any of these jobs ran, it would know to scan for both phone numbers
and email addresses, because the "inspectConfig" had been set to a template.
The InspectTemplate and DeidentifyTemplate objects
Templates are represented in Sensitive Data Protection by the
InspectTemplate
and
DeidentifyTemplate
objects. Both template objects contain a configuration—a set of infoType
detectors—to be used anywhere you otherwise would normally specify the InspectConfig or
DeidentifyConfig
objects.
Template configuration fields
Each template object contains the configuration object that the template
implements, plus several additional configuration fields:
The template's name and display name, and a description.
The
InspectConfig or
DeidentifyConfig
object: The configuration information for the inspection or
de-identification job.
Read-only timestamps for creation time ( "createTime" ) and a last
updated time ( "updateTime" ).
Template methods
Each template object also includes several built-in management methods.
These enable you to maintain the template without having to update every request
or integration. Each management method is linked in the following table,
and is organized by whether the template applies organization-wide
or project-wide, and whether the template is a de-identification template or an
inspection template:
organization.
project.
deidentify Templates.
inspect Templates.
deidentify Templates.
inspect Templates.
Create a new template
create
create
create
create
Update an existing template
patch
patch
patch
patch
Delete an existing template
delete
delete
delete
delete
Retrieve an existing template, including its configuration and status
get
get
get
get
List all existing job templates
list
list
list
list
Using templates
Templates are available for both inspection and de-identification configuration
information, and can be used in both content API calls (text and images)
Sensitive Data Protection jobs (storage repositories).
Templates have powerful Identity and Access Management (IAM) controls so you can
restrict management of them to only approved users. For more information, see:
Sensitive Data Protection IAM roles
Sensitive Data Protection IAM permissions
Resources
To learn how to create and use templates with Sensitive Data Protection, see:
Creating Sensitive Data Protection inspection
templates
Creating Sensitive Data Protection de-identification
templates
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
