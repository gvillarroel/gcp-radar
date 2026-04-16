---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.657Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access Context Manager require verified Chrome OS attribute"
feature_slug: "access-context-manager-require-verified-chrome-os-attribute"
latest_feature_date: "2019-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes"
  - "https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec"
  - "https://docs.cloud.google.com/access-context-manager/docs/browser-attributes"
keywords:
  - "verified"
  - "chrome"
  - "require"
  - "attribute"
---

# Access Context Manager require verified Chrome OS attribute

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

The Require verified Chrome OS device-policy access-level attribute became available in Access Context Manager.

## Extended Definition

The Require verified Chrome OS device-policy access-level attribute became available in Access Context Manager.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)
- [https://docs.cloud.google.com/access-context-manager/docs/browser-attributes](https://docs.cloud.google.com/access-context-manager/docs/browser-attributes)

## Supporting Pages

### "Access level attributes \_|\_ Access Context Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Valid values for requireVerifiedChromeOs are: true false If you specify IOS or ANDROID for osType , you can optionally include any device policy attribute that supports mobile devices.
- This attribute can only be included in conditions when creating or modifying an access level using the gcloud command-line tool or the Access Context Manager API.
- If you specify DESKTOP CHROME OS for osType , you can optionally include requireVerifiedChromeOs .
- Supports mobile devices Yes YAML osConstraints Valid values osConstraints is a list that must include one or more instances of osType . osType can be paired with an instance of minimumVersion , but minimumVersion is not required. osType must include a list of one or more of the following values: DESKTOP MAC DESKTOP WINDOWS DESKTOP CHROME OS DESKTOP LINUX IOS ANDROID minimumVersion is optional.

### "Custom access level specification \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example: device.verified chrome os == true chrome.management state Type string Description Is the browser managed, at the browser level or at the profile level, and by the enterprise under the correct domain.
- Example: device.ios device security.is device jailbroken == true verified chrome os Type boolean Description Whether the request comes from a device with a verified Chrome OS .
- VERY GOOD = 5 ; } Examples: device.vendors [ "some vendor" ] . is compliant device == true device.vendors [ "some vendor" ] . is managed device == true device.vendors [ "some vendor" ] . device health score == DeviceHealthScore.VERY GOOD device.vendors [ "some vendor" ] . data [ "is device compromised" ] == true device.vendors [ "some vendor" ] . data [ "some num" ] == 1.0 Note: is device compromised is only an example that represents a key defined by a vendor. android device security.verified boot Type boolean Description Whether the Android verified boot status is green .
- Objects origin Contains attributes that identify the origin of the request. request.auth Contains attributes that identify authentication and authorization aspects of the request. request.time Contains time-based attributes that you can use to restrict access to resources based on the time of day, day of the week, or a specific date range. levels Contains attributes to define dependency on other access levels. device Contains attributes that describe the device the request originated from. origin attributes This section lists the attributes supported by the origin object.

### "Configuring Chrome browser attributes \_|\_ Access Context Manager \_|\_\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/browser-attributes](https://docs.cloud.google.com/access-context-manager/docs/browser-attributes)
- Source ID: `site-iam-reference`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- IMPORTANT: The Chrome attributes are only effective for browser-based traffic; the attributes have no effect when the requests are not coming from a browser, such as requests from gcloud CLI or Google Cloud SDKs.
- Home Documentation Security Access Context Manager Guides Send feedback Configuring Chrome browser attributes Stay organized with collections Save and categorize content based on your preferences.
- If the browser is CBCM enrolled in another domain, it will always be CHROME MANAGEMENT STATE MANAGED BY OTHER DOMAIN , even if the logged-in user is in a different domain. device.chrome.management state == ChromeManagementState.CHROME MANAGEMENT STATE MANAGED BY OTHER DOMAIN ChromeManagementState.CHROME MANAGEMENT STATE BROWSER MANAGED ChromeManagementState.CHROME MANAGEMENT STATE PROFILE MANAGED ChromeManagementState.CHROME MANAGEMENT STATE UNMANAGED versionAtLeast(min version) Is the browser above a certain minimum version. device.chrome.versionAtLeast("88.0.4321.44") is realtime url check enabled Is the real-time URL check connector enabled. device.chrome.is realtime url check enabled == true false is file upload analysis enabled Is the file upload analysis connector enabled. device.chrome.is file upload analysis enabled == true false is file download analysis enabled Is the file download analysis connector enabled. device.chrome.is file download analysis enabled == true false is bulk data entry analysis enabled Is the bulk text (paste) analysis connector enabled. device.chrome.is bulk data entry analysis enabled == true false is security event analysis enabled Is the security event reporting connector enabled. device.chrome.is security event analysis enabled == true false The following table contains examples of policies that you can set: Example Policy Expression Only allow access when the user is coming from a fully managed Chrome browser and not just a managed Chrome profile.
- After authentication through a fully managed Chrome browser, the user may also use the Google Cloud CLI to access the resources. device.chrome.management state == ChromeManagementState.CHROME MANAGEMENT STATE BROWSER MANAGED Only allow access to resources if download content analysis is enabled so administrators can ensure that sensitive content download can be detected. device.chrome.is file download analysis enabled == true Only allow access to content if the browser has threat and data protection capabilities enabled. device.chrome.is file download analysis enabled == true && device.chrome.is file upload analysis enabled == true && device.chrome.is realtime url check enabled == true Only allow access to content if security event reporting is enabled. device.chrome.is security event analysis enabled == true Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

