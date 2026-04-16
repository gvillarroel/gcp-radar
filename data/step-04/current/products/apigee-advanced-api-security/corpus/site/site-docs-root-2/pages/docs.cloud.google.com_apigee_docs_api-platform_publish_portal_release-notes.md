---
title: "Apigee Integrated Portal release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/release-notes
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-security/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/release-notes
  title: "Apigee Integrated Portal release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Resources
Send feedback
Apigee Integrated Portal release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Apigee Integrated Portal in 2022 and
later. We recommend that users periodically check this list for
any new announcements, or subscribe to this page using a
feed reader to get notifications of updates.
What is a feed reader?
What is a feed reader?
Really simple syndication (RSS) feed readers aggregate content from
websites that you specify.
Feed reader notifications can be email-, browser-, desktop-, or
mobile-based. Some readers are free, or have free versions, and some
require a subscription.
A few examples:
Feedly
Feedreader
Feeder
More information on RSS:
RSS
Comparison of feed aggregators
Close
See also:
2021 and prior Release notes
Known issues
rss_feed Subscribe:
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 05, 2026
Announcement
On March 5, 2026 we released a new version of the Apigee integrated portal.
Feature
You can now publish APIs using AsyncAPI documents to render documentation for asynchronous APIs in your portal. For more information, see Publishing your APIs .
December 17, 2025
Announcement
On December 17, 2025 we released a new version of the Apigee integrated portal.
Fixed
Incorrect Cross-Origin-Opener-Policy header in developer portal
A fix has been implemented to address an issue where the
Cross-Origin-Opener-Policy response header in the developer portal was
malformed with an extra colon. This change ensures the security header is
correctly formatted.
September 08, 2025
Announcement
On September 8, 2025 we released a new version of the Apigee integrated portal.
Feature
Workforce Identity Federation users can now manage Integrated Portals using the Apigee Cloud console. This previous limitation has been removed from Accessing features only available in the Classic Apigee UI .
August 25, 2025
Announcement
On August 25, 2025 we released a new version of the Apigee integrated portal.
This release includes general improvements to performance and availability.
July 24, 2025
Announcement
On July 24, 2025 we began redirecting the following Apigee Classic UI navigation items to Apigee UI in the Google Cloud console:
Publish > Portals
See Apigee UI in Cloud console navigation for a mapping of each Classic Apigee UI feature page to its location in the Apigee UI in Cloud console.
See Apigee Classic UI shutdown for details on shutdown dates.
If you require more time to transition to the Google Cloud console, submit the exception request form by Aug 15, 2025.
June 23, 2025
Announcement
On June 23, 2025 we released a new version of the Apigee integrated portal.
Note: Rollouts of this release to production instances will begin within two business days and may take four or more business days to complete across all Google Cloud zones. Your instances may not have the feature available until the rollout is complete.
Feature
This release adds the Export feature to the Apigee UI in the Cloud console. You can now export publishing data for developers, apps, or API products as a comma-separated values (CSV) file or JSON file.
Documentation: Exporting publishing data
June 02, 2025
Announcement
On June 2, 2025 we released a new version of the Apigee integrated portal.
Fixed
Bug ID
Description
404509044
When configuring an SMTP server, and the portal is first provisioned, email notifications are sent to portal users from a generic sender address. This release updates that generic address to noreply-apigee-portals@google.com .
This approach is suitable for evaluation, but you should configure your own SMTP server before launching your portal to users. When you configure the SMTP server, you can also configure the sender address, for example, no-reply@mycompany.com .
May 29, 2025
Announcement
On May 29, 2025 we announced the shutdown schedule for the Apigee Classic UI.
Announcement
On May 29, 2025 we released a new version of the Apigee integrated portal.
Note: Rollouts of this release to production instances will begin within two business days and may take four or more business days to complete across all Google Cloud zones. Your instances may not have the features and fixes available until the rollout is complete.
Feature
GA: Apigee Integrated Developer Portal Admin UI in the Google Cloud console.
This release adds the Apigee Integrated Developer Portal Admin UI from the Classic Apigee UI into the Google Cloud console.
Leveraging Google Cloud console components provides API providers and Portal Admins with a centralized platform to efficiently configure, publish, and manage your API consumer portals, eliminating the need to switch between different UIs.
No new APIs have been introduced in this release.
See Publishing overview to get started.
Deprecated
The Apigee Classic UI will be shutdown as of August 29, 2025.
This is the final phase of moving Apigee to the Google Cloud console. Apigee in the Google Cloud console gives you the ability to manage all of your Apigee functionality in one place.
To prepare for the shutdown of the Apigee Classic UI, familiarize yourself with the new Apigee UI in Google Cloud console by reviewing UI overview .
See Apigee Classic UI shutdown for details on shutdown dates and exception request.
April 22, 2025
Announcement
On April 22, 2025 we released a new version of the Apigee integrated portal.
Note: Rollouts of this release to production instances will begin within two business days and may take four or more business days to complete across all Google Cloud zones. Your instances may not have the features and fixes available until the rollout is complete.
Feature
Public Preview: Apigee Integrated Developer Portal Admin UI in the Google Cloud console.
This release adds the Apigee Integrated Developer Portal Admin UI from the Classic Apigee UI into the Google Cloud console.
Leveraging Google Cloud console components provides API providers and Portal Admins with a centralized platform to efficiently configure, publish, and manage your API consumer portals, eliminating the need to switch between different UIs.
No new APIs have been introduced in this release.
See Publishing overview to get started.
March 11, 2025
Announcement
On March 11, 2025 we released a new version of the Apigee integrated portal.
Fixed
Bug ID
Description
380076166
For an app in a portal, the status for each key will now show approved, revoked, partially approved or inactive based on the approval status of all the API products on that key (or if the key has been revoked). Additionally, the status of an API Product for an app will show approved, partially approved, or pending approval based on the approval status for all keys associated to that API product. If a key is revoked, it will not effect the approval status of the API product.
February 04, 2025
Announcement
On February 4, 2025 we released a new version of the Apigee integrated portal.
Feature
This release includes general improvements to performance and availability.
December 10, 2024
Announcement
On December 10, 2024, we released a new version of the Apigee integrated portal.
Fixed
Bug ID
Description
381086551
Fixed an issue that caused the page list view to fail for some portals with large numbers of pages.
August 22, 2024
Announcement
On August 22, 2024 we released a new version of the Apigee integrated portal.
Fixed
Bug ID
Description
350546059
Fixed an issue when displaying OpenAPI Specs in the portal that caused the Example button to show even when no example was present.
July 16, 2024
Announcement
On July 16, 2024 we released a new version of the Apigee integrated portal.
Feature
This release includes general improvements to performance and availability.
May 31, 2024
Announcement
On May 31, 2024 we released an updated version of Apigee integrated portal.
Feature
This release includes the general availability (GA) of integrated portal APIs which allow you to manage your integrated portal APIs and reference documentation using API calls. The available functionality has not changed since the public preview release .
The catalog items list view now uses pagination when making requests to the portals service, examples have been added to Publishing your APIs , and new reference documentation is available:
Publishing your APIs
API categories reference documentation
API documents reference documentation
May 16, 2024
Announcement
On May 16, 2024 we released a new version of the Apigee integrated portal.
Feature
This release includes general improvements to performance and availability.
May 01, 2024
Announcement
On May 1, 2024 we released an updated version of Apigee integrated portal.
Security
This release contains multiple security fixes.
March 28, 2024
Announcement
On March 28, 2024 we released an updated version of Apigee integrated portal.
Fixed
Bug ID
Description
324872865
Fixed scrolling issue with API documentation display when navigating to the overview page.
February 07, 2024
Announcement
On February 07, 2024 we released an updated version of Apigee integrated portal.
Fixed
Bug ID
Description
323278335
A security issue was fixed.
192987085
Fixed an issue where switching API spec pages in the public developer portal resulted in an error. Note, this issue was erroneously mentioned in the 12/7/23 release notes.
January 22, 2024
Fixed
Bug ID
Description
311491188
API requests to add a category to a catalog item now validate that the category ID exists.
Announcement
On January 22, 2024 we released an updated version of Apigee integrated portal.
December 07, 2023
Announcement
On December 7, 2023 we released an updated version of Apigee integrated portal.
Fixed
Bug ID
Description
313803133
Fixed an issue where switching API spec pages in the public developer portal resulted in an error.
310865440
Fixed an issue where updating the documentation of a CatalogItem could timeout.
November 10, 2023
Announcement
On November 10, 2023 we released an updated version of Apigee integrated portal.
Feature
This release includes the public preview of integrated portal APIs which allow you to manage your integrated portal APIs and reference documentation using API calls.
The catalog items list view now uses pagination when making requests to the portals service, examples have been added to Publishing your APIs , and new reference documentation is available:
Publishing your APIs
API categories reference documentation
API documents reference documentation
November 08, 2023
Announcement
On November 8, 2023 we released an updated version of Apigee integrated portal.
Fixed
Bug ID
Description
305287906
Fixed links to an API product from the API details , User account details , or Team details page in the Apigee UI.
307600672
Fixed issue where the name of the documentation was not populated in the Documentation column on the Apigee UI, API catalog page.
307599975
Improved pagination through large API catalogs on the Apigee UI, API catalog page.
October 26, 2023
Announcement
On October 26, 2023 we released an updated version of Apigee integrated portal.
Fixed
Bug ID
Description
5400261
Improve confirmation dialog text when user clicks the button to revoke an app key from the portal UI. This dialog is displayed when you: Select Apps from the user account drop-down in the portal.
Click an app.
Click the Revoke button in the API Keys row.
October 05, 2023
Announcement
On October 5, 2023 we released an updated version of Apigee integrated portal. This release includes general improvements to performance and availability.
September 07, 2023
Announcement
On September 7, 2023 we released an updated version of Apigee integrated portal. This release includes general improvements to performance and availability.
June 23, 2023
Announcement
On April 20, 2023 we released an updated version of Apigee integrated portal. The fix below was not reported in a release note at the time. This update corrects the record.
Fixed
Bug ID
Description
275578252
Addressed an issue where an account could be created even though the built-in identity provider (IdP) had been disabled. For any portal with a disabled IdP, you can review the user accounts on the Portals > Portal name > Accounts > Users page. Select an account and then change the Status to Inactive to prevent login. Documentation: Deactivating user accounts
May 22, 2023
Announcement
On May 22, 2023 we released an updated version of Apigee integrated portal.
Fixed
Bug ID
Description
274916981
Fixed issue where an API specification set via URL could fail.
277265034
App names can start with numeric characters as described in Naming guidelines .
March 23, 2023
Announcement
On March 23, 2023 we released an updated version of Apigee integrated portal.
Feature
Users are now able to enable the content security policy feature for their portal for Apigee and Apigee hybrid. Previously, this feature was available in Apigee Edge only.
See: Configure a content security policy
Fixed
Bug ID
Description
272794133
When setting a user account to Inactive , a notice is now displayed indicating that this setting affects the login behavior only for built-in identity provider accounts.
267502391
Improved error messages for invalid input to various endpoints.
265051231
Default assets (images) added to a newly created portal used to show up as size 0px x 0px . Now they show their proper size.
253037871
Users are now able to enable the content security policy feature for their portal for Apigee and Apigee hybrid. Previously, this feature was available in Apigee Edge only.
January 17, 2023
Announcement
On January 17, 2023 we released an updated version of Apigee integrated portal.
Fixed
Bug ID
Description
262260756
We have updated the new account notification to administrators to read: "A new account was created by {{firstname}} {{lastname}} ({{email}}), for site {{siteurl}}. If you have enabled manual approval for new user accounts, this user will not be able to log in until you approve their account creation request by setting their status to 'active'." This is to highlight that they need to manually activate new accounts ONLY if they have enabled manual approval for new accounts.
261788412
Updated the version of GraphiQL used in the portal.
December 14, 2022
Announcement
On December 14, 2022 we released an updated version of Apigee integrated portal.
Fixed
Bug ID
Description
260725456
The x-xss-protection header on portal runtime loading changed from value of "1;" to be "1; mode=block".
254053443
Fixed a bug to ensure that a Not found page is displayed whenever an invalid document path is navigated to in a portal.
November 10, 2022
Announcement
On November 10, 2022 we released an updated version of Apigee integrated portal.
Fixed
Bug ID
Description
246636016
Updated the handling of linked or uploaded empty specification files for API catalog items, and added a meaningful error message.
226406073
In the portal list view, changed column Last Published to Created . Sorting is by oldest portal at top.
182687440
Updated the file filter for icon upload so you can choose and upload .ico files.
153886771
Fixed an issue with identity provider configuration where SAML certificate data would not correctly render after initial upload.
October 19, 2022
Announcement
On October 19, 2022 we released an updated version of Apigee integrated portal.
Fixed
Bug ID
Description
239424786
When reusing your portal custom domain with other sites, the cookies for the domain can get larger. This fix allows you to send cookies up to 16K in size, up from the previous 8K limit.
237181283
Pressing the enter button in the input field of Portals > Accounts > Authentication > Account creation & sign in no longer opens a file explorer window.
233933177
The email notification field for new account creation can be only a single email address, and not multiple email addresses separated by a delimiter (ie , space or tab). This fix adds validation on the client side to enforce this limitation.
September 12, 2022
Announcement
On September 12, 2022 we released an updated version of Apigee integrated portal.
Fixed
Bug ID
Description
237412458
Fixed an issue where some SMTP settings were not migrated to an upgraded portal.
235634994
Implemented a minor security fix to block content spoofing in the API search page.
233407912
When creating a new App key for products that have been set to manual approval, but have already been approved, the new key will "auto" approve and not have to go through the approval process again.
June 21, 2022
Announcement
On June 21, we released an updated version of Apigee integrated portal.
Feature
Added the ability to sort by Name and Created fields in the Apps and Teams tables. Click the column heading to sort.
June 14, 2022
Announcement
On June 14, we released an updated version of Apigee integrated portal.
Feature
Use a GraphQL schema to publish your APIs to an integrated portal.
For details, see:
What is GraphQL schema
GraphQL Explorer
May 11, 2022
Fixed
Bug ID
Description
228603948
Fixed an issue that prevented users from editing custom fields for account creation and signup.
228339667
Documentation now reflects support for the STARTTLS SMTP authorization type .
227511014
Fixed an issue that prevented V1 Portals from being upgraded to V2.
224991572
Improvements to the Get Started documentation bundled with a new portal. Create a new portal and then click Get Started to see the new content.
220980189
Fixed issue with publishing API Products on a Portal when the organization has over 1,000 API Products.
218320618
Page descriptions are now limited to 1,000 characters. Page content is now limited to 1 MB.
210651558
Fixed issue where adding a new API Product subscription to an App would remove all scopes on the Apps credentials.
Announcement
On May 11, 2022 we released an updated version of the Apigee Integrated Portal software.
May 04, 2022
Announcement
On May 4, 2022 we released an updated version of the Apigee Integrated Portal software.
Feature
Emails from portal-sso will either be the email address of the sender that the user sets up in the custom smtp settings, or it will be no-reply@google.com , instead of the human-readable name orgname-portalname . This screenshot illustrates emails sent from portal-sso in e2e . It shows one email with custom smtp settings ( tsnow-custom-smtp ) and one email with the default settings ( no-reply ).
Feature
Error messages for rejected logins for an inactive user are now more informative to the user.
Fixed
Bug ID
Description
220993729
Portal SSO showed the Apigee domain when hovering over footer links in third-party web pages.
220188030
Reset password was not working for LDAP configurations.
214146121
An authentication issue with Apigee SSO has been fixed.
204952689
Fixed miscellaneous logback error.
194469693
Enabled SAML config error so that it is visible.
194053231
Added server-side validation for the password field. If the password is non-compliant, the response is 422:Unprocessable Entity .
190609332
Improved error output for failures while enabling SSO for Apigee
157131343
Added support for the parenthesis () and plus + characters for built-in IDP custom fields. Other special characters will continue to be blocked due to security reasons.
Security
ID
Description
200604177
Upgraded jQuery and Bootstrap
April 05, 2022
Announcement
On April 5, 2022 we released an updated version of the Apigee Integrated Portal software.
Fixed
Bug ID
Description
220377670
Fixed an issue that prevented users from uploading svg and ico files.
217600695
Menus will scroll when they don't fit on the page.
174476355
When adding a custom registration field in the accounts-authentication UI for creating/editing a portal, the allowed characters for a custom field has been limited to letters, numbers, and spaces.
February 24, 2022
Announcement
On February 24, 2022 we released an updated version of the Apigee Integrated Portal software.
Fixed
Bug ID
Description
216299743
Inconsistent button icon for delete in Pages . Updated the page delete button from cancel (circle with x) to delete (trash can).
210539825
CSS compiler should gracefully handle errors with unexpected form . Fixed a rare issue where some custom CSS payloads would result in an Internal Server Error .
205579028
500s caused by could not get auth token for GCP . Periodically, under high load, GCP Authentication would fail on the backend and return a 500 internal exception .
194226935
Update site pages to link to Quickstart documentation . The Quick Start tutorial is no longer embedded in the portal. See Build your first portal in the Apigee documentation.
February 08, 2022
Announcement
On February 8, 2022 we released an updated version of the Apigee Integrated Portal software.
Fixed
Bug ID
Description
212421254
Consumers can access teams in a portal for which they have no IDP account. Before, a consumer could access a team as long as they were added to the team and had an IDP account in the same organization as the team. Now they can only access the team if they are added as a member and have an IDP account in the same portal as the team.
209436418
Display asset file sizes in megabytes. Asset file size was being incorrectly displayed in mebibytes and is now shown in megabytes.
207130598
Improve asset upload error messages. Improved an error message when an unsupported image type was uploaded.
205963075
New portal name rules are not enforced on backend. The same portal name rules that were already enforced on the front end are now also enforced on the backend.
205881764
Cannot delete mobile logo/favicon in Apigee X/Hybrid. Fixed a bug where Apigee X and Hybrid customers could not delete mobile logos or favicons.
205629978
Broken HTML after portals v2 migration. The live portal of the upgraded portal will not be displayed correctly after migrating a portal from v1 to v2.
205581372
Users endpoint should not crash when passed an invalid Enum value. Passing an invalid sortBy value to the providers/{scope}/users endpoint is now handled gracefully.
196875216
Team does not exist exceptions should not be reported as 500s . When API producers attempted to retrieve a team which does not exist, they got an uniformative 500 . Now they get an easy-to-read 404 .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
