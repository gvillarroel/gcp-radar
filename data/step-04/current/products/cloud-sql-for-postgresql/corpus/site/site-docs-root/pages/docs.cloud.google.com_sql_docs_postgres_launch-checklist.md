---
title: "Launch checklist for Cloud SQL \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/postgres/launch-checklist
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/postgres/launch-checklist
  title: "Launch checklist for Cloud SQL \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
PostgreSQL
Reference
Send feedback
Launch checklist for Cloud SQL
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
Introduction
This Launch Checklist for Cloud SQL provides recommended activities to
complete for launching a commercial application that uses Cloud SQL.
This checklist focuses on Cloud SQL-specific activities. To
use the platform checklist,
Launch Checklist for Google Cloud ,
to understand the activities also complete for all services.
This Launch Checklist for Cloud SQL is
designed for developers who are proficient with Cloud SQL. If
you are just starting out with Cloud SQL, these instructions will not
teach you how to use Cloud SQL; instead, new users can start with
a Quickstart guide .
This checklist is broken down into three sections:
Architecture Design and Development
Alpha Testing
Final Launch
The sections are presented in the order we recommend that you
use them as you prepare to launch your application. For example, start with the
Architecture Design and Development Checklist ; it
contains activities that we recommend you do early in your app's development
lifecycle. Similarly, the Alpha Testing Checklist contains activities we
recommend when you are closer to launch. However, the exact timeline of the
checklist activities and the time required for them depends on your application
development time frame.
Architecture Design and Development Checklist
We recommend that you use this checklist in the early stages of the development
of your application. You can work on the checklist activities in parallel;
however, we recommend that you start the software architecture-related
activities as early as possible as they require more time to complete.
Activity
❑
Carefully assess the performance characteristics of Cloud SQL, a
managed and replicated database service, and the service’s limitations and
restrictions
(for example, no SUPER privilege).
❑
Ensure that your DevOps team is familiar with the
Google Cloud console , the
SDK , and the gcloud CLI . All of these tools use
the public Cloud SQL API. You can use either tool to create and manage
instances, update user passwords, trigger restores, and complete other
management tasks. You can also use third-party management tools, because
Cloud SQL uses standard wire protocols.
❑
Consult
Cloud SQL community support
on Stack Overflow for information and practical advice about Cloud SQL.
❑
The
Google Cloud Status Dashboard
provides information about Cloud SQL and other Google Cloud
services.
To be notified of product updates and new features, you can subscribe to
the [release notes](/sql/docs/postgres/release-notes) by adding that
page's URL to your feed reader, or by adding its
feed URL directly.
Alpha Testing Checklist
Use the Alpha Testing Checklist when you are close to code complete and want to
get initial metrics about your application.
Activity
❑
Remain current on the drivers that provide data access for your development
platform.
❑
Load-test early, often and realistically. Verify that your application can
survive restarts of the Cloud SQL instance during maximum load. If
your application is making a lot of connections, make sure the reconnect
after a server restart has the right amount of backoff to avoid hitting the
cap on the number of pending connections. For more information, see the FAQ
Are there any size or QPS limits? Be aware
that a big, cold buffer will take quite some time to fill. Whenever possible,
optimize queries to avoid the creation of temporary tables because
operations involving temporary tables can be especially slow.
❑
If you are connecting from Compute Engine, make sure the firewall
behavior related to idle connections does not harm the application. If
necessary, make sure to make the changes to TCP Keepalive persistent across
reboots. For more information, see
Connecting to Cloud SQL from Compute Engine .
❑
Observe the connection limits
for App Engine apps. Connection pools are the recommended way to
achieve this.
❑
Make sure there is a strategy in place for doing schema changes and the
impact of doing them is well understood. We recommend that you create a clone
of an instance to test a schema change.
Final Launch Checklist
Use the Final Launch Checklist shortly before and during your launch.
Activity
❑
There are no Cloud SQL specific activities for launch. If you have
followed this checklist to this point, your project’s Cloud SQL service
will be ready for your application’s launch.
We recommend that you also review the Final Launch Checklist in the
Launch Checklist for Google Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
