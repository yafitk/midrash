package midrash.app.controllers;

import java.security.Principal;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;

//
//import midrash.app.dto.NewUserDTO;
//import midrash.app.dto.UserInfoDTO;
//import midrash.app.model.User;
//import midrash.app.services.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import midrash.app.obj.User;

/**
 *
 *  REST service for users.
 *
 */

@Controller
@RequestMapping("/user")
public class UserController {

    private static final Logger LOGGER = Logger.getLogger(UserController.class);

    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(method = RequestMethod.GET)
    public User getUserInfo(Principal principal,@RequestParam(required=false) String id) {
    	User u = new User();
    	u.setName("yyafit");
    	LOGGER.error("yafit hjhhjjjhjj");
       return u;
    		 
    }
    
    @Autowired private JavaMailSender javaMailSender;
    
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(method = RequestMethod.POST)
    public String create(Principal principal,HttpServletRequest request, @RequestParam(value="id") String identifier) {
    	User u = new User();
    	u.setName(identifier);
    	
            	
    	MimeMessagePreparator preparator = new MimeMessagePreparator() {

            public void prepare(MimeMessage mimeMessage) throws Exception {

                mimeMessage.setRecipient(Message.RecipientType.TO,
                        new InternetAddress("ariel.levi@gmail.com"));
                mimeMessage.setFrom(new InternetAddress("yafity.br@gmail.com"));
                mimeMessage.setText(
                        "Dear ");
            }
        };

        try {
            javaMailSender.send(preparator);
        }
        catch (MailException ex) {
            // simply log it and go on...
            System.err.println(ex.getMessage());
        }
    	
    	//SendMailTLS.send();
    	
    	return "njj";
    	//javaMailSender.send(new SimpleMailMessage().setTo("yafity.br@gmail.com"));
    	
    	
    	
     
    		 
    }

    
}
