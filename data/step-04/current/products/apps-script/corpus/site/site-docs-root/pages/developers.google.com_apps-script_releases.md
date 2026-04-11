---
title: "Google Apps Script release notes \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/releases
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/apps-script
source_metadata:
  url: https://developers.google.com/apps-script/releases
  title: "Google Apps Script release notes \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Support
Send feedback
Google Apps Script release notes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Several Apps Script services have been updated, including the Spreadsheet, Forms, Calendar, Docs, Chat, and Google Workspace Add-ons services, adding new features and capabilities.
The Google Analytics Advanced Service and the Rhino runtime are scheduled for deprecation, requiring migration to the Google Analytics Data API Advanced Service and the V8 runtime respectively.
The Apps Script IDE has received significant enhancements, such as improved version management, better debugging tools, and a redesigned interface.
Several services and advanced services have been deprecated or removed, including the Contacts service, classic Google Sites service, Fusion Tables advanced service, and the UI service.
New services and advanced services have been introduced, such as advanced services for Google Tables, Google Drive API version 3, the Chat API, and Google Workspace Events.
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the feed URL directly: https://developers.google.com/feeds/apps-script-release-notes.xml .
This page contains release notes for features and updates to
Apps Script. We recommend that
Apps Script developers periodically check this list for any new
announcements.
March 12, 2026
Feature
Generally Available: The AddOnsResponseService and its associated classes in Apps Script are now generally available. This service allows developers to create and manage interactive responses for Google Workspace Add-ons that extend Google Chat.
March 05, 2026
Deprecated
Deprecated: The method setAuthentication(clientId, signingKey) has been deprecated and is scheduled for sunset in June 2026. This change is because Maps platform client IDs were deprecated on May 26, 2025, and can't be used after May 31, 2026. Instead, use setAuthenticationByKey(apiKey) or setAuthenticationByKey(apiKey, signingKey) . To get an API key, refer to the Client ID Migration Guide .
Feature
Generally Available: To authenticate to the Maps service, you can now use an API key with the new methods setAuthenticationByKey(apiKey) and setAuthenticationByKey(apiKey, signingKey) . To reset authentication to the default mode, use resetAuthenticationApiKey() .
January 12, 2026
Feature
Generally Available: Use Apps Script's Vertex AI advanced
service to call the Vertex AI API and prompt AI models to generate text, images,
and more.
For details, see the
Vertex AI advanced service reference documentation.
January 07, 2026
Other
The
Apps Script samples gallery
now lets you find samples by use case, products, and sample type. The gallery
also features the following new samples:
Build a Google Chat app with an ADK AI agent
Build a Chat app with an Agent2Agent agent
Analyze and label Gmail messages with Gemini and Vertex AI
June 04, 2025
Deprecated
Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated. Use the Google Analytics Data API Advanced Service instead.
April 23, 2025
Fixed
Between approximately September 2024 and March 2025, for Google Sheets modifications made by time-based Apps Script triggers, a bug caused incorrect OAuth App IDs and App Names to be logged in the Google Admin console.
This logging issue did not impact the functionality of Apps Script or Google Sheets. A fix was deployed on March 27, 2025, preventing future incorrect logging. Historical logs will not be corrected.
To learn more about Apps Script and audit logs, see Monitor and control Apps Script use in your Google Workspace organization .
April 08, 2025
Feature
You can now use the Forms Service to publish forms, and to have granular control over who can respond to forms.
Learn about the setPublished method to publish forms .
February 20, 2025
Announcement
As of February 20, 2025, the Rhino runtime is deprecated. Scripts running on Rhino will continue to function until January 31, 2026, after which they will no longer execute. Please migrate your scripts to the V8 runtime before this date. Refer to Migrate scripts to the V8 runtime .
January 08, 2025
Feature
Generally Available : Granular OAuth permissions are now supported for users executing scripts in the Apps Script IDE. The granular OAuth consent screen lets users specify which individual OAuth scopes they would like to authorize. The granular consent screen will gradually launch to the remaining Apps Script surfaces, such as add-ons and trigger executions, in the future.
For more information, refer to the Workspace Updates blog post: Granular OAuth consent in Google Apps Script IDE executions .
Feature
Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
ScriptApp class :
requireScopes(authMode, oAuthScopes)
requireAllScopes(authMode)
getAuthorizationInfo(authMode, oAuthScopes)
AuthorizationInfo class :
getAuthorizedScopes()
For more information, refer to Handle granular OAuth permissions .
December 09, 2024
Deprecated
The getUrl() method for the CellImage , CellImageBuilder , and OverGridImage classes of the Spreadsheet service has been deprecated. An image's source URL isn't available regardless of how the image is inserted into a spreadsheet.
Feature
Generally available : The getSheetById() method has been added to the Spreadsheet class of the Spreadsheet service. This lets you get a sheet in a spreadsheet using its unique ID.
Feature
Generally available : You can now get and set the transparency of a calendar event, meaning whether the event shows as "Busy" or "Available" in Google Calendar. For more information, refer to the following documentation:
Enum EventTransparency
Class CalendarEvent
Class CalendarEventSeries
November 27, 2024
Feature
The Calendar service now has a getEventType() method that lets developers differentiate regular events from other types of events like out-of-office and working location events. For more information, see the following documentation:
getEventType() for events
getEventType() for event series
EventType enum
October 02, 2024
Announcement
Apps Script has rescheduled the shutdown date of the Contacts service to January 31, 2025. Refer to the Apps Script sunset schedule .
The Apps Script Contacts service was deprecated in December 2022. Instead, use the People API advanced service. Refer to Migrate from Contacts service to People API advanced service .
September 03, 2024
Feature
Generally available : You can now use Looker in Connected Sheets from Apps Script. This update lets you create a new or access existing Looker data source connections, connect a sheet to them, create pivot tables, and more.
The following updates have been made to the Spreadsheet service to support Looker in Connected Sheets from Apps Script.
The following new data source type has been added:
LOOKER
The following new classes have been added:
LookerDataSourceSpec
LookerDataSourceSpecBuilder
The following new methods have been added to existing classes:
DataSourceSpec.asLooker()
DataSourceSpecBuilder.asLooker()
August 15, 2024
Feature
Generally Available : You can now create and organize tabs in Google Docs documents using Apps Script's Document service. For more information, refer to Work with tabs .
August 07, 2024
Change
Google Workspace administrators can now turn on an allowlist in the admin console to control which external domains users can access through Apps Script's URL Fetch service .
If you're using a script or add-on that accesses external domains, work with your administrator to add those URLs to the admin allowlist.
If you've published an add-on on the Google Workspace Marketplace, it might be helpful to list the URLs that admins should add to their allowlist on your Marketplace listing.
For more information, refer to the Google Workspace Admin Help article: Allow only certain external connections for Apps Script and Sheets .
July 25, 2024
Feature
( Generally Available ): Multiselect menus are now generally available for Add-ons.
For more information refer to the following:
SelectionInput for Apps Script
SelectionInput for HTTP runtimes
Feature
( Generally Available ): Columns are now generally available for Add-ons.
For more information refer to the following:
Columns for Apps Script
Columns for HTTP runtimes
May 02, 2024
Feature
To subscribe to events using Apps Script, you can now use the Advanced Google Workspace Events service. For details, see the Apps Script reference documentation .
April 30, 2024
Feature
The cancelDataRefresh() method has been added to the following classes of the Spreadsheet service:
DataSourceChart
DataSourceFormula
DataSourcePivotTable
DataSourceSheet
DataSourceTable
The cancelDataRefresh() method cancels the data refresh associated with the object it's called on if the refresh is currently running.
The cancelAllLinkedDataSourceObjectRefreshes() method has been added to the DataSource class. This method cancels all currently running refreshes of data source objects linked to the data source this method is called on.
April 22, 2024
Feature
(Generally Available) : Google Chat apps now support Google Apps Script's Card Service. If you've built your Chat app using Apps Script, you can use Card Service to build user interfaces such as card messages and dialogs. For more information, see the Card Service reference documentation .
March 15, 2024
Change
The default property for the TextButtonStyle enum in the Apps Script Card Service has been renamed from TEXT to OUTLINED to align with the Google Material 3 design system . Existing scripts that use the original default, TEXT , render the same as the new default, OUTLINED .
March 07, 2024
Feature
(Generally Available) : You can now delete multiple unused versions at the same time from the Project History page. Refer to Delete multiple versions .
March 05, 2024
Feature
(Generally Available) : The LinkPreview class has been added to the Apps Script Card service. This class lets you control various aspects of link previews, including the smart chip title, the link preview title, and the link preview card.
February 29, 2024
Announcement
The 200 version limit, first announced for new scripts on December 6, 2023 , has been extended to all script projects. If your existing script project already has more than 200 versions, after June 1, 2024 you won't be able to add a new version. To delete unused versions, refer to Delete a version .
February 21, 2024
Feature
( Developer Preview ): Multiselect menus are now in Developer Preview for Add-ons.
For more information refer to the following:
SelectionInput for Apps Script
SelectionInput for other runtimes
Feature
( Developer Preview ): Columns are now in Developer Preview for Add-ons.
For more information refer to the following:
Columns for Apps Script
Columns for other runtimes
February 20, 2024
Feature
(Developer Preview) : Google Chat apps now support Google Apps Script's Card Service. If you've built your Chat app using Apps Script, you can use Card Service to build user interfaces such as card messages and dialogs. For more information, see the Card Service reference documentation .
January 24, 2024
Feature
( Generally Available ): Google Workspace Add-ons now support third-party resource creation from the @ menu in Google Docs. This feature is gradually rolling out over the next few weeks. To use this feature, see Create third-party resources from the @ menu .
January 18, 2024
Feature
( Generally available ): Google Workspace Add-ons now support link previews in Google Sheets and Slides. To learn more, see Preview links with smart chips .
December 13, 2023
Feature
( Generally available ): The setPersistValues(persistValues) method has been added to the Action class of the Card service . This means that you can now indicate whether form values are determined by the client's values or the server's values after an action response updates a form's card.
December 11, 2023
Feature
( Generally Available ): You can now call version 3 of the Google Drive API from Apps Script with the advanced Drive service. To learn more, see Advanced Drive service .
December 07, 2023
Fixed
To fix a bug that prevented events of eventType != 'default' from importing, we updated the code sample in Populate a team vacation calendar , the popular Apps Script + Calendar API solution. Review the code change in GitHub .
December 06, 2023
Feature
( Generally available ): You can now delete versions in your Apps Script project from the project history page in the Apps Script IDE.
Script projects created after December 10, 2023 can have up to 200 versions. If your script reaches the versions limit, or you want to clean up your script project, delete undeployed versions that you no longer need.
To learn more, see Delete a version .
November 15, 2023
Feature
( Developer Preview ) : Google Workspace Add-ons now support third-party resource creation from the @ menu in Google Docs. To use this feature, see Create third-party resources from the @ menu .
November 13, 2023
Feature
(Developer Preview) : Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Google Workspace Add-ons now support link previews in Google Sheets and Slides. To learn more, see Preview links with smart chips .
November 06, 2023
Feature
(Generally available) : You can now call the Chat API from Apps Script with the Advanced Chat Service. To learn how, see Advanced Chat Service in the Apps Script reference documentation.
We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides:
Authenticate as an app
Authenticate as a user
Try it - Respond to Incidents
September 26, 2023
Change
The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .
September 19, 2023
Deprecated
The classic Google Sites service has been deprecated due to the transition from classic Sites to new Sites . There isn't a way to connect to new Sites with Apps Script.
August 23, 2023
Feature
You can now view previously deployed script versions and compare them to the current script version in the Apps Script IDE. Anyone who has edit permission on an Apps Script project can access the project history page. To learn more, refer to the following:
Google Workspace Updates blog : View & compare script versions with Apps Script project history
Developer documentation : Versions
June 12, 2023
Feature
Third-party smart chips and link previews are now generally available. To build a Google Workspace Add-on that uses this feature, see Preview links with smart chips .
December 16, 2022
Deprecated
Apps Script has deprecated the Contacts service . Instead, use the People API advanced service . Refer to Migrate from Contacts service to People API advanced service .
The Contacts service shutdown has been rescheduled from April 2023 to January 2025. Refer to the Apps Script sunset schedule .
November 03, 2022
Feature
Apps Script added a new method to the Utilities class . parseDate(date, timeZone, format ) parses a provided string date according to the specification described in the Java Standard Edition SimpleDateFormat class .
November 01, 2022
Deprecated
Apps Script has sunset the following methods:
getChatThreads()
getChatThreads(start, max)
There isn't a replacement method to get this data with Apps Script.
Learn about the switch from Classic Hangouts to Chat .
September 27, 2022
Deprecated
Apps Script has turned down the legacy integrated development environment (IDE) in favor of the redesigned IDE that launched in December 2020.
Learn more about the IDE updates from the following blog posts:
Updated Apps Script integrated development environment will replace the legacy experience by Q4 2022 .
Additional functionality for the Apps Script Integrated Development Environment (IDE) Script Editor .
Use the new Apps Script Integrated Development Environment (IDE) Script Editor .
July 19, 2022
Change
Apps Script now automatically deletes default Google Cloud projects (Google Cloud projects that Apps Script creates in the background) when their associated scripts haven't run in 180 days or more. If the script runs after Apps Script deletes the default Google Cloud project, Apps Script creates one for the script.
This update doesn't affect standard Google Cloud projects (Google Cloud projects created by people).
July 08, 2022
Deprecated
Apps Script has deprecated the following methods:
getChatThreads()
getChatThreads(start, max)
These methods will become unavailable later this year once Google switches all users from Classic Hangouts to Google Chat. There isn't a replacement method to get this data with Apps Script.
Learn about the switch from Classic Hangouts to Chat .
June 06, 2022
Change
You can now call functions in separate files before they're parsed. Previously, the V8 runtime required a script file to be parsed before any other file could call the functions it defines.
Now, the order of files in the Apps Script editor doesn't matter. This means that you can call a function in a different file to assign a value to a global variable—the function is always defined before it's called. This behavior reflects that of the legacy Rhino runtime.
April 13, 2022
Feature
You can now perform the following actions in the new Apps Script integrated development environment (IDE):
Create test deployments for Editor Add-ons .
Add, edit, and delete script properties from the project settings page .
Sort files alphabetically in the editor.
Debug Rhino functions without migrating to the V8 runtime . If your code isn't V8 compatible, you might receive errors.
Set the time zone for a script project .
March 24, 2022
Feature
For Google Workspace Add-ons, an Attachment class has been added to the Card Service that lets you add custom attachments to Calendar events. You can also set an event trigger that fires when the user clicks on the add-on attachment provider in the Calendar dropdown menu. For more information, refer to EventAttachmentTrigger .
March 18, 2022
Deprecated
The get methods for several color objects in the Spreadsheet Service have been deprecated in favor of a new naming convention. The functionality remains the same. For example, the getFontColor() method from the Range class has been replaced with getFontColorObject() .
The following classes have updated get methods for color objects:
Banding :
getFirstColumnColor() is now getFirstColumnColorObject() .
getFirstRowColor() is now getFirstRowColorObject() .
getFooterColumnColor() is now getFooterColumnColor() .
getFooterRowColor() is now getFooterRowColorObject() .
getHeaderColumnColor() is now getHeaderColumnColorObject() .
getHeaderRowColor() is now getHeaderRowColorObject() .
getSecondColumnColor() is now getSecondColumnColorObject() .
getSecondRowColor() is now getSecondRowColorObject() .
BooleanCondition :
getBackground() is now getBackgroundObject() .
getFontColor() is now getFontColorObject() .
GradientCondition :
getMaxColor() is now getMaxColorObject .
getMidColor() is now getMidColorObject .
getMinColor() is now getMinColorObject .
Range :
getFontColor() is now getFontColorObject() .
getFontColors() is now getFontColorObjects() .
Sheet :
getTabColor() is now getTabColorObject .
Slicer :
getBackgroundColor() is now getBackgroundColorObject() .
February 14, 2022
Feature
Owners receive email alerts when someone outside the owner's organization edits a script project in the new integrated development environment (IDE).
For container-bound scripts : If someone outside the container owner's organization creates or edits a container-bound script project, the container owner receives an email notification.
For standalone scripts : If someone outside the script project owner's organization edits a standalone script project, the script project owner receives an email notification.
January 19, 2022
Feature
The following classes have been added to the Spreadsheet Service to let you add images to cells:
CellImageBuilder : This builder creates the image value needed to add an image to a cell.
CellImage : Represents an image to add to a cell.
To add an image to a cell, you must create a new image value for the image using SpreadsheetApp.newCellImage() and CellImageBuilder . Then, use Range.setValue(value) or Range.setValues(values) to add the image value to the cell.
December 15, 2021
Deprecated
Versions 1.0 and 1.1 of the TLS security protocol are disabled. To establish JDBC connections, use TLS 1.2 or higher.
September 01, 2021
Feature
In the HTML Service iframe sandbox, allow-top-navigation , which allows the content to navigate its top-level browsing context, is restricted and not set as an attribute in the sandbox. Instead, the allow-top-navigation-by-user-activation attribute has been added to the sandbox.
If you need to redirect your script, add a link or a button for the user to take action on.
Learn more about HMTL Service restrictions .
August 31, 2021
Feature
The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders.
getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link.
getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link.
setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
Learn more about the resource key security update for Drive .
August 23, 2021
Feature
The Document Service has added support for smart chips by adding three new classes:
Date - An element representing a formatted date.
Person - An element representing a link to a person.
RichLink - An element representing a link to a Google resource, such as a Drive file or a YouTube video.
Learn more about smart chips in Google Docs .
August 09, 2021
Change
The Microsoft SQL Server JDBC driver was updated to version 7.2.1. If you encounter issues, report them on the issue tracker . If you're an administrator and need live support, contact Google Workspace support .
June 01, 2021
Feature
A new divider widget has been added for Google Workspace Add-ons. To add a divider to an add-on card, use the newDivider() method within the Card service .
May 27, 2021
Feature
A new method has been added to the Sheet class of the Spreadsheet service . setRowHeightsForced(startRow, numRows, height) lets you manually set the height for a row or a set of rows.
March 15, 2021
Change
The following updates have been made to deployments in the new editor:
You can now have more than one active deployment.
You can now change the version associated with an active deployment.
To learn more, see Create and manage deployments .
December 07, 2020
Announcement
The Apps Script integrated development environment, or IDE, has been fully redesigned. Along with a completely new interface, the following features have been updated:
The editor now has a collapsible left sidebar to navigate to the Apps Script project overview, settings, executions, and triggers.
The editor's resources panel now includes files, advanced services, and libraries.
Autoformatting has been added to the editor.
Autocomplete in the editor has been enhanced to be faster, more consistent, and extends its support to user-defined functions and JavaScript language features. You can add JSDoc to your functions for better autocomplete suggestions.
The editor now supports codeblock and function collapsing.
Keyboard shortcuts and a Command Palette has been added to the editor. Press F1 to view the Command Palette and available keyboard shortcuts.
The editor now includes a contextual right-click menu with options such as Go To Symbol, Rename Symbols, and Command Palette.
Enhancements have been made to the debugger's performance and speed.
Logs now stream in real-time as you run a script.
The deployments dialog auto-detects the deployment types from the script project's manifest. You can change or add more types as needed.
Deployments have been merged with versions. Each time you create a new deployment, a new version is automatically created. clasp users are unaffected by this change.
A single deployment can be an add-on deployment , web app, library, or API executable. Any deployment can be used as a library.
Now only one deployment can be active at a time. This change doesn't affect existing active deployments. clasp users are unaffected by this change.
You can no longer explicitly deactivate published web apps. Instead, delete the deployment that has the web app. To reactivate the web app, deploy it again.
The debugger is no longer supported in the Rhino runtime. To use the debugger, migrate your script to the V8 runtime .
Testing Editor Add-ons is not yet supported in this release and will be added in 2021. To test Editor Add-ons, switch back to the legacy IDE.
To switch back to the legacy IDE from within the editor, at the top, click Use legacy editor .
October 23, 2020
Feature
An advanced service for Google Tables has been added to Apps Script. The Tables service allows scripts to programmatically read and edit rows within Tables .
September 03, 2020
Feature
New classes and methods have been added to support Connected Sheets .
The following new classes have been added to the Spreadsheet service :
DataSourceChart
DataSourceColumn
DataSourceFormula
DataSourcePivotTable
DataSourceRefreshSchedule
DataSourceRefreshScheduleFrequency
DataSourceSheet
DataSourceSheetFilter
DataSourceTableColumn
DataSourceTableFilter
DateTimeGroupingRule
PivotGroupLimit
SortSpec
New methods to support Connected Sheets have been added to the following classes in the Spreadsheet service :
BigQueryDataSourceSpecBuilder
BigQueryDataSourceSpec
DataExecutionStatus
DataSourceTable
DataSource
EmbeddedChart
FilterCriteriaBuilder
`PivotFilter
PivotGroup
PivotTable
PivotValue
Range
Sheet
SpreadsheetApp
Spreadsheet
August 27, 2020
Feature
A new class called DecoratedText has been added to the Card Service . DecoratedText adds text with optional decorations and was added to replace the KeyValue class .
July 27, 2020
Deprecated
The following Folder class methods have been deprecated :
addFile(File)
addFolder(Folder)
removeFile(File)
removeFolder(Folder)
Announcement
To help simplify Google Drive's folder structure and sharing models , new methods have been added to the Drive service and some existing methods have been deprecated.
Feature
The DriveApp now has an enforceSingleParent(value) method that enables or disables enforceSingleParent behavior.
The File class now has the following methods:
file.getTargetId() : Gets a shortcut's file ID.
file.getTargetMimeType() : Returns the mime type of the item a shortcut points to.
file.moveTo(destination) : Moves a file to a specified destination folder.
The Folder class now has the following methods:
folder.createShortcut(targetId) : Creates a shortcut to the provided Drive item ID, and returns it.
folder.moveTo(destination) : Moves an item to the provided destination folder.
June 12, 2020
Feature
New methods have been added to the Spreadsheet service :
The RichTextValue class now has a RichTextValue.getLinkUrl() method that gets the URL of the specified value.
The RichTextValueBuilder class now has a RichTextValueBuilder.setLinkUrl() method that sets the link URL for the specified value.
The PivotTable class now has a PivotTable.getSourceDataRange() method that returns the source data range on which the pivot table is constructed.
The PivotValue class now has a PivotValue.remove() method that removes the value from the pivot table.
April 22, 2020
Feature
A new simple trigger, onSelectionChange(e) , has been added for Google Sheets. The onSelectionChange(e) trigger runs automatically when a user changes the selection in a spreadsheet.
April 02, 2020
Feature
The following has been added to the Spreadsheet service :
A new Drawing class has been added to support drawings.
You can now get your drawings with the Sheet.getDrawings() method .
The following has been added to the Drive service :
There's a new FILE_ORGANIZER value in the Permission enum . If you have FILE_ORGANIZER permission on a shared drive, you can edit, trash, and move content within that drive.
February 28, 2020
Feature
The following methods have been added to the Spreadsheet service to support the use of theme colors. Many of these methods duplicate the effect of existing color methods, but let you use Color objects instead of strings as parameters and return types:
The Banding class now has 16 new methods that manipulate color in the banding columns and rows using Color objects.
The BooleanCondition class now has two new methods that retrieve the color of the condition's background and font as Color objects.
The ConditionalFormatRuleBuilder class now has seven new methods that set color-based format rules using Color objects.
The GradientCondition class now has three new methods that retrieve condition colors as Color objects.
The Range class now has eight new methods that get and set font and background colors using Color objects.
The Sheet class now has two new methods that get and set tab colors using Color objects.
The Slicer class now has two new methods that get and set the background color of the slicer using Color objects.
The TextStyleBuilder class now has a TextStyleBuilder.setForegroundColorObject(color) method that updates the foreground color of the style builder using a Color object.
The TextStyle class now has a TextStyle.getForegroundColorObject() method that gets the foreground color of the style as a Color object.
February 05, 2020
Announcement
Apps Script now supports the V8 runtime . This enables modern JavaScript features and syntax in Apps Script. You can migrate existing scripts to use V8 and its features.
January 21, 2020
Feature
To support the launch of G Suite Add-ons , the following manifest changes, service, classes, and methods have been added to Add-ons:
The add-ons manifest structure has been updated to provide configuration controls for G Suite Add-ons. All add-on manifest settings are specified in the AddOns object in the manifest.
Manifest fields that previously supported Gmail add-ons still exist, but are now deprecated. See Upgrading your published add-ons for instructions on how to upgrade a Gmail add-on into a G Suite add-on.
The Card service has been extended with the following classes and methods that provide new widgets and event responses:
CalendarEventActionResponse
CalendarEventActionResponseBuilder
DatePicker
DateTimePicker
DisplayStyle
DriveItemsSelectedActionResponse
DriveItemsSelectedActionResponseBuilder
FixedFooter
SwitchControlType
TimePicker
CardBuilder.setDisplayStyle(displayStyle)
CardBuilder.setFixedFooter(fixedFooter)
CardBuilder.setPeekCardHeader(peekCardHeader)
CardService.newCalendarEventActionResponseBuilder()
CardService.newDatePicker()
CardService.newDateTimePicker()
CardService.newDriveItemsSelectedActionResponseBuilder()
CardService.newFixedFooter()
CardService.newTimePicker()
Switch.setControlType(controlType)
The Conference Data service has been added to Apps Script. The service helps G Suite Add-ons that extend Google Calendar to stay in sync with third-party conferencing applications. This service is only useful to developers who manage a conferencing application and want to make it available in Google Calendar.
December 18, 2019
Feature
The Spreadsheet service has been extended with the following class and new methods to support using color building and theme colors:
Color
ColorBuilder
SpreadsheetTheme
ThemeColor
ThemeColorType
SpreadsheetApp.newColor()
Spreadsheet.getPredefinedSpreadsheetThemes()
Spreadsheet.getSpreadsheetTheme()
Spreadsheet.resetSpreadsheetTheme()
Spreadsheet.setSpreadsheetTheme(theme)
December 11, 2019
Feature
The Data Studio service has been extended with the following class and new methods to support different response types and dynamic statuses:
GetDataResponse
GetSchemaResponse
SetCredentialsResponse
Checkbox.setIsDynamic(isDynamic)
CommunityConnector.newGetDataResponse()
CommunityConnector.newGetSchemaResponse()
CommunityConnector.newSetCredentialsResponse()
Config.setIsSteppedConfig(isSteppedConfig)
SelectMultiple.setIsDynamic(isDynamic)
SelectSingle.setIsDynamic(isDynamic)
TextArea.setIsDynamic(isDynamic)
TextInput.setIsDynamic(isDynamic)
November 06, 2019
Feature
The Spreadsheet service has been extended with the following class and new methods to support using slicers to filter ranges, charts, and pivot tables:
Slicer
Sheet.getSlicers()
Sheet.insertSlicer(range, anchorRowPos, anchorColPos)
Sheet.insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY)
The Script service has been extended with the ScriptApp.getIdentityToken() method , which returns an identity token for the effective user.
October 28, 2019
Deprecated
You can no longer publish web apps to the Chrome Web Store. The Chrome Web Store deprecated Chrome apps in 2016 and they are now only available for ChromeOS devices. This change includes published Apps Script web apps. Previously published web apps are no longer discoverable in the Chrome Web Store. Editor Add-ons aren't affected; you can still publish Editor Add-ons to the Chrome Web Store.
October 23, 2019
Deprecated
Several classes and methods relating to the now shutdown UiApp service have been removed. Most of these methods involved interactions between the Charts service and UiApp that were very seldom used. The following is a full list of the removed classes and methods:
Charts service
CategoryFilterBuilder
Control
DashboardPanel
DashboardPanelBuilder
Chart.getId()
Chart.getType()
Charts.newCategoryFilter()
Charts.newDashboardPanel()
Charts.newNumberRangeFilter()
Charts.newStringFilter()
NumberRangeFilterBuilder.build()
NumberRangeFilterBuilder.setDataTable(tableBuilder)
NumberRangeFilterBuilder.setDataTable(table)
NumberRangeFilterBuilder.setFilterColumnIndex(columnIndex)
NumberRangeFilterBuilder.setFilterColumnLabel(columnLabel)
NumberRangeFilterBuilder.setLabel(label)
NumberRangeFilterBuilder.setLabelSeparator(labelSeparator)
NumberRangeFilterBuilder.setLabelStacking(orientation)
StringFilterBuilder.build()
StringFilterBuilder.setDataTable(tableBuilder)
StringFilterBuilder.setDataTable(table)
StringFilterBuilder.setFilterColumnIndex(columnIndex)
StringFilterBuilder.setFilterColumnLabel(columnLabel)
StringFilterBuilder.setLabel(label)
StringFilterBuilder.setLabelSeparator(labelSeparator)
StringFilterBuilder.setLabelStacking(orientation)
Spreadsheet service
EmbeddedChart.getId()
EmbeddedChart.getType()
EmbeddedChart.setId(id)
Change
The Slides service class RgbColor and the enumeration ColorType have been moved from the Slides service to the [Base script service](https://developers.google.com/apps-script/reference/base). The functionality of these classes has not changed. Moving these classes to the Base script service enables other services to make use of them in the future. You can now find the documentation for these classes at [ RgbColor ](https://developers.google.com/apps-script/reference/base/rgb-color) and [ ColorType`](https://developers.google.com/apps-script/reference/base/color-type).
September 09, 2019
Change
The Card service methods CardHeader.setUrl(url) and Image.setUrl(url) have been updated to accept an encoded image data string as an input parameter. As before, you can alternatively use a publicly-available image URL as the input parameter.
August 07, 2019
Deprecated
Documentation for the UI service has been removed. This service was deprecated in December 2014 and officially shut down on July 15, 2019 . To build interfaces for web apps and Editor Add-ons, use the HTML service .
July 26, 2019
Feature
The Group service has been updated with the Groups.getRoles(user) method that can determine the list of roles a specific user in a group has.
The Slides service has been extended with the following new methods to support concrete color schemes:
ColorScheme.setConcreteColor(type, color)
ColorScheme.setConcreteColor(type, red, green, blue)
ColorScheme.setConcreteColor(type, hexColor)
The Spreadsheet service has been extended with the following new methods to support trimming whitespace and removing duplicate values:
RangeList.trimWhitespace()
Range.removeDuplicates()
Range.removeDuplicates(columnsToCompare)
Range.trimWhitespace()
May 20, 2019
Feature
The Gmail service has been updated with the GmailMessage.getHeader(name) method that can retrieve a RFC 2822 header from a message.
The Optimization service has been updated with the following batch methods:
LinearOptimizationEngine.addContraints(lowerBounds, upperBounds, variableNames, coefficients)
LinearOptimizationEngine.addVariables(names, lowerBounds, upperBounds, types, objectiveCoeffients)
May 03, 2019
Feature
The Document service has been updated to add methods to get and set the language of a document:
Document.getLanguage()
Document.getSupportedLanguageCodes()
Document.setLanguage(languageCode)
April 19, 2019
Feature
The Data Studio service has been updated to add a few values to FieldType enum :
HYPERLINK
IMAGE
IMAGE_LINK
April 08, 2019
Change
The behavior of the Google Cloud (GCP) projects used by scripts has been altered. Now, the default GCP projects that Apps Script creates for new scripts are hidden and script owners can't access them directly. Admins and domain users with the resourcemanager.projects.list permission on the parenting GCP folder can still access default GCP projects.
If you need access to a script's GCP project (because you wish to publish it or take a similar action), it's best to switch your script to use a standard GCP project .
April 05, 2019
Feature
The Spreadsheet service has been extended with the following new classes and methods to support text finding, checkboxes, and other features:
TextFinder
RecalculationInterval
SheetType
DataValidationBuilder.requireCheckbox()
DataValidationBuilder.requireCheckbox(checkedValue)
DataValidationBuilder.requireCheckbox(checkedValue, uncheckedValue)
A clearRanges() method has been added to the all the embedded chart type builder classes, such as EmbeddedAreaChartBuilder.clearRanges()
EmbeddedChart.getChartId()
RangeList.check()
RangeList.insertCheckboxes()
RangeList.insertCheckboxes(checkedValue)
RangeList.insertCheckboxes(checkedValue, uncheckedValue)
RangeList.removeCheckboxes()
RangeList.uncheck()
Range.check()
Range.createTextFinder(findText)
Range.getDataRegion()
Range.getDataRegion(dimension)
Range.insertCheckboxes()
Range.insertCheckboxes(checkedValue)
Range.insertCheckboxes(checkedValue, uncheckedValue)
Range.removeCheckboxes()
Range.uncheck()
Sheet.createTextFinder(findText)
Sheet.getType()
Spreadsheet.createTextFinder(findText)
Spreadsheet.getIterativeCalculationConvergenceThreshold()
Spreadsheet.getMaxIterativeCalculationCycles()
Spreadsheet.getRecalculationInterval()
Spreadsheet.isIterativeCalculationEnabled()
Spreadsheet.moveChartToObjectSheet(chart)
Spreadsheet.setIterativeCalculationConvergenceThreshold(minThreshold)
Spreadsheet.setIterativeCalculationEnabled(isEnabled)
Spreadsheet.setMaxIterativeCalculationCycles(maxIterations)
Spreadsheet.setRecalculationInterval(recalculationInterval)
The Data Studio service has been extended with the following new classes and methods that support configuring BigQuery connectors:
BigQueryConfig
BigQueryParameterType
CommunityConnector.newBigQueryConfig()
The Notification objects in the Card service no longer have a type that you must set. Calls to the now removed Notification.setType(type) method result in a no-op.
February 26, 2019
Feature
The Spreadsheet service has been extended with the following new classes and methods to support BigQuery data connectors in Sheets :
BigQueryDataSourceSpec
BigQueryDataSourceSpecBuilder
DataExecutionErrorCode
DataExecutionState
DataExecutionStatus
DataSourceParameterType
DataSourceParameter
DataSourceSpecBuilder
DataSourceSpec
DataSourceTable
DataSourceType
DataSource
Range.getDataSourceTables()
Sheet.getDataSourceTables()
`SpreadsheetApp.enableAllDataSourcesExecution()
SpreadsheetApp.enableBigQueryExecution()
SpreadsheetApp.newDataSourceSpec()
Spreadsheet.getDataSourceTables()
Spreadsheet.insertSheetWithDataSourceTable(spec)
The Data Studio service has been extended with the following new methods involving reaggregation settings:
Field.getIsReaggregatable()
Field.setIsReaggregatable(isReaggregatable)
January 22, 2019
Deprecated
The deprecated UiApp service will be officially shutdown on July 15th, 2019. After this date, the service will no longer function for any script project.
Feature
The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting:
RichTextValue
RichTextValueBuilder
TextStyle
TextStyleBuilder
Range.getRichTextValue()
Range.getRichTextValues()
Range.getTextStyle()
Range.getTextStyles()
Range.setRichTextValue(value)
Range.setRichTextValues(values)
Range.setTextStyle(style)
Range.setTextStyles(styles)
SpreadsheetApp.newRichTextValue()
SpreadsheetApp.newTextStyle()
The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors:
GetAuthTypeResponse
AuthType
CommunityConnector,newAuthTypeResponse()
January 04, 2019
Feature
The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion:
SlideLinkingMode
[ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext)
Layout.insertTextBox(text, left, top, width, height)
Master.insertTextBox(text)
Master.insertTextBox(text, left, top, width, height)
Page.insertTextBox(text)
Page.insertTextBox(text, left, top, width, height)
Presentation.appendSlide(slide, linkingMode)
Presentation.insertSlide(insertionIndex, slide, linkingMode)
Slide.getSlideLinkingMode()
Slide.getSourcePresentationId()
Slide.getSourceSlideObjectId()
Slide.insertTextBox(text)
Slide.insertTextBox(text, left, top, width, height)
Slide.refreshSlide()
Slide.unlink()
The Data Studio service has been extended with the following new classes and methods that error displays:
DebugError
UserError
CommunityConnector.newDebugError()
CommunityConnector.newUserError()
December 13, 2018
Deprecated
The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
Feature
The Slides service has been extended with the following new classes and methods that support connector lines:
ConnnectionSite
Group.getConnectionSites()
Image.getConnectionSites()
Line.getConnectionSites()
Line.getEndConnection()
Line.getLineCategory()
Line.getStartConnection()
Line.isConnector()
Line.setEndConnection(connectionSite)
Line.setLineCategory(lineCategory)
Line.setStartConnection(connectionSite)
LineCategory.UNSUPPORTED
PageElement.getConnectionSites()
Shape.getConnectionSites()
SheetsChart.getConnectionSites()
Table.getConnectionSites()
Video.getConnectionSites()
WordArt.getConnectionSites()
November 14, 2018
Feature
The Card service has been extended with the following new classes and methods that let you to customize the background of text button widgets:
TextButtonStyle
TextButton.setBackgroundColor(backgroundColor)
TextButton.setDisabled(disabled)
TextButton.setTextButtonStyle(textButtonStyle)
The Slides service has been extended with the following new methods that let you control the Z-positioning of page elements in Slides. Other new methods let you add alt titles and alt descriptions to page elements. The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes:
bringForward()
bringToFront()
sendBackward()
sendToBack()
setDescription(description)
setTitle(title)
The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets:
DeveloperMetadata
DeveloperMetadataFinder
DeveloperMetadataLocation
DeveloperMetadataLocationType
DeveloperMetadataVisibility
Range.addDeveloperMetadata(key)
Range.addDeveloperMetadata(key, visibility)
Range.addDeveloperMetadata(key, value)
Range.addDeveloperMetadata(key, value, visibility)
Range.createDeveloperMetadataFinder()
Range.getDeveloperMetadata()
Sheet.addDeveloperMetadata(key)
Sheet.addDeveloperMetadata(key, visibility)
Sheet.addDeveloperMetadata(key, value)
Sheet.addDeveloperMetadata(key, value, visibility)
Sheet.createDeveloperMetadataFinder()
Sheet.getDeveloperMetadata()
Spreadsheet.addDeveloperMetadata(key)
Spreadsheet.addDeveloperMetadata(key, visibility)
Spreadsheet.addDeveloperMetadata(key, value)
Spreadsheet.addDeveloperMetadata(key, value, visibility)
Spreadsheet.createDeveloperMetadataFinder()
Spreadsheet.getDeveloperMetadata()
October 30, 2018
Feature
The Spreadsheet service has been extended with the following new classes and methods:
OverGridImage
Sheet.getImages()
Sheet.isColumnHiddenByUser(columnPosition)
Sheet.isRowHiddenByFilter(rowPosition)
Sheet.isRowHiddenByUser(rowPosition)
Spreadsheet.getImages()
Spreadsheet.isColumnHiddenByUser(columnPosition)
Spreadsheet.isRowHiddenByFilter(rowPosition)
Spreadsheet.isRowHiddenByUser(rowPosition)
The following methods have been added to existing services:
console service
console.error()
console.info()
console.warn()
DataStudio service
Field.isHidden()
Field.setIsHidden()
Gmail service
GmailAttachment.getHash()
GmailMessage.getAttachments(options)
Change
The following methods in the Spreadsheet service now return an OverGridImage object instead of void:
Sheet.insertImage(blobSource, column, row)
Sheet.insertImage(blobSource, column, row, offsetX, offsetY)
Sheet.insertImage(url, column, row)
Sheet.insertImage(url, column, row, offsetX, offsetY)
October 18, 2018
Feature
The Card service has been extended with the following classes and methods to support Gmail add-on compose actions :
CardService.UpdateDraftActionResponse
CardService.UpdateDraftActionResponseBuilder
CardService.UpdateDraftBodyAction
CardService.ContentType
CardService.UpdateDraftBodyType
CardService.newUpdateDraftActionResponseBuilder()
CardService.newUpdateDraftBodyAction()
September 27, 2018
Announcement
The Data Studio service is now available. You can use this service when building a Data Studio Community Connector .
August 20, 2018
Feature
The Utilities service has been extended with the following methods and classes:
Utilities.computeRsaSha1Signature(value, key)
Utilities.computeRsaSha1Signature(value, key, charset)
Utilities.computeRsaSignature(algorithm, value, key)
Utilities.computeRsaSignature(algorithm, value, key, charset)
RsaAlgorithm
June 19, 2018
Deprecated
The quota on total data received by UrlFetch per day per user has been removed.
Feature
The Forms service now has the following method:
Form.deleteResponse(responseId)`
The Utilities service now has the following methods:
Utilities.computeDigest(algorithm, value) , where value is a Byte array
Utilities.computeHmacSha256Signature(value, key) , where value and key are Byte arrays
Utilities.computeHmacSignature(algorithm, value, key) , where value and key are Byte arrays
Change
The quota limits for UrlFetch GET response size and POST size have been increased to 50MB / call.
April 23, 2018
Feature
The Spreadsheet service has been extended with the new Group class and the GroupControlTogglePosition enum. Groups are an association between an interval of contiguous rows or columns that can be expanded or collapsed as a unit.
The Spreadsheet service has been extended with the following new methods to support Groups:
Range.collapseGroups()
Range.expandGroups()
Range.shiftColumnGroupDepth(delta)
Range.shiftRowGroupDepth(delta)
Sheet.collapseAllColumnGroups()
Sheet.collapseAllRowGroups()
Sheet.expandAllColumnGroups()
Sheet.expandAllRowGroups()
Sheet.expandColumnGroupsUpToDepth(groupDepth)
Sheet.expandRowGroupsUpToDepth(groupDepth)
Sheet.getColumnGroup(columnIndex, groupDepth)
Sheet.getColumnGroupControlPosition()
Sheet.getColumnGroupDepth(columnIndex)
Sheet.getRowGroup(rowIndex, groupDepth)
Sheet.getRowGroupControlPosition()
Sheet.getRowGroupDepth(rowIndex)
Sheet.setColumnGroupControlPosition(position)
Sheet.setRowGroupControlPosition(position)
April 11, 2018
Announcement
Macros for Google Sheets are now becoming available for users, and will finish rolling out over then next few weeks. This feature lets you record macros in the Google Sheets UI and use Apps Script to create or edit them.
Feature
The Sheets service has been extended with a large number of new classes and methods. The addition of these methods make it possible to reproduce in code nearly any action a Sheets user can take at a keyboard. The new classes and methods include:
BandingTheme
Banding
BooleanCondition
BooleanCriteria
ConditionalFormatRuleBuilder
ConditionalFormatRule
Dimension
Direction
FilterCriteriaBuilder
FilterCriteria
Filter
GradientCondition
InterpolationType
PivotFilter
PivotGroup
PivotTableSummarizeFunction
PivotTable
PivotTableDisplayType
PivotValue
RangeList
RelativeDate
Selection
TextDirection
TextRotation
TextToColumnsDelimiter
WrapStrategy
EmbeddedChartBuilder.setHiddenDimensionStrategy(strategy) (also in each of the type-specific chart builder classes)
EmbeddedChartBuilder.setNumHeaders(headers) (also in each of the type-specific chart builder classes)
EmbeddedChartBuilder.setMergeStrategy(mergeStrategy) (also in each of the type-specific chart builder classes)
EmbeddedChartBuilder.setTransposeRowsAndColumns(transpose) (also in each of the type-specific chart builder classes)
Range.activateAsCurrentCell()
Range.applyColumnBanding()
Range.applyColumnBanding(bandingTheme)
Range.applyColumnBanding(bandingTheme, showHeader, showFooter)
Range.applyRowBanding()
Range.applyRowBanding(bandingTheme)
Range.applyRowBanding(bandingTheme, showHeader, showFooter)
Range.createFilter()
Range.createPivotTable(sourceData)
Range.deleteCells(shiftDimension)
Range.getBandings()
Range.getNextDataCell(direction)
Range.getTextDirection()
Range.getTextDirections()
Range.getTextRotation()
Range.getTextRotations()
Range.getWrapStrategies()
Range.getWrapStrategy()
Range.insertCells(shiftDimension)
Range.setShowHyperlink(showHyperlink)
Range.setTextDirection(direction)
Range.setTextDirections(directions)
Range.setTextRotation(degrees)
Range.setTextRotation(rotation)
Range.setTextRotations(rotations)
Range.setVerticalText(isVertical)
Range.setWrapStrategies(strategies)
Range.setWrapStrategy(strategy)
Range.setTextToColumns()
Range.setTextToColumns(delimiter)
Range.setTextToColumns(delimiter)
Sheet.autoResizeColumns(startColumns, numColumns)
Sheet.autoResizeRows(startRows, numRows)
Sheet.clearConditionalFormatRules()
Sheet.getActiveRangeList()
Sheet.getBandings()
Sheet.getConditionalFormatRules()
Sheet.getCurrentCell()
Sheet.getFilter()
Sheet.getPivotTables()
Sheet.getRangeList(a1Notations)
Sheet.getSelection()
Sheet.hasHiddenGridlines()
Sheet.isRightToLeft()
Sheet.setActiveRangeList(rangeList)
Sheet.setColumnWidths(startColumn numColumns, width)
Sheet.setConditionalFormatRules(rules)
Sheet.setCurrentCell(cell)
Sheet.setHiddenGridlines(hideGridlines)
Sheet.setRightToLeft(rightToLeft)
Sheet.setRowHeights(startRow, numRows, height)
Spreadsheet.getActiveRangeList()
Spreadsheet.getBandings()
Spreadsheet.getCurrentCell()
Spreadsheet.getRangeList(a1Notations)
Spreadsheet.getSelection()
Spreadsheet.setActiveRangeList(rangeList)
Spreadsheet.setCurrentCell(cell)
Feature
The Charts service has been extended to support EmbeddedCharts in Google Sheets with the enums ChartHiddenDimensionStrategy and ChartMergeStrategy . In addition, the following ChartTypes have been added:
TIMELINE
BUBBLE
CANDLESTICK
GAUGE
GEO
RADAR
ORG
SPARKLINE
STEPPED_AREA
TREEMAP
WATERFALL
March 26, 2018
Feature
The Spreadsheet service has been extended with the following new methods:
SpreadsheetApp.setActiveSheet(sheet, restoreSelection)
Spreadsheet.setActiveSheet(sheet, restoreSelection)
Deprecated
The deprecated enable(restriction) method of the ScriptApp.Service class has been sunset.
The deprecated Service.Restriction enum used with the ScriptApp.Service class has been sunset.
February 26, 2018
Feature
Calendar event triggers are now available. You can use these triggers in conjunction with the Calendar advanced service to discover recently changed calendar events via regular sync operations.
February 13, 2018
Feature
The Slides service has been extended with the following new methods:
Layout.insertGroup(group)
Layout.insertImage(image)
Layout.insertLine(line)
Layout.insertPageElement(pageElement)
Layout.insertShape(shape)
Layout.insertSheetsChart(sheetsChart)
Layout.insertTable(table)
Layout.insertVideo(video)
Layout.insertWordArt(wordArt)
Master.insertGroup(group)
Master.insertImage(image)
Master.insertLine(line)
Master.insertPageElement(pageElement)
Master.insertShape(shape)
Master.insertSheetsChart(sheetsChart)
Master.insertTable(table)
Master.insertVideo(video)
Master.insertWordArt(wordArt)
Page.insertGroup(group)
Page.insertImage(image)
Page.insertLine(line)
Page.insertPageElement(pageElement)
Page.insertShape(shape)
Page.insertSheetsChart(sheetsChart)
Page.insertTable(table)
Page.insertVideo(video)
Page.insertWordArt(wordArt)
Presentation.appendSlide(slide)
Presentation.insertSlide(insertionIndex, slide)
Slide.insertGroup(group)
Slide.insertImage(image)
Slide.insertLine(line)
Slide.insertPageElement(pageElement)
Slide.insertShape(shape)
Slide.insertSheetsChart(sheetsChart)
Slide.insertTable(table)
Slide.insertVideo(video)
Slide.insertWordArt(wordArt)
TextRange.appendRange(textRange)
TextRange.appendRange(textRange, matchSourceFormatting)
TextRange.insertRange(startOffset, textRange)
TextRange.insertRange(startOffset, textRange, matchSourceFormatting)
The Spreadsheet service has been extended with the following new enum class and method:
CopyPasteType , an enum class describing paste types.
Range.copyTo(destination, copyPasteType, transposed)
January 19, 2018
Feature
The UrlFetch service now has a fetchAll method that makes multiple fetch requests.
The Utilities service now has methods to compress and decompress Blob objects using gzip .
January 11, 2018
Announcement
The Apps Script dashboard is now available. You can use it to see, search, and monitor all your script projects.
The Apps Script API is now available. This API includes and extends the original Apps Script API. You can use the Apps Script API in an application to do any of the following:
Create, read, and update Apps Script projects .
Create and manage project versions .
Create and manage project deployments .
Monitor script use and metrics .
Run script functions remotely .
The open-source clasp tool is now available. It lets you manage and develop Apps Script projects locally from the command line instead of the Apps Script editor.
October 24, 2017
Feature
The Gmail add-ons framework is now available to all developers.
A new Card service supports Gmail add-ons by defining several UI widget elements that you can use to create a Gmail add-on interface without HTML or CSS. These widgets function on both desktop and mobile. You can only use the Card service in a Gmail add-on project.
You can now view and explicitly edit Apps Script project manifests . These files give you more direct control of project properties.
You can now directly control the OAuth scopes that your project requests during authorization. Use this control to prevent your script project from asking for more access than it needs.
You can now deploy a script project directly from the project manifest.
We've updated the Publish script editor menu item to more accurately represent the various kinds of deployments a project can have, such as add-on, web app, or API executable deployments.
October 10, 2017
Feature
The Calendar service has been extended with the following new methods:
CalendarApp.createAllDayEvent(title, startDate, endDate)
CalendarApp.createAllDayEvent(title, startDate, endDate, options)
CalendarApp.getEventById(iCalId)
Calendar.createAllDayEvent(title, startDate, endDate)
Calendar.createAllDayEvent(title, startDate, endDate, options)
Calendar.getEventById(iCalId)
CalendarEvent.setAllDayDates(startDate, endDate)
The Groups service has been extended with the following new methods:
Group.getGroups()
Group.hasGroup(group)
Group.hasGroup(email)
The Spreadsheet service has been extended with the following new methods and classes:
AutoFillSeries enumeration
Range.autoFill(destination, series)
Range.autoFillToNeighbor(series)
Sheet.moveColumns(columnSpec, destinationIndex)
Sheet.moveRows(rowSpec, destinationIndex)
October 06, 2017
Change
Add-ons now require OAuth Client Verification prior to beginning the publication process. Verification no longer is conducted during the add-on review.
September 26, 2017
Feature
Added Apps Script support for the Google Slides service . You can now use Apps Script to create and edit presentations and their contents; you can also build add-ons for Google Slides .
September 15, 2017
Feature
Added GmailDraft to the Gmail service. You can now create, edit, delete, and send new draft messages or draft replies to existing messages and threads. Drafts can reply to the original sender or "reply all".
You can now determine if a message or thread is in your priority inbox using GmailMessage.isInPriorityInbox() or GmailThread.isInPriorityInbox() .
July 28, 2017
Feature
Added a Spreadsheet.getFormUrl() method that returns the URLs of Forms send responses to this Sheet or Spreadsheet.
Adds a Checkbox Grid item to the Forms service.
Enabled the collection of exception and error reports using Stackdriver Error Reporting .
July 18, 2017
Change
To protect users from abuse, Google OAuth clients that request certain sensitive OAuth scopes are subject to review by Google . Such apps may present users with a warning screen saying the app is unverified by Google. You can remove this screen from your app's authorization flow by submitting a review request .
June 23, 2017
Announcement
Stackdriver Logging has been moved out of Early Access . All scripts now have access to Stackdriver logging.
June 20, 2017
Feature
Added the method Range.randomize() that randomizes the order of rows in a spreadsheet Range.
April 26, 2017
Feature
Quizzes in Google Forms is now accessible from the Apps Script Forms service .
Added support for Combo and Histogram charts . Like other charts, these can be embedded in a Google Sheet.
Added ability to getColor() and setColor() for Calendar Events. Events have their own color set: EventColor .
March 09, 2017
Feature
Introduced project collaboration using Shared drives . Files and scripts in a shared drive are owned by the group instead of individuals, allowing collaborators to develop and maintain scripts more readily.
Script editors (in addition to script owners) can now publish add-ons and deploy scripts as web apps or executables for the Execution API .
For all container-bound scripts , the container owner takes ownership of a new script project regardless of who created it.
March 07, 2017
Announcement
Enabled the Slides Advanced Service .
Enabled the Sheets Advanced Service .
December 01, 2016
Announcement
Introduced the Early Access program for new G Suite Business features. These features include App Maker and Stackdriver Logging .
November 23, 2016
Feature
Added forms validation classes for check boxes , generic data , grid items , paragraph text items , and text items .
October 19, 2016
Feature
Added X-Frame-Option header support to HtmlService , allowing iframes to render Apps Script HTML and web apps.
July 28, 2016
Feature
Added support for Android add-ons . Now you can make Google Docs and Sheets add-ons that work on Android.
July 12, 2016
Deprecated
The use of project keys to identify scripts is now deprecated. The preferred unique identifier for a script is the Script ID . There are no plans to turn off or disable the use of project keys; code that uses project keys will continue to work for the foreseeable future.
July 06, 2016
Deprecated
NATIVE sandbox mode is now shut down. All scripts default to IFRAME mode, regardless of which mode, if any, is specified. Scripts that relied on NATIVE mode features may need to be migrated .
April 11, 2016
Feature
Support for PATCH requests has been added to UrlFetchApp .
March 25, 2016
Deprecated
Deprecated the add(widget) method in the DashboardPanel class because it takes a UiApp.Widget argument, and UiApp was deprecated in 2014.
February 29, 2016
Feature
The Spreadsheet API adds new methods for getTabColor() and setTabColor(color) .
The Spreadsheet API adds a new NamedRange type and the following related methods:
NamedRange.getName() gets the name of the named range
NamedRange.setName(name) sets the name of the named range
NamedRange.getRange() gets the underlying range associated with the named range
NamedRange.setRange(range) sets the underlying range associated with the named range
NamedRange.remove() deletes the named range
Spreadsheet.getNamedRanges() gets an array of all the named ranges in the spreadsheet
Sheet.getNamedRanges() gets an array of all the named ranges in the sheet
Protection.setNamedRange(range) associates an existing protected range with an existing named range
The Utilities API includes a new getUuid() method that generates a unique identifier.
December 10, 2015
Deprecated
In the HTML service , EMULATED sandbox mode was sunset . Any scripts that explicitly request EMULATED mode now default to IFRAME mode.
November 12, 2015
Change
In the HTML service , all new scripts default to IFRAME sandbox mode unless NATIVE mode is explicitly specified.
August 10, 2015
Deprecated
Deprecated the method Service.enable() in the ScriptApp global object. This method is no longer useful because Apps Script's authorization model has changed since the time the method was introduced.
August 04, 2015
Feature
Added the following methods to the Spreadsheet service to let scripts control "warning-based" protection for spreadsheet ranges (which means that every user can edit data in the area, except editing prompts the user to confirm the edit):
Protection.isWarningOnly()
Protection.setWarningOnly(warningOnly)
June 30, 2015
Feature
Added two variations of the method computeRsaSha256Signature to the Utilities global object to let scripts sign a string using the RSA SHA-256 algorithm.
May 27, 2015
Change
Added the method getUserAgent() to the HtmlService global object to let scripts get the user-agent string for the current browser.
May 20, 2015
Deprecated
Deprecated the following OAuth class and methods in favor of OAuth libraries :
+ OAuthConfig
+ UrlFetchApp.addOAuthService(serviceName)
+ UrlFetchApp.removeOAuthService(serviceName)
Feature
Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys:
InstallationSource
ScriptApp.getInstallationSource()
ScriptApp.getProjectKey()
Added several new web-safe base-64 encoding and decoding methods:
Utilities.base64DecodeWebSafe(String)
Utilities.base64DecodeWebSafe(String, Charset)
Utilities.base64EncodeWebSafe(Byte)
Utilities.base64EncodeWebSafe(String)
Utilities.base64EncodeWebSafe(String, Charset)
April 23, 2015
Announcement
Add-ons are now out of developer preview. This means anyone can now publish an add-on. New add-ons will still be reviewed prior to publishing, but the publishing process has been streamlined.
Add-ons can now be developed and published from standalone scripts (as opposed to scripts bound to a Sheet, Doc, or Form). The add-on must still operate on a Sheet, Doc, or Form, but the script does not need to be bound to a single master file. Developing from a standalone script is preferred in that it makes collaboration and testing easier.
Add-on scripts in development can be tested to ensure they behave as intended.
Deprecated
The DocsList service , which was deprecated in 2014 , has been sunset and no longer functions. Users relying on DocsList should switch to DriveApp .
March 19, 2015
Feature
Added the ability to publish add-ons for domain-wide installation . This lets an admin of a Google Apps domain install and authorize a Docs, Sheets, or Forms add-on for all users in the domain if the add-on is published to the Google Apps Marketplace . If the developer has already published a Google Apps Marketplace app that is closely related to their add-on, they can also choose to bundle the add-on with the Marketplace app so that admins install both the app and the add-on together.
Added the ability to change the Google Developers Console project that a script uses for authorization. This feature is most commonly used to bundle an add-on with a Google Apps Marketplace app, as above.
March 04, 2015
Deprecated
Deprecated the URL Fetch service's class OAuthConfig , which provided the ability to connect to OAuth 1.0 APIs. This has been replaced by the open source library OAuth1 for Apps Script . See the migration guide for more information.
February 10, 2015
Deprecated
Deprecated the following class and methods, which have been replaced by the more powerful Protection class above. Although this class and these methods are deprecated, they will remain available for compatibility with the older version of Sheets.
PageProtection
Spreadsheet.getSheetProtection()
Spreadsheet.setSheetProtection(permissions)
Sheet.getSheetProtection()
Sheet.setSheetProtection(permissions)
Replaced the method SpreadsheetApp.open(file) , which takes a File object from the deprecated DocsList service as a parameter, with a version that takes a File object from the Drive service instead. The new method has the same name.
Changed the Document service methods Text.getFontFamily() and Text.setFontFamily(fontFamilyName) to use string names for font families instead of the FontFamily enum , and consequently deprecated FontFamily .
Feature
Added the following class, enum, and methods to the Spreadsheet service, to give precise control over protected sheets and ranges:
Protection
ProtectionType
Range.canEdit()
Range.isEndColumnBounded()
Range.isEndRowBounded()
Range.isStartColumnBounded()
Range.isStartRowBounded()
Range.protect()
Sheet.getProtections(type)
Sheet.protect()
Spreadsheet.getProtections(type)
Fixed
Issue 4617 : HTML service pages that use the new IFRAME sandbox mode now render correctly in Firefox.
Change
Changed several Spreadsheet methods that previously returned void so that they now return a Spreadsheet object that can be used to chain method calls.
December 11, 2014
Deprecated
Deprecated both the UI service and the DocsList service . As announced in the blog post , the DocsList service will be turned off on April 20, 2015, and the UI service will be turned off on June 30, 2015. To create user interfaces, use the HTML service instead. To replace the DocsList service, use the Drive service instead.
Removed the Domain service , as announced earlier in the year .
Feature
Added a new IFRAME sandbox mode for HTML service that imposes many fewer restrictions than the other sandbox modes and runs much faster. However, IFRAME mode does not work at all in certain older browsers, including Internet Explorer 9.
December 01, 2014
Feature
Added five new FormApp methods:
Form.getShuffleQuestions() : Determines whether the order of the questions on each page of the form is randomized.
Form.hasLimitOneResponsePerUser() : Determines whether the form allows only one response per respondent. If the value is true, the script cannot submit form responses at all.
Form.setLimitOneResponsePerUser(enabled) : Sets whether the form allows only one response per respondent. The default for new forms is false. If the value is set to true, the script cannot submit form responses at all.
Form.setShuffleQuestions(shuffle) : Sets whether the order of the questions on each page of the form is randomized.
Form.shortenFormUrl(url) : Converts a long URL for a form to a short URL.
Added two new SpreadsheetApp methods:
Sheet.insertImage(blob, column, row) : Inserts a Blob as an image in the sheet at a given row and column.
Sheet.insertImage(blob, column, row, offsetX, offsetY) : Inserts a Blob as an image in the sheet at a given row and column, with a pixel offset.
October 23, 2014
Announcement
Add-ons are now available in Google Forms . As with add-ons for Docs and Sheets, Forms add-ons are in developer preview, so you must apply to publish them .
Deprecated
Removed the Finance service , as announced earlier in the year .
Fixed
Issue 3928 : The Document method setSelection , the Sheet method activate , and the Spreadsheet methods setActiveRange and setActiveSelection now work correctly if they are called from an onOpen or onEdit trigger.
October 14, 2014
Feature
Add-ons for Google Sheets and Docs can now use time-driven installable triggers .
September 30, 2014
Feature
Added the LinearOptimizationService , which allows scripts to model and solve linear and mixed-integer linear programs.
Add-ons for Google Sheets and Docs can now use most installable triggers , although they still cannot use time-driven triggers (sometimes called clock triggers).
Added an installable open trigger for Google Docs. Like the installable open triggers for Sheets and Forms, this trigger is similar to the simple onOpen() trigger, but allows the triggered function to call services that require authorization, if the user has authorized the script ahead of time.
Added several new ScriptApp methods, classes, and enums to support installable triggers in add-ons:
AuthorizationInfo : An object used to determine whether the user needs to authorize this script to use one or more services, and to provide the URL for an authorization dialog. Returned by ScriptApp.getAuthorizationInfo() .
AuthorizationStatus : An enumeration denoting the authorization status of a script. Returned by AuthorizationInfo.getAuthorizationStatus() .
DocumentTriggerBuilder : A builder for document triggers. Returned by TriggerBuilder.forDocument(...) .
ScriptApp.getUserTriggers(...) : Gets all installable triggers owned by this user in the given document, spreadsheet, or form.
Change
The UiService widget DocsListDialog now requires that you call DocsListDialog.setOAuthToken(oAuthToken) before calling DocsListDialog.showDocsPicker() .
September 04, 2014
Deprecated
Replaced the CacheService methods getPrivateCache() and getPublicCache() and the LockService methods getPrivateLock() and getPublicLock() with getUserCache() , getScriptCache() , getUserLock() , and getScriptLock() , respectively. The old method names have been deprecated, but will continue to function. The new names follow the same conventions as PropertiesService .
Feature
Added the UiService method DocsListDialog.setOAuthToken(oAuthToken) , which sets an OAuth 2.0 token to use when fetching data for the dialog, on behalf of the user whose content should be shown. This method will become mandatory before calling DocsListDialog.showDocsPicker() on September 30, 2014.
Added the CacheService method getDocumentCache() and the LockService method getDocumentLock() , which get a cache and a lock that all users can access within the current document, if the script is published as an add-on. These methods are conceptually similar to the PropertiesService method getDocumentProperties() , which was introduced for use in add-ons earlier this year.
July 17, 2014
Feature
Added the value ON_CHANGE to the ScriptApp.EventType enum so that Google Sheets change events can be detected correctly.
June 20, 2014
Deprecated
Deprecated the script gallery in the old version of Google Sheets. As explained in the blog post , the add-on store in the new version of Sheets gives developers wider distribution, automatic updates, and several other features not available in the script gallery.
May 29, 2014
Change
Added the Document service methods getTextAlignment and setTextAlignment as well as the enum TextAlignment , to support NORMAL , SUPERSCRIPT , and SUBSCRIPT text alignment in Google Docs.
May 15, 2014
Deprecated
Deprecated both ScriptDB and the Domain service . As announced in the blog post, the services will remain available for the next six months but will be turned off on November 20, 2014. To replace ScriptDB , see the migration guide and the improved guide to connecting to external databases through JDBC . To replace the Domain service , see the Admin SDK Directory and Admin SDK Reports advanced services.
Feature
Added a source property to the event parameter for form triggers . This makes it possible to retrieve the form that triggered the event.
Issue
Issue 3956 : In the new version of Google Sheets, it is now possible to call methods that refer to the "active" sheet or spreadsheet even if the sheet or spreadsheet has just been created.
Issue 3579 : The Blob method getA s can now create PDFs from spreadsheets created with the new version of Sheets.
Issue 3378 : The documentation page for a library version now uses the same CSS styles as the Apps Script reference documentation.
May 08, 2014
Change
The "Report an issue" dialog for add-ons now asks users whether they would like to share their name and email address with the developer.
May 01, 2014
Fixed
Issue 3963 : The Apps Script dashboard is available again.
Issue 3533 : The Trigger methods getEventType() and getTriggerSource() no longer throw an exception if the trigger belongs to a spreadsheet created by the new version of Google Sheets .
April 24, 2014
Change
In the new version of Google Sheets , the Undo command can now revert changes made by a script. This was already true in Docs, Forms, and the older version of Sheets.
Fixed
Issue 3891 : In the new version of Sheets, custom functions now recalculate correctly if more than 100 cells are passed as an argument.
Issue 3859 : In the new version of Sheets, setting data-validation criteria for a cell that already contains a value no longer corrupts the spreadsheet.
Issue 3773 : In the new version of Sheets, the Browser methods inputBox and msgBox now treat newline characters ( \n ) the same way that the older version of Sheets did. Specifically, \n produces a space, but \\n (double-escaped) produces a line break.
Issue 2335 : The fact that the ID of a GmailThread varies based on the messages it contains is now documented .
Issue 2288 : The fact that a Google Site or page of a site cannot have more than 500 child pages is now documented .
Issue 1427 : The fact that the method getAs replaces the part of a filename that follows the last period with the new file type's extension is now documented .
April 17, 2014
Change
The Document method setSelection , the Sheet method activate , and the Spreadsheet methods setActiveRange and setActiveSelection no longer have any effect if they are called from an onOpen or onEdit trigger .
Issue
Issue 3669 : In the new version of Sheets , the Range methods getValue() and getValues() no longer throw an exception if a cell uses the built-in Sheets methods =IMAGE(url) or =SPARKLINE(data) .
Issue 2684 : If a script relies on a deleted version of a library, it is now possible to switch to a different version.
April 10, 2014
Fixed
Issue 3788 : In the new version of Sheets, custom functions now calculate if they are passed an error value as an argument. This matches the behavior in the older version of Sheets.
Issue 3539 : In the new version of Sheets, the Range methods setValue and setValues now automatically detect when a value should be set as a formula. This matches the behavior in the older version of Sheets.
Deprecated
The deprecated SOAP service and old XML service have now been removed from autocomplete and documentation, as announced on July 9, 2013 and documented in the Apps Script sunset schedule . Existing scripts that use these services should still function. The UI service widgets DeckPanel , DecoratedPopupPanel , DockLayoutPanel , DockPanel , StackLayoutPanel , and TabLayoutPanel have been completely disabled, as announced on April 15, 2013.
April 03, 2014
Feature
The Range method getDataSourceUrl() is now supported in the new version of Google Sheets . For information on other incomplete Apps Script features in the new version of Sheets, see the list of known issues .
Change
Issue 3866 : The DocsList methods File.getEditors() and File.getViewers() no longer throw a server error on every call.
Issue 3865 : The DocsList method File.getOwner() no longer throws a server error on every call.
Issue 3845 : The advanced Google services for Drive and Calendar are now documented.
Issue 3624 : In the new version of Sheets, the Sheet method hideSheet() can now hide sheets that have just been inserted.
Issue 3554 : In the new version of Sheets, the Range method sort() now succeeds for ranges that do not include column A.
Issue 3522 : In the new version of Sheets, the SpreadsheetApp method getActiveSheet() now returns the correct sheet in a single custom function call. However, getActiveSheet() still returns an incorrect value if the custom function is used in more than one cell with the same function arguments, or if called from an installable edit trigger in the new version of Sheets.
Issue 3496 : In the new version of Sheets, the SpreadsheetApp method getActiveRange() now returns the correct range in a single custom function call. However, getActiveRange() still returns an incorrect value if the custom function is used in more than one cell with the same function arguments, or if called from an installable edit trigger in the new version of Sheets.
March 27, 2014
Fixed
Issue 3691 : In the new version of Google Sheets, scripts can now run for 6 minutes instead of 5 minutes.
Issue 3236 : Google Picker, a "file-open" dialog for information stored in Google servers, including files in Google Drive, is now supported in HTML service .
Change
When an add-on is installed from the store, the onInstall() simple trigger is now passed an event parameter , e , which includes an authMode property. This makes it easier for an add-on to call onOpen(e) from onInstall(e) .
March 24, 2014
Change
In the new version of Google Sheets , Range.setValues() now automatically extends the spreadsheet if the range is larger than the present size.
Fixed
Issue 3800 : In the new version of Sheets, custom functions now accept numbers larger than 10,000,000 or smaller than 0.0001 as arguments.
Issue 3770 : In the new version of Sheets, Sheet.insertImage() now inserts the image at the correct size.
Issue 3724 : In the new version of Sheets, Range.setValue() now correctly sets numeric values in non-English spreadsheets.
March 18, 2014
Fixed
Issue 3757 : The link to the Google Developers Console in the Advanced Google Services dialog now opens the correct project.
March 11, 2014
Announcement
Announced a developer preview for add-ons in Google Docs and the new version of Google Sheets, with support for Google Forms coming soon. An add-on is an Apps Script project published to a store inside Docs or Sheets, which makes it easy for users to find and install new features. Our guides cover everything you need to know to develop , design , and apply to publish your first add-on.
Feature
Released a CSS package to apply Google styling to fonts, buttons, and form elements in HTML service dialogs and sidebars, primarily for use in add-ons.
Added the UI method createAddonMenu() , which allows scripts to insert a sub-menu into the Add-ons menu in Google Sheets or Docs. For more information, see the guide to menus .
Added the ScriptApp enum AuthMode , which identifies categories of authorized services that Apps Script can execute through a triggered function. For more information, see the guide to the add-on authorization lifecycle .
Added support for the custom JsDoc annotation @OnlyCurrentDoc , which forces the authorization dialog to ask only for access to files in which an add-on or script is used, rather than all of a user's spreadsheets, documents, or forms. An opposing annotation, @NotOnlyCurrentDoc , is also available.
Change
Changed the quota for Gmail from 10,000 reads and 10,000 writes per day (excluding sent messages) to 20,000 reads and writes combined per day.
February 25, 2014
Change
Replaced ScriptProperties and UserProperties with a unified PropertiesService . For more information, see the guide to the Properties service .
In Google Docs and Forms, sidebars now ignore the setWidth() method; they cannot be changed from the default width of 300px. This change was applied to the new version of Sheets in the previous week's release.
In Google Docs and Forms, the Undo command can now revert changes made by a script. This is also true in the older version of Sheets, but not the new version.
In the HTML service, the NATIVE sandbox mode is now the default if you have not specified which mode your script should use. In a few edge cases, this may affect how existing web apps operate; if so, append .setSandboxMode(HtmlService.SandboxMode.EMULATED) to your HtmlOutput object to restore the old behavior.
Fixed
Issue 3622 : The title bar of a sidebar shown by a script in Google Docs, Forms, or the new version of Sheets is now the same height as in a sidebar shown by a built-in feature.
Deprecated
Deprecated the Finance service . As announced in the blog post , the service will remain available for the next six months but will be turned off on September 26, 2014.
Feature
Added the following DocumentApp classes and methods, which allow scripts to create bookmarks and named ranges, plus set the user's cursor position or selection.
Bookmark
`NamedRange
`RangeBuilder
`Document.addBookmark(position)
`Document.addNamedRange(name, range)
`Document.getBookmark(id)
`Document.getBookmarks()
`Document.getNamedRangeById(id)
`Document.getNamedRanges()
`Document.getNamedRanges(name)
`Document.newPosition(element, offset)
`Document.newRange()
`Document.setCursor(position)
`Document.setSelection(range)
`Position.insertBookmark()
Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
`StateTokenBuilder
`ScriptApp.getOAuthToken()
`ScriptApp.newStateToken()
Added the method showModalDialog(userInterface, title) to the Ui class, and replaced the method showDialog(userInterface) with showModelessDialog(userInterface, title) . This allows scripts to specify whether a dialog in Google Docs, Forms, or the new version of Sheets should prevent the user from interacting with anything other than the dialog.
Added the client-side HTML-service method google.script.host.editor.focus() , which allows scripts to switch browser focus from the dialog or sidebar to the Google Docs, Sheets, or Forms editor.
February 18, 2014
Fixed
Issue 3522 : In the new version of Sheets, the SpreadsheetApp method getActiveSheet() now returns the correct sheet if called from a simple onEdit() trigger. However, getActiveSheet() still returns an incorrect value if used in a custom function or an installable edit trigger in the new version of Sheets.
Issue 3496 : In the new version of Sheets, the SpreadsheetApp method getActiveRange() now returns the correct sheet if called from a simple onEdit() trigger. However, getActiveRange() still returns an incorrect value if used in a custom function or an installable edit trigger in the new version of Sheets.
Issue 3332 : The DocumentApp method setHeading() now applies heading styles in the same way that the Google Docs editor does.
Deprecated
Removed the Session method getActiveUserTimeZone() , which did not return a value for most users.
Change
In Google Docs, Forms, and the new version of Sheets , showing a dialog now automatically closes any other dialogs opened by a script. This matches the longstanding behavior in the older version of Sheets.
In the new version of Sheets, sidebars now ignore the setWidth() method; they cannot be changed from the default width of 300px. This change will affect Docs and Forms soon.
January 27, 2014
Deprecated
Renamed several classes and methods in DocumentApp . The old names are deprecated but will continue to work. You do not need to update your code.
SearchResult and SelectedElement are now RangeElement .
Selection is now Range .
Selection.getSelectedElements() is now Range.getRangeElements() .
Change
The quota for the number of email recipients for scripts running from consumer (gmail.com) or free Google Apps accounts has been reduced from 500 to 100 per day. The quota for paid Google Apps accounts has not been changed.
Feature
Added the following Session methods, which allow scripts to determine the user's locale and time zone:
getActiveUserLocale()
getActiveUserTimeZone()
January 21, 2014
Feature
The new SpreadsheetApp method Spreadsheet.getUi() allows scripts to access the spreadsheet's user-interface environment in order to add features like menus, dialogs, and sidebars. This method is consistent with the getUi() methods in DocumentApp and FormApp , but only works in the new version of Google Sheets. The older version of Google Sheets continues to use the existing methods documented in the guides to dialogs and sidebars and menus.
January 13, 2014
Deprecated
Deprecated the SpreadsheetApp.Spreadsheet methods isAnonymousView() , isAnonymousWrite() , isReadable() , isWritable() , and setAnonymousAccess() . Various methods of the File class in DriveApp can achieve the same functionality.
Change
Renamed the Cursor object in DocumentApp to Position . This does not require any changes to existing code.
Feature
Added the SpreadsheetApp method DataValidationBuilder.requireFormulaSatisfied(String) , as well as an accompanying CUSTOM_FORMULA value in DataValidationCriteria . This feature can only be used in the new version of Google Sheets.
January 06, 2014
Change
Custom menus in Google Docs now appear in the Help menu search box.
Custom dialogs created with the HTML service can now be resized by calling google.script.host.setWidth(width) and google.script.host.setHeight(height) in client-side code. Sidebars cannot be resized in client side code.
Feature
Added the advanced parameter escaping to UrlFetchApp.fetch() . If false , reserved characters in the URL will not be automatically escaped.
Feature
The Maps.DirectionFinder.Mode enum now includes the TRANSIT value allowing for the retrieval of public transit routes in the Maps service .
December 16, 2013
Fixed
Issue 3461 : A yellow warning bar should no longer appear on Apps Script gadgets that are embedded in Google Sites.
Change
Changed the default syntax for all existing advanced services to match the underlying APIs' reference documentation. The old Apps Script getter/setter notation for these services will continue to work but will no longer appear in autocomplete.
Renamed the menu entry Resources > Manage libraries to Resources > Libraries .
Renamed the menu entry Resources > Google APIs Services to Resources > Advanced Google services .
Feature
Added seven new advanced services :
+ Admin SDK Directory service
+ Admin SDK Reports service
+ Fusion Tables service
+ Google+ Domains service
+ Mirror service
+ YouTube service
+ YouTube Analytics service
December 02, 2013
Fixed
Issue 3101 : Removed the SitesApp method Site.deleteSite() , which was never functional.
Issue 3046 : UrlFetchApp now properly preserves RFC 3986 escaping.
Issue 2497 : An rare edge case issue when using UiApp server handler callbacks and libraries no longer occurs.
Issue 1346 : An issue in which a library's UiApp server handlers created new server handlers that were not able to reference non-library functions should no longer occur.
Feature
Added TITLE and SUBTITLE values to the DocumentApp.ParagraphHeading enum .
November 18, 2013
Deprecated
The Apps Script methods Utilities.jsonParse() and Utilities.jsonStringify() have been deprecated in favor of the now-standard JavaScript methods JSON.parse() and JSON.stringify() , which now appear in autocomplete.
November 11, 2013
Fixed
Issue 3189 : A rare issue in which LockService failed to acquire a lock should no longer occur.
November 04, 2013
Change
If a version of a library has been deleted by the library owner, scripts can no longer use that version.
Fixed
Issue 2817 : Sporadic errors about missing libraries should now occur less frequently.
October 21, 2013
Fixed
Issue 74 : Simple onEdit() triggers now fire correctly when the user is not signed in to a Google account.
October 08, 2013
Feature
Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos.
+ Form.hasProgressBar()
+ Form.setProgressBar(enabled)
+ Form.getCustomClosedFormMessage()
+ Form.setCustomClosedFormMessage(message)
+ Form.addVideoItem()
September 23, 2013
Feature
Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.
File.getOwner()
Folder.getOwner()
September 16, 2013
Feature
HTML Service now supports most CSS3 features. A notable exception is the :nth-child() pseudo-selector, which remains unsupported, along with a small number of obscure or non-standardized CSS3 features. To check whether the Caja security sandbox in HTML Service supports a specific feature, see the CSS whitelist definitions in Caja's public repository .
Added the following DriveApp methods, which allow scripts to save the state of a file or folder iterator and resume at a later time. These method are useful if processing an iterator in one execution would exceed the maximum execution time.
FileIterator.getContinuationToken()
FolderIterator.getContinuationToken()
DriveApp.continueFileIterator(continuationToken)
DriveApp.continueFolderIterator(continuationToken)
Deprecated
The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
September 09, 2013
Deprecated
Deprecated the DocumentApp methods getFootnotes() , getLinkUrl() , setLinkUrl(url) , and isAtDocumentEnd() in the classes FooterSection , FootnoteSection , and HeaderSection , as well as the methods getNextSibling() and getPreviousSibling() in the classes FooterSection and HeaderSection . These methods were not useful.
Fixed
Issue 2621: A situation in which certain scripts did not terminate despite exceeding the execution-time limit no longer occurs.
Feature
Added the DocumentApp methods InlineImage.getLinkUrl() and InlineImage.setLinkUrl(url) .
September 03, 2013
Feature
Added the DriveApp methods DriveApp.getFoldersByName(name) and DriveApp.searchFolders(params) , which return a FolderIterator with the requested results.
Added the DriveApp methods File.getViewers() , File.getEditors() , Folder.getViewers() , and Folder.getEditors() , which return an array of Users with view or edit access.
Deprecated
Removed the ability to get the user's email address in simple onEdit() triggers . Because simple triggers don't request user authentication, this change was important to protect the identity of collaborators who hadn't explicitly granted permission for the script to collect their email address.
August 19, 2013
Feature
Added the DriveApp methods File.makeCopy(destination) and File.makeCopy(name, destination) , which allow scripts to specify a folder to which a file should be copied.
Fixed
Issue 3097 : A performance issue that affected certain scripts no longer occurs.
August 13, 2013
Feature
Added the method Spreadsheet.deleteSheet(sheet) , which allows deletions of sheets that are not the active sheet.
August 05, 2013
Feature
Added the method GmailMessage.getPlainBody() , which returns the content of the message without HTML formatting.
Launched a new feature to allow programmatic control over data-validation rules in Google Sheets.
Fixed
Issue 2916 : HTML files inserted into a new Apps Script project using the Google Drive SDK are no longer created with the server_js filetype.
Issue 2880 : Special characters (such as apostrophes) no longer need to be escaped twice when passed to DriveApp.getFilesByName() .
Issue 2780 : DriveApp now throws a more appropriate error message if Google Drive apps are prohibited within the user's domain.
Deprecated
Deprecated the DocsList methods find(query, start, max) , getAllFiles(start, max) , getAllFolders(start, max) , getFiles(start, max) , getFilesByType(fileType, start, max) , and getFolders(start, max) . Instead of these methods, use DriveApp or one of the DocsList.get*ForPaging() methods.
July 29, 2013
Change
All new scripts now use the new authorization flow by default.
Fixed
Issue 2947 : Newlines are now supported in Ui.alert() and Ui.prompt() dialogs.
Feature
On ChromeOS devices, it is now possible to activate autocomplete (sometimes called "content assist") with the keyboard shortcut Ctrl + Space .
July 22, 2013
Feature
Added DriveApp and FormApp to the services tracked on the Apps Script Dashboard .
Fixed
Issue 2801 : Fixed an issue in which specific URL parameters did not work with HtmlService .
July 09, 2013
Deprecated
Deprecated the old Xml service, SoapService , and support for the JavaScript feature E4X.
Feature
Added XmlService to replace the old Xml service.
Fixed
Issue 2906 : Chained method calls in advanced Google services no longer throw an exception.
Issue 2872 : File.removeEditor() no longer throws an exception when the editor is a group instead of an individual user.
June 25, 2013
Fixed
Issue 2820 : getActiveSheet() now properly returns the active sheet when used with an onChange trigger.
Issue 2761 : When a Document element that contains an image is copied, the image is now also copied.
Change
Any script that is container-bound to a Google Doc can now access the active user's Cursor and Selection by calling Document.getCursor() and Document.getSelection() , respectively.
The Publish > Deploy as web app dialog now includes an option to save a version of the script, if a version has not previously been saved. Subsequent versions of the script must still be saved through the File > Manage versions dialog.
Scripts now always require authorization to use the methods Session.getEffectiveUser() or Session.getUser() . Existing scripts that use those methods and were upgraded to the new authorization experience require reauthorization but will not prompt for authorization automatically. To reauthorize the script, follow these instructions .
UrlFetch requests made by scripts that run on a time-based trigger now include an If-Modified-Since HTTP header so that Apps Script can use a cached copy of the page if one is available and the page has not changed.
June 17, 2013
Fixed
Issue 2626 : The execution transcript now correctly reports the execution time for methods that are called repeatedly.
Issue 2559 : A sporadic issue in which Spreadsheet.getSheetByName() returned null for a valid sheet name no longer occurs.
Issue 1965 : Emails forwarded using GmailMessage.forward() now preserve inline images.
Issue 1414 : Range.copyTo() now adds additional rows as necessary, if the destination sheet does not have enough rows to accommodate the range.
Feature
Issue 1034 : The new Drive Service methods addCommenter() and removeCommenter() allow scripts to add and remove commenters on files.
Issue 674 : Mail sent with GmailApp now appears in the Sent Mail folder in Gmail.
June 11, 2013
Fixed
Issue 2823 : Timestamps for the start and end of script execution, including total runtime, now appear in the execution transcript ( View > Execution transcript) instead of the log.
Issue 2807 : A rare issue where a script could not be upgraded to the new authorization flow no longer occurs.
Issue 2791 : Calling Trigger.getTriggerSource() for a Form-based trigger no longer throws an exception.
Issue 2734 : HtmlService scripts that call long-running server-side functions no longer repeat the function call multiple times.
June 03, 2013
Fixed
Issue 2819 : Folder.createFile(name, content, mimeType) now creates the file in the folder on which the method was executed.
Issue 2776 : Existing deployed web apps now properly authenticate after upgrading a script to use the new authorization experience.
Issue 2679 : The getAs() method of the File class no longer throws an error when converting .docx, .pptx, or .xlsx files to PDF.
Issue 2643 : The timestamps for a script's log messages are now in the script's timezone.
Issue 2597 : The script editor's Find functionality no longer skips the first result.
Change
To simplify the end user experience, function names are no longer shown in the notification message for scripts that run successfully from a spreadsheet, document, or form. Function names are still displayed when there is an error (to help with debugging) and when the script is run from the script editor.
To simplify the Document service, the following methods were removed from the Body class: getNextSibling() , getPreviousSibling() , isAtDocumentEnd() , getLinkUrl() , setLinkUrl() , and removeFromParent() .
May 13, 2013
Feature
The script editor is now available within Google Docs and the Google Forms editor, and both Docs and Forms can now be containers for scripts.
Added Forms Service , which allows scripts to create and modify Google Forms.
Added Drive Service , which allows scripts to create and modify files and folders in Google Drive. This is a newer version of the existing DocsList Service.
Added a getUi method to DocumentApp and FormApp , which returns a Ui object that allows the script to add features like menus, dialogs, and sidebars to the Docs or Forms editor.
Added the FormTriggerBuilder class to allow scripts to respond to Forms events.
Added a setSandboxMode method to enable a faster version of the HtmlService sandbox.
Added a MimeType enum , which provides access to MIME -type declarations without typing the strings explicitly.
Added an option to upgrade to a new authorization flow that requires fewer clicks and automatically creates a Google Developers Console project for every script.
May 09, 2013
Feature
Issue 2158 : The request object passed in to doPost() methods now contains the POST body. It can be accessed using e.postData.getDataAsString().
Fixed
Issue 2740 : UrlFetchApp.fetch() calls no longer fail if the advanced parameters specify a payload without specifying the request method.
May 02, 2013
Fixed
Issue 2585 : Xml.parse() once again correctly parses well-structured XML and HTML documents.
Feature
Issue 1363 : Added support for spreadsheet change events. The onChange() event now fires when certain modifications, such as row insertions, are done to a spreadsheet.
April 29, 2013
Fixed
Issue 2695 : Form submits in UI Service apps once again work properly.
Issue 2625 : The withUserObject() method in Html Service apps now works properly with Firefox 20.
Issue 1612 : Element.copy() can now copy InlineImage elements from one document to another.
Issue 170 : Spreadsheet.addCollaborators() now sends an email invitation to collaborators when the emailInvitations advanced parameter is set.
April 22, 2013
Fixed
Issue 2665 : UrlFetchApp.fetch() once again allows URLs that contain spaces.
Issue 2593 : Range.setValue() now behaves correctly in a function called from an onEdit spreadsheet trigger.
Issue 941 : The event parameter for a ListBox handler function now includes the value of the selected item rather than its name.
Issue 307 : The event parameter for a Tree handler function now includes the ID of the selected item.
Change
Large scripts in the Script Gallery now install more quickly.
Feature
Issue 1771 : Added a clear() method to the Tree and TreeItem classes. These methods remove all children from the object.
Issue 1743 : Added an autoResizeColumn() method to the Sheet class. This method resizes a column to fit its contents.
Issue 1314 : Added support for lazy loading in the Tree class, which reduces wait times in rendering the UI.
April 15, 2013
Change
The following changes were made to simplify the Document service :
Renamed the DocumentBodySection class to Body .
Renamed Document.getActiveSection() to getBody() .
Removed methods of the Body class from Document so they only appear in one location.
Removed merge() methods for various classes that cannot be merged, such as PageBreak and HorizontalRule .
Removed text-related methods such as isBold() and isUnderline() from container elements such as Table while retaining them on the Text class. This functionality can now be achieved by calling editAsText() on the container element, and calling the text-related methods on the returned Text class.
Removed methods which allowed appending or inserting HorizonalRule elements with specified attributes.
Fixed
Issue 2565 : DocsList.createFile() no longer allows the creation of files with invalid MIME types or Google document MIME types.
Deprecated
Deprecated UiApp widgets DeckPanel , DecoratedPopupPanel , DockLayoutPanel , DockPanel , StackLayoutPanel , and TabLayoutPanel , which had limited usability.
April 08, 2013
Fixed
Issue 2548 : Triggers created in web apps that allow for anonymous access no longer fail to fire.
Issue 2488 : Charts dashboard components no longer throw serialization errors in certain scenarios.
Change
Simplified the classes in the Document service , removing unnecessary .asSomething() methods.
Added timestamps to the log output.
April 01, 2013
Feature
Issue 995 : The new methods Sheet.hideSheet() , Sheet.isSheetHidden() , and Sheet.showSheet() allow scripts to control the visibility of individual sheets within a spreadsheet.
Fixed
Issue 2524 : Scripts that rely on deleted libraries now display a clear error message.
Issue 2169 : Installing scripts from the Script Gallery no longer results in occasional errors.
Issue 459 : The event parameter for spreadsheet onEdit() functions now reports the affected range correctly in a variety of situations in which the range property was previously incorrect.
March 25, 2013
Fixed
Issue 2534 : Debugging into a recursive function using certain GroupsManager methods no longer throws an error.
Issue 1106 : Restored the correct behavior of Range.mergeAcross() . This function, along with Range.merge() and the newly added Range.mergeVertically() , behave like the items under a spreadsheet's Format > Merge cells menu.
March 18, 2013
Change
Renamed the action "Publish to Gallery" to "Submit to Gallery", to avoid confusion with publishing a web app.
Deprecated
Deprecated the GUI Builder and the UIApp widgets Hyperlink , InlineHyperlink , LayoutPanel , RichTextArea , and SuggestBox , which had limited usability.
March 11, 2013
Fixed
Issue 1917 : It is no longer possible to install a script multiple times from the Script Gallery.
Change
View > Execution transcript now shows how much time it took to execute each statement.
If a script is shared with editors other than its owner and published as a web app, those other editors can now update the app's version and access its development URL (which ends in /dev ).
Feature
Added the method Utilities.formatString() , which allows printf-like substitution of placeholders within a format string.
Added the property DocsList.FileType.FORM to let DocsList access new Google Forms.
March 04, 2013
Fixed
Issue 1182 : Calendar.getEvents(startTime, endTime, statusFilters) now works properly.
Issue 459 : OnEdit callbacks triggered by pasting to a cell now provide the correct range parameter.
February 25, 2013
Change
When setting font colors in a spreadsheet using Range.setFontColor() or Range.setFontColors() , color names will now automatically be converted to their corresponding hexadecimal values. For example, after calling setFontColor('red') the method getFontColor() will return "#ff0000".
Fixed
Issue 2435 : Spreadsheet-bound scripts that use Browser.inputBox() no longer fail.
Issue 1128 : Font colors set using Range.setFontColor() or Range.setFontColors() now appear correctly when printing the spreadsheet or exporting it as a PDF.
Issue 529 : SpreadsheetApp.getActiveSheet() no longer fails to run in onOpen() triggers for certain spreadsheets.
February 14, 2013
Feature
Added the method DocumentApp.openByUrl() , which allows documents to be opened by their URL directly.
Fixed
Issue 2382 : File.makeCopy() no longer produces an error when copying a new Google Form.
Issue 2367 : The error message for invalid queries of ScriptDbInstance.between() is now more descriptive.
Issue 747 : Error messages now specify in which code file the error occurred.
February 11, 2013
Fixed
Issue 2388 : The quota dashboard once again displays the correct number of columns.
Issue 2344 : Scripts that contain onInstall() functions no longer produce an error when installed from the Script Gallery.
Issue 2250 : Dates are now logged in the script's time zone.
Issue 2021 : UiInstance.setStyleAttribute() now properly sets the backgroundImage property in all supported browsers.
Issue 1811 : The debugger can now step into libraries used in development mode.
Issue 1300 : If a script bound to one spreadsheet uses an installable onEdit() trigger to monitor a separate spreadsheet, the range event parameter passed to the callback function now correctly recognizes the monitored spreadsheet as its parent.
Issue 1226 : Client handlers for ListBox now fire properly in UiApp .
Issue 1030 : The setStyleAttribute() method of various UiApp objects now properly sets the 'float' attribute in Firefox.
Issue 1014 : setFocus() now works correctly.
Issue 231 : Added show() and hide() methods to PopupPanel .
Feature
Added the ability to directly attach StaticMap objects in emails.
January 31, 2013
Fixed
Issue 2317 : Email address validation in UiApp now works correctly with uppercase input.
Issue 2306 : The GUI Builder dialog shown for File > Open no longer has two "Cancel" buttons.
Issue 2265 : Static maps can now contain many more markers.
Issue 2203 : CalendarEvent.getGuestList() now returns the event creator in addition to the other guests.
Issue 2137 : A DateBox containing an empty or invalid date will now have a null value when processed in a server handler or doPost() callback. By default, setting an empty or invalid date will not trigger a value-changed event, but you can call the method setFireEventsForInvalid() to override that behavior.
Issue 1795 : TextArea widgets created using the GUI Builder now default to displaying scrollbars when the text is too long.
Issue 1764 : ClockTriggerBuilder.onWeekDay() now works correctly when used in conjunction with everyWeeks() .
Issue 1695 : GmailLabel.getThreads() now works correctly when the label name contains special characters.
Issue 1366 : The methods getEditors() and getViewers() of the File class now return the full email address for entries that are groups.
Issue 918 : Subsequent calls to Sheet.hideColumns() on different sheets no longer results in an error.
Issue 53 : Rows containing only data-validation rules no longer count towards Sheet.getLastRow().
Feature
Added the method SpreadsheetApp.openByUrl() , which allows spreadsheets to be opened by their URL directly.
Change
Changed the behavior of ClockTriggerBuilder so that it now respects the time zone of the script, instead of defaulting to Pacific Time.
The editor's Find dialog now supports searching over all files in the project.
Improved the error message returned by Range.setValues() when the values fail to pass the validation on those cells.
January 24, 2013
Feature
Issue 1642 : When connecting to an external database with Jdbc.getConnection , you can now include the advanced argument use JDBCCompliantTimezoneShift .
Issue 619 : UiInstance 's createAnchor method now allows links using the mailto scheme.
Issue 286 : UrlFetchApp 's fetch method now accepts followRedirects as an advanced argument.
Fixed
Issue 1012 : New calendar entries that span a time change (for example, the start of daylight saving time in that time zone) are now created with the correct duration.
Issue 912 : It is now possible to display non-public images in a UiApp or HtmlService user interface, so long as the images are shared with the app's users.
Issue 815 : UiInstance 's createToggleButton(upText, downText) method now functions correctly.
Issue 155 : Calendar.createAllDayEvent now always sets the event to the correct date.
January 17, 2013
Fixed
Issue 2155 : The Uninstall link emailed to a user after authorizing a script embedded within a Google Site now works correctly.
Issue 1882 : Icons in the Script Editor now display correctly on Macs with Retina displays.
Feature
Added the method after(durationMilliseconds) to class ClockTriggerBuilder to simplify the creation of one-off triggers.
January 15, 2013
Change
Issue 2204 : Utilities.formatDate no longer rejects certain time-zone formats, such as EST, CST, etc.
December 17, 2012
Fixed
Issue 2131 : The timezone offset for "Europe/Moscow" is now correct.
Issue 2124 : ScriptDb no longer throws an error when storing a float value.
Issue 2021 : Setting the background image of a UiApp panel now works correctly.
Issue 1856 : The Jdbc service now resolves host names correctly.
Issue 1312 : The error message shown when the rate limit for spreadsheet creation is exceeded is now more readable.
Issue 949 : Typing the character } on a Spanish keyboard now works correctly.
December 11, 2012
Feature
Added extra validation to the datasource URLs used in charts. Custom datasource URLs that rely on non-Google authentication will no longer work.
Fixed
Issue 2100 : ScriptProperties.setProperties() now respects the deleteAllOthers parameter.
Issue 2052 : UiApp' s setStyleAttribute() method no longer rejects certain style attributes.
Issue 2041 : The native Date methods toLocaleDateString() and toLocaleTimeString() now return the correct values.
Issue 1972 : Web apps published from a domain, but available to everyone, now use the normal Google login page instead of domain's login page.
Issue 1876 : The authorize link for scripts embedded in a Google Sites gadget now opens in a new tab/window.
Issue 1870 : CalendarEvent.getVisibility() now returns the correct value.
Issue 1528 : Using ContactsApp to modify multiple fields of a contact in quick succession no longer causes an etags mismatch error.
Issue 1502 : Logs are now saved correctly for scripts that run as a web app, from a spreadsheet menu, or due to a trigger.
Issue 1275 : Deleting a script now deletes any associated triggers.
November 28, 2012
Fixed
Fixed an issue where onFormSubmit trigger's callback range was incorrect if the submit triggered a formula recalculation.
Fixed an issue where XmlDocument properties and functions did not autocomplete when generating an XmlDocument with the Soap service.
Change
Added an enhancement to GmailApp to allow retrieval of bcc addresses via GmailMessage.getBcc() .
Tree widgets now allow specifying open handlers as well as close handlers.
November 21, 2012
Fixed
Fixed an issue where public locks are not correctly released.
Fixed an issue to allow multiple comma-delimited replyTo addresses in MailApp.sendEmail() .
Fixed an issue with auto-complete for library functions not working when that library contained HTML files.
November 13, 2012
Feature
Added the ability to disable SSL certificate validation in the SoapService , in response to a feature request.
Fixed
Fixed an issue where MailApp 's and GmailApp 's sendEmail function ignored the advanced parameter name .
Fixed an issue where new library versions took a long time to propagate to other scripts.
November 06, 2012
Change
Updated some icons to match icons of other Google Drive applications.
Fixed
Fixed an issue where a script failure notice would refer to the script as "Not Found" in cases where the failure is caused by an auth issue.
Fixed an issue where it was not possible to save scripts with more than ~1 million characters.
Fixed an issue where LockService did not work correctly when called from a UiApp .
Feature
Added options to EmbeddedChartBuilder to make it easier to configure embedded charts. EmbeddedChartBuilder now contains the methods asAreaChart() , asBarChart() , asColumnChart() , asLineChart() , asPieChart() , asScatterChart() and asTableChart() as replacements for calls to setChartType() .
October 26, 2012
Fixed
Fixed an issue where the DocsList service was unable to retrieve more than 2000 files. Several new methods were added to the DocsList class ( getFilesForPaging, etc.) that use continuation tokens as described in the documentation.
Fixed an issue where placing a null value via data table's addRow method produced an error.
Fixed an issue where the debugger would throw an exception when using ScriptDb .
Fixed an issue where ScriptDb 's saveBatch() method was returning the incorrect number of result objects.
Fixed an issue where UiApp 's setStyleAttribute() method failed when using the attribute backgroundImage .
Fixed an issue where the last modified date for standalone wasn't updating.
Fixed an issue where GmailThread 's moveToArchive() method wasn't working on threads in the trash.
Fixed an issue where ampersands in UiApp 's Hidden widgets were being escaped incorrectly.
Fixed an issue where UiApp 's validateOptions() method always threw an error.
Feature
Added the ability to list alternate sender addresses using GmailApp.getAliases() and use them in GmailApp.sendEmail() with the advanced option "from".
Created the class GmailAttachment , which is the same as a Blob but provides a getSize() method that isn't subject to quota restrictions.
Added the ability to set a custom app icon for web apps published to the Chrome Web Store. This is the icon that shows up on Chrome's New Tab Page. More information on the Publishing to the Chrome Web Store page .
Added the ability to close containing dialogs from HtmlService pages. More information on the Html Service page .
Change
Improved JavaScript execution performance.
Removed the "File -> New -> From Script Template" option in the script editor.
Limited the ability to programmatically submit a form in JavaScript served by the HtmlService . Calling form.submit() is only allowed when done in the callback for a user-generated click or keypress event.
September 28, 2012
Fixed
Fixed an issue where certain files could not be copied via DocsList.copy() .
September 21, 2012
Feature
Fixed an issue where arrays retrieved from ScriptDb didn't behave properly.
Fixed an issue where the execution transcript would stop recording after Browser.msgBox() was called.
Fixed an issue where scriptlet tags in HtmlTemplates behaved strangely when in attribute values.
Fixed a problem that prevented scripts from sending POST requests to other scripts that used the ContentService .
Deprecated
Updated DocsList.getFilesByType() to accept values from the DocsList.FileType enumeration. Passing in string values for the document type is deprecated but still functional. (Issue 1755)
Change
Enabled SSL certificate validation for UrlFetchApp requests. If you wish to disable this behavior you can set the advanced option validateHttpsCertificates to "false".
Feature
Added a setLabelSeparator() method to CategoryFilterBuilder , to allow for label separator strings to be used.
September 07, 2012
Change
Fixed an issue where selecting a value from a DateBox would cause the value changed handler to fire twice.
Fixed an issue where Chart dashboard StringFilters ignored the MatchType that was set.
Feature
Added an isDeleted() method to SitesApp 's Page class .
August 30, 2012
Feature
Added methods to delete ScriptProperties and UserProperties . Additional methods were also added to set multiple properties, get all properties, etc.
Added a setOption method to the various chart builders to make it possible to set advanced options for Charts.
Fixed
Fixed an issue with scrolling in the script editor so that line numbers will be displayed even when horizontally scrolling on long lines.
August 22, 2012
Fixed
Fixed an issue where only one project was copied when making a copy of a Spreadsheet with multiple projects.
Fixed an issue where scripts were not installing properly from the Script Gallery.
August 20, 2012
Feature
UiApp widgets now have a setStyleAttributes method which allow you to set multiple attributes at once.
Added a new log method to the Logger service which accepts a format string and a variable number of values to insert.
Change
Increased the allowed file upload size in web apps to 50MB, to match the limit in the DocsList service.
Streamlined the process for publishing web apps to the Chrome Web Store so that developers no longer need to manually verify web app URLs via Webmaster Central.
Fixed
Fixed an issue where the DatePicker widget returned strange values for dates before 1970.
Fixed an issue where all day event series weren't scheduled correctly in certain timezones.
Fixed an issue that prevented an HTML form element from being set in a google.script.run callback.
Fixed an issue where embedded charts were returned with the wrong data type.
Fixed an issue where Charts ignored advanced parameters of data source URLs.
August 03, 2012
Fixed
Fixed an issue where the "parameter" field in the doGet() event argument was missing if no parameters were passed in the URL.
Fixed two issues where the DatePicker and DateBox UI components didn't have a setName() method, preventing them from being used as callback elements in UI apps.
Fixed an issue where the DatePicker part of a DateBox didn't inherit the z-index style.
Fixed an issue where HtmlTemplates could not be loaded within other templates.
Fixed an issue where users would receive "Summary of failures for Apps Script" error for a failed trigger, even after the script was deleted.
Fixed an issue where incorrect JsDoc comments in a library would prevent auto-complete from working on it.
Feature
Added a getThumbnail() method to the DocsList service's File class .
July 26, 2012
Fixed
Fixed an error in the Gmail script template from the welcome screen.
Fixed an issue where saving an object in ScriptDb with an empty string key causes errors.
Fixed an issue where scripts were not being copied when a Site was copied.
Fixed an issue with DatePicker.setValue .
Feature
Added support for chatting with script collaborators in the Script Editor. When two or more people are collaborating on a script, a chat panel will be visible on the right-hand side of the Script Editor.
Added the ability to support autocomplete for included libraries when they are included in development mode.
Added UiInstance.remove methods to remove widgets from UiInstance .
Added support for Google Analytics via the Analytics Service.
Change
Made improvements to the speed of handling large batches of data in ScriptDb .
July 19, 2012
Change
Fixed an issue where setting an empty key in Script Properties or User Properties resulted in a "Data storage error" message.
July 16, 2012
Change
Updated the link to the support page on the Google Apps Script Dashboard .
Fixed
Fixed an issue where the script editor could not be accessed for some container-bound scripts.
June 27, 2012
Feature
Launched script.google.com and the ability to create standalone scripts that are not bound to a container like Google Sheets or Google Sites.
Launched the Html Service , which you can use to create web apps using HTML, CSS, and JavaScript. The reference documentation is here .
Launched the Content Service , which you can use to serve text in various forms, such as text, XML, RSS, or JSON.
Launched ScriptDb , a JavaScript object database for Apps Script. The reference documentation is here .
Added the ability to publish web apps with versioning and with the option to have them execute as the user accessing the app.
Added support for registering Apps Script web apps in the Chrome Web Store , making it quick and simple to publish and distribute your web apps.
June 19, 2012
Change
Added a scrollbar to the file panel in the Script Editor,
June 18, 2012
Change
The Script Editor's user interface has been updated.
Publish > Publish as service is now Publish > Deploy as web app . Additionally, for new scripts, before you can deploy them as a web app, you must first save a version of the script. You can then choose which version should be served when the script is deployed as a web app. For existing scripts that were already published as a service, you will still be able to access the published URL from the Deploy as web app dialog, but to make additional changes, you will need to save a version of the script.
June 14, 2012
Feature
Added the ability to create, modify, and remove Embedded Charts in Google Sheets. Embedded Charts are charts that live solely within Spreadsheets and use multiple ranges of data for their datasource.
Added support to the Domain Service for NicknameManager and GroupsManager .
Fixed
Fixed an issue where PDF documents uploaded and saved to Google Drive were being saved as blank files.
June 08, 2012
Change
Simplified sharing settings for scripts. For new script projects, the script will inherit the permissions of its parent. For example, if a script is associated with a Spreadsheet, and user1@example.com has edit access to the Spreadsheet, then user1@example.com will have edit access to the script. The extra blue Share button will no longer be present on these newly created scripts, since the permissions are tied to those of the parent. For scripts created prior to June 8, 2012, the Share button will remain if the checkbox to "Allow document collaborators to edit project" or "Allow site collaborators and owners to edit project" was not selected for that script. For more information see Security . If you would like to have script source that cannot be modified by the editors of your Spreadsheet or Site, then you can use Script Libraries .
May 21, 2012
Feature
Launched Script Libraries and Versions in response to this feature request .
Added getDescription() and setDescription() methods to File and Folder .
Change
Updated the Help > Support link in the Script Editor to point to this support page .
Set a limit of 20 triggers per script. This limit takes effect as of May 21. For scripts created prior to that date, which already have more than 20 triggers, they will keep the existing triggers, but cannot add new ones without removing existing triggers.
Fixed
Fixed an issue with ClockTriggerBuilder.nearMinute , where invalid minute values were sometimes created.
May 11, 2012
Fixed
Fixed an issue with the debugger, so that it no longer fails when a breakpoint is set on certain classes from the JDBC service.
Fixed an issue with UiApp , so that modifying a spreadsheet cell from a submit handler no longer causes an empty file to be downloaded.
May 04, 2012
Fixed
Fixed an issue with Site.getOwners() , Site.getReaders() , Site.getEditors() , where the methods were failing in some cases.
Fixed an issue with ScriptApp.getService().getUrl() so that the method can be called by users other than just the script owner.
Fixed an issue with the Script Editor, where developers were prompted to recover a draft version of another file in the same project, rather than the one being edited.
Fixed an issue with resuming continuations (such as in a script that waits for user input via message box), so that the scripts correctly honor the 6 minute script execution limit.
Fixed an issue with UiApp.ClientHandler.setValue() so that it doesn't return errors and also works for checkboxes.
Feature
Added a DocumentApp.HorizontalAlignment.JUSTIFY value to the DocumentApp.HorizontalAlignment enumeration.
Announcement
Launched the Google Apps Script Dashboard so that developers can view service health and quota limits.
April 19, 2012
Feature
Added the method everyMinutes() to Script Service.
Change
Items in the Help menu in the Script Editor now open in a new tab instead of a new window.
Made some modifications to the calculation of CPU time for scripts running on triggers, so that time spent waiting on certain processes is not counted toward that limi
April 16, 2012
Fixed
Fixed an issue in the Script Editor where the debugger would not terminate after executing the last statement of a script.
Fixed an issue where an embedded image would not copy properly in a Google Document.
Fixed an issue where a shared folder would not show up in "Collections shared with me".
Change
Increased the size of the files that can be created via DocsListApp.createFile() from 2MB to 50MB.
Increased the allowed argument value for Utilities.sleep() from 5000 (5 seconds) to 300000 (5 minutes).
Updated the script failure notification emails to include the name and a link of the spreadsheet that contains the failed script in response to this issue
Increased the allowed attachment size for emails sent via GmailApp and MailApp from 5MB to 25MB.
Feature
Added method to DocsList service to getRootFolder() .
Added method to File and Folder classes to check whether the item isTrashed() .
April 11, 2012
Change
Fixed an issue where files and collections in Google Docs could not be shared with groups.
April 04, 2012
Change
Modified document collaboration and sharing rules to make them consistent with what is possible in the user interface.
Feature
Launched the Script service in response to this feature request , which allows developers to programmatically set triggers and manage the publishing of scripts as a service.
March 20, 2012
Fixed
Fixed an issue where Spreadsheet.insertSheet() failed to properly copy a sheet when given a {template:sheet_obj} parameter.
March 13, 2012
Fixed
Fixed an issue where functions in the Utilities Service were not handling UTF-8 strings correctly.
Fixed an issue where text in a ListBox widget was being unnecessarily HTML-encoded.
Fixed an issue where Anchor.setWordWrap() was throwing errors.
Fixed an issue with UiApp panels that launch from a Google Spreadsheet, where the X to close was not displaying if the title of the application was not set.
Fixed an issue in the GUI Builder where setting the visibility for a widget to false was not working.
Feature
Added the ability to set the subject line via the subject field in the advanced arguments for GmailMessage.forward() .
March 07, 2012
Feature
Added the ability to set the target for an Anchor in UI app, in response to this issue .
Added the ability to include a limited set of HTML tags when working with UiApp widgets, in response to this issue . Here is the list of HTML tags that are permitted: B , BLOCKQUOTE , BODY , BR , CENTER , CAPTION , CITE , CODE , DIV , EM , H1 , H2 , H3 , H4 , H5 , H6 , HR , I , LABEL , LEGEND , LI , OL , P , SPAN , STRONG , SUB , SUP , TABLE , TBODY , TD , THEAD , TITLE , TR , TT , UL
Added support for sheet protection, in reference to this issue . Introduced two new methods: Sheet.getSheetProtection and Sheet.setSheetProtection , as well as a new PageProtection class.
Change
Added documentation for DocsListDialog . "Unexpected error" is no longer thrown when trying to display it.
The Script Editor's menus have been updated:
A new Resources menu is added.
The Share menu is renamed to Publish.
Triggers' management is moved to Resources menu.
Google API Services console is moved to Resources menu.
Links under the Help menu now open in a new tab rather than a new window in Firefox 9.x and Chrome.
Changed the window that appears after Authorization to the script has been granted. It is now displayed in a new tab rather than a pop-up. This tab will no longer close automatically after 5 seconds.
Updated the appearance of the warning bar that is displayed when running a script that is published as a service by a user other than the owner, in response to this issue.
February 12, 2012
Feature
Added methods to the Document class to addHeader() and addFooter() .
Added a merge() method to the Range class.
Fixed
Fixed an issue with using tab key to format code in the script editor.
Fixed an issue where email quotas were too restrictive when executed by an anonymous user from a script running as a service.
February 06, 2012
Feature
Added a feature to cancel running scripts, when the script is run from the script editor.
Added getEventSeriesById() to Calendar.
January 31, 2012
Fixed
Fixed an issue where Anchor.setWordWrap() was not working.
January 24, 2012
Feature
Added the setNestingLevel() method to ListItem .
Added the setGlyphType() method to ListItem to support glyph types other than numeric glyphs.
Added getWidth() and setWidth() methods to TableCell .
Fixed
Fixed some issues where autocomplete stopped working after certain statements were typed in the script editor.
Fixed an issue with the sizing of images when using Document.appendImage() .
Fixed an issue where an error occurred when opening a document after the Document.saveAndClose() method had previously been called.
January 11, 2012
Change
Fixed an issue with Paragraph.setHeading() where text was not formatted as expected.
December 14, 2011
Fixed
Fixed an issue with the debugger, where it would close when stepping into a function that is located in a different file.
Feature
Enabled Spreadsheet.show() in autocomplete.
Added the ability to copy and paste from the Revision History.
Added support for the Groups Services .
Added support for the Domain Services .
Added support for the AdSense Services .
November 07, 2011
Fixed
Fixed an issue with Session.getTimezone() returning incorrect values.
Fixed an issue with the Edit > Find feature in the script editor.
Feature
Added the Lock and Cache services.
Added support for client handlers and validators .
September 26, 2011
Feature
Added support for inlineImages when sending emails with MailApp.sendEmail() .
Added the Charts Services , which allow users to dynamically create charts and embed them in emails, UiApp, or export them as images.
Added the Prediction Services , which allow users to access a cloud hosted machine learning service that makes it easy to build smart apps.
Added the Tasks Services , which allow users to manage tasks and task lists.
Added the UrlShortener Services , which let you create, inspect, and manage goo.gl short URLs.
Fixed
Fixed an issue where an error occurred if an empty ListBox was used as a callback element.
August 04, 2011
Feature
Added support for ScrollPanel to the GUI Builder.
July 25, 2011
Feature
Added supports for projects in Apps Script.
Feature
Fixed an issue where Xml.element failed if the child elements were XmlElements .
July 14, 2011
Fixed
Fixed an issue where GmailApp.getUserLabelByName() failed for label names that contained spaces.
May 04, 2011
Feature
Added the Gmail service .
Added the Document service .
Introduced the GUI Builder .
April 15, 2011
Feature
Added an appendRow() method to Spreadsheet.
Fixed
Fixed an issue with UiApp.getActiveApplication().setStyleAttribute() for 'cursor.'
March 21, 2011
Change
Improved performance of the script editor. The editor can now handle large scripts without any issues in most major browsers.
Improved the internal error handling of the Spreadsheet Service, so that fewer errors are received by users.
Increased the timeout of UrlFetch to 30 seconds.
Feature
Binary files can be uploaded using FileUpload .
Enhanced ListBox to function as a multi-select ListBox .
Fixed
Fixed a minor bug Script as a Service related to expired tokens.
Breakpoint in debugger now clears as expected.
SpreadsheetApp.getActiveSheet() when executed in Installable onEdit returns the correct sheet name.
March 08, 2011
Fixed
Fixed an issue which improves performance of various Services.
Fixed an issue with Authorization of scripts.
Feature
Added a method in Utilities class that parses CSV text.
January 21, 2011
Announcement
Introducing the Debugger! The debugger significantly enhances the ability of Apps Script users to debug their scripts. With the debugger, users can set breakpoints, inspect variables, step-in and step-out of functions.
October 21, 2010
Feature
Added integration with Google Sites, so that Apps Script can now be run from within Google Sites. Read more here.
October 16, 2010
Feature
Added ability for users to create new recurring calendar events through CalendarApp.newRecurrence() and Calendar.createEventSeries() .
Added ability to access existing event series through CalendarEvent.getEventSeries() .
Added ability for users to modify or delete an entire event series through CalendarEventSeries .
September 17, 2010
Feature
Added new methods to CalendarEvent to get the creation date and the date the event was last updated: getDateCreated() and getLastUpdated() .
Added a new method to Contact to get the date a contact was last updated: getLastUpdated() .
Change
Fixed two issues with Calendar.getEvents() . GetEvents previously returned only the first instance of a recurring event in a given time range. Now it returns all instances of the recurring event in the given time range. Additionally, editing the instance of the recurring event previously would edit the entire series. Now, editing an instance of a recurring event edits only the particular instance.
Fixed an issue where the unpublished version of onInstall was being run for scripts in the Script Gallery.
Fixed an issue where users could not type ( in the script editor when the autocomplete popup was visible.
Fixed an issue where getActiveSheet was not working when called from onEdit events.
Fixed an issue with UiApp where the UI panels were not displayed properly and an "Error encountered: An unexpected error occurred" error message was displayed.
August 16, 2010
Feature
Added Spreadsheet.show() to the script editor autocomplete and the documentation.
Clarified the use of Session.getUser() and added two new methods: Session.getActiveUser() and Session.getEffectiveUser() .
Added support for persistent storage in scripts via UserProperties and ScriptProperties . Script Properties and User Properties are also available from File > Properties in the script editor.
Added several new methods to the Contact class: Contact.getGivenName() , Contact.setGivenName() , Contact.getMiddleName() , Contact.setMiddleName() , Contact.getFamilyName() , Contact.setFamilyName() , Contact.getMaidenName() , Contact.setMaidenName() , Contact.getNickname() , Contact.setNickname() .
Major improvements to the Sites service, fixing many issues and adding new functionality.
Added support for find and replace in the script editor.
UiApp is now available to all users. Previously, it was only available to Google Apps Premier domains.
The timezone for a script can now be set from File > Properties in the script editor.
The user interface for time-based triggers has been updated to make it more clear that the events are triggered between N and N+1 hours.
The script timezone is now visible in the script triggers dialog.
Revision history for scripts is now available from File > See revision history in the script editor.
Added two new methods to the Utilities class provide JSON support: Utilities.jsonParse() and Utilities.jsonStringify() .
Added support for outbound OAuth requests. See UrlFetchApp.addOAuthService() .
Added a new method to class Spreadsheet to get the form URL: Spreadsheet.getFormUrl() .
Added a new Blob class to simplify moving data between different Google Apps Script services.
August 01, 2010
Fixed
Fixed an issue with the Sheet.getFrozenRows , where an error was returned in some cases.
Feature
Added two new methods to the Sheet class for getting frozen rows and columns: Sheet.getFrozenRows() and Sheet.getFrozenColumns() .
Added sorting methods: Sheet.sort() and Range.sort() .
Added methods to get row height and column width in a Sheet: Sheet.getRowHeight() and Sheet.getColumnWidth() .
July 12, 2010
Change
Added two new methods to the Soap service for setting and getting the SOAP endpoint: WsdlService.getEndpointOverride() and WsdlService.setEndpointOverride() .
Added a method to check if there is remaining quota for sending emails for the current day: MailApp.getRemainingDailyQuota() .
Fixed
Fixed an issue with the Contacts service, where a 'Mismatch: etags' error was thrown when a contact was modified more than once.
Fixed an issue where a popup dialog with the text "Error encountered: An unexpected error occurred" was displayed when the change handler for a ListBox was called , but no app was returned by the change handler.
Fixed an issue where ListBox.addItem wasn't working after calling getElementById .
Fixed an issue with Utilities.formatDate , where it was previously always formatting the date into GMT.
Change
Line numbers in error messages are now denoted with (line nnn), rather than (# nnn), where nnn is the line number.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
