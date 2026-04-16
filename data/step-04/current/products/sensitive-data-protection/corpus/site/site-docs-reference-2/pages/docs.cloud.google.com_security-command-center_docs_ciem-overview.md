---
title: "Overview of Cloud Infrastructure Entitlement Management \_|\_ Security Command\
  \ Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/ciem-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/ciem-overview
  title: "Overview of Cloud Infrastructure Entitlement Management \_|\_ Security Command\
    \ Center \_|\_ Google Cloud Documentation"
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
Overview of Cloud Infrastructure Entitlement Management
Stay organized with collections
Save and categorize content based on your preferences.
Enterprise service tier
With Security Command Center's Cloud Infrastructure Entitlement Management (CIEM) capabilities, you can
manage which identities have access to which resources in your deployments on
multiple cloud platforms and mitigate potential
vulnerabilities that result from misconfigurations.
Security Command Center's CIEM capabilities provide a comprehensive
view of the security of your identity and access configuration. Specifically,
the following CIEM features help you identify misconfigurations
and enforce the principle of least privilege:
Detection of potential identity and access misconfigurations in your
deployments on multiple cloud platforms, including Google Cloud,
Amazon Web Services (AWS), and Microsoft Azure ( Preview ).
Identification of vulnerability findings that provide insight into the roles
that are granted to principals in your Google Cloud, AWS, and
Microsoft Azure ( Preview ) environments.
This includes federated identities from other identity providers—like
Entra ID (Azure AD), Okta, and on-premises Active Directory—for Google Cloud
and AWS IAM Identity Center.
Guidance on how to remediate misconfigurations, such as removing permissions
from a principal with excess permissions.
Case management to efficiently track misconfiguration remediation efforts
using cases in Security Command Center Enterprise or other ticket
management systems.
Manage identity and access security issues with CIEM
The following sections describe the CIEM capabilities
that help you manage identity and access misconfigurations.
Quick access to identity and access findings
Security issues often arise due to undetected identity and access
misconfigurations such as highly privileged principals, dormant identities,
unrotated service account keys, and a lack of multifactor authentication.
CIEM generates findings that help alert you to
potential identity and access security issues across your cloud environments.
Many different Security Command Center detection services (such as IAM recommender,
Security Health Analytics, and CIEM) produce the identity and access findings
that are considered part of Security Command Center's CIEM capabilities. For
example, the CIEM detection service itself produces a subset of
identity and access findings for AWS and Microsoft Azure ( Preview )
that alert you to highly privileged roles, groups, and users.
With CIEM, Security Command Center presents Google Cloud, AWS, and
Microsoft Azure ( Preview )
identity and access findings categorically on the Identity and access
findings card of the Security Command Center Risk Overview page. This card
provides quick access to a filtered view of identity and access misconfiguration
findings on the Security Command Center Findings page. When viewed in detail,
each finding provides a full scope of what was detected as well as guidance on
how to address the misconfigurations to avoid potential attack vectors.
To learn how to investigate identity and access findings to understand your
identity and access security, see
Investigate identity and access findings .
Remediation guidance and tracking for identity and access findings
Security teams working with multicloud infrastructure often struggle to
remediate identity and access misconfigurations at scale. Security Command Center
provides you with remediation guidance, as well as security operations
capabilities, such as case management and response playbooks.
To learn more about reviewing findings cases, see
Review cases for identity and access issues .
Discovery of federated identities' permissions
CIEM helps to provide a more granular view of the security of
your identity and
access configurations by providing insight into the Google Cloud and AWS
permissions of federated identities from other identity providers, such as Entra
ID (Azure AD), Okta, and on-premises Active Directory. CIEM integrates with IAM recommender to
expose federated identities with roles that have excess permissions on your
Google Cloud resources. Cloud Infrastructure Entitlement Management can also be used with AWS IAM Identity Center to expose vulnerabilities in federated identities on AWS resources. You can view offending access grants and
recommended remediations directly from the Security Command Center Findings page.
For more information on offending access grants in findings, see
Offending access grants .
In addition, Google Cloud IAM lets you further investigate
the permissions of principals from other identity providers on the
IAM page in the Google Cloud console.
What's next
Learn how to
enable the CIEM detection service for AWS findings .
Learn how to
enable the CIEM detection service for Microsoft Azure findings .
Learn how to
investigate identity and access findings .
Learn how to
review cases for identity and access issues .
Learn more about the
IAM recommender functionality
that powers CIEM.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
