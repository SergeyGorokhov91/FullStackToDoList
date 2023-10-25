package ru.gorokhovsa.springbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import ru.gorokhovsa.springbackend.model.Task;
import ru.gorokhovsa.springbackend.repository.TaskRepository;

import java.lang.module.ResolutionException;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        if(task.getIsaDone() == null) task.setIsaDone(false);
        return repository.save(task);
    }

    public ResponseEntity<Task> getTaskById(Long id) {
        Task task = repository
                .findById(id)
                .orElseThrow(() -> new ResolutionException("Task not exist with id: " + id));
        return ResponseEntity.ok(task);
    }

    public ResponseEntity<Task> updateTask(Long id, Task taskDetails) {
        System.out.println(taskDetails);
        Task task = repository
                .findById(id)
                .orElseThrow(() -> new ResolutionException("Task not exist with id: " + id));
        task.setTaskText(taskDetails.getTaskText());
        if (taskDetails.getEndTime() != null) task.setEndTime(taskDetails.getEndTime());
        task.setIsaDone(taskDetails.getIsaDone());
        Task updatedTask = repository.save(task);
        return ResponseEntity.ok(updatedTask);
    }

    public ResponseEntity<Map<String,Boolean>> deleteTask(Long id) {
        Task task = repository
                .findById(id)
                .orElseThrow(() -> new ResolutionException("Task not exist with id: " + id));
        repository.delete(task);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    public ResponseEntity<List<Task>> findByTaskTextContaining(String searchText) {
        List<Task> list = repository.findByTaskTextContaining(searchText);
        return ResponseEntity.ok(list);
    }
}