---
title: "abstract type Creative (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/ad-manager/api/reference/latest/CreativeService.Creative
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/reference/latest/CreativeService.Creative
  title: "abstract type Creative (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google\
    \ for Developers"
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
Reference
Send feedback
abstract type Creative (v202602)
Stay organized with collections
Save and categorize content based on your preferences.
Service
CreativeService
Dependencies
CreativePage
createCreatives()
updateCreatives()
▼
Creative
Inheritance
Creative
▼
BaseDynamicAllocationCreative
BaseRichMediaStudioCreative
ClickTrackingCreative
HasDestinationUrlCreative
Html5Creative
InternalRedirectCreative
LegacyDfpCreative
ProgrammaticCreative
TemplateCreative
ThirdPartyCreative
UnsupportedCreative
VastRedirectCreative
A Creative represents the media
for the ad being served.
Read more about creatives on the Ad Manager
Help Center .
Namespace
https://www.google.com/apis/ads/publisher/v202602
Field
advertiserId
xsd: long
The ID of the advertiser that owns the creative. This attribute is required.
id
xsd: long
Uniquely identifies the Creative . This value is read-only and is assigned by Google
when the creative is created. This attribute is required for updates.
name
xsd: string
The name of the creative. This attribute is required and has a maximum length of 255
characters.
size
Size
The Size of the creative. This attribute is required for creation and then is
read-only.
previewUrl
xsd: string
The URL of the creative for previewing the media. This attribute is read-only and is assigned
by Google when a creative is created.
policyLabels
CreativePolicyViolation []
Set of policy labels detected for this creative.
This attribute is read-only.
Enumerations
MALWARE_IN_CREATIVE
Malware was found in the creative.
For more information see here .
MALWARE_IN_LANDING_PAGE
Malware was found in the landing page.
For more information see here .
LEGALLY_BLOCKED_REDIRECT_URL
The redirect url contains legally objectionable content.
MISREPRESENTATION_OF_PRODUCT
The creative misrepresents the product or service being advertised.
For more information see here .
SELF_CLICKING_CREATIVE
The creative has been determined to be self clicking.
GAMING_GOOGLE_NETWORK
The creative has been determined as attempting to game the Google
network.
For more information see here .
DYNAMIC_DNS
The landing page for the creative uses a dynamic DNS.
For more information see here .
CIRCUMVENTING_SYSTEMS
The creative has been determined as attempting to circumvent Google advertising systems.
PHISHING
Phishing found in creative or landing page.
For more information see here .
DOWNLOAD_PROMPT_IN_CREATIVE
The creative prompts the user to download a file.
For more information see here
UNAUTHORIZED_COOKIE_DETECTED
The creative sets an unauthorized cookie on a Google domain.
For more information see here
TEMPORARY_PAUSE_FOR_VENDOR_INVESTIGATION
The creative has been temporarily paused while we investigate.
ABUSIVE_EXPERIENCE
The landing page contains an abusive experience.
For more information see here .
TRICK_TO_CLICK
The creative is designed to mislead or trick the user into
interacting with it.
For more information see here .
USE_OF_NON_ALLOWLISTED_OMID_VERIFICATION_SCRIPT
Non-allowlisted OMID verification script.
For more information see here .
MISUSE_OF_OMID_API
OMID sdk injected by creative.
< p>For more information see here .
UNACCEPTABLE_HTML_AD
Unacceptable HTML5 ad.
For more information see here .
UNKNOWN
The value returned if the actual value is not exposed by the requested API version.
appliedLabels
AppliedLabel []
The set of labels applied to this creative.
lastModifiedDateTime
DateTime
The date and time this creative was last modified.
customFieldValues
BaseCustomFieldValue []
CustomFieldValue
DropDownCustomFieldValue
The values of the custom fields associated with this creative.
thirdPartyDataDeclaration
ThirdPartyDataDeclaration
The third party companies associated with this creative.
This is distinct from any associated companies that Google may
detect programmatically.
thirdPartyDataDeclarationStatus
ThirdPartyDataDeclarationSt...
The status of the ThirdPartyDataDeclaration compared with
the set of third party companies detected during automated
scanning.
For example, if automated scanning detects more companies than
have been declared, this status will be ThirdPartyDataDeclarationStatus.INCOMPLETE .
Enumerations
UNKNOWN
The value returned if the actual value is not exposed by the requested API version.
INCOMPLETE
At least one detected ad technology provider wasn’t declared at the network level or on the
creative's ThirdPartyDataDeclaration .
COMPLETE
All detected ad technology providers have been declared, either at the network level or on the
creative's ThirdPartyDataDeclaration .
UNSCANNED
This entity has not been recently scanned.
There is either no scanning data for this creative, or the
scanning data is stale. This can happen if the creative is not
associated with any line items that are active or eligible to
serve.
adBadgingEnabled
xsd: boolean
Whether the creative has ad badging enabled.
Defaults to false for CreativeType.VAST_REDIRECT , CreativeType.THIRD_PARTY , CreativeType.AUDIO_VAST_REDIRECT ,
CreativeType.PROGRAMMATIC ,
CreativeType.DFP_MOBILE_CREATIVE ,
CreativeType.FLASH_OVERLAY ,
CreativeType.GRAPHICAL_INTERSTITIAL ,
CreativeType.LEGACY_DFP_CREATIVE ,
CreativeType.MOBILE_AD_NETWORK_BACKFILL ,
CreativeType.MOBILE_VIDEO_INTERSTITIAL ,
CreativeType.SDK_MEDIATION and
CreativeType.STANDARD_FLASH
creative types.
. Defaults to true for all other creative types.
selfDeclaredEuropeanUnionPoliticalContent
xsd: boolean
Whether the publisher has declared that the creative contains
European Union political content.
Support for this field will be rolled out gradually in Q3 2025.
Until then, setting this field will return an error with reason
FeatureError.Reason#MISSING_FEATURE .
Defaults to false for all creative types.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
