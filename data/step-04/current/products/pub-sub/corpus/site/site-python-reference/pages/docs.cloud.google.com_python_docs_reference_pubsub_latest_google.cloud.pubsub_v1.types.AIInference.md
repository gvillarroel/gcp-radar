---
title: "Class AIInference (2.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.types.AIInference
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/pubsub/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.types.AIInference
  title: "Class AIInference (2.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class AIInference (2.35.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.35.0 (latest)
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.1
2.28.0
2.27.3
2.26.1
2.25.2
2.23.1
2.22.0
2.21.5
2.20.3
2.19.8
2.18.4
2.17.1
2.16.1
2.15.2
2.14.1
2.13.12
2.12.1
2.11.1
2.10.0
2.9.0
2.8.0
2.7.1
2.6.1
2.5.0
2.4.2
2.3.0
2.2.0
2.1.0
2.0.0
1.7.2
1.6.1
1.5.0
1.4.3
1.3.1
1.2.0
1.1.0
1.0.2
0.45.0
0.44.0
0.43.0
AIInference ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Configuration for making inference requests against Vertex AI
models.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
endpoint
:noindex:
str
Required. An endpoint to a Vertex AI model of the form
projects/{project}/locations/{location}/endpoints/{endpoint}
or
projects/{project}/locations/{location}/publishers/{publisher}/models/{model} .
Vertex AI API requests will be sent to this endpoint.
unstructured_inference
:noindex:
google.pubsub_v1.types.AIInference.UnstructuredInference
Optional. Requests and responses can be any
arbitrary JSON object.
This field is a member of oneof _ inference_mode .
service_account_email
:noindex:
str
Optional. The service account to use to make prediction
requests against endpoints. The resource creator or updater
that specifies this field must have
iam.serviceAccounts.actAs permission on the service
account. If not specified, the Pub/Sub `service
agent <{$universe.dns_names.final_documentation_domain} am/docs/service-agents="">`__,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com,
is used.
Classes
UnstructuredInference
UnstructuredInference ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Configuration for making inferences using arbitrary JSON
payloads.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
