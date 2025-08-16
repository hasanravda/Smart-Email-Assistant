package com.email.writer.app;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("/api/email")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class EmailGeneratorController {

    private final EmailGeneratorService emailGeneratorService;

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest) {
        String response = emailGeneratorService.generateEmailReply(emailRequest);
        return ResponseEntity.ok(response);
    }

    @RequestMapping("/")
    @ResponseBody
    public String greet() throws IOException {
        // return "Hello this is Email generator - Developed by Hasan Ravda\n Use /generate endpoint to generate email replies with request body containing 'emailContent' and 'tone' fields.";
        InputStream inputStream = getClass().getResourceAsStream("/static/index.html");
        return new String(inputStream.readAllBytes(), StandardCharsets.UTF_8);
    }

}
