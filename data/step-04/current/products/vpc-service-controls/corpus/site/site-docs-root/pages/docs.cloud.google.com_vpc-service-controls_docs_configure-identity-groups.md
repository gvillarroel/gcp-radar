---
title: "Configure identity groups and third-party identities in ingress and egress\
  \ rules \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups
  title: "Configure identity groups and third-party identities in ingress and egress\
    \ rules \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation"
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
Configure identity groups and third-party identities in ingress and egress rules
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use identity groups in ingress and egress rules to
allow access to resources protected by service perimeters.
VPC Service Controls uses ingress and egress
rules to allow access to and
from the resources and clients protected by service perimeters. To further
refine access, you can specify identity groups in your ingress and egress rules.
An identity group is a convenient way to apply access controls to a collection
of users and lets you manage identities that have similar access policies.
To configure identity groups in the ingress or egress rules, you can use the
following supported identity groups in the identities attribute:
Google group
Third-party identities such as
workforce pool users and workload
identities .
VPC Service Controls doesn't support Workload Identity Federation for GKE .
For information about principal identifier formats of supported identity groups,
see Supported identities for ingress and egress rules .
For information about how to apply ingress and egress rule policies, see
Configuring ingress and egress
policies .
Before you begin
Make sure that you read the Ingress and egress
rules .
Configure identity groups in ingress rules
Console
When you update an ingress policy of a service perimeter
or set an ingress policy during perimeter creation
using the Google Cloud console, you can configure the ingress rule to use identity groups.
When you create a perimeter or edit a perimeter in the Google Cloud console,
select Ingress policy .
In the From section of your ingress policy, select Select identities & groups
from the Identities list.
Click Add identities .
In the Add identities pane, specify a Google group or a third-party
identity to which you want to provide access to resources in the perimeter.
To specify an identity group, use the format specified in Supported identities .
Click Add identities .
Click Save .
For information about the other ingress rule attributes, see Ingress rules reference .
gcloud
You can configure an ingress rule to use identity groups using a JSON file or a
YAML file. The following sample uses the YAML format:
- ingressFrom:
identities:
- PRINCIPAL_IDENTIFIER
sources:
- resource: RESOURCE
*OR*
- accessLevel: ACCESS_LEVEL
ingressTo:
operations:
- serviceName: SERVICE_NAME
methodSelectors:
- method: METHOD_NAME
resources:
- projects/ PROJECT_NUMBER
Replace the following:
PRINCIPAL_IDENTIFIER : specify a Google group or a
third-party identity to which you want to provide access to resources in the perimeter.
To specify an identity group, use the format specified in Supported identities .
For information about the other ingress rule attributes, see Ingress rules reference .
After you update an existing ingress rule to configure identity groups,
you need to update the rule policies of the service perimeter:
gcloud access-context-manager perimeters update PERIMETER_ID --set-ingress-policies= RULE_POLICY .yaml
Replace the following:
PERIMETER_ID : the ID of the service perimeter that you want to update.
RULE_POLICY : the path of the modified ingress rule file.
For more information, see Updating ingress and egress policies for a service
perimeter .
Configure identity groups in egress rules
Console
When you update an egress policy of a service perimeter
or set an egress policy during perimeter creation
using the Google Cloud console, you can configure the egress rule to use identity groups.
When you create a perimeter or edit a perimeter in the Google Cloud console,
select Egress policy .
In the From section of your egress policy, select Select identities & groups
from the Identities list.
Click Add identities .
In the Add identities pane, specify a Google group or a third-party
identity that can access the specified resources outside the perimeter.
To specify an identity group, use the format specified in Supported identities .
Click Add identities .
Click Save .
For information about the other egress rule attributes, see Egress rules reference .
gcloud
You can configure an egress rule to use identity groups using a JSON file or a
YAML file. The following sample uses the YAML format:
- egressTo:
operations:
- serviceName: SERVICE_NAME
methodSelectors:
- method: METHOD_NAME
resources:
- projects/ PROJECT_NUMBER
egressFrom:
identities:
- PRINCIPAL_IDENTIFIER
Replace the following:
PRINCIPAL_IDENTIFIER : specify a Google group or a
third-party identity that can access the specified resources outside the perimeter.
To specify an identity group, use the format specified in Supported identities .
For information about the other egress rule attributes, see Egress rules reference .
After you update an existing egress rule to configure identity groups,
you need to update the rule policies of the service perimeter:
gcloud access-context-manager perimeters update PERIMETER_ID --set-egress-policies= RULE_POLICY .yaml
Replace the following:
PERIMETER_ID : the ID of the service perimeter that you want to update.
RULE_POLICY : the path of the modified egress rule file.
For more information, see Updating ingress and egress policies for a service
perimeter .
Limitations
Before using identity groups, understand the unsupported features
in ingress and egress rules.
When you use identity groups in an egress rule, you can't set the
resources field in the egressTo attribute to "*" .
You can't use a workload identity in ingress and egress rules to allow
Apache Airflow web interface
operations in Cloud Composer. However, you can use the ANY_IDENTITY
identity type in ingress and egress rules to allow access to all identities,
including workload identities. For more information about the ANY_IDENTITY
identity type, see Ingress and egress rules .
For information about ingress and egress rule limits, see Quotas and
limits .
What's next
Example of using identity groups and third-party identities in ingress and egress rules
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
