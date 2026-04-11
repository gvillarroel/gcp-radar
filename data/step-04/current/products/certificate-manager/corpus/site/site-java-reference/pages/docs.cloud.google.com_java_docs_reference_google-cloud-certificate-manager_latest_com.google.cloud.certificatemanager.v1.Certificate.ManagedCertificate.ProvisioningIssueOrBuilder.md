---
title: "Interface Certificate.ManagedCertificate.ProvisioningIssueOrBuilder (0.91.0)\
  \ \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssueOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssueOrBuilder
  title: "Interface Certificate.ManagedCertificate.ProvisioningIssueOrBuilder (0.91.0)\
    \ \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface Certificate.ManagedCertificate.ProvisioningIssueOrBuilder (0.91.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.91.0 (latest)
0.90.0
0.88.0
0.86.0
0.85.0
0.84.0
0.83.0
0.81.0
0.79.0
0.78.0
0.77.0
0.76.0
0.75.0
0.73.0
0.71.0
0.70.0
0.67.0
0.66.0
0.65.0
0.63.0
0.62.0
0.61.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.52.0
0.51.0
0.50.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.40.0
0.39.0
0.38.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.27.0
0.26.0
0.25.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.2
0.4.0
0.3.1
0.2.0
0.1.1
public static interface Certificate . ManagedCertificate . ProvisioningIssueOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getDetails()
public abstract String getDetails ()
Output only. Human readable explanation about the issue. Provided to
help address the configuration issues. Not guaranteed to be stable. For
programmatic access use Reason enum.
string details = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The details.
getDetailsBytes()
public abstract ByteString getDetailsBytes ()
Output only. Human readable explanation about the issue. Provided to
help address the configuration issues. Not guaranteed to be stable. For
programmatic access use Reason enum.
string details = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for details.
getReason()
public abstract Certificate . ManagedCertificate . ProvisioningIssue . Reason getReason ()
Output only. Reason for provisioning failures.
.google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssue.Reason reason = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Certificate.ManagedCertificate.ProvisioningIssue.Reason
The reason.
getReasonValue()
public abstract int getReasonValue ()
Output only. Reason for provisioning failures.
.google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssue.Reason reason = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
The enum numeric value on the wire for reason.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
