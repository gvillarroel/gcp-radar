---
title: "App Engine standard environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/writing-web-service
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard
  title: "App Engine standard environment \_|\_ Google Cloud Documentation"
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
Guides
Send feedback
App Engine standard environment
Stay organized with collections
Save and categorize content based on your preferences.
The App Engine standard environment is based on container instances
running on Google's infrastructure. Containers are preconfigured with one of
several available runtimes.
The standard environment makes it easy to build and deploy an
application that runs reliably even under heavy load and with large amounts of
data.
Applications run in a secure, sandboxed environment, allowing the
standard environment to distribute requests across multiple
servers and scale servers to meet traffic demands. Your application runs
within its own secure, reliable environment that is independent of the hardware,
operating system, or physical location of the server.
Standard environment languages and runtimes
The standard environment supports the following languages:
Go
Java
Node.js
PHP
Python
Ruby
Instance classes
The instance class determines the amount of memory and CPU available to each
instance, the amount of free quota , and the
cost per hour after your app
exceeds the free quota.
For all runtime generations, the memory limit includes the memory your app uses
along with the memory that the runtime itself needs to run your app. The Java
runtimes use more memory to run your app than other runtimes.
To override the default instance class, use the instance_class
setting in your
app's app.yaml file.
Instance Class
Memory Limit
CPU Limit
Supported Scaling Types
F1 (default)
384 MB
600 MHz
automatic
F2
768 MB
1.2 GHz
automatic
F4
1536 MB
2.4 GHz
automatic
F4_1G
3072 MB
2.4 GHz
automatic
B1
384 MB
600 MHz
manual, basic
B2 (default)
768 MB
1.2 GHz
manual, basic
B4
1536 MB
2.4 GHz
manual, basic
B4_1G
3072 MB
2.4 GHz
manual, basic
B8
3072 MB
4.8 GHz
manual, basic
The CPU values and limits reported in the instance class table don't reflect a
fixed clock speed in the CPU. Instead, they represent the instance's
allocated relative compute power or performance tier on the
shared-core instance
type.
System tools might report the total physical memory of the underlying host
machine. This is different from the instance's enforced memory limit, which is
the maximum memory available to the instance's isolated sandbox environment.
Exceeding this "Memory Limit", not the host's total RAM, might cause
performance issues.
Important: When you view your bill , you will not see the names of the
individual instance classes in your billing line items. Instead, you see instance hours from the
"B" classes reported as "Backend Instances", and instance hours from the "F" classes reported as
"Frontend Instances". The bill will apply the appropriate multiple of instance hours for each
instance class you use. For example, if you use an F4 instance for one hour, you see
"Frontend Instance" billing for four instance hours at the F1 rate.
Quotas and limits
The standard environment gives you 1 GiB of
data storage and traffic for free, which can be increased by enabling paid
applications. However, some features impose limits unrelated to quotas to
protect the stability of the system. For more details on quotas, including how
you can edit them to suit your needs, see Quotas .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how
App Engine performs in real-world
scenarios. New customers also get $300 in free credits to run, test, and
deploy workloads.
Try App Engine free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
