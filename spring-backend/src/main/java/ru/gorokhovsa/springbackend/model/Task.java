package ru.gorokhovsa.springbackend.model;

import jakarta.persistence.*;

import java.time.ZonedDateTime;


@Entity
@Table(name="task")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "task_text")
    private String taskText;
    @Column(name = "add_time")
    private ZonedDateTime addTime;
    @Column(name = "end_ime")
    private ZonedDateTime endTime;

    public Task() {
    }

    public Task(String task, ZonedDateTime addTime, ZonedDateTime endTime) {
        this.taskText = task;
        this.addTime = addTime;
        this.endTime = endTime;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTaskText() {
        return taskText;
    }

    public void setTaskText(String taskText) {
        this.taskText = taskText;
    }

    public ZonedDateTime getAddTime() {
        return addTime;
    }

    public void setAddTime(ZonedDateTime addTime) {
        this.addTime = addTime;
    }

    public ZonedDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(ZonedDateTime endTime) {
        this.endTime = endTime;
    }
}
