# Apps Script

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 216
Unique features: 349

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-12 | AddOnsResponseService |  | AddOnsResponseService lets developers create and manage interactive responses for Google Workspace add-ons that extend Google Chat. |
| 2026-03-05 | Maps Service API key authentication |  | Maps Service API key authentication lets scripts authenticate with an API key and optionally a signing key. |
| 2026-03-05 | Maps Service client ID authentication | June 2026 | Maps Service client ID authentication uses setAuthentication(clientId, signingKey) to authenticate requests with a Maps Platform client ID; deprecated on June 2026. |
| 2026-01-12 | Vertex AI advanced service |  | The Vertex AI advanced service lets Apps Script call the Vertex AI API to prompt models for text, images, and other generated content. |
| 2025-06-04 | Google Analytics Management API and Reporting API advanced service | 2025-06-04 | The Google Analytics Management API and Reporting API advanced service provides Apps Script access to Universal Analytics administration and reporting APIs; deprecated on 2025-06-04. |
| 2025-04-08 | Forms Service form publishing |  | Forms Service form publishing lets scripts publish forms and control who can respond to them. |
| 2025-01-08 | Granular OAuth consent in Apps Script IDE |  | Granular OAuth consent in the Apps Script IDE lets users approve individual OAuth scopes during script execution. |
| 2025-01-08 | Granular OAuth scope management APIs |  | Granular OAuth scope management APIs let developers inspect required and authorized scopes programmatically through ScriptApp and AuthorizationInfo. |
| 2024-12-09 | Calendar event transparency |  | Calendar event transparency support lets scripts get and set whether events appear as Busy or Available. |
| 2024-12-09 | Spreadsheet Service image source URL access | 2024-12-09 | Spreadsheet Service image source URL access exposes an image's source URL through getUrl() on CellImage, CellImageBuilder, and OverGridImage; deprecated on 2024-12-09. |
| 2024-12-09 | Spreadsheet.getSheetById |  | Spreadsheet.getSheetById lets scripts retrieve a sheet by its unique sheet ID. |
| 2024-11-27 | Calendar event type detection |  | Calendar event type detection lets scripts distinguish regular events from event types such as out-of-office and working location. |
| 2024-09-03 | Looker in Connected Sheets for Apps Script |  | Looker in Connected Sheets support lets Apps Script create and use Looker data source connections in spreadsheets. |
| 2024-08-15 | Document tabs in Document service |  | Document service tabs support lets scripts create and organize tabs in Google Docs documents. |
| 2024-07-25 | Add-ons columns layout |  | Add-ons columns layout lets developers arrange interface content in columns; Add-ons columns layout lets developers arrange interface content in columns. |
| 2024-07-25 | Add-ons multiselect menus |  | Add-ons multiselect menus let developers present selectable multi-value menu inputs in add-on interfaces; Add-ons multiselect menus let developers present selectable multi-value menu inputs in add-on interfaces. |
| 2024-05-02 | Google Workspace Events advanced service |  | The Google Workspace Events advanced service lets Apps Script subscribe to Google Workspace events. |
| 2024-04-30 | Spreadsheet data source refresh cancellation |  | Spreadsheet data source refresh cancellation lets scripts stop running refresh operations for linked data source objects. |
| 2024-04-22 | Google Chat apps Card Service support |  | Google Chat apps Card Service support lets Apps Script Chat apps build card messages and dialogs with Card Service; Google Chat apps Card Service support lets Apps Script Chat apps build card messages and dialogs with Card Service. |
| 2024-03-07 | Bulk version deletion in project history |  | Bulk version deletion in project history lets users delete multiple unused script versions at once. |
| 2024-03-05 | Card Service LinkPreview |  | The Card Service LinkPreview class lets developers control smart chip titles, preview titles, and preview cards for links. |
| 2024-01-24 | Add-ons third-party resource creation in Docs @ menu |  | Google Workspace Add-ons can create third-party resources from the @ menu in Google Docs; Google Workspace Add-ons can create third-party resources from the @ menu in Google Docs. |
| 2024-01-18 | Add-ons link previews in Sheets and Slides |  | Google Workspace Add-ons can show link previews with smart chips in Google Sheets and Slides; Google Workspace Add-ons can show link previews with smart chips in Google Sheets and Slides. |
| 2023-12-13 | Card Service Action.setPersistValues |  | Action.setPersistValues lets Card Service actions control whether updated form values come from the client or the server. |
| 2023-12-11 | Advanced Drive service v3 |  | The advanced Drive service v3 lets Apps Script call version 3 of the Google Drive API. |
| 2023-12-06 | Version deletion from project history |  | Version deletion from project history lets users remove undeployed script versions from the Apps Script IDE. |
| 2023-11-06 | Advanced Chat service |  | The Advanced Chat service lets Apps Script call the Google Chat API. |
| 2023-09-19 | Classic Google Sites service | 2023-09-19 | The classic Google Sites service provides Apps Script integration with classic Sites; deprecated on 2023-09-19. |
| 2023-08-23 | Project history version comparison |  | Project history version comparison lets editors view deployed script versions and compare them with the current version in the IDE. |
| 2023-06-12 | Third-party smart chips and link previews |  | Third-party smart chips and link previews let Google Workspace Add-ons preview links with smart chips. |
| 2022-12-16 | Contacts service | January 2025 | The Contacts service provides Apps Script access to Google Contacts data; deprecated on January 2025. |
| 2022-11-03 | Utilities.parseDate |  | Utilities.parseDate parses a string date using a specified time zone and format based on SimpleDateFormat. |
| 2022-11-01 | Chat thread retrieval methods | 2022-11-01 | Chat thread retrieval methods let Apps Script access chat threads through getChatThreads overloads; Chat thread retrieval methods let Apps Script access chat threads through getChatThreads overloads; deprecated on 2022-11-01. |
| 2022-09-27 | Legacy Apps Script IDE | 2022-09-27 | The legacy Apps Script IDE is the older script editor experience replaced by the redesigned IDE; deprecated on 2022-09-27. |
| 2022-04-13 | Alphabetical file sorting in new IDE |  | The new Apps Script IDE lets developers sort project files alphabetically in the editor. |
| 2022-04-13 | Editor add-on test deployments in new IDE |  | The new Apps Script IDE lets developers create test deployments for Editor Add-ons. |
| 2022-04-13 | Rhino debugging in new IDE |  | The new Apps Script IDE lets developers debug Rhino functions without migrating to the V8 runtime. |
| 2022-04-13 | Script properties management in new IDE |  | The new Apps Script IDE lets developers add, edit, and delete script properties from the project settings page. |
| 2022-04-13 | Script time zone setting in new IDE |  | The new Apps Script IDE lets developers set the time zone for a script project. |
| 2022-03-24 | Calendar event attachments for add-ons |  | Calendar event attachments for Google Workspace Add-ons let developers add custom attachments and handle attachment-provider trigger events. |
| 2022-03-18 | Spreadsheet Service color getter methods | 2022-03-18 | Spreadsheet Service color getter methods return color values from spreadsheet objects such as ranges, sheets, banding, and slicers; deprecated on 2022-03-18. |
| 2022-02-14 | External collaborator edit alerts in new IDE |  | The new Apps Script IDE emails owners when someone outside their organization edits a script project. |
| 2022-01-19 | In-cell images in Spreadsheet Service |  | In-cell images in Spreadsheet Service let scripts create image values and place them directly into spreadsheet cells. |
| 2021-12-15 | TLS 1.0 and TLS 1.1 for JDBC connections | 2021-12-15 | TLS 1.0 and TLS 1.1 are older security protocol versions previously usable for Apps Script JDBC connections; deprecated on 2021-12-15. |
| 2021-09-01 | HTML Service user-activated top navigation |  | HTML Service iframe sandboxing now supports top-level navigation only through user activation via allow-top-navigation-by-user-activation. |
| 2021-08-31 | Drive resource key security update controls |  | Drive resource key security update controls let scripts check and set whether shared files and folders require a resource key. |
| 2021-08-23 | Document service smart chips |  | Document service smart chips add Date, Person, and RichLink elements to represent smart chip content in Google Docs. |
| 2021-06-01 | Add-ons divider widget |  | The add-ons divider widget lets developers insert visual dividers into add-on cards with Card Service. |
| 2021-05-27 | Sheet forced row heights |  | Apps Script Spreadsheet service lets scripts manually set row heights with Sheet.setRowHeightsForced(). |
| 2020-10-23 | Google Tables advanced service |  | Apps Script includes an advanced service for Google Tables that allows scripts to read and edit table rows programmatically. |
| 2020-09-03 | Connected Sheets support |  | Apps Script Spreadsheet service adds classes and methods for working with Connected Sheets data sources, tables, charts, and refresh behavior. |
| 2020-08-27 | DecoratedText widget |  | Apps Script Card Service adds the DecoratedText widget for displaying text with optional decorations. |
| 2020-07-27 | Drive item move operations |  | Apps Script Drive File and Folder classes add moveTo() methods for moving items to destination folders. |
| 2020-07-27 | Drive shortcuts support |  | Apps Script Drive File and Folder classes add methods for creating shortcuts and retrieving shortcut target information. |
| 2020-07-27 | Drive single-parent enforcement |  | Apps Script DriveApp adds enforceSingleParent() to enable or disable single-parent behavior for Drive items. |
| 2020-07-27 | Folder multi-parent modification methods | 2020-07-27 | Apps Script Drive Folder methods for adding and removing files or folders directly from folders are deprecated; deprecated on 2020-07-27. |
| 2020-06-12 | Pivot table source range access |  | Apps Script Spreadsheet service adds PivotTable.getSourceDataRange() to access the source range of a pivot table. |
| 2020-06-12 | Pivot table value removal |  | Apps Script Spreadsheet service adds PivotValue.remove() to remove a value from a pivot table. |
| 2020-06-12 | Rich text link URLs |  | Apps Script Spreadsheet service adds methods to get and set link URLs on RichTextValue content. |
| 2020-04-22 | Sheets selection change trigger |  | Apps Script adds the onSelectionChange(e) simple trigger for running code when a spreadsheet selection changes. |
| 2020-04-02 | Shared drive FILE_ORGANIZER permission |  | Apps Script Drive service adds the FILE_ORGANIZER permission enum value for shared drive content management. |
| 2020-04-02 | Spreadsheet drawings support |  | Apps Script Spreadsheet service adds the Drawing class and Sheet.getDrawings() for accessing drawings in sheets. |
| 2020-02-28 | Spreadsheet theme color objects |  | Apps Script Spreadsheet service adds Color object-based methods for working with theme colors across formatting APIs. |
| 2020-01-21 | Conference Data service |  | Apps Script adds the Conference Data service to help Calendar add-ons synchronize with third-party conferencing applications. |
| 2020-01-21 | G Suite Add-ons card widgets and responses |  | Apps Script Card Service adds new widgets and event response types for building G Suite Add-on interfaces. |
| 2020-01-21 | G Suite Add-ons manifest model |  | Apps Script updates the add-ons manifest structure to support configuration for G Suite Add-ons. |
| 2019-12-18 | Spreadsheet theme APIs |  | Apps Script Spreadsheet service adds classes and methods for building colors and managing spreadsheet themes. |
| 2019-12-11 | Data Studio dynamic configuration controls |  | Apps Script Data Studio service adds dynamic and stepped configuration options for community connector fields and inputs. |
| 2019-12-11 | Data Studio response builders |  | Apps Script Data Studio service adds response classes and builders for schema, data, and credentials responses. |
| 2019-11-06 | Script identity tokens |  | Apps Script Script service adds ScriptApp.getIdentityToken() to return an identity token for the effective user. |
| 2019-11-06 | Spreadsheet slicers |  | Apps Script Spreadsheet service adds slicer support for filtering ranges, charts, and pivot tables. |
| 2019-10-28 | Chrome Web Store publishing for Apps Script web apps | 2019-10-28 | Apps Script web apps can no longer be published to the Chrome Web Store; deprecated on 2019-10-28. |
| 2019-10-23 | EmbeddedChart ID and type methods | 2019-10-23 | Apps Script removes EmbeddedChart methods for getting type or ID and setting chart ID in the Spreadsheet service; deprecated on 2019-10-23. |
| 2019-10-23 | UiApp-related chart dashboard classes and methods | 2019-10-23 | Apps Script removes seldom-used Charts service classes and methods that depended on the shut down UiApp service; deprecated on 2019-10-23. |
| 2019-08-07 | UI service | July 15, 2019 | Apps Script UI service documentation was removed after the service was deprecated and shut down; The UI service provided Apps Script user interface capabilities before HTML Service replaced it; deprecated on July 15, 2019. |
| 2019-07-26 | Group user roles lookup |  | Apps Script Group service adds Groups.getRoles(user) to list a user's roles in a group. |
| 2019-07-26 | Slides concrete color scheme control |  | Apps Script Slides service adds methods to set concrete colors in a presentation color scheme. |
| 2019-07-26 | Spreadsheet whitespace trimming and duplicate removal |  | Apps Script Spreadsheet service adds methods to trim whitespace and remove duplicate values from ranges and range lists. |
| 2019-05-20 | Gmail message header access |  | Apps Script Gmail service adds GmailMessage.getHeader() to retrieve RFC 2822 message headers. |
| 2019-05-20 | Optimization batch variable and constraint creation |  | Apps Script Optimization service adds batch methods for creating multiple constraints and variables at once. |
| 2019-05-03 | Document language management |  | Apps Script Document service adds methods to get, set, and list supported document language codes. |
| 2019-04-19 | Data Studio hyperlink and image field types |  | Apps Script Data Studio service adds HYPERLINK, IMAGE, and IMAGE_LINK values to the FieldType enum. |
| 2019-04-05 | Data Studio BigQuery connector configuration |  | Apps Script Data Studio service adds BigQuery connector configuration classes and builder methods. |
| 2019-04-05 | Embedded chart range clearing |  | Apps Script embedded chart builders add clearRanges() to reset chart source ranges. |
| 2019-04-05 | Spreadsheet checkboxes |  | Apps Script Spreadsheet service adds checkbox data validation and methods to insert, check, uncheck, and remove checkboxes. |
| 2019-04-05 | Spreadsheet iterative calculation controls |  | Apps Script Spreadsheet service adds APIs to configure iterative calculation settings and recalculation intervals. |
| 2019-04-05 | Spreadsheet text finder |  | Apps Script Spreadsheet service adds TextFinder and related methods for finding text in ranges, sheets, and spreadsheets. |
| 2019-02-26 | Data Studio reaggregation settings |  | Apps Script Data Studio service adds methods to get and set field reaggregation behavior. |
| 2019-02-26 | Sheets BigQuery data connectors |  | Apps Script Spreadsheet service adds classes and methods for creating and using BigQuery data source tables in Sheets. |
| 2019-01-22 | Data Studio authentication type responses |  | Apps Script Data Studio service adds authentication type classes and response builders for community connectors. |
| 2019-01-22 | Spreadsheet rich text and text styles |  | Apps Script Spreadsheet service adds rich text and text style classes and methods for formatted cell content. |
| 2019-01-22 | UiApp service | July 15th, 2019 | Apps Script UiApp service is deprecated for shutdown and will no longer function after the announced date; deprecated on July 15th, 2019. |
| 2019-01-04 | Data Studio error response objects |  | Apps Script Data Studio service adds DebugError and UserError classes for connector error reporting. |
| 2019-01-04 | Slides slide linking and text box insertion |  | Apps Script Slides service adds APIs for linked slides, refreshing or unlinking them, and inserting text boxes. |
| 2018-12-13 | Slides connector lines |  | Apps Script Slides service adds connector line classes and methods for connecting page elements. |
| 2018-11-14 | Card Service text button styling |  | Apps Script Card Service adds text button styling and background customization methods. |
| 2018-11-14 | Slides page element ordering and accessibility metadata |  | Apps Script Slides service adds methods to control Z-order and set titles and descriptions on page elements. |
| 2018-11-14 | Spreadsheet developer metadata |  | Apps Script Spreadsheet service adds developer metadata APIs for attaching and finding metadata on ranges, sheets, and spreadsheets. |
| 2018-10-30 | Console logging methods |  | Apps Script console service adds error, info, and warn logging methods. |
| 2018-10-30 | Data Studio field visibility control |  | Apps Script Data Studio service adds methods to get and set whether a field is hidden. |
| 2018-10-30 | Gmail attachment hash and filtered attachment retrieval |  | Apps Script Gmail service adds attachment hashing and message attachment retrieval options. |
| 2018-10-30 | Spreadsheet over-grid images and visibility checks |  | Apps Script Spreadsheet service adds over-grid image support and methods to inspect hidden rows and columns. |
| 2018-10-18 | Gmail add-on compose actions |  | Apps Script Card Service adds compose action response classes and builders for Gmail add-ons. |
| 2018-08-20 | Utilities RSA signatures |  | Apps Script Utilities service adds RSA signature methods and the RsaAlgorithm class. |
| 2018-06-19 | Forms response deletion |  | Apps Script Forms service adds Form.deleteResponse() to delete a form response by ID. |
| 2018-06-19 | UrlFetch daily received-data quota | 2018-06-19 | Apps Script removes the per-user daily quota on total data received by UrlFetch; deprecated on 2018-06-19. |
| 2018-06-19 | Utilities byte-array digest and HMAC methods |  | Apps Script Utilities service adds digest and HMAC signature methods that accept byte arrays. |
| 2018-04-23 | Spreadsheet row and column groups |  | Apps Script Spreadsheet service adds group objects and methods for expanding, collapsing, and managing row and column groups. |
| 2018-04-11 | Advanced Sheets editing APIs |  | Apps Script Spreadsheet service adds a broad set of classes and methods for advanced editing, formatting, filtering, pivoting, and selection operations. |
| 2018-04-11 | Embedded Charts enhancements |  | Apps Script Charts service adds EmbeddedChart support in Google Sheets, including hidden-dimension and merge strategies and new chart types. |
| 2018-03-26 | Active sheet selection restoration |  | Apps Script Spreadsheet service adds setActiveSheet(sheet, restoreSelection) overloads to preserve selection when switching sheets. |
| 2018-03-26 | ScriptApp.Service enable method | 2018-03-26 | Apps Script sunsets the deprecated ScriptApp.Service.enable(restriction) method; deprecated on 2018-03-26. |
| 2018-03-26 | ScriptApp.Service.Restriction enum | 2018-03-26 | Apps Script sunsets the deprecated ScriptApp.Service.Restriction enum; deprecated on 2018-03-26. |
| 2018-02-26 | Calendar event triggers |  | Apps Script adds calendar event triggers for detecting recently changed calendar events alongside the Calendar advanced service. |
| 2018-02-13 | Slides element insertion across page types |  | Apps Script Slides service adds methods to insert groups, images, lines, shapes, charts, tables, videos, and word art into layouts, masters, pages, and slides. |
| 2018-02-13 | Slides text range insertion and appending |  | Apps Script Slides service adds methods to append and insert text ranges with optional source formatting preservation. |
| 2018-02-13 | Spreadsheet copy paste types |  | Apps Script Spreadsheet service adds the CopyPasteType enum and a Range.copyTo() overload for paste type control. |
| 2018-01-19 | UrlFetch batch requests |  | Apps Script UrlFetch service adds fetchAll() for making multiple fetch requests in one call. |
| 2018-01-19 | Utilities gzip compression |  | Apps Script Utilities service adds methods to compress and decompress Blob objects using gzip. |
| 2017-10-24 | Apps Script project manifest editing |  | Apps Script lets developers view and explicitly edit project manifests for direct control of project properties. |
| 2017-10-24 | Card Service for Gmail add-ons |  | Apps Script adds a Card Service for building Gmail add-on interfaces with widget-based UI instead of HTML or CSS. |
| 2017-10-24 | Explicit OAuth scope control |  | Apps Script lets developers directly control the OAuth scopes requested during authorization. |
| 2017-10-24 | Gmail add-ons framework |  | Apps Script makes the Gmail add-ons framework generally available to all developers. |
| 2017-10-24 | Manifest-based deployments |  | Apps Script lets developers deploy script projects directly from the project manifest. |
| 2017-10-10 | Calendar all-day event creation and lookup |  | Apps Script Calendar service adds methods to create all-day events, retrieve events by iCal ID, and set all-day dates. |
| 2017-10-10 | Groups nested group inspection |  | Apps Script Groups service adds methods to list groups and test whether a group contains another group. |
| 2017-10-10 | Spreadsheet autofill and row or column movement |  | Apps Script Spreadsheet service adds autofill options and methods to move rows and columns. |
| 2017-09-26 | Google Slides service |  | Apps Script adds support for the Google Slides service, including presentation editing and Slides add-on development. |
| 2017-09-15 | Gmail drafts management |  | Apps Script Gmail service adds GmailDraft support for creating, editing, deleting, and sending draft messages and replies. |
| 2017-09-15 | Priority Inbox detection |  | Apps Script Gmail service adds methods to determine whether a message or thread is in Priority Inbox. |
| 2017-07-28 | Forms checkbox grid item |  | Apps Script Forms service adds a Checkbox Grid item type. |
| 2017-07-28 | Spreadsheet linked form URL access |  | Apps Script Spreadsheet service adds Spreadsheet.getFormUrl() to return the URL of a form linked to a sheet or spreadsheet. |
| 2017-07-28 | Stackdriver Error Reporting integration |  | Apps Script enables collection of exception and error reports through Stackdriver Error Reporting. |
| 2017-06-20 | Range row randomization |  | Apps Script Spreadsheet service adds Range.randomize() to randomize the order of rows in a range. |
| 2017-04-26 | Calendar event colors |  | Apps Script Calendar service adds getColor(), setColor(), and EventColor support for calendar events. |
| 2017-04-26 | Combo and histogram charts |  | Apps Script adds support for Combo and Histogram charts, including embedding them in Google Sheets. |
| 2017-04-26 | Forms quizzes support |  | Apps Script Forms service adds access to Google Forms quizzes features. |
| 2017-03-09 | Container-bound script ownership inheritance |  | Apps Script makes the container owner the owner of new container-bound script projects regardless of who created them. |
| 2017-03-09 | Editor deployment permissions |  | Apps Script allows script editors, in addition to owners, to publish add-ons and deploy scripts as web apps or executables. |
| 2017-03-09 | Shared drive project collaboration |  | Apps Script supports project collaboration in Shared drives so scripts can be group-owned and maintained collaboratively. |
| 2016-11-23 | Form validation classes |  | Form validation classes let scripts validate checkbox, generic data, grid, paragraph text, and text form items. |
| 2016-10-19 | HtmlService X-Frame-Options header support |  | HtmlService can set X-Frame-Options headers so Apps Script HTML and web apps can render in iframes. |
| 2016-07-28 | Android add-ons support |  | Apps Script add-ons for Google Docs and Sheets can run on Android. |
| 2016-07-12 | Project keys for script identification | 2016-07-12 | Project keys were previously used as unique identifiers for Apps Script projects; deprecated on 2016-07-12. |
| 2016-07-06 | HTML Service NATIVE sandbox mode | 2016-07-06 | NATIVE was an HTML Service sandbox mode for running Apps Script web content; deprecated on 2016-07-06. |
| 2016-04-11 | UrlFetchApp PATCH request support |  | UrlFetchApp can send HTTP PATCH requests. |
| 2016-03-25 | DashboardPanel.add(widget) | 2016-03-25 | DashboardPanel.add(widget) added UiApp widgets to a dashboard panel; deprecated on 2016-03-25. |
| 2016-02-29 | Spreadsheet named ranges |  | The Spreadsheet service can create, manage, list, and protect named ranges. |
| 2016-02-29 | Spreadsheet tab color API |  | The Spreadsheet service can get and set sheet tab colors. |
| 2016-02-29 | Utilities.getUuid() |  | Utilities.getUuid() generates a unique identifier string. |
| 2015-12-10 | HTML Service EMULATED sandbox mode | 2015-12-10 | EMULATED was an HTML Service sandbox mode for running Apps Script web content; deprecated on 2015-12-10. |
| 2015-08-10 | ScriptApp.Service.enable() | 2015-08-10 | ScriptApp.Service.enable() enabled access to a service under the older Apps Script authorization model; deprecated on 2015-08-10. |
| 2015-08-04 | Spreadsheet warning-only protection |  | Spreadsheet protections can warn users before edits instead of fully blocking edits. |
| 2015-06-30 | Utilities RSA SHA-256 signature support |  | Utilities can sign strings with RSA SHA-256 using computeRsaSha256Signature variants. |
| 2015-05-20 | Legacy OAuth service integration API | 2015-05-20 | The legacy OAuthConfig and related UrlFetchApp OAuth service methods supported OAuth integrations before library-based alternatives; deprecated on 2015-05-20. |
| 2015-05-20 | Script installation source API |  | The Script service can identify a script's installation source and project key. |
| 2015-05-20 | Web-safe Base64 utilities |  | Utilities can encode and decode web-safe Base64 values. |
| 2015-04-23 | DocsList service | 2015-04-23 | DocsList service provided Apps Script access to Google Docs file listings and related operations; DocsList service provided Apps Script access to Google Docs file listings and related operations; deprecated on 2015-04-23. |
| 2015-03-19 | Domain-wide add-on installation |  | Admins can install and authorize Docs, Sheets, and Forms add-ons for all users in a domain. |
| 2015-03-19 | Script authorization project switching |  | Scripts can change which Google Developers Console project is used for authorization. |
| 2015-03-04 | OAuthConfig | 2015-03-04 | OAuthConfig was the URL Fetch service class for connecting to OAuth 1.0 APIs; deprecated on 2015-03-04. |
| 2015-02-10 | DocumentApp FontFamily enum | 2015-02-10 | The Document service FontFamily enum represented font families before string-based font names were adopted; deprecated on 2015-02-10. |
| 2015-02-10 | Legacy sheet protection API | 2015-02-10 | PageProtection and the older sheet protection methods managed spreadsheet protection in the legacy Sheets model; deprecated on 2015-02-10. |
| 2015-02-10 | Spreadsheet protection API |  | The Spreadsheet service can precisely protect sheets and ranges using the Protection model. |
| 2015-02-10 | SpreadsheetApp.open(DocsList File) | 2015-02-10 | SpreadsheetApp.open(file) accepted a File object from the deprecated DocsList service; deprecated on 2015-02-10. |
| 2014-12-11 | HTML Service IFRAME sandbox mode |  | IFRAME is an HTML Service sandbox mode with fewer restrictions and better performance than earlier modes. |
| 2014-12-01 | Form one-response limit |  | Forms can get and set whether respondents are limited to one response per user. |
| 2014-12-01 | Form question shuffling |  | Forms can get and set whether questions are shuffled on each page. |
| 2014-12-01 | Form URL shortening |  | Forms can convert a long form URL into a short URL. |
| 2014-12-01 | Spreadsheet image insertion |  | Sheets can insert images from blobs at specified row and column positions with optional offsets. |
| 2014-10-23 | Finance service | 2014-10-23 | The Finance service provided Apps Script access to Google Finance data; The Finance service provided Apps Script access to Google Finance data; deprecated on 2014-10-23. |
| 2014-10-14 | Time-driven installable triggers for add-ons |  | Google Sheets and Docs add-ons can use time-driven installable triggers. |
| 2014-09-30 | Add-on installable trigger support |  | Google Sheets and Docs add-ons can use most installable triggers. |
| 2014-09-30 | Google Docs installable open trigger |  | Google Docs supports an installable open trigger that can run authorized services. |
| 2014-09-30 | LinearOptimizationService |  | LinearOptimizationService lets scripts model and solve linear and mixed-integer linear programs. |
| 2014-09-04 | DocsListDialog OAuth token support |  | DocsListDialog can accept an OAuth 2.0 token for fetching user-specific dialog data. |
| 2014-09-04 | Document-scoped cache and lock |  | Add-ons can use document-scoped cache and lock objects shared by users within the current document. |
| 2014-09-04 | Legacy private and public cache and lock methods | 2014-09-04 | The older private and public cache and lock method names were replaced by user and script scoped equivalents; deprecated on 2014-09-04. |
| 2014-07-17 | ScriptApp.EventType.ON_CHANGE |  | ScriptApp.EventType includes ON_CHANGE so scripts can detect Google Sheets change events correctly. |
| 2014-06-20 | Script gallery in old Google Sheets | 2014-06-20 | The script gallery in the old version of Google Sheets distributed scripts before add-ons replaced it; deprecated on 2014-06-20. |
| 2014-05-15 | Form trigger source property |  | Form trigger events include a source property so scripts can retrieve the triggering form. |
| 2014-04-10 | Old Xml service | 2014-04-10 | The old XML service provided earlier XML processing support in Apps Script; The legacy Xml service was deprecated; deprecated on 2014-04-10. |
| 2014-04-10 | SOAP service | 2014-04-10 | The SOAP service provided Apps Script integration with SOAP-based web services; deprecated on 2014-04-10. |
| 2014-04-10 | UiApp layout and popup widgets | 2014-04-10 | Several UiApp layout and popup widgets were disabled, including DeckPanel, DecoratedPopupPanel, DockLayoutPanel, DockPanel, StackLayoutPanel, and TabLayoutPanel; deprecated on 2014-04-10. |
| 2014-04-03 | Range.getDataSourceUrl() in new Google Sheets |  | The Range.getDataSourceUrl() method is supported in the new version of Google Sheets. |
| 2014-03-11 | Current-document authorization annotations |  | The @OnlyCurrentDoc and @NotOnlyCurrentDoc annotations control whether authorization is limited to the current document. |
| 2014-03-11 | Google-styled CSS package for HTML Service |  | A CSS package applies Google styling to fonts, buttons, and form elements in HTML Service dialogs and sidebars. |
| 2014-03-11 | ScriptApp.AuthMode |  | ScriptApp.AuthMode identifies categories of authorized services available to a triggered function. |
| 2014-03-11 | Ui.createAddonMenu() |  | Ui.createAddonMenu() lets scripts add a submenu to the Add-ons menu in Google Sheets or Docs. |
| 2014-02-25 | Document bookmarks API |  | DocumentApp can create and retrieve bookmarks in documents. |
| 2014-02-25 | Document cursor and selection API |  | DocumentApp can create positions and ranges and set the user's cursor or selection. |
| 2014-02-25 | Document named ranges API |  | DocumentApp can create, retrieve, and list named ranges in documents. |
| 2014-02-25 | google.script.host.editor.focus() |  | The HTML Service client API can move browser focus from a dialog or sidebar back to the editor. |
| 2014-02-25 | Modal and modeless dialog API |  | The Ui class can show modal or modeless dialogs with explicit dialog titles. |
| 2014-02-25 | Script state token API |  | ScriptApp can create state tokens for use in callback flows such as OAuth. |
| 2014-02-25 | ScriptApp.getOAuthToken() |  | ScriptApp.getOAuthToken() returns the script's OAuth 2.0 access token. |
| 2014-02-18 | Session.getActiveUserTimeZone() | 2014-02-18 | Session.getActiveUserTimeZone() returned the active user's time zone; deprecated on 2014-02-18. |
| 2014-01-27 | Legacy DocumentApp selection class names | 2014-01-27 | Older DocumentApp selection class and method names were replaced with Range and RangeElement naming; deprecated on 2014-01-27. |
| 2014-01-27 | Session locale and time zone API |  | Session can return the active user's locale and time zone. |
| 2014-01-21 | Spreadsheet.getUi() |  | Spreadsheet.getUi() gives scripts access to the spreadsheet user interface for menus, dialogs, and sidebars. |
| 2014-01-13 | Custom formula data validation in Google Sheets |  | Sheets data validation can use custom formulas through requireFormulaSatisfied and CUSTOM_FORMULA criteria. |
| 2014-01-13 | Spreadsheet anonymous access methods | 2014-01-13 | Several SpreadsheetApp.Spreadsheet methods controlled anonymous viewing and writing access; deprecated on 2014-01-13. |
| 2014-01-06 | Maps transit directions mode |  | Maps.DirectionFinder.Mode includes TRANSIT for retrieving public transit routes. |
| 2014-01-06 | UrlFetchApp advanced parameter escaping |  | UrlFetchApp.fetch() supports an advanced parameter to disable automatic escaping of reserved URL characters. |
| 2013-12-16 | Admin SDK Directory advanced service |  | Apps Script added an advanced service for the Admin SDK Directory API. |
| 2013-12-16 | Admin SDK Reports advanced service |  | Apps Script added an advanced service for the Admin SDK Reports API. |
| 2013-12-16 | Fusion Tables advanced service | December 3rd, 2019 | Apps Script Fusion Tables advanced service is deprecated and scheduled for full shutdown; Apps Script added an advanced service for the Fusion Tables API; deprecated on December 3rd, 2019. |
| 2013-12-16 | Google+ Domains advanced service |  | Apps Script added an advanced service for the Google+ Domains API. |
| 2013-12-16 | Mirror advanced service |  | Apps Script added an advanced service for the Mirror API. |
| 2013-12-16 | YouTube advanced service |  | Apps Script added an advanced service for the YouTube API. |
| 2013-12-16 | YouTube Analytics advanced service |  | Apps Script added an advanced service for the YouTube Analytics API. |
| 2013-12-02 | Document paragraph TITLE and SUBTITLE headings |  | DocumentApp.ParagraphHeading includes TITLE and SUBTITLE heading values. |
| 2013-11-18 | Utilities.jsonParse() and Utilities.jsonStringify() | 2013-11-18 | Utilities.jsonParse() and Utilities.jsonStringify() provided JSON parsing and serialization helpers before standard JavaScript JSON methods were preferred; deprecated on 2013-11-18. |
| 2013-10-08 | Custom closed-form message |  | FormApp can get and set a custom message shown when a form is closed. |
| 2013-10-08 | Form progress bar controls |  | FormApp can get and set whether a form shows a progress bar. |
| 2013-10-08 | Form video items |  | FormApp can add YouTube video items to forms. |
| 2013-09-23 | Drive file and folder owner retrieval |  | DriveApp can retrieve the owner of a file or folder. |
| 2013-09-16 | Drive iterator continuation tokens |  | DriveApp supports saving and resuming file and folder iterators with continuation tokens. |
| 2013-09-16 | HTML Service CSS3 support |  | HTML Service supports most CSS3 features within the Caja security sandbox. |
| 2013-09-16 | layout | 2013-09-16 | Several UiApp widgets were disabled, including Hyperlink, InlineHyperlink, LayoutPanel, and RichTextArea; deprecated on 2013-09-16. |
| 2013-09-16 | UiApp hyperlink | 2013-09-16 | Several UiApp widgets were disabled, including Hyperlink, InlineHyperlink, LayoutPanel, and RichTextArea; deprecated on 2013-09-16. |
| 2013-09-09 | DocumentApp section utility methods | 2013-09-09 | DocumentApp methods for footnotes, link URLs, document-end checks, and sibling navigation in header and footer sections were deprecated; deprecated on 2013-09-09. |
| 2013-09-09 | InlineImage link URL methods |  | Inline images in DocumentApp can now get and set hyperlink URLs. |
| 2013-09-03 | Drive file and folder access lists |  | Drive files and folders can now return their viewers and editors as User arrays. |
| 2013-09-03 | DriveApp folder search |  | DriveApp can now find folders by name and search folders by query parameters. |
| 2013-09-03 | Simple onEdit trigger user email access | 2013-09-03 | Simple onEdit triggers can no longer retrieve the user's email address; deprecated on 2013-09-03. |
| 2013-08-19 | Drive file copy to destination folder |  | DriveApp can now copy a file directly into a specified destination folder. |
| 2013-08-13 | Spreadsheet non-active sheet deletion |  | Spreadsheets can now delete sheets without making them the active sheet first. |
| 2013-08-05 | DocsList paginated listing methods | 2013-08-05 | DocsList methods that used start and max pagination arguments were deprecated in favor of DriveApp or paging-specific alternatives; deprecated on 2013-08-05. |
| 2013-08-05 | GmailMessage plain text body access |  | GmailMessage can now return message content without HTML formatting. |
| 2013-08-05 | Google Sheets data validation rules API |  | Apps Script can now programmatically control data-validation rules in Google Sheets. |
| 2013-07-29 | ChromeOS autocomplete keyboard shortcut |  | On ChromeOS devices, autocomplete in the script editor can now be activated with Ctrl+Space. |
| 2013-07-22 | Apps Script Dashboard service tracking for DriveApp and FormApp |  | The Apps Script Dashboard now tracks DriveApp and FormApp services. |
| 2013-07-09 | E4X support | 2013-07-09 | Support for the JavaScript E4X feature was deprecated; deprecated on 2013-07-09. |
| 2013-07-09 | SoapService | 2013-07-09 | SoapService was deprecated; deprecated on 2013-07-09. |
| 2013-07-09 | XmlService |  | XmlService was added as the replacement for the old Xml service. |
| 2013-06-17 | Drive file commenter management |  | The Drive Service can now add and remove commenters on files. |
| 2013-06-17 | GmailApp sent mail synchronization |  | Mail sent with GmailApp now appears in Gmail's Sent Mail folder. |
| 2013-05-13 | Container-bound scripts for Docs and Forms |  | Google Docs and Google Forms can now host bound scripts directly from their editors. |
| 2013-05-13 | Drive Service |  | Drive Service was added to create and modify files and folders in Google Drive. |
| 2013-05-13 | Editor UI extension APIs for Docs and Forms |  | DocumentApp and FormApp can now return a Ui object for adding menus, dialogs, and sidebars to editors. |
| 2013-05-13 | Form trigger builder |  | FormTriggerBuilder was added to let scripts respond to Google Forms events. |
| 2013-05-13 | Forms Service |  | Forms Service was added to create and modify Google Forms programmatically. |
| 2013-05-13 | HtmlService sandbox mode selection |  | HtmlService can now use setSandboxMode to enable a faster sandbox implementation. |
| 2013-05-13 | MimeType enum |  | The MimeType enum was added to provide named MIME type declarations. |
| 2013-05-13 | Simplified Apps Script authorization flow |  | Apps Script introduced a new authorization flow with fewer clicks and automatic Google Developers Console project creation. |
| 2013-05-09 | doPost request body access |  | The request object passed to doPost now includes the POST body through e.postData.getDataAsString(). |
| 2013-05-02 | Spreadsheet change events |  | Scripts can now respond to spreadsheet change events such as row insertions with onChange(). |
| 2013-04-22 | Sheet auto-resize column |  | Sheets can now automatically resize a column to fit its contents. |
| 2013-04-22 | Tree and TreeItem clear method |  | Tree and TreeItem objects can now remove all children with a clear() method. |
| 2013-04-22 | Tree lazy loading |  | The Tree class now supports lazy loading to reduce UI rendering wait times. |
| 2013-04-15 | UiApp panel layout widgets | 2013-04-15 | Several UiApp panel and layout widgets, including DeckPanel and DockPanel variants, were deprecated; deprecated on 2013-04-15. |
| 2013-04-01 | Sheet visibility controls |  | Sheets can now be hidden, shown, and checked for hidden state programmatically. |
| 2013-03-18 | UiApp hyperlink and rich input widgets | 2013-03-18 | Several UiApp widgets, including Hyperlink, InlineHyperlink, LayoutPanel, RichTextArea, and SuggestBox, were deprecated; deprecated on 2013-03-18. |
| 2013-03-11 | DocsList FORM file type |  | DocsList.FileType now includes FORM for accessing Google Forms files. |
| 2013-03-11 | Utilities.formatString |  | Utilities now supports printf-like placeholder substitution with formatString(). |
| 2013-02-14 | DocumentApp.openByUrl |  | Documents can now be opened directly by URL with DocumentApp.openByUrl(). |
| 2013-02-11 | StaticMap email attachments |  | StaticMap objects can now be attached directly to emails. |
| 2013-01-31 | SpreadsheetApp.openByUrl |  | Spreadsheets can now be opened directly by URL with SpreadsheetApp.openByUrl(). |
| 2013-01-24 | JDBC compliant timezone shift option |  | Jdbc.getConnection now supports the useJDBCCompliantTimezoneShift advanced argument for external databases. |
| 2013-01-24 | UiInstance mailto links |  | UiInstance.createAnchor now supports links that use the mailto scheme. |
| 2013-01-24 | UrlFetchApp followRedirects option |  | UrlFetchApp.fetch now accepts followRedirects as an advanced argument. |
| 2013-01-17 | ClockTriggerBuilder.after |  | ClockTriggerBuilder can now create one-off triggers more easily with after(durationMilliseconds). |
| 2012-12-11 | Chart datasource URL validation |  | Charts now apply extra validation to datasource URLs, blocking custom URLs that rely on non-Google authentication. |
| 2012-11-13 | SoapService SSL certificate validation control |  | SoapService can now disable SSL certificate validation when needed. |
| 2012-11-06 | EmbeddedChartBuilder chart type helpers |  | EmbeddedChartBuilder now provides chart-specific helper methods as easier alternatives to setChartType(). |
| 2012-10-26 | Chrome Web Store web app custom icon |  | Web apps published to the Chrome Web Store can now use a custom app icon. |
| 2012-10-26 | Gmail aliases and custom sender selection |  | GmailApp can now list alternate sender addresses and send email using a selected alias. |
| 2012-10-26 | GmailAttachment |  | The GmailAttachment class was added as a Blob-like type with a getSize() method that avoids quota restrictions. |
| 2012-10-26 | HtmlService dialog close API |  | HtmlService pages can now close their containing dialogs programmatically. |
| 2012-09-21 | CategoryFilterBuilder label separator |  | CategoryFilterBuilder can now specify label separator strings with setLabelSeparator(). |
| 2012-09-21 | DocsList.getFilesByType string arguments | 2012-09-21 | Passing string document types to DocsList.getFilesByType() was deprecated in favor of DocsList.FileType enum values; deprecated on 2012-09-21. |
| 2012-09-07 | SitesApp Page.isDeleted |  | SitesApp Page objects can now report whether they are deleted. |
| 2012-08-30 | Chart builder setOption |  | Chart builders can now set advanced chart options through setOption(). |
| 2012-08-30 | Properties service bulk management methods |  | ScriptProperties and UserProperties now support deletion, bulk set, and full retrieval operations. |
| 2012-08-20 | Logger formatted log method |  | Logger now supports a log method that accepts a format string and variable values. |
| 2012-08-20 | UiApp setStyleAttributes |  | UiApp widgets can now apply multiple style attributes at once with setStyleAttributes(). |
| 2012-08-03 | DocsList File.getThumbnail |  | DocsList File objects can now return a thumbnail image. |
| 2012-07-26 | Analytics Service |  | Apps Script added support for Google Analytics through the Analytics Service. |
| 2012-07-26 | Autocomplete for development-mode libraries |  | Autocomplete now works for included libraries when they are added in development mode. |
| 2012-07-26 | Script editor collaborator chat |  | The script editor now supports chat for people collaborating on a script. |
| 2012-07-26 | UiInstance.remove methods |  | UiInstance now provides remove methods to delete widgets from the UI. |
| 2012-06-27 | Chrome Web Store registration for Apps Script web apps |  | Apps Script web apps can now be registered in the Chrome Web Store for easier publishing and distribution. |
| 2012-06-27 | Content Service |  | Content Service was launched for serving text responses such as XML, RSS, JSON, and plain text. |
| 2012-06-27 | Html Service |  | Html Service was launched for building web apps with HTML, CSS, and JavaScript. |
| 2012-06-27 | ScriptDb | 2014-11-20 | ScriptDB was an Apps Script data storage service for scripts; ScriptDb was launched as a JavaScript object database for Apps Script; deprecated on 2014-11-20. |
| 2012-06-27 | Standalone scripts |  | Apps Script launched standalone scripts on script.google.com that are not bound to a container application. |
| 2012-06-27 | Web app deployment versioning and execute-as-user |  | Apps Script web apps can now be published with versioning and configured to execute as the accessing user. |
| 2012-06-14 | Domain Service nickname and group management |  | The Domain Service now supports NicknameManager and GroupsManager. |
| 2012-06-14 | Embedded Charts in Google Sheets |  | Apps Script can now create, modify, and remove embedded charts in Google Sheets. |
| 2012-05-21 | Drive file and folder descriptions |  | File and Folder objects can now get and set description metadata. |
| 2012-05-21 | Script Libraries and Versions |  | Apps Script launched reusable script libraries together with version management. |
| 2012-05-04 | DocumentApp horizontal alignment justify |  | DocumentApp.HorizontalAlignment now includes a JUSTIFY value. |
| 2012-04-19 | Script Service everyMinutes trigger scheduling |  | Script Service can now schedule triggers at minute intervals with everyMinutes(). |
| 2012-04-16 | DocsList.getRootFolder |  | DocsList now provides a method to retrieve the root folder. |
| 2012-04-16 | Drive trash state checks |  | File and Folder objects can now report whether an item is in the trash. |
| 2012-04-04 | Script Service |  | The Script service was launched for programmatically setting triggers and managing script publishing as a service. |
| 2012-03-13 | GmailMessage.forward subject option |  | GmailMessage.forward() can now set the subject line through advanced arguments. |
| 2012-03-07 | Limited HTML tags in UiApp widgets |  | UiApp widgets now support a limited set of embedded HTML tags. |
| 2012-03-07 | Spreadsheet sheet protection API |  | Sheets now support protection management through getSheetProtection, setSheetProtection, and PageProtection. |
| 2012-03-07 | UiApp anchor target control |  | UiApp can now set the target attribute for Anchor widgets. |
| 2012-02-12 | Document headers and footers API |  | Document objects can now add headers and footers programmatically. |
| 2012-02-12 | Range.merge |  | Spreadsheet ranges can now be merged with a merge() method. |
| 2012-02-06 | Calendar.getEventSeriesById |  | Calendar now supports retrieving an event series by its ID. |
| 2012-02-06 | Script execution cancellation from editor |  | Running scripts can now be canceled directly from the script editor. |
| 2012-01-24 | ListItem glyph type |  | ListItem supports setting list glyph types beyond numeric glyphs. |
| 2012-01-24 | ListItem nesting level |  | ListItem supports setting the nesting level of list items. |
| 2012-01-24 | TableCell width control |  | TableCell supports getting and setting cell width. |
| 2011-12-14 | AdSense service |  | Apps Script includes a service for working with AdSense. |
| 2011-12-14 | Domain service | 2014-12-11 | The Domain service exposed Google Apps domain administration functionality in Apps Script; The Domain service exposed Google Apps domain administration functionality in Apps Script; deprecated on 2014-12-11. |
| 2011-12-14 | Groups service |  | Apps Script includes a service for working with Google Groups. |
| 2011-12-14 | Revision History copy and paste |  | Revision History supports copying and pasting content. |
| 2011-12-14 | Spreadsheet.show autocomplete |  | Spreadsheet.show() is available in script editor autocomplete; Spreadsheet.show() is available in script editor autocomplete and documentation. |
| 2011-11-07 | Cache service |  | Apps Script includes a cache service for storing temporary data. |
| 2011-11-07 | Client handlers and validators |  | Apps Script supports client handlers and validators for UI interactions. |
| 2011-11-07 | Lock service |  | Apps Script includes a locking service for coordinating script execution. |
| 2011-09-26 | Charts service |  | Apps Script includes a charting service for creating charts and embedding or exporting them. |
| 2011-09-26 | MailApp inline images |  | MailApp.sendEmail() supports sending emails with inline images. |
| 2011-09-26 | Prediction service |  | Apps Script includes a prediction service for accessing hosted machine learning capabilities. |
| 2011-09-26 | Tasks service |  | Apps Script includes a service for managing tasks and task lists. |
| 2011-09-26 | URL Shortener service |  | Apps Script includes a service for creating and managing goo.gl short URLs. |
| 2011-08-04 | GUI Builder ScrollPanel support |  | GUI Builder supports the ScrollPanel component. |
| 2011-07-25 | Apps Script projects |  | Apps Script supports projects as a development unit. |
| 2011-05-04 | Document service |  | Apps Script includes a service for interacting with Google Docs documents. |
| 2011-05-04 | Gmail service |  | Apps Script includes a service for interacting with Gmail. |
| 2011-05-04 | GUI Builder | 2013-03-18 | The GUI Builder was deprecated; Apps Script includes a GUI Builder for creating user interfaces; deprecated on 2013-03-18. |
| 2011-04-15 | Spreadsheet appendRow |  | Spreadsheet supports appending rows with the appendRow() method. |
| 2011-03-21 | FileUpload binary file upload |  | FileUpload supports uploading binary files. |
| 2011-03-21 | ListBox multi-select |  | ListBox supports selecting multiple items. |
| 2011-03-08 | Utilities CSV parsing |  | Utilities includes a method for parsing CSV text. |
| 2010-10-21 | Google Sites integration |  | Apps Script can be run from within Google Sites. |
| 2010-10-16 | Recurring calendar events |  | Apps Script supports creating, accessing, modifying, and deleting recurring calendar event series. |
| 2010-09-17 | Calendar event metadata timestamps |  | CalendarEvent exposes creation and last-updated timestamps. |
| 2010-09-17 | Contact last updated timestamp |  | Contact exposes the date when a contact was last updated. |
| 2010-08-16 | Blob class |  | Apps Script includes a Blob class for moving data between services. |
| 2010-08-16 | Contact name fields |  | Contact supports getting and setting given, middle, family, maiden, and nickname fields. |
| 2010-08-16 | Outbound OAuth requests |  | Apps Script supports outbound OAuth requests through UrlFetchApp OAuth services. |
| 2010-08-16 | Revision history |  | The script editor provides revision history for scripts. |
| 2010-08-16 | Script and user properties |  | Apps Script supports persistent storage through ScriptProperties and UserProperties. |
| 2010-08-16 | Script editor find and replace |  | The script editor supports find and replace. |
| 2010-08-16 | Script timezone configuration |  | Scripts support configuring and viewing their timezone in the script editor and triggers dialog. |
| 2010-08-16 | Session active and effective user access |  | Session provides methods to retrieve the active user and effective user. |
| 2010-08-16 | Sites service enhancements |  | The Sites service gained additional functionality and issue fixes. |
| 2010-08-16 | Spreadsheet form URL access |  | Spreadsheet provides a method to retrieve the associated form URL. |
| 2010-08-16 | UiApp general availability |  | UiApp is available to all users rather than only Google Apps Premier domains. |
| 2010-08-16 | Utilities JSON support |  | Utilities provides methods for parsing and stringifying JSON. |
| 2010-08-01 | Sheet and Range sorting |  | Sheet and Range support sorting data. |
| 2010-08-01 | Sheet frozen rows and columns |  | Sheet supports retrieving the number of frozen rows and columns. |
| 2010-08-01 | Sheet row height and column width access |  | Sheet supports retrieving row heights and column widths. |

Source file slug: `apps-script.md`

