---
title: "Reason Codes & Statuses \_|\_ Google Cloud Contact Center as a Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Reason_Codes___Statuses
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/web-sdk-api
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Reason_Codes___Statuses
  title: "Reason Codes & Statuses \_|\_ Google Cloud Contact Center as a Service \_\
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
Reason Codes & Statuses
Stay organized with collections
Save and categorize content based on your preferences.
Occupancy Statuses
Available Time
The sum of time that agents were idle and ready to handle an interaction.
Login Time
The sum of time that agents were logged in.
Wrap-up time
The sum of time that agents were in the wrap-up state after ending an interaction.
Break Time
The sum of time that agents were in the Break status.
Idle Time
The sum of time that agents were in the Idle status.
In-call Time
The sum of time that agents were handling calls.
In-chat Time
The sum of time that agents were handling chats.
Meal Time
The sum of time that agents were in the Meal status.
Missed Call Time
The sum of time that agents were in the Missed Call status.
Missed Chat Time
The sum of time that agents were in the Missed Chat status.
Offline Time
The sum of time that agents were logged out.
Special Task Time
The sum of time that agents were in the Special Task status.
Unavailable Time
The sum of time that agents were in the Unavailable status.
Unresponsive Time
The sum of time that agents were in the Unresponsive status.
Viewing and Identifying Failed Reason Codes
Overview
This page can help you identify:
Call Fail
Reasons
Chat Fail
Reasons
The following Failed Reason codes can be viewed:
In the Individual Call History standard report.
On the Dashboards for
Calls
and
Chats
completed.
Using the
API.
Call Fail Reasons
Code
Metric Name
Description
nothing: 0
No Error - Call
The sum of calls that did not fail.
unknown: 10001
Unknown - Call
The sum of calls that failed for unknown reasons.
expired: 11001
Expired - Call
The sum of calls that failed due to the connection timing
out.
transfer_expired: 11002
Transfer Expired
The sum of calls that failed due to the transfer connection
timing out.
eu_canceled: 20001
Cancelled
The sum of calls where the end-user hung up while being connected
to an agent.
eu_rejected: 20002
Rejected
The sum of outbound calls that were declined by the
end-user.
eu_abandoned: 20003
Abandoned
The sum of calls that were abandoned by the end-user while
waiting in queue.
eu_in_menu_abandoned: 20004
In-Menu Abandoned
The sum of calls that were abandoned by the end-user while in the
IVR menu.
eu_repeated_voicemail: 20005
Repeated Voicemail
The sum of calls that failed because the end-user already had
left a voicemail waiting to be answered.
For more information on voicemail settings see After Hours Deflection . After Hour Deflection for Calls and
Chats
eu_busy: 21001
Busy
The sum of outbound calls that reached the end-user in a busy
state.
eu_repeated_callback: 20006
Repeated Callback
The sum of calls that failed because the end-user had already
requested a callback.
eu_wrong_number: 21002
Wrong Number
The sum of outbound calls that were made to an invalid phone
number.
eu_no_answer: 21003
No Answer
The sum of outbound calls where the end-user did not pick
up.
eu_noti_failed: 22001
Notification Failed
The sum of calls that were not connected to the agent due to the
agent not having browser notifications enabled.
ag_canceled: 30001
Agent Cancelled
The sum of calls that failed while being connected to the agent.
Possible reasons include the agent closing their browser or a network
error.
ag_ignored: 30002
Agent Ignored
The sum of calls that were not picked up by the agent.
ag_mic_no_device: 31001
Agent No Mic
The sum of calls that failed due to the agent not having a
microphone.
ag_mic_denied: 31002
Agent Mic Denied
The sum of calls that failed due to the agent not having
microphone access enabled.
voip_twilio_error: 41001
VOIP Error
The sum of calls that failed due to a voice provider
issue.
voip_tokbox_error: 42001
voip_nexmo_error: 45001
voip_invalid_token: 43001
VOIP Invalid Token
The sum of calls that failed due to the voice provider providing
an invalid token.
voip_conn_general: 44001
VOIP General
The sum of calls that failed due to a general voice provider
issue.
voip_conn_timeout: 44002
VOIP Timeout
The sum of calls that failed due to the voice provider connection
timing out.
voip_conn_signal: 44003
VOIP Signal
The sum of calls that failed due to a poor connection to the
voice provider.
stuck_due_to_api_error:
50001
Stuck due to API
The sum of calls that failed due to an API issue.
group_deleted_no_substitute:
50002
Group Deleted - Call
The sum of calls that failed due to a cascade group being deleted
without any alternative available.
menu_deleted: 50003
Menu Deleted
The sum of calls that failed due to the queue being deleted after
the end-user had already entered the queue.
direct_pstn_call_to_
fallback_number: 60001
Directed to Fallback
The sum of calls that were directed to a fallback
number.
Chat Fail Reasons
Code
Metric Name
Description
nothing: 0
No Error - Chat
The sum of chats that did not fail.
unknown: 1
Unknown - Chat
The sum of chats that failed for unknown reasons.
no_response: 2
No Response
The sum of chats that ended due to the end-user not responding.
expired: 3
Expired - Chat
The sum of chats that failed due to the connection timing out.
after_hours: 4
After Hours
The sum of chats that reached a queue outside of operating hours.
expired_menu_selection: 31
Expired Menu
The sum of chats where end-users selected a queue that no longer existed.
end_user_opt_out: 41
Opted Out
The sum of chats where end-users opted not to be recorded.
over_cap_email: 50001
Overcapacity Email
The sum of chats where end-users sent an email due to the queue being in an overcapacity state.
group_deleted_no_substitute: 60001
Group Deleted - Chat
The sum of chats that failed due to a cascade group being deleted without any alternative available.
Data Dictionary - Sample API and Calculation Scripts
Sample API and Calculation Scripts
Below is a sample script that can be run to try out a couple of the CCAI Platform
metrics that exist in the admin portal dashboard. It exemplifies how any
of the metrics can be retrieved and calculated.
The example walks through the definition of variables, functions and
calculation scripts for how to calculate total volume and service
level.
Variables
Array of calls: add an array of calls set to the variable
callsArray.
Call Types : below is an array of all call types that exist in
CCAI Platform.
//You can remove elements from this array to test metrics of only a
certain type of calls; i.e.
Total Hours: Below is a total hours variable. Calculate the
difference in hours based on the parameters in your request.
SLA: is calculated using a configured threshold in the admin
portal. Change the variable with the configured amount. This example
shows a 60 second SLA; i.e.
Functions
Call Record Function: //checkCallRecord is designed to validate
if a call record is the proper status, did not fail a certain way,
and in some cases whether connected is null;
Total Volume of Calls Function: getTotalVolumeOfCalls is
designed to return a total volume of calls; e.g.:
Service Level Function: getServiceLevel is designed to return
the Service Level of a call type; e.g.:
Calculation Scripts
Total Volume
// TOTAL VOLUME SECTION
for ( var i = 0 ; i \<c all_type.length ; i++ ){
var vol = getTotalVolumeOfCalls ( callsArray,call_type \[ i \] ) ;
if ( vol \> 0 ){
var volPerHour = Math.round ( vol/total_hours \* 10 ) /10
var stringToPrint = \" the per hour volume of \" +call_type \[ i \] + \" is \" +
volPerHour.toString ()
console.log ( stringToPrint ) ;
} ;
}
SLA
// SLA SECTION
for ( var i = 0 ; i \<c all_type.length ; i++ ){
var SLACalc =
( getServiceLevel ( callsArray,call_type \[ i \] ) /getTotalVolumeOfCalls ( callsArray,call_type \[ i \] ,false, \[ 'eu_in_menu_abandoned' \] )) ;
if ( isNaN ( SLACalc ) == false ){
var stringToPrint = \" the SLA of \" +call_type \[ i \] + \" is \" +
SLACalc.toString () ;
console.log ( stringToPrint ) ;
} else {
var stringToPrint = \" the SLA of \" +call_type \[ i \] + \" cannot be
calculated due to lack of volume \" ;
console.log ( stringToPrint ) ;
}
} ;
Chat Status Definitions
Common Chat Statuses
Chat Finished
Statuses
Chat Failed Reasons
Common Chat Statuses
Chat Statuses
Description
Queued
Chat is in queue and is waiting for an Agent
Assigned
Chat is assigned to an agent
Ongoing
Chat is active with an Agent and End User
Finished
Chat finished successfully ( finished reasons listed below)
Abandoned
Chat canceled by the end user before assigned to an agent
Deflected
Chat was cancelled and deflected to Over Capacity Email
Failed
Chat failed ( failure reasons listed below )
Chat Finished Statuses
Finished Chat Statuses
Description
Finished
Chat finished successfully with no additional information
Finished: Disconnected By Agent
Chat was finished, agent disconnected
Finished: Disconnected By End User
Chat was finished, disconnected by end user
Finished: No Messages
Chat was finished, there was no response
Finished: No Messages Disconnected By Agent
Chat was finished, there was no response and the Agent disconnected
Finished: No Messages Disconnected By End User
Chat was finished, there was no response and the End User disconnected
Timeout: Timeout By Agent With No Messages
Chat was Timed Out: agent picked up and did not respond
Timeout: Timeout By End User With No Messages
Chat was Timed Out: agent picked up and end user did not respond
Timeout: agent stopped responding
Chat was Timed Out: agent picked up and stopped responding
Timeout: end user stopped responding
Chat was Timed Out: agent picked up and end user stopped responding
Chat Failed Reasons
Failed Reason
Definition
Failed
Chat session Failed for an Unknown reason
Expired
Chat expired within a queue and was not picked up by an Agent
Call status definitions
The following call statuses can appear in the call performance history report.
Call status
Description
Abandoned A call is waiting in the queue and is disconnected by
the caller before it is accepted by an agent. Excludes In-menu and Short
Abandons.
Busy
End-user was busy
Canceled
End-user canceled the call
Completed
A call is successfully completed without any errors
Error
Call has an error
Failed
A call ends because of an error. Includes a failed reason for more context.
No Answer
The end-user didn't answer
Recovered
A failed call is called back. The new call is a child of the original call. Includes whether the call back finishes without error.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
