---
title: "Configuring ingress and egress policies \_|\_ VPC Service Controls \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/configuring-ingress-egress-policies
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/service-perimeters
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/configuring-ingress-egress-policies
  title: "Configuring ingress and egress policies \_|\_ VPC Service Controls \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Configuring ingress and egress policies
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to configure ingress and egress policies
for your VPC Service Controls perimeter.
Ingress and egress policies can be configured for existing perimeters or
included when a perimeter is created.
Updating ingress and egress policies for a service perimeter
Console
In the Google Cloud console navigation menu, click Security , and then
click VPC Service Controls .
Go to the VPC Service Controls page
Select an existing service perimeter.
Click Edit .
On the Edit service perimeter page, click Ingress policy or Egress policy .
Expand the ingress or egress rule that you want to edit.
In the From and To sections, edit the ingress or egress rule attributes
that you want to change.
For the list of ingress rule attributes, see Ingress rules reference .
Note: If you select All sources in the Sources list of the ingress rule, the
ingress policy allows access from any network origin.
For the list of egress rule attributes, see Egress rules reference .
The YAML attribute reference describes the same attributes that are found
in the Google Cloud console, however the Google Cloud console uses
slightly different names.
Click Save .
gcloud
Note: the following gcloud commands assume that a default access policy has
been configured. For more details, see Get the name and etag of an access policy
To update a perimeter policy, run one of the following commands replacing
variables with appropriate values:
gcloud access-context-manager perimeters update PERIMETER_NAME --set-ingress-policies= INGRESS-FILENAME .yaml
gcloud access-context-manager perimeters update PERIMETER_NAME --set-egress-policies= EGRESS-FILENAME .yaml
For example:
gcloud access-context-manager perimeters update my-perimeter --set-ingress-policies=my-ingress-rule.yaml
For information about configuring ingress and egress rules as YAML files, see Ingress
rules reference
and Egress rules reference .
Setting ingress and egress policies during perimeter creation
Console
In the Google Cloud console navigation menu, click Security , and then
click VPC Service Controls .
Go to the VPC Service Controls page
Click New perimeter .
For information about the other service perimeter configurations, see Create a
service perimeter .
On the Create a service perimeter page, click Ingress policy or Egress policy .
Click Add rule .
In the From and To sections, specify the ingress or egress rule attributes
that you want to configure.
For the list of ingress rule attributes, see Ingress rules reference .
Note: If you select All sources in the Sources list of the ingress rule, the
ingress policy allows access from any network origin.
For the list of egress rule attributes, see Egress rules reference .
The YAML attribute reference describes the same attributes that are found
in the Google Cloud console, however the Google Cloud console uses
slightly different names.
Click Create .
gcloud
Note: the following gcloud commands assume that a default access policy has
been configured. For more details, see Get the name and etag of an access policy
Run the following command during the creation of a perimeter to create an
ingress/egress policy:
gcloud access-context-manager perimeters create PERIMETER_NAME --title= TITLE --ingress-policies= INGRESS-FILENAME .yaml --restricted-services= SERVICE --resources="projects/ PROJECT "
gcloud access-context-manager perimeters create PERIMETER_NAME --title= TITLE --egress-policies= -EGRESS-FILENAME .yaml --restricted-services= SERVICE --resources="projects/ PROJECT "
For example:
gcloud access-context-manager perimeters create my-perimeter --title=perimeter-for-project-1 --ingress-policies=my-ingress-rule.yaml --restricted-services=storage.googelapis.com --resources="projects/myproject"
For information about configuring ingress and egress rules as YAML files, see Ingress
rules reference
and Egress rules reference .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
