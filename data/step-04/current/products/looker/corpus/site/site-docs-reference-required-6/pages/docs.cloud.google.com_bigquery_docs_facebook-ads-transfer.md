---
title: "Load Facebook Ads data into BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/information-schema-jobs
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer
  title: "Load Facebook Ads data into BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Load Facebook Ads data into BigQuery
You can load data from Facebook Ads to BigQuery using the
BigQuery Data Transfer Service for Facebook Ads connector. With the
BigQuery Data Transfer Service, you can schedule recurring transfer jobs that
add your latest data from your Facebook Ads to
BigQuery.
Connector overview
The BigQuery Data Transfer Service for the Facebook Ads connector supports the following options for your data transfer.
Data transfer options
Support
Supported reports
The BigQuery Data Transfer Service for Facebook Ads supports the
transfer of the following Facebook Ads reports:
AdAccounts
AdInsights
AdInsightsActions
For information about how Facebook Ads reports are transformed into BigQuery tables and views, see Facebook Ads report transformation .
Repeat frequency
The Facebook Ads connector supports daily data transfers.
By default, data transfers are scheduled at the time when the data transfer is created. You can configure the time of data transfer when you set up your data transfer .
Refresh window
The Facebook Ads connector retrieves Facebook Ads data from up to 30 days at the time the data transfer is run. You cannot configure the refresh window for this connector.
For more information, see Refresh windows .
Backfill data availability
Run a data backfill to retrieve data outside of your scheduled data transfer. You can retrieve data as far back as the data retention policy on your data source allows.
Limitations
Facebook Ads data transfers are subject to the following limitations:
The minimum interval time between recurring Facebook Ads data transfers is
24 hours. The default interval for a recurring data transfer is 24 hours.
The BigQuery Data Transfer Service for Facebook Ads only supports a fixed set
of tables. Custom reports aren't supported.
Facebook Ads data transfers have a maximum duration of six hours. A
transfer fails if it takes longer than this maximum duration.
Incremental transfers aren't supported for AdInsights and AdInsightsActions
tables. When you create a data transfer that includes AdInsights
and AdInsightsActions tables, and you specified a date in
Schedule options , all data that is available for that date is
transferred.
The BigQuery Data Transfer Service supports a refresh window of up to 30 days to the
AdInsights and AdInsightsActions tables. The refresh window refers to the
number of days that a data transfer will retrieve
source data from. When you run a data transfer for the first time, the
data transfer retrieves all source data available within the refresh
window.
The long-lived user access token that is required for Facebook Ads
transfers expires after 60 days.
If your long-lived user access token is expired,
you can obtain the new one by navigating to your data transfer details and
clicking Edit . In the edit transfer page, follow the same steps in
Facebook Ads prerequisites to generate
a new long-lived user access token.
To use a network attachment with this data transfer, you must first create a
network attachment by defining a static IP
address .
If your configured network attachment and virtual machine (VM) instance are
located in different regions, there might be cross-region data movement when
you transfer data from Facebook Ads.
Data ingestion from Facebook Ads transfers
When you transfer data from Facebook Ads into BigQuery, the
data is loaded into BigQuery tables that are partitioned by date.
The table partition that the data is loaded into corresponds to the date from
the data source. If you schedule multiple transfers for the same date,
BigQuery Data Transfer Service overwrites the partition for that specific date with
the latest data. Multiple transfers in the same day or running backfills don't
result in duplicate data, and partitions for other dates are not affected.
For AdInsights and AdInsightsActions tables, the table partition that the
data is loaded into corresponds to the date from the data source.
For AdAccounts tables, snapshots are taken once a day and stored in the
partition of the last transfer run date. The refresh window does not apply to
the AdAccounts table.
Refresh windows
A refresh window is the number of days that a data transfer retrieves data
when a data transfer occurs. For example, if the refresh window is three days
and a daily transfer occurs, the BigQuery Data Transfer Service retrieves all data from
your source table from the past three days. In this
example, when a daily transfer occurs, the BigQuery Data Transfer Service creates a new
BigQuery destination table partition with a copy of your source table data
from the current day, then automatically triggers backfill runs to update the
BigQuery destination table partitions with your source table data from the
past two days. The automatically triggered backfill runs will either overwrite
or incrementally update your BigQuery destination table,
depending on whether or not incremental updates are supported in the
BigQuery Data Transfer Service connector.
When you run a data transfer for the first time, the data transfer retrieves all
source data available within the refresh window. For example, if the refresh
window is three days and you run the data transfer for the first time, the
BigQuery Data Transfer Service retrieves all source data within three days.
To retrieve data outside the refresh window, such as historical data, or to
recover data from any transfer outages or gaps, you can initiate or schedule a
backfill run .
Before you begin
The following sections describe the steps that you need to take before you
create a Facebook Ads data transfer.
Facebook Ads prerequisites
Ensure that you have the following Facebook Ads information when
creating a Facebook Ads data transfer.
Facebook Ads parameters
Description
clientID
The app ID name for the OAuth 2.0 client.
clientSecret
The app secret for the OAuth 2.0 client.
refreshToken
The long-lived user access token, also known as a refresh token.
To obtain a clientID and clientSecret , perform the
following steps:
Create a Facebook developer app
with the app type Business .
In the Facebook App dashboard ,
click App Settings > Basic and find
the app ID and app secret that correspond to the app.
To obtain a long-lived user access token, also known as a refresh token,
perform the following steps:
In the Google Cloud console, proceed with the steps to create a Facebook Ads transfer .
In the Data Source Details section, copy the redirect URI listed after
the Refresh Token field.
Click the Facebook App dashboard ,
then click Set up in the Facebook login for Business section.
In the Settings page, enter the redirect URL in the Valid OAuth Redirect URIs field and click Save .
Return to the Google Cloud console. In the Data Source Details section,
click Authorize . You will be redirected to a Facebook authentication page.
Select the Facebook developer app to authorize the account that connects with the BigQuery Data Transfer Service.
Once complete, click Got it to return to the Google Cloud console. The
long-lived user access token is now populated in the transfer configuration.
Long-lived user access tokens expire after 60 days. For information on how to
obtain a new long-lived user access token, see Limitations .
Refresh token alternatives
Alternatively, you can provide a refresh token when you create a data transfer
if you have obtained one using one of the following methods:
Generate a long-lived user access token using the Graph API .
The ads_management , ads_read , and business_management permissions are
required for a valid token for the data transfer.
Generate a system user token .
A system user token lets you manually add assets, such as ad accounts, to be
included in the data transfer. If a system user token is expired, you must
manually update the transfer configuration with new credentials. You also
have the option to create a token that doesn't expire when you create a system
user token. For more information, see Supported access tokens .
BigQuery prerequisites
Verify that you have completed all actions required to
enable the BigQuery Data Transfer Service .
Create a BigQuery dataset
to store your data.
If you intend to set up transfer run notifications for Pub/Sub,
ensure that you have the pubsub.topics.setIamPolicy Identity and Access Management (IAM) permission. If you only set up email notifications, Pub/Sub permissions aren't required. For more
information, see
BigQuery Data Transfer Service run notifications .
Required BigQuery roles
To get the permissions that
you need to create a BigQuery Data Transfer Service data transfer,
ask your administrator to grant you the
BigQuery Admin ( roles/bigquery.admin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to create a BigQuery Data Transfer Service data transfer. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create a BigQuery Data Transfer Service data transfer:
BigQuery Data Transfer Service permissions:
bigquery.transfers.update
bigquery.transfers.get
BigQuery permissions:
bigquery.datasets.get
bigquery.datasets.getIamPolicy
bigquery.datasets.update
bigquery.datasets.setIamPolicy
bigquery.jobs.create
You might also be able to get
these permissions
with custom roles or
other predefined roles .
For more information, see Grant bigquery.admin access .
Create a Facebook Ads data transfer
Select one of the following options:
Console
Go to the Data transfers page in the Google Cloud console.
Go to Data transfers
Click add Create transfer .
In the Source type section, for Source , select Facebook Ads .
In the Data source details section, do the following:
For Network attachment , select a network attachment from the menu.
Before you can use a network attachment with this data transfer, you
must create a network attachment by defining a static IP address .
For Client ID , enter the app ID.
For Client secret , enter the app secret.
For Refresh token , enter the long-lived user access token ID by
clicking Authorize . Alternatively, if you
already have a refresh token or a system user token ,
you can enter the refresh token directly in this field. For information
about retrieving a long-lived user access token, see
Facebook Ads prerequisites .
For Facebook Ads objects to transfer : specify Facebook Ads
reports or objects to include in this transfer.
Select Fetch Data for Authorized Ad Accounts Only to only from
advertising accounts that are authorized to your
Facebook App. You can find your authorized advertising accounts under
App Settings > Advanced , and in the Advertising
accounts section.
For ActionsCollections , specify one or more action collections .
For Generic Breakdowns , select the generic breakdowns for your insights
data. These breakdowns determine how your transferred data is organized
in the AdInsights and AdInsightsActions tables. Facebook Ads
only permits certain combinations of breakdowns. For more information
about permitted breakdown combinations, see Combining breakdowns
For Action Breakdowns , select the action breakdowns for your insights
data. These breakdowns determine how your transferred data is organized
in the AdInsightsActions table. For information
about combining breakdowns, see Combining breakdowns .
For Refresh window , specify a refresh window
duration.
In the Destination settings section, for Dataset , select the
dataset that you created to store your data.
In the Transfer config name section, for Display name , enter a
name for the data transfer.
In the Schedule options section, do the following:
In the Repeat frequency list, select an option to specify how
often this data transfer runs. To specify a custom repeat frequency,
select Custom . If you select On-demand , then this transfer
runs when you
manually trigger the transfer .
If applicable, select either Start now or Start at set time ,
and provide a start date and run time.
Optional: In the Notification options section, do the following:
To enable email notifications, click the Email notification
toggle. When you enable this option, the transfer administrator
receives an email notification when a transfer run fails.
To enable
Pub/Sub transfer run notifications
for this data transfer, click the Pub/Sub notifications toggle. You
can select your topic name, or you can
click Create a topic to create one.
Click Save .
When this data transfer runs, the BigQuery Data Transfer Service automatically populates the
following tables.
Table Name
Description
AdAccounts
The ad accounts available for a user.
AdInsights
Ad insights report for all ad accounts.
AdInsightsActions
Ad insights actions report for all ad accounts.
bq
Enter the bq mk command
and supply the transfer creation flag
--transfer_config :
bq mk
--transfer_config
--project_id = PROJECT_ID
--data_source = DATA_SOURCE
--display_name = DISPLAY_NAME
--target_dataset = DATASET
--params = ' PARAMETERS '
Where:
PROJECT_ID (optional): your Google Cloud project ID.
If --project_id isn't supplied to specify a particular project, the
default project is used.
DATA_SOURCE : the data source (for example, facebook-ads ).
DISPLAY_NAME : the display name for the data transfer
configuration. The transfer name can be any value that lets you
identify the transfer if you need to modify it later.
DATASET : the target dataset for the data transfer configuration.
PARAMETERS : the parameters for the created data transfer
configuration in JSON format. For example:
--params='{"param":"param_value"}' . The following are the parameters for
a Facebook Ads transfer:
connector.authentication.oauth.clientId : The app ID name for the OAuth 2.0 client.
connector.authentication.oauth.clientSecret : The app secret for the OAuth 2.0 client.
connector.authentication.oauth.refreshToken : The long-lived token ID.
connector.authorizedAdAccountsOnly : If set to true , the connector only
retrieves data from advertising accounts that are authorized to your
Facebook App. You can find your authorized advertising accounts under
App Settings > Advanced , and in the
Advanced accounts section.
connector.actionCollections : Action collections are objects that specify the
different types of actions people have taken in response to your ad. For
a full list of actionCollections values, see Action collections .
For more information, see Ad Insights .
connector.genericBreakdowns : Specify the generic breakdowns for your insights
data. These breakdowns determine how your transferred data is organized
in the AdInsights and AdInsightsActions tables. Facebook Ads
only permits certain combinations of breakdowns. For more information
about permitted breakdown combinations, see Combining breakdowns .
actionBreakdowns : Specify the action breakdowns for your insights
data. These breakdowns determine how your transferred data is organized
in the AdInsights and AdInsightsActions tables. For information
about combining breakdowns, see Combining breakdowns .
For example, the following command creates a Facebook Ads data transfer in the
default project with all the required parameters:
bq mk
--transfer_config
--target_dataset = mydataset
--data_source = facebook_ads
--display_name = 'My Transfer'
--params = '{"connector.authentication.oauth.clientId": "1650000000",
"connector.authentication.oauth.clientSecret":"TBA99550",
"connector.authentication.oauth.refreshToken":"abcdef",
"connector.authorizedAdAccountsOnly":true,
"connector.actionCollections":["Actions", "Conversions"],
"connector.genericBreakdowns":["PublisherPlatform", "PlatformPosition"],
"connector.actionBreakdowns":["ActionDevice", "ActionType"]}'
API
Use the projects.locations.transferConfigs.create
method and supply an instance of the TransferConfig
resource.
When you save the transfer configuration, the Facebook Ads
connector automatically triggers a transfer run according to your schedule
option. With every transfer run, the Facebook Ads connector
transfers all available data from Facebook Ads into
BigQuery.
To manually run a data transfer outside of your regular schedule, you can start
a backfill run .
For information on how your transferred data maps to Meta API fields, see Facebook Ads report transformation .
Action collections
Action collections are objects that specify the different types of actions
people have taken in response to your ad. You can specify action collections
when you set up your transfer configuration .
Action collections represent the fields of the
list<AdsActionStats> type
that are present in the Ad Account, Insights endpoint response .
When a transfer completes, these action collections are populated in the AdInsightsActions table .
Caution: The more action collections that you specify for a transfer, the more
likely you will reach the rate limits imposed by Facebook Ads .
The following is a list of action collections supported in a Facebook Ads
data transfer:
ActionValues
Actions
AdClickActions
AdImpressionActions
CatalogSegmentActions
CatalogSegmentValue
CatalogSegmentValueMobilePurchaseRoas
CatalogSegmentValueOmniPurchaseRoas
CatalogSegmentValueWebsitePurchaseRoas
ConversionValues
Conversions
ConvertedProductQuantity
ConvertedProductValue
CostPer15_secVideoView
CostPer2SecContinuousVideoView
CostPerActionType
CostPerAdClick
CostPerConversion
CostPerOneThousandAdImpression
CostPerOutboundClick
CostPerThruplay
CostPerUniqueActionType
CostPerUniqueConversion
CostPerUniqueOutboundClick
InteractiveComponentTap
MobileAppPurchaseRoas
OutboundClicks
OutboundClicksCtr
PurchaseRoas
UniqueActions
UniqueConversions
UniqueOutboundClicks
UniqueOutboundClicksCtr
UniqueVideoView15_sec
Video15_secWatchedActions
Video30_secWatchedActions
VideoAvgTimeWatchedActions
VideoContinuous2SecWatchedActions
VideoP100_watchedActions
VideoP25WatchedActions
VideoP50WatchedActions
VideoP75WatchedActions
VideoP95WatchedActions
VideoPlayActions
VideoPlayCurveActions
VideoPlayRetentionGraphActions
VideoTimeWatchedActions
WebsiteCtr
WebsitePurchaseRoas
Combining breakdowns
Facebook Ads has restrictions on what columns can be selected
together. Using these restricted combinations will cause the data transfer to
fail.
For more information about what breakdowns can be combined, see
Combining Breakdowns .
Troubleshoot transfer configuration
If you are having issues setting up a Facebook Ads data transfer, try the
following troubleshooting steps:
Check if your user access token has expired using the Facebook Access Token Debugger . Long-lived user access
tokens expire after 60 days. If your long-lived user access token has expired,
navigate to your transfer details then click Edit to modify your transfer
configuration. In the edit transfer page, follow the same steps in
Facebook Ads prerequisites to generate a new one.
Check that the long-lived user access token is generated with the required
permissions - ads_management , ads_read , and business_management . You can
check the permissions on your long-lived user access token by entering the
following link into your browser:
https://graph.facebook.com/me/permissions?access_token= TOKEN
Where TOKEN is the value of the long-lived user access token.
If you don't have the required permissions, generate a new long-lived user
access token by following the steps in
Facebook Ads prerequisites .
Check the Required Actions tab on the
Facebook App dashboard for any items
that require attention.
You might encounter the following error messages related to Meta API rate limit
errors:
Error: There have been too many calls from this ad-account. Wait a bit and try again.
Resolution : Check that there are no parallel workflows using the same apps
or credentials. If these errors persist, try upgrading your permissions to Advanced Access
to get more rate limiting quota. For more information, see Marketing API Rate Limiting .
Common monitoring metrics messages
You can also check the BigQuery Data Transfer Service monitoring metrics
to determine the cause of a data transfer failure. The following table lists some
common ERROR_CODE messages for Facebook Ads data transfers.
Error
Description
INVALID_ARGUMENT
The supplied configuration is invalid. You might also encounter this error with the message This combination of action and generic breakdowns is not allowed. For information about valid breakdown combinations, see Combining breakdowns .
PERMISSION_DENIED
The credentials are invalid
UNAUTHENTICATED
Authentication is required
SERVICE_UNAVAILABLE
The service is temporarily unable to handle this data transfer
DEADLINE_EXCEEDED
The data transfer did not finish within the maximum duration of six hours
NOT_FOUND
A requested resource is not found
INTERNAL
Something else caused the connector to fail
FAILED_PRECONDITION
This error can appear with the message There was an issue connecting to Facebook Ads API. This error can occur when you include a network attachment
with your transfer but have not configured your public network address translation (NAT) correctly. To resolve this error, follow the steps to create your network attachment by
defining a static IP address .
RESOURCE_EXHAUSTED
A data source quota or limit was exhausted
Pricing
For pricing information about Facebook Ads transfers, see
Data Transfer Service pricing .
What's next
Learn more about the
BigQuery Data Transfer Service .
Learn more about working with transfers ,
such as viewing configurations and run history.
Learn how to load data with cross-cloud operations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
