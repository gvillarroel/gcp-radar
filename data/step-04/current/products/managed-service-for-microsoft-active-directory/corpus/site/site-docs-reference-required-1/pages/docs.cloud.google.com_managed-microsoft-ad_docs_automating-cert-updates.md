---
title: "Best practices for automating certificate renewal \_|\_ Managed Service for\
  \ Microsoft Active Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/automating-cert-updates
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/automating-cert-updates
  title: "Best practices for automating certificate renewal \_|\_ Managed Service\
    \ for Microsoft Active Directory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Managed Microsoft AD
Guides
Send feedback
Best practices for automating certificate renewal
Stay organized with collections
Save and categorize content based on your preferences.
This topic describes the best practices for automating certificate renewal for
LDAPS.
Overview
If you are issuing shorter-lived certificates, we recommend that you automate
the renewal of these certificates.
Dealing with API errors
Automation should check for errors both on the initial blocking API call as
well as when polling the returned long-running operation. The update can only be
considered as successful if the long-running operation is marked as done without
error.
If UpdateLdapsSettings returns an error with code INVALID_ARGUMENT , the
error message can explain what is wrong with the uploaded certificate. This
error is typically returned during the initial blocking call to the API. In such
cases, retries are ineffective and the automation should send an alert.
If the API returns any other error code which is retriable (such as
UNAVAILABLE ), the automation should retry the call with the appropriate
backoff. These errors are typically returned when polling the long-running
operation that is returned by the initial blocking call to
UpdateLdapsSettings .
Learn more about
UpdateLdapsSettings .
Checking the LDAPSSettings state
After calling UpdateLdapsSettings , it is good practice to check that
LDAPSSettings meets expectations and is in a good state ( ACTIVE ). You can
call GetLdapsSettings to compare the fingerprints of certificates in the
intended state against the deployed certificate fingerprints. You can use tools
like OpenSSL to calculate the fingerprints of your new certificates.
Do take note of any display differences between the method the automation uses
to compute fingerprints versus how Managed Microsoft AD stores them.
For example, Managed Microsoft AD stores a thumbprint as a single undelimited
hexadecimal string: 771B8FD90806E074A7AD49B1624D2761137557D2 . OpenSSL returns
the following for the same certificate:
SHA1 Fingerprint=77:1B:8F:D9:08:06:E0:74:A7:AD:49:B1:62:4D:27:61:13:75:57:D2 .
Learn more about LDAPSSettings and
GetLdapsSettings .
Building a PFX certificate chain
If your automation procures certificates in the PEM or CRT formats, you must
convert them to PFX and include the entire certificate chain.
To convert to PFX and include the entire chain, complete the following steps
using shell and OpenSSL.
Create a single PEM file that includes all intermediate certificates as well
as the root certificate.
cat root-ca-cert.pem >> temp.pem
echo -e "\n" >> temp.pem
cat intermediate-ca-cert.pem >> temp.pem
Build the output PFX file. leaf.key is the private key.
openssl pkcs12 -export -out out.pfx -inkey leaf.key -in leaf-cert.pem \
-certfile temp.pem -passout " EXPORT_PASSWORD "
Show info of the PFX file. This should show the entire root to leaf chain
and the private key.
openssl pkcs12 -in out.pfx -nodes -passin " EXPORT_PASSWORD "
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
