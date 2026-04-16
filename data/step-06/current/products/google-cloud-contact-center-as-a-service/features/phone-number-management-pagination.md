---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.098Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Phone number management pagination"
feature_slug: "phone-number-management-pagination"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/access-queue-menu-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "phone"
  - "number"
  - "management"
  - "pagination"
  - "page"
  - "supports"
  - "browsing"
  - "up"
---

# Phone number management pagination

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The phone number management page supports page-by-page browsing with up to 100 entries per page.

## Extended Definition

The phone number management page supports page-by-page browsing with up to 100 entries per page.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/access-queue-menu-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/access-queue-menu-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Total Calls (Calls) Count of the number of completed inbound and outbound calls the agent has taken in the Today timeframe Call count on the Agent monitoring page counts sessions not interactions Call sessions are attributed to the last agent who handled the session Outbound and inbound calls are included Due to some date/time matching differences, this column should only be used as a guide - use downloadable reports for specific call interaction counts per agent Total Chats (Chats) Completed chat sessions handled today Last End Time The end time of the last completed session Last time offered Shows the last time the agent was offered a call/chat notification.
- Call & chat metrics Definitions for the metrics below can be found on their respective dashboard page: Repeat Contacts Click on the number visible within the tile and the page will load to display the details of the repeat contacts filtered by Repeated .
- Repeat Contacts: Number of callers who had multiple incoming sessions that finished in the same queue within the configured repeat contact timeframe set in Settings > Operation Management Target Metrics .
- Handled Click on the number of handled interactions and the page will load to display all of the interactions that have been handled/completed.

### "Access queue menu settings \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/access-queue-menu-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/access-queue-menu-settings)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open a stand-alone queue settings page from the Phone Number Management page To open a stand-alone queue settings page from the Phone Number Management page, follow these steps: In the CCAI Platform portal, click Settings > Call .
- You can also open stand-alone queue settings pages from the Queues menu and the Phone Number Management pane .
- In the Phone Numbers pane, click Phone Number Management .
- Optional: To quickly open this queue's stand-alone queue settings page later, get the following values from the URL of the current page: The queue ID : for example, 29 in id=29 The queue language : for example, en in language=en Open a stand-alone queue settings page You can quickly access a queue's settings by opening its stand-alone queue settings page.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Assign SMS numbers to queues If you have not yet added and verified SMS phone numbers on the Phone Number Management page, see Adding SMS numbers .
- Mobile FAQ When enabled, Mobile FAQ allows you to show a webpage while remaining in the app, with an option of showing a phone number as well on the screen.
- If an IVR queue menu is mapped as an Mobile PSTN fallback, the queue cannot be deleted without removing this association Rich data The following data is passed to the CRM ticket for the IVR fallback call: End-user's phone number To gather the phone number data, the end-user is required to input their phone number Example phone number gathering screen in Mobile: Selected queue menu When the end-user makes a call via PSTN, the system retrieves the queue name and custom data package via phone number lookup Custom data package (as configured by your mobile development team) The custom data package is mapped to the correct ticket based on the active call session with the phone number entered by the end-user in the app CCAI Platform portal configuration Go to Settings > Queue > Mobile .
- Keep the following in mind: Incoming SMS phone numbers can be assigned to only one queue (a queue can have multiple incoming numbers as long as they are not used for any other queue.) Outbound SMS phone numbers can be assigned to any number of queues and a queue can have any number of outbound phone numbers.

