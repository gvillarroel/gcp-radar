---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.378Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Product-centric feed management"
feature_slug: "product-centric-feed-management"
latest_feature_date: "2025-06-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
keywords:
  - "product"
  - "centric"
  - "feed"
  - "management"
  - "lets"
  - "you"
  - "configure"
  - "multiple"
---

# Product-centric feed management

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Product-centric feed management lets you configure multiple log-type feeds for the same product on a single page in Preview.

## Extended Definition

Product-centric feed management lets you configure multiple log-type feeds for the same product on a single page in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure multiple feeds for a product family (Google SecOps customers only) You can configure multiple feeds per product family, based on log type.
- Manage feeds After you configure your data feeds, use the management tools to monitor ingestion health, modify existing parameters, and manage the feed lifecycle.
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- To grant read permission to multiple files , grant access at the bucket level as follows: For "feedSourceType": "GOOGLE CLOUD STORAGE" : Add the Google SecOps service account as a principal to your storage bucket and grant it the IAM Storage Object Viewer ( roles/storage.objectViewer ) role.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Feature Updated permissions for accessing product-centric feeds If you have assigned Custom IAM Roles , you can now grant access to the product-centric feeds by adding the following permissions to the role: chronicle.feedPacks.get chronicle.feedPacks.list To learn more about how to configure feeds using the product-centric feeds UI, see Configure feeds by product.
- You can now configure multiple log-type feeds for the same product type on a single page.
- Feature Product Centric Feed Management This feature is currently in Preview.
- Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Absolute Secure Endpoint logs Collect AIDE (Advanced Intrusion Detection Environment) logs Collect Akamai Enterprise Application Access logs Collect Apache Hadoop logs Collect Armis Vulnerabilities logs Collect Array Networks SSL VPN logs Collect Aruba IPS logs Collect Atlassian Confluence logs Collect Cisco AMP for Endpoints logs Collect Cisco APIC logs Collect Cisco Application Centric Infrastructure (ACI) logs Collect Cisco CallManager logs Collect Cisco CloudLock CASB logs Collect Cisco DNA Center Platform logs Collect Cisco eStreamer logs Collect Cribl Stream logs Collect CrowdStrike FileVantage logs Collect CrowdStrike IDP Services logs Collect Cynet 360 AutoXDR logs Collect Digital Shadows SearchLight logs Collect Duo Telephony logs Collect Edgio WAF logs Collect Elastic Auditbeat logs Collect Elastic Packet Beats logs Collect Elasticsearch logs Collect Entrust nShield HSM audit logs Collect Imperva Advanced Bot Protection logs Collect Imperva Attack Analytics logs Collect Imperva Audit Trail logs Collect Imperva CEF logs Collect Imperva Data Risk Analytics (DRA) logs Collect Imperva Database logs Collect Imperva FlexProtect logs Collect Imperva SecureSphere Management logs Collect Kiteworks (formally Accellion) logs Collect Proofpoint Emerging Threats Pro IOC logs Collect ServiceNow audit logs Collect Team Cymru Scout Threat Intelligence data Collect URLScan IO logs Collect Uptycs EDR logs Collect VanDyke VShell SFTP logs Collect Zendesk CRM logs Collect ZeroFox Platform logs November 10, 2025 Feature Nested if You can now use if statements in both the outcome and events sections and also within the then else clauses of another if statement.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- June 23, 2025 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect BeyondTrust BeyondInsight logs Collect BloxOne Threat Defense logs Collect BlueCat Edge DNS Resolver logs Collect Cambium Networks logs Collect Check Point Audit logs Collect Check Point EDR logs Collect Check Point SmartDefense logs Collect Commvault logs Collect Comodo AV logs Collect Cylance PROTECT logs Collect Cyolo OT logs Collect Delinea PAM logs Collect Dell CyberSense logs Collect Dell EMC Data Domain logs Collect Dell EMC Isilon NAS logs Collect Dell EMC PowerStore logs Collect Dell OpenManage logs Collect Endpoint Protector DLP logs Collect ESET AV logs Collect ESET EDR logs Collect F5 AFM logs Collect F5 ASM logs Collect FileZilla FTP logs Collect Forescout NAC logs Collect ForgeRock OpenAM logs Collect HAProxy logs Collect Kaseya Datto File Protection logs Collect ManageEngine AD360 logs Collect Palo Alto Cortex XDR Events logs Collect Snowflake logs Collect Trellix DLP logs Collect Trellix ePO logs Collect Trend Micro DDI logs Collect Trend Micro Email Security logs Collect Trend Micro Vision One Activity logs Collect Trend Micro Vision One Audit logs Collect Trend Micro Vision One Container Vulnerability logs Collect Trend Micro Vision One Detections logs Collect Trend Micro Vision One Observed Attack Techniques logs Collect Trend Micro Vision One Workbench logs June 19, 2025 Feature Product Centric Feed Management This feature is currently in Preview.
- August 10, 2025 Feature Updated permissions for accessing product-centric feeds If you have assigned Custom IAM Roles , you can now grant access to the product-centric feeds by adding the following permissions to the role: chronicle.feedPacks.get chronicle.feedPacks.list To learn more about how to configure feeds using the product-centric feeds UI, see Configure feeds by product.
- You can now configure multiple log-type feeds for the same product type on a single page.
- February 23, 2026 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Big Switch BigCloudFabric logs Collect BMC AMI Defender logs Collect Broadcom Support Portal Audit logs Collect CA ACF2 logs Collect CA LDAP logs Collect ChromeOS XDR logs Collect Chronicle SOAR Audit logs Collect Cisco CTS logs Collect Cisco FireSIGHT Management Center logs Collect Cisco Vision Dynamic Signage Director logs Collect ClamAV logs Collect Cofense logs Collect Crowdstrike IOC logs Collect Custom Application Access logs Collect Custom Security Data Analytics logs Collect Cyber 2.0 IDS logs Collect CyberArk logs Collect Cybereason EDR logs Collect Dataminr Alerts logs Collect Digital Shadows Indicators logs Collect Mimecast Mail V2 logs Collect Okta User Context logs Collect RH-ISAC IOC logs Collect ServiceNow CMDB data February 20, 2026 Feature New capabilities in Feeds page The following options have been added to the Feeds page: Search Filtering (using feed attributes) Pagination Last Refreshed Time Feed Metadata Export to CSV February 12, 2026 Feature Advanced Joins in Search Google SecOps now supports expanded capabilities for correlating data across multiple sources.

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- In addition, a new accessibility option in the User Preferences dialog lets you customize how long feedback messages remain on the screen.
- To get the latest product updates delivered to you, add the URL of this page to your feed reader , or add the feed URL directly.
- It is now possible to configure alerts to be dropped if the source environment doesn't exist. (ID #00180834) July 12, 2023 Fixed Release Notes 6.2.30: Playbooks not always saved correctly within Platform (ID #00243484) amic include /release-notes/ chronicle-soar %} Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Security Google Security Operations Resources Send feedback Google Security Operations SOAR release notes Stay organized with collections Save and categorize content based on your preferences.

