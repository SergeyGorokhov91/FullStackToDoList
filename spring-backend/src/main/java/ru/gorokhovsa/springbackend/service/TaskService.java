package ru.gorokhovsa.springbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.gorokhovsa.springbackend.model.Task;
import ru.gorokhovsa.springbackend.repository.TaskRepository;

import java.time.ZonedDateTime;
import java.util.List;

@Service
public class TaskService {
    private final TaskRepository repository;

    @Autowired
    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public List<Task> getAllTasks() {
        return repository.findAll();
    }

    public Task save(Task task) {
        return repository.save(task);
    }
}
