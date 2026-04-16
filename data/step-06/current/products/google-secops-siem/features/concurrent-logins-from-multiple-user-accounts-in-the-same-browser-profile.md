---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.592Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Concurrent logins from multiple user accounts in the same browser profile"
feature_slug: "concurrent-logins-from-multiple-user-accounts-in-the-same-browser-profile"
latest_feature_date: "2025-01-26"
deprecation_date: "2025-02-10"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
keywords:
  - "concurrent"
  - "logins"
  - "multiple"
  - "user"
  - "accounts"
  - "same"
  - "browser"
  - "profile"
---

# Concurrent logins from multiple user accounts in the same browser profile

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Google SecOps will no longer support concurrent logins for multiple accounts within the same browser profile; deprecated on 2025-02-10.

## Extended Definition

Google SecOps will no longer support concurrent logins for multiple accounts within the same browser profile; deprecated on 2025-02-10.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Search for events that use multiple keys with the same name, using a regular expression: additional.fields.key = /myKeynumber / Use regular expressions and the nocase operator: additional.fields["pod name"] = /br/ additional.fields["pod name"] = bar nocase Use block and single-line comments.
- Manage auto-suggestion settings To globally manage how suggestions are displayed, do the following: Click your profile avatar and select User Preferences from the list.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Google Workspace-related rule sets The following rule sets detect patterns in Google Workspace data: Potential Insider Data Exfiltration from Chrome Potential Insider Data Exfiltration from Drive Potential Insider Data Exfiltration from Gmail Potential Workspace Account Compromise Suspicious Workspace Administrative Actions These rule sets require the following log types, listed by product name and Google SecOps ingestion label: Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace ChromeOS Devices ( WORKSPACE CHROMEOS ) Workspace Mobile Devices ( WORKSPACE MOBILE ) Workspace Users ( WORKSPACE USERS ) Google Chrome Browser Cloud Management ( CHROME MANAGEMENT ) Gmail logs ( GMAIL LOGS ) To ingest the required data, do the following: Collect the data listed in the All rule sets section of this document.
- Azure - Identity : Detects activity related to authentication and authorization, indicating unusual behavior, including concurrent access from multiple geographic locations, overly permissive access management policies, or Azure RBAC activity from suspicious tools.
- AWS - Identity : Detections for AWS activity associated with IAM and authentication activity, including unusual logins from multiple geo-locations, overly permissive role creation, or IAM activity from suspicious tools.
- Azure - Defender for Cloud : Identifies alerts received from context-aware Microsoft Defender for Cloud related to user behavior, credential access, cryptomining, discovery, evasion, execution, exfiltration, impact, initial access, malware, penetration testing, persistence, policy, privilege escalation, or unauthorized access across all Azure cloud services.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Goal : Build a profile of risky data handling by a single user across multiple devices and actions.
- Then, use a composite rule with a long match window (for example, 24 hours) to trigger on an initial suspicious login and correlate it with any of the following detections from the same user: A user clearing their command-line history.
- Add a second condition to provide additional qualification, such as "alert only if this detection happens 5 times for the same user in one hour" or if it's combined with a detection from a different rule.
- For example, if multiple rules share the same meta label tactic: exfiltration , you can have a composite rule that targets any detection where the tactic label has the value exfiltration .

