---
title: "Google Unified Security Recommended \_|\_ Google Security Operations \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended
  title: "Google Unified Security Recommended \_|\_ Google Security Operations \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Resources
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Google Unified Security Recommended
This document describes Google Unified Security Recommended products. This document is intended both for Google Security Operations customers who want to learn about Google Unified Security Recommended products and for security technology providers interested in joining the Google Unified Security Recommended program.
The Google Unified Security Recommended program does the following:
Establishes strategic partnerships —to foster deep technical collaboration with market-leading security solutions trusted most by our customers.
Identifies and endorses worthy independent software vendor (ISV) partner products —the program identifies and endorses ISV partner products that demonstrate deep integration capabilities with Google's advanced security product suite across Google Unified Security.
Sets a high standard for partner products —through rigorous adherence to deep technical integration, a collaborative customer-first support model, and a committed investment in joint innovation.
Key benefits of Google Unified Security Recommended products include the following:
Enhanced confidence: Partner products are evaluated for optimal integration with Google Unified Security.
Accelerated discovery: New customers of Google Cloud security products can start with curated market-leading solutions for enterprise challenges.
Focus on outcomes: Customers minimize integration overhead to build effective security solutions.
Simplified procurement: For consolidated billing, Google Unified Security Recommended products are available on Google Cloud Marketplace .
Available Google Unified Security Recommended products
The following table describes available Google Unified Security Recommended products:
Product
Category
Description
Learn more
CrowdStrike Falcon Endpoint Protection
Endpoint Protection
Integrates comprehensive endpoint and identity telemetry with Google SecOps. This combination, enriched by Google Threat Intelligence and supported by Mandiant expertise, empowers security teams to rapidly detect and respond to sophisticated attacks. Customers can also use CrowdStrike risk-signals to create granular access policies in Chrome Enterprise Premium.
Google Unified Security Recommended Solution Overview with CrowdStrike
FortiGATE NGFW and FortiSASE
Network Protection
Connecting Fortinet's extensive network and web traffic data into Google SecOps offers unparalleled visibility into user activity and potential threats, enabling analysts to trace complex incidents and automate response actions at the network edge.
Google Unified Security Recommended Solution Overview with FortiGate NGFW and FortiSASE
Palo Alto Networks Cortex XDR
Endpoint Protection
Cortex XDR endpoint data is automatically enriched by Google Threat Intelligence, applying high-fidelity verdicts from Mandiant's frontline research directly to alerts. This combination enables security teams to validate threats with insights from Mandiant Services, ensuring rapid, confident decision-making against complex cyberattacks.
Google Unified Security recommended solution with Cortex XDR
Palo Alto Networks Next-Generation Firewall
Network Protection
Palo Alto Networks Next-Generation Firewalls integrate with Google SecOps to enhance security analytics by ingesting rich network logs for deep visibility and threat detection. Upon detecting a threat, Google SecOps automatically enriches this data and executes remediation playbooks. This automation updates policies to add the compromised workload, improving incident response times while effectively isolating the breach.
Google Unified Security recommended solution with PANW software firewalls
Palo Alto Networks Prisma Access
Network Protection
Prisma Access integrates with Chrome Enterprise Premium to enforce unified, context-aware policies. The solution shares deep telemetry and device posture data with Chrome. This synchronized intelligence enables dynamic access decisions, automatically granting or denying user access to SaaS and cloud resources based on the real-time security context of the browsing device. Prisma Access also provides logs to the Google SecOps platform, providing rich, correlated data for AI-powered analytics and threat hunting.
Google Unified Security recommended solution with Prisma Access
Wiz Cloud Infrastructure Security Platform
Multi-Cloud CNAPP
Customers can integrate Wiz's cloud security findings with Google SecOps to help teams identify, prioritize, and address their most critical cloud risks in a unified platform. In addition, Wiz and Security Command Center integrate to provide complete visibility and security for Google Cloud environments, including threat detection, AI security, and in-console security for application owners.
Google Unified Security Recommended Solution Overview with Wiz
Foundational requirements
Each Google Unified Security Recommended product must demonstrate comprehensive integrations with the following specified Google Cloud security products to ensure seamless data flow, enhanced threat detection, and effective response mechanisms:
Google SecOps requirements
Chrome Enterprise Premium requirements
Security Command Center requirements
Google Threat Intelligence requirements
Mandiant services collaboration requirements
Google SecOps requirements
The following table describes the Google Unified Security Recommended requirements for Google-partner products to integrate with Google SecOps to facilitate mature security operations and incident response.
Requirement
Description
Ingestion feed or webhook integration
The product must have a supported data feed (using our ingestion API or webhook integrations ) for log transfer into Google SecOps. Exceptions can be made for any product that requires a Bindplane collector . It is recommended for raw logs ingested by Google SecOps to be converted to Unified Data Model (UDM) events . The partner must demonstrate the ability/readiness to own these parsers to improve update frequency for customers.
UDM-only feeds (that is, pre-parsed feeds)
The partner product must have or demonstrate ability and willingness to provide a UDM feed for their most commonly used Google SecOps feed type.
Response Integrations
The partner product must have at least one Response Integration published through our contribution workflow. The response integration must: Be able to connect to the partner product. Take actions on behalf of the customer, either on the partner product or other products, using detections that are specific to the Google Unified Security partner.
Playbooks
Playbooks enable automated responses from Google SecOps. The partner solution must have at least one "starter" playbook, which utilizes at least one Response Integration (as described in the preceding table row).
Chrome Enterprise Premium requirements
To enable enhanced security for enterprise browsing and devices, when applicable, the partner product must offer at least one integration from the following Chrome Enterprise Premium (CEP) categories:
Chrome Enterprise Premium integration category
Description
ZTA integrations
Zero Trust Access (ZTA) integrations to enforce granular access policies.
DLP integrations
Data Loss Prevention (DLP) integrations to prevent sensitive data exfiltration through Chrome browsers.
Security events integrations
Integration for reporting and acting upon security events originating from Chrome Enterprise.
Identity integrations
Integrations that use or enhance identity-based security within Chrome Enterprise Premium (applicable for IDP partners only)
Security Command Center requirement
When applicable, the partner product is required to ingest findings from Security Command Center (SCC) to provide a unified view of security posture and facilitate risk management. Partner products must create findings in Security Command Center for corresponding findings from their products.
The following table describes the Google Unified Security Recommended requirement for Google-partner products to integrate with Security Command Center:
Requirement
Description
Ingestion of SCC findings
The partner products must integrate to ingest security findings, vulnerabilities, and threats identified by Security Command Center or the other way around.
Google Threat Intelligence requirement
Partners must integrate with Google Threat Intelligence (GTI) to use Google's vast and current threat intelligence for enhanced threat detection and prevention.
The following table describes the Google Unified Security Recommended requirement for Google-partner products to integrate with Google Threat Intelligence:
Requirement
Description
Bring Your Own License (BYOL) or OEM
The partner products must directly integrate Google Threat Intelligence feeds using OEM integration or support a BYOL pathway for Google Threat Intelligence customers.
Mandiant services collaboration requirement
A key aspect of the program is close collaboration with Google's Mandiant services to develop high-quality, curated detection rules for joint customers in order to unlock Mandiant support for your third-party product on behalf of customers.
The following table describes the Google Unified Security Recommended requirement for Google-partner products to integrate with Google Threat Intelligence:
Requirement
Description
Curated detections development
The partner must provide direct support for Google's Mandiant services in developing high-quality, curated detection rules specifically for Google SecOps. The partner must commit to advance notice of any API or content changes that may have downstream impacts to parser or curated detection quality. Although only Google can develop these rules, partner support is crucial for their quality and relevance. This capability will be a hallmark of Google Unified Security Recommended partners.
Additional requirements
Beyond product-specific integrations, Google Unified Security Recommended partners are expected to uphold general standards of excellence and commitment, inclusive of Partner Advantage participation and joint investment in areas of innovation.
For details on the broader program requirements for partner products, review the program guide, which you can find through Partner Advantage .
Start the process to join Google Unified Security Recommended
The Google Unified Security Recommended program is by invitation only. If you represent a Google partner that is interested in being considered to join the program, fill out the Partner Nomination Form .
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
