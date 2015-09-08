package midrash.config.root;


import java.util.Properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

/**
 *
 * The root context configuration of the application - the beans in this context will be globally visible
 * in all servlet contexts.
 *
 */

@Configuration
@ComponentScan({"midrash.app"})
public class RootContextConfig {	

	   /* @Value("${email.host}")
	    private String host;

	    @Value("${email.port}")
	    private Integer port;*/

	    @Bean
	    public JavaMailSender javaMailService() {
	        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();

	        javaMailSender.setHost("smtp.gmail.com");
	        javaMailSender.setPort(25);
	        javaMailSender.setUsername("yafity.br@gmail.com");
	        javaMailSender.setPassword("yafit*br");

	        javaMailSender.setJavaMailProperties(getMailProperties());

	        return javaMailSender;
	    }

	    private Properties getMailProperties() {
	        Properties props = new Properties();
	       /* properties.setProperty("mail.transport.protocol", "smtp");
	        properties.setProperty("mail.smtp.auth", "true");
	        properties.setProperty("mail.smtp.starttls.enable", "false");
	        properties.setProperty("mail.debug", "false");
	        *//*
	        props.put("mail.smtp.host", "smtp.gmail.com");
	        props.put("mail.from", "yafity.br@gmail.com");
	        props.put("mail.smtp.starttls.enable", "false");
	        props.put("mail.smtp.port", "25");
	        props.setProperty("mail.debug", "true");*/
	        
	        props.setProperty("mail.smtp.auth", "true");
	        props.put("mail.smtp.starttls.enable", "true");
	        props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
	        
	        
	      	        
	        return props;
	    }
	
	
	

  /*  @Bean(name = "transactionManager")
    public PlatformTransactionManager transactionManager(EntityManagerFactory entityManagerFactory,
                                                         DriverManagerDataSource dataSource) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactory);
        transactionManager.setDataSource(dataSource);
        return transactionManager;
    }*/

}
