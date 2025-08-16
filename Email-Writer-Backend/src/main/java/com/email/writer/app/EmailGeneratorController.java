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
        return "Hello this is Email generator - Developed by Hasan Ravda";
    }


}
