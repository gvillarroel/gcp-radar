---
title: "Best practices for protection from automated threats \_|\_ reCAPTCHA \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/best-practices-oat
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/best-practices-oat
  title: "Best practices for protection from automated threats \_|\_ reCAPTCHA \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
reCAPTCHA
Guides
Send feedback
Best practices for protection from automated threats
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the recommended implementations of reCAPTCHA and
fraud mitigation strategies to defend against the critical automated
threats ( OWASP Automated Threats (OAT) to Web Applications ).
Enterprise architects and technology stakeholders can review this information
to make an informed decision about the reCAPTCHA
implementation and fraud mitigation strategy for their use case.
This document contains the following information for each type of threat:
Optimal implementation of reCAPTCHA. This implementation is
designed with the relevant features of reCAPTCHA for the best
fraud protection.
Minimal implementation of reCAPTCHA. This implementation is
designed for a bare minimum of fraud protection.
Recommended fraud mitigation strategies.
Choose the implementation and fraud mitigation strategy that best fits your use case.
The following factors might influence the implementation and fraud mitigation
strategy that you choose:
Organization's anti-fraud needs and capabilities.
Organization's existing environment.
Note: We recommend choosing either the optimal implementation or minimal implementation
depending on your organization's anti-fraud needs.
For more information about the fraud mitigation strategies for your use case,
contact our sales team .
Carding
Carding is an automated threat where attackers make multiple payment authorization
attempts to verify the validity of bulk-stolen payment card data.
Minimum implementation
Install checkbox site keys on all pages where end users need to enter their
credit card information.
To learn how to install checkbox site keys, see Install checkbox site keys (checkbox challenge) on websites .
Note: Checkbox site keys increase user friction and might affect conversion rates.
Create assessments for all tokens.
To learn how to create assessments, see Create an assessment .
Optimal implementation
Install score-based site keys on all pages where end users need to enter their
credit card information. Specify an action in the action parameter such as card_entry .
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Install reCAPTCHA for the payment workflow on your website. To learn how to protect
your payment workflow, see Protect payment workflows .
Create assessments for all tokens, and set expectedAction to match the value of action
that you specified when installing the score-based site keys.
To learn how to create assessments, see Create an assessment .
Save all assessment IDs and annotate the assessments that turn into fraudulent
purchases or chargebacks as fraudulent .
To learn how to annotate assessments, see Annotate an assessment .
Fraud mitigation strategy
After you implement reCAPTCHA, use one of the following
fraud mitigation strategies to protect your website from carding:
Install reCAPTCHA for the payment workflow on your website. To learn how to protect
your payment workflow, see Protect payment workflows .
Configure card management APIs to ensure that the reCAPTCHA tokens are valid
and the scores are greater than their threshold value.
If the scores do not meet or exceed the specified threshold value, do not run a
card authorization or allow the end user to use the card.
When possible, allow the transaction to proceed at time of purchase, but cancel the transaction
later to avoid tipping off the attacker.
When creating assessments, ensure that your assessments meet the following criteria for a successful transaction:
All assessed tokens are valid and have a score greater than a specified threshold value.
The value of expectedAction matches the value of action that you specified when
installing the score-based site keys on your web pages.
To learn how to verify actions, see
verify actions .
If a transaction does not meet these criteria, do not run a card authorization
or allow the end user to use the card.
When possible, allow the transaction to proceed at time of purchase, but cancel the transaction
later to avoid tipping off the attacker.
Card cracking
Card cracking is an automated threat where attackers identify missing values for start date,
expiration date, and security codes for stolen payment card data by trying different values.
Minimum implementation
Install checkbox site keys on all pages where end users need to enter their
payment details, including both checkout and add payment method functions.
To learn how to install checkbox site keys, see Install checkbox site keys (checkbox challenge) on websites .
Note: Checkbox site keys increase user friction and might affect conversion rates.
Create assessments for all tokens.
To learn how to create assessments, see Create an assessment .
Optimal implementation
Install score-based site keys on all pages where end users need to enter their
payment details. Specify an action in the action parameter such as checkout or add_pmtmethod .
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Install reCAPTCHA for the payment workflow on your website. To learn how to protect
your payment workflow, see Protect payment workflows .
Create assessments for all tokens, and set expectedAction to match the value of action
that you specified when installing the score-based site keys.
To learn how to create assessments, see Create an assessment .
Save all assessment IDs and annotate the assessments that turn into fraudulent
purchases or chargebacks as fraudulent .
To learn how to annotate assessments, see Annotate an assessment .
Fraud mitigation strategy
After you implement reCAPTCHA, use one of the following fraud mitigation
strategies to protect your website from card cracking:
Install reCAPTCHA for the payment workflow on your website. To learn how to protect
your payment workflow, see Protect payment workflows .
Implement a response model and create assessments:
Create and implement a response model that is adjusted for score-based risk.
The following example shows a sample response model:
For low to intermediate score threshold (0.0-0.5), use context-based risk management, such as
limiting the number of attempts, and blocking purchases over a specified value.
For the highest score threshold (> 0.5), allow the end user to proceed without
any challenge.
Note: Your score thresholds might vary depending on your users and attackers.
We recommend using the reCAPTCHA analytics dashboard to determine
the best scores to take action on.
When creating assessments, ensure that the value of expectedAction matches the value of action that you specified when
installing the score-based site keys on your web pages.
If they do not match, do not run a card authorization
or allow the end user to use the card.
When possible, allow the transaction to proceed at time of purchase, but cancel the transaction
later to avoid tipping off the attacker.
Credential cracking
Credential cracking is an automated threat where attackers identify valid login
credentials by trying different values for usernames and passwords.
Minimum implementation
Install checkbox site keys on all pages where end users need to enter their credentials,
including both login and forgot my password functions.
To learn how to install checkbox site keys, see Install checkbox site keys (checkbox challenge) on websites .
Note: Checkbox site keys increase user friction and might affect conversion rates.
Create assessments for all tokens.
To learn how to create assessments, see Create an assessment .
Optimal implementation
Install score-based site keys on all pages where end users need to enter their credentials.
Specify an action in the action parameter such as login or authenticate .
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Recommended: Implement reCAPTCHA Password defense for all
authentication attempts.
To learn how to use Password defense, see Detect password leaks and breached credentials .
Optional: To enable blocking of high-volume and low-reCAPTCHA score interactions, integrate reCAPTCHA with a web application firewall (WAF).
For example, you can use reCAPTCHA for WAF and Google Cloud Armor integration .
Implement reCAPTCHA account defender to trend end-user
behavior across logins and receive additional signals that can indicate an
ATO.
To learn how to use reCAPTCHA account defender, see Detect and prevent account-related fraudulent activities .
Create assessments for all tokens, and set expectedAction to match the value of action
that you specified when installing the score-based site keys.
To learn how to create assessments, see Create an assessment .
Save all Assessment IDs and annotate the assessment that appears fraudulent,
such as Account Takeovers (ATOs) or any other fraudulent activity.
To learn how to annotate assessments, see Annotate an assessment .
Fraud mitigation strategy
After you implement reCAPTCHA, use the following fraud mitigation
strategy to protect your website from credential cracking:
Create and implement a response model that is adjusted for score-based risk.
The following example shows a sample response model:
For low to intermediate score threshold (0.0-0.5), challenge the end user with multi-factor
authentication through email or SMS.
For the highest score threshold (> 0.5), allow the end user to proceed without
any challenge.
Note: Your score thresholds might vary depending on your users and attackers.
We recommend using the reCAPTCHA analytics dashboard to determine
the best scores to take action on.
End or interrupt sessions for end users who successfully authenticate but
receive a credentialsLeaked: true response from reCAPTCHA
Password defense, and send an email to the end users to change their
password.
When creating assessments, ensure that the value of expectedAction matches the value of action that you specified when
installing the score-based site keys on your web pages.
If they do not match, do not permit authentication.
Credential stuffing
Credential stuffing is an automated threat where attackers use mass log-in
attempts to verify the validity of stolen username/password pairs.
Minimum implementation
Install checkbox site keys on all pages where end users need to enter their credentials,
including both login and forgot my password functions.
To learn how to install checkbox site keys, see Install checkbox site keys (checkbox challenge) on websites .
Note: Checkbox site keys increase user friction and might affect conversion rates.
Create assessments for all tokens.
To learn how to create assessments, see Create an assessment .
Optimal implementation
Install score-based site keys on all pages where end users need to enter their credentials.
Specify an action in the action parameter such as login or authenticate .
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Recommended: Implement reCAPTCHA Password defense for all
authentication attempts.
To learn how to use Password defense, see Detect password leaks and breached credentials .
Implement reCAPTCHA account defender to trend end-user
behavior across logins and receive additional signals that can indicate an
ATO.
To learn how to use reCAPTCHA account defender, see Detect and prevent account-related fraudulent activities .
Optional: To enable blocking of high-volume and low-reCAPTCHA score interactions, integrate reCAPTCHA with a web application firewall (WAF).
For example, you can use reCAPTCHA for WAF and Google Cloud Armor integration .
Create assessments for all tokens, and set expectedAction to match the value of action
that you specified when installing the score-based site keys.
To learn how to create assessments, see Create an assessment .
Save all assessment IDs and annotate the assessments that turn into fraudulent
purchases or chargebacks as fraudulent .
To learn how to annotate assessments, see Annotate an assessment .
Fraud mitigation strategy
After you implement reCAPTCHA, use the following fraud mitigation
strategy to protect your website from credential stuffing:
Create and implement a response model that is adjusted for score-based risk.
The following example shows a sample response model:
For the lowest reCAPTCHA score threshold (0.0), inform the end user that their password is incorrect.
For the intermediate score threshold (0.1-0.5), challenge the end user with multi-factor
authentication through email or SMS.
For the highest score threshold (> 0.5), allow the end user to proceed without
any challenge.
Note: Your score thresholds might vary depending on your users and attackers.
We recommend using the reCAPTCHA analytics dashboard to determine
the best scores to take action on.
End or interrupt sessions for end users who successfully authenticate but
receive a credentialsLeaked: true response from reCAPTCHA
Password defense, and send an email to the end users to change their
password.
When creating assessments, ensure that the value of expectedAction matches the value of action that you specified when
installing the score-based site keys on your web pages.
If they do not match, do not permit authentication.
In your assessment, if accountDefenderAssessment = PROFILE_MATCH ,
allow the end user to proceed without any challenge.
Cashing out
Cashing out is an automated threat where attackers obtain currency or high value
items through the utilization of stolen, previously validated payment cards.
Minimum implementation
Install score-based site keys on all pages where checkout is possible.
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Create assessments for all tokens.
To learn how to create assessments, see Create an assessment .
Optimal implementation
Install score-based site keys on all pages where end users enter their gift card
information. Specify an action such as add_gift_card .
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Create assessments for all tokens, and set expectedAction to match the value of action
that you specified when installing the score-based site keys.
To learn how to create assessments, see Create an assessment .
Save all assessment IDs and annotate the transactions that were fraudulent.
Fraud mitigation strategy
After you implement reCAPTCHA, use the following fraud mitigation
strategy to protect your website from cashing out:
Install reCAPTCHA for the payment workflow on your website. To learn how to protect
your payment workflow, see Protect payment workflows .
Implement a response model and create assessments:
Create and implement a response model that is adjusted for score-based risk.
The following example shows a sample response model:
For low to intermediate score threshold (0.0-0.5), use context-based risk management, such as
limiting the number of attempts, and blocking purchases over a specified value.
For the highest score threshold (> 0.5), allow the end user to proceed without
any challenge.
Note: Your score thresholds might vary depending on your users and attackers.
We recommend using the reCAPTCHA analytics dashboard to determine
the best scores to take action on.
When creating assessments, ensure that the value of expectedAction matches the value of action that you specified when
installing the score-based site keys on your web pages.
If they do not match, do not permit authentication.
When possible, allow the transaction to proceed at time of purchase, but cancel the transaction
later to avoid tipping off the attacker.
Account creation
Account creation is an automated threat where attackers create multiple accounts
for subsequent misuse.
Minimum implementation
Install checkbox site keys on all pages where end users need to enter their credentials,
including both login and forgot my password functions.
To learn how to install checkbox site keys, see Install checkbox site keys (checkbox challenge) on websites .
Note: Checkbox site keys increase user friction and might affect conversion rates.
Create assessments for all tokens.
To learn how to create assessments, see Create an assessment .
Optimal implementation
Install score-based site keys on all pages where accounts are created.
Specify an action in the action parameter such as register .
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Recommended: Implement reCAPTCHA Password defense for all
authentication attempts.
To learn how to use Password defense, see Detect password leaks and breached credentials .
Implement reCAPTCHA account defender to receive additional
signals that indicate fake account creations.
To learn how to use reCAPTCHA account defender, see Detect and prevent account-related fraudulent activities .
Optional: To enable blocking of high-volume and low-reCAPTCHA score interactions, integrate reCAPTCHA with a web application firewall (WAF).
For example, you can use reCAPTCHA for WAF and Google Cloud Armor integration .
Create assessments for all tokens, and set expectedAction to match the value of action
that you specified when installing the score-based site keys.
To learn how to create assessments, see Create an assessment .
Save all assessment IDs and annotate the transactions that were fraudulent.
Fraud mitigation strategy
After you implement reCAPTCHA, use the following fraud mitigation
strategy to protect your website from account creation:
Create and implement a response model that is adjusted for score-based risk.
The following example shows a sample response model:
For the lowest reCAPTCHA score threshold (0.0), limit the actions of the account until it undergoes further fraud checks.
For the intermediate score threshold (0.1-0.5), challenge the end user with multi-factor authentication through email or SMS.
For the highest score threshold (> 0.5), allow the end user to proceed without
any challenge.
Note: Your score thresholds might vary depending on your users and attackers.
We recommend using the reCAPTCHA analytics dashboard to determine
the best scores to take action on.
End or interrupt sessions for end users who successfully authenticate but
receive a credentialsLeaked: true response from reCAPTCHA
Password defense, and prompt the user to select a new password.
When creating assessments, ensure that the value of expectedAction matches the value of action that you specified when
installing the score-based site keys on your web pages.
If they do not match, do not permit account registration or
account creation.
In your assessment, if accountDefenderAssessment = SUSPICIOUS_ACCOUNT_CREATION ,
restrict the account's access until further validation can be performed.
Fraudulent account and address changes
Attackers might attempt to change account details, including email addresses,
phone numbers, or mailing addresses as part of fraudulent activity or
account takeovers.
Minimum implementation
Install checkbox site keys on all pages where end users need to enter their credentials,
including both login and forgot my password functions.
To learn how to install checkbox site keys, see Install checkbox site keys (checkbox challenge) on websites .
Note: Checkbox site keys increase user friction and might affect conversion rates.
Create assessments for all tokens.
To learn how to create assessments, see Create an assessment .
Optimal implementation
Install score-based site keys on all pages where accounts are created.
Specify an action in the action parameter such as change_telephone or
change_physicalmail .
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Create assessments for all tokens, and set expectedAction to match the value of action
that you specified when installing the score-based site keys.
To learn how to create assessments, see Create an assessment .
Implement reCAPTCHA account defender to trend end-user
behavior across logins and receive additional signals that can indicate an
ATO.
To learn how to use reCAPTCHA account defender, see Detect and prevent account-related fraudulent activities .
Save all assessment IDs and annotate the transactions that were fraudulent.
Fraud mitigation strategy
After you implement reCAPTCHA, use the
following fraud mitigation strategy to protect your website from fraudulent
account and address changes:
Create and implement a response model that is adjusted for score-based risk.
The following example shows a sample response model:
For low to intermediate score threshold (0.0-0.5), challenge the end user with multi-factor
authentication through email or SMS.
For the highest score threshold (> 0.5), allow the end user to proceed without
any challenge.
Note: Your score thresholds might vary depending on your users and attackers.
We recommend using the reCAPTCHA analytics dashboard to determine
the best scores to take action on.
When creating assessments, ensure that the value of expectedAction matches the value of action that you specified when
installing the score-based site keys on your web pages.
If they do not match, do not permit account changes.
In your assessment, if accountDefenderAssessment does not have the
PROFILE_MATCH label, challenge the end user with multi-factor authentication
through email or SMS.
Token cracking
Token cracking is an automated threat where attackers do mass enumeration of
coupon numbers, voucher codes, discount tokens.
Minimum implementation
Install checkbox site keys on all pages where end users need to enter their
gift card information.
To learn how to install checkbox site keys, see Install checkbox site keys (checkbox challenge) on websites .
Note: Checkbox site keys increase user friction and might affect conversion rates.
Create assessments for all tokens.
To learn how to create assessments, see Create an assessment .
Optimal implementation
Install score-based site keys on all pages where end users need to enter their
gift card information. Specify an action such as gift_card_entry .
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Optional: To enable blocking of high-volume and low-reCAPTCHA score interactions, integrate reCAPTCHA with a web application firewall (WAF).
For example, you can use reCAPTCHA for WAF and Google Cloud Armor integration .
Create assessments for all tokens, and set expectedAction to match the value of action
that you specified when installing the score-based site keys.
To learn how to create assessments, see Create an assessment .
Save all assessment IDs and annotate the assessments that turn into fraudulent
gift cards or coupons.
Fraud mitigation strategy
After you implement reCAPTCHA, use one of the following fraud
mitigation strategies to protect your website from token cracking:
Configure card management APIs to ensure that the reCAPTCHA tokens are valid
and the scores are greater than their threshold value.
If the scores do not meet or exceed the specified threshold, do not run a
gift card or credit card authorization, or allow the end user to use the
coupon, gift card.
When possible, allow the transaction to proceed at time of purchase, but cancel the transaction
later to avoid tipping off the attacker.
When creating assessments, ensure that your assessments meet the following criteria for a successful transaction:
All assessed tokens are valid and have a score greater than a specified threshold value.
The value of expectedAction matches the value of action that you specified when
installing the score-based site keys on your web pages.
To learn how to verify actions, see
verify actions .
If a transaction does not meet these criteria, do not run a
gift card or credit card authorization, or allow the end user to use the
coupon or gift card.
When possible, allow the transaction to proceed at time of purchase, but cancel the transaction
later to avoid tipping off the attacker.
Scalping
Scalping is an automated threat where attackers obtain limited-availability
and preferred goods or services by unfair methods.
Minimum implementation
Install score-based site keys on all pages where end users need to enter
their gift card information. Specify an action in the action parameter such as add_to_cart .
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Create assessments for all tokens, and set expectedAction to match the value of action
that you specified when installing the score-based site keys.
To learn how to create assessments, see Create an assessment .
Optimal implementation
Install score-based site keys on all pages where end users need to enter
their gift card information. Specify an action in the action parameter such as add_to_cart .
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Optional: To enable blocking of high-volume and low-reCAPTCHA score interactions, integrate reCAPTCHA with a web application firewall (WAF).
For example, you can use reCAPTCHA for WAF and Google Cloud Armor integration .
Create assessments for all tokens, and set expectedAction to match the value of action
that you specified when installing the score-based site keys.
To learn how to create assessments, see Create an assessment .
Save all assessment IDs and annotate the transactions that were fraudulent.
Fraud mitigation strategy
After you implement reCAPTCHA, use the following fraud mitigation
strategy to protect your website from scalping:
Create and implement a response model that is adjusted for score-based risk.
The following example shows a sample response model:
For low to intermediate score threshold (0.0-0.5), use context-based risk management, such as
limiting the number of attempts, and blocking purchases over a specified value.
For the highest score threshold (> 0.5), allow the end user to proceed without
any challenge.
Note: Your score thresholds might vary depending on your users and attackers.
We recommend using the reCAPTCHA analytics dashboard to determine
the best scores to take action on.
When creating assessments, ensure that the value of expectedAction matches the value of action that you specified when
installing the score-based site keys on your web pages.
If they do not match, do not
run the gift card authorization.
Skewing
Skewing is an automated threat where attackers use repeated link clicks, page
requests, or form submissions to alter some metric.
Minimum implementation
Install score-based site keys on all pages where metric skewing is possible.
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Create assessments for all tokens.
To learn how to create assessments, see Create an assessment .
Optimal implementation
Install score-based site keys on all pages where metric skewing is possible.
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Optional: To enable blocking of high-volume and low-reCAPTCHA score interactions, integrate reCAPTCHA with a web application firewall (WAF).
For example, you can use reCAPTCHA for WAF and Google Cloud Armor integration .
Create assessments for all tokens, and set expectedAction to match the value of action
that you specified when installing the score-based site keys.
To learn how to create assessments, see Create an assessment .
Save all assessment IDs and annotate the transactions that were fraudulent.
Fraud mitigation strategy
After you implement reCAPTCHA, use the following fraud mitigation
strategy to protect your website from skewing:
Create and implement a response model that is adjusted for score-based risk.
The following example shows a sample response model:
For low to intermediate score threshold (0.0-0.5), use context-based risk management, such as
tracking the number of times a user has clicked an ad, or number of times a user has
reloaded the page. Use this data to determine whether to count the metric.
For the highest score threshold (> 0.5), allow the end user to proceed without
any challenge.
Note: Your score thresholds might vary depending on your users and attackers.
We recommend using the reCAPTCHA analytics dashboard to determine
the best scores to take action on.
Scraping
Scraping is an automated threat where attackers collect website data or artifacts
in an automated way.
Minimum implementation
Install score-based site keys on all pages where important information resides and on key common
end-user interaction pages.
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Create assessments for all tokens.
To learn how to create assessments, see Create an assessment .
Optimal implementation
Install score-based site keys on all pages where important information resides and on key common
end-user interaction pages.
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Optional: To enable blocking of high-volume and low-reCAPTCHA score interactions, integrate reCAPTCHA with a web application firewall (WAF).
For example, you can use reCAPTCHA for WAF and Google Cloud Armor integration .
Create assessments for all tokens.
To learn how to create assessments, see Create an assessment .
Save all assessment IDs and annotate the transactions that were fraudulent.
Fraud mitigation strategy
After you implement reCAPTCHA, use the following fraud mitigation
strategies to protect your website from scraping:
Enable blocking of high-volume and low-reCAPTCHA score interactions by integrating reCAPTCHA with a web application firewall (WAF).
For example, you can use reCAPTCHA for WAF and Google Cloud Armor integration
If scraping involves APIs, use the Apigee Management APIs
for additional mitigation.
CAPTCHA defeat
CAPTCHA defeat is an automated threat where attackers use automation in an
attempt to analyze and determine the answer to visual and/or aural CAPTCHA
tests and related puzzles.
Minimum implementation
Install score-based site keys on all pages that involve end-user input,
account creation, payment information, or end-user interactions with the
potential for fraud. Specify a descriptive action in the action parameter.
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Create assessments for all tokens, and set expectedAction to match the value of action
that you specified when installing the score-based site keys.
To learn how to create assessments, see Create an assessment .
Optimal implementation
Install score-based site keys on all pages that involve end-user input,
account creation, payment information, or end-user interactions with the
potential for fraud. Specify a descriptive action in the action parameter.
To learn how to install score-based site keys, see Install score-based site keys (no challenge) on websites .
Optional: To enable blocking of high-volume and low-reCAPTCHA score interactions, integrate reCAPTCHA with a web application firewall (WAF).
For example, you can use reCAPTCHA for WAF and Google Cloud Armor integration .
Create assessments for all tokens, and set expectedAction to match the value of action
that you specified when installing the score-based site keys.
To learn how to create assessments, see Create an assessment .
Save all assessment IDs and annotate the assessments that turn into fraudulent
purchases or chargebacks as fraudulent .
To learn how to annotate assessments, see Annotate an assessment .
Fraud mitigation strategy
After you implement reCAPTCHA, use one of the following fraud
mitigation strategies to protect your website from CAPTCHA defeat:
Implement a response model and create assessments:
Create and implement a response model that is adjusted for score-based risk.
The following example shows a sample response model:
For low to intermediate score threshold (0.0-0.5), challenge the end user with multi-factor
authentication through email or SMS.
For the highest score threshold (> 0.5), allow the end user to proceed without
any challenge.
Note: Your score thresholds might vary depending on your users and attackers.
We recommend using the reCAPTCHA analytics dashboard to determine
the best scores to take action on.
When creating assessments, ensure that the value of expectedAction matches the value of action that you specified when
installing the score-based site keys on your web pages.
If they do not match, do not permit authentication.
If end users use web browsers that have JavaScript disabled, do the following:
Block those end users.
Notify the end users that your website requires JavaScript to proceed.
Ensure that the grecaptcha.enterprise.ready promise is fulfilled to prevent
end users' browsers that block Google's script from loading. This indicates
that reCAPTCHA is fully loaded and did not encounter an error.
For web-only APIs, we recommend passing the reCAPTCHA token or reCAPTCHA assessment
result to the backend API, and then only allowing the API action if the reCAPTCHA
token is valid and meets a score threshold value. This ensures that the end
user is not using the API without going through the website.
What's next
Install score-based site keys .
Install checkbox site keys .
Create assessments .
Annotate assessments .
Implement Password defense .
Implement account defender .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
