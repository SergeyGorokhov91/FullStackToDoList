package ru.gorokhovsa.springbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.gorokhovsa.springbackend.repository.TaskRepository;

@Service
public class TaskService {
    private final TaskRepository repository;

    @Autowired
    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

}
