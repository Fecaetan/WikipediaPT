package simples;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class Artigo {
        String url;            // endere�o do site alvo
        WebDriver driver;     // objeto do Selenium Webdriver

        @Before            // Antes do teste
        public void iniciar() {
           url = "https://pt.wikipedia.org/";
           // Onde est� o Chrome Driver
            System.setProperty("webdriver.chrome.driver", "drivers/chrome/90/chromedriver.exe");
            driver = new ChromeDriver();    // Instancia o Selenium como Chrome Driver

            driver.manage().window().maximize();  // Maximizar a janela do navegador
                // Define uma espera implicita de 1 min, verificando o carregamento a cada milissegundo
            driver.manage().timeouts().implicitlyWait(60000, TimeUnit.MILLISECONDS);



        }

        @Test             // Durante do teste
        public void consultar() {
          // Abrir o site
           driver.get(url);
          // Pesquisar por Ovo de P�scoa
           driver.findElement(By.id("searchInput")). sendKeys("Ovo de P�scoa");
           driver.findElement(By.id("searchButton")).sendKeys(Keys.chord("Ovo de P�scoa") + Keys.ENTER);
          // Validar o titulo da p�gina
            // assertEquals("Ovo de P�scoa - Wikipedia, a enciclop�dia livre", driver.getTitle());
             assertTrue(driver.getTitle().contains("Ovo de P�scoa"));
        }

        @After            // Depois do test
        public void finalizar() {
           driver.quit();
        }

    }
