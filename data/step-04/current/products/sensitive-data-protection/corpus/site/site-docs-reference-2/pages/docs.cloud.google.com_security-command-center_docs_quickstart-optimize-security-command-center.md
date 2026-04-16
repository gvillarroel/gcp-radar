---
title: "Security Command Center best practices \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/quickstart-optimize-security-command-center
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/quickstart-optimize-security-command-center
  title: "Security Command Center best practices \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Security Command Center best practices
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers
This page provides recommendations for managing Security Command Center services and
features to help you get the most out of the product.
Security Command Center is a powerful platform for monitoring data and security risks
across your organization or individual projects. Security Command Center is
designed to provide maximum protection with
minimal configuration being necessary. But there are steps you can take to
tailor the platform to your workflow and ensure your resources are protected.
Enable the Premium tier or Enterprise tier
Premium and Enterprise service tiers
The Premium and Enterprise tiers of Security Command Center provide the
most protection through through a broad set of cloud security and security
operations capabilities, including threat detection, software vulnerability
detection, compliance assessments, security operations capabilities, and
much more. The Standard and Standard-legacy tiers offer limited services and
features.
For information about the capabilities that are included with each service tier,
see Service tiers .
Use project-level activations
Standard-legacy and Premium service tiers
For the Standard-legacy and Premium service tiers, you can activate Security Command Center for
individual projects.
With project-level activations, certain features that require
organization-level access are not available, regardless of tier. For more
information, see
Feature availability with project-level activations .
For more information about activating a Security Command Center tier, see
Overview of activating Security Command Center .
To learn how you're charged for Security Command Center when you activate it at the
project level, see
Pricing .
Enable all built-in services
Standard-legacy, Standard, Premium, and Enterprise service tiers
We recommend enabling all built-in services, subject to the best practice
recommendations of individual services.
If Security Command Center is
already activated, you can confirm which services are enabled on the
Settings page .
You can disable any service, but it's best to keep all services in your
tier turned on all the time. Keeping all services
enabled lets you take advantage of continuous updates and helps ensure
that protections are provided for new and changed resources.
Before enabling Web Security Scanner in production, review
Web Security Scanner best practices .
Also, consider enabling integrated services
(Anomaly Detection, Sensitive Data Protection, and Google Cloud Armor), exploring
third-party security services ,
and turning on Cloud Logging for
Event Threat Detection and Container Threat Detection. Depending on the quantity of
information, Sensitive Data Protection and Cloud Armor costs
can be significant. Follow best practices for keeping
Sensitive Data Protection costs under control
and read the Cloud Armor pricing guide .
Enable logs for Event Threat Detection
Premium and Enterprise service tiers
If you use Event Threat Detection, you might need to turn on certain logs
that Event Threat Detection scans.
Although some logs are always on, such as Cloud Logging Admin Activity
audit logs, other logs, such as most Data Access audit logs, are off by
default and need to be enabled before Event Threat Detection can scan them.
Some of the logs that you should consider enabling include:
Cloud Logging Data Access audit logs
Google Workspace logs (organization-level activations only)
Which logs you need to enable depends on:
The Google Cloud services you are using
The security needs of your business
Logging might charge for the ingestion and storage of
certain logs. Before enabling any logs, review
Logging Pricing .
After a log is enabled, Event Threat Detection starts scanning it automatically.
For more detailed information about which detection modules require which
logs and which of those logs you need to turn on, see
Logs that you need to turn on .
Define your high-value resource set
Premium and Enterprise service tiers (requires organization-level activation )
To help you prioritize vulnerability and misconfiguration findings that
expose the resources that are the most important to you to protect, specify
which of your high-value resources belong in your
high-value resource set .
Findings that expose the resources in your high-value resource set get higher
attack exposure scores .
You specify the resources that belong in your high-value resource set by
creating
resource value configurations .
Until you create your first
resource value configuration, Security Command Center uses a default high-value
resource set that is not customized to your security priorities.
Use Security Command Center in the Google Cloud console
Standard-legacy, Standard, Premium, and Enterprise service tiers
In the Google Cloud console, Security Command Center provides features and visual
elements that are not available in the Security Command Center API. These features,
including an intuitive interface, formatted charts, compliance reports,
and visual hierarchies of resources, give you greater insight into your
organization. For more information, see Using Security Command Center
in the Google Cloud console .
Extend functionality with the API and gcloud
Standard-legacy, Standard, Premium, and Enterprise service tiers
If you need programmatic access, try out the
Security Command Center client libraries and
the Security Command Center API , which let you access and control your
Security Command Center environment. You can use API Explorer, labeled "Try This API"
in panels on API reference pages , to
interactively explore the Security Command Center API without an API key. You can check
out available methods and parameters, execute requests, and see responses in
real time.
The Security Command Center API lets analysts and administrators manage your resources
and findings. Engineers can use the API to build custom reporting and monitoring
solutions.
Extend functionality with custom detection modules
Premium and Enterprise service tiers
If you need detectors that meet the unique needs of your organization, consider
creating custom modules:
Custom modules for Security Health Analytics
let you define your own detection rules for vulnerabilities,
misconfigurations, or compliance violations.
Custom modules for Event Threat Detection
let you monitor your Logging stream for threats based on
parameters that you specify.
Review and manage resources
Standard-legacy, Standard, Premium, and Enterprise service tiers
Security Command Center displays all of your assets on the Assets page
in the Google Cloud console, where you can view information such as the findings for
each asset, their change history, their metadata, and their IAM
policies. For the Premium and Enterprise service tiers, you can also use
SQL queries to analyze your
assets.
The asset information on the Assets page is read from
Cloud Asset Inventory .
To receive real-time notifications about resource and policy changes,
create and subscribe to a feed .
For more information, see
Assets page .
Rapidly respond to vulnerabilities and threats
Standard-legacy, Standard, Premium, and Enterprise service tiers
Security Command Center findings provide records of detected security issues
that include extensive details on the affected resources and
step-by-step suggested instructions for investigating and remediating
vulnerabilities and threats.
Vulnerabilities findings describe the detected vulnerability or
misconfiguration, calculate an attack exposure score, and an estimated
severity. Vulnerabilities findings also alert you to violations of security
standards or benchmarks. For more information, see
Supported benchmarks .
For the Standard, Premium, and Enterprise service tiers, vulnerability findings also include
information from Mandiant about the
exploitability and potential impact of the vulnerability based on
the vulnerability's corresponding CVE record .
You can use this information to help prioritize
the remediation of the vulnerability.
For more information, see
Prioritize by CVE impact and exploitability .
Threat findings include data from the MITRE ATT&CK
framework , which explains techniques for
attacks against cloud resources and provides remediation guidance, and
VirusTotal , an
Alphabet-owned service that provides context on potentially malicious files,
URLs, domains, and IP addresses.
The following guides are a starting point to help you fix issues and protect
your resources.
Remediating Security Health Analytics findings
Remediating Web Security Scanner findings
Investigating and responding to threats
Control finding volume
Standard-legacy, Standard, Premium, and Enterprise service tiers
To control the volume of findings in Security Command Center, you can manually or
programmatically mute individual findings, or create mute rules that
automatically mute findings based on filters you define. There are two types of
mute rules you can use to control finding volume:
Static mute rules that indefinitely mute future findings.
Dynamic mute rules that contain an option to temporarily mute current and
future findings.
We recommend using dynamic mute rules exclusively to reduce the number of
findings you review manually. To avoid confusion, we don't recommend using both
static and dynamic mute rules simultaneously. For a comparison of the two rule
types, see Types of mute
rules .
Muted findings are hidden and silenced, but continue to be logged for audit and
compliance purposes. You can view muted findings or unmute them at any time. To
learn more, see
Mute findings in Security Command Center .
Muting findings with dynamic mute rules is the recommended and most effective
approach for controlling finding volume. Alternatively, you can use security
marks to add assets to
allowlists .
Each Security Health Analytics detector has a dedicated mark type that lets you exclude
marked resources from the detection policy. This feature is helpful when you
don't want findings created for specific resources or projects.
To learn more about security marks, see Using security marks .
Set up notifications
Standard-legacy, Standard, Premium, and Enterprise service tiers
Notifications alert you to new and updated findings in near-real time and, with
email and chat notifications ,
can do so even when you're not logged in to Security Command Center. Learn more in
Setting up finding notifications .
You can also create
continuous exports ,
which simplify the process of exporting findings to
Pub/Sub .
Explore Cloud Run functions
Standard-legacy, Standard, Premium, and Enterprise service tiers
Cloud Run functions is a
Google Cloud service that lets you connect cloud services and run code in
response to events. You can use the Notifications API and Cloud Run functions to
send findings to third-party remediation and ticketing systems or take automated
actions, like automatically closing findings.
To get started, visit Security Command Center's open source repository of
Cloud Run functions code .
The repository contains solutions to help you take automated actions on security
findings.
Caution: Deploying functions that take automated actions on your
findings might have unintended consequences, like reducing access to resources
or changing production systems. Carefully weigh the potential impact before
deploying or executing functions.
Keep communications on
Standard-legacy, Standard, Premium, and Enterprise service tiers
Security Command Center is regularly updated with new detectors and features.
Release notes inform you about product
changes and updates to documentation. But you can set your
communication preferences in
the Google Cloud console to receive product updates and special promotions by
email or mobile. You can also let us know whether you're interested in
participating in user surveys and pilot programs.
If you have comments or questions, you can give feedback by talking with your
salesperson, contacting our Cloud Support staff, filing a bug ,
or by using the Feedback menu in the Google Cloud console.
Send feedback through the Google Cloud console
In the Google Cloud console, go to Security Command Center.
Go to Security Command Center
Select your organization or project.
Click feedback Feedback .
To indicate your overall satisfaction with Security Command Center, click
thumb_up
Thumbs up or thumb_down Thumbs
down .
To give detailed feedback, follow these steps:
Click feedback Give more
feedback .
In the field, enter your feedback. Don't enter sensitive information.
To provide a screenshot that is related to your feedback, click
Capture screenshot .
Optional: Use the Highlight or Hide info tool to draw boxes around
sections that you want to highlight or hide in the screenshot. Click
Done .
Click Send .
What's next
Learn more about
using Security Command Center .
Learn how to
configure Security Command Center services .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
