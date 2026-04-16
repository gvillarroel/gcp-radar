---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.609Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Ui.createAddonMenu()"
feature_slug: "ui-createaddonmenu"
latest_feature_date: "2014-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/add-ons/concepts/menus"
  - "https://developers.google.com/apps-script/guides/menus"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
keywords:
  - "ui"
  - "createaddonmenu"
  - "lets"
  - "scripts"
  - "add"
  - "submenu"
  - "ons"
  - "menu"
---

# Ui.createAddonMenu()

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Ui.createAddonMenu() lets scripts add a submenu to the Add-ons menu in Google Sheets or Docs.

## Extended Definition

Ui.createAddonMenu() lets scripts add a submenu to the Add-ons menu in Google Sheets or Docs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/add-ons/concepts/menus](https://developers.google.com/workspace/add-ons/concepts/menus)
- [https://developers.google.com/apps-script/guides/menus](https://developers.google.com/apps-script/guides/menus)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)

## Supporting Pages

### Menús personalizados para complementos del editor | Google Workspace Add-ons | Google for Developers

- URL: [https://developers.google.com/workspace/add-ons/concepts/menus](https://developers.google.com/workspace/add-ons/concepts/menus)
- Source ID: `feature-recovery-http`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Java es una marca registrada de Oracle o sus afiliados. Última actualización: 2026-04-01 (UTC) ¿Quieres brindar más información? [[["Fácil de comprender","easyToUnderstand","thumb-up"],["Resolvió mi problema","solvedMyProblem","thumb-up"],["Otro","otherUp","thumb-up"]],[["Falta la información que necesito","missingTheInformationINeed","thumb-down"],["Muy complicado o demasiados pasos","tooComplicatedTooManySteps","thumb-down"],["Desactualizado","outOfDate","thumb-down"],["Problema de traducción","translationIssue","thumb-down"],["Problema con las muestras o los códigos","samplesCodeIssue","thumb-down"],["Otro","otherDown","thumb-down"]],["Última actualización: 2026-04-01 (UTC)"],[],["Editor add-ons create custom menu items under the **Extensions** menu using `Ui.createAddonMenu()` and `Menu.addItem()`, typically within the `onOpen(e)` method.
- En el siguiente ejemplo, se muestra cómo compilar un menú de complementos dinámico para diferentes modos de autorización: function onOpen ( e ) { // Or DocumentApp, SlidesApp, or FormApp. var menu = SpreadsheetApp . getUi (). createAddonMenu (); if ( e && e . authMode == ScriptApp .
- Si deseas publicar el complemento, usa siempre Ui.createAddonMenu para definir el menú del complemento.
- Inserta un menú de complementos con Ui.createAddonMenu y agrégale elementos con Menu.addItem .

### Custom Menus in Google Workspace | Apps Script | Google for Developers

- URL: [https://developers.google.com/apps-script/guides/menus](https://developers.google.com/apps-script/guides/menus)
- Source ID: `feature-recovery-http`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Custom Menus in Google Workspace | Apps Script | Google for Developers Skip to main content Workspace Home Apps Script All products Google Workspace apps Admin console Cloud Search Gmail Google Calendar Google Chat Google Classroom Google Docs Google Drive Google Forms Google Keep Google Meet Google Sheets Google Sites Google Slides Google Tasks Google Vault Extend, automate & share Add-ons Apps Script Chat apps Drive apps Marketplace Resources Tools Admin console Apps Script dashboard Google Cloud console APIs Explorer Card Builder Training & support How to get started Codelabs Developer support Updates Release notes Developer Previews YouTube Newsletter X (Twitter) Blog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Apps Script Overview Guides Reference Samples Support Workspace Home Apps Script Overview Guides Reference Samples Support All products More Resources More Overview Apps Script dashboard Explore the development environment Script projects Manifests Scopes Deployments JSDoc Google Cloud projects Logging OAuth client verification Libraries Versions Collaboration Command line interface Apps Script runtimes V8 Runtime overview Migrate to the V8 runtime Bulk migrate identical scripts Google services and external APIs Built-in Google services Advanced Google services Authorization Authenticate using service accounts Connect to Google Cloud services External APIs Types of scripts Standalone Bound to Google Workspace documents Extend Google Workspace Google Docs Overview Work with tabs Google Sheets Overview Custom functions Macros Connected Sheets Google Slides Overview Structure of a presentation Size and position page elements Select items in a presentation Edit and style text Lifecycle of an update Menus, dialogs, and sidebars Custom Menus in Google Workspace Dialogs and sidebars in Google Workspace User interfaces Create and serve HTML Client-to-server communication Templated HTML Restrictions Migrate to IFRAME Web apps Best practices Store and serve data Script, user, and document properties External databases via JDBC Content service Admin management Assign permissions for Google Cloud projects Monitor and restrict data access Monitor and control Apps Script use View or edit Google Cloud projects Convert VBA Macros to Apps Script Overview Determine VBA compatibility Convert VBA macros to Apps Script Fix conversion errors Address common issues Watch video tutorials View list of compatible VBA APIs Use the REST API Introduction Quickstarts JavaScript Go Java Node.js Python Concepts Processes How To...
- For more information on the types of dialogs you can open, see the guide to dialogs and sidebars . function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp, SlidesApp or FormApp. ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menuItem1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menuItem2' )) . addToUi (); } function menuItem1 () { SpreadsheetApp . getUi () // Or DocumentApp, SlidesApp or FormApp. . alert ( 'You clicked the first menu item!' ); } function menuItem2 () { SpreadsheetApp . getUi () // Or DocumentApp, SlidesApp or FormApp. . alert ( 'You clicked the second menu item!' ); } A document, spreadsheet, presentation, or form can only contain one menu with a given name.
- Custom menus in Docs, Sheets, Slides, or Forms Apps Script can add new menus in Docs, Sheets, Slides, or Forms, with each menu item tied to a function in a script. (In Forms, custom menus are visible only to an editor who opens the form to modify it, not to a user who opens the form to respond.) Only bound scripts can create menus.
- Enable script authorization and access Manage script projects Manage script deployments Manage script versions View process information Execute a function Troubleshoot Troubleshoot authentication & authorization Google Workspace apps Admin console Cloud Search Gmail Google Calendar Google Chat Google Classroom Google Docs Google Drive Google Forms Google Keep Google Meet Google Sheets Google Sites Google Slides Google Tasks Google Vault Extend, automate & share Add-ons Apps Script Chat apps Drive apps Marketplace Tools Admin console Apps Script dashboard Google Cloud console APIs Explorer Card Builder Training & support How to get started Codelabs Developer support Updates Release notes Developer Previews YouTube Newsletter X (Twitter) Blog Home Google Workspace Apps Script Guides Send feedback Custom Menus in Google Workspace Stay organized with collections Save and categorize content based on your preferences.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- The following V8 example shows the use of object methods when constructing menu items in Google Sheets: function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp , SlidesApp , or FormApp . ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menu.item1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menu.item2' )) . addToUi (); } const menu = { item1 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: First item' ); }, item2 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: Second item' ); } } View logs Apps Script provides two logging services: the Logger service and the console class.
- The new runtime recognizes these function definition formats: function normalFunction () {} async function asyncFunction () {} function generatorFunction () {} var varFunction = function () {} let letFunction = function () {} const constFunction = function () {} var namedVarFunction = function alternateNameVarFunction () {} let namedLetFunction = function alternateNameLetFunction () {} const namedConstFunction = function alternateNameConstFunction () {} var varAsyncFunction = async function () {} let letAsyncFunction = async function () {} const constAsyncFunction = async function () {} var namedVarAsyncFunction = async function alternateNameVarAsyncFunction () {} let namedLetAsyncFunction = async function alternateNameLetAsyncFunction () {} const namedConstAsyncFunction = async function alternateNameConstAsyncFunction () {} var varGeneratorFunction = function () {} let letGeneratorFunction = function () {} const constGeneratorFunction = function () {} var namedVarGeneratorFunction = function alternateNameVarGeneratorFunction () {} let namedLetGeneratorFunction = function alternateNameLetGeneratorFunction () {} const namedConstGeneratorFunction = function alternateNameConstGeneratorFunction () {} var varLambda = () => {} let letLambda = () => {} const constLambda = () => {} var varAsyncLambda = async () => {} let letAsyncLambda = async () => {} const constAsyncLambda = async () => {} Call object methods from triggers and callbacks Scripts using V8 can call object methods and class static methods from places where you could already call library methods.
- V8 syntax examples The following is a short list of popular syntactical features available to scripts using the V8 runtime. let and const The let and const keywords allow you to define block scope local variables and block scope constants, respectively. // V8 runtime let s = "hello" ; if ( s === "hello" ) { s = "world" ; console . log ( s ); // Prints "world" } console . log ( s ); // Prints "hello" const N = 100 ; N = 5 ; // Results in TypeError Arrow functions Arrow functions provide a compact way of defining functions within expressions. // Rhino runtime function square ( x ) { return x x ; } console . log ( square ( 5 )); // Outputs 25 // V8 runtime const square = x => x x ; console . log ( square ( 5 )); // Outputs 25 // Outputs [ 1 , 4 , 9 ] console . log ([ 1 , 2 , 3 ] . map ( x => x x )); Classes Classes provide a means to conceptually organize code with inheritance.
- As with template literals, this syntax lets you avoid string concatenations and simplify string definitions. // Rhino runtime var multiline = "This string is sort of \n " + "like a multi-line string, \n " + "but it's not really one." ; // V8 runtime const multiline = This on the other hand , actually is a multi - line string , thanks to JavaScript ES6 ; V8 runtime limitations The Apps Script V8 runtime isn't a standard Node.js or browser environment.

