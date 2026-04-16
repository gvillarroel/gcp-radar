---
title: "Generate a random number and return result in JSON \_|\_ Workflows \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/samples/workflows-functions-randomgen
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/samples/workflows-functions-randomgen
  title: "Generate a random number and return result in JSON \_|\_ Workflows \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Samples
Generate a random number and return result in JSON
Stay organized with collections
Save and categorize content based on your preferences.
After receiving an HTTP request, this function generates a random number between 1 and 100, and then returns the number in JSON format.
Explore further
For detailed documentation that includes this code sample, see the following:
Use Workflows with Cloud Run and Cloud Run functions tutorial
Using Workflows to connect services
Workflows Tutorial (1st gen)
Code sample
Python
Before trying this sample, follow the Python setup instructions in the
Workflows quickstart using
client libraries .
For more information, see the
Workflows Python API
reference documentation .
To authenticate to Workflows, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import functions_framework
import random
from flask import jsonify
@functions_framework . http
def randomgen ( request ):
randomNum = random . randint ( 1 , 100 )
output = { "random" : randomNum }
return jsonify ( output )
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
