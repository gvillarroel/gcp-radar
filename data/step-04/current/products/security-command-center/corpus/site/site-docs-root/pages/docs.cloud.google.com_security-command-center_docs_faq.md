---
title: "Frequently asked questions \_|\_ Security Command Center \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/faq
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/faq
  title: "Frequently asked questions \_|\_ Security Command Center \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Frequently asked questions
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers
Can I limit who views which projects?
Yes. Permissions for Security Command Center can be applied at the organization,
folder, and project level. For more information on Security Command Center roles,
see Access control .
How can I export data?
To export data from Security Command Center, use the
API or the Google Cloud console. For more
information about using the Google Cloud console, see
Exporting Security Command Center data .
Does Security Command Center support more assets like
BigQuery?
Security Command Center supports discovery and inventory of
BigQuery datasets. A future release will add support for
BigQuery tables. We prioritize the addition of new products
and resources based on customer feedback and demand.
Does Security Command Center support alerting and setting alert policies?
The Security Command Center API includes a notifications feature that sends
information to a Pub/Sub topic to provide findings updates and new
findings within minutes. Notifications include all finding information
displayed in the Google Cloud console. To get started, see
Setting up finding notifications .
Security Command Center also provides an App Engine application that
enables you to define custom queries for the
Notifier app . The Notifier
app and other Security Command Center tools become obsolete as their full
functionalities are added to Security Command Center features. For now, you can
use the app to publish your queries to a user-defined
Pub/Sub topic and integrate the feed with email and SMS.
Support is offered on best-effort basis only for all Security Command Center
tools.
When are new features released, and when can we expect bug fixes?
Security Command Center is in GA, so we release regular
bug fixes and functionality as available.
How fresh is the Security Command Center data that's displayed in the
Google Cloud console?
Data freshness depends on finding source and the time of the most recent
asset scan. For more information, see the assets and findings sections on
the
using Security Command Center
page.
Why is the OPEN_FIREWALL module not producing findings for some of my
firewall rules containing the source IP range 0.0.0.0/0 ?
Your firewall rule may contain a destination port which explicitly does
not produce findings.
There may be several reasons why findings are not being created.
The firewall rule may be configured as a DENY rule.
Your firewall rule may permit network traffic that utilizes protocols or
ports explicitly ignored by the module.
Findings are created for rules allowing traffic from any IP addresses
(0.0.0.0/0) of any protocol or to any port (applicable to TCP, UDP, and
SCTP protocols) with the exceptions noted below.
Findings aren't created for the following protocols:
ICMP
TCP 443 (HTTPS)
TCP 22 (SSH)
SCTP 22 (SSH)
TCP 3389 (RDP)
UDP 3389 (RDP)
Which types of findings are set to INACTIVE automatically, and which types
of findings need to be marked as INACTIVE manually?
A finding's type determines whether or not Security Command Center
automatically sets the state field of a finding to
INACTIVE after it is resolved. The following list explains
the different finding types and whether Security Command Center sets
the finding's state to INACTIVE automatically or not:
Vulnerability findings
Vulnerability findings are
automatically updated to INACTIVE after the remediation steps for
vulnerabilities are completed. Vulnerability findings are also
automatically updated to INACTIVE if the vulnerable asset is deleted.
Security Health Analytics and Web Security Scanner detectors generate vulnerability
findings that are available in Security Command Center. When they are enabled
in Security Command Center, integrated services, like VM Manager, also
generate vulnerability findings.
Threat findings
Threat findings represent
observation of one or more events, like execution of a process or initiation
of a network connection.
After a threat finding is resolved, Security Command Center does not
automatically set the state to INACTIVE .
The state of a threat finding remains active unless you change the
state manually.
Threats differ from vulnerabilities in that they are
dynamic and indicate a possible active exploit against one or
more resources, which is why your security personnel must use the
information in Security Command Center findings to determine the best
ways to remediate issues and secure resources against future attacks.
If your investigation determines that a threat finding is a
false positive, consider creating a mute rule
for the finding instead and leaving the state as ACTIVE .
Error Findings
Error findings are automatically marked as
INACTIVE after issues in the configuration are remediated. Error detectors
generate findings that point to issues in the configuration of your
Security Command Center environment. These configuration issues prevent
services (also known as finding providers or sources ) from generating findings.
Who do I contact if I have questions about Security Command Center service tiers?
For questions regarding Security Command Center service tiers,
please contact your account representative or contact Google Cloud sales .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
