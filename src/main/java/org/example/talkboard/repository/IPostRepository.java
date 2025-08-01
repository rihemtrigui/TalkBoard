package org.example.talkboard.repository;

import org.example.talkboard.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository

public interface IPostRepository extends JpaRepository<Post,Long> {
}
