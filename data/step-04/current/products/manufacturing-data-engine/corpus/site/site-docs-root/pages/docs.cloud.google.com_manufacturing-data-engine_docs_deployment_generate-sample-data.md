---
title: "Generate sample data \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/generate-sample-data
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/manufacturing-data-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/generate-sample-data
  title: "Generate sample data \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Manufacturing Data Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Generate sample data
This guide explains how you can generate sample data using the bash script
provided in the release package.
Before you begin
Make sure to apply the default configuration package
or create relevant message classes, types, and parsers.
Execute the script to generate sample data
Find the bash script in the deployment package in the file
/testing/send-data-to-mde.sh . This script requires two arguments:
The project ID.
The type of data to send. This can be either numeric or discrete .
When sending data the timestamp is automatically injected and the rest of the
values are the same. If you want to send a different payload edit the
bash script.
For example to send numeric data use the following command:
./send-data-to-mde.sh PROJECT_ID numeric
You will see a similar response:
send-data-to-mde.sh: ***** Welcome to the MDE Data Generator *****
This script will send numeric data to MDE so that you can
validate that the entire pipeline is working
PROJECT_ID set to PROJECT_ID
You 're authenticated as USER_EMAIL
Do you want to start sending data [Y/n]? Y
Sending messages every 5 seconds
Press [CTRL+C] to stop..
Sent:
{
"tagName": "mde-test-numeric",
"timestamp": "1695643807000",
"value": 10
}
messageIds:
- ' 8840355690320815 '
To send discrete data use the following command:
./send-data-to-mde.sh PROJECT_ID discrete
You will see a similar response:
send-data-to-mde.sh: ***** Welcome to the MDE Data Generator *****
This script will send discrete data to MDE so that you can
validate that the entire pipeline is working
PROJECT_ID set to PROJECT_ID
You 're authenticated as USER_EMAIL
Do you want to start sending data [Y/n]? Y
Sending messages every 5 seconds
Press [CTRL+C] to stop..
Sent:
{
"tagName": "mde-test-discrete",
"timestamp": "1695643827000",
"value": {
"test1": true,
"test2": "someValue"
}
}
messageIds:
- ' 9223124765272389 '
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
