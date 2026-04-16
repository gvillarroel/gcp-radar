---
title: "Optimize an application with design recommendations \_|\_ App Hub \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/optimize-applications
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/register-resources
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/optimize-applications
  title: "Optimize an application with design recommendations \_|\_ App Hub \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
App Hub
Guides
Send feedback
Optimize an application with design recommendations
Stay organized with collections
Save and categorize content based on your preferences.
Continuously improving your App Hub applications is key to meeting
operational and business goals. Application insights and assistance services,
such as Cloud Hub and
Gemini Cloud Assist , help you
identify optimization opportunities. For example, you might receive
recommendations to resize underutilized virtual machines or configure
Cloud CDN to reduce latency and cost.
This guide shows you how to analyze an existing application and then use
Application Design Center to
implement architectural changes.
Before you begin
This document assumes you have
set up a folder-level application management boundary
for your applications. Application Design Center, Cloud Hub, and
Gemini Cloud Assist require this boundary type.
You must complete the following steps before using application insights and
assistance services:
For administrators :
Enable required APIs for all Google Cloud resources you intend to use.
Set up Application Design Center .
Only required if you intend to create new application components from
templates .
Set up Cloud Hub .
Only required if you intend to use Cloud Hub to
identify optimization opportunities.
Set up Gemini Cloud Assist .
Only required if you intend to use Gemini Cloud Assist to
identify optimization opportunities.
Grant access to users .
Assign appropriate IAM roles based on user's
responsibilities in the application lifecycle.
For developers and operators :
Confirm that applications exist within your
application management boundary .
Make sure you have the necessary IAM roles
for the tasks you want to perform.
Open your management project
in the Google Cloud console.
Analyze the application for optimization opportunities
Use Cloud Hub and
Gemini Cloud Assist to get a
consolidated view of your application's operational data and receive
recommendations:
In the Google Cloud console, use the project picker to select your
management project.
Navigate to the Home page from Cloud Hub:
Go to Home
Select your application to view its integrated dashboard.
Review incidents, alerts, performance metrics, and cost trends. For more
information, see
Application views and project views .
Optionally,
use the Gemini Cloud Assist panel
to ask for optimization recommendations using natural language prompts,
for example:
Give me recommendations to optimize my application.
Show me the most expensive resources with the lowest utilization for this application.
Gemini Cloud Assist provides recommendations, such as resizing
underutilized machine types or enabling a Cloud CDN.
Evolve the application architecture
After identifying an optimization, use
Application Design Center to model
and deploy the improved architecture:
If the application was deployed from a template:
Open the template and modify its architecture
based on the recommendations. You can then
deploy the new version
as an update to the existing application instance.
If the application wasn't deployed from a template:
Create a new template in
Application Design Center that reflects the optimized architecture.
Deploy the optimized application architecture .
This process might involve updating an existing deployment or creating a new
one, depending on the nature of the changes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
