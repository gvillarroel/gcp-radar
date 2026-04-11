---
title: "Custom CA certificates \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca
  title: "Custom CA certificates \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Custom CA certificates
Stay organized with collections
Save and categorize content based on your preferences.
Dialogflow CX webhooks require HTTPS endpoints
that present valid TLS certificates when they are
verified using Google's default trust store. However, you may want to use custom
CA certificates, which cannot be signed by a certificate authority recognized by
Google's default trust store. For example, webhook servers that are inside
Google's private VPC network have this issue. In this case, you can upload the
custom certificates to Dialogflow CX when creating webhooks, and the uploaded
certificates will override Google's default trust store.
Custom CA certificates can be self-signed certificates or custom root
certificates. You can upload multiple certificates in case you want to rotate
the certificates. The certificates must be in
DER format
and must be signed with
subject alternative name
matching the webhook URL. When the
keyUsage
extension is present, its value needs to be digitalSignature .
Demo self-signed server
The following is the configuration of a demo server:
Prepare self-signed certificate files.
We use www.example.com as the example domain.
openssl genrsa -out server.key 2048
openssl req -nodes -new -sha256 -newkey rsa:2048 -key server.key -subj "/CN=www.example.com" -out server.csr
openssl x509 -req -days 3650 -sha256 -in server.csr -signkey server.key -out server.crt -extfile
Start your HTTPS server using the server certificate ( server.crt )
and private key ( server.key ) created in previous step.
We assume the server is listening on port 443.
Test to connect to the server locally.
curl --cacert server.crt https://www.example.com --resolve www.example.com:443:127.0.0.1
Demo webhook with custom certificate
After you have setup the server with your custom certificate, you may
create a webhook resource
with the following extra instructions to use the custom certificate:
Set the URL matching the domain signed with the certificate
( https://www.example.com in previous demo).
It is your own responsibility to make sure that your domain will correctly
resolve to the IP address of the server.
Upload the custom certificate in DER format. This is the server.der file in previous self-signed demo or the custom root certificate.
For webhooks integrated with
Service Directory private network access ,
Setup your
Service Directory Endpoint
with the IP address and port of your server, and provide the
Service Directory Service
when creating webhook.
Previous
arrow_back
Regionalization and location settings
Next
Access Transparency
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
