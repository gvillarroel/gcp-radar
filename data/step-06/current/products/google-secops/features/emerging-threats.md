---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.920Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Emerging Threats"
feature_slug: "emerging-threats"
latest_feature_date: "2025-11-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view"
  - "https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
keywords:
  - "emerging"
  - "threats"
  - "provides"
  - "ai"
  - "powered"
  - "threat"
  - "intelligence"
  - "to"
---

# Emerging Threats

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Emerging Threats provides AI-powered threat intelligence to highlight relevant campaigns, detection coverage, and response gaps.

## Extended Definition

Emerging Threats provides AI-powered threat intelligence to highlight relevant campaigns, detection coverage, and response gaps.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view)
- [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)

## Supporting Pages

### "Emerging Threats Center detail view \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Emerging Threats Center detailed view includes the following panels: Associated Rules Disabled Rules Recent Associated Entities IOCs Associated Rules Note: Coverage analysis applies only to Endpoint Detection and Response (EDR) data sources.
- Emerging Threats Center detail view Supported in: Google secops SIEM The Emerging Threats Center feed provides a detailed view of selected campaigns or reports.
- It automates campaign discovery, enrichment, and correlation through the following processes: Ingest campaign intelligence : The system automatically collects campaign intelligence from Google Threat Intelligence, which includes data from global research, Mandiant incident response engagements, and Mandiant Managed Defense telemetry.
- Automatically highlight detection coverage : The system runs the simulated log events against the Google Cloud Threat Intelligence (GCTI) curated detection rules and coverage reports that show where Google SecOps has detections and where gaps exist.

### "Emerging Threats Center \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- Emerging Threats Center Supported in: Google secops SIEM The Emerging Threats Center in Google Security Operations provides AI-powered threat intelligence that helps you understand how current and emerging threat campaigns might affect your organization.
- The Emerging Threats Center provides a curated view of the most critical global threats from GTI that pose risks to your environment, including IoCs, detection matches, and affected entities.
- Note: The Emerging Threats Center feed displays only threat collections that have been updated within the past year, ensuring that you always work with up-to-date intelligence.
- Emerging Threats Center feed The Emerging Threats Center feed in Google SecOps displays real-time AI-informed threat intelligence from Google Threat Intelligence (GTI).

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Feature Enhance threat visibility and detection with Emerging Threats The new Emerging Threats page provides AI-powered threat intelligence to help you understand how current threat campaigns might affect your organization.
- Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Absolute Secure Endpoint logs Collect AIDE (Advanced Intrusion Detection Environment) logs Collect Akamai Enterprise Application Access logs Collect Apache Hadoop logs Collect Armis Vulnerabilities logs Collect Array Networks SSL VPN logs Collect Aruba IPS logs Collect Atlassian Confluence logs Collect Cisco AMP for Endpoints logs Collect Cisco APIC logs Collect Cisco Application Centric Infrastructure (ACI) logs Collect Cisco CallManager logs Collect Cisco CloudLock CASB logs Collect Cisco DNA Center Platform logs Collect Cisco eStreamer logs Collect Cribl Stream logs Collect CrowdStrike FileVantage logs Collect CrowdStrike IDP Services logs Collect Cynet 360 AutoXDR logs Collect Digital Shadows SearchLight logs Collect Duo Telephony logs Collect Edgio WAF logs Collect Elastic Auditbeat logs Collect Elastic Packet Beats logs Collect Elasticsearch logs Collect Entrust nShield HSM audit logs Collect Imperva Advanced Bot Protection logs Collect Imperva Attack Analytics logs Collect Imperva Audit Trail logs Collect Imperva CEF logs Collect Imperva Data Risk Analytics (DRA) logs Collect Imperva Database logs Collect Imperva FlexProtect logs Collect Imperva SecureSphere Management logs Collect Kiteworks (formally Accellion) logs Collect Proofpoint Emerging Threats Pro IOC logs Collect ServiceNow audit logs Collect Team Cymru Scout Threat Intelligence data Collect URLScan IO logs Collect Uptycs EDR logs Collect VanDyke VShell SFTP logs Collect Zendesk CRM logs Collect ZeroFox Platform logs November 10, 2025 Feature Nested if You can now use if statements in both the outcome and events sections and also within the then else clauses of another if statement.
- Curated behavioral detections for emerging threats : To protect against newly emerging risks and tactics, techniques, and procedures (TTPs), Applied Threat Intelligence uses real-time insights.
- Abnormal Security ( Email Server ) AIX system ( OS ) Akamai DNS ( DNS ) Akamai WAF ( WAF ) Apache ( Security ) Apigee ( Google Cloud Specific ) Apple macOS ( AV / Endpoint ) Archer Integrated Risk Management ( Risk Management Solution ) Area1 Security ( Email server ) Aruba ( Wireless ) Aruba Switch ( Network Infrastructure ) Auth0 ( Authentication log ) AWS CloudFront ( CDN ) AWS Cloudtrail ( Cloud Log Aggregator ) AWS CloudWatch ( Cloud service monitoring ) AWS EMR ( AWS Specific ) AWS VPN ( VPN ) Azure AD ( LDAP ) Azure AD Directory Audit ( Audit ) Azure Firewall ( Azure Firewall Application Rule ) Azure Key Vault logging ( Audit ) Barracuda Firewall ( Firewall ) Barracuda WAF ( Firewall ) BeyondTrust Endpoint Privilege Management ( Privileged Account Activity ) Blue Coat Proxy ( Web Proxy ) BMC Client Management ( Security ) Check Point ( Firewall ) Chrome Management ( Browser ) Cisco IronPort ( Gateway Security ) Cisco ISE ( Identity and Access Management ) Cisco Meraki ( Wireless ) Cisco Router ( Switches, Routers ) Cisco Stealthwatch ( Log Aggregator ) Cisco Switch ( Switches, Routers ) Cisco TACACS+ ( Authentication ) Cisco Umbrella Web Proxy ( Web Proxy ) Cisco WLC/WCS ( Wireless ) Citrix Netscaler ( Load Balancer, Traffic Shaper, ADC ) Claroty Continuous Threat Detection ( IoT ) Cloud Audit Logs ( Google Cloud Specific ) Cloud Data Loss Prevention ( Google Cloud Specific ) Cloud SQL ( Google Cloud Specific ) Cohesity ( Backup Software ) Corelight ( NDR ) CrowdStrike Detection Monitoring ( EDR ) CrowdStrike Falcon ( EDR ) CrushFTP ( Application server ) Darktrace ( NDR ) Delinea Secret Server ( Privileged Account Activity ) Dell EMC Data Domain ( Storage system ) Druva Backup ( Security ) Duo Activity Logs ( Activity ) Duo Administrator Logs ( Authentication ) Elastic Windows Event Log Beats ( Log Aggregator ) Ergon Informatik Airlock IAM ( Application Whitelisting ) F5 BIGIP Access Policy Manager ( Access Policy Manager ) F5 BIGIP LTM ( Load Balancer, Traffic Shaper, ADC ) FireEye HX ( EDR ) FortiGate ( Firewall ) Fortinet FortiAnalyzer ( Fortinet FortiAnalyzer ) Fortinet FortiAuthenticator ( Security ) Fortinet FortiEDR ( EDR ) Fortinet Fortimanager ( Network Management and Optimization software ) GitHub ( SaaS Application ) GMV Checker ATM Security ( ATM Audit ) Guardicore Centra ( Deception Software ) Hashicorp Vault ( Privileged Account Activity ) HP Aruba (ClearPass) ( Identity and Access Management ) IBM Cloud Activity Tracker ( Security Log ) IBM DB2 ( Database ) IBM Mainframe Storage ( Monitoring ) IBM OpenPages ( Data Security ) Imperva ( WAF ) Imperva CEF ( CEF ) Imperva DRA ( Data Security ) Infoblox ( DHCP, DNS ) Infoblox DNS ( DNS ) JAMF Pro ( Mac Endpoint Management System ) Keycloak ( Identity and Access Management ) Lacework Cloud Security ( Cloud Security ) Linux Auditing System (AuditD) ( OS ) Linux DHCP ( DHCP ) ManageEngine Log360 ( Alert Log ) McAfee ePolicy Orchestrator ( Policy Management ) Microsoft AD FS ( LDAP ) Microsoft Azure Activity ( Misc Windows Specific ) Microsoft Azure Resource ( Log Aggregator ) Microsoft Defender For Cloud ( Automation and DevOps Tools ) Microsoft Defender for Endpoint ( EDR ) Microsoft Defender for Identity ( EDR ) Microsoft Graph Activity Logs ( AUDIT ) Microsoft Graph API Alerts ( Gateway to data and intelligence ) Microsoft Intune Context ( Mobile Device Management ) Microsoft SQL Server ( Database ) Mimecast URL Logs ( Email server log types ) MISP Threat Intelligence ( Cybersecurity ) Mobile Endpoint Security ( Mobile Endpoint Security ) NetApp ONTAP ( Rest api ) Netskope V2 ( Cloud Security ) Office 365 ( SaaS Application ) Okta ( Identity and Access Management ) One Identity Identity Manager ( unified identity security ) Opengear Remote Management ( Secure Remote Access ) Oracle ( DATABASE ) Oracle Cloud Infrastructure VCN Flow Logs ( Oracle Cloud Infrastructure ) Palo Alto Networks Firewall ( Firewall ) Palo Alto Panorama ( Firewall ) Palo Alto Prisma Cloud Alert payload ( Cloud Security ) Proofpoint CASB ( CASB ) Proofpoint Email Filter ( Email Server ) Proofpoint On Demand ( Email Server ) Proofpoint Threat Response ( Email Server ) Pulse Secure ( VPN ) Radware Web Application Firewall ( Firewall ) SailPoint IAM ( Identity and Access Management ) Saiwall VPN ( VPN ) Salesforce ( SaaS Application ) Sentinelone Alerts ( Endpoint Security ) SonicWall ( Firewall ) Sophos Central ( AV / Endpoint ) Sophos Firewall (Next Gen) ( Firewall ) Squid Web Proxy ( Web Proxy ) STIX Threat Intelligence ( Cybersecurity Threats ) Suricata EVE ( IPS IDS ) Symantec DLP ( DLP ) Symantec Endpoint Protection ( AV / Endpoint ) Symantec Web Security Service ( Web Proxy ) TINTRI ( Data Security ) Trend Micro Apex one ( Endpoint Security ) TrendMicro Apex Central ( Endpoint ) UberAgent ( Security ) Veeam ( Backup software ) Velo Firewall ( FIREWALL ) VMware AirWatch ( Wireless ) VMware NSX ( Network and Security Virtualization ) VMware vCenter ( Server ) WatchGuard ( Syslog and KV ) Wazuh ( Log Aggregator ) Windows Event ( Endpoint ) Windows Event (XML) ( AV / Endpoint ) Windows Sysmon ( DNS ) Workday User Activity ( N/A ) Workspace Activities ( Google Cloud Specific ) XAMS by Xiting ( Log Aggregator ) ZeroFox Platform ( Database ) Zscaler ( Web Proxy ) Zywall ( Network infrastructure ) The following log types were added without a default parser.

