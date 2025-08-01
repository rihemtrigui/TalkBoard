package org.example.talkboard.service;

import org.example.talkboard.post.Post;
import org.example.talkboard.repository.IPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class PostServiceImpl implements IPostService{

    @Autowired
    private IPostRepository postRepository;

    public Post savePost(Post post){
        post.setLikeCount(0);
        post.setViewCount(0);
        post.setDate(new Date());
        return postRepository.save(post);
    }

};
