---
title: "Configure VPC Service Controls for Gemini \_|\_ Gemini for Google Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/configure-vpc-service-controls
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/configure-vpc-service-controls
  title: "Configure VPC Service Controls for Gemini \_|\_ Gemini for Google Cloud\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
Guides
Send feedback
Configure VPC Service Controls for Gemini
Stay organized with collections
Save and categorize content based on your preferences.
This document shows how to configure
VPC Service Controls to
support Gemini for Google Cloud , an AI-powered
collaborator in Google Cloud. To complete this configuration, you do the
following:
Update your organization's service perimeter to include
Gemini. This document assumes that you already have a
service perimeter at the organization level. For more information about
service perimeters, see Service perimeter details and
configuration .
In projects that you have enabled access to Gemini,
configure VPC networks to block outbound traffic except for
traffic to the restricted VIP range.
Before you begin
Ensure that
Gemini Code Assist is set up for your Google Cloud
user account and project.
Make sure that you have the
required Identity and Access Management (IAM) roles
to set up and administer VPC Service Controls.
Ensure that you have a service perimeter at the organization level that you
can use to set up Gemini. If you don't have a service
perimeter at this level, you can
create one .
Add Gemini to your service perimeter
To use VPC Service Controls with Gemini, you add
Gemini to the service perimeter at the organization level. The
service perimeter must include all the services that you use with
Gemini and other Google Cloud services that you want to
protect.
To add Gemini to your service perimeter, follow these steps:
In the Google Cloud console, go to the VPC Service Controls page.
Go to VPC Service Controls
Select your organization.
On the VPC Service Controls page, click the name of your perimeter.
Click Add Resources and do the following:
For each project in which you have enabled Gemini, in
the
Add resources pane, click Add project , and then do the following:
In the Add projects dialog, select the projects that you want to
add.
If you're using
Shared VPC , add the host
project and service projects to the service perimeter.
Click Add selected resources . The added projects appear in the
Projects section.
For each VPC network in your projects, in the Add
resources pane, click Add VPC network , and then do the following:
From the list of projects, click the project that contains the
VPC network.
In the Add resources dialog, select the VPC network's
checkbox.
Click Add selected resources . The added network appears in the VPC
networks section.
Click Restricted Services and do the following:
In the Restricted Services pane, click Add services .
In the Specify services to restrict dialog, select
Gemini for Google Cloud API and Gemini Code Assist API as
the services that you want to secure within the perimeter.
If you're planning to use
code customization ,
select Developer Connect API as well. For more information
about Developer Connect, see
Developer Connect overview .
To learn how to use Organization Policy Service custom constraints to restrict
specific operations on developerconnect.googleapis.com/Connection and
developerconnect.googleapis.com/GitRepositoryLink , see
Create custom organization policies .
Note: We recommend that you restrict all services when you create a
perimeter to mitigate the risk of data exfiltration from Google Cloud
services.
Click Add n services , where n is the number of
services you selected in the previous step.
Optional: If your developers need to use Gemini within the
perimeter from the Cloud Code plugin in their IDEs, then you'll
need to configure the
ingress policy .
Enabling VPC Service Controls for Gemini prevents all
access from outside the perimeter, including running
Gemini Code Assist IDE extensions from machines not in the
perimeter, such as company laptops. Therefore, these steps are necessary if
you want to use Gemini with the Gemini Code Assist
plugin.
Click Ingress policy .
In the Ingress rules pane, click Add rule .
In From attributes of the API client , specify the sources from
outside the perimeter that require access. You can specify projects,
access levels, and VPC networks as sources.
In To attributes of Google Cloud resources/services , specify
the service name of Gemini and
Gemini Code Assist API.
For a list of ingress rule attributes, see
Ingress rules reference .
Optional: If your organization uses
Access Context Manager and you want to
provide developers access to protected resources from outside the perimeter,
then set access levels:
Click Access Levels .
In the Ingress Policy: Access Levels pane, select the Choose
Access Level field.
Select the checkboxes corresponding to the access levels that you want
to apply to the perimeter.
Click Save .
After you complete these steps, VPC Service Controls checks all calls to the
Gemini for Google Cloud API to ensure that they originate from within the same
perimeter.
Configure VPC networks
You need to configure your VPC networks so that the requests sent
to the regular googleapis.com virtual IP are automatically routed to the
restricted virtual IP (VIP)
range ,
199.36.153.4/30 ( restricted.googleapis.com ), where your Gemini
service is serving. You don't need to change any configurations in the
Gemini Code Assist IDE extensions.
For each VPC network in your project, follow these steps to block
outbound traffic except for traffic to the restricted VIP range:
Enable Private Google Access
on the subnets hosting your VPC network resources.
Configure firewall rules
to prevent data from leaving the VPC network.
Caution: Failure to properly configure firewall rules can leave your
services vulnerable to data exfiltration.
Create a deny egress rule that blocks all outbound traffic.
Note: Ensure that the deny all egress firewall rule has a priority after
1000 . Otherwise, traffic from the Serverless VPC Access
connector to your service are blocked.
Create an allow egress rule that permits traffic to 199.36.153.4/30 on
TCP port 443 . Ensure that the allow egress rule has a priority before the
deny egress rule that you have just created—this allows egress only to the
restricted VIP range.
Create a Cloud DNS response policy .
Create a rule for the response policy
to resolve *.googleapis.com to restricted.googleapis.com with the
following values:
DNS name: *.googleapis.com.
Local data: restricted.googleapis.com.
Record type: A
TTL: 300
RR data: 199.36.153.4|199.36.153.5|199.36.153.6|199.36.153.7
The IP address range for restricted.googleapis.com is 199.36.153.4/30 .
After you complete these steps, the requests that originate from within the
VPC network are unable to leave the VPC network,
preventing egress outside the service perimeter. These requests can only reach
Google APIs and services that check VPC Service Controls, preventing
exfiltration through Google APIs.
Additional configurations
Depending on the Google Cloud products that you use with
Gemini, you must consider the following:
Client machines connected to the perimeter. Machines that are inside the
VPC Service Controls perimeter can access all Gemini
experiences. You can also extend the perimeter to an authorized
Cloud VPN
or Cloud Interconnect
from an external network.
Client machines outside the perimeter. When you have client machines
outside the service perimeter, you can grant controlled access to the
restricted Gemini service.
For more information, see
Allow access to protected resources from outside a perimeter .
For an example of how to create an access level on a corporate network,
see Limit access on a corporate network .
Review the limitations
when using VPC Service Controls with Gemini.
Gemini Code Assist. For compliance with
VPC Service Controls, make sure the IDE or workstation you're using
doesn't have access to https://www.google.com/tools/feedback/mobile
through firewall policies.
Gemini Code Assist on GitHub. If you want to
enable improve response quality ,
you shouldn't place your Google Cloud project within a
VPC Service Controls service perimeter .
Cloud Workstations. If you use Cloud Workstations, follow the
instructions in
Configure VPC Service Controls and private clusters .
What's next
For information about the compliance offerings in Google Cloud, see
Compliance resource center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
