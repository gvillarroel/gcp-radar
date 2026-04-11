---
title: "Runtime lifecycle \_|\_ App Engine standard environment \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle
  title: "Runtime lifecycle \_|\_ App Engine standard environment \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Resources
Send feedback
Runtime lifecycle
Stay organized with collections
Save and categorize content based on your preferences.
The App Engine standard environment runtimes use open source components
that are maintained by their respective communities. The runtimes are
identified by their language version, for example, Java 17, Python 3.10, and so forth.
Google provides support for a runtime during General availability (GA) . During this support window:
Runtime components are regularly updated with security and bug fixes.
To maintain stability, App Engine avoids implementing breaking features
or changes into the runtime. Breaking changes will be announced in advance
on the runtime-specific release notes .
When a language version is no longer actively maintained by the respective community,
App Engine will also stop providing maintenance and support for that language runtime.
Before a runtime reaches the end of support phase as described in the runtimes support schedule , Google will provide a notification to customers.
Google may make changes to any runtime's support schedule or lifecycle in accordance with the terms of your agreement for the use of Google Cloud platform services.
Runtime lifecycle
GA-level support
End of Support
Deprecated
Decommissioned
Creation & redeployment
Yes
No 1
No
No
Project Configuration Updates
Yes
Yes
No
No
Running existing workloads
Yes
Yes
Yes
May be disabled
UI & CLI Warnings
Yes
Yes
No
No
Language patches
Automatic
No automatic updates
No automatic updates
No automatic updates
Patching APIs & SDKs
Automatic
No automatic updates
No automatic updates
No automatic updates
Patching OS
Automatic
No automatic updates
No automatic updates
No automatic updates
Customer Support
GA-level support
No runtime support
No runtime support
No runtime support
Notification period
App Engine will begin issuing in-app notifications 90 days before the application
reaches end of support. Upon notification, you should prepare to upgrade your application to a newer
runtime that is supported in the standard environment.
End of support
Important: Google will no longer apply security updates or patches to
components of the runtime environment that have reached end of support. To continue receiving security updates, we
strongly encourage you to upgrade your application to a supported runtime
version as soon as it becomes available.
Deployments for legacy runtimes can be re-enabled using an organization policy .
When runtime components reach the end of support date:
Google will no longer apply security updates or patches to components of the runtime environment.
Your application will continue to run and receive traffic.
You will no longer be able to create and/or update the application on the unsupported runtime.
Issues arising from the use of an unsupported runtime will not be eligible for technical support
We strongly encourage you to upgrade your application to a supported runtime version as soon as it becomes available to continue receiving security updates and being eligible for technical support.
For details, see the migration guides:
Migrate from Python 2.7 to the latest Python runtime
Migrate from PHP 5 to the latest PHP runtime
Migrate from Go 1.11 to the latest Go runtime
Migrate from Java 8 to the latest Java runtime
In certain cases, Google may permit your Organization to
re-enable deployments in unsupported runtimes, subject to service specific terms
and conditions. Deployments for legacy runtimes can be re-enabled using an
organization policy .
Deprecated
If Google allowed your Organization to re-enable deployments in an unsupported runtime, Google will remove that ability once the runtime is deprecated.
Where practicable, we will make reasonable efforts to notify you in advance of the deprecation by in-app notifications or other means. In certain instances, including in circumstances involving critical security vulnerabilities or similar high severity issues, advance notice may not be practicable.
Decommissioned
Applications that continue to use a decommissioned runtime may be disabled without further notice. You must choose a more up-to-date runtime to deploy your application.
See the runtimes support schedule for key dates.
In certain cases, Google may permit your organization to re-enable deployments for legacy runtimes using an organization policy . ↩
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
