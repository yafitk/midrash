package midrash.config.root;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

import midrash.app.security.AjaxAuthenticationSuccessHandler;

/**
 *
 * The Spring Security configuration for the application - its a form login config with authentication via session cookie (once logged in),
 * with fallback to HTTP Basic for non-browser clients.
 *
 * The CSRF token is put on the reply as a header via a filter, as there is no server-side rendering on this app.
 *
 */
@Configuration
@EnableWebSecurity
public class AppSecurityConfig extends WebSecurityConfigurerAdapter {

    private static final Logger LOGGER = Logger.getLogger(AppSecurityConfig.class);

//    @Autowired
//    private SecurityUserDetailsService userDetailsService;

   /* @Autowired
    DataSource dataSource;*/

    @Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
	  auth.inMemoryAuthentication().withUser("mkyong").password("123456").roles("USER");
	  auth.inMemoryAuthentication().withUser("admin@gmail.com").password("123456").roles("ADMIN");
	  auth.inMemoryAuthentication().withUser("dba").password("123456").roles("DBA");
	}

	

    @Override
    protected void configure(HttpSecurity http) throws Exception {
    
    	 http
    	 .csrf().disable()
    	 .authorizeRequests()
 		.antMatchers("/user/**").access("hasRole('ROLE_ADMIN')")
 		.antMatchers("/dba/**").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_DBA')")
 		.and().formLogin() 
 		 .loginProcessingUrl("/authenticate")
         .usernameParameter("username")
         .passwordParameter("password")
         .successHandler(new AjaxAuthenticationSuccessHandler(new SavedRequestAwareAuthenticationSuccessHandler()))

 		
 		.loginPage("/#/login");
    	
    /*	http
    	.csrf().disable()
        .authorizeRequests()
        .antMatchers("*")
        
       .permitAll();*/

      /*  CsrfTokenResponseHeaderBindingFilter csrfTokenFilter = new CsrfTokenResponseHeaderBindingFilter();
        http.addFilterAfter(csrfTokenFilter, CsrfFilter.class);

        http
            .authorizeRequests()
            
            .antMatchers("/books/**").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_DBA')")
    		.and().formLogin()
    		.loginPage("/login/login.html");*/
            
            
           /* .antMatchers("/img/**").permitAll()
            .antMatchers("/bower_components/**").permitAll()
            .antMatchers(HttpMethod.POST, "/user").permitAll()
            .anyRequest().authenticated()
            .and()
            .formLogin()
            .defaultSuccessUrl("/about.html")
            .loginProcessingUrl("/user")
            .usernameParameter("username")
            .passwordParameter("password")
            .successHandler(new AjaxAuthenticationSuccessHandler(new SavedRequestAwareAuthenticationSuccessHandler()))
            .loginPage("/login/login.html")
            .and()
            .httpBasic()
            .and()
            .logout()
            .logoutUrl("/logout")
            .logoutSuccessUrl("/login/login.html")
            .permitAll();*/

        if ("true".equals(System.getProperty("httpsOnly"))) {
            LOGGER.info("launching the application in HTTPS-only mode");
            http.requiresChannel().anyRequest().requiresSecure();
        }
    }
}
