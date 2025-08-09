package com.jobtracker.controller;

import com.jobtracker.model.Job;
import com.jobtracker.model.JobStatus;
import com.jobtracker.service.JobService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/jobs")
@Tag(name = "Job Management", description = "Operations for managing job applications")
@CrossOrigin(origins = "*")
public class JobController {
    
    private static final Logger logger = LoggerFactory.getLogger(JobController.class);
    
    private final JobService jobService;
    
    @Autowired
    public JobController(JobService jobService) {
        this.jobService = jobService;
    }
    
    @Operation(summary = "Create a new job", description = "Add a new job application to the system")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Job created successfully", 
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = Job.class))),
        @ApiResponse(responseCode = "400", description = "Invalid input data", content = @Content)
    })
    @PostMapping
    public ResponseEntity<Job> createJob(@Valid @RequestBody Job job) {
        logger.info("POST /api/jobs - Creating new job for company: {}", job.getCompany());
        Job createdJob = jobService.createJob(job);
        return new ResponseEntity<>(createdJob, HttpStatus.CREATED);
    }
    
    @Operation(summary = "Get all jobs", description = "Retrieve all job applications")
    @ApiResponse(responseCode = "200", description = "Jobs retrieved successfully",
                content = @Content(mediaType = "application/json", schema = @Schema(implementation = Job.class)))
    @GetMapping
    public ResponseEntity<List<Job>> getAllJobs() {
        logger.info("GET /api/jobs - Fetching all jobs");
        List<Job> jobs = jobService.getAllJobs();
        return ResponseEntity.ok(jobs);
    }
    
    @Operation(summary = "Get job by ID", description = "Retrieve a specific job application by its ID")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Job found", 
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = Job.class))),
        @ApiResponse(responseCode = "404", description = "Job not found", content = @Content)
    })
    @GetMapping("/{id}")
    public ResponseEntity<Job> getJobById(
            @Parameter(description = "Job ID", required = true) @PathVariable Long id) {
        logger.info("GET /api/jobs/{} - Fetching job by ID", id);
        Optional<Job> job = jobService.getJobById(id);
        return job.map(ResponseEntity::ok)
                  .orElse(ResponseEntity.notFound().build());
    }
    
    @Operation(summary = "Update job", description = "Update an existing job application")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Job updated successfully", 
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = Job.class))),
        @ApiResponse(responseCode = "404", description = "Job not found", content = @Content),
        @ApiResponse(responseCode = "400", description = "Invalid input data", content = @Content)
    })
    @PutMapping("/{id}")
    public ResponseEntity<Job> updateJob(
            @Parameter(description = "Job ID", required = true) @PathVariable Long id,
            @Valid @RequestBody Job jobDetails) {
        logger.info("PUT /api/jobs/{} - Updating job", id);
        try {
            Job updatedJob = jobService.updateJob(id, jobDetails);
            return ResponseEntity.ok(updatedJob);
        } catch (RuntimeException e) {
            logger.error("Job not found with ID: {}", id);
            return ResponseEntity.notFound().build();
        }
    }
    
    @Operation(summary = "Delete job", description = "Delete a job application")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "204", description = "Job deleted successfully", content = @Content),
        @ApiResponse(responseCode = "404", description = "Job not found", content = @Content)
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(
            @Parameter(description = "Job ID", required = true) @PathVariable Long id) {
        logger.info("DELETE /api/jobs/{} - Deleting job", id);
        try {
            jobService.deleteJob(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            logger.error("Job not found with ID: {}", id);
            return ResponseEntity.notFound().build();
        }
    }
    
    @Operation(summary = "Get jobs by status", description = "Retrieve jobs filtered by status")
    @ApiResponse(responseCode = "200", description = "Jobs retrieved successfully",
                content = @Content(mediaType = "application/json", schema = @Schema(implementation = Job.class)))
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Job>> getJobsByStatus(
            @Parameter(description = "Job status", required = true) @PathVariable JobStatus status) {
        logger.info("GET /api/jobs/status/{} - Fetching jobs by status", status);
        List<Job> jobs = jobService.getJobsByStatus(status);
        return ResponseEntity.ok(jobs);
    }
    
    @Operation(summary = "Get jobs by company", description = "Retrieve jobs filtered by company name")
    @ApiResponse(responseCode = "200", description = "Jobs retrieved successfully",
                content = @Content(mediaType = "application/json", schema = @Schema(implementation = Job.class)))
    @GetMapping("/company/{company}")
    public ResponseEntity<List<Job>> getJobsByCompany(
            @Parameter(description = "Company name", required = true) @PathVariable String company) {
        logger.info("GET /api/jobs/company/{} - Fetching jobs by company", company);
        List<Job> jobs = jobService.getJobsByCompany(company);
        return ResponseEntity.ok(jobs);
    }
    
    @Operation(summary = "Search jobs by position", description = "Search jobs by position keyword")
    @ApiResponse(responseCode = "200", description = "Jobs retrieved successfully",
                content = @Content(mediaType = "application/json", schema = @Schema(implementation = Job.class)))
    @GetMapping("/search/position")
    public ResponseEntity<List<Job>> searchJobsByPosition(
            @Parameter(description = "Position keyword", required = true) @RequestParam String keyword) {
        logger.info("GET /api/jobs/search/position?keyword={} - Searching jobs by position", keyword);
        List<Job> jobs = jobService.searchJobsByPosition(keyword);
        return ResponseEntity.ok(jobs);
    }
    
    @Operation(summary = "Search jobs by notes", description = "Search jobs by notes content")
    @ApiResponse(responseCode = "200", description = "Jobs retrieved successfully",
                content = @Content(mediaType = "application/json", schema = @Schema(implementation = Job.class)))
    @GetMapping("/search/notes")
    public ResponseEntity<List<Job>> searchJobsByNotes(
            @Parameter(description = "Notes keyword", required = true) @RequestParam String keyword) {
        logger.info("GET /api/jobs/search/notes?keyword={} - Searching jobs by notes", keyword);
        List<Job> jobs = jobService.searchJobsByNotes(keyword);
        return ResponseEntity.ok(jobs);
    }
    
    @Operation(summary = "Get job statistics", description = "Get count of jobs by status")
    @ApiResponse(responseCode = "200", description = "Statistics retrieved successfully")
    @GetMapping("/stats/status/{status}")
    public ResponseEntity<Long> getJobCountByStatus(
            @Parameter(description = "Job status", required = true) @PathVariable JobStatus status) {
        logger.info("GET /api/jobs/stats/status/{} - Getting job count by status", status);
        long count = jobService.getJobCountByStatus(status);
        return ResponseEntity.ok(count);
    }
    
    @Operation(summary = "Get jobs ordered by date", description = "Retrieve jobs ordered by creation date (newest first)")
    @ApiResponse(responseCode = "200", description = "Jobs retrieved successfully",
                content = @Content(mediaType = "application/json", schema = @Schema(implementation = Job.class)))
    @GetMapping("/ordered/date")
    public ResponseEntity<List<Job>> getJobsOrderedByDate() {
        logger.info("GET /api/jobs/ordered/date - Fetching jobs ordered by date");
        List<Job> jobs = jobService.getJobsOrderedByDate();
        return ResponseEntity.ok(jobs);
    }
    
    @Operation(summary = "Get jobs ordered by company", description = "Retrieve jobs ordered by company name")
    @ApiResponse(responseCode = "200", description = "Jobs retrieved successfully",
                content = @Content(mediaType = "application/json", schema = @Schema(implementation = Job.class)))
    @GetMapping("/ordered/company")
    public ResponseEntity<List<Job>> getJobsOrderedByCompany() {
        logger.info("GET /api/jobs/ordered/company - Fetching jobs ordered by company");
        List<Job> jobs = jobService.getJobsOrderedByCompany();
        return ResponseEntity.ok(jobs);
    }
}
