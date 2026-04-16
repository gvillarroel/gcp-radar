---
title: "Cloud Run IAM permissions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/reference/iam/permissions
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/reference/about-api-versions
source_metadata:
  url: https://docs.cloud.google.com/run/docs/reference/iam/permissions
  title: "Cloud Run IAM permissions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Reference
Send feedback
Cloud Run IAM permissions
Stay organized with collections
Save and categorize content based on your preferences.
The following tables list the Identity and Access Management (IAM)
permissions that are associated with Cloud Run.
Configurations
Permission
Description
run.configurations.get
View configurations, excluding IAM policies.
run.configurations.list
List configurations.
Domain mappings
There are no IAM permissions for domain mappings. Viewing, listing, creating and
deleting domain mappings requires project-level permissions.
For a reference of which IAM permissions are contained in each IAM role, see
Cloud Run IAM Roles .
Jobs
Note: Beginning on September 16, 2024 , the permission for canceling job
executions will change from run.jobs.run to run.executions.cancel .
Permission
Description
run.jobs.create
Create new job.
run.jobs.delete
Delete job.
run.jobs.get
View jobs, excluding IAM policies.
run.jobs.getIamPolicy
Get an IAM policy.
run.jobs.list
List jobs.
run.jobs.run
Invoke (execute) jobs and cancel job executions.
run.jobs.runWithOverrides
Override job configuration for a job execution.
run.jobs.setIamPolicy
Set an IAM policy.
run.jobs.update
Update existing job.
run.executions.delete
Delete job executions.
run.executions.get
Get job executions.
run.executions.list
List job executions.
run.tasks.get
Get job execution tasks.
run.tasks.list
List job execution tasks.
Locations
Permission
Description
run.locations.get
Get location information.
run.locations.list
List all locations.
Routes
Permission
Description
run.routes.get
View routes, excluding IAM policies.
run.routes.list
List routes.
run.routes.invoke
Invoke a route.
Services
Permission
Description
run.services.get
View services, excluding IAM policies.
run.services.list
List services.
run.services.create
Create new services.
run.services.update
Update existing services.
run.services.delete
Delete services.
run.services.getIamPolicy
Get an IAM policy.
run.services.setIamPolicy
Set an IAM policy.
Service revisions
Permission
Description
run.revisions.get
View revisions, excluding IAM policies.
run.revisions.list
List revisions.
run.revisions.delete
Delete revisions.
View project
Permission
Description
resourcemanager.projects.get
Get project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
