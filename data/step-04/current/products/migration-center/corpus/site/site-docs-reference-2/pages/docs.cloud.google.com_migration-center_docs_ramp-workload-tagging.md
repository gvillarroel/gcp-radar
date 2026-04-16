---
title: "RaMP workload tagging guide \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/ramp-workload-tagging
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/ramp-workload-tagging
  title: "RaMP workload tagging guide \_|\_ Migration Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Resources
Send feedback
RaMP workload tagging guide
Stay organized with collections
Save and categorize content based on your preferences.
Tag workloads for RaMP incentives
Google Cloud
RaMP is an
end-to-end migration and modernization program to help customers use
expertise and best practices, lower risk, control costs, and simplify their path
to cloud success.
RaMP accelerates customer workload migrations to Google Cloud through partner
expertise and commercial incentives. This document outlines the workload tagging
requirements customers must follow for RaMP incentive eligibility.
Workload tagging - incentive requirements
To qualify for incentives, the following requirements must be met:
New project: You must create new Google Cloud projects after the RaMP
Agreement is signed. You may spread a single workload across multiple
projects, but don't mix resources from different workloads within the same
project.
Google curated tag key: The curated RaMP workload tag key
( google/deployment-wl-id ), which is a Google managed Dynamic Tag Key
available in your Google Cloud organization, must be used to identify the
RaMP workload. Google systems won't recognize a manually created tag,
even if the RaMP workload tag key is used.
Tag binding at project level: RaMP incentives are based on the project
level tag. Resources that are tagged differently within a project won't
affect incentive calculations.
Tag value: For the Google curated tag, ensure the tag value is
identical to the Workload ID found in the RaMP Agreement.
The following sections cover how to perform each of these required steps.
Workload identification: use tags to identify RaMP Workloads
A key operational step of the migration and modernization phase is the RaMP
workload tagging. This step ensures Google Cloud can track the workload, and is
a necessary step to qualify for RaMP incentives.
The Workload Identifier (pre-fixed by WL- ) has been generated and assigned
to each workload deployment described in your RaMP Agreement. Once the RaMP
Agreement has been executed, the Workload Identifiers are also available in
your Google Cloud Console (organization).
As part of the migration and modernization phase,you can tag each RaMP workload
with the Workload Identifier assigned to that workload. This Workload
Identification process ensures accurate tracking between the anticipated
deployment described in the contract and the actual deployment.
Tag Workloads
To qualify for RaMP incentives, customers must create new Google Cloud projects
for each RaMP workload. Project creation must occur after the RaMP Agreement
execution date. Every project must be tagged with the correct Workload
Identifier. While a single workload may span multiple projects, each project
must be dedicated exclusively to one workload.
After creating the RaMP workload projects, customers must bind the curated tag
to the projects using the Workload Identifier. This identifier can be found in
the RaMP Agreement or the Google Cloud console.
RaMP Agreement (Workload Identifier is found in section 3 of the Agreement):
Workload Identifier example from RaMP Agreement.
To view the tagged RaMP workload, go to Cloud Billing > Workloads .
Go to Workloads in Cloud Billing console
Workloads billing page.
The curated tag key google/deployment-wl-id has been pre-created by Google and
is already available in your Google Cloud organization. You don't need to
create a new key.
Google Cloud tag binding is a feature that links tags to resources, such as an
organization, folder, project. For the purpose of RaMP incentives, tag binding
must be done at the project level.
For each relevant project, create a tag binding using the following parameters:
Tag key: google/deployment-wl-id
Tag value: WORKLOAD_IDENTIFIER
To bind the tag, the user needs the
resourcemanager.hierarchyNodes.createTagBinding permission on the project.
This permission is included in the following roles:
Standard roles: Tag User , Owner , or Editor .
Custom roles: Any custom role configured with the resourcemanager.hierarchyNodes.createTagBinding permission.
The tag key google/deployment-wl-id is public, so you only need permissions on
the project, not on the tag key itself.
Note: At this time, tagging is only supported in the Google Cloud CLI and
Terraform.
You can bind the tag to your project in one of the following ways:
gcloud
To create a google/deployment-wl-id tag binding, run the following
command:
gcloud resource-manager tags bindings create --parent = "//cloudresourcemanager.googleapis.com/projects/ PROJECT_ID " --tag-value = google/deployment-wl-id/ WORKLOAD_IDENTIFIER
To verify that the tag binding was successfully created, run the following
command:
gcloud resource-manager tags bindings list --parent = "//cloudresourcemanager.googleapis.com/projects/ PROJECT_ID "
Replace the following:
PROJECT_ID : the ID of your Google Cloud project.
WORKLOAD_IDENTIFIER : the Workload Identifier assigned to the workload
in your RaMP agreement.
Terraform
To bind the google/deployment-wl-id tag to a project with Terraform,
use the following configuration:
resource "google_tags_tag_binding" "binding" {
parent = "//cloudresourcemanager.googleapis.com/projects/ PROJECT_NUMBER "
tag_value = "google/deployment-wl-id/ WORKLOAD_IDENTIFIER "
}
Replace the following:
PROJECT_NUMBER : the number of your Google Cloud project.
WORKLOAD_IDENTIFIER : the Workload Identifier assigned to the workload
in your RaMP Agreement.
Note: Terraform Google provider must be version v7.17.0 or later.
In the Google Cloud console, tag bindings can be viewed in Asset Manager or
Resource Manager, but cannot be applied or modified from those locations.
Troubleshoot workload tagging errors
If you have applied an incorrect tag to a project, bind the correct tag to that
project. Cloud Billing uses the last tag applied to calculate incentives.
Correct a tag bound to the wrong project
If a tag is bound to the wrong project, do the following:
Bind the RaMP tag to the correct project.
Unbind the tag from the incorrect project.
gcloud CLI supports both create and delete actions for managing
these tag bindings. For more information, see
Tag Workloads .
What's next
Learn how to get started with Google Cloud Migration Center .
Learn how to generate a rapid cost estimate .
Learn more about creating and managing Resource Manager tags .
Learn more about RaMP .
Explore the Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
