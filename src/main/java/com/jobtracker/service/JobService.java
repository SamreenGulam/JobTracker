package com.jobtracker.service;

import com.jobtracker.model.Job;
import com.jobtracker.model.JobStatus;

import java.util.List;
import java.util.Optional;

public interface JobService {
    
    // Create a new job
    Job createJob(Job job);
    
    // Get all jobs
    List<Job> getAllJobs();
    
    // Get job by ID
    Optional<Job> getJobById(Long id);
    
    // Update existing job
    Job updateJob(Long id, Job jobDetails);
    
    // Delete job by ID
    void deleteJob(Long id);
    
    // Get jobs by status
    List<Job> getJobsByStatus(JobStatus status);
    
    // Get jobs by company
    List<Job> getJobsByCompany(String company);
    
    // Search jobs by position keyword
    List<Job> searchJobsByPosition(String keyword);
    
    // Get jobs by company and status
    List<Job> getJobsByCompanyAndStatus(String company, JobStatus status);
    
    // Search jobs by notes content
    List<Job> searchJobsByNotes(String keyword);
    
    // Get job statistics by status
    long getJobCountByStatus(JobStatus status);
    
    // Get jobs ordered by creation date
    List<Job> getJobsOrderedByDate();
    
    // Get jobs ordered by company name
    List<Job> getJobsOrderedByCompany();
}
