---
title: "Disable billing usage with notifications \_|\_ Cloud Billing \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/disable-billing-with-notifications
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/disable-billing-with-notifications
  title: "Disable billing usage with notifications \_|\_ Cloud Billing \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
Guides
Send feedback
Disable billing usage with notifications
Stay organized with collections
Save and categorize content based on your preferences.
Warning: This tutorial removes Cloud Billing from your project, shutting down
all resources. Resources might be irretrievably deleted. You can
re-enable Cloud Billing ,
but it requires manual configuration and there's no guarantee
of service recovery.
This document explains how to automatically disable billing on a project when
your costs meet or exceed your project budget. When you disable
billing on a project, you terminate all Google Cloud services in the project,
including
Free Tier services .
For a more nuanced response to budget notifications, see
Control resource usage with notifications .
You might limit costs because you have a maximum amount of money that you can
spend on Google Cloud. In these cases, when your budget limit is
reached, you might be willing to shut down all of your Google Cloud services
and usage to stop incurring costs. Disabling billing on your project is an
efficient method to stop incurring costs in that project.
Limitations
There's a delay between incurring costs and receiving budget
notifications, so you might incur additional
costs for usage that hasn't arrived at the time that all services are stopped.
Following the steps in this example doesn't guarantee that you won't spend more
than your budget. If you have a limited amount of funds, set your maximum budget
below your available funds to account for billing delays.
You can't disable billing on a project that's locked to a billing account. To
learn more about locking and unlocking projects, see
Secure the link between a project and its billing account .
Before you begin
Before you begin, you must complete the following tasks:
Enable the Cloud Billing API
Create a budget that's scoped to a single project
Set up programmatic budget notifications
Set up a Cloud Run function
To disable Cloud Billing for a project, create a
Cloud Run function and configure it to call the Cloud Billing API.
Complete the steps in
Create a Cloud Run function .
Ensure that the Trigger type is set to the same Pub/Sub
topic that your budget will use.
Add the following dependencies:
Node.js
Copy the following to your package.json file:
{
"name" : "cloud-functions-billing" ,
"private" : "true" ,
"version" : "0.0.1" ,
"description" : "Examples of integrating Cloud Functions with billing" ,
"main" : "index.js" ,
"engines" : {
"node" : ">=16.0.0"
},
"scripts" : {
"compute-test" : "c8 mocha -p -j 2 test/periodic.test.js --timeout=600000" ,
"test" : "c8 mocha -p -j 2 test/index.test.js --timeout=5000 --exit"
},
"author" : "Ace Nassri <anassri@google.com>" ,
"license" : "Apache-2.0" ,
"dependencies" : {
"@google-cloud/billing" : "^4.0.0" ,
"@google-cloud/compute" : "^4.0.0" ,
"google-auth-library" : "^9.0.0" ,
"googleapis" : "^143.0.0" ,
"slack" : "^11.0.1"
},
"devDependencies" : {
"@google-cloud/functions-framework" : "^3.0.0" ,
"c8" : "^10.0.0" ,
"gaxios" : "^6.0.0" ,
"mocha" : "^10.0.0" ,
"promise-retry" : "^2.0.0" ,
"proxyquire" : "^2.1.0" ,
"sinon" : "^18.0.0" ,
"wait-port" : "^1.0.4"
}
}
Python
Copy the following to your requirements.txt file:
functions - framework == 3. *
google - cloud - billing == 1.16.2
google - cloud - logging == 3.12.1
Copy the following code into your Cloud Run function:
Node.js
const { CloudBillingClient } = require ( ' @google-cloud/billing ' );
const { InstancesClient } = require ( ' @google-cloud/compute ' );
const PROJECT_ID = process . env . GOOGLE_CLOUD_PROJECT ;
const PROJECT_NAME = `projects/ ${ PROJECT_ID } ` ;
const billing = new CloudBillingClient ();
exports . stopBilling = async pubsubEvent = > {
const pubsubData = JSON . parse (
Buffer . from ( pubsubEvent . data , 'base64' ). toString ()
);
if ( pubsubData . costAmount < = pubsubData . budgetAmount ) {
return `No action necessary. (Current cost: ${ pubsubData . costAmount } )` ;
}
if ( ! PROJECT_ID ) {
return 'No project specified' ;
}
const billingEnabled = await _isBillingEnabled ( PROJECT_NAME );
if ( billingEnabled ) {
return _disableBillingForProject ( PROJECT_NAME );
} else {
return 'Billing already disabled' ;
}
};
/**
* Determine whether billing is enabled for a project
* @param {string} projectName Name of project to check if billing is enabled
* @return {bool} Whether project has billing enabled or not
*/
const _isBillingEnabled = async projectName = > {
try {
const [ res ] = await billing . getProjectBillingInfo ({ name : projectName });
return res . billingEnabled ;
} catch ( e ) {
console . log (
'Unable to determine if billing is enabled on specified project, assuming billing is enabled'
);
return true ;
}
};
/**
* Disable billing for a project by removing its billing account
* @param {string} projectName Name of project disable billing on
* @return {string} Text containing response from disabling billing
*/
const _disableBillingForProject = async projectName = > {
const [ res ] = await billing . updateProjectBillingInfo ({
name : projectName ,
resource : { billingAccountName : '' }, // Disable billing
});
return `Billing disabled: ${ JSON . stringify ( res ) } ` ;
};
Python
# WARNING: The following action, if not in simulation mode, will disable billing
# for the project, potentially stopping all services and causing outages.
# Ensure thorough testing and understanding before enabling live deactivation.
import base64
import json
import os
import urllib.request
from cloudevents.http.event import CloudEvent
import functions_framework
from google.api_core import exceptions
from google.cloud import billing_v1
from google.cloud import logging
billing_client = billing_v1 . CloudBillingClient ()
def get_project_id () - > str :
"""Retrieves the Google Cloud Project ID.
This function first attempts to get the project ID from the
`GOOGLE_CLOUD_PROJECT` environment variable. If the environment
variable is not set or is None, it then attempts to retrieve the
project ID from the Google Cloud metadata server.
Returns:
str: The Google Cloud Project ID.
Raises:
ValueError: If the project ID cannot be determined either from
the environment variable or the metadata server.
"""
# Read the environment variable, usually set manually
project_id = os . getenv ( "GOOGLE_CLOUD_PROJECT" )
if project_id is not None :
return project_id
# Otherwise, get the `project-id`` from the Metadata server
url = "http://metadata.google.internal/computeMetadata/v1/project/project-id"
req = urllib . request . Request ( url )
req . add_header ( "Metadata-Flavor" , "Google" )
project_id = urllib . request . urlopen ( req ) . read () . decode ()
if project_id is None :
raise ValueError ( "project-id metadata not found." )
return project_id
@functions_framework . cloud_event
def stop_billing ( cloud_event : CloudEvent ) - > None :
# TODO(developer): As stoping billing is a destructive action
# for your project, change the following constant to False
# after you validate with a test budget.
SIMULATE_DEACTIVATION = True
PROJECT_ID = get_project_id ()
PROJECT_NAME = f "projects/ { PROJECT_ID } "
event_data = base64 . b64decode (
cloud_event . data [ "message" ][ "data" ]
) . decode ( "utf-8" )
event_dict = json . loads ( event_data )
cost_amount = event_dict [ "costAmount" ]
budget_amount = event_dict [ "budgetAmount" ]
print ( f "Cost: { cost_amount } Budget: { budget_amount } " )
if cost_amount < = budget_amount :
print ( "No action required. Current cost is within budget." )
return
print ( f "Disabling billing for project ' { PROJECT_NAME } '..." )
is_billing_enabled = _is_billing_enabled ( PROJECT_NAME )
if is_billing_enabled :
_disable_billing_for_project (
PROJECT_NAME ,
SIMULATE_DEACTIVATION
)
else :
print ( "Billing is already disabled." )
def _is_billing_enabled ( project_name : str ) - > bool :
"""Determine whether billing is enabled for a project.
Args:
project_name: Name of project to check if billing is enabled.
Returns:
Whether project has billing enabled or not.
"""
try :
print ( f "Getting billing info for project ' { project_name } '..." )
response = billing_client . get_project_billing_info ( name = project_name )
return response . billing_enabled
except Exception as e :
print ( f 'Error getting billing info: { e } ' )
print (
"Unable to determine if billing is enabled on specified project, "
"assuming billing is enabled."
)
return True
def _disable_billing_for_project (
project_name : str ,
simulate_deactivation : bool ,
) - > None :
"""Disable billing for a project by removing its billing account.
Args:
project_name: Name of project to disable billing.
simulate_deactivation:
If True, it won't actually disable billing.
Useful to validate with test budgets.
"""
# Log this operation in Cloud Logging
logging_client = logging . Client ()
logger = logging_client . logger ( name = "disable-billing" )
if simulate_deactivation :
entry_text = "Billing disabled. (Simulated)"
print ( entry_text )
logger . log_text ( entry_text , severity = "CRITICAL" )
return
# Find more information about `updateBillingInfo` API method here:
# https://cloud.google.com/billing/docs/reference/rest/v1/projects/updateBillingInfo
try :
# To disable billing set the `billing_account_name` field to empty
project_billing_info = billing_v1 . ProjectBillingInfo (
billing_account_name = ""
)
response = billing_client . update_project_billing_info (
name = project_name ,
project_billing_info = project_billing_info
)
entry_text = f "Billing disabled: { response } "
print ( entry_text )
logger . log_text ( entry_text , severity = "CRITICAL" )
except exceptions . PermissionDenied :
print ( "Failed to disable billing, check permissions." )
Set the Entry point to the correct function to execute:
Node.js
Set the Entry point to stopBilling .
Python
Set the Entry point to stop_billing .
Review the list of environment variables set automatically
to determine if you need to manually set the GOOGLE_CLOUD_PROJECT
variable to the project that you want to disable Cloud Billing for.
Note: If the environment variable is automatically set, the Cloud Billing
account will be removed on the project where this
Cloud Run function is running. Depending on your needs, you
can change the code inside your Cloud Run function
to specify a different project.
Click DEPLOY .
Configure service account permissions
Your Cloud Run function runs as an
automatically created service account .
To disable billing, you need to grant the service account permissions to
any services on the project that it needs to modify by completing the following
steps:
Identify the correct service account by viewing the details of your
Cloud Run function. The service account is listed at the
bottom of the page.
Go to the IAM page in the Google Cloud console to set the
appropriate permissions.
Go to the IAM page
To modify the billing account permissions, in the Google Cloud console, go to
the Billing Account management page, add the service account as a
principle on the Cloud Billing account, and set the
appropriate billing account permissions .
Go to the Account management page in Cloud Billing
Learn more about how to
configure permissions for Cloud Billing accounts .
Test that Cloud Billing is disabled
When the budget sends a notification, the specified project will no longer have
a Cloud Billing account associated with it. To ensure your function works as
expected, follow the steps in
Test a Cloud Run function .
If successful, the project is no longer visible under the Cloud Billing
account and resources in the project are disabled, including the
Cloud Run function if it's in the same project.
To continue using Google Cloud resources in the project, in the
Google Cloud console,
manually re-enable Cloud Billing
for your project.
What's next
Re-enable Cloud Billing for your project
Review other programmatic notification examples to learn how to do the
following:
Listen to your notifications
Control resource usage with notifications
Send notifications to Slack
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
