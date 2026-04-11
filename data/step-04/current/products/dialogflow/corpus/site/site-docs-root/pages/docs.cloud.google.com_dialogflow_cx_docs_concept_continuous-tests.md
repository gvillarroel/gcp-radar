---
title: "Continuous tests and deployment \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/continuous-tests
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/continuous-tests
  title: "Continuous tests and deployment \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Send feedback
Continuous tests and deployment
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The continuous tests feature automatically runs a set of test cases configured
for an environment to verify the intended behavior of the flow versions in that
environment.
To prevent a bad version from becoming live in the environment, you can also use
continuous deployment to run the same set of verification tests before deploying
a flow version to the environment.
Manage continuous tests and deployment
To manage continuous tests and deployment:
Console
Open the Dialogflow CX console .
Choose your GCP project.
Select your agent.
Click the Manage tab.
Click CI/CD .
Select an environment from the Environment name dropdown menu.
Click the Continuous tests tab. The Test Cases tab opens by default.
In the Select test cases dropdown, select a predefined test case to add
to the continuous testing set.
In the Settings tab, the Continuous test toggle should be on by default.
To add continuous deployment, click the Continuous deployment toggle.
To view the results of daily continuous tests for an environment, click the
Continuous tests tab, then Results .
To view whether continuous testing is enabled for an environment, click
Environments under the Manage tab. For each environment, the continuous
testing status is under the Continuous Test column.
API
See the runContinuousTest and deployFlow methods for the Environments type.
Go to the Environment API reference
Select a protocol and version for the Environment reference:
Protocol
V3
V3beta1
REST
Environment resource
Environment resource
RPC
Environment interface
Environment interface
C++
EnvironmentsClient
Not available
C#
EnvironmentsClient
Not available
Go
EnvironmentsClient
Not available
Java
EnvironmentsClient
EnvironmentsClient
Node.js
EnvironmentsClient
EnvironmentsClient
PHP
Not available
Not available
Python
EnvironmentsClient
EnvironmentsClient
Ruby
Not available
Not available
Close
Previous
arrow_back
Experiments
Next
Conversation profiles
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
