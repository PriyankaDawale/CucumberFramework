$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRmpro login smoke scenario",
  "description": "",
  "id": "free-crmpro-login-smoke-scenario",
  "keyword": "Feature"
});
formatter.write("before going to launch the browser set system variable path for browser");
formatter.before({
  "duration": 540575,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "verify  freecrm pro login page with valid credential",
  "description": "",
  "id": "free-crmpro-login-smoke-scenario;verify--freecrm-pro-login-page-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user should be on freecrm pro login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter valid username and Valid user password",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "click on submit btn",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user should be on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_on_freecrm_pro_login_page()"
});
formatter.result({
  "duration": 37626930838,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.enter_valid_username_and_Valid_user_password()"
});
formatter.result({
  "duration": 16056844463,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_on_submit_btn()"
});
formatter.result({
  "duration": 220418963423,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_on_homepage()"
});
formatter.result({
  "duration": 607389043,
  "status": "passed"
});
formatter.after({
  "duration": 315458,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefination.Login1StepDefination.afterMethod(Login1StepDefination.java:32)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.uri("login1.feature");
formatter.feature({
  "line": 1,
  "name": "Free crm pro test login",
  "description": "",
  "id": "free-crm-pro-test-login",
  "keyword": "Feature"
});
formatter.write("before going to launch the browser set system variable path for browser");
formatter.before({
  "duration": 196795,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Parameter testing with valid credentials",
  "description": "",
  "id": "free-crm-pro-test-login;parameter-testing-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open browser As \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to url As \"https://www.crmpro.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter user name As \"Mayuri_257\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter password As \"Mayuri$257\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicked on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user shoukd be on home page \"CRMPRO\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 17
    }
  ],
  "location": "Login1StepDefination.open_browser_As(String)"
});
formatter.result({
  "duration": 11703634018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.crmpro.com",
      "offset": 20
    }
  ],
  "location": "Login1StepDefination.navigate_to_url_As(String)"
});
formatter.result({
  "duration": 19465308895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri_257",
      "offset": 20
    }
  ],
  "location": "Login1StepDefination.enter_user_name_As(String)"
});
formatter.result({
  "duration": 7576921950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri$257",
      "offset": 19
    }
  ],
  "location": "Login1StepDefination.enter_password_As(String)"
});
formatter.result({
  "duration": 10167518957,
  "status": "passed"
});
formatter.match({
  "location": "Login1StepDefination.clicked_on_Login_Button()"
});
formatter.result({
  "duration": 84129673759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 29
    }
  ],
  "location": "Login1StepDefination.user_shoukd_be_on_home_page(String)"
});
formatter.result({
  "duration": 673395461,
  "status": "passed"
});
formatter.after({
  "duration": 3876720858,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": ": Test login frm pro with invalid credentials",
  "description": "",
  "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Open browser As \"\u003cbrowsername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "navigate to url As \"\u003curl\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter user name As \"\u003cUserId\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "enter password As \"\u003cUserPass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "clicked on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user shoukd be on home page \"\u003cTitle\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "browsername",
        "url",
        "UserId",
        "UserPass",
        "Title"
      ],
      "line": 23,
      "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Chrome",
        "https://www.crmpro.com",
        "Mayuri_257",
        "Mayuri$257",
        "CRMPRO"
      ],
      "line": 24,
      "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.write("before going to launch the browser set system variable path for browser");
formatter.before({
  "duration": 159194,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": ": Test login frm pro with invalid credentials",
  "description": "",
  "id": "free-crm-pro-test-login;:-test-login-frm-pro-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Open browser As \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "navigate to url As \"https://www.crmpro.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter user name As \"Mayuri_257\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "enter password As \"Mayuri$257\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "clicked on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user shoukd be on home page \"CRMPRO\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 17
    }
  ],
  "location": "Login1StepDefination.open_browser_As(String)"
});
formatter.result({
  "duration": 10777230962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.crmpro.com",
      "offset": 20
    }
  ],
  "location": "Login1StepDefination.navigate_to_url_As(String)"
});
formatter.result({
  "duration": 21252246784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri_257",
      "offset": 20
    }
  ],
  "location": "Login1StepDefination.enter_user_name_As(String)"
});
formatter.result({
  "duration": 9225255589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri$257",
      "offset": 19
    }
  ],
  "location": "Login1StepDefination.enter_password_As(String)"
});
formatter.result({
  "duration": 11334127188,
  "status": "passed"
});
formatter.match({
  "location": "Login1StepDefination.clicked_on_Login_Button()"
});
formatter.result({
  "duration": 18151411553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 29
    }
  ],
  "location": "Login1StepDefination.user_shoukd_be_on_home_page(String)"
});
formatter.result({
  "duration": 400914438,
  "status": "passed"
});
formatter.after({
  "duration": 5504233779,
  "status": "passed"
});
});