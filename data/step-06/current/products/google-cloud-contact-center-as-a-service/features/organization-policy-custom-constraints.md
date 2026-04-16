---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.075Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Organization Policy custom constraints"
feature_slug: "organization-policy-custom-constraints"
latest_feature_date: "2024-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide"
keywords:
  - "organization"
  - "policy"
  - "custom"
  - "constraints"
  - "provide"
  - "centralized"
  - "programmatic"
  - "control"
---

# Organization Policy custom constraints

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Organization Policy custom constraints provide centralized, programmatic control over restricted fields in CCAI Platform resources.

## Extended Definition

Organization Policy custom constraints provide centralized, programmatic control over restricted fields in CCAI Platform resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide)

## Supporting Pages

### "Headless web SDK guide \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install the headless web SDK To install the headless web SDK, use the following code snippet in your project: npm install @ujet/websdk-headless --save Use the headless web SDK To use the headless Web SDK, you can follow the example code provided: import { Client } from "@ujet/websdk-headless" const client = new Client ({ ... }) async function authenticate () { const resp = await fetch ( "/your-auth-endpoint" ) const data = await resp . json () return { token : data . token } } const client = new Client ({ companyId : "YOUR-COMPANY-ID" , tenant : "YOUR-TENANT-NAME" , authenticate : authenticate , }) // const company = await client.getCompany() // const menus = await client.getMenus() The Client class accepts several options (you can customize according to your requirements): interface ClientOption { companyId : string ; authenticate : () = > Promise<TokenResponse> ; tenant ?: string ; host ?: string ; lang ?: string ; bridge ?: string ; cobrowse ?: { enabled : boolean ; messages ?: CobrowseMessages ; api ?: string ; license ?: string ; trustedOrigins ?: string []; capabilities ?: string []; registration ?: boolean ; redactedViews ?: string []; unredactedViews ?: string []; }; } Enable logging During implementation and testing it might be necessary to gather additional information in the console log.
- Here's the default template: <button class="cobrowse-end js-cobrowse-end">$end</button> Messages The following message variables are used in Custom templates : $title $content $allow $deny The following example shows how these variables are applied: { confirmSessionTitle : string ; // $title confirmSessionContent : string ; // $content confirmRemoteControlTitle : string ; // $title confirmRemoteControlContent : string ; // $content confirmFullDeviceTitle : string ; // $title confirmFullDeviceContent : string ; // $content allowText : string ; // $allow denyText : string ; // $deny endSessionText : string ; // $end } The following example shows the default English variable values: { "confirmSessionTitle" : "Screen Share Session Request" , "confirmSessionContent" : "Do you want to share your current screen with the agent?" , "endSessionText" : "End Screen Share Session" , "confirmRemoteControlTitle" : "Remote Access Request" , "confirmRemoteControlContent" : "The agent would like to have access to your currently shared screen to further assist you.
- The following code sample shows you how to enable Screen Share: new Client ({ // ... cobrowse: { enabled: true, license: 'YOUR SCREEN SHARE LICENSE' } }) The following code sample show the options for Screen Share: interface CobrowseOption { enabled : boolean template? : string confirmSessionTemplate? : string confirmRemoteControlTemplate? : string confirmFullDeviceTemplate? : string sessionControlsTemplate? : string root? : Element messages ?: { confirmSessionTitle : string ; confirmSessionContent : string ; confirmRemoteControlTitle : string ; confirmRemoteControlContent : string ; confirmFullDeviceTitle : string ; confirmFullDeviceContent : string ; allowText : string ; denyText : string ; endSessionText : string ; } api? : string license? : string trustedOrigins? : string [] capabilities? : string [] registration? : boolean redactedViews? : string [] unredactedViews? : string [] } Custom template You can customize the Screen Share dialog template using the template option from the preceding code sample.
- Usage You can provide custom data as either an object (unsigned) or a string (signed) when creating a chat: interface ChatRequest { lang?: string ; trigger id?: string ; ticket id?: string ; email?: string ; greeting?: string ; cobrowsable?: boolean ; custom data?: { signed?: string ; unsigned?: Record<string, any> ; } ; } See the following example: const custom data = { unsigned: { version: { label: 'Version' , value: '1.0.0' } } , signed: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' // JWT or other signed payload } try { const chat: Chat = await client.createChat ( 123 , { custom data }) } catch ( error ) { // handle error } Note: Custom data is typically sent with session-creation requests for backend processing.

### "Configure custom panels \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dynamically control the custom-panel language You can use the {AGENT LOCATION LANGUAGE} or the {AGENT LANGUAGE} variable in your custom URL to dynamically control the language for a custom panel: Agent location language : Add the {AGENT LOCATION LANGUAGE} variable to your URL to display the custom panel in the language of the agent's assigned location.
- Optional: To dynamically control the custom-panel language based on the agent's assigned location or language selection, see Dynamically control the custom-panel language .
- Optional: To dynamically control the custom-panel language based on the agent's assigned location or language selection, see Dynamically control the custom-panel language .
- Agent variables {AGENT ID} : the agent ID {AGENT CUSTOM ID} : the agent's custom ID {AGENT EMAIL} : the agent's email {AGENT ALIAS} : the agent's alias {AGENT LOCATION LANGUAGE} : the language code for the language of the agent's assigned location—for example, en-US .

### "Salesforce installation guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- The installation consists of these steps: Locate Org ID and Org Name and add to the portal Install the app in Salesforce Enter connected app consumer key and secret into the portal Create a connected app Place connected app consumer key and secret in the portal Manage the configuration in Salesforce Manage the call center Data required to perform installation Field Name Where to Find Where to Enter Organization Id Salesforce Developer Settings in Portal Organization Name Salesforce Developer Settings in Portal Connected App Consumer Key Salesforce Developer Settings in Portal Connected App Consumer Secret Salesforce Developer Settings in Portal Tenant name Admin Portal <companyName>.<domain> Custom Settings in SFDC Customer Key Developer Settings Custom Settings in SFDC Secret Developer Settings Custom Settings in SFDC Connected App Salesforce Connected App Custom Settings in SFDC Locate Org ID and Org Name and Add to the Portal In this section, you will set up an initial connection between the CCAI Platform portal and Salesforce by finding the required org information and adding it into the CCAI Platform portal.
- Note: Domain-based access control provides the ability to define and control which domains can display the CCAI Platform agent adapter.
- Create a custom permission set and apply to all agents In this section, you will create a custom permission set (with the minimum requirements needed for integration), update it with case and contact permissions, and apply it to all agents who use the CCAI Platform portal.
- Support for Salesforce Classic & Lightning Installation link: Salesforce Enterprise 1.44 Installation steps The Agent Adapter installed in Salesforce allows agents to take calls and chats directly in a Salesforce Organization (Org).

