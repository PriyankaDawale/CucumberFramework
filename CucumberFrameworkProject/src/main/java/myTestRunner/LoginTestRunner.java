package myTestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\Shree\\git\\CucumberFramework\\CucumberFrameworkProject\\Feature",
		glue={"stepDefination"},
		format={"html:test-outout\\cucumber_report"}
		)

public class LoginTestRunner {	
	
}
