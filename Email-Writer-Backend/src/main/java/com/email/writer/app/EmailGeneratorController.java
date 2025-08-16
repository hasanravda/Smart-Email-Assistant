package com.email.writer.app;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class EmailGeneratorController {

    private final EmailGeneratorService emailGeneratorService;

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest){
        String response = emailGeneratorService.generateEmailReply(emailRequest);
        return ResponseEntity.ok(response);
    }

    @RequestMapping("/")
    @ResponseBody
    public String greet(){
        return """
               {
                 "message": "Hello this is Email Generator - Developed by Hasan Ravda",
                 "endpoint": "/api/email/generate",
                 "method": "POST",
                 "description": "Generate email replies with request body containing 'emailContent' and 'tone' fields",
                 "example": {
                   "emailContent": "Your email content here",
                   "tone": "Professional"
                 },
                 "availableTones": ["Professional", "Friendly", "Casual", "Formal"]
               }""";
    }
    
}
