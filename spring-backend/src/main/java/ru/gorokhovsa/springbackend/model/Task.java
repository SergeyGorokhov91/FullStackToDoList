package ru.gorokhovsa.springbackend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
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
    @JsonProperty("addDate")
    private ZonedDateTime addTime;
    @Column(name = "end_time")
    @JsonProperty("endDate")
    private ZonedDateTime endTime;
    @Column(name = "done")
    private Boolean isaDone;

    public Task() {
    }

    public Task(String taskText, ZonedDateTime addTime, ZonedDateTime endTime, Boolean isaDone) {
        this.taskText = taskText;
        this.addTime = addTime;
        this.endTime = endTime;
        this.isaDone = isaDone;
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

    public Boolean getIsaDone() {
        return isaDone;
    }

    public void setIsaDone(Boolean isaDone) {
        this.isaDone = isaDone;
    }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", taskText='" + taskText + '\'' +
                ", addTime=" + addTime +
                ", endTime=" + endTime +
                ", isaDone=" + isaDone +
                '}';
    }
}
