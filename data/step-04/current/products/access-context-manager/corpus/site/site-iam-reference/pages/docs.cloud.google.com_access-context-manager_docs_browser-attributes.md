---
title: "Configuring Chrome browser attributes \_|\_ Access Context Manager \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/browser-attributes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/browser-attributes
  title: "Configuring Chrome browser attributes \_|\_ Access Context Manager \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Access Context Manager
Guides
Send feedback
Configuring Chrome browser attributes
Stay organized with collections
Save and categorize content based on your preferences.
The Chrome browser is Chrome Enterprise Premium's zero trust endpoint platform, empowering and protecting work-from-anywhere enterprises. Integrated natively with the Chrome browser, Chrome Enterprise Premium offers centralized security policy management, agentless endpoint protection, and integrated zero trust access.
The Chrome Enterprise Premium endpoint protection includes the following threat and data protection capabilities:
Data protection - Prevent leaking of sensitive data (for example, personally-identifiable information) in files transferred and in content uploaded by the browser.
Threat protection - Protect against malware transfers using reputation, signatures, and cloud sandboxing.
Enterprise analytics - Provide analysis and investigation for security events such as malware transfer, phishing site visit, credential thefts, or sensitive data transfer.
To ensure that users are accessing resources from secure environments, you can set zero trust policies that ensure the user's browser environment has these threat and data protection capabilities turned on.
IMPORTANT: The Chrome attributes are only effective for browser-based traffic; the attributes have no effect when the requests are not coming from a browser, such as requests from gcloud CLI or Google Cloud SDKs.
Following are new access conditions that you can use in Access Context Manager's custom access levels.
Attribute/Function
Definition
management_state
Is the browser managed, at the browser level or at the profile level, and by the enterprise under the correct domain.
A browser is considered to be managed if the policies are centrally managed and pushed, and that the domain of the managed browser or profile matches the expected domain on the server side.
Managed refers to cloud-managed only. This setting does not take into account platform management, such as Managed Microsoft AD Group Policy Object.
The management states are mutually exclusive. For example, if the browser is enrolled in Chrome Browser Cloud Management (CBCM) , then CHROME_MANAGEMENT_STATE_PROFILE_MANAGED=False .
If the browser is CBCM enrolled in another domain, it will always be CHROME_MANAGEMENT_STATE_MANAGED_BY_OTHER_DOMAIN , even if the logged-in user is in a different domain.
device.chrome.management_state == ChromeManagementState.CHROME_MANAGEMENT_STATE_MANAGED_BY_OTHER_DOMAIN | ChromeManagementState.CHROME_MANAGEMENT_STATE_BROWSER_MANAGED | ChromeManagementState.CHROME_MANAGEMENT_STATE_PROFILE_MANAGED | ChromeManagementState.CHROME_MANAGEMENT_STATE_UNMANAGED
versionAtLeast(min_version)
Is the browser above a certain minimum version.
device.chrome.versionAtLeast("88.0.4321.44")
is_realtime_url_check_enabled
Is the real-time URL check connector enabled.
device.chrome.is_realtime_url_check_enabled == true | false
is_file_upload_analysis_enabled
Is the file upload analysis connector enabled.
device.chrome.is_file_upload_analysis_enabled == true | false
is_file_download_analysis_enabled
Is the file download analysis connector enabled.
device.chrome.is_file_download_analysis_enabled == true | false
is_bulk_data_entry_analysis_enabled
Is the bulk text (paste) analysis connector enabled.
device.chrome.is_bulk_data_entry_analysis_enabled == true | false
is_security_event_analysis_enabled
Is the security event reporting connector enabled.
device.chrome.is_security_event_analysis_enabled == true | false
The following table contains examples of policies that you can set:
Example Policy
Expression
Only allow access when the user is coming from a fully managed Chrome
browser and not just a managed Chrome profile.
After authentication through a fully managed Chrome browser, the user may also
use the Google Cloud CLI to access the resources.
device.chrome.management_state == ChromeManagementState.CHROME_MANAGEMENT_STATE_BROWSER_MANAGED
Only allow access to resources if download content analysis is enabled so administrators can ensure that sensitive content download can be detected.
device.chrome.is_file_download_analysis_enabled == true
Only allow access to content if the browser has threat and data protection capabilities enabled.
device.chrome.is_file_download_analysis_enabled == true &&
device.chrome.is_file_upload_analysis_enabled == true &&
device.chrome.is_realtime_url_check_enabled == true
Only allow access to content if security event reporting is enabled.
device.chrome.is_security_event_analysis_enabled == true
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
