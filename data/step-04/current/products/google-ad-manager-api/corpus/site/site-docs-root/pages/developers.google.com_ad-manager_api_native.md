---
title: "Native Ads \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/native
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/native
  title: "Native Ads \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Looking for a REST API? The Ad Manager API (Beta) is now available.
Home
Products
Ad Manager
SOAP API
Send feedback
Native Ads
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Ad Manager's native advertising features can be used with the API, requiring an understanding of native advertising basics.
Native ad formats in the API are represented by CreativeTemplate , distinguishable by the isNativeEligible field.
Native creatives are TemplateCreatives linked to a native eligible CreativeTemplate , using 1x1 pixels as size with rendered size set via NativeStyle or custom rendering.
Native styles are created using the NativeStyleService , with API validation not performed on CSS and HTML snippets and supported targeting fields limited to inventoryTargeting and customTargeting .
To traffic a native ad, a LineItem's CreativePlaceholder should have a CreativeSizeType of NATIVE and specify the desired native ad format's creativeTemplateId .
Introduction
This guide details how to utilize Google Ad Manager's native advertising
features with the API. Before you begin, make sure you understand the basics of
native advertising with Ad
Manager.
Retrieve a native ad format
Native ad formats are represented by a
CreativeTemplate
in the Ad Manager API. To retrieve native formats from your network, use the
CreativeTemplateService .
To differentiate between creative templates and native ad formats, use the
isNativeEligible
field. When this field is true, the creative template represents a native ad
format.
Java
StatementBuilder statementBuilder = new StatementBuilder ()
. where ( "isNativeEligible = :isNativeEligible" )
. orderBy ( "id DESC" )
. limit ( StatementBuilder . SUGGESTED_PAGE_LIMIT )
. withBindVariableValue ( "isNativeEligible" , true );;
CreativeTemplatePage page = creativeTemplateService . getCreativeTemplatesByStatement (
statementBuilder . toStatement ());
View on GitHub
Python
query = 'WHERE isNativeEligible = :isNativeEligible'
values = [
{ 'key' : 'isNativeEligible' ,
'value' : {
'xsi_type' : 'BooleanValue' ,
'value' : 'true'
}},
]
statement = ad_manager . FilterStatement ( query , values )
response = creative_template_service . getCreativeTemplatesByStatement (
statement . ToStatement ())
View on GitHub
PHP
$pageSize = StatementBuilder::SUGGESTED_PAGE_LIMIT;
$statementBuilder = (new StatementBuilder())
->where('isNativeEligible = :isNativeEligible')
->orderBy('id ASC')
->limit($pageSize)
->withBindVariableValue('isNativeEligible', true);
$page = $creativeTemplateService->getCreativeTemplatesByStatement(
$statementBuilder->ToStatement());
View on GitHub
.NET
StatementBuilder statementBuilder = new StatementBuilder()
.Where("isNativeEligible = :isNativeEligible")
.OrderBy("id ASC")
.Limit(StatementBuilder.SUGGESTED_PAGE_LIMIT)
.AddValue("isNativeEligible", true);
CreativeTemplatePage page = creativeTemplateService.getCreativeTemplatesByStatement(
statementBuilder.ToStatement());
View on GitHub
Ruby
query = 'WHERE isNativeEligible = :isNativeEligible'
values = [
{
:key = > 'isNativeEligible' ,
:value = > {
:xsi_type = > 'BooleanValue' ,
:value = > 'true'
}
},
]
statement = AdManagerApi :: FilterStatement . new ( query , values )
page = creative_template_service . get_creative_templates_by_statement (
statement . toStatement ())
View on GitHub
Create a native creative
Native creatives are backed by
TemplateCreatives
in the Ad Manager API. They are not a distinct entity. To create native
creatives, create a TemplateCreative for a
CreativeTemplate
that is native eligible. The components of the native creative are stored in
CreativeTemplateVariable
objects.
Use 1x1 pixels as the size for native creatives. The size of the rendered ad can
be set on the
NativeStyle
or defined by custom rendering.
Java
// Use the system defined native app install creative template.
long nativeAppInstallTemplateId = 10004400L ;
// Use 1x1 as the size for native creatives.
Size size = new Size ();
size . setWidth ( 1 );
size . setHeight ( 1 );
size . setIsAspectRatio ( false );
TemplateCreative nativeAppInstallCreative = new TemplateCreative ();
nativeAppInstallCreative . setName ( "Native creative #" + new Random (). nextInt ( Integer . MAX_VALUE ));
nativeAppInstallCreative . setCreativeTemplateId ( nativeAppInstallTemplateId );
nativeAppInstallCreative . setSize ( size );
List<BaseCreativeTemplateVariableValue> templateVariables = Lists . newArrayList ();
// Set the star rating.
StringCreativeTemplateVariableValue starRatingVariableValue =
new StringCreativeTemplateVariableValue ();
starRatingVariableValue . setUniqueName ( "Starrating" );
starRatingVariableValue . setValue ( "4" );
templateVariables . add ( starRatingVariableValue );
View on GitHub
Python
# Use the system defined native app install creative template.
native_app_install_template_id = '10004400'
creative = {
'xsi_type' : 'TemplateCreative' ,
'name' : 'Native creative' ,
'creativeTemplateId' : native_app_install_template_id ,
'size' : { 'width' : 1 , 'height' : 1 , 'isAspectRatio' : false },
'creativeTemplateVariableValues' : [
{
'xsi_type' : 'StringCreativeTemplateVariableValue' ,
'uniqueName' : 'Starrating' ,
'value' : '4'
}
]
}
View on GitHub
PHP
// Use the system defined native app install creative template.
$nativeAppInstallTemplateId = 10004400;
// Use 1x1 as the size for native creatives.
$size = new Size();
$size->width = 1;
$size->height = 1;
$size->isAspectRatio = false;
$nativeAppInstallCreative = new TemplateCreative();
$nativeAppInstallCreative->name = 'Native creative #' . uniqid();
$nativeAppInstallCreative->creativeTemplateId = $nativeAppInstallTemplateId;
$nativeAppInstallCreative->size = $size;
$starRatingVariableValue = new StringCreativeTemplateVariableValue();
$starRatingVariableValue->uniqueName = 'Starrating';
$starRatingVariableValue->value = '4';
$nativeAppInstallCreative->creativeTemplateVariableValues[] =
$starRatingVariableValue;
View on GitHub
C#
// Use the system defined native app install creative template.
long nativeAppInstallTemplateId = 10004400L ;
TemplateCreative nativeAppInstallCreative = new TemplateCreative ();
nativeAppInstallCreative . name =
String . Format ( "Native creative #{0}" , new Random (). Next ( int . MaxValue ));
nativeAppInstallCreative . creativeTemplateId = nativeAppInstallTemplateId ;
// Use 1x1 as the size for native creatives.
Size size = new Size ();
size . width = 1 ;
size . height = 1 ;
size . isAspectRatio = false ;
nativeAppInstallCreative . size = size ;
List<BaseCreativeTemplateVariableValue> templateVariables =
new List<BaseCreativeTemplateVariableValue> ();
templateVariables . Add ( new StringCreativeTemplateVariableValue () {
uniqueName = "Starrating" ,
value = "4"
});
View on GitHub
Ruby
# Use the system defined native app install creative template.
creative_template_id = 10004400
creative = {
:xsi_type = > 'TemplateCreative' ,
:name = > "Native creative %d" % Time . new . to_i ,
:creative_template_id = > creative_template_id ,
:size = > { :width = > 1 , :height = > 1 , :is_aspect_ratio = > false }
}
starrating_variable_value = {
:xsi_type = > 'StringCreativeTemplateVariableValue' ,
:unique_name = > 'Starrating' ,
:value = > '4'
}
creative [ :creative_template_variable_values ] = [
starrating_variable_value
]
View on GitHub
Create a native style
Native styles can be created using the
NativeStyleService .
Currently, the API does not perform validation on the CSS and HTML snippets you
provide. When setting the targeting information, the only supported fields are
inventoryTargeting
and
customTargeting .
Java
long nativeAppInstallTemplateId = 10004400L ;
// Create a native style for native app install ads.
NativeStyle nativeStyle = new NativeStyle ();
nativeStyle . setName ( "Native style #" + new Random (). nextInt ( Integer . MAX_VALUE ));
nativeStyle . setCreativeTemplateId ( nativeAppInstallTemplateId );
nativeStyle . setSize ( size );
nativeStyle . setHtmlSnippet ( htmlSnippet );
nativeStyle . setCssSnippet ( cssSnippet );
View on GitHub
Python
native_app_install_template_id = '10004400'
# Create a style for native app install ads.
native_style = {
'name' : 'Native style # %d ' % uuid . uuid4 (),
'htmlSnippet' : html_snippet ,
'cssSnippet' : css_snippet ,
'creativeTemplateId' : native_app_install_template_id ,
'size' : {
'width' : width ,
'height' : height ,
'isAspectRatio' : False
}
}
View on GitHub
PHP
$nativeAppInstallTemplateId = 10004400;
// Create a style for native app install ads.
$nativeStyle = new NativeStyle();
$nativeStyle->setName('Native style #'. uniqid());
$nativeStyle->setCreativeTemplateId($nativeAppInstallTemplateId);
$nativeStyle->setSize($size);
$nativeStyle->setHtmlSnippet($htmlSnippet);
$nativeStyle->setCssSnippet($cssSnippet);
View on GitHub
C#
long nativeAppInstallTemplateId = 10004400L ;
// Create a style for native app install ads.
NativeStyle nativeStyle = new NativeStyle ();
nativeStyle . name = string . Format ( "Native style #{0}" , new Random (). Next ());
nativeStyle . creativeTemplateId = nativeAppInstallTemplateId ;
nativeStyle . size = size ;
nativeStyle . htmlSnippet = htmlSnippet ;
nativeStyle . cssSnippet = cssSnippet ;
View on GitHub
Ruby
native_app_install_template_id = 10004400
# Create a style for native app install ads.
native_style = {
:name = > 'Native style #%d' % ( Time . new . to_f * 1000 ),
:html_snippet = > html_snippet ,
:css_snippet = > css_snippet ,
:creative_template_id = > native_app_install_template_id ,
:size = > size
}
View on GitHub
If the style is for a fluid size, set the
isFluid
field to true and set the
size
as 1x1 pixels.
Traffic a native ad
When creating a
LineItem for a
native ad, the
CreativePlaceholder
should set a
CreativeSizeType
type of NATIVE , and set the
creativeTemplateId
of the desired native ad format.
Java
// Create creative placeholder size.
Size size = new Size ();
size . setWidth ( 1 );
size . setHeight ( 1 );
size . setIsAspectRatio ( false );
long nativeAppInstallTemplateId = 10004400L ;
// Create the creative placeholder.
CreativePlaceholder creativePlaceholder = new CreativePlaceholder ();
creativePlaceholder . setSize ( size );
creativePlaceholder . setCreativeTemplateId ( nativeAppInstallTemplateId );
creativePlaceholder . setCreativeSizeType ( CreativeSizeType . NATIVE );
Python
native_app_install_template_id = '10004400'
# Create the creative placeholder.
creative_placeholder = {
'size' : {
'width' : '1' ,
'height' : '1'
},
'creativeTemplateId' : native_app_install_template_id ,
'creativeSizeType' : 'NATIVE'
}
PHP
$nativeAppInstallTemplateId = 10004400;
// Create the creative placeholder.
$creativePlaceholder = new CreativePlaceholder();
$creativePlaceholder->setSize(new Size(1, 1, false));
$creativePlaceholder->setCreativeTemplateId($nativeAppInstallTemplateId);
$creativePlaceholder->setCreativeSizeType(CreativeSizeType::NATIVE);
C#
// Create the creative placeholder size.
Size size = new Size ();
size . width = 1 ;
size . height = 1 ;
size . isAspectRatio = false ;
long nativeAppInstallTemplateId = 10004400L ;
// Create the creative placeholder.
CreativePlaceholder creativePlaceholder = new CreativePlaceholder ();
creativePlaceholder . size = size ;
creativePlaceholder . creativeTemplateId = nativeAppInstallTemplateId ;
creativePlaceholder . creativeSizeType = CreativeSizeType . NATIVE ;
Ruby
# Create the creative placeholder.
creative_placeholder = {
:size = > { :width = > 1 , :height = > 1 , :is_aspect_ratio = > false },
:creative_template_id = > 10004400 ,
:creative_size_type = > 'NATIVE'
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["This guide outlines how to use Google Ad Manager's API for native advertising. Key actions include: retrieving native ad formats using `CreativeTemplateService` and the `isNativeEligible` field, creating native creatives as `TemplateCreatives` with `CreativeTemplateVariable` objects and a 1x1 pixel size, and building native styles via `NativeStyleService` with HTML/CSS snippets. Lastly, when creating a `LineItem`, set `CreativeSizeType` to `NATIVE` and specify the `creativeTemplateId`. Code examples are provided in Java, Python, PHP, C#, and Ruby.\n"]]
