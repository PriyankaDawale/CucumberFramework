package myTestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\CucumberFrameworkProject\\src\\main\\java\\features\\login.feature",
		glue={"stepDefination"}		
		)

public class LoginTestRunner {

	
	
}
