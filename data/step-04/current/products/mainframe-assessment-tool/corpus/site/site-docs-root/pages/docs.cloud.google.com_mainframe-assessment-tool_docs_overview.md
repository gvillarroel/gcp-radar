---
title: "Mainframe Assessment Tool overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-assessment-tool/docs
source_metadata:
  url: https://docs.cloud.google.com/mainframe-assessment-tool/docs/overview
  title: "Mainframe Assessment Tool overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Mainframe Assessment Tool
Guides
Send feedback
Mainframe Assessment Tool overview
Stay organized with collections
Save and categorize content based on your preferences.
Mainframe Assessment Tool helps assess your
existing mainframe codebase and plan your migration to Google Cloud.
Mainframe Assessment Tool automates assessment, saving you time and resources. It uses
generative AI to help you understand your existing codebase and generate
documentation.
The mainframe migration journey has the following phases: discover and assess,
plan, and migrate workloads. Mainframe Assessment Tool helps you discover and assess your
existing codebase and plan your migration, you can then modernize your code for
migration by using Mainframe Code Rewrite
( Preview ), a Visual Studio Code extension that
uses generative AI to help you rewrite applications in Java, C#, and Python.
Languages
Mainframe Assessment Tool supports the analysis of the following languages:
COBOL programs and copybooks
JCL jobs, procedures, includes, and card data
HLASM programs
PL/I programs ( Preview )
RPG/RPGLE programs and include files
Easytrieve programs
Natural for z/OS ( Preview )
Fortran ( Preview )
Database schemas
Mainframe Assessment Tool supports the following database schemas:
DB2: through Embedded SQL
IMS DB: through EXEC DLI and CBLTDLI calls
Transaction monitors
Mainframe Assessment Tool supports the following transaction monitors:
CICS: through EXEC CICS statements
IMS DC: through CBLTDLI calls
Scheduler configurations
Mainframe Assessment Tool supports the following scheduler configurations:
BMC Control-M
Mainframe migration journey
The following diagram illustrates the overall migration journey of mainframe
applications:
The migration journey has the following phases:
Discover and assess your existing codebase: Mainframe Assessment Tool helps you
perform an assessment of the mainframe application footprint,
technology stack, and dependencies. After you upload a zip file that
contains code for one or more mainframe applications, Mainframe Assessment Tool
scans the application code and provides you with an assessment.
Automating the assessment process with Mainframe Assessment Tool saves your
organization the time and effort of manually collecting and processing the
application code.
Plan the migration: You can use the detailed assessment from
Mainframe Assessment Tool to plan your migration more quickly and to lower
migration risks. To help you plan, Mainframe Assessment Tool automatically groups
mainframe assets into sequenced migratable units based on call and data
dependencies, and user configuration.
Migrate workloads: Depending on the choices that you made during the
planning phase, you can use Google Cloud solutions to start migrating.
Code modernization with Mainframe Code Rewrite ( Preview )
After you complete your assessment by using Mainframe Assessment Tool, you can start
modernizing your code with
Mainframe Code Rewrite ,
using generative AI and Gemini models.
Mainframe Code Rewrite is a Visual Studio Code extension that supports both
Windows and Linux operating systems. The extension integrates mainframe-specific
generative AI code analysis capabilities—such as specification, code, and
test generation—within an Integrated Development Environment (IDE). You can
use Mainframe Code Rewrite to rewrite legacy mainframe applications into modern
cloud applications in Java, C#, or Python faster and with reduced costs.
Key benefits
Reimagine and modernize mainframe applications for the cloud:
create fully modernized applications to replace legacy mainframe
applications, substantially enhancing agility, scalability, and security,
while reducing maintenance costs and complexity.
Generative AI assisted code generation and specifications creation:
use Gemini Code Assist ,
generative AI, and mainframe-specific context to analyze and reimagine
legacy mainframe code into modern languages, such as Java, C#, and Python.
Rewrite mainframe applications faster and at a lower cost:
accelerate modernization timelines and boost developer productivity by
generating application specifications, code, and test cases from legacy
mainframe code.
Seamless IDE integration: access powerful generative AI capabilities
and customized Gemini models for modernizing mainframe applications inside
an IDE.
Data collection security and privacy
Mainframe Assessment Tool only collects information extracted from the zip
file that you provide. It doesn't collect personally identifiable information
(PII) or data subject to Payment Card Industry (PCI) data security standard, or
Health Insurance Portability and Accountability Act (HIPAA) compliance
requirements.
All the collected data is used only to assess and analyze your applications for
the purposes of cloud migration assessment and planning. Your data is never
exported outside the VM on which it is deployed. The source code is uploaded
to Vertex AI, but the model is not enriched by information extracted
from this source code.
What's next
Learn how to configure your Google Cloud project for Mainframe Assessment Tool .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
