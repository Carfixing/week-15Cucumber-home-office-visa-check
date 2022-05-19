$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("visaConfirmationTest.feature");
formatter.feature({
  "line": 1,
  "name": "visaConfirmationTest",
  "description": "As a User I should able to use functinality of visa confirmation",
  "id": "visaconfirmationtest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3532017500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "an Australian Comin To UK For Tourism",
  "description": "",
  "id": "visaconfirmationtest;an-australian-comin-to-uk-for-tourism",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on StartPage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select the nationality of \"Australia\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select the Select reason \"Tourism\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can verify the  result \"You will not need a visa to come to the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationTest.iAmOnStartPage()"
});
formatter.result({
  "duration": 69792000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iClickOnStartButton()"
});
formatter.result({
  "duration": 266096900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 29
    }
  ],
  "location": "VisaConfirmationTest.iSelectTheNationalityOf(String)"
});
formatter.result({
  "duration": 83729700,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iClickOnContinueButton()"
});
formatter.result({
  "duration": 246667700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tourism",
      "offset": 28
    }
  ],
  "location": "VisaConfirmationTest.iSelectTheSelectReason(String)"
});
formatter.result({
  "duration": 66495100,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iClickOnContinueButton()"
});
formatter.result({
  "duration": 261497900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need a visa to come to the UK",
      "offset": 26
    }
  ],
  "location": "VisaConfirmationTest.iCanVerifyTheResult(String)"
});
formatter.result({
  "duration": 42592000,
  "status": "passed"
});
formatter.after({
  "duration": 688205500,
  "status": "passed"
});
formatter.before({
  "duration": 1487187400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "A Chilean coming to the UK for work and plans on staying for longer than SixMonths",
  "description": "",
  "id": "visaconfirmationtest;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-sixmonths",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@sanity"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on StartPage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select the nationality of \"Chile\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select the Select reason \"Work, academic visit or business\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select intendent to stay for \"longer than 6 months\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select have planning to work for \"Health and care professional\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I can verify result \"You need a visa to work in health and care\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationTest.iAmOnStartPage()"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iClickOnStartButton()"
});
formatter.result({
  "duration": 216214000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chile",
      "offset": 29
    }
  ],
  "location": "VisaConfirmationTest.iSelectTheNationalityOf(String)"
});
formatter.result({
  "duration": 56423500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iClickOnContinueButton()"
});
formatter.result({
  "duration": 236952300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work, academic visit or business",
      "offset": 28
    }
  ],
  "location": "VisaConfirmationTest.iSelectTheSelectReason(String)"
});
formatter.result({
  "duration": 75589000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iClickOnContinueButton()"
});
formatter.result({
  "duration": 245275300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "longer than 6 months",
      "offset": 32
    }
  ],
  "location": "VisaConfirmationTest.iSelectIntendentToStayFor(String)"
});
formatter.result({
  "duration": 49255900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iClickOnContinueButton()"
});
formatter.result({
  "duration": 239156000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health and care professional",
      "offset": 36
    }
  ],
  "location": "VisaConfirmationTest.iSelectHavePlanningToWorkFor(String)"
});
formatter.result({
  "duration": 63174300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iClickOnContinueButton()"
});
formatter.result({
  "duration": 297369900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need a visa to work in health and care",
      "offset": 21
    }
  ],
  "location": "VisaConfirmationTest.iCanVerifyResult(String)"
});
formatter.result({
  "duration": 31094000,
  "status": "passed"
});
formatter.after({
  "duration": 674388200,
  "status": "passed"
});
formatter.before({
  "duration": 1646117600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": ".A columbian national coming to the UK Tt join a partner for a longStay they do have an article 10Or20Card",
  "description": "",
  "id": "visaconfirmationtest;.a-columbian-national-coming-to-the-uk-tt-join-a-partner-for-a-longstay-they-do-have-an-article-10or20card",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@smoke"
    },
    {
      "line": 28,
      "name": "@sanity"
    },
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on StartPage",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I select the nationality of \"Colombia\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select the Select reason \"Join partner or family for a long stay\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select  state My partner of family member have uk immigration status \"yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I can verify result \"You’ll need a visa to join your family or partner in the UK\"",
  "keyword": "And "
});
formatter.match({
  "location": "VisaConfirmationTest.iAmOnStartPage()"
});
formatter.result({
  "duration": 20800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iClickOnStartButton()"
});
formatter.result({
  "duration": 200092500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colombia",
      "offset": 29
    }
  ],
  "location": "VisaConfirmationTest.iSelectTheNationalityOf(String)"
});
formatter.result({
  "duration": 61723200,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iClickOnContinueButton()"
});
formatter.result({
  "duration": 255240300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Join partner or family for a long stay",
      "offset": 28
    }
  ],
  "location": "VisaConfirmationTest.iSelectTheSelectReason(String)"
});
formatter.result({
  "duration": 110658900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iClickOnContinueButton()"
});
formatter.result({
  "duration": 242895200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 72
    }
  ],
  "location": "VisaConfirmationTest.iSelectStateMyPartnerOfFamilyMemberHaveUkImmigrationStatus(String)"
});
formatter.result({
  "duration": 18988100,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iClickOnContinueButton()"
});
formatter.result({
  "duration": 204138800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You’ll need a visa to join your family or partner in the UK",
      "offset": 21
    }
  ],
  "location": "VisaConfirmationTest.iCanVerifyResult(String)"
});
formatter.result({
  "duration": 40069597600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[@class\u003d\u0027gem-c-heading gem-c-heading--font-size-27 govuk-!-margin-bottom-6\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-H45VDFL\u0027, ip: \u0027192.168.0.21\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c0fe45218a53802e119f44a6d2b8047e, findElement {using\u003dxpath, value\u003d//h2[@class\u003d\u0027gem-c-heading gem-c-heading--font-size-27 govuk-!-margin-bottom-6\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55083}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55083/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c0fe45218a53802e119f44a6d2b8047e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat gov.uk.check.visa.utility.Utility.getTextFromElement(Utility.java:64)\r\n\tat gov.uk.check.visa.pages.ResultPage.getResultMessage(ResultPage.java:27)\r\n\tat gov.uk.check.visa.steps.VisaConfirmationTest.iCanVerifyResult(VisaConfirmationTest.java:60)\r\n\tat ✽.And I can verify result \"You’ll need a visa to join your family or partner in the UK\"(visaConfirmationTest.feature:38)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 843296900,
  "status": "passed"
});
});