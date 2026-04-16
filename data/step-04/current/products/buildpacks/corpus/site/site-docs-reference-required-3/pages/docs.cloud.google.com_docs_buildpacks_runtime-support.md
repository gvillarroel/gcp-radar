---
title: "Google Cloud's buildpacks runtime lifecycle \_|\_ Buildpacks \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/docs/buildpacks/runtime-support
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/docs/buildpacks/osonly
source_metadata:
  url: https://docs.cloud.google.com/docs/buildpacks/runtime-support
  title: "Google Cloud's buildpacks runtime lifecycle \_|\_ Buildpacks \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Buildpacks
Resources
Send feedback
Google Cloud's buildpacks runtime lifecycle
Stay organized with collections
Save and categorize content based on your preferences.
Runtimes on Google Cloud's buildpacks are base images that include components and operating system,
software required to build and execute code written for a specific
programming language, and software to support your function.
Runtimes are available in different release stages, such as Preview or
General Availability (GA). For more information, see the
product launch stages .
General Availability (GA)
During the General Availability (GA) support window:
Runtime components are regularly updated with security and bug fixes.
To maintain stability, Google Cloud's buildpacks avoids implementing breaking
features or breaking changes into the runtime. Breaking changes will be
announced in advance in Google Cloud's buildpacks release notes .
When a language version is no longer actively maintained by the respective
community, Google Cloud's buildpacks will also stop providing maintenance and support for
that language runtime. Before a runtime reaches the deprecation phase as
described in the runtimes support schedule , Google will
provide a notification to customers in the Google Cloud console.
Google may make changes to any runtime's support schedule or lifecycle in
accordance with the terms of your agreement for the use of Google Cloud
services.
Notification Period
Google Cloud's buildpacks will begin issuing notifications 90 days before the runtime
reaches deprecation. Upon notification, you should prepare to upgrade your
function to a newer supported runtime .
Deprecation and Decommissioning
When a component is no longer actively maintained, Google Cloud's buildpacks may
deprecate and eventually remove the runtime.
This has three aspects: a publication of the deprecation date, a deprecation
period, and a decommission date. In the following schedule ,
the deprecation date is the start of the deprecation period and ends at the beginning
of the decommission date. The decommission date indicates the start of the decommission period.
During the deprecation period, you can generally continue to create new
workloads and update existing workloads using the runtime. You should use this
time to migrate workloads that use the deprecated runtime to a more up-to-date
runtime.
After the decommission date, you can no longer create new workloads or update
existing workloads using the runtime. You must choose a more up-to-date runtime
to deploy your workloads. Workloads that continue to use a decommissioned
runtime may be disabled.
Support Schedule
Here is the list of supported Google Cloud's buildpacks runtimes, as well as runtimes
that have been deprecated or decommissioned.
Based on qualification and stability of releases, availability and key dates
might be delayed. A blank deprecation or decommission date means that phase has
not yet been scheduled. Revisit this page to stay up to date.
Note: Runtime ID is often used when deploying from the from the command line
or through Terraform
Node.js
Runtime
Runtime ID
Stacks
Runtime base image
Deprecation
Decommission
Node.js 24
nodejs24
google-24 (default)
google-24-full
google-24/nodejs24
google-24-full/nodejs24
2028-04-30
2028-10-31
Node.js 22
nodejs22
google-22 (default)
google-22-full
google-22/nodejs22
google-22-full/nodejs22
2027-04-30
2027-10-31
Node.js 20
nodejs20
google-22 (default)
google-22-full
google-22/nodejs20
google-22-full/nodejs20
2026-04-30
2026-10-30
Node.js 18
nodejs18
google-22 (default)
google-22-full
google-22/nodejs18
google-22-full/nodejs18
2025-04-30
2025-10-30
Node.js 16
nodejs16
google-18-full
google-18-full/nodejs16
2024-01-30
2025-01-30
Node.js 14
nodejs14
google-18-full
google-18-full/nodejs14
2024-01-30
2025-01-30
Node.js 12
nodejs12
google-18-full
google-18-full/nodejs12
2024-01-30
2025-01-30
Node.js 10
nodejs10
google-18-full
google-18-full/nodejs10
2024-01-30
2025-01-30
Node.js 8
nodejs8
Decommissioned
Decommissioned
2020-06-05
Feb 2021
Node.js 6
nodejs6
Decommissioned
Decommissioned
2019-04-17
Aug 2020
Python
Runtime
Runtime ID
Stacks
Runtime base image
Deprecation
Decommission
Python 3.14
python314
google-24 (default)
google-24-full
google-24/python314
google-24-full/python314
2030-10-10
2031-04-10
Python 3.13
python313
google-22 (default)
google-22-full
google-22/python313
google-22-full/python313
2029-10-10
2030-04-10
Python 3.12
python312
google-22 (default)
google-22-full
google-22/python312
google-22-full/python312
2028-10-02
2029-04-02
Python 3.11
python311
google-22 (default)
google-22-full
google-22/python311
google-22-full/python311
2027-10-24
2028-04-24
Python 3.10
python310
google-22 (default)
google-22-full
google-22/python310
google-22-full/python310
2026-10-04
2027-04-04
Python 3.9
python39
google-18-full
google-18-full/python39
2025-10-05
2026-04-05
Python 3.8
python38
google-18-full
google-18-full/python38
2024-10-14
2025-10-14
Python 3.7
python37
google-18-full
google-18-full/python37
2024-01-30
2025-01-30
Go
Runtime
Runtime ID
Stacks
Runtime base image
Deprecation
Decommission
Go 1.26
go126
google-24 (default)
google-24-full
google-24/go126
google-24-full/go126
Go 1.25
go125
google-22 (default)
google-22-full
google-22/go125
google-22-full/go125
Go 1.24
go124
google-22 (default)
google-22-full
google-22/go124
google-22-full/go124
2026-09-02
2027-03-02
Go 1.23
go123
google-22 (default)
google-22-full
google-22/go123
google-22-full/go123
2026-02-21
2026-08-21
Go 1.22
go122
google-22 (default)
google-22-full
google-22/go122
google-22-full/go122
2026-01-28
2026-07-28
Go 1.21
go121
google-22 (default)
google-22-full
google-22/go121
google-22-full/go121
2025-09-03
2026-03-03
Go 1.20
go120
google-22 (default)
google-22-full
google-22/go120
google-22-full/go120
2024-05-01
2025-05-01
Go 1.19
go119
google-22 (default)
google-22-full
google-22/go119
google-22-full/go119
2024-04-30
2025-01-30
Go 1.18
go118
google-22 (default)
google-22-full
google-22/go118
google-22-full/go120
2024-01-30
2025-01-30
Go 1.16
go116
google-18-full
google-18-full/go116
2024-01-30
2025-01-30
Go 1.13
go113
google-18-full
google-18-full/go113
2024-01-30
2025-01-30
Go 1.11
go111
Decommissioned
Decommissioned
2020-08-05
Feb 2021
Note: Go's release policy states
that each major Go release is supported until there are two newer major releases.
Thus, depending on when newer versions of Go are made publicly available,
key dates such as end of support, deprecation, and decommission might be postponed.
Java
Runtime
Runtime ID
Stacks
Runtime base image
Deprecation
Decommission
Java 25
java25
google-24 (default)
google-24-full
google-24/java25
google-24-full/java25
October 2031
Java 21
java21
google-22 (default)
google-22-full
google-22/java21
google-22-full/java21
September 2031
Java 17
java17
google-22 (default)
google-22-full
google-22/java17
google-22-full/java17
October 2027
Java 11
java11
google-18-full
google-18-full/java11
2024-10-31
2025-10-31
Ruby
Runtime
Runtime ID
Stacks
Runtime base image
Deprecation
Decommission
Ruby 4.0
ruby40
google-24-full (default)
google-24-full/ruby40
2029-03-31
2029-09-30
Ruby 3.4
ruby34
google-22 (default)
google-22-full
google-22/ruby34
google-22-full/ruby34
2028-03-31
2028-09-30
Ruby 3.3
ruby33
google-22 (default)
google-22-full
google-22/ruby33
google-22-full/ruby33
2027-03-31
2027-09-30
Ruby 3.2
ruby32
google-22 (default)
google-22-full
google-22/ruby32
google-22-full/ruby32
2026-03-31
2026-09-30
Ruby 3.0
ruby30
google-18-full
google-18-full/ruby30
2024-03-31
2025-03-31
Ruby 2.7
ruby27
google-18-full
google-18-full/ruby27
2024-01-30
2025-01-30
Ruby 2.6
ruby26
google-18-full
google-18-full/ruby26
2024-01-30
2025-01-30
PHP
Runtime
Runtime ID
Stacks
Runtime base image
Deprecation
Decommission
PHP 8.5
php85
google-24-full (default)
google-24-full/php85
2029-12-31
2030-06-30
PHP 8.4
php84
google-22-full (default)
google-22-full/php84
2028-12-31
2029-06-30
PHP 8.3
php83
google-22-full (default)
google-22-full/php83
2027-12-31
2028-06-30
PHP 8.2
php82
google-22-full (default)
google-22-full/php82
2026-12-31
2027-06-30
PHP 8.1
php81
google-18-full
google-18-full/php81
2025-12-31
2026-06-30
PHP 7.4
php74
google-18-full
google-18-full/php74
2024-01-30
2025-01-30
.NET
Runtime
Runtime ID
Stacks
Runtime base image
Deprecation
Decommission
.NET 10
dotnet10
google-24 (default)
google-24-full
google-24/dotnet10
google-24-full/dotnet10
2028-11-14
2029-05-14
.NET 8
dotnet8
google-22 (default)
google-22-full
google-22/dotnet8
google-22-full/dotnet8
2026-11-10
2027-05-10
.NET 6
dotnet6
google-22 (default)
google-22-full
google-22/dotnet6
google-22-full/dotnet6
2024-11-12
2025-11-12
.NET Core 3
dotnet3
google-18-full
google-18-full/dotnet3
2024-01-30
2025-01-30
OS only
Runtime
Runtime ID
Stacks
Runtime base image
Deprecation
Decommission
OS only 24
osonly24
google-24 (default)
google-24/osonly24
April 30, 2029
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
