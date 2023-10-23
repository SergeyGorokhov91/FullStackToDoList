package ru.gorokhovsa.springbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.gorokhovsa.springbackend.model.Task;
import ru.gorokhovsa.springbackend.service.TaskService;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Map;


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

    @PutMapping("/tasks/{id}")
    public ResponseEntity<Task> updateTask(
            @PathVariable Long id,
            @RequestBody Task taskDetails) {
        return taskService.updateTask(id,taskDetails);
    }

    @DeleteMapping("/tasks/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteTask(@PathVariable Long id) {
        return taskService.deleteTask(id);
    }

}
