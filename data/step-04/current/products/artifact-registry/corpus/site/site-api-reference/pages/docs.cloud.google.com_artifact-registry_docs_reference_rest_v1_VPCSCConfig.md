---
title: "VPCSCConfig \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/VPCSCConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/VPCSCConfig
  title: "VPCSCConfig \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Reference
Send feedback
VPCSCConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
VPCSCPolicy
The Artifact Registry VPC SC config that apply to a Project.
JSON representation
{
"name" : string ,
"vpcscPolicy" : enum ( VPCSCPolicy )
}
Fields
name
string
The name of the project's VPC SC Config.
Always of the form: projects/{projectID}/locations/{location}/vpcscConfig
In update request: never set In response: always set
vpcscPolicy
enum ( VPCSCPolicy )
The project per location VPC SC policy that defines the VPC SC behavior for the Remote Repository (Allow/Deny).
VPCSCPolicy
VPCSCPolicy is the VPC SC policy for project and location.
Enums
VPCSC_POLICY_UNSPECIFIED
VPCSC_POLICY_UNSPECIFIED - the VPS SC policy is not defined. When VPS SC policy is not defined - the Service will use the default behavior (VPCSC_DENY).
DENY
VPCSC_DENY - repository will block the requests to the Upstreams for the Remote Repositories if the resource is in the perimeter.
ALLOW
VPCSC_ALLOW - repository will allow the requests to the Upstreams for the Remote Repositories if the resource is in the perimeter.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
