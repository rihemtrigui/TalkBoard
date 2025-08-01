package org.example.talkboard.controller;


import org.example.talkboard.post.Post;
import org.example.talkboard.service.IPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*")
public class Controller {

    @Autowired
    private IPostService postService;

    @PostMapping
    ResponseEntity<Post> createPost(@RequestBody Post post) {
        try {
            Post createdPost = postService.savePost(post);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}