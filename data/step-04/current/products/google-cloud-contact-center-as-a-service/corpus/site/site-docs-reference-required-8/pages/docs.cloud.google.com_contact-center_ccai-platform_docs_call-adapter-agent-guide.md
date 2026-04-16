---
title: "Receive and make calls \_|\_ Google Cloud Contact Center as a Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide
  title: "Receive and make calls \_|\_ Google Cloud Contact Center as a Service \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Google Cloud CCaaS
User Guides
Send feedback
Receive and make calls
Stay organized with collections
Save and categorize content based on your preferences.
This section describes how to receive inbound calls and make outbound calls.
Receive an inbound call
The first step of receiving a call is answering it. Answering a call varies
slightly depending on whether auto-answer is enabled. For more information, see
Auto-answer .
To receive an inbound call:
Answer the call:
If auto-answer is disabled, a notification banner appears on your screen
notifying you of an inbound call. Click the banner to answer the call.
If auto-answer is enabled, an Incoming call screen appears in the call
adapter and the target pick-up time a
After you answer the call, the following sequence begins in the call
adapter:
A new screen appears that displays caller information, queue
information, and the support phone number that the caller used.
A final countdown timer appears for the start of the call. If the caller
has multiple accounts, you have the option to choose which account to
attach to the call.
The call starts.
Make an outbound call
This procedure is for making outbound calls without flexible outbound dialing.
For information about making outbound calls with flexible outbound dialing, see
Make an outbound call using flexible outbound
dialing . For more information, see
Flexible outbound dialing (for
Salesforce) or Flexible outbound dialing
(for Zendesk).
Important: To update your user interface to match this procedure, contact
Google Cloud support to update your instance for outbound calling
improvements. Otherwise, see Make an outbound call without outbound calling
improvements .
To make an outbound call, follow these steps:
In the call adapter, click Start call . The Outbound call screen
appears.
To change the country code, do the following:
Click (the flag that appears in this selector
represents that last country code that you selected). The Country
code screen appears.
OPTIONAL: To mark a country code as a favorite, click star
Favorite next to the country code. Favorite country codes are grouped at
the top of the list. To remove a country code from your favorites, click the
star icon again.
Click the country code that you want for your outbound call. You can use
the search field to narrow your search. The flag for the country code
appears in the Outbound call screen.
Enter the phone number:
You can dial the number or paste it into the Enter phone number
field.
If you have a CRM, you can select the number from your CRM.
The system automatically includes the selected country code when it
places your outbound call. You don't need to enter it with the phone
number. If you enter a country code and it doesn't match the country
code selector, the country code selector updates to match the code.
To change the outbound number, click Outbound number , and then click the
outbound number that you want.
To change the language, click Language , and then click the language that
you want.
To change the queue, click Queue , and then click the queue that you
want.
Click Call . The Calling screen appears.
Wait for the end-user to answer the call.
Make an outbound call using flexible outbound dialing
This procedure is for making outbound calls with flexible outbound dialing.
For information about making outbound calls without flexible outbound dialing,
see Make an outbound call . For more information, see
Flexible outbound dialing (for
Salesforce) or Flexible outbound dialing
(for Zendesk).
Important: To update your user interface to match this procedure, contact
Google Cloud support to update your instance for outbound calling
improvements. Otherwise, see Make an outbound call without outbound calling
improvements .
To make an outbound call using flexible outbound dialing, follow these steps:
In the call adapter, click Start call . The Outbound call screen
appears.
To change the country code, do the following:
Click (the flag that appears in this selector
represents that last country code that you selected). The Country
code screen appears.
OPTIONAL: To mark a country code as a favorite, click star
Favorite next to the country code. Favorite country codes are
grouped at the top of the list. To remove a country code from your
favorites, click the star icon again.
Click the country code that you want for your outbound call. You can use
the search field to narrow your search. The flag for the country code
appears in the Outbound call screen.
Enter the phone number:
You can dial the number or paste it into the Enter phone number
field.
If you have a CRM, you can select the number from your CRM.
The system automatically includes the selected country code when it
places your outbound call. You don't need to enter it with the phone
number. If you enter a country code and it doesn't match the country
code selector, the country code selector updates to match the code.
To change the outbound number, click Outbound number , and then click the
outbound number that you want.
Click Next . The Outbound call details screen appears.
OPTIONAL: If no account ID exists for the phone number you are calling, do
the following:
In the Account ID section, click
open_in_new . Your CRM app opens.
Select an account or create a new one.
If an account ID exists, you can click Copy to copy the account ID.
OPTIONAL: If no record ID exists for the phone number you are calling, do
the following:
In the Record ID section, click
open_in_new . Your CRM app opens.
Select a record or create a new one.
If a record ID exists, you can click Copy to copy the record ID.
To call a number that's not saved in the account, click the Call a
separate number toggle to the on position.
To change the language, click Language , and then click the outbound
language that you want.
Click Call . The Calling screen appears.
Wait for the end-user to answer the call.
Make an outbound call without outbound calling improvements
Google recommends updating your instance for outbound calling improvements.
These improvements include a country code selector and an improved workflow for
changing the outbound number and language. Contact Google Cloud support to
update your instance for outbound calling improvements. Otherwise, use the
following procedure.
To make an outbound call without outbound calling improvements, follow these
steps:
In the call adapter, click Start call .
If you have a Salesforce or Zendesk customer relationship management
(CRM) app, click the phone number that you want to dial, paste a phone
number into the call adapter, or dial the number.
If you have a CRM app other than Salesforce or Zendesk, paste or dial the
phone number.
If you don't have a CRM app, dial the phone number.
Click Next . The call information displays.
Optional: If you have a CRM app and there is no account ID for the phone
number that you are calling, click the open_in_new open icon next to
Account ID to open your CRM app and create an account.
Optional: Click the arrow_forward_ios
arrow next to Language to switch to a different language, if available.
Optional: Click the arrow_forward_ios
arrow next to Outbound number to switch to a different outbound number,
if available.
Click Call . The Calling screen appears.
Wait for the end-user to answer the call.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
