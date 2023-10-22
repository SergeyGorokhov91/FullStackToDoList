package ru.gorokhovsa.springbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.gorokhovsa.springbackend.model.Task;
import ru.gorokhovsa.springbackend.service.TaskService;

import java.time.ZonedDateTime;
import java.util.List;


@RestController
@RequestMapping("/api/v1/")
@CrossOrigin
public class TaskController {
    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/tasks")
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PostMapping("/tasks")
    public Task createTask(@RequestBody Task task) {
        return taskService.save(task);
    }

    @GetMapping("/tasks/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id);
    }

}
